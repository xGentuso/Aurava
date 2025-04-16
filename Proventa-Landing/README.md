# Proventa Landing Page

A modern, responsive landing page for Proventa - a revolutionary health platform that predicts and prevents health issues before they appear.

## Features

- 🎨 Modern, clean design with smooth animations
- 📱 Fully responsive layout
- ⚡ Fast performance with Next.js
- 🔒 Secure form handling with Formspree
- ♿ Accessible components
- 🎯 SEO optimized
- 🔍 Error boundary implementation
- ⏳ Loading states and suspense

## Tech Stack

- [Next.js 14](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [AOS](https://michalsnik.github.io/aos/) - Scroll animations
- [Formspree](https://formspree.io/) - Form handling
- [React Intersection Observer](https://react-intersection-observer.vercel.app/) - Scroll-based animations

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/proventa-landing.git
   cd proventa-landing
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file:
   ```
   NEXT_PUBLIC_FORMSPREE_FORM_ID=your_formspree_id
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
proventa-landing/
├── app/
│   ├── components/     # React components
│   ├── constants/      # Constants and data
│   ├── types/         # TypeScript types
│   ├── layout.tsx     # Root layout
│   └── page.tsx       # Home page
├── public/            # Static assets
└── styles/           # Global styles
```

## Components

- `Hero` - Main hero section with CTA
- `About` - About section with features
- `ComparisonSection` - Feature comparison
- `WaitlistForm` - Email collection form
- `Navigation` - Site navigation
- `ErrorBoundary` - Error handling

## Development

### Code Style

- Use TypeScript for type safety
- Follow React best practices
- Use Tailwind CSS for styling
- Implement proper error handling
- Add loading states for async operations

### Performance

- Images are optimized
- Components are lazy loaded
- Animations are performance-optimized
- Proper caching strategies

### Accessibility

- ARIA labels
- Keyboard navigation
- Screen reader support
- Color contrast compliance

## Deployment

The site is deployed on Vercel. To deploy:

1. Push to your repository
2. Connect to Vercel
3. Configure environment variables
4. Deploy

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

- Email: ryan.mota@triosstudent.com
- Twitter: [@proventa](https://twitter.com/proventa)
- GitHub: [ryancodes](https://github.com/ryancodes)
