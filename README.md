# Ranjan Kumar Singh — Developer Portfolio

A responsive, multi-page portfolio built with HTML, CSS, and vanilla JavaScript.

## Pages
- `index.html` — Home
- `about.html` — About
- `skills.html` — Skills
- `projects.html` — Projects
- `education.html` — Education
- `experience.html` — Experience
- `achievements.html` — Achievements and training
- `contact.html` — Contact form and contact links

## Folder structure
```text
ranjan-portfolio/
├── index.html
├── about.html
├── skills.html
├── projects.html
├── education.html
├── experience.html
├── achievements.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── profile.png
│   ├── Ranjanresume.pdf
│   └── certificates/
│       ├── python-programming-reliance-foundation.pdf
│       ├── python-programming-skill-india.pdf
│       ├── sql-for-beginners-scaler.jpg
│       └── information-security-analyst-nasscom.pdf
└── README.md
```

## Run locally
1. Extract the ZIP file.
2. Open the folder in VS Code.
3. Recommended: install the **Live Server** extension.
4. Right-click `index.html` and select **Open with Live Server**.
5. Use the navigation to test every page and resize the browser to test mobile layout.

You can also open `index.html` directly in a browser, but Live Server is better for development.

## Personalise before publishing
1. Your uploaded portrait is saved as `assets/profile.png`.
2. Your uploaded résumé is saved as `assets/Ranjanresume.pdf` and linked from the home page.
3. Certificate downloads are linked from `achievements.html`; the NIELIT certificate file was not included in the uploads.
3. Verify every certificate title and add credential verification links where available.
4. Review whether you want your phone number displayed publicly. It is currently included because it was supplied for the portfolio.
5. Update project details as you create more work. Do not add unbuilt projects as completed.
6. Test every external link and check the site on a phone.

## Contact form limitation
This is a static website. The contact form opens the visitor's default email application with the message prefilled; it does **not** send messages directly or store submissions. To collect messages without requiring an email app, connect a form service or build a backend and protect it against spam.

## Deploy to Vercel
1. Create a GitHub repository and upload the contents of this folder (the HTML files should be at the repository root).
2. Sign in to Vercel and choose **Add New → Project**.
3. Import the repository.
4. For a plain static site, choose **Other** as the framework preset if prompted. No build command is needed; leave the output directory blank or set it to `.` if the dashboard requires a value.
5. Deploy. Vercel serves each HTML file at its own path, for example `/projects.html`.
6. After deployment, open the production URL and test every page, image, contact link, and mobile navigation.

## Design notes
- Black/charcoal base with electric yellow highlights.
- Separate HTML document per page; shared CSS and JS keep the site consistent.
- Responsive mobile navigation and reduced-motion support.
- Google Fonts are loaded online; system fallback fonts are used if unavailable.
