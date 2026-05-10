<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the Skild TanStack Start project. Here is a summary of all changes made:

- **`@posthog/react` and `posthog-node`** installed as dependencies.
- **`src/routes/__root.tsx`** — wrapped the app with `PostHogProvider` (inside `<body>`, outside `ClerkProvider`) using environment variables for the API key and host. `capture_exceptions: true` enables automatic error tracking. A reverse proxy path (`/ingest`) is used so analytics requests go through the local dev server.
- **`src/utils/posthog-server.ts`** — created a singleton server-side PostHog client using `posthog-node`, used by any future API routes.
- **`src/components/skill-card.tsx`** — added `usePostHog` hook; captures `skill_install_command_copied` (with skill title, category, and command) when the copy button is clicked, and `skill_card_opened` (with skill title and category) when the Open link is clicked.
- **`src/routes/index.tsx`** — added `usePostHog` hook; captures `browse_registry_clicked` and `publish_skill_clicked` on the hero section CTAs.
- **`vite.config.ts`** — added a reverse proxy for PostHog ingestion (`/ingest`, `/ingest/static`, `/ingest/array`) pointing to the EU region endpoints.
- **`.env`** — set `VITE_PUBLIC_POSTHOG_PROJECT_TOKEN` and `VITE_PUBLIC_POSTHOG_HOST` (EU region).

## Events

| Event | Description | File |
|-------|-------------|------|
| `skill_install_command_copied` | User clicks the copy button on a skill card to copy the install command | `src/components/skill-card.tsx` |
| `skill_card_opened` | User clicks the Open link on a skill card | `src/components/skill-card.tsx` |
| `browse_registry_clicked` | User clicks the 'Browse Registry' CTA on the hero section of the homepage | `src/routes/index.tsx` |
| `publish_skill_clicked` | User clicks the 'Publish Skill' CTA on the homepage hero section | `src/routes/index.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- **Dashboard — Analytics basics**: https://eu.posthog.com/project/175847/dashboard/670971
- **Skill Install Command Copies (Daily)**: https://eu.posthog.com/project/175847/insights/gLAjjBUF
- **Homepage CTA Conversion Funnel** (Browse Registry → Install Copied): https://eu.posthog.com/project/175847/insights/6cDEgPr5
- **Publish Skill Intent** (daily unique users): https://eu.posthog.com/project/175847/insights/OoA3LA9p
- **Most Popular Skills by Install Copies**: https://eu.posthog.com/project/175847/insights/EiPvrCHr
- **Skill Engagement Overview** (all events on one chart): https://eu.posthog.com/project/175847/insights/vKMtdDcH

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
