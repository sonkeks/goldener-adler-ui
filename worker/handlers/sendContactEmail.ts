interface contactMail {
  from: string,
  firstName: string,
  lastName: string,
  message: string,
}

interface Env {
  RESEND_API_KEY: string;
  // Add other environment variables here
}

export async function sendContactEmail(request: Request, env: unknown) {
  const typedEnv = env as Env;
  try {
    const body: contactMail = await request.json();
    const { from, firstName, lastName, message } = body;
    
    if (!from || !firstName || !lastName || !message) {
      return new Response(JSON.stringify({ error: "Missing parameters" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }
    
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${typedEnv.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from,
        to: "soenke.schaarschmidt@gmx.de",
        subject: `Neue Nachricht von ${firstName} ${lastName}`,
        html: JSON.stringify(message),
      }),
    });
    
    const data = await response.json();
    
    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
