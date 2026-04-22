# Blissful Burn Design System

A comprehensive component library and design token system for building consistent, on-brand experiences across all Blissful Burn digital products.

## 📁 Structure

```
components/
├── buttons/
│   └── Button.tsx          # Reusable button component
├── icons/
│   └── Icons.tsx           # Icon library with all brand icons
└── cards/
    └── (future card components)

styles/
├── tokens.ts               # Design tokens (colors, typography, spacing)
└── (future additional style files)

DESIGN_SYSTEM.md            # This file
```

## 🎨 Colors

All colors are defined in `styles/tokens.ts` and available via CSS variables in `app/globals.css`.

### Brand Colors
- **Primary Pink**: `#f7a7b8` - Use for primary CTAs and highlights
- **Dusty Mauve**: `#ebc2c7` - Use for hover states and secondary accents
- **Nude Beige**: `#dcc7b4` - Use for tertiary accents

### Neutrals
- **Background**: `#faf6f0` - Page background
- **Surface**: `#ffffff` - Cards and containers
- **Foreground**: `#1a1a1a` - Primary text
- **Muted**: `#777777` - Secondary text
- **Light Grey**: `#e6e6e6` - Borders

## 📝 Typography

### Font Sizes
```
xs  = 10px   (secondary labels)
sm  = 11px   (buttons, small text)
base= 15px   (body text)
lg  = 30px   (accent logo)
xl  = 38px   (mobile headlines)
2xl = 48px   (desktop headlines)
```

### Font Families
- **Body**: Poppins (sans-serif)
- **Accent**: Great Vibes (script font for logo)

### Letter Spacing
- Default tracking: 0.05em
- Headings: 0.22em
- Buttons: 0.06em

## 🔘 Buttons

Use the reusable `Button` component from `components/buttons/Button.tsx`.

### Primary Button
```jsx
import { Button } from '@/components/buttons/Button';

<Button variant="primary">SHOP COLLECTION</Button>
```
**Styling**: Solid pink background, white text, hover to dusty mauve
- Padding: 10px 20px
- Border radius: 10px
- Letter spacing: 0.06em

### Secondary Button
```jsx
<Button variant="secondary">OUR STORY</Button>
```
**Styling**: Transparent with border, text darkens on hover to pink
- Padding: 8px 16px
- Border: 1px solid light-grey
- Hover: Border and text change to primary-pink

## 🎯 Icons

All icons are in `components/icons/Icons.tsx` with consistent styling.

### Available Icons
- `BagIcon` - Shopping bag
- `HeartIcon` - Heart/favorite
- `DropIcon` - Water drop/liquid
- `SparkIcon` - Spark/quality
- `SearchIcon` - Magnifying glass
- `ChevronRightIcon` - Right arrow
- `StarIcon` - Star rating
- `CloseIcon` - X/close
- `MenuIcon` - Hamburger menu

### Icon Sizes
```jsx
import { HeartIcon } from '@/components/icons/Icons';

<HeartIcon size="sm" />  // h-3 w-3 (small)
<HeartIcon size="md" />  // h-4 w-4 (medium - default)
<HeartIcon size="lg" />  // h-5 w-5 (large)
```

### Icon Styling
- Stroke width: 1.6 (thin, elegant lines)
- Colors: Inherit text color (use `text-primary-pink` etc. on parent)
- Baseline: All icons follow the same stroke weight and visual weight

## 🎬 Sections & Components

### Hero Section
```jsx
<section className="hero-section">
  <div className="hero-visual">
    {/* background and shapes */}
  </div>
  <div className="hero-content">
    <h1 className="hero-headline">FIND YOUR<br />CALM.</h1>
    <p className="hero-description">Copy here...</p>
    <Button variant="primary">CTA</Button>
  </div>
</section>
```

### Products Grid
```jsx
<section className="products-section">
  <h2 className="section-title">FEATURED CANDLES</h2>
  <div className="products-grid">
    {products.map(product => (
      <article className="product-card">
        <div className="product-image" style={{ background: gradient }} />
        <p className="product-name">{name}</p>
        <p className="product-note">{note}</p>
        <p className="product-price">{price}</p>
        <Button variant="secondary">QUICK ADD</Button>
      </article>
    ))}
  </div>
</section>
```

