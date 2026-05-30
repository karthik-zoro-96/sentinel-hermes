export const prerender = false;

export async function POST({ request }) {
  const { email } = await request.json();

  if (!email || !email.includes('@')) {
    return new Response(JSON.stringify({ error: 'Valid email required.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const apiKey = import.meta.env.BUTTONDOWN_API_KEY;

  const res = await fetch('https://app.buttondown.email/api/v1/subscribers', {
    method: 'POST',
    headers: {
      Authorization: `Token ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, tags: ['cyberplain'] }),
  });

  if (res.status === 400) {
    return new Response(JSON.stringify({ message: "You're in!" }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (!res.ok) {
    return new Response(JSON.stringify({ error: 'Could not subscribe.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify({ message: "You're in!" }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}