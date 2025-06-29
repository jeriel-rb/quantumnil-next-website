# Quantum NIL Website

This is the official website for Quantum NIL, built with [Next.js](https://nextjs.org) and featuring advanced Nanoimprint Lithography (NIL) technology solutions.

## Features

- 🌐 Multi-language support (English, Japanese, Simplified Chinese, Traditional Chinese)
- 📱 Responsive design for all devices
- 🎨 Modern and interactive UI with animations
- 🔍 SEO optimized
- 📊 Google Analytics integration (production only)
- 🚀 Fast performance with Next.js App Router

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS, SCSS
- **Animation**: GSAP, Framer Motion
- **Internationalization**: next-i18next
- **Package Manager**: Yarn

## Getting Started

1. **Clone the repository**

```bash
git clone https://gitlab.com/roundbytes/quantumnil-website.git
cd quantumnil-website/frontend
```

2. **Install dependencies**

```bash
yarn install
```

3. **Run development server**

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
frontend/
├── app/                    # Next.js app directory
│   ├── [locale]/          # Internationalized routes
│   └── api/               # API routes
├── components/            # React components
│   ├── layout/           # Layout components
│   ├── page/             # Page-specific components
│   └── shared/           # Shared components
├── locales/              # Translation files
│   ├── en-US/           # English translations
│   ├── ja-JP/           # Japanese translations
│   ├── zh-CN/           # Simplified Chinese translations
│   └── zh-TW/           # Traditional Chinese translations
├── public/               # Static files
└── styles/              # Global styles
```

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
NEXT_PUBLIC_API_URL=your_api_url
```

## Available Scripts

- `yarn dev` - Run development server
- `yarn build` - Build for production
- `yarn start` - Start production server
- `yarn lint` - Run ESLint

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Submit a merge request

## Deployment

The website is automatically deployed to Vercel when changes are pushed to the main branch.

## License

All rights reserved © Quantum NIL
