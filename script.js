const sitterForm = document.getElementById('sitter-form');
const sitterList = document.getElementById('sitter-list');
const sitterFilters = document.getElementById('sitter-filters');
const questionForm = document.getElementById('question-form');
const questionsList = document.getElementById('questions-list');
const chatForm = document.getElementById('chat-form');
const chatMessagesElement = document.getElementById('chat-messages');
const chatWindow = document.querySelector('[data-chat-window]');
const chatStatusMessage = document.querySelector('[data-chat-status]');
const chatNameInput = chatForm ? chatForm.querySelector('input[name="chatName"]') : null;
const chatMessageInput = chatForm ? chatForm.querySelector('textarea[name="chatMessage"]') : null;
const videoForm = document.getElementById('video-form');
const videoFrame = document.getElementById('video-frame');
const profileForm = document.getElementById('profile-form');
const profileDetails = document.querySelector('[data-profile-details]');
const profileEmptyState = document.querySelector('[data-profile-empty]');
const profileAvatar = document.querySelector('[data-profile-avatar]');
const profileName = document.querySelector('[data-profile-name]');
const profileHeadline = document.querySelector('[data-profile-headline]');
const profileLocation = document.querySelector('[data-profile-location]');
const profileEmail = document.querySelector('[data-profile-email]');
const profilePets = document.querySelector('[data-profile-pets]');
const profileExperience = document.querySelector('[data-profile-experience]');
const profileBio = document.querySelector('[data-profile-bio]');
const profileMessage = document.querySelector('[data-profile-message]');
const profileMenu = document.querySelector('[data-profile-menu]');
const profileMenuTrigger = document.querySelector('[data-profile-menu-trigger]');
const profileMenuDropdown = document.querySelector('[data-profile-menu-dropdown]');
const profileMenuAvatar = document.querySelector('[data-profile-menu-avatar]');
const profileMenuLogout = document.querySelector('[data-profile-menu-logout]');
const profileMenuSettings = document.querySelector('[data-profile-menu-settings]');
const settingsModal = document.querySelector('[data-settings-modal]');
const settingsModalDialog = settingsModal?.querySelector('[data-settings-modal-dialog]');
const settingsModalDismissElements = settingsModal
  ? Array.from(settingsModal.querySelectorAll('[data-settings-modal-dismiss]'))
  : [];
const settingsForm = settingsModal?.querySelector('[data-settings-form]');
const settingsMessage = settingsModal?.querySelector('[data-settings-message]');
const profileHighlightSection = document.querySelector('[data-profile-highlight]');
const profileHighlightAvatar = document.querySelector('[data-profile-highlight-avatar]');
const profileHighlightName = document.querySelector('[data-profile-highlight-name]');
const profileHighlightHeadline = document.querySelector('[data-profile-highlight-headline]');
const profileHighlightLocation = document.querySelector('[data-profile-highlight-location]');
const profileHighlightEmail = document.querySelector('[data-profile-highlight-email]');
const profileHighlightPets = document.querySelector('[data-profile-highlight-pets]');
const profileHighlightExperience = document.querySelector('[data-profile-highlight-experience]');
const profileHighlightBio = document.querySelector('[data-profile-highlight-bio]');
const profileHighlightBackground = document.querySelector('[data-profile-highlight-background]');
const backgroundCheckButton = document.querySelector('[data-background-check-button]');
const backgroundCheckStatus = document.querySelector('[data-background-check-status]');
const backgroundCheckIcon = document.querySelector('[data-background-check-icon]');
const backgroundCheckText = document.querySelector('[data-background-check-text]');
const backgroundCheckMessage = document.querySelector('[data-background-check-message]');
const backgroundCheckDetails = document.querySelector('[data-background-check-details]');
const profileDeleteButtons = Array.from(document.querySelectorAll('[data-profile-delete]'));
const sitterProfileHero = document.querySelector('[data-sitter-hero]');
const sitterProfileSection = document.querySelector('[data-sitter-profile]');
const sitterProfileEmpty = document.querySelector('[data-sitter-empty]');
const sitterNameElements = document.querySelectorAll('[data-sitter-name]');
const sitterNameShortElements = document.querySelectorAll('[data-sitter-name-short]');
const sitterLocationElements = document.querySelectorAll('[data-sitter-location]');
const sitterLocationDetail = document.querySelector('[data-sitter-location-detail]');
const sitterAvailabilityElement = document.querySelector('[data-sitter-availability]');
const sitterExperienceElement = document.querySelector('[data-sitter-experience]');
const sitterServicesElement = document.querySelector('[data-sitter-services]');
const sitterBioElement = document.querySelector('[data-sitter-bio]');
const sitterPhotoElement = document.querySelector('[data-sitter-photo]');
const sitterRatesElement = document.querySelector('[data-sitter-rates]');
const sitterVideoButton = document.querySelector('[data-sitter-video]');
const subscriptionForm = document.querySelector('[data-subscription-form]');
const subscriptionTotal = document.querySelector('[data-subscription-total]');
const subscriptionMessage = document.querySelector('[data-subscription-message]');
const newsletterForm = document.querySelector('[data-newsletter-form]');
const newsletterStatus = newsletterForm?.querySelector('[data-newsletter-status]');
const subscriptionPlanInputs = subscriptionForm
  ? Array.from(subscriptionForm.querySelectorAll('[data-plan-option]'))
  : [];
const paymentOptionsContainer = document.querySelector('[data-payment-options]');
const paymentOptionButtons = paymentOptionsContainer
  ? Array.from(paymentOptionsContainer.querySelectorAll('[data-payment-option]'))
  : [];
const paymentSelection = paymentOptionsContainer?.querySelector('[data-payment-selection]');
const paymentSelectedLabel = paymentOptionsContainer?.querySelector('[data-payment-selected-label]');
const paymentActionLink = paymentOptionsContainer?.querySelector('[data-payment-action-link]');
const CARD_PAYMENT_ENDPOINT = 'https://api.example-payments.com/v1/payments';
const PAYMENT_DESTINATION_ACCOUNT = 'acct_PLACEHOLDER_DESTINATION';
const cardModal = document.querySelector('[data-card-modal]');
const cardModalForm = cardModal?.querySelector('[data-card-form]');
const cardModalDismissElements = cardModal
  ? Array.from(cardModal.querySelectorAll('[data-card-dismiss]'))
  : [];
const cardModalStatus = cardModal?.querySelector('[data-card-status]');
const cardModalSubmit = cardModalForm?.querySelector('[data-card-submit]');
const cardSubmitDefaultText = cardModalSubmit?.textContent?.trim() || 'Purchase';
let activePaymentButton = null;
const navigationToggles = document.querySelectorAll('[data-nav-toggle]');
const themeToggle = document.querySelector('[data-theme-toggle]');
const themeToggleIcon = themeToggle?.querySelector('[data-theme-toggle-icon]');
const themeToggleLabel = themeToggle?.querySelector('[data-theme-toggle-label]');
const prefersDarkScheme =
  typeof window !== 'undefined' && typeof window.matchMedia === 'function'
    ? window.matchMedia('(prefers-color-scheme: dark)')
    : null;
const sitterPhotoInput = sitterForm?.querySelector('input[name="photo"]');
const sitterPhotoPreview = sitterForm?.querySelector('[data-photo-preview]');
const sitterPhotoPreviewImage = sitterForm?.querySelector('[data-photo-preview-image]');
const sitterPhotoPreviewText = sitterForm?.querySelector('[data-photo-preview-text]');
const sitterPhotoPreviewStatus = sitterForm?.querySelector('[data-photo-preview-status]');
const sitterPhotoPreviewFilename = sitterForm?.querySelector('[data-photo-preview-filename]');
const sitterPhotoHelpText =
  document.getElementById('photo-help')?.textContent?.trim() ||
  'Upload a square image for the best results.';

const loginForms = Array.from(document.querySelectorAll('[data-sitter-login-form]'));
const sitterFormMessage = sitterForm?.querySelector('[data-sitter-form-message]');

const adminControlsContainer = document.querySelector('[data-admin-controls]');
const adminToggleButtons = Array.from(document.querySelectorAll('[data-admin-toggle]'));
const adminStatusElement = document.querySelector('[data-admin-status]');

const NEWSLETTER_DEFAULT_RECIPIENT = 'subscribe@pawnamics.com';
const NEWSLETTER_DEFAULT_CC = 'pawnamics.contact@gmail.com';

const chatStatusDefault = {
  message: chatStatusMessage?.textContent?.trim() || '',
  type: chatStatusMessage?.dataset?.status || 'info',
};

let chatStatusResetTimer = null;

let profileMenuOpen = false;
let isSettingsModalOpen = false;
let pendingSettingsCloseTimer = null;

let adminModeEnabled = false;
let adminStatusOverride = '';
let adminStatusState = 'info';

function setProfileMenuOpen(open) {
  if (!profileMenu || !profileMenuTrigger) {
    profileMenuOpen = false;
    return;
  }

  if (profileMenu.classList.contains('hidden')) {
    profileMenuOpen = false;
    profileMenu.classList.remove('is-open');
    profileMenuTrigger.setAttribute('aria-expanded', 'false');
    return;
  }

  profileMenuOpen = Boolean(open);
  profileMenu.classList.toggle('is-open', profileMenuOpen);
  profileMenuTrigger.setAttribute('aria-expanded', profileMenuOpen ? 'true' : 'false');
}

function focusProfileMenuItem(index = 0) {
  if (!profileMenuDropdown) {
    return;
  }

  const focusable = Array.from(profileMenuDropdown.querySelectorAll('a, button'));
  if (!focusable.length) {
    return;
  }

  const clampedIndex = Math.max(0, Math.min(index, focusable.length - 1));
  const target = focusable[clampedIndex];
  if (typeof target.focus === 'function') {
    target.focus();
  }
}

function updateProfileMenu(profile) {
  if (!profileMenu || !profileMenuTrigger || !profileMenuAvatar) {
    return;
  }

  if (!profile) {
    profileMenu.classList.add('hidden');
    profileMenuTrigger.setAttribute('aria-label', 'Open account menu');
    profileMenuAvatar.src = DEFAULT_PROFILE_AVATAR;
    profileMenuAvatar.alt = 'Your profile avatar';
    setProfileMenuOpen(false);
    return;
  }

  const avatarUrl = profile.photo || DEFAULT_PROFILE_AVATAR;
  profileMenuAvatar.src = avatarUrl;
  profileMenuAvatar.alt = profile.name
    ? `${profile.name}'s profile photo`
    : 'Your profile avatar';
  profileMenuTrigger.setAttribute(
    'aria-label',
    profile.name ? `${profile.name}'s account menu` : 'Open account menu'
  );
  profileMenu.classList.remove('hidden');
  setProfileMenuOpen(false);
}

