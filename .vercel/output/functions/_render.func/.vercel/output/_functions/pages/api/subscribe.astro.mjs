export { renderers } from '../../renderers.mjs';

const prerender = false;
async function POST({ request }) {
  const { email } = await request.json();
  if (!email || !email.includes("@")) {
    return new Response(JSON.stringify({ error: "Valid email required." }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }
  const apiKey = "3a9df09a-a9d3-4835-89ee-c5095144eb32";
  const res = await fetch("https://app.buttondown.email/api/v1/subscribers", {
    method: "POST",
    headers: {
      Authorization: `Token ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, tags: ["cyberplain"] })
  });
  if (res.status === 400) {
    return new Response(JSON.stringify({ message: "You're in!" }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  }
  if (!res.ok) {
    return new Response(JSON.stringify({ error: "Could not subscribe." }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
  return new Response(JSON.stringify({ message: "You're in!" }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
