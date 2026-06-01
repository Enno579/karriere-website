/* ============================================
   Enno Scharf – PV recruiting (premium LP)
   ============================================ */

:root {
  --navy-950: #020617;
  --navy-900: #071525;
  --navy-800: #0c2342;
  --navy-700: #12325c;
  --navy-600: #1a4480;
  --accent: #3b82f6;
  --accent-bright: #60a5fa;
  --accent-glow: rgba(59, 130, 246, 0.45);
  --white: #ffffff;
  --gray-50: #f8fafc;
  --gray-100: #f1f5f9;
  --gray-200: #e2e8f0;
  --gray-400: #94a3b8;
  --gray-500: #5c6b7d;
  --gray-600: #3d4d60;

  /* System UI stack (Apple-like; no bundled font files) */
  --font-sans: -apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "Segoe UI", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;

  --nav-height: 76px;
  --container: min(1180px, calc(100% - 2rem));
  --section-y: clamp(5.25rem, 12vw, 10.25rem);
  --ease: cubic-bezier(0.16, 1, 0.3, 1);
  --spring: cubic-bezier(0.34, 1.56, 0.64, 1);
  --dur-fast: 0.22s;
  --dur-md: 0.35s;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

html {
  scroll-behavior: smooth;
  scroll-padding-top: var(--nav-height);
  -webkit-font-smoothing: antialiased;
}

body {
  font-family: var(--font-sans);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.47;
  color: var(--gray-600);
  background: var(--white);
  overflow-x: hidden;
}

img { max-width: 100%; height: auto; display: block; }
a { color: inherit; text-decoration: none; }
ul { list-style: none; }
button { font-family: inherit; cursor: pointer; border: none; background: none; }

.container { width: var(--container); margin-inline: auto; }

/* Logo fallback (prevents "broken image" boxes) */
.logo-text {
  display: inline-flex;
  align-items: center;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--navy-900);
}

.nav__logo img + .logo-text,
.footer__logo img + .logo-text { display: none; }

.footer .logo-text { color: rgba(255, 255, 255, 0.85); }

/* Grain overlay */
.grain {
  position: fixed;
  inset: 0;
  z-index: 9998;
  pointer-events: none;
  opacity: 0.035;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}

/* Typography */
.section__eyebrow {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 1rem;
}

.section__eyebrow--light { color: var(--accent-bright); }

.section__title {
  font-family: var(--font-sans);
  font-size: clamp(2.125rem, 4.75vw, 3.5rem);
  font-weight: 600;
  letter-spacing: -0.022em;
  line-height: 1.07;
  color: var(--navy-900);
  margin-bottom: 1.35rem;
}

.section__title--editorial { font-size: clamp(2.5rem, 5.5vw, 4rem); }
.section__title--light { color: var(--white); }

.text-gradient {
  background: linear-gradient(135deg, var(--navy-800) 0%, var(--accent) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.text-gradient-light {
  background: linear-gradient(135deg, var(--white) 0%, var(--accent-bright) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9375rem;
  font-weight: 600;
  padding: 0.875rem 1.75rem;
  border-radius: 100px;
  transition:
    transform var(--dur-md) var(--ease),
    box-shadow var(--dur-md) var(--ease),
    background var(--dur-md) var(--ease),
    color var(--dur-md) var(--ease),
    border-color var(--dur-md) var(--ease),
    filter var(--dur-md) var(--ease);
  white-space: nowrap;
}

.btn--sm { padding: 0.55rem 1.25rem; font-size: 0.8125rem; }
.btn--lg { padding: 1.05rem 2.25rem; font-size: 1rem; }
.btn--full { width: 100%; }

.btn--primary {
  background: var(--white);
  color: var(--navy-900);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15);
}

.btn--primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
  filter: brightness(1.03);
}

@media (hover: hover) and (pointer: fine) {
  .btn:active {
    transform: translateY(-1px) scale(0.99);
    transition-duration: var(--dur-fast);
  }
}

.btn--glow {
  box-shadow: 0 0 0 0 var(--accent-glow), 0 8px 32px rgba(59, 130, 246, 0.35);
  animation: btnPulse 3s ease-in-out infinite;
}

@keyframes btnPulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.3), 0 8px 32px rgba(59, 130, 246, 0.25); }
  50% { box-shadow: 0 0 0 8px rgba(59, 130, 246, 0), 0 8px 40px rgba(59, 130, 246, 0.4); }
}

.btn--ghost {
  background: rgba(255, 255, 255, 0.06);
  color: var(--white);
  border: 1px solid rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(12px);
}

.btn--ghost:hover {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(255, 255, 255, 0.28);
  transform: translateY(-3px);
}

.btn--dark {
  background: var(--navy-900);
  color: var(--white);
}

.btn--dark:hover {
  background: var(--navy-800);
  transform: translateY(-3px);
  box-shadow: 0 10px 28px rgba(2, 6, 23, 0.18);
}

/* Nav */
.nav {
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 1000;
  height: var(--nav-height);
  transition: background 0.4s var(--ease), box-shadow 0.4s var(--ease);
}

.nav--scrolled {
  background: rgba(7, 21, 37, 0.88);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.05);
}

.nav__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: var(--container);
  margin-inline: auto;
}

.nav__logo img { height: 34px; width: auto; filter: brightness(0) invert(1); }

.nav__links { display: flex; gap: 2.25rem; }

.nav__links a {
  font-size: 0.8125rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.65);
  transition: color var(--dur-md) var(--ease);
  position: relative;
}

.nav__links a:hover { color: var(--white); }

@media (hover: hover) and (pointer: fine) {
  .nav__links a::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -0.35rem;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.55), transparent);
    transform: scaleX(0);
    transform-origin: center;
    transition: transform var(--dur-md) var(--ease), opacity var(--dur-md) var(--ease);
    opacity: 0;
    pointer-events: none;
  }

  .nav__links a:hover::after,
  .nav__links a:focus-visible::after {
    transform: scaleX(1);
    opacity: 1;
  }
}

.nav__logo {
  transition: opacity var(--dur-md) var(--ease), transform var(--dur-md) var(--ease);
}

@media (hover: hover) and (pointer: fine) {
  .nav__logo:hover {
    opacity: 0.92;
    transform: translateY(-1px);
  }
}

.nav__toggle {
  display: none;
  flex-direction: column;
  gap: 6px;
  width: 28px;
}

.nav__toggle span {
  display: block;
  height: 2px;
  background: var(--white);
  border-radius: 2px;
  transition: transform 0.3s var(--ease), opacity 0.3s;
}

.nav__toggle.is-active span:first-child { transform: translateY(4px) rotate(45deg); }
.nav__toggle.is-active span:last-child { transform: translateY(-4px) rotate(-45deg); }

.nav__mobile {
  display: none;
  position: fixed;
  inset: var(--nav-height) 0 0 0;
  background: var(--navy-900);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.75rem;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0.3s;
}

.nav__mobile.is-open { opacity: 1; visibility: visible; }
  .nav__mobile a { font-size: 1.35rem; font-weight: 600; color: var(--white); }

  .nav__mobile .btn {
    min-height: 48px;
    width: min(100%, 18rem);
  }

/* Hero */
.hero {
  position: relative;
  min-height: 100vh;
  min-height: 100svh;
  min-height: 100dvh;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero__bg {
  position: absolute;
  inset: 0;
  background: var(--navy-950);
}

.hero__img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  transform-origin: center center;
}

.hero__mesh {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    radial-gradient(ellipse 85% 65% at 15% 85%, rgba(59, 130, 246, 0.22) 0%, transparent 55%),
    radial-gradient(ellipse 70% 55% at 90% 15%, rgba(34, 197, 94, 0.1) 0%, transparent 48%);
  mix-blend-mode: soft-light;
  opacity: 0.65;
}

.hero__mesh::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
  background-size: 52px 52px;
  mask-image: radial-gradient(ellipse 90% 80% at 50% 40%, #000 15%, transparent 72%);
  opacity: 0.5;
}

.hero__overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      180deg,
      rgba(2, 6, 23, 0.78) 0%,
      rgba(7, 21, 37, 0.42) 38%,
      rgba(2, 6, 23, 0.55) 62%,
      rgba(12, 35, 66, 0.88) 100%
    ),
    radial-gradient(ellipse 120% 90% at 50% 35%, rgba(2, 6, 23, 0.35) 0%, rgba(2, 6, 23, 0.72) 72%);
  pointer-events: none;
}

/* Sharpen-ish live layer — only populated when motion is allowed (see media query below) */
.hero__overlay::after {
  content: none;
}