function applySettingsToForm() {
  if (!settingsForm) {
    return;
  }

  Object.keys(DEFAULT_USER_SETTINGS).forEach((key) => {
    const element = settingsForm.elements.namedItem(key);
    if (!element) {
      return;
    }

    if (typeof element.length === 'number' && typeof element.item === 'function') {
      Array.from(element).forEach((item) => {
        if (item && 'checked' in item) {
          item.checked = Boolean(userSettings?.[key]);
        }
      });
      return;
    }

    if ('checked' in element) {
      element.checked = Boolean(userSettings?.[key]);
    }
  });
}

function showSettingsMessage(message, status = 'info') {
  if (!settingsMessage) {
    return;
  }

  if (!message) {
    settingsMessage.textContent = '';
    settingsMessage.classList.add('hidden');
    delete settingsMessage.dataset.status;
    return;
  }

  settingsMessage.textContent = message;
  settingsMessage.dataset.status = status;
  settingsMessage.classList.remove('hidden');
}

function openSettingsModal() {
  if (!settingsModal) {
    return;
  }

  if (pendingSettingsCloseTimer) {
    window.clearTimeout(pendingSettingsCloseTimer);
    pendingSettingsCloseTimer = null;
  }

  applySettingsToForm();
  showSettingsMessage('');
  settingsModal.classList.add('is-open');
  settingsModal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  isSettingsModalOpen = true;

  window.setTimeout(() => {
    settingsModalDialog?.focus();
  }, 0);
}

function closeSettingsModal(options = {}) {
  if (!settingsModal) {
    return;
  }

  if (pendingSettingsCloseTimer) {
    window.clearTimeout(pendingSettingsCloseTimer);
    pendingSettingsCloseTimer = null;
  }

  settingsModal.classList.remove('is-open');
  settingsModal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
  isSettingsModalOpen = false;
  showSettingsMessage('');

  if (options.focusTrigger) {
    profileMenuTrigger?.focus();
  }
}

function handleProfileLogout() {
  setProfileMenuOpen(false);
  userProfile = null;

  try {
    localStorage.removeItem(STORAGE_KEYS.PROFILE);
  } catch (error) {
    console.warn('Unable to remove profile from storage', error);
  }

  renderProfile(null);
  backgroundCheckInProgress = false;

  if (profileForm) {
    profileForm.reset();
  }

  if (profileMessage) {
    profileMessage.textContent =
      'You have been logged out and your profile data was cleared.';
    profileMessage.classList.remove('hidden');
    window.setTimeout(() => {
      profileMessage?.classList.add('hidden');
    }, 4000);
  } else {
    window.alert('You have been logged out. Save a profile again to see it in the menu.');
  }
}

const backgroundCheckButtonDefaultText =
  backgroundCheckButton?.textContent?.trim() || 'Run free background check';
const backgroundCheckButtonRetryText =
  backgroundCheckButton?.dataset?.backgroundCheckRetryLabel?.trim() ||
  'Run background check again';

if (backgroundCheckButton) {
  backgroundCheckButton.textContent = backgroundCheckButtonDefaultText;
}

let backgroundCheckInProgress = false;

const DEFAULT_SITTER_PHOTO =
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80';

const DEFAULT_SITTER_HERO =
  'https://images.unsplash.com/photo-1525253086316-d0c936c814f8?auto=format&fit=crop&w=1200&q=80';

const DEFAULT_PROFILE_AVATAR =
  'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=200&q=80';

const DEFAULT_USER_SETTINGS = {
  emailUpdates: true,
  smsUpdates: false,
  rememberDevice: true,
};

const STORAGE_KEYS = {
  SITTERS: 'pawnamics_sitters',
  QUESTIONS: 'pawnamics_questions',
  CHAT_MESSAGES: 'pawnamics_chat_messages',
  PROFILE: 'pawnamics_user_profile',
  SETTINGS: 'pawnamics_user_settings',
  SUBSCRIPTIONS: 'pawnamics_sitter_subscriptions',
  THEME: 'pawnamics_theme',
  ACTIVE_SITTER: 'pawnamics_active_sitter',
};

const ADMIN_MODE_STORAGE_KEY = 'pawnamics_admin_mode';
const ADMIN_ACCESS_CODE = 'only-my-pawprints';

const MAX_CHAT_MESSAGES = 60;
const CHAT_MESSAGE_MAX_LENGTH = 500;
const BACKGROUND_CHECK_DELAY_MS = 2400;

function initializeNavigation() {
  if (!navigationToggles.length) {
    return;
  }

  const navQuery = window.matchMedia('(max-width: 720px)');

  navigationToggles.forEach((toggle) => {
    const navId = toggle.getAttribute('aria-controls');
    const nav = navId ? document.getElementById(navId) : null;

    if (!nav) {
      return;
    }

    nav.dataset.navInitialized = 'true';

    const setExpanded = (expanded) => {
      toggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
      nav.classList.toggle('is-open', expanded);
      nav.setAttribute('aria-hidden', expanded ? 'false' : 'true');
    };

    const collapseNav = () => {
      setExpanded(false);
    };

    const handleMediaChange = (event) => {
      if (event.matches) {
        collapseNav();
      } else {
        nav.classList.remove('is-open');
        nav.removeAttribute('aria-hidden');
        toggle.setAttribute('aria-expanded', 'false');
      }
    };

    toggle.addEventListener('click', () => {
      if (!navQuery.matches) {
        return;
      }
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      setExpanded(!expanded);
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        if (navQuery.matches) {
          collapseNav();
        }
      });
    });

    window.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && navQuery.matches) {
        const expanded = toggle.getAttribute('aria-expanded') === 'true';
        if (expanded) {
          collapseNav();
          toggle.focus();
        }
      }
    });

    if (typeof navQuery.addEventListener === 'function') {
      navQuery.addEventListener('change', handleMediaChange);
    } else if (typeof navQuery.addListener === 'function') {
      navQuery.addListener(handleMediaChange);
    }

    handleMediaChange(navQuery);
  });
}

initializeNavigation();
initializeTheme();
initializePaymentOptions();

function getNewsletterConfig() {
  if (!newsletterForm) {
    return {
      recipient: NEWSLETTER_DEFAULT_RECIPIENT,
      cc: [NEWSLETTER_DEFAULT_CC],
    };
  }

  const { newsletterRecipient = '', newsletterCc = '' } = newsletterForm.dataset || {};
  const recipient = newsletterRecipient.trim() || NEWSLETTER_DEFAULT_RECIPIENT;
  const ccList = (newsletterCc.trim() || NEWSLETTER_DEFAULT_CC)
    .split(',')
    .map((entry) => entry.trim())
    .filter(Boolean);

  if (!ccList.includes(NEWSLETTER_DEFAULT_CC)) {
    ccList.push(NEWSLETTER_DEFAULT_CC);
  }

  return {
    recipient,
    cc: ccList,
  };
}

function setNewsletterStatusMessage(message, statusType = 'success') {
  if (!newsletterStatus) {
    return;
  }

  if (!message) {
    newsletterStatus.textContent = '';
    newsletterStatus.hidden = true;
    newsletterStatus.removeAttribute('data-status');
    return;
  }

  newsletterStatus.textContent = message;
  if (statusType === 'error') {
    newsletterStatus.dataset.status = 'error';
  } else {
    newsletterStatus.dataset.status = 'success';
  }
  newsletterStatus.hidden = false;
}

function initializeTheme() {
  const getStoredTheme = () => {
    const storedTheme = loadStoredData(STORAGE_KEYS.THEME, null);
    return storedTheme === 'light' || storedTheme === 'dark' ? storedTheme : null;
  };

  const updateToggle = (theme) => {
    if (!themeToggle) {
      return;
    }
    const isDark = theme === 'dark';
    themeToggle.setAttribute('aria-pressed', isDark ? 'true' : 'false');
    themeToggle.setAttribute(
      'aria-label',
      isDark ? 'Switch to light mode' : 'Switch to dark mode'
    );
    if (themeToggleIcon) {
      themeToggleIcon.textContent = isDark ? '🌞' : '🌙';
    }
    if (themeToggleLabel) {
      themeToggleLabel.textContent = isDark ? 'Light mode' : 'Dark mode';
    }
  };

  let activeTheme =
    getStoredTheme() || (prefersDarkScheme && prefersDarkScheme.matches ? 'dark' : 'light');

  const applyTheme = (theme, { persist } = { persist: false }) => {
    const normalizedTheme = theme === 'dark' ? 'dark' : 'light';
    document.documentElement.dataset.theme = normalizedTheme;
    updateToggle(normalizedTheme);
    activeTheme = normalizedTheme;
    if (persist) {
      saveStoredData(STORAGE_KEYS.THEME, normalizedTheme);
    }
  };

  applyTheme(activeTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const nextTheme = activeTheme === 'dark' ? 'light' : 'dark';
      applyTheme(nextTheme, { persist: true });
    });
  }

  if (prefersDarkScheme) {
    const handleSystemThemeChange = (event) => {
      if (getStoredTheme()) {
        return;
      }
      applyTheme(event.matches ? 'dark' : 'light');
    };

    if (typeof prefersDarkScheme.addEventListener === 'function') {
      prefersDarkScheme.addEventListener('change', handleSystemThemeChange);
    } else if (typeof prefersDarkScheme.addListener === 'function') {
      prefersDarkScheme.addListener(handleSystemThemeChange);
    }
  }
}

function sanitizeDigits(value) {
  return (value || '').toString().replace(/\D+/g, '');
}

function isValidCardNumber(cardNumber) {
  const digits = sanitizeDigits(cardNumber);
  if (digits.length < 12) {
    return false;
  }

  let sum = 0;
  let shouldDouble = false;

  for (let index = digits.length - 1; index >= 0; index -= 1) {
    let digit = Number.parseInt(digits.charAt(index), 10);
    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    sum += digit;
    shouldDouble = !shouldDouble;
  }

  return sum % 10 === 0;
}

