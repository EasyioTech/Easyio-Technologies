import { createRouteHandler } from "uploadthing/next";
import { ourFileRouter } from "./core";

// Export routes for Next App Router
export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,
  config: {
    token: process.env.UPLOADTHING_TOKEN,
  },
});

console.log('[UploadThing] Route handler initialized. Token present:', !!process.env.UPLOADTHING_TOKEN);
if (process.env.UPLOADTHING_TOKEN?.startsWith('fal')) {
  console.error('[UploadThing] WARNING: UPLOADTHING_TOKEN seems to contain a fal.ai key!');
}
