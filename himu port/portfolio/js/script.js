/**
 * Portfolio Interactive Logic
 * Vanilla JavaScript (ES6+)
 * 
 * Features:
 * 1. Mobile Navigation Toggle & Accessibility (ARIA, Escape key, click-outside)
 * 2. Sticky Header styling on scroll
 * 3. Section Scroll Spy (Active navigation link)
 * 4. Smooth Anchor Scrolling with fixed header offset
 * 5. Project Filtering (All, JavaScript, HTML/CSS/APIs)
 * 6. Contact Form Client-side Validation & Feedback
 * 7. Resume Download Graceful Helper & Modal
 * 8. Dynamic Copyright Year
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // ========================================================================
  // 1. Mobile Navigation Toggle
  // ========================================================================
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');
  const header = document.querySelector('.header');

  if (navToggle && navMenu) {
    const toggleMenu = (open) => {
      const isExpanded = open !== undefined ? open : navToggle.getAttribute('aria-expanded') === 'true';
      const newState = !isExpanded;

      navToggle.setAttribute('aria-expanded', String(newState));
      navMenu.classList.toggle('open', newState);
      document.body.classList.toggle('nav-open', newState);
    };

    navToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMenu();
    });

    // Close mobile nav when clicking a link
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('open')) {
          toggleMenu(false);
        }
      });
    });

    // Close when clicking outside of the navbar
    document.addEventListener('click', (e) => {
      if (
        navMenu.classList.contains('open') &&
        !navMenu.contains(e.target) &&
        !navToggle.contains(e.target)
      ) {
        toggleMenu(false);
      }
    });

    // Close on Escape key press
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('open')) {
        toggleMenu(false);
        navToggle.focus();
      }
    });
  }

  // ========================================================================
  // 2. Sticky Header Shadow on Scroll
  // ========================================================================
  const handleScrollHeader = () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScrollHeader, { passive: true });
  handleScrollHeader();

  // ========================================================================
  // 3. Scroll Spy (Active Navigation Link)
  // ========================================================================
  const sections = document.querySelectorAll('section[id]');

  const updateActiveNavLink = () => {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    const headerHeight = (header ? header.offsetHeight : 70) + 30;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - headerHeight;
      const sectionId = current.getAttribute('id');
      const matchingLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

      if (matchingLink) {
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          matchingLink.classList.add('active');
        } else {
          matchingLink.classList.remove('active');
        }
      }
    });
  };

  window.addEventListener('scroll', updateActiveNavLink, { passive: true });
  updateActiveNavLink();

  // ========================================================================
  // 4. Smooth Anchor Scrolling with Header Offset
  // ========================================================================
  const scrollOffsetLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');

  scrollOffsetLinks.forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        e.preventDefault();
        const headerOffset = header ? header.offsetHeight : 70;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
        });

        // Set focus to the section for keyboard accessibility
        targetElement.setAttribute('tabindex', '-1');
        targetElement.focus({ preventScroll: true });
      }
    });
  });

  // ========================================================================
  // 5. Project Filtering
  // ========================================================================
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (filterButtons.length && projectCards.length) {
    filterButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        // Update active filter button state
        filterButtons.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        projectCards.forEach((card) => {
          const category = card.getAttribute('data-category');
          if (filterValue === 'all' || category.includes(filterValue)) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // ========================================================================
  // 6. Client-Side Contact Form Validation
  // ========================================================================
  const contactForm = document.getElementById('contactForm');
  const formSuccessAlert = document.getElementById('formSuccessAlert');
  const formErrorAlert = document.getElementById('formErrorAlert');

  if (contactForm) {
    const nameInput = document.getElementById('userName');
    const emailInput = document.getElementById('userEmail');
    const subjectInput = document.getElementById('userSubject');
    const messageInput = document.getElementById('userMessage');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const subjectError = document.getElementById('subjectError');
    const messageError = document.getElementById('messageError');

    // Validation helper functions
    const isValidEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
      return emailRegex.test(email.trim());
    };

    const validateField = (input, errorElem, condition, errorText) => {
      if (!condition) {
        input.setAttribute('aria-invalid', 'true');
        errorElem.textContent = errorText;
        errorElem.classList.add('visible');
        return false;
      } else {
        input.setAttribute('aria-invalid', 'false');
        errorElem.textContent = '';
        errorElem.classList.remove('visible');
        return true;
      }
    };

    // Real-time input listeners to clear errors on correction
    nameInput.addEventListener('input', () => {
      if (nameInput.value.trim().length >= 2) {
        validateField(nameInput, nameError, true);
      }
    });

    emailInput.addEventListener('input', () => {
      if (isValidEmail(emailInput.value)) {
        validateField(emailInput, emailError, true);
      }
    });

    subjectInput.addEventListener('input', () => {
      if (subjectInput.value.trim().length >= 3) {
        validateField(subjectInput, subjectError, true);
      }
    });

    messageInput.addEventListener('input', () => {
      if (messageInput.value.trim().length >= 10) {
        validateField(messageInput, messageError, true);
      }
    });

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Reset top alerts
      formSuccessAlert.style.display = 'none';
      formErrorAlert.style.display = 'none';

      const isNameValid = validateField(
        nameInput,
        nameError,
        nameInput.value.trim().length >= 2,
        'Please enter your name (at least 2 characters).'
      );

      const isEmailValid = validateField(
        emailInput,
        emailError,
        isValidEmail(emailInput.value),
        'Please enter a valid email address (e.g., recruiter@company.com).'
      );

      const isSubjectValid = validateField(
        subjectInput,
        subjectError,
        subjectInput.value.trim().length >= 3,
        'Please enter a subject (at least 3 characters).'
      );

      const isMessageValid = validateField(
        messageInput,
        messageError,
        messageInput.value.trim().length >= 10,
        'Please enter your message (at least 10 characters).'
      );

      const isFormValid = isNameValid && isEmailValid && isSubjectValid && isMessageValid;

      if (!isFormValid) {
        formErrorAlert.textContent = 'Please correct the highlighted errors before submitting.';
        formErrorAlert.style.display = 'block';
        return;
      }

      // Display loading state on button
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = 'Validating Message...';

      // Simulate client-side sending / feedback
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;

        // Show professional success banner explaining demo state & backend options
        formSuccessAlert.innerHTML = `
          <strong>Message Validated Successfully!</strong><br />
          Thank you, <strong>${escapeHtml(nameInput.value.trim())}</strong>. Your message is formatted correctly. 
          <br /><small><em>Note: This is a static portfolio demonstration. To route messages directly to an actual inbox, connect a service like Formspree or EmailJS (explained in the README).</em></small>
        `;
        formSuccessAlert.style.display = 'block';

        // Reset form fields
        contactForm.reset();
        nameInput.removeAttribute('aria-invalid');
        emailInput.removeAttribute('aria-invalid');
        subjectInput.removeAttribute('aria-invalid');
        messageInput.removeAttribute('aria-invalid');
      }, 600);
    });
  }

  // HTML sanitization helper
  function escapeHtml(string) {
    const div = document.createElement('div');
    div.textContent = string;
    return div.innerHTML;
  }

  // ========================================================================
  // 7. Resume Helper Modal (Fallback & Guidance)
  // ========================================================================
  const resumeModal = document.getElementById('resumeModal');
  const resumeModalClose = document.getElementById('resumeModalClose');
  const resumeInfoBtn = document.getElementById('resumeInfoBtn');

  if (resumeModal && resumeModalClose) {
    const openResumeModal = () => {
      resumeModal.classList.add('active');
      resumeModalClose.focus();
    };

    const closeResumeModal = () => {
      resumeModal.classList.remove('active');
    };

    if (resumeInfoBtn) {
      resumeInfoBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openResumeModal();
      });
    }

    resumeModalClose.addEventListener('click', closeResumeModal);

    resumeModal.addEventListener('click', (e) => {
      if (e.target === resumeModal) {
        closeResumeModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && resumeModal.classList.contains('active')) {
        closeResumeModal();
      }
    });
  }

  // ========================================================================
  // 8. Dynamic Copyright Year
  // ========================================================================
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // ========================================================================
  // 9. Back To Top Button
  // ========================================================================
  const backToTopBtn = document.getElementById('backToTop');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      });
    });
  }
});

