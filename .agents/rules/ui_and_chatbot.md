---
name: "Chatbot Limit & UI Animation"
description: "Guidelines for implementing lightweight Chatbot rate limiting (localStorage) and CSS-only UI animations (Glassmorphism & Neon Glow) to ensure optimal performance and security without bloat."
always_on: true
---

# 1. Chatbot Rate Limiting & Cooldown (Spam Prevention)
- **Local Storage Quota:** For simple serverless/static implementations (e.g., Cloudflare Pages, Astro), use `localStorage` to track the number of user messages sent.
- **Message Limit (e.g., 40 max):** Prevent API abuse by capping anonymous or unauthenticated users to a reasonable limit (e.g., 40 messages).
- **Cooldown Interval:** Enforce a strict delay (e.g., 3000ms) between consecutive messages using a client-side state lock (cooldown flag) to prevent rapid-fire prompt injections or spam.
- **Visual Feedback:** Provide immediate UI feedback (e.g., a "cooldown active" placeholder or disabled send button) when the user exceeds the rate limit or triggers the cooldown.

# 2. Performance-Optimized UI Animations
- **Zero-JS Animation Rule:** Never import heavy JavaScript animation libraries (e.g., Framer Motion, GSAP) for simple hover effects, layout shifts, or pulse loops.
- **CSS Keyframes:** Use pure CSS `keyframes` and Tailwind utility classes (e.g., `@keyframes neon-pulse`) for infinite loops or hover transitions.
- **GPU Acceleration:** Always use `transform: translate()` instead of manipulating `top`/`margin` to leverage hardware acceleration and prevent layout thrashing (e.g., `hover:-translate-y-1`).
- **Glassmorphism & Neon Glow Aesthetics:** Adhere strictly to the defined Design System:
  - Backgrounds: `bg-slate-900/50 backdrop-blur-sm` for floating containers.
  - Interactive Glow: Use `shadow-[0_0_15px_rgba(34,211,238,0.2)]` or custom `shadow-glow` classes for hover states, ensuring a cybernetic, premium feel without compromising static build performance.