.hero__glow {
  position: absolute;
  bottom: -20%;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 50%;
  background: radial-gradient(ellipse, rgba(59, 130, 246, 0.25) 0%, transparent 70%);
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .hero__mesh {
    animation: hero-mesh-chroma 20s ease-in-out infinite alternate;
  }

  .hero__mesh::before {
    animation: hero-mesh-grid-drift 22s linear infinite;
  }

  .hero__glow {
    animation: hero-glow-chroma 18s ease-in-out infinite alternate;
  }

  .hero__img {
    animation: hero-img-breathe 24s ease-in-out infinite alternate;
  }

  .hero__overlay::after {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: transparent;
    -webkit-backdrop-filter: contrast(1.02) saturate(1.04);
    backdrop-filter: contrast(1.02) saturate(1.04);
    animation: hero-overlay-sharp-pulse 16s ease-in-out infinite alternate;
  }
}

/* Skip heavier backdrop / zoom on narrow viewports */
@media (prefers-reduced-motion: no-preference) and (max-width: 640px) {
  .hero__overlay::after {
    content: none;
    animation: none;
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }

  .hero__img {
    animation: none;
  }
}

/* Titelbild: auf Phone nicht zuschneiden — vollflächig scharf im Viewport */
@media (max-width: 640px) {
  .hero__img {
    object-fit: contain;
    object-position: center center;
  }
}

@keyframes hero-mesh-chroma {
  0% {
    filter: hue-rotate(-10deg) saturate(1.02);
    opacity: 0.6;
  }
  100% {
    filter: hue-rotate(14deg) saturate(1.1);
    opacity: 0.72;
  }
}

@keyframes hero-mesh-grid-drift {
  0% {
    background-position: 0 0, 0 0;
    opacity: 0.48;
  }
  50% {
    opacity: 0.55;
  }
  100% {
    background-position: 28px 22px, 28px 22px;
    opacity: 0.48;
  }
}

@keyframes hero-glow-chroma {
  0% {
    filter: hue-rotate(-18deg);
    opacity: 0.88;
  }
  100% {
    filter: hue-rotate(22deg);
    opacity: 1;
  }
}

@keyframes hero-img-breathe {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.028);
  }
}

@keyframes hero-overlay-sharp-pulse {
  0% {
    opacity: 0.65;
    -webkit-backdrop-filter: contrast(1.015) saturate(1.03) brightness(1.01);
    backdrop-filter: contrast(1.015) saturate(1.03) brightness(1.01);
  }
  100% {
    opacity: 0.85;
    -webkit-backdrop-filter: contrast(1.045) saturate(1.07) brightness(1.02);
    backdrop-filter: contrast(1.045) saturate(1.07) brightness(1.02);
  }
}

.hero__content {
  position: relative;
  z-index: 1;
  width: 100%;
  padding: calc(var(--nav-height) + 1rem) 0 1rem;
  text-align: center;
}

.hero__title {
  font-family: var(--font-sans);
  font-size: clamp(1.85rem, 5vw + 0.85rem, 6rem);
  font-weight: 600;
  letter-spacing: -0.028em;
  line-height: 1.04;
  color: var(--white);
  margin-bottom: clamp(0.65rem, 1.5vw + 0.35rem, 1.85rem);
}

.hero__title em {
  font-style: normal;
  background: linear-gradient(135deg, var(--white) 30%, var(--accent-bright) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero__subtitle {
  font-size: clamp(0.8125rem, 1.65vw + 0.42rem, 1.25rem);
  font-weight: 400;
  color: rgba(255, 255, 255, 0.72);
  max-width: 40rem;
  margin-inline: auto;
  margin-bottom: clamp(0.85rem, 2vw + 0.5rem, 2.35rem);
  line-height: 1.34;
}

.hero__subtitle--stack p {
  margin: 0 0 0.5rem;
}

.hero__subtitle--stack p:last-child {
  margin-bottom: 0;
}

/* Hero desktop / mobile copy */
.desktop-only { display: block; }
.mobile-only { display: none; }

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.625rem;
  justify-content: center;
}

.hero__actions .btn {
  min-height: 44px;
}

@media (min-width: 1200px) and (min-height: 800px) {
  .hero__content {
    padding: calc(var(--nav-height) + 2.75rem) 0 3.25rem;
  }

  .hero__subtitle--stack p {
    margin: 0 0 1rem;
  }

  .hero__actions {
    gap: 1rem;
  }
}

@media (max-height: 700px) {
  .hero__content {
    padding: calc(var(--nav-height) + 0.5rem) 0 0.5rem;
  }

  .hero__title {
    font-size: clamp(1.45rem, 3.8vw + 0.65rem, 3.75rem);
    line-height: 1.03;
    margin-bottom: 0.45rem;
  }

  .hero__subtitle {
    font-size: clamp(0.75rem, 1.35vw + 0.38rem, 1.0625rem);
    line-height: 1.3;
    margin-bottom: 0.55rem;
  }

  .hero__subtitle--stack p {
    margin: 0 0 0.3rem;
  }

  .hero__actions {
    gap: 0.5rem;
  }
}

.section--divider {
  position: relative;
}

.section--divider::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: min(720px, 70%);
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(26, 68, 128, 0.15), transparent);
  pointer-events: none;
}

.section--soft-top { padding-top: var(--section-y); }

.editorial { padding: var(--section-y) 0; }

.editorial--light { background: var(--white); }

.editorial--dark {
  background: var(--navy-900);
  color: rgba(255, 255, 255, 0.7);
  position: relative;
  overflow: hidden;
}

.editorial--dark::before {
  content: '';
  position: absolute;
  top: 0;
  right: -10%;
  width: 50%;
  height: 100%;
  background: radial-gradient(ellipse at center, rgba(59, 130, 246, 0.12) 0%, transparent 70%);
  pointer-events: none;
}

.editorial__copy--solo {
  max-width: min(44rem, 100%);
}

.editorial__lead {
  font-size: 1.2rem;
  line-height: 1.47;
  font-weight: 400;
  color: var(--navy-800);
  margin-bottom: 1.25rem;
}

.editorial__body p {
  margin-bottom: 1.1rem;
  color: var(--gray-600);
  line-height: 1.47;
}

.editorial__body em {
  color: var(--navy-800);
  font-style: italic;
}

.editorial__body strong { color: var(--navy-900); font-weight: 600; }

.editorial__closing {
  font-family: var(--font-sans);
  font-size: 1.15rem;
  font-weight: 500;
  color: var(--navy-900) !important;
  line-height: 1.35;
  padding-left: 1.25rem;
  border-left: 3px solid var(--accent);
  margin-top: 1.5rem !important;
}

.editorial--dark .editorial__closing {
  color: rgba(255, 255, 255, 0.93) !important;
  border-left-color: var(--accent-bright);
}

/* Pull quote */
.pull-quote {
  font-family: var(--font-sans);
  font-size: clamp(1.75rem, 4vw, 3rem);
  font-weight: 600;
  line-height: 1.15;
  letter-spacing: -0.022em;
  color: var(--white);
  text-align: center;
  max-width: min(38rem, 92%);
  margin: 0 auto 3.5rem;
  position: relative;
}

.pull-quote__mark {
  display: block;
  font-size: 4rem;
  line-height: 0.5;
  color: var(--accent);
  opacity: 0.6;
}

.pull-quote__text {
  display: block;
  margin: 0.25rem 0 0.75rem;
}

.pull-quote__mark--end { margin-top: 0.5rem; }

.editorial__split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 2.5rem;
}

.editorial__body--light p { color: rgba(255, 255, 255, 0.72); line-height: 1.47; }
.editorial__body--light strong { color: var(--white); }

.highlight-num { color: var(--accent-bright); }

.pill-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  justify-content: center;
}

.pill {
  font-size: 0.8125rem;
  font-weight: 500;
  padding: 0.5rem 1.1rem;
  border-radius: 100px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.75);
  transition:
    background var(--dur-md) var(--ease),
    border-color var(--dur-md) var(--ease),
    color var(--dur-md) var(--ease),
    transform var(--dur-md) var(--ease),
    box-shadow var(--dur-md) var(--ease);
}

@media (hover: hover) and (pointer: fine) {
  .pill:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.16);
    color: rgba(255, 255, 255, 0.9);
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(2, 6, 23, 0.2);
  }
}

