/**
 * Component Library Exports
 * 
 * Import all components from this single file for cleaner imports:
 * import { Button, BagIcon } from '@/components';
 */

// Buttons
export { Button } from './buttons/Button';

// Cart
export { CartProvider, useCart } from './cart/CartContext';
export { AddToCartButton } from './cart/AddToCartButton';
export { CartLink } from './cart/CartLink';

// Layout
export { SiteHeader } from './layout/SiteHeader';
export { SiteFooter } from './layout/SiteFooter';

// Icons
export {
  HomeIcon,
  BagIcon,
  HeartIcon,
  DropIcon,
  SparkIcon,
  SearchIcon,
  ChevronRightIcon,
  StarIcon,
  CloseIcon,
  MenuIcon,
} from './icons/Icons';
