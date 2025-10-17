import {sendContactEmail} from "./handlers/sendContactEmail.ts";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    if (url.pathname.startsWith("/api/contact") && request.method === "POST") {
      return sendContactEmail(request, env);
    }
    
    return new Response(null, { status: 404 });
  },
} satisfies ExportedHandler;