function parseExpiration(value) {
  if (!value) {
    return null;
  }

  const sanitized = value.toString().replace(/\s+/g, '');
  const match = sanitized.match(/^(\d{2})\/?(\d{2}|\d{4})$/);

  if (!match) {
    return null;
  }

  const month = Number.parseInt(match[1], 10);
  let year = Number.parseInt(match[2], 10);

  if (Number.isNaN(month) || Number.isNaN(year) || month < 1 || month > 12) {
    return null;
  }

  if (year < 100) {
    const currentCentury = Math.floor(new Date().getFullYear() / 100) * 100;
    year += currentCentury;
  }

  return { month, year };
}

function isExpired({ month, year }) {
  const now = new Date();
  const currentMonth = now.getMonth() + 1;
  const currentYear = now.getFullYear();

  if (year < currentYear) {
    return true;
  }

  if (year === currentYear && month < currentMonth) {
    return true;
  }

  return false;
}

function isValidPostalCode(value) {
  if (!value) {
    return false;
  }
  return /^[0-9A-Za-z\s-]{3,10}$/.test(value.toString().trim());
}

function setCardFormStatus(status, message) {
  if (!cardModalStatus) {
    return;
  }

  const normalizedStatus = status || 'idle';
  cardModalStatus.dataset.status = normalizedStatus;
  cardModalStatus.textContent = message || '';
  cardModalStatus.hidden = !message;
}

function setCardSubmitting(isSubmitting) {
  if (!cardModalForm) {
    return;
  }

  const fields = Array.from(cardModalForm.querySelectorAll('input, button'));
  fields.forEach((field) => {
    if (field === cardModalSubmit) {
      field.disabled = Boolean(isSubmitting);
      return;
    }

    if (field.tagName === 'INPUT') {
      if (isSubmitting) {
        field.setAttribute('readonly', 'true');
      } else {
        field.removeAttribute('readonly');
      }
    } else {
      field.disabled = Boolean(isSubmitting);
    }
  });

  if (cardModalSubmit) {
    cardModalSubmit.disabled = Boolean(isSubmitting);
    cardModalSubmit.textContent = isSubmitting
      ? 'Processing…'
      : cardSubmitDefaultText;
  }
}

function formatMinorUnits(amountInCents, currency = 'USD') {
  if (!Number.isFinite(amountInCents) || amountInCents <= 0) {
    return '';
  }
  const majorUnits = (amountInCents / 100).toFixed(2);
  return `${currency.toUpperCase()} ${majorUnits}`;
}

function buildCardPaymentPayload(details, context) {
  const {
    cardNumber,
    expiration,
    cvc,
    cardholderName,
    postalCode,
  } = details;

  const { amountInCents, currency, description, label } = context;

  return {
    amount: amountInCents,
    currency,
    description: description || label || 'PawNamics card payment',
    destinationAccount: PAYMENT_DESTINATION_ACCOUNT,
    paymentMethod: {
      type: 'card',
      card: {
        number: cardNumber,
        expMonth: expiration.month,
        expYear: expiration.year,
        cvc,
      },
    },
    billing: {
      name: cardholderName,
      postalCode,
    },
    metadata: {
      brand: 'card',
      label,
    },
  };
}

async function processCardPayment(paymentPayload) {
  const shouldSimulate =
    !CARD_PAYMENT_ENDPOINT || CARD_PAYMENT_ENDPOINT.includes('example.com');

  if (shouldSimulate) {
    return simulateCardPayment(paymentPayload);
  }

  const controller = typeof AbortController === 'function' ? new AbortController() : null;
  const timeoutId = controller
    ? window.setTimeout(() => {
        controller.abort();
      }, 15000)
    : null;

  try {
    const response = await fetch(CARD_PAYMENT_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(paymentPayload),
      signal: controller ? controller.signal : undefined,
    });

    if (!response.ok) {
      throw new Error('The payment provider returned an error.');
    }

    const result = await response.json();
    if (result.status && result.status !== 'succeeded') {
      throw new Error('The payment could not be completed.');
    }

    return {
      status: result.status || 'succeeded',
      confirmationCode:
        result.confirmationCode || result.id || result.reference || '',
      raw: result,
    };
  } catch (error) {
    if (error.name === 'AbortError') {
      throw new Error('The payment request timed out. Please try again.');
    }
    throw error;
  } finally {
    if (timeoutId) {
      window.clearTimeout(timeoutId);
    }
  }
}

async function simulateCardPayment(paymentPayload) {
  await new Promise((resolve) => window.setTimeout(resolve, 900));
  return {
    status: 'succeeded',
    confirmationCode: `PN-${Math.random().toString(36).slice(2, 10).toUpperCase()}`,
    raw: paymentPayload,
  };
}

function initializePaymentOptions() {
  if (!paymentOptionButtons.length) {
    return;
  }

  const parseAmountInCents = (button) => {
    if (!button) {
      return 0;
    }

    const { paymentAmountCents = '', paymentAmount = '' } = button.dataset;

    if (paymentAmountCents && /^\d+$/.test(paymentAmountCents)) {
      return Number.parseInt(paymentAmountCents, 10);
    }

    if (paymentAmount) {
      const normalized = paymentAmount.replace(/[^0-9.]/g, '');
      const amount = Number.parseFloat(normalized);
      if (Number.isFinite(amount) && amount > 0) {
        return Math.round(amount * 100);
      }
    }

    return 0;
  };

  const getCurrencyForButton = (button) => {
    if (!button) {
      return 'USD';
    }
    const { paymentCurrency = 'USD' } = button.dataset;
    const normalized = paymentCurrency.toString().trim().toUpperCase();
    return normalized || 'USD';
  };

  let cardPaymentContext = {
    label: '',
    amountInCents: 0,
    currency: 'USD',
    description: '',
  };

  const hidePaymentSelection = () => {
    if (paymentSelection) {
      paymentSelection.hidden = true;
    }
    if (paymentActionLink) {
      paymentActionLink.hidden = true;
      paymentActionLink.removeAttribute('href');
      paymentActionLink.textContent = '';
    }
  };

  const showPaymentSelection = (label, url) => {
    if (!paymentSelection || !paymentSelectedLabel || !paymentActionLink) {
      return;
    }
    paymentSelectedLabel.textContent = label;
    if (url) {
      paymentActionLink.hidden = false;
      paymentActionLink.href = url;
      paymentActionLink.textContent = `Continue on ${label}`;
    } else {
      paymentActionLink.hidden = true;
      paymentActionLink.removeAttribute('href');
      paymentActionLink.textContent = '';
    }
    paymentSelection.hidden = false;
  };

  const setActivePayment = (button) => {
    if (activePaymentButton === button) {
      return;
    }
    if (activePaymentButton) {
      activePaymentButton.classList.remove('is-selected');
      activePaymentButton.setAttribute('aria-checked', 'false');
    }
    activePaymentButton = button;
    activePaymentButton.classList.add('is-selected');
    activePaymentButton.setAttribute('aria-checked', 'true');
  };

  const focusFirstField = () => {
    if (!cardModalForm) {
      return;
    }
    const firstInput = cardModalForm.querySelector('input');
    if (firstInput) {
      firstInput.focus();
    }
  };

  const openCardModal = () => {
    if (!cardModal) {
      return;
    }
    cardModal.classList.add('is-open');
    cardModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    window.setTimeout(focusFirstField, 0);
  };

  const closeCardModal = ({ focusTrigger = false } = {}) => {
    if (!cardModal) {
      return;
    }
    cardModal.classList.remove('is-open');
    cardModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (cardModalForm) {
      cardModalForm.reset();
    }
    setCardSubmitting(false);
    setCardFormStatus('idle', '');
    cardPaymentContext = {
      label: '',
      amountInCents: 0,
      currency: 'USD',
      description: '',
    };
    if (focusTrigger && activePaymentButton) {
      activePaymentButton.focus();
    }
  };

  const handlePaymentClick = (button) => {
    const { paymentType = '', paymentUrl = '', paymentLabel = '' } = button.dataset;
    const label = paymentLabel || button.textContent.trim();

    cardPaymentContext = {
      label,
      amountInCents: parseAmountInCents(button),
      currency: getCurrencyForButton(button),
      description: button.dataset.paymentDescription || '',
    };

    setActivePayment(button);

    if (paymentType === 'card') {
      hidePaymentSelection();
      if (cardModalForm) {
        cardModalForm.reset();
      }
      setCardSubmitting(false);
      const amountLabel = formatMinorUnits(
        cardPaymentContext.amountInCents,
        cardPaymentContext.currency
      );
      if (amountLabel) {
        setCardFormStatus(
          'info',
          `You are paying ${amountLabel} with ${label}.`
        );
      } else {
        setCardFormStatus('idle', '');
      }
      openCardModal();
      return;
    }

    if (paymentType === 'link' && paymentUrl) {
      showPaymentSelection(label, paymentUrl);
    }
  };

  paymentOptionButtons.forEach((button) => {
    button.setAttribute('role', 'radio');
    button.setAttribute('aria-checked', 'false');
    button.addEventListener('click', () => {
      handlePaymentClick(button);
    });
    button.addEventListener('keydown', (event) => {
      if (event.key === ' ' || event.key === 'Enter') {
        event.preventDefault();
        handlePaymentClick(button);
      }
    });
  });

  hidePaymentSelection();

  cardModalDismissElements.forEach((dismiss) => {
    dismiss.addEventListener('click', () => {
      closeCardModal({ focusTrigger: true });
    });
  });

  if (cardModal) {
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && cardModal.classList.contains('is-open')) {
        event.preventDefault();
        closeCardModal({ focusTrigger: true });
      }
    });
  }

  if (cardModalForm) {
    cardModalForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      const formData = new FormData(cardModalForm);
      const cardholderName = (formData.get('card-name') || '').toString().trim();
      const cardNumber = sanitizeDigits(formData.get('card-number') || '');
      const expirationInput = (formData.get('card-expiration') || '')
        .toString()
        .trim();
      const expiration = parseExpiration(expirationInput);
      const cvc = sanitizeDigits(formData.get('card-cvc') || '');
      const postalCode = (formData.get('card-zip') || '').toString().trim();

      if (!cardholderName) {
        setCardFormStatus('error', 'Please enter the cardholder name.');
        cardModalForm.querySelector('#card-name')?.focus();
        return;
      }

      if (!isValidCardNumber(cardNumber)) {
        setCardFormStatus('error', 'Please enter a valid card number.');
        cardModalForm.querySelector('#card-number')?.focus();
        return;
      }

      if (!expiration || isExpired(expiration)) {
        setCardFormStatus('error', 'Please enter a valid card expiration date.');
        cardModalForm.querySelector('#card-expiration')?.focus();
        return;
      }

      if (!/^\d{3,4}$/.test(cvc)) {
        setCardFormStatus('error', 'Please enter the 3 or 4 digit CVC code.');
        cardModalForm.querySelector('#card-cvc')?.focus();
        return;
      }

      if (!isValidPostalCode(postalCode)) {
        setCardFormStatus(
          'error',
          'Please enter a valid billing ZIP or postal code.'
        );
        cardModalForm.querySelector('#card-zip')?.focus();
        return;
      }

      if (!cardPaymentContext.amountInCents) {
        setCardFormStatus(
          'error',
          'A payment amount is required before processing the card.'
        );
        return;
      }

      const paymentDetails = {
        cardNumber,
        expiration,
        cvc,
        cardholderName,
        postalCode,
      };

      const paymentPayload = buildCardPaymentPayload(
        paymentDetails,
        cardPaymentContext
      );

      try {
        setCardSubmitting(true);
        setCardFormStatus('loading', 'Processing payment securely…');
        const result = await processCardPayment(paymentPayload);

        if (!result || result.status !== 'succeeded') {
          throw new Error('We were unable to complete the payment.');
        }

        const confirmationCode = result.confirmationCode
          ? ` Confirmation #${result.confirmationCode}.`
          : '';
        const amountLabel = formatMinorUnits(
          cardPaymentContext.amountInCents,
          cardPaymentContext.currency
        );
        const amountMessage = amountLabel
          ? `${amountLabel} has been charged.`
          : 'Your card has been charged.';

        setCardFormStatus('success', `${amountMessage}${confirmationCode}`);

        const paymentLabel = cardPaymentContext.label;

        window.setTimeout(() => {
          closeCardModal({ focusTrigger: true });
          if (paymentLabel) {
            showPaymentSelection(paymentLabel);
          }
        }, 1600);
      } catch (error) {
        const message =
          error && typeof error.message === 'string'
            ? error.message
            : 'We were unable to process your payment. Please try again.';
        setCardFormStatus('error', message);
        setCardSubmitting(false);
      }
    });
  }
}