/* ─── Phone showcase (Intro-Film) ───────────────────────────── */
.phone-showcase {
  padding-block: var(--section-y) calc(var(--section-y) * 0.92);
  background: linear-gradient(180deg, var(--gray-50) 0%, #e9eef5 100%);
  color: var(--gray-600);
}

.phone-showcase .container {
  display: grid;
  gap: clamp(2rem, 5vw, 3rem);
  align-items: center;
  justify-items: center;
  text-align: center;
}

.phone-showcase__copy {
  width: min(100%, 26rem);
  display: grid;
  gap: 0.8rem;
  font-size: 0.95rem;
  line-height: 1.62;
  color: #334155;
}

.phone-showcase__copy h2 {
  font-family: var(--font-sans);
  font-size: clamp(1.3rem, 2.2vw, 1.75rem);
  font-weight: 600;
  letter-spacing: -0.022em;
  line-height: 1.12;
  color: var(--navy-900);
  margin-bottom: 0.15rem;
}

.phone-showcase__copy .phone-showcase__subhead {
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #475569;
  margin-bottom: 0.35rem;
}

.phone-showcase__copy p {
  margin: 0;
}

.phone-showcase__copy strong {
  color: var(--navy-900);
  font-weight: 600;
}

.phone-showcase__copy .phone-showcase__highlight {
  margin-top: 0.2rem;
  padding: 0.58rem 0.82rem 0.58rem 0.9rem;
  border-left: 3px solid var(--accent);
  border-radius: 0 12px 12px 0;
  background: linear-gradient(90deg, rgba(59, 130, 246, 0.14) 0%, rgba(59, 130, 246, 0.02) 100%);
  color: var(--navy-900);
  font-weight: 600;
  letter-spacing: -0.01em;
  line-height: 1.45;
  transition:
    border-left-color var(--dur-md) var(--ease),
    box-shadow var(--dur-md) var(--ease);
}

@media (hover: hover) and (pointer: fine) {
  .phone-showcase__copy .phone-showcase__highlight:hover {
    border-left-color: var(--accent-bright);
    box-shadow: 0 4px 20px rgba(15, 23, 42, 0.06);
  }
}

@media (max-width: 899px) {
  .phone-showcase__copy {
    width: min(100%, 31rem);
    gap: 0.72rem;
  }

  .phone-showcase__copy h2 {
    font-size: clamp(1.18rem, 5.6vw, 1.55rem);
  }

  .phone-showcase__copy .phone-showcase__subhead {
    font-size: 0.74rem;
    letter-spacing: 0.09em;
  }

  .phone-showcase__copy .phone-showcase__highlight {
    padding: 0.54rem 0.78rem 0.54rem 0.84rem;
  }
}

/* Device shell: bezel + inset screen; padding ≈ 2.5% device width (+ extra top for island) */
.phone-showcase__device {
  --phone-pad-x: 2.5%;
  --phone-pad-top: 3.1%;
  --phone-pad-bottom: 2.6%;
  --phone-r-outer: clamp(1.85rem, 7.2vw, 2.35rem);
  --phone-r-screen: clamp(1.28rem, 5.2vw, 1.72rem);

  position: relative;
  width: min(100%, 280px);
  max-width: 320px;
  padding: var(--phone-pad-top) var(--phone-pad-x) var(--phone-pad-bottom);
  border-radius: var(--phone-r-outer);
  background: linear-gradient(
    165deg,
    #2a3444 0%,
    var(--navy-900) 38%,
    var(--navy-950) 100%
  );
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.2),
    inset 0 -2px 2px rgba(0, 0, 0, 0.45),
    0 0 0 1px rgba(0, 0, 0, 0.35),
    0 12px 28px rgba(7, 21, 37, 0.18),
    0 28px 56px rgba(7, 21, 37, 0.12);
  transition:
    transform 0.55s var(--ease),
    box-shadow 0.55s var(--ease);
}

@media (hover: hover) and (pointer: fine) {
  .phone-showcase__device:hover {
    transform: translateY(-4px);
    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.22),
      inset 0 -2px 2px rgba(0, 0, 0, 0.45),
      0 0 0 1px rgba(0, 0, 0, 0.3),
      0 18px 40px rgba(7, 21, 37, 0.22),
      0 34px 64px rgba(7, 21, 37, 0.14);
  }
}

.phone-showcase__island {
  display: block;
  width: min(34%, 5.5rem);
  height: 0.82rem;
  margin: 0 auto 0.55rem;
  border-radius: 999px;
  background: linear-gradient(180deg, #1c2431 0%, #0a0e14 100%);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.12),
    inset 0 -1px 1px rgba(0, 0, 0, 0.6),
    0 0 0 1px rgba(0, 0, 0, 0.35);
  pointer-events: none;
}

.phone-showcase__screen {
  position: relative;
  width: 100%;
  aspect-ratio: 9 / 16;
  border-radius: var(--phone-r-screen);
  overflow: hidden;
  background: #020617;
  box-shadow:
    inset 0 0 0 1px rgba(255, 255, 255, 0.06),
    inset 0 2px 4px rgba(255, 255, 255, 0.04),
    inset 0 -12px 32px rgba(0, 0, 0, 0.35);
}

.phone-showcase__video {
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
  border-radius: inherit;
  background: #000;
}

iframe.phone-showcase__video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

@media (min-width: 900px) {
  .phone-showcase .container {
    grid-template-columns: minmax(0, 1fr) minmax(220px, 320px);
    justify-items: start;
    text-align: left;
    gap: clamp(2rem, 4vw, 3.5rem);
  }

  .phone-showcase__copy {
    justify-self: start;
    text-align: left;
  }

  .phone-showcase__device {
    justify-self: end;
  }
}

@media (max-width: 899px) {
  .phone-showcase__device {
    width: min(100%, 280px);
  }
}

@supports not (aspect-ratio: 9 / 16) {
  .phone-showcase__screen {
    min-height: 18rem;
  }
}

/* Recruit – Für dich */
.editorial--recruit {
  background: var(--navy-900);
  color: rgba(255, 255, 255, 0.7);
  position: relative;
  overflow: hidden;
}

.editorial--recruit::before {
  content: '';
  position: absolute;
  top: 0;
  right: -10%;
  width: 50%;
  height: 100%;
  background: radial-gradient(ellipse at center, rgba(59, 130, 246, 0.12) 0%, transparent 70%);
  pointer-events: none;
}

.editorial--recruit .container {
  position: relative;
  z-index: 1;
}

.recruit-panel {
  max-width: 560px;
}

.recruit-panel__title {
  font-family: var(--font-sans);
  font-size: clamp(2.65rem, 5.5vw, 4.25rem);
  font-weight: 600;
  letter-spacing: -0.028em;
  line-height: 1.07;
  color: var(--white);
  margin-bottom: 2rem;
}

.recruit-panel__quote {
  position: relative;
  padding: 1.5rem 0 1.5rem 1.5rem;
  margin-bottom: 1.5rem;
  border-left: 3px solid var(--accent);
}

.recruit-panel__quote p {
  font-family: var(--font-sans);
  font-size: clamp(1.25rem, 2.5vw, 1.6rem);
  font-weight: 500;
  line-height: 1.35;
  color: var(--white);
  letter-spacing: -0.015em;
}

.recruit-panel__body p {
  color: rgba(255, 255, 255, 0.72);
  margin-bottom: 1.5rem;
  font-size: 1.05rem;
  line-height: 1.47;
}

.recruit-checklist {
  margin-bottom: 2rem;
}

.recruit-checklist li {
  position: relative;
  padding: 0.6rem 0 0.6rem 2rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  transition:
    background var(--dur-md) var(--ease),
    color var(--dur-md) var(--ease);
  border-radius: 6px;
}

@media (hover: hover) and (pointer: fine) {
  .recruit-checklist li:hover {
    background: rgba(255, 255, 255, 0.04);
    color: rgba(255, 255, 255, 0.92);
  }
}

.recruit-checklist li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--accent-bright);
  font-weight: 700;
}

/* Bento benefits */
.benefits {
  padding: var(--section-y) 0 calc(var(--section-y) * 0.92);
  background: var(--gray-50);
}

/* Lead economics infographic (benefits follow-up) — iridescent glass / neon club accent */
.lead-econ,
.growth-section {
  --lead-iris-a: #ec4899;
  --lead-iris-b: #a855f7;
  --lead-iris-c: #22d3ee;
  --lead-iris-d: #6366f1;
  --lead-glass-top: rgba(255, 255, 255, 0.16);
  --lead-glass-mid: rgba(255, 255, 255, 0.05);
  margin-top: clamp(2.25rem, 4.5vw, 3.25rem);
}

