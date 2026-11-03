import { createFileRoute } from "@tanstack/react-router";
import { ARTICLES } from "@/data/site";

const PATHS = ["/", "/about", "/solutions", "/products", "/products/dashify", "/technology", "/industries", "/insights", "/careers", "/contact", "/privacy", "/terms", "/cookies", "/data-protection"];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: ({ request }) => {
        const origin = new URL(request.url).origin;
        const urls = [...PATHS, ...ARTICLES.map((a) => `/insights/${a.slug}`)];
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map((u) => `<url><loc>${origin}${u}</loc></url>`).join("")}</urlset>`;
        return new Response(xml, { headers: { "Content-Type": "application/xml" } });
      },
    },
  },
});
