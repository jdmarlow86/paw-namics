const sitterForm = document.getElementById('sitter-form');
const sitterList = document.getElementById('sitter-list');
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

const STORAGE_KEYS = {
  SITTERS: 'pawnamics_sitters',
  QUESTIONS: 'pawnamics_questions',
  PROFILE: 'pawnamics_user_profile',
};

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

function createSitterCard(sitter) {
  const card = document.createElement('article');
  card.className = 'card sitter-card';
  card.innerHTML = `
    <header>
      <img src="${sitter.photo || 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80'}" alt="${sitter.name}" />
      <div>
        <h3>${sitter.name}</h3>
        <div class="sitter-meta">
          <span class="badge">${sitter.location}</span>
          <span class="badge">${sitter.availability}</span>
          <span>${sitter.experience} yrs experience</span>
        </div>
      </div>
    </header>
    <p class="details">${sitter.bio}</p>
    <div class="sitter-meta">
      <span class="rates">💲$${sitter.hourlyRate}/hr</span>
      <span class="rates">🏡 $${sitter.dailyRate}/day</span>
    </div>
    <p class="details"><strong>Services:</strong> ${sitter.services}</p>
    <button class="btn btn-outline" type="button">Start Video Chat</button>
  `;

  const button = card.querySelector('button');
  button.addEventListener('click', () => {
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

function renderSitters(sitters) {
  if (!sitterList) return;
  sitterList.innerHTML = '';
  if (!sitters.length) {
    const empty = document.createElement('p');
    empty.className = 'note';
    empty.textContent = 'No sitter profiles yet. Be the first to share your services!';
    sitterList.appendChild(empty);
    return;
  }
  sitters.forEach((sitter) => sitterList.appendChild(createSitterCard(sitter)));
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

const sitters = loadStoredData(STORAGE_KEYS.SITTERS);
const questions = loadStoredData(STORAGE_KEYS.QUESTIONS);
let userProfile = loadStoredData(STORAGE_KEYS.PROFILE, null);

renderSitters(sitters);
renderQuestions(questions);
renderProfile(userProfile);

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

sitterForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(sitterForm);
  const sitter = Object.fromEntries(formData.entries());
  sitters.unshift({
    ...sitter,
    hourlyRate: Number(sitter.hourlyRate).toFixed(0),
    dailyRate: Number(sitter.dailyRate).toFixed(0),
    experience: Number(sitter.experience).toFixed(0),
  });
  saveStoredData(STORAGE_KEYS.SITTERS, sitters);
  renderSitters(sitters);
  sitterForm.reset();
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
