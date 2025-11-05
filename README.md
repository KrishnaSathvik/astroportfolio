# Astrophotography Portfolio Website

A modern, responsive portfolio website showcasing astrophotography work built with React, TypeScript, Tailwind CSS, and Vite.

## Features

- **Home Page**: Beautiful card-based gallery displaying all astrophotography images with category filtering
- **About Page**: Artist statement, equipment info, techniques, and experience
- **Contact Page**: Contact information, social media links, and collaboration inquiries
- **Modern Design**: Dark theme with cosmic colors, smooth animations, and responsive layout
- **Fast Performance**: Built with Vite for optimal loading times

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **React Router** - Navigation

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Deployment to Vercel

1. Push your code to a GitHub repository
2. Go to [Vercel](https://vercel.com) and sign in
3. Click "New Project" and import your repository
4. Vercel will automatically detect Vite and configure the build settings
5. Click "Deploy"

The site will be live at your Vercel URL!

## Customization

### Adding Your Images

Replace the sample images in `src/pages/Home.tsx` with your own:

1. Add your images to `public/images/` directory
2. Update the `astroImages` array with your image paths and metadata

### Updating Content

- **About Page**: Edit `src/pages/About.tsx` to update your artist statement and info
- **Contact Page**: Edit `src/pages/Contact.tsx` to update contact information
- **Colors**: Modify `tailwind.config.js` to customize the color scheme

## Project Structure

```
astro-portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   └── ImageCard.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   └── Contact.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── vercel.json
```

## License

MIT

