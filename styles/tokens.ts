/**
 * Blissful Burn Design System Tokens
 * 
 * This file contains all design tokens for the Blissful Burn brand.
 * Use these values for consistency across all pages and components.
 */

// ============================================
// COLOR PALETTE
// ============================================

export const colors = {
  // Neutrals
  background: '#faf6f0',      // Cream/Off-white background
  surface: '#ffffff',         // White surface
  foreground: '#1a1a1a',      // Charcoal text
  muted: '#777777',           // Gray for secondary text
  lightGrey: '#e6e6e6',       // Light border color

  // Brand Colors
  primaryPink: '#f7a7b8',     // Rose pink (primary CTA)
  dustyPink: '#ebc2c7',       // Dusty mauve (hover states)
  nudeBeige: '#dcc7b4',       // Nude beige (secondary accents)
  
  // Semantic
  success: '#6b9080',
  error: '#d97c6f',
  warning: '#d4a574',
};

// ============================================
// TYPOGRAPHY
// ============================================

export const typography = {
  fontFamily: {
    sans: 'var(--font-poppins, sans-serif)',
    accent: 'var(--font-great-vibes, cursive)',
  },
  
  // Font sizes
  fontSize: {
    xs: '10px',
    sm: '11px',
    base: '15px',
    lg: '30px',
    xl: '38px',
    '2xl': '48px',
  },
  
  // Font weights
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  
  // Line heights
  lineHeight: {
    tight: 1.04,
    normal: 1.35,
    relaxed: 1.45,
    loose: 1.7,
  },
};

// ============================================
// SPACING
// ============================================

export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '24px',
  '2xl': '32px',
  '3xl': '48px',
};

// ============================================
// BORDER RADIUS
// ============================================

export const borderRadius = {
  none: '0',
  sm: '4px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  full: '9999px',
  pill: '10px',  // Blissful Burn standard button radius
};

// ============================================
// SHADOWS
// ============================================

export const shadows = {
  sm: '0 2px 4px rgba(0, 0, 0, 0.04)',
  md: '0 4px 8px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 30px rgba(0, 0, 0, 0.06)',
  xl: '0 20px 40px rgba(0, 0, 0, 0.08)',
};

// ============================================
// BREAKPOINTS
// ============================================

export const breakpoints = {
  mobile: '320px',
  tablet: '640px',
  desktop: '1024px',
  wide: '1200px',
};

// ============================================
// TRANSITIONS
// ============================================

export const transitions = {
  fast: '0.15s ease',
  base: '0.25s ease',
  slow: '0.35s ease',
};

// ============================================
// GRADIENTS
// ============================================

export const gradients = {
  lavender: 'linear-gradient(160deg, #FAF6F0, #EBC2C7)',
  cherryBlossom: 'linear-gradient(160deg, #FFFFFF, #F7A7B8)',
  birthdayCake: 'linear-gradient(160deg, #FAF6F0, #DCC7B4)',
  sunburstMelon: 'linear-gradient(160deg, #FFFFFF, #EBC2C7)',
  heroLight: 'linear-gradient(155deg, #FFFFFF, #FAF6F0)',
  shapeSoft: 'linear-gradient(165deg, #FAF6F0, #EBC2C7)',
  shapePink: 'linear-gradient(165deg, #FFFFFF, #F7A7B8)',
  shapeBeige: 'linear-gradient(165deg, #FFFFFF, #DCC7B4)',
};