.lead-econ__card,
.growth-section__card {
  position: relative;
  border-radius: clamp(20px, 3vw, 28px);
  padding: clamp(1.75rem, 3.5vw, 2.75rem) clamp(1.25rem, 3vw, 2.5rem);
  border: 1.5px solid transparent;
  background:
    linear-gradient(168deg, rgba(10, 14, 28, 0.97) 0%, rgba(7, 21, 37, 0.98) 42%, rgba(15, 23, 42, 0.96) 100%) padding-box,
    linear-gradient(125deg, var(--lead-iris-a), var(--lead-iris-b) 38%, var(--lead-iris-c) 68%, var(--lead-iris-d)) border-box;
  background-origin: padding-box, border-box;
  background-clip: padding-box, border-box;
  box-shadow:
    0 1px 0 rgba(255, 255, 255, 0.12) inset,
    0 0 0 1px rgba(255, 255, 255, 0.04) inset,
    0 32px 72px rgba(2, 6, 23, 0.55),
    0 0 48px rgba(236, 72, 153, 0.12),
    0 0 80px rgba(34, 211, 238, 0.08);
  overflow: hidden;
  transition:
    transform 0.5s var(--ease),
    box-shadow 0.5s var(--ease);
}

@media (hover: hover) and (pointer: fine) {
  .lead-econ__card:hover,
  .growth-section__card:hover {
    transform: translateY(-3px);
    box-shadow:
      0 1px 0 rgba(255, 255, 255, 0.14) inset,
      0 0 0 1px rgba(255, 255, 255, 0.06) inset,
      0 36px 80px rgba(2, 6, 23, 0.58),
      0 0 52px rgba(236, 72, 153, 0.14),
      0 0 88px rgba(34, 211, 238, 0.1);
  }
}

.lead-econ__card::before,
.growth-section__card::before {
  content: '';
  position: absolute;
  inset: -2px;
  background:
    radial-gradient(ellipse 85% 65% at 8% -10%, rgba(236, 72, 153, 0.22), transparent 55%),
    radial-gradient(ellipse 70% 55% at 96% 8%, rgba(34, 211, 238, 0.16), transparent 52%),
    radial-gradient(ellipse 60% 70% at 48% 108%, rgba(168, 85, 247, 0.2), transparent 55%),
    radial-gradient(ellipse 45% 40% at 72% 42%, rgba(99, 102, 241, 0.12), transparent 50%);
  opacity: 0.95;
  pointer-events: none;
}

.lead-econ__card::after,
.growth-section__card::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.09) 0%, transparent 38%, transparent 62%, rgba(34, 211, 238, 0.04) 100%);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.22);
  pointer-events: none;
}

.lead-econ__card > *,
.growth-section__card > * {
  position: relative;
  z-index: 1;
}

.lead-econ__header,
.growth-section__header {
  text-align: center;
  max-width: 40rem;
  margin: 0 auto clamp(1.75rem, 3vw, 2.25rem);
}

.lead-econ__eyebrow,
.growth-section__eyebrow {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  background: linear-gradient(92deg, #f9a8d4, #c4b5fd 45%, #67e8f9);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.65rem;
  filter: drop-shadow(0 0 14px rgba(236, 72, 153, 0.35));
}

.lead-econ__title,
.growth-section__title {
  font-family: var(--font-sans);
  font-size: clamp(1.35rem, 2.8vw, 1.85rem);
  font-weight: 600;
  letter-spacing: -0.022em;
  line-height: 1.15;
  color: rgba(255, 255, 255, 0.96);
  margin-bottom: 0.65rem;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.35);
}

.lead-econ__lede,
.growth-section__lede {
  font-size: 0.9375rem;
  line-height: 1.47;
  color: rgba(203, 213, 225, 0.88);
}

.lead-econ__lede strong,
.growth-section__lede strong { color: rgba(255, 255, 255, 0.95); font-weight: 600; }

.lead-econ__flow {
  display: grid;
  grid-template-columns: 1fr auto 1fr auto 1fr;
  align-items: stretch;
  gap: clamp(0.5rem, 1.5vw, 1rem);
  max-width: 56rem;
  margin-inline: auto;
}

.lead-econ__step,
.growth-section__tile {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1.35rem 1rem 1.25rem;
  border-radius: 18px;
  position: relative;
  background:
    linear-gradient(155deg, var(--lead-glass-top) 0%, var(--lead-glass-mid) 48%, rgba(2, 6, 23, 0.35) 100%);
  border: 1px solid rgba(255, 255, 255, 0.14);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.28),
    inset 0 -1px 0 rgba(0, 0, 0, 0.22),
    0 14px 40px rgba(2, 6, 23, 0.45),
    0 0 0 1px rgba(236, 72, 153, 0.06);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  transition:
    border-color var(--dur-md) var(--ease),
    box-shadow var(--dur-md) var(--ease),
    transform var(--dur-md) var(--ease);
}

@media (hover: hover) and (pointer: fine) {
  .lead-econ__step:hover,
  .growth-section__tile:hover {
    border-color: rgba(255, 255, 255, 0.22);
    transform: translateY(-2px);
    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.32),
      inset 0 -1px 0 rgba(0, 0, 0, 0.22),
      0 18px 46px rgba(2, 6, 23, 0.5),
      0 0 0 1px rgba(255, 255, 255, 0.06);
  }
}

.lead-econ__step::before,
.growth-section__tile::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: radial-gradient(120% 80% at 50% -20%, rgba(255, 255, 255, 0.12), transparent 55%);
  pointer-events: none;
}

.lead-econ__step > *,
.growth-section__tile > * {
  position: relative;
  z-index: 1;
}

.lead-econ__step--accent,
.growth-section__tile--accent {
  background:
    linear-gradient(158deg, rgba(99, 102, 241, 0.22) 0%, rgba(15, 23, 42, 0.92) 38%, rgba(7, 21, 37, 0.95) 100%);
  border-color: rgba(255, 255, 255, 0.18);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.22),
    0 0 0 1px rgba(34, 211, 238, 0.12),
    0 20px 56px rgba(2, 6, 23, 0.55),
    0 0 40px rgba(168, 85, 247, 0.15),
    0 0 64px rgba(236, 72, 153, 0.1);
}

.lead-econ__step--accent::before,
.growth-section__tile--accent::before {
  background:
    radial-gradient(100% 90% at 12% 0%, rgba(236, 72, 153, 0.18), transparent 50%),
    radial-gradient(90% 70% at 92% 100%, rgba(34, 211, 238, 0.14), transparent 52%);
}

.lead-econ__step--accent .lead-econ__step-label,
.growth-section__tile--accent .growth-section__label { color: rgba(226, 232, 240, 0.62); }

.lead-econ__step--accent .lead-econ__step-value {
  color: rgba(255, 255, 255, 0.98);
}

.growth-section__tile--accent .growth-section__big {
  color: rgba(255, 255, 255, 0.98);
}

.lead-econ__step--accent .lead-econ__approx {
  color: #a5f3fc;
  opacity: 0.95;
  text-shadow: 0 0 18px rgba(34, 211, 238, 0.45);
}

.lead-econ__step--accent .lead-econ__num { color: #fafafa; }

.lead-econ__step--accent .lead-econ__unit,
.lead-econ__step--accent .lead-econ__per { color: rgba(248, 250, 252, 0.9); }

.lead-econ__step--accent .lead-econ__step-meta,
.growth-section__tile--accent .growth-section__body { color: rgba(203, 213, 225, 0.62); }

.lead-econ__step-label,
.growth-section__label {
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(186, 198, 214, 0.78);
  margin-bottom: 0.65rem;
}

.lead-econ__step-value {
  position: relative;
  overflow: hidden;
  border-radius: 0.35rem;
  font-family: var(--font-sans);
  font-weight: 600;
  font-size: clamp(1.45rem, 3.2vw, 2rem);
  letter-spacing: -0.025em;
  line-height: 1.12;
  color: rgba(255, 255, 255, 0.97);
  margin: 0 0 0.5rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.45);
}

.lead-econ__step-value::after {
  content: '';
  position: absolute;
  inset: -50% -80%;
  background: linear-gradient(
    105deg,
    transparent 42%,
    rgba(255, 255, 255, 0) 44%,
    rgba(255, 255, 255, 0.55) 49.5%,
    rgba(244, 244, 255, 0.35) 50.5%,
    rgba(255, 255, 255, 0) 56%,
    transparent 58%
  );
  transform: translateX(-120%) skewX(-12deg);
  opacity: 0.85;
  pointer-events: none;
}

