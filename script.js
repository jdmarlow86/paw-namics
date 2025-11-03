const sitterForm = document.getElementById('sitter-form');
const sitterList = document.getElementById('sitter-list');
const sitterFilters = document.getElementById('sitter-filters');
const questionForm = document.getElementById('question-form');
const questionsList = document.getElementById('questions-list');
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
const cardModal = document.querySelector('[data-card-modal]');
const cardModalForm = cardModal?.querySelector('[data-card-form]');
const cardModalDismissElements = cardModal
  ? Array.from(cardModal.querySelectorAll('[data-card-dismiss]'))
  : [];
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

const DEFAULT_SITTER_PHOTO =
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80';

const DEFAULT_SITTER_HERO =
  'https://images.unsplash.com/photo-1525253086316-d0c936c814f8?auto=format&fit=crop&w=1200&q=80';

const STORAGE_KEYS = {
  SITTERS: 'pawnamics_sitters',
  QUESTIONS: 'pawnamics_questions',
  PROFILE: 'pawnamics_user_profile',
  SUBSCRIPTIONS: 'pawnamics_sitter_subscriptions',
  THEME: 'pawnamics_theme',
};

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

function initializePaymentOptions() {
  if (!paymentOptionButtons.length) {
    return;
  }

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
    if (focusTrigger && activePaymentButton) {
      activePaymentButton.focus();
    }
  };

  const handlePaymentClick = (button) => {
    const { paymentType = '', paymentUrl = '', paymentLabel = '' } = button.dataset;
    const label = paymentLabel || button.textContent.trim();

    setActivePayment(button);

    if (paymentType === 'card') {
      hidePaymentSelection();
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
    cardModalForm.addEventListener('submit', (event) => {
      event.preventDefault();
      closeCardModal({ focusTrigger: true });
      window.alert('Thank you! Your purchase request has been received.');
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
  const sitterId = params.get('id');

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
const subscriptions = loadStoredData(STORAGE_KEYS.SUBSCRIPTIONS);
let userProfile = loadStoredData(STORAGE_KEYS.PROFILE, null);
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

if (sitterFilters) {
  updateSitterFilters();
} else {
  renderSitterDirectory();
}
renderQuestions(questions);
renderProfile(userProfile);
renderSitterProfilePage();
if (sitterPhotoPreview) {
  resetSitterPhotoPreview();
}

if (profileForm && userProfile) {
  const formElements = Array.from(profileForm.elements).filter(
    (element) => element.name && element.type !== 'submit'
  );
  formElements.forEach((field) => {
    if (Object.prototype.hasOwnProperty.call(userProfile, field.name)) {
      field.value = userProfile[field.name];
    }
  });
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

function renderProfile(profile) {
  if (!profileDetails || !profileEmptyState) return;

  if (!profile) {
    profileDetails.classList.add('hidden');
    profileEmptyState.classList.remove('hidden');
    return;
  }

  const avatarUrl = profile.photo ||
    'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=400&q=80';

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
    profileHeadline.textContent = profile.headline || 'Add a short headline to introduce yourself.';
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
    profileBio.textContent = profile.bio || 'Tell the community a little more about yourself.';
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

sitterForm?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const formData = new FormData(sitterForm);

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
  };

  sitters.unshift(sitterRecord);
  saveStoredData(STORAGE_KEYS.SITTERS, sitters);
  renderSitterDirectory();
  sitterForm.reset();
  resetSitterPhotoPreview();

  const profileUrl = new URL('sitter-profile.html', window.location.href);
  profileUrl.searchParams.set('id', sitterRecord.id);
  window.location.href = profileUrl.toString();
});

sitterForm?.addEventListener('reset', () => {
  resetSitterPhotoPreview();
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
