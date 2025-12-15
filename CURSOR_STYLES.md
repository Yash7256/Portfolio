# Custom Cursor Styles Documentation

This document explains the different custom cursor styles available in your portfolio and how to use them.

## Available Cursor Styles

### 1. Default Style (Dot with Ring)
A circular dot cursor with an expanding ring on hover. This is the default style.

![Default Cursor](https://placehold.co/100x50?text=Dot+Ring)

Features:
- Small green dot that follows the mouse
- Expands to a larger circle with outer ring on hover
- Uses mix-blend-mode for better visibility on different backgrounds

### 2. Minimal Style (Small Dot)
A minimalistic small dot cursor without any hover effects.

![Minimal Cursor](https://placehold.co/100x50?text=Small+Dot)

Features:
- Very subtle 2px dot
- Simple and clean
- No hover effects

### 3. Ring Style (Hollow Circle)
A hollow circular cursor that expands on hover.

![Ring Cursor](https://placehold.co/100x50?text=Hollow+Circle)

Features:
- 2px border circular cursor
- Expands on hover
- Clean and modern look

### 4. Trailing Style (Multiple Dots)
Multiple dots that trail behind the cursor creating a motion effect.

![Trailing Cursor](https://placehold.co/100x50?text=Trail+Dots)

Features:
- 8 dots trailing behind the cursor
- Each dot fades out progressively
- Creates a smooth motion trail effect

### 5. Neon Style (Glowing Circle)
A glowing circular cursor with neon light effects on hover.

![Neon Cursor](https://placehold.co/100x50?text=Glow+Circle)

Features:
- Solid green circle
- Glowing neon effect on hover
- Box-shadow based glow effect

## How to Switch Between Styles

### Method 1: Via State (Programmatic)
In your App.tsx, you can change the cursor style by updating the `cursorStyle` state:

```typescript
// Change to minimal style
setCursorStyle('minimal');

// Change to ring style
setCursorStyle('ring');

// Change to trailing style
setCursorStyle('trailing');

// Change to neon style
setCursorStyle('neon');

// Back to default
setCursorStyle('default');
```

### Method 2: Via URL Parameter
You can also switch cursor styles by adding a query parameter to your URL:

```
https://yourportfolio.com/?cursor=minimal
https://yourportfolio.com/?cursor=ring
https://yourportfolio.com/?cursor=trailing
https://yourportfolio.com/?cursor=neon
https://yourportfolio.com/?cursor=default
```

## Elements That Trigger Hover Effects

By default, the following elements will trigger the hover effect:
- Buttons (`<button>`)
- Links (`<a>`)
- Form inputs (`<input>`, `<textarea>`, `<select>`)
- Elements with the `cursor-hover` class

To make any element trigger the hover effect, simply add the `cursor-hover` class:

```html
<div className="cursor-hover">This element triggers cursor hover</div>
```

## Customization

All cursor styles now use the same gradient colors as your "Get in Touch" button:
- Primary color: `violet-600` (#7c3aed)
- Secondary color: `purple-500` (#a855f7)

You can customize the colors by modifying the components in `src/components/CustomCursor.tsx`.

Each cursor style is implemented as a separate component within the file, making it easy to modify individual styles without affecting others.

## Performance Notes

- All cursors use Framer Motion for smooth animations
- The trailing cursor uses an array of positions with a maximum of 8 elements
- Event listeners are properly cleaned up to prevent memory leaks
- The cursor is rendered at the highest z-index to ensure visibility

## Browser Compatibility

These custom cursors work in all modern browsers that support:
- CSS custom properties
- CSS transforms
- CSS transitions
- JavaScript ES6+
- Framer Motion library

For older browsers, the cursor will gracefully fall back to the default browser cursor.