### Values Section
```jsx
<section className="values-section">
  <div className="values-grid">
    <div className="value-item">
      <div className="icon-badge">
        <HeartIcon />
      </div>
      <p className="value-title">Hand Poured</p>
      <p className="value-subtitle">in Small Batches</p>
    </div>
  </div>
</section>
```

### About Section
```jsx
<section className="about-section">
  <div className="about-visual">
    <div className="about-image" />
  </div>
  <div className="about-content">
    <h3 className="about-title">ABOUT BLISSFULBURN</h3>
    <p className="about-description">Description...</p>
    <Button variant="secondary">OUR STORY</Button>
  </div>
</section>
```

## 🎨 Gradients

Pre-defined gradients for candle displays:

```jsx
// In styles/tokens.ts
import { gradients } from '@/styles/tokens';

<div style={{ background: gradients.lavender }}>...</div>
```

Available gradients:
- `lavender` - Cream to dusty pink
- `cherryBlossom` - White to bright pink
- `birthdayCake` - Cream to nude beige
- `sunburstMelon` - White to dusty pink

## 📏 Spacing System

Consistent spacing scale:
```
xs  = 4px
sm  = 8px
md  = 12px
lg  = 16px
xl  = 24px
2xl = 32px
3xl = 48px
```

### Common Page Margins
- Mobile: px-4 (16px sides)
- Tablet: px-7 (28px sides)
- Desktop: px-10 (40px sides)

### Section Padding
- Small sections: py-8 to py-10
- Large sections: py-12 to py-14

## 🔄 Transitions

Use consistent transitions for smooth interactions:
```
fast = 0.15s ease   (hover states, quick feedback)
base = 0.25s ease   (default transitions)
slow = 0.35s ease   (complex animations)
```

## 📱 Responsive Design

### Breakpoints
- Mobile: 320px
- Tablet: 640px (sm:)
- Desktop: 1024px (lg:)
- Wide: 1200px

### Common Patterns

**Header**
- Mobile: h-[74px], px-5
- Desktop: h-[82px], px-10

**Hero Section**
- Mobile: Single column, min-h-[380px]
- Desktop: Two columns, grid-cols-[1.06fr_0.94fr]

**Products Grid**
- Mobile: 2 columns
- Desktop: 4 columns

## 🚀 Usage Examples

### Creating a New Page

```jsx
import { Button } from '@/components/buttons/Button';
import { HeartIcon, BagIcon } from '@/components/icons/Icons';
import { colors, spacing } from '@/styles/tokens';

export default function MyPage() {
  return (
    <main className="page-container">
      <div className="page-wrapper">
        {/* Your content */}
      </div>
    </main>
  );
}
```

### Accessing Design Tokens

```jsx
import { colors, typography, spacing, gradients } from '@/styles/tokens';

// Use in styled components or inline
style={{ 
  color: colors.primaryPink,
  padding: spacing.lg,
  background: gradients.lavender
}}
```

## 📚 CSS Classes Reference

All styling is defined through Tailwind classes in `app/globals.css`:

### Layout Classes
- `.page-container` - Main page wrapper
- `.page-wrapper` - Card-like container
- `.site-header` - Header with navigation
- `.hero-section`, `.products-section`, `.values-section`, `.about-section` - Section containers

### Component Classes
- `.button`, `.button-primary`, `.button-secondary` - Buttons
- `.icon-svg`, `.icon-badge` - Icons
- `.product-card`, `.product-image`, `.product-name`, `.product-price` - Product display
- `.value-item`, `.value-title`, `.value-subtitle` - Value proposition items

### Text Classes
- `.hero-headline`, `.hero-description` - Hero text
- `.section-title` - Section headers
- `.about-title`, `.about-description` - About section text

## 🎯 Best Practices

1. **Use Components**: Always use the `Button` component instead of creating button elements
2. **Consistent Colors**: Reference `colors` from tokens instead of hardcoding hex values
3. **Icon Sizing**: Use `size` prop instead of applying custom sizing
4. **Spacing**: Use spacing tokens for margins and padding
5. **Responsive**: Use Tailwind's responsive prefixes (sm:, lg:, etc.)
6. **Gradients**: Use predefined gradients from `tokens.ts` for candle displays

## 📞 Component Updates

When adding new components:
1. Create in `components/[type]/ComponentName.tsx`
2. Document in this file with examples
3. Update `styles/tokens.ts` if adding new design values
4. Keep consistent with existing patterns

---

**Last Updated**: 2026
**Brand**: Blissful Burn
