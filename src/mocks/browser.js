import { setupWorker } from "msw/browser";
import { handlers } from "./handler";

export const worker = setupWorker(...handlers);
worker.events.on('request:start', async ({ request }) => {
  // Read the request body as text for every request
  // that occurs in your application.
  const payload = await request.clone().text()
});

worker.events.on('request:start', ({ request }) => {
  console.log('Outgoing:', request.method, request.url)
});