.lead-econ__approx {
  font-weight: 700;
  background: linear-gradient(100deg, #f472b6, #c4b5fd 50%, #22d3ee);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  margin-right: 0.05em;
  filter: drop-shadow(0 0 10px rgba(168, 85, 247, 0.35));
}

.lead-econ__num {
  font-variant-numeric: tabular-nums;
  position: relative;
  z-index: 1;
}

.lead-econ__unit {
  font-size: 0.72em;
  font-weight: 700;
  color: rgba(226, 232, 240, 0.92);
}

.lead-econ__unit-wrap {
  display: inline;
  font-size: 0.58em;
  font-weight: 700;
  letter-spacing: -0.02em;
  vertical-align: middle;
  line-height: 1.35;
}

.lead-econ__thin { font-weight: 600; color: rgba(226, 232, 240, 0.9); }

.lead-econ__per {
  display: inline;
  font-size: 0.48em;
  font-weight: 600;
  letter-spacing: 0.01em;
  text-transform: none;
  color: rgba(203, 213, 225, 0.92);
}

.lead-econ__step--accent .lead-econ__unit-wrap .lead-econ__thin,
.lead-econ__step--accent .lead-econ__unit-wrap .lead-econ__per {
  color: rgba(248, 250, 252, 0.88);
}

.lead-econ__step-meta {
  font-size: 0.8125rem;
  line-height: 1.45;
  color: rgba(186, 198, 214, 0.82);
  max-width: 14rem;
  margin: 0;
}

.lead-econ__connector {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 2rem;
}

.lead-econ__op {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.35rem;
  height: 2.35rem;
  border-radius: 50%;
  font-family: var(--font-sans);
  font-size: 1.1rem;
  font-weight: 700;
  color: rgba(15, 23, 42, 0.92);
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.98) 0%, rgba(226, 232, 240, 0.88) 45%, rgba(199, 210, 254, 0.75) 100%);
  border: 1px solid rgba(255, 255, 255, 0.45);
  box-shadow:
    0 1px 0 rgba(255, 255, 255, 0.65) inset,
    0 8px 22px rgba(2, 6, 23, 0.35);
}

.lead-econ__note,
.growth-section__closing {
  margin: clamp(1.5rem, 2.5vw, 1.85rem) auto 0;
  max-width: 38rem;
  text-align: center;
  font-size: 0.8125rem;
  line-height: 1.55;
  color: rgba(186, 198, 214, 0.82);
}

.lead-econ__note strong,
.growth-section__closing strong { color: rgba(255, 255, 255, 0.92); font-weight: 600; }

.lead-econ__sr {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

@media (prefers-reduced-motion: no-preference) {
  .lead-econ__step-value::after {
    animation: lead-econ-sheen 5.2s ease-in-out infinite;
  }

  .lead-econ__flow > .lead-econ__step:nth-child(3) .lead-econ__step-value::after {
    animation-delay: 1.1s;
  }

  .lead-econ__flow > .lead-econ__step:nth-child(5) .lead-econ__step-value::after {
    animation-delay: 2.2s;
  }

  .lead-econ__num {
    animation: lead-econ-num-shimmer 4s ease-in-out infinite alternate;
  }

  .lead-econ__flow > .lead-econ__step:nth-child(3) .lead-econ__num {
    animation-delay: 0.6s;
  }

  .lead-econ__flow > .lead-econ__step:nth-child(5) .lead-econ__num {
    animation-delay: 1.2s;
  }

  .lead-econ__op {
    animation: lead-econ-op-pulse 2.75s ease-in-out infinite;
  }

  .lead-econ__flow > .lead-econ__connector:nth-child(4) .lead-econ__op {
    animation-delay: 0.55s;
  }
}

@keyframes lead-econ-sheen {
  0%, 18% { transform: translateX(-130%) skewX(-12deg); opacity: 0; }
  22% { opacity: 0.9; }
  42%, 100% { transform: translateX(130%) skewX(-12deg); opacity: 0; }
}

@keyframes lead-econ-num-shimmer {
  0% {
    text-shadow:
      0 0 0 transparent,
      0 1px 2px rgba(0, 0, 0, 0.45);
  }
  100% {
    text-shadow:
      0 0 14px rgba(236, 72, 153, 0.45),
      0 0 28px rgba(34, 211, 238, 0.28),
      0 0 42px rgba(168, 85, 247, 0.22),
      0 1px 2px rgba(0, 0, 0, 0.45);
  }
}

@keyframes lead-econ-op-pulse {
  0%, 100% {
    box-shadow:
      0 1px 0 rgba(255, 255, 255, 0.65) inset,
      0 8px 22px rgba(2, 6, 23, 0.35),
      0 0 0 0 rgba(236, 72, 153, 0.25),
      0 0 0 0 rgba(34, 211, 238, 0.12);
  }
  50% {
    box-shadow:
      0 1px 0 rgba(255, 255, 255, 0.75) inset,
      0 8px 22px rgba(2, 6, 23, 0.35),
      0 0 22px 3px rgba(236, 72, 153, 0.38),
      0 0 36px 6px rgba(34, 211, 238, 0.22);
  }
}

@media (max-width: 960px) {
  .lead-econ__flow {
    grid-template-columns: 1fr;
    gap: 0;
    max-width: 22rem;
  }

  .lead-econ__connector {
    min-height: 2.25rem;
    padding: 0.35rem 0;
  }
}

@media (max-width: 480px) {
  .lead-econ__step,
  .growth-section__tile { padding-inline: 0.85rem; }
}

/* Personal growth — same glass / neon system as .lead-econ */
.growth-section__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(0.65rem, 1.8vw, 1.15rem);
  max-width: 56rem;
  margin: clamp(0.25rem, 1vw, 0.5rem) auto 0;
  align-items: stretch;
}

.growth-section__big {
  font-family: var(--font-sans);
  font-weight: 600;
  font-size: clamp(1.2rem, 2.35vw, 1.42rem);
  letter-spacing: -0.024em;
  line-height: 1.18;
  color: rgba(255, 255, 255, 0.96);
  margin: 0 0 0.55rem;
  text-shadow:
    0 1px 2px rgba(0, 0, 0, 0.45),
    0 0 20px rgba(236, 72, 153, 0.12);
}

.growth-section__body {
  font-size: 0.875rem;
  line-height: 1.5;
  color: rgba(186, 198, 214, 0.86);
  max-width: 17.5rem;
  margin: 0;
}

.growth-section__tile--pink::before {
  background:
    radial-gradient(100% 90% at 12% 0%, rgba(236, 72, 153, 0.16), transparent 48%),
    radial-gradient(120% 80% at 50% -20%, rgba(255, 255, 255, 0.12), transparent 55%);
}

.growth-section__tile--cyan::before {
  background:
    radial-gradient(100% 90% at 90% 0%, rgba(34, 211, 238, 0.14), transparent 48%),
    radial-gradient(120% 80% at 50% -20%, rgba(255, 255, 255, 0.12), transparent 55%);
}

.growth-section__tile--pink {
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.28),
    inset 0 -1px 0 rgba(0, 0, 0, 0.22),
    0 14px 40px rgba(2, 6, 23, 0.45),
    0 0 0 1px rgba(236, 72, 153, 0.1),
    0 0 36px rgba(236, 72, 153, 0.08);
}

.growth-section__tile--cyan {
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.28),
    inset 0 -1px 0 rgba(0, 0, 0, 0.22),
    0 14px 40px rgba(2, 6, 23, 0.45),
    0 0 0 1px rgba(34, 211, 238, 0.12),
    0 0 36px rgba(34, 211, 238, 0.08);
}

.growth-section__closing {
  margin-top: clamp(1.85rem, 3.2vw, 2.35rem);
}

.growth-section__cta {
  margin-top: clamp(1.35rem, 2.5vw, 1.85rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
}

.growth-section__cta-line {
  font-family: var(--font-sans);
  font-size: clamp(1rem, 2vw, 1.125rem);
  font-weight: 600;
  letter-spacing: -0.018em;
  line-height: 1.35;
  color: rgba(255, 255, 255, 0.94);
  margin: 0;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.35);
}

@media (prefers-reduced-motion: no-preference) {
  .growth-section__card::before {
    animation: growth-card-iris-hue 19s ease-in-out infinite alternate;
  }

  .growth-section__card::after {
    animation: growth-card-glass-pulse 14s ease-in-out infinite alternate;
  }

  .growth-section__tile::before {
    animation: growth-tile-mist 18s ease-in-out infinite alternate;
  }

  .growth-section__tile:nth-child(1)::before {
    animation-delay: 0s;
  }

  .growth-section__tile:nth-child(2)::before {
    animation-delay: -6s;
  }

  .growth-section__tile:nth-child(3)::before {
    animation-delay: -12s;
  }
}

