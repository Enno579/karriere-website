/**
 * Enno Scharf – D2D Solar Recruiting Landingpage
 *
 * Enthält:
 *   1. Header-Verhalten beim Scrollen (rAF-gedrosselt, mit Hysterese)
 *   2. Mobile-Menü inkl. iOS-tauglicher Scroll-Sperre
 *   3. Scroll-Reveal
 *   4. FAQ-Akkordeon
 *   5. Multi-Step-Bewerbungsdialog
 *   6. Ablauf vor Ort – Fortschritt (mobil am Scroll, ab 900px als Lauf)
 *   7. Datenschutz-Hinweis
 */
(function () {
  'use strict';

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  /* ─── Scroll-Sperre ──────────────────────────────────────────
     overflow:hidden auf <body> wird von iOS Safari ignoriert und
     verliert außerdem die Scrollposition. Stattdessen body fixieren
     und den Offset beim Entsperren zurückgeben.
     Zählerbasiert, damit Menü und Dialog sich nicht gegenseitig
     die Sperre wegnehmen.
     ------------------------------------------------------------ */
  const scrollLock = (function () {
    let depth = 0;
    let savedY = 0;

    return {
      lock() {
        if (depth++ > 0) return;
        savedY = window.scrollY;
        document.body.style.top = `-${savedY}px`;
        document.body.classList.add('is-scroll-locked');
      },
      unlock() {
        if (depth === 0 || --depth > 0) return;
        document.body.classList.remove('is-scroll-locked');
        document.body.style.top = '';
        // instant, sonst scrollt die Seite wegen scroll-behavior:smooth sichtbar zurück
        window.scrollTo({ top: savedY, behavior: 'instant' });
      },
    };
  })();

  /* ─── 1. Header ──────────────────────────────────────────────
     Der Scroll-Handler lief vorher bei jedem einzelnen Scroll-Event
     und schrieb die Klasse auch dann neu, wenn sich nichts geändert
     hatte – das erzwang laufend Style-Recalcs. Jetzt: rAF-Drosselung,
     Schreiben nur bei echtem Statuswechsel, und getrennte Schwellen
     (Hysterese), damit die Leiste an der Grenze nicht flackert.
     ------------------------------------------------------------ */
  const nav = document.getElementById('nav');
  const navToggle = document.getElementById('navToggle');
  const navMobile = document.getElementById('navMobile');

  const SCROLLED_ON = 48;   // ab hier bekommt der Header seinen Hintergrund
  const SCROLLED_OFF = 16;  // erst darunter wieder transparent
  const HIDE_AFTER = 220;   // darüber darf der Header ausgeblendet werden
  const HIDE_DELTA = 6;     // Mindestbewegung, bevor ein-/ausgeblendet wird

  let lastY = window.scrollY;
  let isScrolled = false;
  let isHidden = false;
  let navTicking = false;

  function readScroll() {
    navTicking = false;
    const y = Math.max(0, window.scrollY);
    const delta = y - lastY;

    if (!isScrolled && y > SCROLLED_ON) {
      isScrolled = true;
      nav.classList.add('nav--scrolled');
    } else if (isScrolled && y < SCROLLED_OFF) {
      isScrolled = false;
      nav.classList.remove('nav--scrolled');
    }

    // Menü offen -> Header muss stehen bleiben, der Schließen-Button sitzt darin
    const menuOpen = navMobile && navMobile.classList.contains('is-open');

    if (menuOpen) {
      if (isHidden) {
        isHidden = false;
        nav.classList.remove('nav--hidden');
      }
      lastY = y;
      return;
    }

    if (Math.abs(delta) > HIDE_DELTA) {
      const shouldHide = delta > 0 && y > HIDE_AFTER;
      if (shouldHide !== isHidden) {
        isHidden = shouldHide;
        nav.classList.toggle('nav--hidden', isHidden);
      }
      lastY = y;
    }
  }

  function onScroll() {
    if (navTicking) return;
    navTicking = true;
    requestAnimationFrame(readScroll);
  }

  if (nav) {
    window.addEventListener('scroll', onScroll, { passive: true });
    readScroll();
  }

  /* ─── 2. Mobile-Menü ─────────────────────────────────────── */
  function closeMenu() {
    if (!navToggle || !navMobile) return;
    if (!navMobile.classList.contains('is-open')) return;
    navToggle.classList.remove('is-active');
    navMobile.classList.remove('is-open');
    nav.classList.remove('nav--menu-open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Menü öffnen');
    navMobile.setAttribute('aria-hidden', 'true');
    scrollLock.unlock();
    // Während der Sperre stand die Seite auf 0, beim Entsperren springt sie
    // auf die gemerkte Position zurück. Ohne Resync liest der Header-Handler
    // diesen Sprung als kräftige Abwärtsbewegung und blendet sich aus – der
    // Header wäre nach dem Schließen weg.
    lastY = window.scrollY;
  }

  if (navToggle && navMobile) {
    navToggle.addEventListener('click', () => {
      if (navMobile.classList.contains('is-open')) {
        closeMenu();
        return;
      }
      navToggle.classList.add('is-active');
      navMobile.classList.add('is-open');
      // schaltet den Header auf hell auf dunkel um, siehe .nav--menu-open
      nav.classList.add('nav--menu-open');
      navToggle.setAttribute('aria-expanded', 'true');
      navToggle.setAttribute('aria-label', 'Menü schließen');
      navMobile.setAttribute('aria-hidden', 'false');
      nav.classList.remove('nav--hidden');
      isHidden = false;
      scrollLock.lock();
    });

    navMobile.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMenu();
    });
  }

  /* ─── 3. Scroll-Reveal ───────────────────────────────────── */
  const revealables = document.querySelectorAll('.reveal');

  if (reduceMotion.matches || !('IntersectionObserver' in window)) {
    revealables.forEach((el) => el.classList.add('is-visible'));
  } else {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -36px 0px' }
    );
    revealables.forEach((el) => revealObserver.observe(el));
  }

  /* ─── 4. FAQ – immer nur eine Antwort offen ──────────────── */
  const faqItems = document.querySelectorAll('.faq__item');
  faqItems.forEach((item) => {
    item.addEventListener('toggle', () => {
      if (!item.open) return;
      faqItems.forEach((other) => {
        if (other !== item && other.open) other.open = false;
      });
    });
  });

  /* ─── 5. Multi-Step-Bewerbungsdialog ─────────────────────────
     Steuert Sichtbarkeit, Validierung und Fortschritt der Schritte.
     Fokusfalle, ESC und Top-Layer übernimmt das native <dialog>.
     ------------------------------------------------------------ */
  const dialog = document.getElementById('applyDialog');
  const form = document.getElementById('applyForm');

  if (dialog && form && typeof dialog.showModal === 'function') {
    const steps = Array.from(form.querySelectorAll('[data-step]'));
    const backBtn = document.getElementById('applyBack');
    const nextBtn = document.getElementById('applyNext');
    const submitBtn = document.getElementById('applySubmit');
    const progressFill = document.getElementById('applyProgressFill');
    const progressLabel = document.getElementById('applyProgressLabel');
    const errorBox = document.getElementById('applyError');
    const successBox = document.getElementById('applySuccess');
    const stepper = document.getElementById('applyStepper');

    let index = 0;
    let lastFocused = null;

    /* Mit JS übernimmt die Schritt-Validierung unten. Das `required` am
       Datenschutz-Feld bleibt trotzdem im Markup: ohne JS ist es die
       einzige Absicherung, dass die Einwilligung gesetzt wurde. */
    form.setAttribute('novalidate', '');

    function radioValue(name) {
      const checked = form.querySelector(`input[name="${name}"]:checked`);
      return checked ? checked.value : '';
    }

    /* Ein Schritt kann an eine frühere Antwort gekoppelt sein
       (data-step-when="feld=wert"). Trifft sie nicht zu, wird er
       übersprungen und seine Felder aus dem Versand genommen. */
    function isApplicable(step) {
      const when = step.dataset.stepWhen;
      if (!when) return true;
      const [name, expected] = when.split('=');
      return radioValue(name) === expected;
    }

    function activeSteps() {
      return steps.filter(isApplicable);
    }

    function fieldsOf(step) {
      return Array.from(step.querySelectorAll('input, select, textarea'))
        .filter((f) => f.type !== 'hidden');
    }

    function showError(message) {
      errorBox.textContent = message;
      errorBox.hidden = false;
    }

    function hideError() {
      errorBox.hidden = true;
      errorBox.textContent = '';
    }

    /* Pflichtfelder werden erst beim Verlassen des Schritts geprüft.
       `required` steht bewusst nicht im Markup: sonst blockiert die
       Browser-Validierung den Versand wegen Feldern in noch nicht
       sichtbaren oder übersprungenen Schritten. */
    function validateStep(step) {
      const required = fieldsOf(step).filter((f) => f.dataset.requiredStep !== undefined);
      fieldsOf(step).forEach((f) => f.removeAttribute('aria-invalid'));

      const radios = required.filter((f) => f.type === 'radio');
      if (radios.length && !radioValue(radios[0].name)) {
        showError('Bitte wähle eine Option aus.');
        return false;
      }

      for (const field of required) {
        if (field.type === 'radio') continue;

        if (field.type === 'checkbox') {
          if (!field.checked) {
            showError('Bitte stimme der Datenschutzerklärung zu.');
            field.focus();
            return false;
          }
          continue;
        }

        if (!field.value.trim()) {
          showError('Bitte fülle alle Felder aus.');
          field.setAttribute('aria-invalid', 'true');
          field.focus();
          return false;
        }

        if (field.type === 'email' && !field.checkValidity()) {
          showError('Bitte gib eine gültige E-Mail-Adresse an.');
          field.setAttribute('aria-invalid', 'true');
          field.focus();
          return false;
        }
      }

      hideError();
      return true;
    }

    function render(focusStep) {
      const list = activeSteps();
      index = Math.max(0, Math.min(index, list.length - 1));
      const current = list[index];

      steps.forEach((step) => {
        step.hidden = step !== current;
        // Übersprungene Schritte dürfen nichts mitsenden
        const skipped = !isApplicable(step);
        fieldsOf(step).forEach((f) => { f.disabled = skipped; });
      });

      const isLast = index === list.length - 1;
      backBtn.hidden = index === 0;
      nextBtn.hidden = isLast;
      submitBtn.hidden = !isLast;

      progressFill.style.width = `${((index + 1) / list.length) * 100}%`;
      progressLabel.textContent = `Schritt ${index + 1} von ${list.length}`;

      if (focusStep) {
        stepper.scrollTop = 0;
        const target = current.querySelector('input:not([type="radio"]), select, textarea');
        // Auf Mobilgeräten kein Autofokus – das würde sofort die Tastatur aufziehen
        if (target && window.matchMedia('(min-width: 641px)').matches) target.focus();
      }
    }

    function goNext() {
      const list = activeSteps();
      if (!validateStep(list[index])) return;
      if (index < list.length - 1) {
        index += 1;
        render(true);
      }
    }

    function goBack() {
      if (index === 0) return;
      hideError();
      index -= 1;
      render(true);
    }

    /* Einfachauswahl: nach dem Tippen automatisch weiter.
       Kurze Verzögerung, damit die Auswahl sichtbar bestätigt wird. */
    form.querySelectorAll('[data-autoadvance] input[type="radio"]').forEach((radio) => {
      radio.addEventListener('change', () => {
        hideError();
        // Die Antwort kann Folgeschritte ein- oder ausblenden
        render(false);
        if (index >= activeSteps().length - 1) return;

        window.setTimeout(() => {
          // Nur weiter, wenn der Nutzer inzwischen nicht selbst navigiert hat
          const current = activeSteps()[index];
          if (current && current.contains(radio)) goNext();
        }, reduceMotion.matches ? 0 : 260);
      });
    });

    form.querySelectorAll('input, select, textarea').forEach((field) => {
      field.addEventListener('input', () => {
        field.removeAttribute('aria-invalid');
        hideError();
      });
    });

    nextBtn.addEventListener('click', goNext);
    backBtn.addEventListener('click', goBack);

    // Enter in einem Textfeld heißt "weiter", nicht "absenden"
    form.addEventListener('keydown', (e) => {
      if (e.key !== 'Enter') return;
      if (e.target.tagName === 'TEXTAREA') return;
      if (!nextBtn.hidden) {
        e.preventDefault();
        goNext();
      }
    });

    /* Öffnen / Schließen */
    function openDialog(trigger) {
      lastFocused = trigger || document.activeElement;
      successBox.hidden = true;
      form.hidden = false;
      hideError();
      index = 0;
      render(false);
      dialog.showModal();
      scrollLock.lock();
    }

    function closeDialog() {
      dialog.close();
    }

    dialog.addEventListener('close', () => {
      scrollLock.unlock();
      if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
    });

    // Klick auf den Backdrop schließt den Dialog
    dialog.addEventListener('click', (e) => {
      if (e.target === dialog) closeDialog();
    });

    document.querySelectorAll('[data-apply-open]').forEach((trigger) => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        closeMenu();
        openDialog(trigger);
      });
    });

    dialog.querySelectorAll('[data-apply-close]').forEach((btn) => {
      btn.addEventListener('click', closeDialog);
    });

    /* Versand */
    form.addEventListener('submit', async (e) => {
      const list = activeSteps();
      if (!validateStep(list[index])) {
        e.preventDefault();
        return;
      }

      // Antwortadresse spiegeln: das sichtbare Feld heißt „E-Mail“, damit im
      // Posteingang deutsche Beschriftungen stehen – Formspree liest die
      // Antwortadresse aber aus `_replyto` (oder einem Feld namens `email`).
      const replyTo = form.querySelector('input[name="_replyto"]');
      const mailFeld = form.querySelector('input[type="email"]');
      if (replyTo && mailFeld) replyTo.value = mailFeld.value.trim();

      const action = form.getAttribute('action') || '';
      // Ohne echten Endpunkt den normalen Browser-Versand durchlassen
      if (!action || action === '#') return;

      e.preventDefault();

      const original = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = 'Wird gesendet …';

      try {
        const res = await fetch(action, {
          method: (form.getAttribute('method') || 'POST').toUpperCase(),
          body: new FormData(form),
          headers: { Accept: 'application/json' },
        });

        if (res.ok) {
          /* Meta-Standard-Event "Lead" - erst hier, wo der Versand bestaetigt
             ist, nicht schon beim Klick. Ohne Einwilligung existiert fbq gar
             nicht, deshalb die Pruefung; nach einem Widerruf sendet Meta von
             sich aus nichts mehr. Bewusst ohne Parameter: In den Pixel gehoeren
             keine Bewerberdaten. */
          if (typeof window.fbq === 'function') window.fbq('track', 'Lead');

          form.hidden = true;
          successBox.hidden = false;
          form.reset();
          return;
        }

        let payload = null;
        try {
          payload = await res.json();
        } catch (_) {
          payload = null;
        }

        const detail = payload && Array.isArray(payload.errors)
          ? payload.errors.map((err) => err.message).filter(Boolean).join(' ')
          : '';
        showError(detail || 'Das Absenden hat nicht geklappt. Bitte versuche es noch einmal.');
      } catch (_) {
        showError('Keine Verbindung zum Server. Bitte prüfe deine Internetverbindung.');
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = original;
      }
    });

    render(false);
  }

  /* ─── 6. "Dein Ablauf vor Ort" – Fortschritt beim Scrollen ────
     Früher schaltete ein IntersectionObserver den aktiven Schritt um,
     sobald dessen Karte einen schmalen Mittelstreifen berührte. Das
     ergibt harte Sprünge: zwischen zwei Auslösepunkten passiert nichts,
     dann wechselt alles auf einmal.

     Jetzt läuft die Darstellung direkt am Scrollstand entlang. Aus der
     Lage der Punkte zur Bildschirmmitte entstehen zwei Werte je Schritt:

       --near  0…1  Nähe zur Mitte  -> Deckkraft, Kartenfläche, Marker
       --fill  0…1  Füllstand der Linie zum nächsten Punkt

     Beide werden als CSS-Variablen gesetzt, das Aussehen bleibt damit
     vollständig im Stylesheet. Kein CSS-Transition nötig – der Wert
     folgt der Bewegung, statt ihr hinterherzulaufen.
     ------------------------------------------------------------ */
  const taskSteps = Array.from(document.querySelectorAll('[data-task-step]'));

  if (taskSteps.length) {
    // Klasse erst hier setzen: ohne JS bleiben alle Schritte voll sichtbar
    document.documentElement.classList.add('js-tasks');

    const markers = taskSteps.map((s) => s.querySelector('.tasks__marker') || s);
    let tasksTicking = false;
    let activeIndex = -1;

    const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v);

    function paintTasks() {
      tasksTicking = false;

      // Bezugslinie etwas über der Mitte – der Blick liegt beim Lesen höher
      const linie = window.innerHeight * 0.46;
      const mitten = markers.map((m) => {
        const r = m.getBoundingClientRect();
        return r.top + r.height / 2;
      });

      /* Abklingweite: über diese Distanz verliert ein Schritt seine
         Hervorhebung vollständig. Am Abstand der Punkte bemessen, damit
         die Übergänge auf jedem Viewport gleich weich wirken. */
      const abstand = mitten.length > 1
        ? Math.abs(mitten[mitten.length - 1] - mitten[0]) / (mitten.length - 1)
        : window.innerHeight * 0.5;
      const weite = Math.max(abstand, 120);

      let naechster = 0;
      for (let i = 0; i < mitten.length; i += 1) {
        if (mitten[i] <= linie) naechster = i;

        const near = clamp01(1 - Math.abs(mitten[i] - linie) / weite);
        // sanftes Ein- und Ausblenden statt linearer Rampe
        taskSteps[i].style.setProperty('--near', (near * near * (3 - 2 * near)).toFixed(3));

        if (i < mitten.length - 1) {
          const spanne = mitten[i + 1] - mitten[i];
          const fill = spanne > 0 ? clamp01((linie - mitten[i]) / spanne) : (linie >= mitten[i] ? 1 : 0);
          taskSteps[i].style.setProperty('--fill', fill.toFixed(3));
        }
      }

      /* Der Haken am letzten Punkt ist ein Zustand, kein Verlauf – er
         hängt weiter an einer Klasse, damit er nicht halb erscheint.
         `is-done` färbt nichts mehr (passierte Schritte bleiben grau),
         markiert den Fortschritt aber weiterhin im DOM. */
      if (naechster !== activeIndex) {
        activeIndex = naechster;
        taskSteps.forEach((step, i) => {
          step.classList.toggle('is-active', i === naechster);
          step.classList.toggle('is-done', i < naechster);
        });
      }
    }

    function onTasksScroll() {
      if (tasksTicking) return;
      tasksTicking = true;
      requestAnimationFrame(paintTasks);
    }

    /* ─── Waagerechte Darstellung ab TASKS_DESKTOP ──────────────
       Ab dieser Breite stehen die Schritte nebeneinander auf einer
       S-Kurve, und der Fortschritt läuft von selbst durch – der
       Scrollstand steuert ihn dort nicht mehr. Der Lauf startet
       erst, wenn die Section im Bild ist, und pausiert, sobald sie
       es verlässt: eine Animation, die niemand sieht, muss nicht
       laufen, und sie soll beim Hinscrollen von vorn beginnen.
       ------------------------------------------------------------ */
    const TASKS_DESKTOP = 900;
    const LAUF_REISE = 6600;   // Zeit von Punkt 1 bis Punkt 3
    const LAUF_HALTEN = 2600;  // fertigen Zustand stehen lassen
    const LAUF_BLENDE = 520;   // aus- und wieder einblenden

    const wrap = document.querySelector('.tasks__wrap');
    const curve = document.getElementById('tasksCurve');
    const track = curve && curve.querySelector('.tasks__curve-track');
    const lead = curve && curve.querySelector('.tasks__curve-lead');
    const head = curve && curve.querySelector('.tasks__curve-head');
    const list = document.getElementById('tasksList');

    const breit = window.matchMedia(`(min-width: ${TASKS_DESKTOP}px)`);
    const ruhig = window.matchMedia('(prefers-reduced-motion: reduce)');

    let laufFrame = null;
    let laufStart = 0;
    let laufSichtbar = false;
    let bahn = null;

    /* Die Kurve entsteht aus den echten Marker-Mitten. Sie fest ins
       Markup zu schreiben ginge nicht: die Punkte verschieben sich mit
       Breite, Schriftgröße und Textumbruch. */
    function baueKurve() {
      if (!curve || !wrap || !track) return null;
      const kasten = wrap.getBoundingClientRect();
      if (kasten.width === 0) return null;

      const punkte = markers.map((m) => {
        const r = m.getBoundingClientRect();
        return { x: r.left + r.width / 2 - kasten.left, y: r.top + r.height / 2 - kasten.top };
      });

      /* Waagerechte Kontrollpunkte, aber über die halbe Strecke hinaus
         (Faktor > 0.5, die beiden kreuzen sich also). Genau auf halber
         Strecke ergäbe das eine gleichmäßig weiche S-Form; gekreuzt
         bleibt die Kurve an den Punkten länger flach und fällt dazwischen
         steiler ab – deutlich markanter. */
      const ZUG = 0.68;
      let d = `M ${punkte[0].x.toFixed(1)} ${punkte[0].y.toFixed(1)}`;
      for (let i = 1; i < punkte.length; i += 1) {
        const a = punkte[i - 1];
        const b = punkte[i];
        const dx = (b.x - a.x) * ZUG;
        d += ` C ${(a.x + dx).toFixed(1)} ${a.y.toFixed(1)}, ${(b.x - dx).toFixed(1)} ${b.y.toFixed(1)}, ${b.x.toFixed(1)} ${b.y.toFixed(1)}`;
      }

      curve.setAttribute('viewBox', `0 0 ${kasten.width.toFixed(1)} ${kasten.height.toFixed(1)}`);
      track.setAttribute('d', d);
      lead.setAttribute('d', d);

      const laenge = lead.getTotalLength();
      /* Wo auf der Bahn liegt welcher Punkt? Nicht geschätzt, sondern
         abgetastet – bei ungleichen Abständen stimmen Drittel nicht. */
      const marken = punkte.map((p) => {
        let beste = 0;
        let abstand = Infinity;
        for (let l = 0; l <= laenge; l += 4) {
          const q = lead.getPointAtLength(l);
          const dd = (q.x - p.x) ** 2 + (q.y - p.y) ** 2;
          if (dd < abstand) { abstand = dd; beste = l; }
        }
        return beste;
      });

      lead.style.strokeDasharray = laenge;
      return { laenge, marken };
    }

    function zeichneLauf(p) {
      if (!bahn) return;
      const vorn = bahn.laenge * p;
      lead.style.strokeDashoffset = bahn.laenge - vorn;

      const q = lead.getPointAtLength(vorn);
      head.setAttribute('cx', q.x);
      head.setAttribute('cy', q.y);
      // Kopf nur unterwegs zeigen, nicht im Halten am Ende
      head.style.setProperty('--kopf', p > 0.02 && p < 0.995 ? '1' : '0');

      const weite = bahn.laenge / (markers.length - 1) * 0.7;
      let erreicht = 0;
      bahn.marken.forEach((mark, i) => {
        if (vorn >= mark - 2) erreicht = i;
        const near = clamp01(1 - Math.abs(vorn - mark) / weite);
        taskSteps[i].style.setProperty('--near', (near * near * (3 - 2 * near)).toFixed(3));
        taskSteps[i].style.removeProperty('--fill');
      });

      if (erreicht !== activeIndex) {
        activeIndex = erreicht;
        taskSteps.forEach((step, i) => {
          step.classList.toggle('is-active', i === erreicht);
          step.classList.toggle('is-done', i < erreicht);
        });
      }
    }

    function laufSchritt(jetzt) {
      if (!laufStart) laufStart = jetzt;
      const t = jetzt - laufStart;
      const runde = LAUF_REISE + LAUF_HALTEN + LAUF_BLENDE;

      if (t < LAUF_REISE) {
        const r = t / LAUF_REISE;
        // weicher Start und weiches Ende, gleichmäßig dazwischen
        zeichneLauf(r < 0.5 ? 2 * r * r : 1 - ((-2 * r + 2) ** 2) / 2);
        wrap.classList.remove('is-blende');
      } else if (t < LAUF_REISE + LAUF_HALTEN) {
        zeichneLauf(1);
        wrap.classList.remove('is-blende');
      } else if (t < runde) {
        wrap.classList.add('is-blende');
      } else {
        laufStart = jetzt;
        wrap.classList.remove('is-blende');
        zeichneLauf(0);
      }

      laufFrame = requestAnimationFrame(laufSchritt);
    }

    function laufAn() {
      if (laufFrame !== null) return;
      bahn = baueKurve();
      if (!bahn) return;
      if (ruhig.matches) { zeichneLauf(1); return; }
      wrap.style.setProperty('--lauf-blende', `${LAUF_BLENDE}ms`);
      laufStart = 0;
      laufFrame = requestAnimationFrame(laufSchritt);
    }

    function laufAus() {
      if (laufFrame !== null) cancelAnimationFrame(laufFrame);
      laufFrame = null;
      if (wrap) wrap.classList.remove('is-blende');
    }

    function zuruecksetzen() {
      taskSteps.forEach((s) => {
        s.style.removeProperty('--near');
        s.style.removeProperty('--fill');
        s.classList.remove('is-active', 'is-done');
      });
      activeIndex = -1;
    }

    /* Ohne Bewegung wird nichts nachgefahren – der Ablauf steht fertig da.
       Auch schmal: eine voll gefüllte Linie mit blassen Punkten daneben
       wäre nur widersprüchlich. */
    function endzustand() {
      taskSteps.forEach((s, i) => {
        s.style.setProperty('--near', '1');
        s.style.setProperty('--fill', '1');
        s.classList.toggle('is-active', i === taskSteps.length - 1);
        s.classList.toggle('is-done', i < taskSteps.length - 1);
      });
      activeIndex = taskSteps.length - 1;
    }

    function modusWechseln() {
      laufAus();
      window.removeEventListener('scroll', onTasksScroll);
      zuruecksetzen();

      if (ruhig.matches) {
        endzustand();
        if (breit.matches && curve) { bahn = baueKurve(); zeichneLauf(1); endzustand(); }
        return;
      }

      if (breit.matches && curve) {
        if (laufSichtbar) laufAn();
      } else {
        window.addEventListener('scroll', onTasksScroll, { passive: true });
        paintTasks();
      }
    }

    if ('IntersectionObserver' in window && wrap) {
      new IntersectionObserver((eintraege) => {
        eintraege.forEach((e) => {
          laufSichtbar = e.isIntersecting;
          if (!breit.matches) return;
          if (laufSichtbar) laufAn(); else { laufAus(); zuruecksetzen(); }
        });
      }, { threshold: 0.25 }).observe(wrap);
    } else {
      laufSichtbar = true;
    }

    window.addEventListener('resize', () => {
      if (breit.matches && laufFrame !== null) { laufAus(); laufAn(); }
      else onTasksScroll();
    }, { passive: true });

    breit.addEventListener('change', modusWechseln);
    modusWechseln();
  }

  /* ─── 7. Datenschutz-Einwilligung ────────────────────────────
     Der Banner schaltet den Meta-Pixel frei. Der Basiscode steht dort, wo
     Meta ihn haben will – unverändert im <head> jeder Seite –, legt dort
     aber nur `window.startMetaPixel` ab. Vor der Einwilligung wird deshalb
     nichts von Meta geladen und kein Request abgesetzt – § 25 Abs. 1
     TDDDG verlangt die Zustimmung vorher, nicht nachher. Die Wahl liegt
     im localStorage, weil sie nie zum Server muss.

     Die gespeicherte Version wird mitgeprüft: Frühere Einwilligungen (v2)
     galten für eine Seite ganz ohne Tracking. Sie dürfen den Pixel daher
     nicht freischalten – bei abweichender Version fragen wir erneut.
     ------------------------------------------------------------ */

  const CONSENT_KEY = 'd2d-consent';
  const CONSENT_VERSION = 3;
  const banner = document.getElementById('consentBanner');
  let pixelLoaded = false;

  /* Der Basiscode selbst steht unverändert im <head> jeder Seite, wie von
     Meta vorgegeben – er hinterlegt dort nur `window.startMetaPixel` und
     wartet. Erst dieser Aufruf lädt fbevents.js, initialisiert den Pixel
     und feuert PageView. */
  function loadMetaPixel() {
    if (pixelLoaded || typeof window.startMetaPixel !== 'function') return;
    pixelLoaded = true;
    window.startMetaPixel();
  }

  function revokeMetaPixel() {
    /* Ein geladenes Skript lässt sich nicht zurücknehmen. Meta stellt das
       Senden aber auf Zuruf ein – das greift sofort, ohne Reload. */
    if (pixelLoaded && typeof window.fbq === 'function') {
      window.fbq('consent', 'revoke');
    }
  }

  function readConsent() {
    try {
      const raw = window.localStorage.getItem(CONSENT_KEY);
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      if (parsed.v !== CONSENT_VERSION) return null;
      return typeof parsed.accepted === 'boolean' ? parsed : null;
    } catch (_) {
      // localStorage kann blockiert sein (Privatmodus, Richtlinien)
      return null;
    }
  }

  function writeConsent(accepted) {
    try {
      window.localStorage.setItem(
        CONSENT_KEY,
        JSON.stringify({ v: CONSENT_VERSION, accepted, ts: new Date().toISOString() })
      );
    } catch (_) {
      // ohne Speicher gilt die Wahl nur für diesen Seitenaufruf
    }
  }

  let lastConsentTrigger = null;

  function showBanner(trigger) {
    if (!banner) return;
    lastConsentTrigger = trigger || null;
    banner.hidden = false;
    const first = banner.querySelector('[data-consent]');
    if (first && trigger) first.focus();
  }

  function hideBanner() {
    if (!banner) return;
    banner.hidden = true;
    if (lastConsentTrigger && typeof lastConsentTrigger.focus === 'function') {
      lastConsentTrigger.focus();
      lastConsentTrigger = null;
    }
  }

  const storedConsent = readConsent();
  if (storedConsent && storedConsent.accepted) loadMetaPixel();
  if (banner && !storedConsent) showBanner(null);

  document.querySelectorAll('[data-consent]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const mode = btn.dataset.consent;
      if (mode === 'reopen') {
        showBanner(btn);
        return;
      }
      const accepted = mode === 'allow';
      writeConsent(accepted);
      if (accepted) loadMetaPixel();
      else revokeMetaPixel();
      hideBanner();
    });
  });

  /* ─── Footer-Jahr ────────────────────────────────────────── */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
