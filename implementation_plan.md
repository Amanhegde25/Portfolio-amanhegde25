# Portfolio Design Overhaul — Fixing All Criticism Issues

Based on the [critisizm.md](file:///d:/codes/Aman-Portfolio/critisizm.md) review (score: 54/100), this plan addresses all issues in priority order.

---

## Priority 1 — Hero / Conversion Clarity (Fixes #1, #2, #3, #4, #15)

### [MODIFY] [Hero.tsx](file:///d:/codes/Aman-Portfolio/app/components/Hero.tsx)

**Goal:** First screen must immediately answer: *Who are you + What do you do + Why care + What to click.*

Changes:
- **Swap CTA priority**: Make **"Let's Work Together"** (→ `#contact`) the primary gradient button; make **"View Projects"** the secondary outline button
- **Add a value proposition line** below the role: *"I build modern web, mobile & AI applications that solve real-world problems."* — strong, scannable text
- **Add a proof bar** below CTAs: `6+ Projects · Full-Stack · React · Node.js · Python · AI` — short credibility summary
- **Mobile hero optimizations:**
  - Shrink the hexagon photo wrapper to **160–180px** on mobile (currently 300px)
  - Set H1 to **28–32px** on mobile (currently `text-4xl` = 36px)
  - Reduce hero top padding to **24px**, bottom to **32px** on mobile
  - Ensure the primary CTA appears within the first **~620px** of the viewport
  - Stack layout: Name → Role → Value prop → CTA → social icons → small photo (on mobile)

### [MODIFY] [globals.css](file:///d:/codes/Aman-Portfolio/app/globals.css)

- Update `.hero-hexagon-wrapper` mobile size from `300×340` → `170×190` for mobile

---

## Priority 2 — Mobile Layout & Content Density (Fixes #5, #6, #14)

### [MODIFY] [globals.css](file:///d:/codes/Aman-Portfolio/app/globals.css)

- Update `.section-pad` to use **48–64px** mobile padding (currently `py-16` = 64px ✅ already close, fine-tune to `py-12 md:py-[88px]`)
- The desktop spacing (`88px`) from the previous fix is good

### [MODIFY] [About.tsx](file:///d:/codes/Aman-Portfolio/app/components/About.tsx)

- Increase body text from default (`text-base`) to `text-[15px] md:text-base` for readability
- Add `max-w-[36ch]` on mobile paragraphs to keep line length at ~30–36 characters
- Tighten mobile card gap to `gap-3` (already correct ✅)

### [MODIFY] [Skills.tsx](file:///d:/codes/Aman-Portfolio/app/components/Skills.tsx)

- On mobile, reduce the description text density — shorter paragraphs
- Mobile grid: 2 columns → keep, but add `gap-3` instead of `gap-y-5 gap-x-4` on mobile

### [MODIFY] [Experience.tsx](file:///d:/codes/Aman-Portfolio/app/components/Experience.tsx)

- Add mobile card padding adjustment (`p-5 md:p-7`)
- Increase bullet text size from `text-sm` to `text-[15px]`

### [MODIFY] [Achievements.tsx](file:///d:/codes/Aman-Portfolio/app/components/Achievements.tsx)

- Add default card shadow and reduce mobile padding from `p-8` to `p-5 md:p-8`
- Add mobile grid gap of `16px`

### [MODIFY] [Contact.tsx](file:///d:/codes/Aman-Portfolio/app/components/Contact.tsx)

- Touch target: increase contact link icon containers from `h-9 w-9` to `h-11 w-11` on mobile
- Form submit button: ensure min-height of **48px** for comfortable tap target

---

## Priority 3 — Typography & Color Contrast (Fixes #7, #8)

### [MODIFY] [globals.css](file:///d:/codes/Aman-Portfolio/app/globals.css)

- Boost `--muted` from `#9a9ab0` → `#b0b0c8` (better contrast against dark bg)
- Boost `--faint` from `#6b6b85` → `#8585a0` (still secondary but more readable)
- Body text base size: add `font-size: 16px` to body (already default, but ensure it)

### Across all components:
- Ensure description text uses `text-[15px]` minimum (not `text-sm` = 14px)
- Use `font-medium` or `font-semibold` for important secondary text
- Limit paragraph width on mobile to ~30–36 characters with `max-w-prose` or `max-w-[36ch]`

---

## Priority 4 — Navigation Active State & Scroll Progress (Fix #10)

### [MODIFY] [Nav.tsx](file:///d:/codes/Aman-Portfolio/app/components/Nav.tsx)

The nav already has:
- ✅ Sticky header
- ✅ Active section detection via `IntersectionObserver`
- ✅ Active underline indicator
- ✅ Smooth scrolling

Improvements:
- Add a **scroll progress bar** at the top of the nav — a thin gradient line showing how far the user has scrolled
- Make mobile nav links have larger touch targets (`py-3` instead of default)

---

## Priority 5 — Accessibility (Fix #9)

### Across all components:

- Ensure all buttons have minimum **44×44px** touch targets on mobile
- Add `focus-visible` ring styles to all interactive elements in globals.css
- Verify all images have meaningful `alt` text (already mostly good)
- Ensure form inputs have proper labels (already done ✅)

### [MODIFY] [globals.css](file:///d:/codes/Aman-Portfolio/app/globals.css)

- Add global `focus-visible` styles for keyboard navigation

---

## Priority 6 — Consistency & Polish (Fix #12)

### [MODIFY] [Achievements.tsx](file:///d:/codes/Aman-Portfolio/app/components/Achievements.tsx)

- Add consistent card shadow matching Projects section: `shadow-[0_12px_28px_rgba(0,0,0,0.28)]`
- Standardize border radius (already `rounded-2xl` everywhere ✅)

### [MODIFY] [Experience.tsx](file:///d:/codes/Aman-Portfolio/app/components/Experience.tsx)

- Add same card shadow as other sections

---

## Verification Plan

### Manual Verification
- Run `npm run dev` and verify:
  1. Hero section shows name → role → value prop → CTA above the fold on mobile
  2. "Let's Work Together" is the primary CTA, "View Projects" is secondary
  3. Text contrast is visibly improved
  4. Cards have consistent shadows and spacing
  5. Navigation scroll progress bar works
  6. All touch targets are comfortably tappable on mobile
  7. Mobile hexagon photo is smaller (~170px wide)

> [!IMPORTANT]
> This is a significant set of changes across 8+ files. The biggest impact comes from the Hero rework (Priority 1). Shall I proceed?
