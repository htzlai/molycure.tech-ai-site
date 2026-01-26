# NovaTech - NVIDIA-Inspired Website Template

A stunning, modern website template featuring a dynamic nebula particle background, inspired by NVIDIA's build.nvidia.com design aesthetic. Built with Next.js 14+, Tailwind CSS, and Framer Motion.

## Features

- **Dynamic Nebula Background** - Canvas-based particle animation system with:
  - Floating particles with varying sizes and opacity
  - Subtle twinkling/pulsing effects
  - Particle connection lines for network effect
  - Performance-optimized with requestAnimationFrame

- **Multi-layer Gradient System** - CSS gradient masks creating depth and atmosphere

- **Comprehensive Design System** - CSS variables for easy customization:
  - Primary and accent colors (Blue theme by default)
  - Typography scale
  - Spacing and border radius tokens
  - Animation timing

- **Responsive UI Components**:
  - Card, Button, Badge, Input, Textarea
  - NavBar with mobile menu
  - Footer with social links

- **5 Complete Pages**:
  - **Home** - Hero section, features grid, stats, CTA
  - **Products** - Filterable product cards
  - **About** - Timeline, team, values
  - **Contact** - Form with validation
  - **Blog** - Article cards with search

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Customization

### Brand Colors

Edit `src/app/globals.css` to change the color scheme:

```css
:root {
  --color-primary: #30B4FF;      /* Main brand color */
  --color-accent: #7C8FFE;       /* Secondary accent */
  --color-bg-dark: #0a0a0f;      /* Background */
  --color-bg-card: #12121a;      /* Card background */
}
```

### Particle Configuration

Modify `src/lib/particles.ts`:

```typescript
const defaultConfig = {
  count: 120,              // Number of particles
  minRadius: 1.5,          // Min particle size
  maxRadius: 4,            // Max particle size
  colors: ['#30B4FF', '#7C8FFE', '#ffffff'],  // Particle colors
  connectionDistance: 180, // Max distance for connection lines
};
```

### Company Information

Update these files:
- `src/app/layout.tsx` - Site metadata
- `src/components/layout/NavBar.tsx` - Logo and navigation
- `src/components/layout/Footer.tsx` - Links and social icons

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Language**: TypeScript

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with background
│   ├── page.tsx            # Home page
│   ├── products/page.tsx   # Products page
│   ├── about/page.tsx      # About page
│   ├── contact/page.tsx    # Contact page
│   └── blog/page.tsx       # Blog page
├── components/
│   ├── backgrounds/
│   │   ├── NebulaCanvas.tsx    # Particle animation
│   │   └── GradientMask.tsx    # Gradient overlays
│   ├── layout/
│   │   ├── NavBar.tsx          # Navigation
│   │   └── Footer.tsx          # Footer
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Badge.tsx
│       ├── Input.tsx
│       └── Textarea.tsx
├── lib/
│   └── particles.ts        # Particle system class
└── styles/
    └── globals.css         # Design tokens & utilities
```

## Performance

- Particle count auto-scales based on screen size
- Uses `requestAnimationFrame` for smooth 60fps animation
- Static page generation for fast initial load
- Optimized images with Next.js Image component

## License

MIT License - Feel free to use for personal or commercial projects.

---

Built with ❤️ inspired by NVIDIA's design language.