@keyframes growth-card-iris-hue {
  0% {
    filter: hue-rotate(-9deg) saturate(1);
    opacity: 0.92;
  }
  100% {
    filter: hue-rotate(14deg) saturate(1.08);
    opacity: 1;
  }
}

@keyframes growth-card-glass-pulse {
  0% {
    filter: contrast(1) saturate(1);
  }
  100% {
    filter: contrast(1.04) saturate(1.06);
  }
}

@keyframes growth-tile-mist {
  0% {
    filter: hue-rotate(-6deg);
  }
  100% {
    filter: hue-rotate(10deg);
  }
}

@media (max-width: 960px) {
  .growth-section__grid {
    grid-template-columns: 1fr;
    max-width: 22rem;
  }
}

/* Trust */
.trust {
  padding: var(--section-y) 0 calc(var(--section-y) * 0.85);
  background: var(--white);
}

.trust-banner {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 2.5rem 3rem;
  background: var(--navy-900);
  border-radius: 24px;
  margin-bottom: 4rem;
  border: 1px solid rgba(255, 255, 255, 0.06);
  transition:
    box-shadow var(--dur-md) var(--ease),
    border-color var(--dur-md) var(--ease),
    transform var(--dur-md) var(--ease);
}

@media (hover: hover) and (pointer: fine) {
  .trust-banner:hover {
    border-color: rgba(255, 255, 255, 0.1);
    box-shadow:
      0 20px 48px rgba(2, 6, 23, 0.12),
      0 0 0 1px rgba(59, 130, 246, 0.08);
    transform: translateY(-2px);
  }
}

.trust-banner__item { text-align: center; }

.trust-banner__value {
  display: block;
  font-family: var(--font-sans);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 600;
  color: var(--white);
  letter-spacing: -0.025em;
  line-height: 1;
}

.trust-banner__label {
  display: block;
  font-size: 0.8125rem;
  color: rgba(255, 255, 255, 0.58);
  margin-top: 0.4rem;
}

.trust-banner__divider {
  width: 1px;
  height: 48px;
  background: rgba(255, 255, 255, 0.1);
}

.trust__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.trust__text .section__title { margin-bottom: 1rem; }

.trust__text p {
  color: var(--gray-600);
  margin-bottom: 2rem;
  font-size: 1.0625rem;
  line-height: 1.47;
}

.trust__visual {
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  aspect-ratio: 4/5;
  box-shadow: 0 8px 32px rgba(2, 6, 23, 0.08);
  transition: box-shadow 0.6s var(--ease);
}

@media (hover: hover) and (pointer: fine) {
  .trust__visual:hover {
    box-shadow:
      0 12px 40px rgba(2, 6, 23, 0.1),
      0 36px 72px rgba(2, 6, 23, 0.06);
  }
}

.trust__visual img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1s var(--ease);
}

@media (hover: hover) {
  .trust__visual:hover img {
    transform: scale(1.04);
  }
}

.trust__badge {
  position: absolute;
  bottom: 1.5rem;
  left: 1.5rem;
  right: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.25rem;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
  border-radius: 16px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.trust__badge img { width: 40px; height: 40px; object-fit: contain; }

.trust__badge strong {
  display: block;
  font-family: var(--font-sans);
  font-size: 0.9375rem;
  color: var(--navy-900);
}

.trust__badge span { font-size: 0.75rem; color: var(--gray-500); }

/* FAQ */
.faq {
  padding: var(--section-y) 0 calc(var(--section-y) * 0.85);
  background: var(--gray-50);
}

.section__header--center { text-align: center; margin-bottom: 3rem; }

.faq__list { max-width: 720px; margin-inline: auto; }

.faq__item {
  background: var(--white);
  border-radius: 16px;
  margin-bottom: 0.65rem;
  border: 1px solid var(--gray-200);
  overflow: hidden;
  transition:
    box-shadow var(--dur-md) var(--ease),
    border-color var(--dur-md) var(--ease),
    transform var(--dur-md) var(--ease);
}

.faq__item[open] { box-shadow: 0 8px 32px rgba(10, 22, 40, 0.08); }

@media (hover: hover) and (pointer: fine) {
  .faq__item:hover {
    border-color: rgba(148, 163, 184, 0.55);
    transform: translateY(-1px);
  }
}

.faq__item summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.35rem 1.5rem;
  font-family: var(--font-sans);
  font-size: 1.05rem;
  font-weight: 500;
  color: var(--navy-900);
  cursor: pointer;
  list-style: none;
  transition: background var(--dur-md) var(--ease);
}

@media (hover: hover) and (pointer: fine) {
  .faq__item summary:hover {
    background: rgba(248, 250, 252, 0.85);
  }

  .faq__item[open] summary:hover {
    background: rgba(248, 250, 252, 0.5);
  }
}

.faq__item summary::-webkit-details-marker { display: none; }

.faq__item summary::after {
  content: '+';
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  font-weight: 400;
  color: var(--accent);
  background: var(--gray-100);
  border-radius: 50%;
  transition: transform 0.3s var(--spring), background 0.2s, color 0.2s;
}

.faq__item[open] summary::after {
  content: '−';
  background: var(--navy-900);
  color: var(--white);
  transform: rotate(180deg);
}

.faq__item p {
  padding: 0 1.5rem 1.35rem;
  font-size: 0.9375rem;
  color: var(--gray-600);
  line-height: 1.47;
}

/* Apply */
.apply {
  position: relative;
  padding: var(--section-y) 0;
  overflow: hidden;
}

.apply__bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(145deg, var(--navy-950) 0%, var(--navy-800) 60%, var(--navy-700) 100%);
}

.apply__bg::after {
  content: '';
  position: absolute;
  top: -30%;
  right: -15%;
  width: 60%;
  height: 80%;
  background: radial-gradient(ellipse, rgba(59, 130, 246, 0.2) 0%, transparent 65%);
}

.apply__inner {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 4rem;
  align-items: start;
}

.apply__text p {
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.0625rem;
  margin-bottom: 1.5rem;
  line-height: 1.47;
}

.apply__trust {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.apply__trust span {
  font-size: 0.8125rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.55);
  padding: 0.4rem 0.9rem;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 100px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition:
    background var(--dur-md) var(--ease),
    border-color var(--dur-md) var(--ease),
    color var(--dur-md) var(--ease);
}

@media (hover: hover) and (pointer: fine) {
  .apply__trust span:hover {
    background: rgba(255, 255, 255, 0.09);
    border-color: rgba(255, 255, 255, 0.14);
    color: rgba(255, 255, 255, 0.72);
  }
}

.apply__form {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 2rem;
  backdrop-filter: blur(16px);
  overflow-x: clip;
  max-width: 100%;
}

.form__row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.form__field { display: block; margin-bottom: 1rem; }

.form__field span {
  display: block;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 0.4rem;
}