function generateId(prefix = 'id') {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return `${prefix}-${crypto.randomUUID()}`;
  }
  const random = Math.random().toString(16).slice(2, 10);
  return `${prefix}-${Date.now().toString(36)}-${random}`;
}

function loadStoredData(key, defaultValue = []) {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : defaultValue;
  } catch (error) {
    console.error(`Unable to parse ${key} from storage`, error);
    return defaultValue;
  }
}

function saveStoredData(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.warn(`Unable to save ${key} to storage`, error);
  }
}

function loadAdminModeState() {
  try {
    return localStorage.getItem(ADMIN_MODE_STORAGE_KEY) === 'true';
  } catch (error) {
    console.warn('Unable to read admin mode from storage', error);
    return false;
  }
}

function saveAdminModeState(enabled) {
  try {
    localStorage.setItem(ADMIN_MODE_STORAGE_KEY, enabled ? 'true' : 'false');
  } catch (error) {
    console.warn('Unable to save admin mode to storage', error);
  }
}

function isAdminModeActive() {
  return adminModeEnabled;
}

function updateAdminControlsUI(statusMessage = null, statusState = 'info') {
  if (statusMessage !== null) {
    adminStatusOverride = statusMessage;
    adminStatusState = statusState || 'info';
  } else if (!adminModeEnabled) {
    adminStatusOverride = '';
    adminStatusState = 'info';
  }

  const message = adminModeEnabled
    ? adminStatusOverride || 'Admin mode active. Delete buttons are visible.'
    : '';

  if (adminStatusElement) {
    if (message) {
      adminStatusElement.textContent = message;
      adminStatusElement.hidden = false;
      adminStatusElement.dataset.state = adminStatusState;
    } else {
      adminStatusElement.textContent = '';
      adminStatusElement.hidden = true;
      delete adminStatusElement.dataset.state;
    }
  }

  if (adminControlsContainer) {
    adminControlsContainer.removeAttribute('hidden');
  }

  adminToggleButtons.forEach((button) => {
    button.textContent = adminModeEnabled ? 'Disable Admin Mode' : 'Enable Admin Mode';
    button.setAttribute('aria-pressed', adminModeEnabled ? 'true' : 'false');
    button.removeAttribute('hidden');
  });
}

function applyAdminMode(enabled, options = {}) {
  const {
    persist = true,
    announce = false,
    skipRender = false,
    statusMessage = null,
    statusState = 'info',
  } = options;

  const normalized = Boolean(enabled);
  const stateChanged = adminModeEnabled !== normalized;

  adminModeEnabled = normalized;

  if (typeof document !== 'undefined' && document.body) {
    document.body.classList.toggle('admin-mode', adminModeEnabled);
  }

  if (persist) {
    saveAdminModeState(adminModeEnabled);
  }

  updateAdminControlsUI(statusMessage, statusState);

  if ((stateChanged || statusMessage !== null) && !skipRender) {
    renderSitterDirectory();
  }

  if (announce && stateChanged && typeof window !== 'undefined') {
    window.alert(
      adminModeEnabled
        ? 'Admin mode enabled. Delete controls are now visible.'
        : 'Admin mode disabled.'
    );
  }
}

function handleAdminToggle() {
  if (isAdminModeActive()) {
    applyAdminMode(false, { announce: true });
    return;
  }

  const provided = window.prompt(
    'Enter the admin access code to enable deletion controls:'
  );

  if (provided === null) {
    return;
  }

  const normalized = provided.trim();
  if (!normalized.length) {
    return;
  }

  if (normalized === ADMIN_ACCESS_CODE) {
    applyAdminMode(true, {
      announce: true,
      statusMessage: 'Admin mode enabled. Delete controls are now visible.',
    });
  } else {
    window.alert('Incorrect admin access code.');
  }
}

function initializeAdminControls() {
  const storedState = loadAdminModeState();
  applyAdminMode(storedState, { persist: false, skipRender: true });

  if (adminToggleButtons.length) {
    adminToggleButtons.forEach((button) => {
      button.addEventListener('click', handleAdminToggle);
    });
  }
}

function setFormMessage(element, message, type = 'info') {
  if (!element) {
    return;
  }

  element.classList.remove('is-info', 'is-error', 'is-success');

  if (!message) {
    element.textContent = '';
    element.classList.add('hidden');
    return;
  }

  element.textContent = message;
  element.classList.remove('hidden');

  const typeClass =
    type === 'error' ? 'is-error' : type === 'success' ? 'is-success' : 'is-info';
  element.classList.add(typeClass);
}

function resetChatStatus() {
  if (!chatStatusMessage) {
    return;
  }

  if (!chatStatusDefault.message) {
    chatStatusMessage.textContent = '';
    chatStatusMessage.dataset.status = '';
    chatStatusMessage.classList.add('hidden');
    return;
  }

  chatStatusMessage.textContent = chatStatusDefault.message;
  chatStatusMessage.dataset.status = chatStatusDefault.type || 'info';
  chatStatusMessage.classList.remove('hidden');
}

function setChatStatus(message, type = 'info', options = {}) {
  if (!chatStatusMessage) {
    return;
  }

  const { autoReset = false } = options;

  if (chatStatusResetTimer) {
    window.clearTimeout(chatStatusResetTimer);
    chatStatusResetTimer = null;
  }

  if (!message) {
    chatStatusMessage.textContent = '';
    chatStatusMessage.dataset.status = '';
    chatStatusMessage.classList.add('hidden');
    return;
  }

  chatStatusMessage.textContent = message;
  chatStatusMessage.dataset.status = type;
  chatStatusMessage.classList.remove('hidden');

  if (autoReset && (chatStatusDefault.message || chatStatusDefault.type)) {
    chatStatusResetTimer = window.setTimeout(() => {
      resetChatStatus();
    }, 2400);
  }
}

function isChatScrolledToBottom(element) {
  if (!element) {
    return false;
  }
  const threshold = 24;
  const distanceFromBottom = element.scrollHeight - (element.scrollTop + element.clientHeight);
  return distanceFromBottom <= threshold;
}

function createChatMessageItem(message) {
  const item = document.createElement('li');
  item.className = 'chat-message';

  const header = document.createElement('div');
  header.className = 'chat-message-header';

  const author = document.createElement('strong');
  author.textContent = message.author;

  const timestamp = document.createElement('time');
  timestamp.setAttribute('datetime', message.created);
  timestamp.textContent = new Date(message.created).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  const body = document.createElement('p');
  body.className = 'chat-text';
  body.textContent = message.text;

  header.appendChild(author);
  header.appendChild(timestamp);
  item.appendChild(header);
  item.appendChild(body);

  return item;
}

function renderChatMessages(messages, options = {}) {
  if (!chatMessagesElement) {
    return;
  }

  const { forceScroll = false } = options;
  const shouldStick = forceScroll || isChatScrolledToBottom(chatWindow);

  chatMessagesElement.innerHTML = '';

  if (!messages.length) {
    const emptyState = document.createElement('li');
    emptyState.className = 'note';
    emptyState.textContent = 'No chat messages yet. Say hello to the community!';
    chatMessagesElement.appendChild(emptyState);
    if (forceScroll && chatWindow) {
      chatWindow.scrollTop = 0;
    }
    return;
  }

  messages.forEach((message) => {
    chatMessagesElement.appendChild(createChatMessageItem(message));
  });

  if (chatWindow && (forceScroll || shouldStick)) {
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }
}

function findSitterByUsername(username) {
  if (!username) return undefined;
  const normalized = username.trim().toLowerCase();
  if (!normalized) return undefined;
  return sitters.find((entry) =>
    typeof entry.username === 'string' && entry.username.trim().toLowerCase() === normalized
  );
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      resolve(typeof reader.result === 'string' ? reader.result : '');
    });
    reader.addEventListener('error', () => {
      reject(reader.error || new Error('Unable to read file'));
    });
    reader.readAsDataURL(file);
  });
}

function setSitterPhotoPreview(src, statusText, filenameText, isEmpty) {
  if (sitterPhotoPreviewImage) {
    sitterPhotoPreviewImage.src = src || DEFAULT_SITTER_PHOTO;
  }
  if (sitterPhotoPreviewStatus) {
    sitterPhotoPreviewStatus.textContent = statusText || '';
  }
  if (sitterPhotoPreviewFilename) {
    sitterPhotoPreviewFilename.textContent = filenameText || '';
  }
  if (sitterPhotoPreview) {
    sitterPhotoPreview.dataset.photoEmpty = isEmpty ? 'true' : 'false';
  }
}

