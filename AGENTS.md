<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules
- Site content (nav, services, solutions, DASHIFY features + status, articles, founders, footer) lives in `src/data/site.ts`; pages read from it so copy changes stay in one place.
- Forms go through `src/lib/enquiry.ts` (`sendEnquiry`); it returns `not_configured` until a real backend/email service is wired, so the UI never fakes a sent message.
- Per-route SEO uses `seo()` from `src/lib/seo.ts`; never put og:image on __root.
- Logo in `src/components/layout/Logo.tsx` is a temporary mark until the official BRIZNOVA/DASHIFY files are supplied.
