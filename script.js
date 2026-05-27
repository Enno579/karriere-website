/**
 * Enno Scharf – D2D Solar recruiting landing
 */

(function () {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const nav = document.getElementById('nav');
  const navToggle = document.getElementById('navToggle');
  const navMobile = document.getElementById('navMobile');
  const applyForm = document.getElementById('applyForm');

  function getScrollOffsetPx() {
    const root = getComputedStyle(document.documentElement);
    return Math.round(parseFloat(root.getPropertyValue('--nav-height')) || 76);
  }

  // ─── Navigation scroll state ───────────────────────────────
  function handleNavScroll() {
    if (window.scrollY > 40) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }
  }

  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll();

  // ─── Mobile menu ───────────────────────────────────────────
  if (navToggle && navMobile) {
    navToggle.addEventListener('click', () => {
      const isOpen = navToggle.classList.toggle('is-active');
      navMobile.classList.toggle('is-open', isOpen);
      navToggle.setAttribute('aria-expanded', isOpen);
      navMobile.setAttribute('aria-hidden', !isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    navMobile.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('is-active');
        navMobile.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
        navMobile.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      });
    });
  }

  // ─── Scroll reveal ─────────────────────────────────────────
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -36px 0px' }
  );

  document.querySelectorAll('.reveal').forEach((el) => {
    if (prefersReducedMotion.matches) {
      el.classList.add('is-visible');
      return;
    }
    revealObserver.observe(el);
  });

  // ─── Counter animation ─────────────────────────────────────
  function formatValue(value, format, suffix) {
    if (format === 'currency') {
      return Math.floor(value).toLocaleString('de-DE') + ' €';
    }
    if (suffix === 'k+') return Math.floor(value) + 'k+';
    if (suffix) return Math.floor(value) + suffix;
    return value % 1 !== 0 ? value.toFixed(1) : Math.floor(value);
  }

  function finalizeCounter(el, target) {
    const format = el.dataset.format || '';
    const suffix = el.dataset.suffix || '';
    el.textContent = formatValue(target, format, suffix);
  }

  function animateCounter(el, target, duration = 2000) {
    const format = el.dataset.format || '';
    const suffix = el.dataset.suffix || '';
    const isDecimal = target % 1 !== 0;
    const start = performance.now();

    function update(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      const current = target * eased;

      if (format === 'currency') {
        el.textContent = formatValue(Math.floor(current), 'currency');
      } else if (suffix === 'k+') {
        el.textContent = Math.floor(current) + 'k+';
      } else {
        el.textContent = isDecimal ? current.toFixed(1) : Math.floor(current);
      }

      if (progress < 1) requestAnimationFrame(update);
      else el.textContent = formatValue(target, format, suffix);
    }

    requestAnimationFrame(update);
  }

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseFloat(el.dataset.count);
        if (isNaN(target)) return;
        if (prefersReducedMotion.matches) finalizeCounter(el, target);
        else animateCounter(el, target);
        counterObserver.unobserve(el);
      });
    },
    { threshold: 0.4 }
  );

  document.querySelectorAll('[data-count]').forEach((el) => counterObserver.observe(el));

  // ─── FAQ accordion ───────────────────────────────────────────
  document.querySelectorAll('.faq__item').forEach((item) => {
    item.addEventListener('toggle', () => {
      if (!item.open) return;
      document.querySelectorAll('.faq__item').forEach((other) => {
        if (other !== item && other.open) other.open = false;
      });
    });
  });

  // ─── Form ────────────────────────────────────────────────────
  function showToast(message) {
    let toast = document.querySelector('.toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'toast';
      toast.setAttribute('role', 'status');
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('is-visible');
    setTimeout(() => toast.classList.remove('is-visible'), 4500);
  }

  function focusFirstInvalid(form) {
    const invalid = form.querySelector(':invalid');
    if (invalid && typeof invalid.focus === 'function') invalid.focus();
  }

  if (applyForm) {
    applyForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      if (!applyForm.checkValidity()) {
        showToast('Bitte fülle alle Pflichtfelder aus.');
        focusFirstInvalid(applyForm);
        return;
      }

      const submitBtn = applyForm.querySelector('button[type="submit"], input[type="submit"]');
      const prevDisabled = submitBtn ? submitBtn.disabled : false;
      if (submitBtn) submitBtn.disabled = true;

      try {
        const action = applyForm.getAttribute('action') || '';
        const method = (applyForm.getAttribute('method') || 'POST').toUpperCase();

        // If no real endpoint is set, fall back to normal browser submission.
        if (!action || action === '#') {
          applyForm.submit();
          return;
        }

        const formData = new FormData(applyForm);
        const res = await fetch(action, {
          method,
          body: formData,
          headers: { Accept: 'application/json' },
        });

        if (res.ok) {
          showToast('Danke! Ich melde mich innerhalb von 48 Stunden persönlich bei dir.');
          applyForm.reset();
          return;
        }

        let payload = null;
        try {
          payload = await res.json();
        } catch (_) {
          payload = null;
        }

        if (payload && Array.isArray(payload.errors) && payload.errors.length) {
          showToast(payload.errors.map((er) => er.message).filter(Boolean).join(' ') || 'Fehler beim Absenden. Bitte versuche es erneut.');
        } else {
          showToast('Fehler beim Absenden. Bitte versuche es erneut.');
        }
      } catch (_) {
        showToast('Netzwerkfehler. Bitte versuche es erneut.');
      } finally {
        if (submitBtn) submitBtn.disabled = prevDisabled;
      }
    });
  }

  // ─── Footer year ─────────────────────────────────────────────
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ─── Smooth scroll with nav offset ───────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const id = anchor.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const offset = getScrollOffsetPx();
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({
        top,
        behavior: prefersReducedMotion.matches ? 'auto' : 'smooth',
      });
    });
  });
})();
