# Turnstone LTD Website

A modern, lightweight website for Turnstone LTD built with plain HTML, CSS, and JavaScript. Hosted on GitHub Pages with custom domain support.

## 🌐 Live Site

- **Production**: [turnstone.ltd](https://turnstone.ltd)
- **GitHub Pages**: [thomasjgalia.github.io/turnstone](https://thomasjgalia.github.io/turnstone)

## 📁 Project Structure

```
turnstone/
├── index.html          # Home page
├── about.html          # About page
├── services.html       # Services/Projects showcase
├── contact.html        # Contact page
├── css/
│   ├── main.css       # Core styles and design system
│   └── responsive.css # Responsive media queries
├── js/
│   └── main.js        # Interactive elements
├── assets/
│   └── images/        # Images, logos, icons
├── CNAME              # Custom domain configuration
└── README.md          # This file
```

## 🚀 Features

- **Modern Minimal Design**: Clean, professional aesthetic with generous whitespace
- **Fully Responsive**: Mobile-first design that works on all devices
- **Fast Loading**: No dependencies, pure HTML/CSS/JS for optimal performance
- **SEO Friendly**: Semantic HTML5 and proper meta tags
- **Interactive Navigation**: Smooth scrolling and mobile menu
- **Flexible Content**: Easy to customize and extend

## 🛠️ Local Development

### View Locally

Since this is a static website, you can open the HTML files directly in your browser:

1. Navigate to the project directory
2. Open `index.html` in your web browser

### Using a Local Server (Recommended)

For a better development experience, use a local server:

**Option 1: Python**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Option 2: Node.js (http-server)**
```bash
npx http-server -p 8000
```

**Option 3: VS Code Live Server**
- Install the "Live Server" extension
- Right-click on `index.html` and select "Open with Live Server"

Then visit `http://localhost:8000` in your browser.

## 📦 Deployment to GitHub Pages

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository named `turnstone`
2. Make it public (required for free GitHub Pages)

### Step 2: Push Code to GitHub

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit - Turnstone LTD website"

# Add remote repository
git remote add origin https://github.com/thomasjgalia/turnstone.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** > **Pages** (in the left sidebar)
3. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
4. Click **Save**
5. GitHub will start building your site
6. After a few minutes, your site will be live at `https://thomasjgalia.github.io/turnstone`

## 🌐 Custom Domain Setup (turnstone.ltd)

### Step 1: Configure DNS in Cloudflare

1. Log in to your [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Select your domain `turnstone.ltd`
3. Go to **DNS** > **Records**
4. Add the following DNS records:

**A Records** (for apex domain):
```
Type: A
Name: @
Content: 185.199.108.153
TTL: Auto
Proxy: DNS only (gray cloud)

Type: A
Name: @
Content: 185.199.109.153
TTL: Auto
Proxy: DNS only (gray cloud)

Type: A
Name: @
Content: 185.199.110.153
TTL: Auto
Proxy: DNS only (gray cloud)

Type: A
Name: @
Content: 185.199.111.153
TTL: Auto
Proxy: DNS only (gray cloud)
```

**CNAME Record** (for www subdomain):
```
Type: CNAME
Name: www
Content: thomasjgalia.github.io
TTL: Auto
Proxy: DNS only (gray cloud)
```

5. Click **Save** for each record

### Step 2: Enable Custom Domain in GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** > **Pages**
3. Under **Custom domain**, enter: `turnstone.ltd`
4. Click **Save**
5. Wait for DNS check to complete (may take a few minutes)
6. Once verified, check **Enforce HTTPS** (recommended)

### Step 3: Wait for DNS Propagation

- DNS changes can take 24-48 hours to fully propagate
- You can check DNS status using tools like:
  - [DNS Checker](https://dnschecker.org)
  - [What's My DNS](https://www.whatsmydns.net)

### Step 4: Verify SSL Certificate

- GitHub Pages automatically provides free SSL certificates via Let's Encrypt
- Once DNS is configured, GitHub will automatically generate an SSL certificate
- This may take a few hours after DNS verification

## 🔗 Linking Vercel Deployments

To link your Vercel applications via subdomains (e.g., `app.turnstone.ltd`):

### Step 1: Add CNAME Record in Cloudflare

1. In Cloudflare DNS settings, add a new record:
```
Type: CNAME
Name: app (or your desired subdomain)
Content: cname.vercel-dns.com
TTL: Auto
Proxy: DNS only (gray cloud)
```

### Step 2: Configure Domain in Vercel

1. Go to your Vercel project dashboard
2. Navigate to **Settings** > **Domains**
3. Add domain: `app.turnstone.ltd`
4. Vercel will verify the DNS configuration
5. Once verified, your app will be accessible at the subdomain

### Example Subdomains

- `app.turnstone.ltd` → Main application
- `dashboard.turnstone.ltd` → Admin dashboard
- `api.turnstone.ltd` → API backend
- `docs.turnstone.ltd` → Documentation

## 📝 Customization Guide

### Update Content

- **Company Name/Logo**: Edit the `.logo` text in each HTML file
- **Contact Email**: Update email in [contact.html](contact.html)
- **Services**: Modify cards in [services.html](services.html)
- **About Information**: Edit content in [about.html](about.html)

### Add Images

1. Place images in `assets/images/` directory
2. Reference them in HTML:
```html
<img src="assets/images/your-image.jpg" alt="Description">
```

### Customize Colors

Edit CSS variables in [css/main.css](css/main.css):
```css
:root {
  --color-accent: #2563eb;        /* Change accent color */
  --color-primary: #1a1a1a;       /* Change text color */
  /* ... more variables ... */
}
```

### Add Contact Form Backend

The contact form currently uses client-side validation only. To enable email delivery:

**Option 1: Formspree**
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**Option 2: Netlify Forms**
```html
<form name="contact" method="POST" data-netlify="true">
```

**Option 3: Custom Backend**
- Create a serverless function in Vercel
- Update form action to point to your API endpoint

## 🧪 Testing Checklist

- [ ] All pages load correctly
- [ ] Navigation links work on all pages
- [ ] Mobile menu toggles properly on small screens
- [ ] Responsive design works on mobile, tablet, and desktop
- [ ] Forms validate correctly (if enabled)
- [ ] All links open properly (internal and external)
- [ ] Images load correctly
- [ ] Custom domain resolves to the site
- [ ] SSL certificate is active (HTTPS works)
- [ ] Cross-browser compatibility (Chrome, Firefox, Safari, Edge)

## 🔧 Maintenance

### Updating Content

1. Edit the relevant HTML files
2. Test locally
3. Commit and push changes:
```bash
git add .
git commit -m "Update [description of changes]"
git push origin main
```

4. GitHub Pages will automatically rebuild and deploy (usually takes 1-2 minutes)

### Adding New Pages

1. Create new HTML file (e.g., `blog.html`)
2. Copy header/footer from existing pages
3. Add navigation link to all pages
4. Update sitemap if you have one

## 📊 Analytics (Optional)

To add analytics, insert the tracking code before the closing `</head>` tag in all HTML files:

**Google Analytics:**
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

**Plausible Analytics** (Privacy-friendly):
```html
<script defer data-domain="turnstone.ltd" src="https://plausible.io/js/script.js"></script>
```

## 🐛 Troubleshooting

### Site Not Loading After Deployment

- Check GitHub Pages status in repository settings
- Verify DNS records in Cloudflare
- Wait for DNS propagation (up to 48 hours)
- Check browser console for errors

### Custom Domain Not Working

- Verify CNAME file contains only `turnstone.ltd` (no http:// or www)
- Check DNS records are correctly configured
- Ensure Cloudflare proxy is disabled (gray cloud, not orange)
- Try clearing browser cache and DNS cache

### Mobile Menu Not Working

- Check browser console for JavaScript errors
- Ensure `js/main.js` is loading correctly
- Verify all HTML files have the correct script tag

## 📄 License

© 2024 Turnstone LTD. All rights reserved.

## 🤝 Support

For questions or support, contact: [info@turnstone.ltd](mailto:info@turnstone.ltd)

---

Built with ❤️ using plain HTML, CSS, and JavaScript.