.form__field input,
.form__field textarea,
.form__field select {
  width: 100%;
  padding: 0.9rem 1rem;
  font-family: inherit;
  font-size: 0.9375rem;
  color: var(--white);
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 12px;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.form__field input::placeholder,
.form__field textarea::placeholder { color: rgba(255, 255, 255, 0.28); }

.form__field input:focus,
.form__field textarea:focus,
.form__field select:focus {
  outline: none;
  border-color: var(--accent-bright);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
}

.form__field textarea { resize: vertical; min-height: 88px; }

.form__field select {
  appearance: none;
  background-image:
    linear-gradient(45deg, transparent 50%, rgba(255, 255, 255, 0.72) 50%),
    linear-gradient(135deg, rgba(255, 255, 255, 0.72) 50%, transparent 50%);
  background-position:
    calc(100% - 18px) calc(50% - 4px),
    calc(100% - 12px) calc(50% - 4px);
  background-size: 6px 6px, 6px 6px;
  background-repeat: no-repeat;
  padding-right: 2.4rem;
}

.form__steps {
  margin-top: 0.25rem;
  padding-top: 0.25rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.form__step {
  overflow: hidden;
  max-height: 0;
  opacity: 0;
  margin-bottom: 0;
  pointer-events: none;
  transition:
    max-height 0.45s var(--ease),
    opacity 0.35s var(--ease),
    margin-bottom 0.35s var(--ease);
}

.form__step.form__step--visible {
  max-height: 520px;
  opacity: 1;
  margin-bottom: 0.25rem;
  pointer-events: auto;
}

.form__step.form__step--visible:last-child {
  margin-bottom: 0.75rem;
}

.form__group {
  margin: 0;
  padding: 0;
  border: 0;
  min-width: 0;
}

.form__legend {
  display: block;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 0.55rem;
  padding: 0;
}

.apply__form input[type="radio"] {
  position: absolute;
  opacity: 0;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
  pointer-events: none;
}

.form__options {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.form__options--triple .form__option {
  flex: 1 1 calc(33.333% - 0.34rem);
  min-width: 5.5rem;
}

.form__option {
  position: relative;
  flex: 1 1 calc(50% - 0.25rem);
  min-width: 7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 16px;
  font-size: 0.9375rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.92);
  text-align: center;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 18px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition:
    border-color 0.2s,
    background 0.2s,
    color 0.2s,
    box-shadow 0.2s;
}

.form__option:has(input:focus-visible) {
  outline: none;
  border-color: rgba(92, 160, 255, 0.9);
  box-shadow: 0 0 0 3px rgba(92, 160, 255, 0.25);
}

.form__option:has(input:checked) {
  color: var(--white);
  background: linear-gradient(135deg, rgba(77, 148, 255, 0.35), rgba(255, 255, 255, 0.1));
  border-color: rgba(92, 160, 255, 0.9);
  box-shadow:
    0 0 0 1px rgba(92, 160, 255, 0.35),
    0 12px 30px rgba(0, 0, 0, 0.22);
}

@media (hover: hover) and (pointer: fine) {
  .form__option:hover {
    border-color: rgba(255, 255, 255, 0.28);
    color: var(--white);
  }

  .form__option:has(input:checked):hover {
    border-color: rgba(92, 160, 255, 0.9);
  }
}

.form__checkbox {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
  cursor: pointer;
}

.form__checkbox input { margin-top: 0.2rem; accent-color: var(--accent); width: 18px; height: 18px; }

.form__checkbox span { font-size: 0.8125rem; color: rgba(255, 255, 255, 0.5); line-height: 1.5; }

/* Footer */
.footer {
  background: var(--navy-950);
  padding: 3rem 0 2rem;
  color: rgba(255, 255, 255, 0.45);
}

.footer__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  margin-bottom: 1.5rem;
}

.footer__logo img { height: 30px; filter: brightness(0) invert(1); opacity: 0.85; }

.footer__nav { display: flex; gap: 2rem; }

.footer__nav a {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.5);
  transition: color var(--dur-md) var(--ease);
}

.footer__nav a:hover { color: var(--white); }

.footer__bottom {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  font-size: 0.8125rem;
}

.footer__legal { display: flex; gap: 1.5rem; }
.footer__legal a {
  color: rgba(255, 255, 255, 0.45);
  transition: color var(--dur-md) var(--ease);
}
.footer__legal a:hover { color: var(--white); }

/* Keyboard focus — visible rings, clipped shapes avoided where needed */
.nav__links a:focus-visible,
.nav__mobile a:focus-visible,
.nav__cta:focus-visible,
.nav__toggle:focus-visible,
.footer__nav a:focus-visible,
.footer__legal a:focus-visible,
.footer__logo:focus-visible,
.nav__logo:focus-visible {
  outline: 2px solid rgba(96, 165, 250, 0.95);
  outline-offset: 3px;
}

.btn:focus-visible {
  outline: 2px solid rgba(96, 165, 250, 0.95);
  outline-offset: 3px;
}

.trust__text .btn--dark:focus-visible {
  outline-color: rgba(147, 197, 253, 0.95);
}

.faq__item summary:focus-visible {
  outline: none;
  box-shadow: inset 0 0 0 2px var(--accent);
}

/* Reveal */
.reveal {
  opacity: 0;
  transform: translate3d(0, 26px, 0);
  transition: opacity 0.88s var(--ease), transform 0.88s var(--ease);
}

.reveal.is-visible { opacity: 1; transform: translate3d(0, 0, 0); }

.reveal--delay-1 { transition-delay: 0.1s; }
.reveal--delay-2 { transition-delay: 0.2s; }
.reveal--delay-3 { transition-delay: 0.32s; }
.reveal--delay-4 { transition-delay: 0.44s; }
.reveal--delay-5 { transition-delay: 0.54s; }
.reveal--delay-6 { transition-delay: 0.64s; }

/* Toast */
.toast {
  position: fixed;
  bottom: 5rem;
  left: 50%;
  transform: translateX(-50%) translateY(80px);
  background: var(--navy-900);
  color: var(--white);
  padding: 1rem 1.5rem;
  border-radius: 14px;
  font-weight: 500;
  font-size: 0.9375rem;
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.3);
  z-index: 10000;
  opacity: 0;
  transition: transform 0.5s var(--spring), opacity 0.3s;
}

.toast.is-visible {
  transform: translateX(-50%) translateY(0);
  opacity: 1;
}

/* Responsive */
@media (max-width: 1024px) {
  .editorial__split,
  .trust__grid,
  .apply__inner { grid-template-columns: 1fr; }

  .trust-banner__divider { display: none; }
}

@media (max-width: 768px) {
  :root {
    --nav-height: 60px;
    --section-y: clamp(3.25rem, 9vw, 5.5rem);
    --container: min(1180px, calc(100% - 1.5rem));
  }

  body { line-height: 1.5; }

  .nav__links { display: none; }
  .nav__toggle { display: flex; }
  .nav__mobile { display: flex; }

  .nav__inner { gap: 0.5rem; }
  .nav__logo img { height: 28px; }

  .nav__cta {
    display: inline-flex;
    margin-left: auto;
    margin-right: 0.35rem;
    padding: 0.5rem 0.9rem;
    font-size: 0.75rem;
    min-height: 40px;
    white-space: nowrap;
  }

  .section__title { margin-bottom: 1rem; }
  .section__header--center { margin-bottom: 2rem; }

  .editorial__lead {
    font-size: 1.05rem;
    line-height: 1.5;
  }

  .editorial__body p,
  .recruit-panel__body p,
  .trust__text p,
  .apply__text p {
    line-height: 1.52;
    max-width: 36rem;
  }

  .pull-quote { margin-bottom: 2.25rem; }

  .trust-banner {
    gap: 1.25rem;
    padding: 1.5rem 1.25rem;
    margin-bottom: 2.5rem;
  }

  .form__row { grid-template-columns: 1fr; }

  /* Hero mobile — full viewport landing; story below fold */
  .hero {
    min-height: 100svh;
    max-height: none;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    overflow: hidden;
    margin-bottom: 0;
  }

  .hero__overlay {
    background:
      linear-gradient(
        180deg,
        rgba(2, 6, 23, 0.68) 0%,
        rgba(7, 21, 37, 0.36) 42%,
        rgba(2, 6, 23, 0.58) 100%
      ),
      radial-gradient(ellipse 110% 85% at 50% 30%, rgba(2, 6, 23, 0.28) 0%, rgba(2, 6, 23, 0.62) 75%);
  }

  .hero__img {
    object-fit: cover;
    object-position: center 22%;
  }

  .desktop-only { display: none; }
  .mobile-only { display: block; }

  .hero__content {
    flex: 0 1 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: calc(var(--nav-height) + 0.5rem) 0 0.75rem;
    margin: auto 0;
  }

  .mobile-only .hero__title {
    font-size: clamp(2.4rem, 10vw, 3.4rem);
    line-height: 1.03;
    letter-spacing: -0.028em;
    margin-bottom: 0.75rem;
  }

  .mobile-only .hero__subtitle {
    font-size: 1.05rem;
    line-height: 1.55;
    max-width: 34rem;
    margin-bottom: 1rem;
    color: rgba(255, 255, 255, 0.86);
  }

  .hero__actions {
    gap: 0.45rem;
    margin-top: 0.15rem;
  }

  .hero__actions .btn {
    min-height: 46px;
    padding: 0.78rem 1.2rem;
  }

  .hero__actions .btn--lg {
    padding: 0.78rem 1.25rem;
    font-size: 0.9375rem;
  }

  /* Story starts after hero — no overlap into first screen */
  #story.editorial,
  #story.section--soft-top {
    margin-top: 0;
    transform: none;
  }

  #story.section--soft-top {
    padding-top: var(--section-y);
  }

  /* Form mobile */
  .apply__inner {
    gap: 2.25rem;
  }

  .apply__form {
    width: 100%;
    max-width: 100%;
    padding: 1.35rem 20px;
    border-radius: 20px;
    overflow: hidden;
  }

  .form__group {
    margin: 0;
    padding: 0;
    border: none;
    min-width: 0;
  }

  .form__legend {
    font-size: 0.8125rem;
    margin-bottom: 0.65rem;
    color: rgba(255, 255, 255, 0.65);
  }

  .form__options {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.6rem;
  }

  .form__options--triple {
    grid-template-columns: repeat(3, 1fr);
  }

  .form__option {
    flex: none;
    min-width: 0;
    min-height: 52px;
    padding: 16px;
    font-size: 0.9375rem;
    font-weight: 600;
  }

  .form__field input,
  .form__field textarea,
  .form__field select {
    min-height: 50px;
    border-radius: 14px;
    font-size: 1rem;
  }

  .form__checkbox {
    align-items: flex-start;
    gap: 0.85rem;
    margin-bottom: 1.35rem;
  }

  .form__checkbox input {
    flex-shrink: 0;
    width: 22px;
    height: 22px;
    margin-top: 0.15rem;
    accent-color: var(--accent-bright);
  }

  .form__checkbox span {
    flex: 1;
    font-size: 0.875rem;
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.72);
  }

  .apply__form .btn--full {
    min-height: 56px;
    padding: 1rem 1.5rem;
    font-size: 1.0625rem;
    font-weight: 700;
    border-radius: 100px;
    letter-spacing: 0.01em;
  }

  /* Footer mobile */
  .footer__top { flex-direction: column; align-items: flex-start; gap: 1.5rem; }
  .footer__bottom { flex-direction: column; }

  html,
  body {
    overflow-x: hidden;
    max-width: 100%;
  }

  .container,
  .apply__form,
  .phone-showcase__device {
    max-width: 100%;
  }
}

