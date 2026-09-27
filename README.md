# STEADWIN GROUP

Responsive STEADWIN GROUP interiors website on the existing Vinext/React application, with 15 separate pages.

Run the existing npm scripts to develop and build the application.

- The supplied final STEADWIN symbol is reused without redrawing.
- Services cover complete residential and commercial interiors, electrical and plumbing, painting and POP, granite and tiles, internet/networking and CCTV, glass and aluminium, railings, skylights and office glass partitions.
- Phone: +91 87926 95400. Email: info@steadwin.in. Office address: Second Floor, 26, Puttenahalli Rd, Puttenahalli, JP Nagar 7th Phase, J. P. Nagar, Bengaluru, Karnataka 560078.
- The enquiry form includes project type (Residential/Commercial), selected services and project details in a WhatsApp message. The visitor must review and send it in WhatsApp. No enquiry is stored on this website.
- Gallery images are generated design concepts, labeled as inspiration, not photographs of completed company projects.
- Pages: Home, About, Services, Residential, Commercial, Gallery, Contact, and eight service detail pages.
- Every page has a collapsible right-side Contact us rail with WhatsApp, phone and office location shortcuts. On phones it starts collapsed to keep content clear.
- Contact information, service content and page metadata live in `app/lib/site-data.ts`. Page layouts are in `app/components/pages.tsx`; shared navigation, footer and contact rail are in `app/components/site.tsx`.
- The contact form preserves service and project-type selections passed from other pages.
- Menu, contact rail, enquiry form and gallery interactions are in `public/app.js`.

## Portable website export

After installing the source dependencies, run `node scripts/export-static.cjs /absolute/output/folder` to render the same page components as ordinary HTML. The export includes all 15 routes, local styles, JavaScript, images and a 404 page. Relative links work in nested folders and when opening `index.html` directly.

The downloadable ZIP has a root `package.json` and `preview.mjs` that run the exported website with `npm run dev`, without installing packages. Edit `READY-TO-UPLOAD` for that preview. React/Vinext source development stays inside `SOURCE-CODE`; its existing scripts require Bash and Node.js 22.13 or newer.
