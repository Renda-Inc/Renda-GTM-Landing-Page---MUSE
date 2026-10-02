# Architecture decisions

- Keep route files as page compositions and place independently stateful sections in `src/components/<feature>/` so visual sections can be maintained without coupling to routing.
- Keep shared static blog, help, and legal content in `src/data/`, not route modules, so other routes can import content without importing a page.
- Keep scroll visibility behavior in reusable hooks under `src/hooks/` so presentation components remain focused on rendering.
- Use strict TypeScript in the application to catch unsafe assumptions before changes reach the preview.