@media (max-width: 480px) and (max-height: 740px) {
  .hero__content {
    padding-top: calc(var(--nav-height) + 0.35rem);
    padding-bottom: 0.5rem;
  }

  .mobile-only .hero__title {
    margin-bottom: 0.55rem;
  }

  .mobile-only .hero__subtitle {
    margin-bottom: 0.85rem;
  }

  .hero__actions {
    gap: 0.4rem;
  }

  .hero__actions .btn,
  .hero__actions .btn--lg {
    min-height: 44px;
    padding: 0.7rem 1.1rem;
  }
}

@media (max-width: 480px) {
  :root {
    --nav-height: 56px;
    --section-y: clamp(2.5rem, 7.5vw, 3.75rem);
    --container: min(1180px, calc(100% - 1.25rem));
  }

  .section--soft-top { padding-top: var(--section-y); }

  .btn {
    min-height: 48px;
    white-space: normal;
    text-align: center;
  }

  .btn--sm { min-height: 40px; }

  /* Hero: stacked CTAs, still within 100svh from 768px rules */
  .hero__img {
    object-position: center 20%;
  }

  .hero__content {
    padding-bottom: 0.65rem;
  }

  .hero__actions {
    flex-direction: column;
    width: 100%;
    gap: 0.4rem;
    margin-top: 0.1rem;
  }

  .hero__actions .btn {
    width: 100%;
    min-height: 46px;
    padding: 0.75rem 1.15rem;
  }

  .btn--glow { animation: none; }

  .section__title {
    font-size: clamp(1.65rem, 6.8vw, 2.25rem);
    line-height: 1.1;
  }

  .section__title--editorial { font-size: clamp(1.75rem, 7.2vw, 2.35rem); }

  .editorial__lead { font-size: 1rem; margin-bottom: 1rem; }

  .editorial__body p { margin-bottom: 0.9rem; }

  .editorial__closing {
    font-size: 1rem;
    padding-left: 1rem;
    margin-top: 1.15rem !important;
  }

  .pull-quote {
    font-size: clamp(1.35rem, 5.5vw, 1.75rem);
    margin-bottom: 1.75rem;
  }

  .pull-quote__mark { font-size: 2.75rem; }

  .editorial__split { gap: 1.5rem; margin-bottom: 1.5rem; }

  .pill-row { gap: 0.45rem; }

  .pill {
    font-size: 0.75rem;
    padding: 0.4rem 0.85rem;
  }

  .phone-showcase {
    padding-block: var(--section-y) calc(var(--section-y) * 0.85);
  }

  .phone-showcase .container { gap: 1.5rem; }

  .phone-showcase__copy {
    width: 100%;
    font-size: 0.9rem;
    line-height: 1.55;
    gap: 0.6rem;
  }

  .phone-showcase__device {
    width: min(100%, 252px);
    max-width: min(268px, 100%);
    margin-inline: auto;
  }

  .lead-econ__card,
  .growth-section__card,
  .trust-banner,
  .apply__form {
    max-width: 100%;
  }

  .recruit-panel__title {
    font-size: clamp(1.85rem, 8vw, 2.5rem);
    margin-bottom: 1.25rem;
  }

  .recruit-panel__quote { padding: 1rem 0 1rem 1rem; margin-bottom: 1rem; }

  .recruit-panel__quote p { font-size: 1.1rem; line-height: 1.4; }

  .recruit-checklist { margin-bottom: 1.35rem; }

  .recruit-checklist li {
    padding: 0.5rem 0 0.5rem 1.75rem;
    font-size: 0.9375rem;
  }

  .lead-econ,
  .growth-section { margin-top: 1.5rem; }

  .lead-econ__card,
  .growth-section__card {
    padding: 1.35rem 1rem;
    border-radius: 18px;
  }

  .lead-econ__header,
  .growth-section__header { margin-bottom: 1.25rem; }

  .lead-econ__title,
  .growth-section__title { font-size: 1.15rem; }

  .lead-econ__lede,
  .growth-section__lede { font-size: 0.875rem; line-height: 1.5; }

  .lead-econ__step-value { font-size: clamp(1.25rem, 5.5vw, 1.55rem); }

  .trust-banner {
    flex-direction: column;
    gap: 1rem;
    padding: 1.35rem 1rem;
    border-radius: 18px;
    margin-bottom: 2rem;
  }

  .trust-banner__value { font-size: clamp(1.65rem, 7vw, 2.25rem); }

  .trust__text p { font-size: 1rem; margin-bottom: 1.35rem; }

  .faq__item summary {
    font-size: 0.95rem;
    padding: 1.1rem 1rem;
    gap: 0.65rem;
  }

  .faq__item p {
    padding: 0 1rem 1.1rem;
    font-size: 0.9rem;
    line-height: 1.52;
  }

  .apply__inner { gap: 2rem; }

  .apply__text p { font-size: 1rem; }

  .apply__form {
    padding: 1.25rem 20px;
    border-radius: 18px;
  }

  .apply__trust { gap: 0.5rem; }

  .apply__trust span {
    font-size: 0.75rem;
    padding: 0.35rem 0.7rem;
  }

  .form__options--triple {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }

  .form__option {
    min-height: 50px;
    padding: 16px;
    font-size: 0.9rem;
  }

  .apply__form .btn--full {
    min-height: 54px;
    font-size: 1rem;
  }

  .footer { padding: 2.25rem 0 1.5rem; }

  .footer__nav {
    flex-wrap: wrap;
    gap: 0.85rem 1.25rem;
  }
}

@media (max-width: 390px) {
  :root {
    --container: min(1180px, calc(100% - 1rem));
  }

  .nav__cta {
    padding: 0.45rem 0.7rem;
    font-size: 0.6875rem;
    min-height: 36px;
  }

  .mobile-only .hero__title {
    margin-bottom: 0.65rem;
  }

  .mobile-only .hero__subtitle {
    margin-bottom: 0.9rem;
  }

  .hero__actions {
    gap: 0.38rem;
  }

  .form__options {
    gap: 0.5rem;
  }

  .form__option {
    min-height: 48px;
    font-size: 0.875rem;
  }

  .trust__badge {
    left: 0.75rem;
    right: 0.75rem;
    bottom: 0.75rem;
    padding: 0.75rem 0.9rem;
    gap: 0.65rem;
  }

  .lead-econ__unit-wrap {
    display: block;
    font-size: 0.52em;
    margin-top: 0.15rem;
  }

  .growth-section__big { font-size: 1.1rem; }

  .growth-section__body { font-size: 0.8125rem; max-width: 100%; }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  .hero__mesh,
  .hero__mesh::before,
  .hero__glow,
  .hero__img,
  .hero__overlay::after {
    animation: none !important;
  }
  .form__step {
    transition: none !important;
  }
  .btn--glow { animation: none !important; }
  .reveal {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }
  html { scroll-behavior: auto; }
}