function resetSitterPhotoPreview() {
  setSitterPhotoPreview(DEFAULT_SITTER_PHOTO, 'No photo selected', '', true);
  if (sitterPhotoHelpText && sitterPhotoPreviewText) {
    const help = sitterPhotoPreviewText.querySelector('#photo-help');
    if (help) {
      help.textContent = sitterPhotoHelpText;
    }
  }
}

async function updateSitterPhotoPreview(file) {
  if (!(file instanceof File) || file.size === 0) {
    resetSitterPhotoPreview();
    return '';
  }

  try {
    const dataUrl = await fileToDataUrl(file);
    setSitterPhotoPreview(dataUrl, 'Photo ready', file.name, false);
    return dataUrl;
  } catch (error) {
    console.error('Unable to read profile photo', error);
    resetSitterPhotoPreview();
    return '';
  }
}

function ensureSitterIdentifier(sitter) {
  if (!sitter || typeof sitter !== 'object') return sitter;
  if (!sitter.id || typeof sitter.id !== 'string' || sitter.id.trim().length === 0) {
    sitter.id = generateId('sitter');
  }
  return sitter;
}

function createSitterCard(sitter) {
  ensureSitterIdentifier(sitter);
  const card = document.createElement('article');
  card.className = 'card sitter-card';
  card.dataset.sitterId = sitter.id;
  const photoSource =
    (typeof sitter.photo === 'string' && sitter.photo.length && sitter.photo) ||
    (typeof sitter.photoUrl === 'string' && sitter.photoUrl.length && sitter.photoUrl) ||
    DEFAULT_SITTER_PHOTO;

  const hourlyRateText = sitter.hourlyRate ? `$${sitter.hourlyRate}/hr` : 'Hourly TBD';
  const dailyRateText = sitter.dailyRate ? `$${sitter.dailyRate}/day` : 'Daily TBD';
  const experienceText = sitter.experience
    ? `${sitter.experience} yrs experience`
    : 'Experience shared soon';

  const profileUrl = new URL('sitter-profile.html', window.location.href);
  profileUrl.searchParams.set('id', sitter.id);

  card.innerHTML = `
    <header>
      <img src="${photoSource}" alt="${sitter.name}" />
      <div>
        <h3>${sitter.name}</h3>
        <div class="sitter-meta">
          <span class="badge">${sitter.location}</span>
          <span class="badge">${sitter.availability}</span>
          <span>${experienceText}</span>
        </div>
      </div>
    </header>
    <p class="details">${sitter.bio}</p>
    <div class="sitter-meta">
      <span class="rates">💲 ${hourlyRateText}</span>
      <span class="rates">🏡 ${dailyRateText}</span>
    </div>
    <p class="details"><strong>Services:</strong> ${sitter.services}</p>
    <div class="card-actions">
      <a class="btn" data-view-profile href="${profileUrl.toString()}">View Profile</a>
      <button class="btn btn-outline" type="button">Start Video Chat</button>
    </div>
  `;

  if (isAdminModeActive()) {
    const actions = card.querySelector('.card-actions');
    if (actions) {
      const deleteButton = document.createElement('button');
      deleteButton.type = 'button';
      deleteButton.className = 'btn btn-danger';
      deleteButton.dataset.adminOnly = 'true';
      deleteButton.textContent = 'Delete Profile';
      deleteButton.addEventListener('click', () => {
        requestSitterRemoval(sitter);
      });
      actions.appendChild(deleteButton);
    }
  }

  const videoButton = card.querySelector('button');
  videoButton.addEventListener('click', () => {
    const roomName = `PawNamics-${sitter.name.replace(/\s+/g, '')}`;
    const videoSection = document.getElementById('video-chat');
    if (videoFrame && videoSection) {
      startVideoChat(roomName);
      videoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      const url = new URL('video-chat.html', window.location.href);
      url.searchParams.set('room', roomName);
      window.location.href = url.toString();
    }
  });

  return card;
}

function requestSitterRemoval(sitter) {
  if (!isAdminModeActive() || !sitter || !sitter.id) {
    return;
  }

  const sitterName = sitter.name || 'this sitter';
  const confirmed = window.confirm(
    `Are you sure you want to delete ${sitterName}'s profile? This cannot be undone.`
  );

  if (!confirmed) {
    return;
  }

  removeSitterById(sitter.id, sitterName);
}

function removeSitterById(sitterId, sitterName = '') {
  if (!sitterId) {
    return;
  }

  const sitterIndex = sitters.findIndex((entry) => entry.id === sitterId);

  if (sitterIndex === -1) {
    updateAdminControlsUI(
      'We could not locate that sitter profile. Please refresh and try again.',
      'warning'
    );
    return;
  }

  const [removedSitter] = sitters.splice(sitterIndex, 1);
  saveStoredData(STORAGE_KEYS.SITTERS, sitters);

  if (activeSitterAccount?.id === sitterId) {
    activeSitterAccount = null;
    saveStoredData(STORAGE_KEYS.ACTIVE_SITTER, activeSitterAccount);
  }

  if (activeSitterProfileId === sitterId) {
    activeSitterProfileId = null;
    activeSitterProfileName = '';
  }

  if (sitterProfileSection) {
    renderSitterProfilePage();
  }

  renderSitterDirectory();

  const displayName = sitterName || removedSitter?.name || 'The sitter profile';
  updateAdminControlsUI(`${displayName} has been removed from the directory.`, 'success');
}

function renderSitters(sitters, emptyMessage) {
  if (!sitterList) return;
  sitterList.innerHTML = '';
  if (!sitters.length) {
    const empty = document.createElement('p');
    empty.className = 'note';
    empty.textContent =
      emptyMessage || 'No sitter profiles yet. Be the first to share your services!';
    sitterList.appendChild(empty);
    return;
  }
  sitters.forEach((sitter) => sitterList.appendChild(createSitterCard(sitter)));
}

function hasActiveSitterFilters() {
  return Boolean(
    (activeSitterFilters.location && activeSitterFilters.location.length) ||
      typeof activeSitterFilters.maxRate === 'number' ||
      (activeSitterFilters.availability && activeSitterFilters.availability.length)
  );
}

function applySitterFilters(list) {
  if (!Array.isArray(list) || !list.length) return list;

  return list.filter((sitter) => {
    const sitterLocation = (sitter.location || '').toLowerCase();
    const matchesLocation = activeSitterFilters.location
      ? sitterLocation.includes(activeSitterFilters.location)
      : true;

    const hourlyRate = Number(sitter.hourlyRate);
    let matchesRate = true;
    if (typeof activeSitterFilters.maxRate === 'number') {
      matchesRate =
        !Number.isFinite(hourlyRate) || hourlyRate <= activeSitterFilters.maxRate;
    }

    const matchesAvailability = activeSitterFilters.availability
      ? sitter.availability === activeSitterFilters.availability
      : true;

    return matchesLocation && matchesRate && matchesAvailability;
  });
}

function renderSitterDirectory() {
  const filteredSitters = applySitterFilters(sitters);
  const emptyMessage = hasActiveSitterFilters()
    ? 'No sitters match your filters yet. Try adjusting your search.'
    : undefined;
  renderSitters(filteredSitters, emptyMessage);
}

function updateSitterFilters() {
  if (!sitterFilters) return;

  const formData = new FormData(sitterFilters);
  const locationValue = (formData.get('location') || '').toString().trim().toLowerCase();
  const maxRateRaw = formData.get('maxRate');
  const maxRateValue = maxRateRaw === null ? '' : maxRateRaw.toString().trim();
  const parsedMaxRate = maxRateValue === '' ? null : Number(maxRateValue);
  activeSitterFilters = {
    location: locationValue,
    maxRate: Number.isFinite(parsedMaxRate) ? parsedMaxRate : null,
    availability: (formData.get('availability') || '').toString().trim(),
  };

  renderSitterDirectory();
}

function createQuestionItem(question) {
  const li = document.createElement('li');
  li.className = 'question-item';
  li.innerHTML = `
    <strong>${question.author}</strong>
    <p>${question.text}</p>
    <time datetime="${question.created}">Posted ${new Date(question.created).toLocaleString()}</time>
  `;
  return li;
}

function renderQuestions(questions) {
  if (!questionsList) return;
  questionsList.innerHTML = '';
  if (!questions.length) {
    const empty = document.createElement('li');
    empty.className = 'note';
    empty.textContent = 'No questions yet. Start the conversation!';
    questionsList.appendChild(empty);
    return;
  }
  questions.forEach((question) => questionsList.appendChild(createQuestionItem(question)));
}

function startVideoChat(roomName) {
  if (!videoFrame) return;
  const sanitized = roomName.replace(/[^A-Za-z0-9-]/g, '') || 'PawNamicsWelcome';
  videoFrame.src = `https://meet.jit.si/embed/${sanitized}`;
}

function setElementTextContent(elements, value, fallback = '') {
  const text = value && value.length ? value : fallback;
  elements.forEach((element) => {
    if (element) {
      element.textContent = text;
    }
  });
}

function updateSubscriptionSummary() {
  if (!subscriptionTotal || !subscriptionPlanInputs.length) return;
  const activePlan = subscriptionPlanInputs.find((input) => input.checked) ||
    subscriptionPlanInputs[0];
  if (!activePlan) return;
  const price = Number(activePlan.dataset.planPrice || '0');
  const interval = activePlan.dataset.planInterval || 'month';
  subscriptionTotal.textContent = `$${price.toFixed(2)} per ${interval}`;
}

function toggleSitterProfileVisibility(showProfile) {
  if (!sitterProfileSection || !sitterProfileEmpty) return;
  if (showProfile) {
    sitterProfileSection.classList.remove('hidden');
    sitterProfileEmpty.classList.add('hidden');
    sitterProfileHero?.classList.remove('hidden');
  } else {
    sitterProfileSection.classList.add('hidden');
    sitterProfileEmpty.classList.remove('hidden');
    sitterProfileHero?.classList.add('hidden');
  }
}

