const sitterForm = document.getElementById('sitter-form');
const sitterList = document.getElementById('sitter-list');
const questionForm = document.getElementById('question-form');
const questionsList = document.getElementById('questions-list');
const videoForm = document.getElementById('video-form');
const videoFrame = document.getElementById('video-frame');

const STORAGE_KEYS = {
  SITTERS: 'pawnamics_sitters',
  QUESTIONS: 'pawnamics_questions',
};

function loadStoredData(key) {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error(`Unable to parse ${key} from storage`, error);
    return [];
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
    startVideoChat(roomName);
    window.scrollTo({ top: document.getElementById('video-chat').offsetTop - 80, behavior: 'smooth' });
  });

  return card;
}

function renderSitters(sitters) {
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
  const sanitized = roomName.replace(/[^A-Za-z0-9-]/g, '') || 'PawNamicsWelcome';
  videoFrame.src = `https://meet.jit.si/embed/${sanitized}`;
}

const sitters = loadStoredData(STORAGE_KEYS.SITTERS);
const questions = loadStoredData(STORAGE_KEYS.QUESTIONS);

renderSitters(sitters);
renderQuestions(questions);

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
