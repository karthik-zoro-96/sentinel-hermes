const handler = async (req) => {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed.' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  let email;
  try {
    const body = JSON.parse(req.body);
    email = body.email;
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid request.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  if (!email || !email.includes('@')) {
    return new Response(JSON.stringify({ error: 'Valid email required.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const apiKey = process.env.BUTTONDOWN_API_KEY;

  const res = await fetch('https://app.buttondown.email/api/v1/subscribers', {
    method: 'POST',
    headers: {
      'Authorization': `Token ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, tags: ['cyberplain'] }),
  });

  if (!res.ok) {
    const text = await res.text();
    if (res.status === 400 && text.includes('already subscribed')) {
      return new Response(JSON.stringify({ message: "You're in!" }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    return new Response(JSON.stringify({ error: 'Could not subscribe. Try again.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  return new Response(JSON.stringify({ message: "You're in!" }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
};

module.exports = handler;