function renderSitterProfilePage() {
  if (!sitterProfileSection) return;

  const params = new URLSearchParams(window.location.search);
  let sitterId = params.get('id');

  if (!sitterId && activeSitterAccount?.id) {
    sitterId = activeSitterAccount.id;
  }

  if (!sitterId) {
    toggleSitterProfileVisibility(false);
    activeSitterProfileId = null;
    activeSitterProfileName = '';
    if (typeof document !== 'undefined') {
      document.title = 'Sitter Profile | PawNamics';
    }
    return;
  }

  const sitter = sitters.find((entry) => entry.id === sitterId);

  if (!sitter) {
    toggleSitterProfileVisibility(false);
    activeSitterProfileId = null;
    activeSitterProfileName = '';
    if (typeof document !== 'undefined') {
      document.title = 'Sitter Profile | PawNamics';
    }
    return;
  }

  toggleSitterProfileVisibility(true);
  ensureSitterIdentifier(sitter);
  activeSitterProfileId = sitter.id;
  activeSitterProfileName = sitter.name || 'PawNamics Sitter';

  if (subscriptionMessage) {
    subscriptionMessage.classList.add('hidden');
    subscriptionMessage.textContent = '';
  }

  const sitterName = sitter.name || 'PawNamics Sitter';
  const sitterLocation = sitter.location || 'Location coming soon';
  const sitterAvailability = sitter.availability || 'Availability varies';
  const sitterExperience = sitter.experience
    ? `${sitter.experience} years of experience`
    : 'Experience shared soon';
  const sitterServices = sitter.services || 'Services will be listed soon.';
  const sitterBio = sitter.bio ||
    'This sitter will update their bio shortly. Check back for more details!';

  const sitterHourly = sitter.hourlyRate ? `$${sitter.hourlyRate}/hr` : '';
  const sitterDaily = sitter.dailyRate ? `$${sitter.dailyRate}/day` : '';
  const ratesText = [sitterHourly, sitterDaily].filter(Boolean).join(' • ') ||
    'Rates to be discussed with the sitter.';

  setElementTextContent(sitterNameElements, sitterName, 'PawNamics Sitter');
  setElementTextContent(sitterNameShortElements, sitterName.split(' ')[0] || sitterName);
  setElementTextContent(sitterLocationElements, sitterLocation, 'Location coming soon');

  if (sitterLocationDetail) {
    sitterLocationDetail.textContent = sitterLocation;
  }
  if (sitterAvailabilityElement) {
    sitterAvailabilityElement.textContent = sitterAvailability;
  }
  if (sitterExperienceElement) {
    sitterExperienceElement.textContent = sitterExperience;
  }
  if (sitterServicesElement) {
    sitterServicesElement.textContent = sitterServices;
  }
  if (sitterBioElement) {
    sitterBioElement.textContent = sitterBio;
  }
  if (sitterRatesElement) {
    sitterRatesElement.textContent = ratesText;
  }

  const sitterPhotoSource =
    (typeof sitter.photo === 'string' && sitter.photo.length && sitter.photo) ||
    (typeof sitter.photoUrl === 'string' && sitter.photoUrl.length && sitter.photoUrl) ||
    DEFAULT_SITTER_PHOTO;

  if (sitterPhotoElement) {
    sitterPhotoElement.src = sitterPhotoSource;
    sitterPhotoElement.alt = `${sitterName}'s profile photo`;
  }

  if (sitterProfileHero) {
    const heroPhoto =
      sitter.photo && sitter.photo.length ? sitter.photo : DEFAULT_SITTER_HERO;
    sitterProfileHero.style.setProperty(
      '--sitter-hero-image',
      `url("${heroPhoto}")`
    );
  }

  if (sitterVideoButton) {
    const roomName = `PawNamics-${sitterName.replace(/\s+/g, '')}`;
    sitterVideoButton.addEventListener('click', () => {
      const url = new URL('video-chat.html', window.location.href);
      url.searchParams.set('room', roomName);
      window.location.href = url.toString();
    }, { once: true });
  }

  if (typeof document !== 'undefined' && sitterName.length) {
    document.title = `${sitterName} | PawNamics Sitter`;
  }

  updateSubscriptionSummary();
}

const sitters = loadStoredData(STORAGE_KEYS.SITTERS);
const questions = loadStoredData(STORAGE_KEYS.QUESTIONS);
let chatMessagesData = loadStoredData(STORAGE_KEYS.CHAT_MESSAGES);
if (!Array.isArray(chatMessagesData)) {
  chatMessagesData = [];
} else if (chatMessagesData.length > MAX_CHAT_MESSAGES) {
  chatMessagesData = chatMessagesData.slice(-MAX_CHAT_MESSAGES);
  saveStoredData(STORAGE_KEYS.CHAT_MESSAGES, chatMessagesData);
}
const subscriptions = loadStoredData(STORAGE_KEYS.SUBSCRIPTIONS);
let userProfile = loadStoredData(STORAGE_KEYS.PROFILE, null);
let userSettings = loadStoredData(STORAGE_KEYS.SETTINGS, DEFAULT_USER_SETTINGS);
let activeSitterAccount = loadStoredData(STORAGE_KEYS.ACTIVE_SITTER, null);
let activeSitterFilters = {
  location: '',
  maxRate: null,
  availability: '',
};
let activeSitterProfileId = null;
let activeSitterProfileName = '';

let sitterDataUpdated = false;
sitters.forEach((entry) => {
  const originalId = entry.id;
  ensureSitterIdentifier(entry);
  if (originalId !== entry.id) {
    sitterDataUpdated = true;
  }
});

if (sitterDataUpdated) {
  saveStoredData(STORAGE_KEYS.SITTERS, sitters);
}

if (!userSettings || typeof userSettings !== 'object' || Array.isArray(userSettings)) {
  userSettings = { ...DEFAULT_USER_SETTINGS };
  saveStoredData(STORAGE_KEYS.SETTINGS, userSettings);
} else {
  userSettings = { ...DEFAULT_USER_SETTINGS, ...userSettings };
  saveStoredData(STORAGE_KEYS.SETTINGS, userSettings);
}

if (
  activeSitterAccount &&
  !sitters.some((entry) => entry.id === activeSitterAccount.id)
) {
  activeSitterAccount = null;
  saveStoredData(STORAGE_KEYS.ACTIVE_SITTER, null);
}

initializeAdminControls();

if (sitterFilters) {
  updateSitterFilters();
} else {
  renderSitterDirectory();
}
renderQuestions(questions);
renderChatMessages(chatMessagesData, { forceScroll: true });
renderProfile(userProfile);
renderSitterProfilePage();
if (sitterPhotoPreview) {
  resetSitterPhotoPreview();
}

if (profileForm) {
  const backgroundCheckComplete =
    userProfile?.backgroundCheck?.status === 'clear';
  if (userProfile && !backgroundCheckComplete) {
    const formElements = Array.from(profileForm.elements).filter(
      (element) => element.name && element.type !== 'submit'
    );
    formElements.forEach((field) => {
      if (Object.prototype.hasOwnProperty.call(userProfile, field.name)) {
        field.value = userProfile[field.name];
      }
    });
  } else {
    profileForm.reset();
  }
}

sitterFilters?.addEventListener('submit', (event) => {
  event.preventDefault();
});

sitterFilters?.addEventListener('input', () => {
  updateSitterFilters();
});

sitterFilters?.addEventListener('change', () => {
  updateSitterFilters();
});

sitterFilters?.addEventListener('reset', () => {
  setTimeout(() => {
    updateSitterFilters();
  }, 0);
});

backgroundCheckButton?.addEventListener('click', () => {
  if (backgroundCheckInProgress) {
    return;
  }

  if (!userProfile) {
    setBackgroundCheckMessage(
      'Save your profile before requesting a background check.',
      'error'
    );
    updateBackgroundCheckUI(null, { state: 'idle' });
    return;
  }

  backgroundCheckInProgress = true;
  setBackgroundCheckMessage('Running free basic background check...', 'info');
  updateBackgroundCheckUI(userProfile.backgroundCheck || null, { state: 'running' });

  window.setTimeout(() => {
    const result = {
      status: 'clear',
      completedAt: new Date().toISOString(),
      summary:
        'Basic identity, watchlist, and public safety searches returned no concerns.',
    };

    try {
      userProfile = { ...userProfile, backgroundCheck: result };
      saveStoredData(STORAGE_KEYS.PROFILE, userProfile);
      renderProfile(userProfile);
      setBackgroundCheckMessage(
        'Background check completed successfully. Results: Clear.',
        'success'
      );
      if (profileForm) {
        profileForm.reset();
      }
    } catch (error) {
      console.error('Unable to record background check result', error);
      setBackgroundCheckMessage(
        'We were unable to save the background check results. Please try again.',
        'error'
      );
      updateBackgroundCheckUI(userProfile?.backgroundCheck || null, { state: 'error' });
    } finally {
      backgroundCheckInProgress = false;
    }
  }, BACKGROUND_CHECK_DELAY_MS);
});

function formatBackgroundCheckDate(value) {
  if (!value) {
    return '';
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return '';
  }

  try {
    return new Intl.DateTimeFormat(undefined, {
      dateStyle: 'medium',
      timeStyle: 'short',
    }).format(date);
  } catch (error) {
    return date.toLocaleString();
  }
}

function setBackgroundCheckMessage(message, status = 'info') {
  if (!backgroundCheckMessage) {
    return;
  }

  if (!message) {
    backgroundCheckMessage.textContent = '';
    backgroundCheckMessage.classList.add('hidden');
    delete backgroundCheckMessage.dataset.status;
    return;
  }

  backgroundCheckMessage.textContent = message;
  backgroundCheckMessage.dataset.status = status;
  backgroundCheckMessage.classList.remove('hidden');
}

function updateBackgroundCheckUI(result, options = {}) {
  if (!backgroundCheckStatus || !backgroundCheckIcon || !backgroundCheckText) {
    return;
  }

  const state = options.state
    ? options.state
    : !result
    ? 'idle'
    : result.status === 'error'
    ? 'error'
    : 'complete';

  backgroundCheckStatus.dataset.state = state;

  if (backgroundCheckButton) {
    if (state === 'running') {
      backgroundCheckButton.disabled = true;
      backgroundCheckButton.textContent = 'Running background check...';
    } else {
      backgroundCheckButton.disabled = false;
      backgroundCheckButton.textContent =
        state === 'complete'
          ? backgroundCheckButtonRetryText
          : backgroundCheckButtonDefaultText;
    }
  }

  if (state === 'running') {
    backgroundCheckIcon.textContent = '…';
    backgroundCheckText.textContent = 'Running basic background check...';
    if (backgroundCheckDetails) {
      backgroundCheckDetails.textContent = '';
      backgroundCheckDetails.classList.add('hidden');
    }
    return;
  }

  if (state === 'idle') {
    backgroundCheckIcon.textContent = '✖';
    backgroundCheckText.textContent = 'Background check not requested yet.';
    if (backgroundCheckDetails) {
      backgroundCheckDetails.textContent = '';
      backgroundCheckDetails.classList.add('hidden');
    }
    return;
  }

  if (state === 'error') {
    backgroundCheckIcon.textContent = '✖';
    backgroundCheckText.textContent = 'Background check could not be completed.';
    if (backgroundCheckDetails) {
      if (result?.summary) {
        backgroundCheckDetails.textContent = result.summary;
        backgroundCheckDetails.classList.remove('hidden');
      } else {
        backgroundCheckDetails.textContent = '';
        backgroundCheckDetails.classList.add('hidden');
      }
    }
    return;
  }

  backgroundCheckIcon.textContent = '✓';
  const completedOn = formatBackgroundCheckDate(result?.completedAt);
  backgroundCheckText.textContent = completedOn
    ? `Background check completed on ${completedOn}.`
    : 'Background check completed.';

  if (backgroundCheckDetails) {
    if (result?.summary) {
      backgroundCheckDetails.textContent = result.summary;
      backgroundCheckDetails.classList.remove('hidden');
    } else {
      backgroundCheckDetails.textContent = '';
      backgroundCheckDetails.classList.add('hidden');
    }
  }
}

