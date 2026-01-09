# WebTrion Dynamic Components - Implementation Guide

## Overview
The header, footer, and mobile menu have been converted into **reusable JavaScript components** that are dynamically injected into the DOM. This eliminates code duplication and makes maintenance easier.

---

## File Structure

### **Main Component File**
**Location:** `assets/js/components.js`

This file contains three main functions:

#### 1. **renderHeader()**
- Returns HTML string for the header
- Desktop navigation menu with links to Home, About Us, What We Do, Our Works, and Contact Us
- "Let's Talk" CTA button (desktop only)
- Mobile menu toggle button
- Logo that links to index.html

#### 2. **renderMobileMenu()**
- Returns HTML string for the mobile/offcanvas menu
- Bootstrap offcanvas component with ID: `mobileMenu`
- Navigation menu items (same as desktop)
- Social media follow links (Facebook, Instagram, X/Twitter, GitHub)
- Dynamically populated menu (id: `wrapper-menu-navigation`)

#### 3. **renderFooter()**
- Returns HTML string for the footer
- Video background (Smartphone.mp4)
- WebTrion logo
- Call-to-action section: "Let's Build a High-Impact Digital Presence"
- "Start Your Project" button linking to Contact Us page

#### 4. **initializeComponents()**
- Initializes and injects all components into the DOM
- Called automatically when the page loads
- Inserts:
  - Header at the beginning of `<body>`
  - Mobile menu before the first `<script>` tag
  - Footer after the `<main>` tag

---

## Integration

### **Pages Using Components**

#### ✅ **index.html**
- ✓ Header removed (will be injected by JS)
- ✓ Mobile menu removed (will be injected by JS)
- ✓ Footer removed (will be injected by JS)
- ✓ `components.js` script added before `main.js`

#### ✅ **Contact-us.html**
- ✓ Header removed (will be injected by JS)
- ✓ Mobile menu removed (will be injected by JS)
- ✓ `components.js` script added before `main.js`

---

## How It Works

### **Load Order**
```
1. HTML Page Loads
2. DOM Ready
3. components.js executes
4. renderHeader() → Header injected at top of body
5. renderMobileMenu() → Mobile menu injected before scripts
6. renderFooter() → Footer injected after main tag
7. Bootstrap & jQuery initialize offcanvas
8. main.js executes (populates navigation dynamically)
```

### **Dynamic Menu Population**
The `main.js` file still handles populating the mobile menu dynamically. It targets the `#wrapper-menu-navigation` UL element, which is now created by `renderMobileMenu()`.

---

## Benefits

✅ **Single Source of Truth** - Header, footer, menu maintained in one file
✅ **No Code Duplication** - Both pages use the same components
✅ **Easy Maintenance** - Update header/footer in one place
✅ **Scalability** - Easy to add new pages with same components
✅ **Consistent UI** - Ensures all pages have identical header/footer
✅ **Separation of Concerns** - HTML structure separated from page content

---

## Script Inclusion

Both pages now include the components script:

```html
<script src="assets/js/components.js"></script>
```

This must load **before** `main.js` to ensure components are available when `main.js` executes.

---

## Responsive Design

### **Desktop**
- Full navigation menu visible (d-none d-lg-block)
- Logo links to home
- "Let's Talk" button visible
- Mobile menu toggle hidden

### **Mobile/Tablet**
- Desktop menu hidden
- Mobile menu accessible via hamburger button
- Same navigation items in offcanvas menu
- Social links displayed in mobile menu

---

## Browser Compatibility

✓ All modern browsers (Chrome, Firefox, Safari, Edge)
✓ Bootstrap 5+ (Offcanvas component)
✓ jQuery 3.x
✓ Vanilla JavaScript (ES6)

---

## Future Enhancements

Potential improvements:
- Create additional utility functions for sub-menus
- Add active page highlighting in navigation
- Implement smooth scroll anchors
- Add language switcher component
- Create reusable CTA button component

---

## Testing Checklist

- [ ] Header displays correctly on both pages
- [ ] Mobile menu toggles on click
- [ ] Navigation links work properly
- [ ] Footer appears on both pages
- [ ] Social links open in new tabs
- [ ] Responsive behavior works on mobile/tablet
- [ ] No console errors in browser
- [ ] All links point to correct pages

---

## Notes

- The components assume all pages are in the root directory
- If you need different nav links per page, modify `renderHeader()` to accept parameters
- The footer "Start Your Project" button links to Contact-us.html
- Mobile menu items use the same structure as desktop menu for consistency

