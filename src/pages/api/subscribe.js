export const prerender = false;

export async function GET() {
  const apiKey = import.meta.env.BUTTONDOWN_API_KEY;

  if (!apiKey) {
    return new Response(JSON.stringify({ count: null }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const res = await fetch('https://api.buttondown.com/v1/subscribers?status=active', {
      headers: {
        Authorization: `Token ${apiKey}`,
      },
    });

    if (!res.ok) {
      return new Response(JSON.stringify({ count: null }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const data = await res.json();
    return new Response(JSON.stringify({ count: data.count }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch {
    return new Response(JSON.stringify({ count: null }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function POST({ request }) {
  const { email } = await request.json();

  if (!email || !email.includes('@')) {
    return new Response(JSON.stringify({ error: 'Valid email required.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const apiKey = import.meta.env.BUTTONDOWN_API_KEY;

  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'Server misconfiguration.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const res = await fetch('https://api.buttondown.com/v1/subscribers', {
    method: 'POST',
    headers: {
      Authorization: `Token ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email_address: email, tags: ['cyberplain'] }),
  });

  // 400 = already subscribed — treat as success with friendly message
  if (res.status === 400) {
    return new Response(JSON.stringify({ message: 'Already subscribed!' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (!res.ok) {
    const body = await res.text();
    console.error('Buttondown error', res.status, body);
    return new Response(JSON.stringify({ error: 'Could not subscribe. Please try again.' }), {
      status: 502,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify({ message: "You're in! 🎉" }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}