function renderProfile(profile) {
  updateProfileMenu(profile);

  const hasProfilePreview = Boolean(profileDetails && profileEmptyState);

  if (!profile) {
    if (hasProfilePreview) {
      profileDetails.classList.add('hidden');
      profileEmptyState.classList.remove('hidden');
    }
    updateBackgroundCheckUI(null);
    setBackgroundCheckMessage(null);
    if (profileHighlightSection) {
      profileHighlightSection.classList.add('hidden');
    }
    return;
  }

  const avatarUrl = profile.photo || DEFAULT_PROFILE_AVATAR;
  const backgroundCheckComplete = profile.backgroundCheck?.status === 'clear';

  if (hasProfilePreview) {
    profileEmptyState.classList.add('hidden');
    profileDetails.classList.remove('hidden');

    if (profileAvatar) {
      profileAvatar.src = avatarUrl;
      profileAvatar.alt = profile.name
        ? `${profile.name}'s profile photo`
        : 'Profile avatar';
    }

    if (profileName) {
      profileName.textContent = profile.name || 'Your Name';
    }

    if (profileHeadline) {
      profileHeadline.textContent =
        profile.headline || 'Add a short headline to introduce yourself.';
    }

    if (profileLocation) {
      profileLocation.textContent = profile.location || 'Location not provided';
    }

    if (profileEmail) {
      if (profile.email) {
        profileEmail.textContent = profile.email;
        profileEmail.href = `mailto:${profile.email}`;
        profileEmail.classList.remove('hidden');
      } else {
        profileEmail.textContent = '';
        profileEmail.href = '#';
        profileEmail.classList.add('hidden');
      }
    }

    if (profilePets) {
      profilePets.textContent = profile.petFocus || 'Share which pets you care for.';
    }

    if (profileExperience) {
      profileExperience.textContent = profile.experience
        ? `${profile.experience} years`
        : 'Experience not listed yet';
    }

    if (profileBio) {
      profileBio.textContent =
        profile.bio || 'Tell the community a little more about yourself.';
    }
  }

  updateBackgroundCheckUI(profile.backgroundCheck || null);

  if (profileHighlightSection) {
    if (backgroundCheckComplete) {
      profileHighlightSection.classList.remove('hidden');

      if (profileHighlightAvatar) {
        profileHighlightAvatar.src = avatarUrl;
        profileHighlightAvatar.alt = profile.name
          ? `${profile.name}'s profile photo`
          : 'Profile avatar';
      }

      if (profileHighlightName) {
        profileHighlightName.textContent = profile.name || 'Your Name';
      }

      if (profileHighlightHeadline) {
        profileHighlightHeadline.textContent =
          profile.headline || 'Add a short headline to introduce yourself.';
      }

      if (profileHighlightLocation) {
        profileHighlightLocation.textContent =
          profile.location || 'Location not provided';
      }

      if (profileHighlightEmail) {
        if (profile.email) {
          profileHighlightEmail.textContent = profile.email;
          profileHighlightEmail.href = `mailto:${profile.email}`;
          profileHighlightEmail.classList.remove('hidden');
        } else {
          profileHighlightEmail.textContent = '';
          profileHighlightEmail.href = '#';
          profileHighlightEmail.classList.add('hidden');
        }
      }

      if (profileHighlightPets) {
        profileHighlightPets.textContent =
          profile.petFocus || 'Share which pets you care for.';
      }

      if (profileHighlightExperience) {
        profileHighlightExperience.textContent = profile.experience
          ? `${profile.experience} years`
          : 'Experience not listed yet';
      }

      if (profileHighlightBio) {
        profileHighlightBio.textContent =
          profile.bio || 'Tell the community a little more about yourself.';
      }

      if (profileHighlightBackground) {
        const completedAt = profile.backgroundCheck?.completedAt;
        const completedOn = formatBackgroundCheckDate(completedAt);
        const summary = profile.backgroundCheck?.summary || '';
        const baseMessage = completedOn
          ? `Background check completed on ${completedOn}.`
          : 'Background check completed.';
        const message = summary ? `${baseMessage} ${summary}` : baseMessage;
        profileHighlightBackground.textContent = message;
        profileHighlightBackground.classList.remove('hidden');
      }
    } else {
      profileHighlightSection.classList.add('hidden');
      if (profileHighlightBackground) {
        profileHighlightBackground.textContent = '';
        profileHighlightBackground.classList.add('hidden');
      }
    }
  }
}
sitterPhotoInput?.addEventListener('change', async () => {
  const selectedFile = sitterPhotoInput.files?.[0];
  await updateSitterPhotoPreview(selectedFile);
});

if (subscriptionPlanInputs.length) {
  subscriptionPlanInputs.forEach((input) => {
    input.addEventListener('change', () => {
      if (subscriptionMessage) {
        subscriptionMessage.classList.add('hidden');
      }
      updateSubscriptionSummary();
    });
  });
}

subscriptionForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  if (subscriptionMessage) {
    subscriptionMessage.classList.add('hidden');
  }
  if (!activeSitterProfileId) {
    if (subscriptionMessage) {
      subscriptionMessage.classList.remove('hidden');
      subscriptionMessage.textContent =
        'We were unable to locate this sitter profile. Please refresh and try again.';
    }
    return;
  }

  const formData = new FormData(subscriptionForm);
  const selectedPlan = formData.get('plan');
  const subscriberName = (formData.get('subscriberName') || '').toString().trim();
  const subscriberEmail = (formData.get('subscriberEmail') || '').toString().trim();
  const paymentMethod = (formData.get('paymentMethod') || '').toString().trim();

  if (!subscriberName || !subscriberEmail || !selectedPlan) {
    if (subscriptionMessage) {
      subscriptionMessage.classList.remove('hidden');
      subscriptionMessage.textContent =
        'Please complete your name, email, and select a plan to continue.';
    }
    return;
  }

  const planInput = subscriptionPlanInputs.find((input) => input.value === selectedPlan);
  const planLabel = planInput?.dataset.planLabel || 'Custom care plan';
  const planInterval = planInput?.dataset.planInterval || 'month';
  const planPrice = Number(planInput?.dataset.planPrice || '0');

  const subscriptionRecord = {
    id: generateId('subscription'),
    sitterId: activeSitterProfileId,
    sitterName: activeSitterProfileName,
    plan: selectedPlan,
    planLabel,
    planInterval,
    amount: planPrice,
    subscriberName,
    subscriberEmail,
    paymentMethod,
    createdAt: new Date().toISOString(),
  };

  subscriptions.unshift(subscriptionRecord);
  saveStoredData(STORAGE_KEYS.SUBSCRIPTIONS, subscriptions);

  if (subscriptionMessage) {
    subscriptionMessage.classList.remove('hidden');
    const sitterNameDisplay = activeSitterProfileName || 'your sitter';
    subscriptionMessage.textContent = `You're subscribed to ${planLabel} with ${sitterNameDisplay}. We'll send a confirmation to ${subscriberEmail} for ${subscriberName}.`;
  }

  subscriptionForm.reset();
  if (subscriptionPlanInputs[0]) {
    subscriptionPlanInputs[0].checked = true;
  }
  updateSubscriptionSummary();
});

newsletterForm?.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(newsletterForm);
  const name = (formData.get('name') || '').toString().trim();
  const email = (formData.get('email') || '').toString().trim();

  if (!email) {
    setNewsletterStatusMessage(
      'Please provide your email address so we can subscribe you.',
      'error'
    );
    return;
  }

  const { recipient, cc } = getNewsletterConfig();
  const subscriberName = name || 'PawNamics visitor';
  const subject = `Newsletter subscription from ${subscriberName}`;
  const messageLines = [
    'Hello PawNamics team,',
    '',
    'Please add me to the PawNamics newsletter.',
    `Name: ${subscriberName}`,
    `Email: ${email}`,
    '',
    'Submitted via PawNamics.com',
  ];

  const params = new URLSearchParams();
  if (subject) {
    params.set('subject', subject);
  }
  params.set('body', messageLines.join('\n'));
  if (cc.length) {
    params.set('cc', cc.join(','));
  }

  const mailtoUrl = `mailto:${recipient}?${params.toString()}`;
  window.location.href = mailtoUrl;

  setNewsletterStatusMessage(
    'Opening your email app so you can confirm your subscription…'
  );
  newsletterForm.reset();
});

newsletterForm?.addEventListener('input', () => {
  setNewsletterStatusMessage('');
});

