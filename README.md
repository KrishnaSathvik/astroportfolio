# AstroByKrishna - Astrophotography Portfolio

A modern, responsive portfolio website showcasing astrophotography work by Krishna Sathvik Mantripragada. Built with React, TypeScript, Tailwind CSS, and Vite, deployed on Vercel.

🌐 **Live Site**: [astrobykrishna.com](https://astrobykrishna.com)

## ✨ Features

- **Image Gallery**: Beautiful card-based gallery with 6 images per page pagination
- **Category Filtering**: Filter images by orientation (Vertical, Horizontal) or technique (Light Paint)
- **Location Display**: Each image shows its capture location with full National Park names
- **Responsive Design**: Fully responsive across all devices with mobile-optimized pagination
- **About Page**: Comprehensive artist statement, equipment details, techniques, and journey
- **Contact Form**: Integrated EmailJS contact form that sends emails directly to Gmail
- **SEO Optimized**: Complete meta tags, Open Graph, Twitter Cards, sitemap, and robots.txt
- **Modern UI**: Light theme with smooth animations, Geist font, and elegant card designs

## 🛠️ Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **EmailJS** - Contact form email service
- **Vercel** - Deployment platform

## 📦 Installation

```bash
npm install
```

## 🚀 Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## 🔨 Build

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## 📧 EmailJS Setup

The contact form uses EmailJS to send emails directly to your Gmail inbox.

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Connect your Gmail account
3. Create an email template (see `email-template.html` for reference)
4. Copy your Service ID, Template ID, and Public Key
5. Create a `.env` file in the root directory:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

See `EMAILJS_SETUP.md` for detailed setup instructions.

## 🖼️ Image Management

### Image Format

- **Web Format**: All images should be in JPG/PNG format (browsers don't support TIFF)
- **TIFF Files**: TIFF files are excluded from git via `.gitignore` to keep repository size small
- **Conversion**: Use the provided `convert-tiff-to-web.sh` script to convert TIFF files to JPG

### Adding Images

1. Add your images to `public/images/` directory (JPG/PNG format)
2. Update the `astroImages` array in `src/pages/Home.tsx` with:
   - Image path
   - Title
   - Description
   - Category (Vertical, Horizontal, Light Paint, or Aurora)
   - Location (full National Park name)

### Image Data Structure

```typescript
{
  id: number,
  title: string,
  description: string,
  imageUrl: string,
  category: 'Vertical' | 'Horizontal' | 'Light Paint' | 'Aurora',
  location?: string
}
```

## 🎨 Customization

### Updating Content

- **Home Page**: Edit `src/pages/Home.tsx` to update image gallery
- **About Page**: Edit `src/pages/About.tsx` to update artist information
- **Contact Page**: Edit `src/pages/Contact.tsx` to update contact details
- **Navbar**: Edit `src/components/Navbar.tsx` to update navigation

### Styling

- **Colors**: Modify `tailwind.config.js` for color scheme
- **Fonts**: Update font imports in `index.html` and `tailwind.config.js`
- **Animations**: Customize animations in `src/index.css`

## 📁 Project Structure

```
astro-portfolio/
├── public/
│   ├── images/          # Image assets (JPG/PNG only)
│   ├── site.webmanifest # PWA manifest
│   ├── robots.txt       # SEO robots file
│   └── sitemap.xml      # SEO sitemap
├── src/
│   ├── components/
│   │   ├── Navbar.tsx   # Navigation bar
│   │   └── ImageCard.tsx # Image card component
│   ├── pages/
│   │   ├── Home.tsx     # Gallery page with pagination
│   │   ├── About.tsx    # About page
│   │   └── Contact.tsx  # Contact page with form
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # Entry point
│   ├── index.css        # Global styles
│   └── vite-env.d.ts    # Vite environment types
├── .env.example          # Environment variables template
├── .gitignore           # Git ignore rules (includes TIFF files)
├── index.html           # HTML template with SEO meta tags
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── vercel.json          # Vercel deployment config
└── README.md
```

## 🌐 Deployment to Vercel

1. **Push to GitHub**: Ensure your code is pushed to GitHub
   ```bash
   git push origin main
   ```

2. **Connect to Vercel**:
   - Go to [Vercel](https://vercel.com) and sign in
   - Click "New Project" and import your GitHub repository
   - Vercel will automatically detect Vite and configure build settings

3. **Environment Variables**:
   - Add your EmailJS credentials in Vercel's environment variables section:
     - `VITE_EMAILJS_SERVICE_ID`
     - `VITE_EMAILJS_TEMPLATE_ID`
     - `VITE_EMAILJS_PUBLIC_KEY`

4. **Deploy**: Click "Deploy"

The site will be live at your Vercel URL! You can also configure a custom domain.

## 🔍 SEO Features

- Meta tags (title, description, keywords, author)
- Open Graph tags for social media sharing
- Twitter Card tags
- Sitemap.xml for search engines
- Robots.txt for crawler instructions
- Canonical URLs
- Structured data ready

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 Key Features

### Pagination
- Shows 6 images per page
- Mobile-responsive pagination with ellipsis for many pages
- Previous/Next navigation
- Page number buttons

### Categories
- **Vertical**: Portrait-oriented images
- **Horizontal**: Landscape-oriented images
- **Light Paint**: Light painting techniques
- **Aurora**: Northern lights captures

### Image Cards
- Full image display without cropping
- Title and description
- Location with 📍 icon
- Category badge
- Smooth animations

## 📄 License

MIT

## 👤 Author

**Krishna Sathvik Mantripragada**

- Website: [astrobykrishna.com](https://astrobykrishna.com)
- Instagram: [@astrobykrishna](https://www.instagram.com/astrobykrishna/)
- Email: astrobykrishna@gmail.com

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