sitterForm?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const formData = new FormData(sitterForm);
  setFormMessage(sitterFormMessage, '');

  const username = (formData.get('username') || '').toString().trim();
  const password = (formData.get('password') || '').toString();

  if (!username || !password) {
    setFormMessage(
      sitterFormMessage,
      'Please choose a username and password to save your profile.',
      'error'
    );
    return;
  }

  if (password.length < 6) {
    setFormMessage(
      sitterFormMessage,
      'Your password should be at least 6 characters long.',
      'error'
    );
    return;
  }

  const existingSitter = findSitterByUsername(username);
  if (existingSitter) {
    setFormMessage(
      sitterFormMessage,
      'That username is already taken. Try a different one or log in instead.',
      'error'
    );
    return;
  }

  const parseNumberField = (name) => {
    const value = formData.get(name);
    if (value === null) return null;
    const number = Number(value);
    return Number.isFinite(number) ? number : null;
  };

  const sitter = {
    name: (formData.get('name') || '').toString().trim(),
    location: (formData.get('location') || '').toString().trim(),
    services: (formData.get('services') || '').toString().trim(),
    bio: (formData.get('bio') || '').toString().trim(),
    availability: (formData.get('availability') || '').toString().trim(),
  };

  const hourlyRateNumber = parseNumberField('hourlyRate');
  const dailyRateNumber = parseNumberField('dailyRate');
  const experienceNumber = parseNumberField('experience');
  const photoFile = formData.get('photo');
  let photoData = '';

  if (photoFile instanceof File && photoFile.size > 0) {
    try {
      photoData = await fileToDataUrl(photoFile);
    } catch (error) {
      console.error('Unable to read profile photo', error);
    }
  }

  const sitterRecord = {
    id: generateId('sitter'),
    ...sitter,
    hourlyRate: Number.isFinite(hourlyRateNumber) ? hourlyRateNumber.toFixed(0) : '',
    dailyRate: Number.isFinite(dailyRateNumber) ? dailyRateNumber.toFixed(0) : '',
    experience: Number.isFinite(experienceNumber) ? experienceNumber.toFixed(0) : '',
    photo: photoData,
    username,
    password,
    createdAt: new Date().toISOString(),
  };

  sitters.unshift(sitterRecord);
  saveStoredData(STORAGE_KEYS.SITTERS, sitters);
  activeSitterAccount = {
    id: sitterRecord.id,
    username: sitterRecord.username,
    name: sitterRecord.name || sitterRecord.username,
  };
  saveStoredData(STORAGE_KEYS.ACTIVE_SITTER, activeSitterAccount);
  renderSitterDirectory();
  sitterForm.reset();
  resetSitterPhotoPreview();
  setFormMessage(
    sitterFormMessage,
    'Profile saved! Redirecting you to your public page…',
    'success'
  );

  const profileUrl = new URL('sitter-profile.html', window.location.href);
  profileUrl.searchParams.set('id', sitterRecord.id);
  window.location.href = profileUrl.toString();
});

sitterForm?.addEventListener('input', () => {
  setFormMessage(sitterFormMessage, '');
});

sitterForm?.addEventListener('reset', () => {
  resetSitterPhotoPreview();
});

loginForms.forEach((form) => {
  const messageElement = form.querySelector('[data-login-message]');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    setFormMessage(messageElement, '');

    const formData = new FormData(form);
    const username = (formData.get('username') || '').toString().trim();
    const password = (formData.get('password') || '').toString();

    if (!username || !password) {
      setFormMessage(
        messageElement,
        'Enter both your username and password to continue.',
        'error'
      );
      return;
    }

    if (!sitters.length) {
      setFormMessage(
        messageElement,
        'No sitter accounts are saved on this device yet. Create a profile first.',
        'error'
      );
      return;
    }

    const sitter = findSitterByUsername(username);

    if (!sitter || typeof sitter.password !== 'string' || sitter.password !== password) {
      setFormMessage(
        messageElement,
        'We could not find a matching account. Check your details or create a new profile.',
        'error'
      );
      return;
    }

    activeSitterAccount = {
      id: sitter.id,
      username: sitter.username || username,
      name: sitter.name || sitter.username || username,
    };
    saveStoredData(STORAGE_KEYS.ACTIVE_SITTER, activeSitterAccount);

    setFormMessage(messageElement, 'Logging you in…', 'info');

    const profileUrl = new URL('sitter-profile.html', window.location.href);
    profileUrl.searchParams.set('id', sitter.id);
    window.location.href = profileUrl.toString();
  });

  form.addEventListener('input', () => {
    setFormMessage(messageElement, '');
  });
});

questionForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(questionForm);
  const entry = {
    author: formData.get('author') || 'Anonymous',
    text: formData.get('question'),
    created: new Date().toISOString(),
  };
  questions.unshift(entry);
  saveStoredData(STORAGE_KEYS.QUESTIONS, questions);
  renderQuestions(questions);
  questionForm.reset();
});

chatForm?.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!chatMessageInput) {
    return;
  }

  const nameValue = chatNameInput ? chatNameInput.value.trim() : '';
  const messageValue = chatMessageInput.value.trim();

  if (!messageValue.length) {
    setChatStatus('Enter a message before sending it to the community.', 'error');
    chatMessageInput.focus();
    return;
  }

  if (messageValue.length > CHAT_MESSAGE_MAX_LENGTH) {
    setChatStatus(
      `Messages are limited to ${CHAT_MESSAGE_MAX_LENGTH} characters.`,
      'error'
    );
    chatMessageInput.focus();
    return;
  }

  const author = nameValue.length ? nameValue : 'Anonymous';
  const entry = {
    id: generateId('chat'),
    author,
    text: messageValue,
    created: new Date().toISOString(),
  };

  chatMessagesData = [...chatMessagesData, entry];
  if (chatMessagesData.length > MAX_CHAT_MESSAGES) {
    chatMessagesData = chatMessagesData.slice(-MAX_CHAT_MESSAGES);
  }

  saveStoredData(STORAGE_KEYS.CHAT_MESSAGES, chatMessagesData);
  renderChatMessages(chatMessagesData, { forceScroll: true });

  chatMessageInput.value = '';
  chatMessageInput.focus();

  setChatStatus('Message sent!', 'success', { autoReset: true });
});

chatForm?.addEventListener('input', () => {
  if (!chatStatusMessage) {
    return;
  }
  if (chatStatusMessage.dataset.status === 'error') {
    resetChatStatus();
  }
});

window.addEventListener('storage', (event) => {
  if (event.key !== STORAGE_KEYS.CHAT_MESSAGES) {
    return;
  }

  try {
    chatMessagesData = event.newValue ? JSON.parse(event.newValue) : [];
  } catch (error) {
    console.warn('Unable to parse chat messages from storage', error);
    chatMessagesData = [];
  }

  if (!Array.isArray(chatMessagesData)) {
    chatMessagesData = [];
  }

  if (chatMessagesData.length > MAX_CHAT_MESSAGES) {
    chatMessagesData = chatMessagesData.slice(-MAX_CHAT_MESSAGES);
  }

  renderChatMessages(chatMessagesData);
});

videoForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(videoForm);
  const room = formData.get('room');
  startVideoChat(room);
});

profileForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(profileForm);
  const profile = Object.fromEntries(formData.entries());

  if (userProfile?.backgroundCheck) {
    profile.backgroundCheck = userProfile.backgroundCheck;
  }

  saveStoredData(STORAGE_KEYS.PROFILE, profile);
  userProfile = profile;
  renderProfile(userProfile);

  if (profileMessage) {
    profileMessage.classList.remove('hidden');
    profileMessage.textContent = 'Profile saved! Refresh or revisit this page anytime to view it.';
    setTimeout(() => {
      profileMessage.classList.add('hidden');
    }, 4000);
  }
});

profileDeleteButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const confirmed = window.confirm(
      'Are you sure you want to delete your saved profile? This cannot be undone.'
    );

    if (!confirmed) {
      return;
    }

    userProfile = null;
    try {
      localStorage.removeItem(STORAGE_KEYS.PROFILE);
    } catch (error) {
      console.warn('Unable to remove profile from storage', error);
    }

    renderProfile(null);
    if (profileForm) {
      profileForm.reset();
    }
    backgroundCheckInProgress = false;
    if (profileMessage) {
      profileMessage.textContent = 'Profile deleted.';
      profileMessage.classList.remove('hidden');
      setTimeout(() => {
        profileMessage?.classList.add('hidden');
      }, 4000);
    }
  });
});

profileMenuTrigger?.addEventListener('click', (event) => {
  if (profileMenu?.classList.contains('hidden')) {
    return;
  }
  event.preventDefault();
  event.stopPropagation();
  const shouldOpen = !profileMenuOpen;
  setProfileMenuOpen(shouldOpen);
  if (shouldOpen) {
    focusProfileMenuItem(0);
  }
});

profileMenuTrigger?.addEventListener('keydown', (event) => {
  if (profileMenu?.classList.contains('hidden')) {
    return;
  }

  if (event.key === 'ArrowDown') {
    event.preventDefault();
    setProfileMenuOpen(true);
    focusProfileMenuItem(0);
  } else if (event.key === 'Escape' && profileMenuOpen) {
    event.preventDefault();
    setProfileMenuOpen(false);
  }
});

profileMenuDropdown?.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    setProfileMenuOpen(false);
    profileMenuTrigger?.focus();
  }
});

document.addEventListener('click', (event) => {
  if (!profileMenuOpen || !profileMenu) {
    return;
  }

  if (profileMenu.contains(event.target)) {
    return;
  }

  setProfileMenuOpen(false);
});

document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') {
    return;
  }

  if (profileMenuOpen) {
    setProfileMenuOpen(false);
    profileMenuTrigger?.focus();
  }

  if (isSettingsModalOpen) {
    closeSettingsModal({ focusTrigger: true });
  }
});

profileMenuSettings?.addEventListener('click', () => {
  setProfileMenuOpen(false);
  openSettingsModal();
});

profileMenuLogout?.addEventListener('click', () => {
  handleProfileLogout();
});

settingsModalDismissElements.forEach((element) => {
  element.addEventListener('click', () => {
    closeSettingsModal({ focusTrigger: true });
  });
});

settingsForm?.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(settingsForm);
  const updatedSettings = { ...DEFAULT_USER_SETTINGS };

  Object.keys(DEFAULT_USER_SETTINGS).forEach((key) => {
    updatedSettings[key] = formData.has(key);
  });

  const hasChanges = Object.keys(updatedSettings).some(
    (key) => Boolean(userSettings?.[key]) !== Boolean(updatedSettings[key])
  );

  userSettings = updatedSettings;
  saveStoredData(STORAGE_KEYS.SETTINGS, userSettings);
  applySettingsToForm();

  showSettingsMessage(hasChanges ? 'Settings saved.' : 'No changes to save.', hasChanges ? 'success' : 'info');

  if (pendingSettingsCloseTimer) {
    window.clearTimeout(pendingSettingsCloseTimer);
  }

  pendingSettingsCloseTimer = window.setTimeout(() => {
    closeSettingsModal({ focusTrigger: true });
    pendingSettingsCloseTimer = null;
  }, hasChanges ? 1400 : 1000);
});

applySettingsToForm();

if (videoFrame) {
  const params = new URLSearchParams(window.location.search);
  const requestedRoom = params.get('room');
  if (requestedRoom) {
    startVideoChat(requestedRoom);
    const roomInput = videoForm?.querySelector('input[name="room"]');
    if (roomInput) {
      roomInput.value = requestedRoom;
    }
  }
}
