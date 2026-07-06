const phrases = [
  { category: "Password", en: "Your password is incorrect.", pl: "Twoje hasło jest niepoprawne." },
  { category: "Password", en: "Please create a new password.", pl: "Proszę utwórz nowe hasło." },
  { category: "Password", en: "Your account has been locked.", pl: "Twoje konto zostało zablokowane." },
  { category: "Password", en: "I have unlocked your account.", pl: "Odblokowałem/am twoje konto." },
  { category: "Password", en: "Please use a strong password.", pl: "Użyj silnego hasła." },

  { category: "Wi-Fi", en: "Connect to the Wi-Fi network.", pl: "Połącz się z siecią Wi-Fi." },
  { category: "Wi-Fi", en: "Please check your internet connection.", pl: "Sprawdź swoje połączenie internetowe." },
  { category: "Wi-Fi", en: "The network connection is unstable.", pl: "Połączenie sieciowe jest niestabilne." },
  { category: "Wi-Fi", en: "Please reconnect to the network.", pl: "Połącz się ponownie z siecią." },

  { category: "Software", en: "The application is not responding.", pl: "Aplikacja nie odpowiada." },
  { category: "Software", en: "Please restart the application.", pl: "Proszę uruchom ponownie aplikację." },
  { category: "Software", en: "Please update your browser.", pl: "Proszę zaktualizuj przeglądarkę." },
  { category: "Software", en: "Clear your browser cache and cookies.", pl: "Wyczyść pamięć podręczną i pliki cookies w przeglądarce." },
  { category: "Software", en: "The update failed.", pl: "Aktualizacja nie powiodła się." },
  { category: "Software", en: "The installation was successful.", pl: "Instalacja zakończyła się sukcesem." },

  { category: "Printer", en: "The printer is offline.", pl: "Drukarka jest offline." },
  { category: "Printer", en: "Please check the printer queue.", pl: "Sprawdź kolejkę drukowania." },
  { category: "Printer", en: "The document was sent to the printer.", pl: "Dokument został wysłany do drukarki." },

  { category: "Files", en: "The file is open in another program.", pl: "Plik jest otwarty w innym programie." },
  { category: "Files", en: "You do not have permission to access this folder.", pl: "Nie masz uprawnień dostępu do tego folderu." },
  { category: "Files", en: "Access has been granted.", pl: "Dostęp został przyznany." },

  { category: "Tickets", en: "Please attach a screenshot.", pl: "Proszę załącz zrzut ekranu." },
  { category: "Tickets", en: "I will escalate this issue to the IT team.", pl: "Przekażę ten problem do zespołu IT." },
  { category: "Tickets", en: "Your ticket has been created.", pl: "Twoje zgłoszenie zostało utworzone." },
  { category: "Tickets", en: "Your ticket has been closed.", pl: "Twoje zgłoszenie zostało zamknięte." },
  { category: "Tickets", en: "We are still investigating the issue.", pl: "Nadal badamy ten problem." },
  { category: "Tickets", en: "I will keep you updated.", pl: "Będę informować cię na bieżąco." },
  { category: "Tickets", en: "Please confirm if everything works now.", pl: "Potwierdź, czy wszystko teraz działa." },

  { category: "General", en: "Restart your computer to complete the update.", pl: "Uruchom ponownie komputer, aby dokończyć aktualizację." },
  { category: "General", en: "Try again later.", pl: "Spróbuj ponownie później." },
  { category: "General", en: "Thank you for your patience.", pl: "Dziękuję za cierpliwość." },
  { category: "General", en: "Could you provide more details?", pl: "Czy możesz podać więcej szczegółów?" },
  { category: "General", en: "What error message do you see?", pl: "Jaki komunikat błędu widzisz?" },
  { category: "General", en: "When did the issue start?", pl: "Kiedy problem się zaczął?" },

  { category: "Security", en: "Please do not share your password.", pl: "Nie udostępniaj swojego hasła." },
  { category: "Security", en: "This is a security issue.", pl: "To jest problem bezpieczeństwa." },
  { category: "Security", en: "Please contact your manager for approval.", pl: "Skontaktuj się z managerem w celu zatwierdzenia." },

  { category: "System", en: "The server is currently unavailable.", pl: "Serwer jest obecnie niedostępny." },
  { category: "System", en: "There may be temporary downtime.", pl: "Może wystąpić tymczasowa przerwa w działaniu." },
  { category: "System", en: "The system will be updated tonight.", pl: "System zostanie zaktualizowany dzisiaj w nocy." },
  { category: "System", en: "The software license has expired.", pl: "Licencja oprogramowania wygasła." }
];

const tickets = [
  {
    issue: "I cannot log in to my account.",
    keywords: ["password", "reset", "account", "login"],
    sample: "Please reset your password and try to log in again. If the issue continues, please send me a screenshot."
  },
  {
    issue: "My computer is very slow.",
    keywords: ["restart", "programs", "update", "slow"],
    sample: "Please restart your computer and close unnecessary programs. Also check if there are any pending updates."
  },
  {
    issue: "The printer is not working.",
    keywords: ["printer", "connection", "restart", "paper"],
    sample: "Please check if the printer is connected, has paper, and is turned on. Then restart the printer and try again."
  },
  {
    issue: "I cannot connect to Wi-Fi.",
    keywords: ["wi-fi", "network", "restart", "password"],
    sample: "Please check if you selected the correct Wi-Fi network and entered the correct password. Then restart your device."
  },
  {
    issue: "The file will not open.",
    keywords: ["file", "program", "format", "restart"],
    sample: "Please check if you have the correct program to open this file. You can also restart your computer and try again."
  },
  {
    issue: "I cannot access the shared folder.",
    keywords: ["access", "permission", "folder", "manager"],
    sample: "You may not have permission to access this folder. Please contact your manager for approval."
  }
];

const clientChats = [
  {
    problem: "Client: I forgot my password. What should I do?",
    correct: "Please use the password reset option. You should receive a reset link by email.",
    options: [
      "Please use the password reset option. You should receive a reset link by email.",
      "Please buy a new computer.",
      "Please delete your account.",
      "Please ignore the message."
    ]
  },
  {
    problem: "Client: My printer is offline.",
    correct: "Please check if the printer is turned on and connected to the network.",
    options: [
      "Please check if the printer is turned on and connected to the network.",
      "Please change your password.",
      "Please close the ticket immediately.",
      "Please uninstall your browser."
    ]
  },
  {
    problem: "Client: The application freezes.",
    correct: "Please restart the application and check if an update is available.",
    options: [
      "Please restart the application and check if an update is available.",
      "Please print the application.",
      "Please remove your monitor.",
      "Please share your password."
    ]
  }
];

const interviewQuestions = [
  {
    question: "Tell me about yourself.",
    example: "My name is Katie. I am learning IT support, HTML, CSS and JavaScript. I enjoy solving technical problems and helping users."
  },
  {
    question: "Why do you want to work in IT support?",
    example: "I want to work in IT support because I like troubleshooting, learning new technologies and helping people solve technical issues."
  },
  {
    question: "How would you help a user who cannot log in?",
    example: "First, I would ask for the error message. Then I would check if the account is locked and guide the user through a password reset."
  },
  {
    question: "What would you do if you do not know the answer?",
    example: "I would stay calm, check documentation, ask a more experienced team member and keep the user updated."
  }
];

const achievements = [
  { id: "firstCorrect", title: "First Correct Answer", description: "Answer correctly for the first time." },
  { id: "tenCorrect", title: "10 Correct Answers", description: "Get 10 correct answers." },
  { id: "fiftyPoints", title: "50 Points", description: "Reach 50 points." },
  { id: "hundredPoints", title: "100 Points", description: "Reach 100 points." },
  { id: "streakFive", title: "Streak 5", description: "Get a streak of 5." },
  { id: "ticketSolved", title: "Ticket Solver", description: "Solve your first ticket." },
  { id: "dailyDone", title: "Daily Hero", description: "Complete a daily challenge." }
];

let points = Number(localStorage.getItem("points")) || 0;
let correct = Number(localStorage.getItem("correct")) || 0;
let streak = Number(localStorage.getItem("streak")) || 0;
let mistakes = JSON.parse(localStorage.getItem("mistakes")) || [];
let unlockedAchievements = JSON.parse(localStorage.getItem("achievements")) || [];
let theme = localStorage.getItem("theme") || "dark";

let currentFlash = 0;
let currentQuiz = 0;
let currentTicket = 0;
let currentTyping = 0;
let currentChat = 0;
let currentInterview = 0;

let dailyItems = [];
let dailyIndex = 0;
let dailyCompleted = 0;

const pointsEl = document.getElementById("points");
const correctEl = document.getElementById("correct");
const streakEl = document.getElementById("streak");
const levelEl = document.getElementById("level");

const themeBtn = document.getElementById("themeBtn");
const resetBtn = document.getElementById("resetBtn");

const flashCategory = document.getElementById("flashCategory");
const flashPhrase = document.getElementById("flashPhrase");
const flashAnswer = document.getElementById("flashAnswer");
const showAnswerBtn = document.getElementById("showAnswerBtn");
const nextFlashBtn = document.getElementById("nextFlashBtn");

const quizQuestion = document.getElementById("quizQuestion");
const quizOptions = document.getElementById("quizOptions");
const quizFeedback = document.getElementById("quizFeedback");
const nextQuizBtn = document.getElementById("nextQuizBtn");

const typingQuestion = document.getElementById("typingQuestion");
const typingInput = document.getElementById("typingInput");
const checkTypingBtn = document.getElementById("checkTypingBtn");
const nextTypingBtn = document.getElementById("nextTypingBtn");
const typingFeedback = document.getElementById("typingFeedback");

const ticketText = document.getElementById("ticketText");
const replyInput = document.getElementById("replyInput");
const checkReplyBtn = document.getElementById("checkReplyBtn");
const nextTicketBtn = document.getElementById("nextTicketBtn");
const ticketFeedback = document.getElementById("ticketFeedback");
const sampleReply = document.getElementById("sampleReply");

const chatProblem = document.getElementById("chatProblem");
const chatOptions = document.getElementById("chatOptions");
const chatFeedback = document.getElementById("chatFeedback");
const nextChatBtn = document.getElementById("nextChatBtn");

const interviewQuestion = document.getElementById("interviewQuestion");
const interviewExample = document.getElementById("interviewExample");
const showInterviewBtn = document.getElementById("showInterviewBtn");
const nextInterviewBtn = document.getElementById("nextInterviewBtn");

const dailyQuestion = document.getElementById("dailyQuestion");
const dailyOptions = document.getElementById("dailyOptions");
const dailyProgress = document.getElementById("dailyProgress");
const dailyFeedback = document.getElementById("dailyFeedback");
const startDailyBtn = document.getElementById("startDailyBtn");

const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const dictionaryList = document.getElementById("dictionaryList");

const mistakesList = document.getElementById("mistakesList");
const clearMistakesBtn = document.getElementById("clearMistakesBtn");
const achievementsList = document.getElementById("achievementsList");

function saveProgress() {
  localStorage.setItem("points", points);
  localStorage.setItem("correct", correct);
  localStorage.setItem("streak", streak);
  localStorage.setItem("mistakes", JSON.stringify(mistakes));
  localStorage.setItem("achievements", JSON.stringify(unlockedAchievements));
  localStorage.setItem("theme", theme);
}

function getLevel() {
  if (points >= 300) return "IT Support Pro";
  if (points >= 200) return "Helpdesk Hero";
  if (points >= 100) return "Junior";
  return "Beginner";
}

function updateStats() {
  pointsEl.textContent = points;
  correctEl.textContent = correct;
  streakEl.textContent = streak;
  levelEl.textContent = getLevel();
  checkAchievements();
  saveProgress();
}

function unlockAchievement(id) {
  if (!unlockedAchievements.includes(id)) {
    unlockedAchievements.push(id);
  }
}

function checkAchievements() {
  if (correct >= 1) unlockAchievement("firstCorrect");
  if (correct >= 10) unlockAchievement("tenCorrect");
  if (points >= 50) unlockAchievement("fiftyPoints");
  if (points >= 100) unlockAchievement("hundredPoints");
  if (streak >= 5) unlockAchievement("streakFive");
  renderAchievements();
}

function addPoints(amount) {
  points += amount;
  correct += 1;
  streak += 1;
  updateStats();
}

function loseStreak() {
  streak = 0;
  updateStats();
}

function addMistake(item) {
  mistakes.unshift(item);
  mistakes = mistakes.slice(0, 20);
  renderMistakes();
  saveProgress();
}

function randomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function createSparkles(event) {
  const count = 14;

  for (let i = 0; i < count; i++) {
    const spark = document.createElement("span");
    spark.className = "spark";

    const angle = Math.random() * Math.PI * 2;
    const distance = 35 + Math.random() * 45;
    const x = Math.cos(angle) * distance + "px";
    const y = Math.sin(angle) * distance + "px";

    spark.style.left = event.clientX + "px";
    spark.style.top = event.clientY + "px";
    spark.style.setProperty("--x", x);
    spark.style.setProperty("--y", y);

    document.body.appendChild(spark);

    setTimeout(() => {
      spark.remove();
    }, 700);
  }
}

function loadFlashcard() {
  currentFlash = randomIndex(phrases);
  flashCategory.textContent = `Category: ${phrases[currentFlash].category}`;
  flashPhrase.textContent = phrases[currentFlash].pl;
  flashAnswer.textContent = phrases[currentFlash].en;
  flashAnswer.classList.add("hidden");
}

function loadQuiz() {
  quizFeedback.textContent = "";
  quizOptions.innerHTML = "";

  currentQuiz = randomIndex(phrases);
  const question = phrases[currentQuiz];

  quizQuestion.textContent = question.pl;

  let options = [question.en];

  while (options.length < 4) {
    const randomPhrase = phrases[randomIndex(phrases)].en;
    if (!options.includes(randomPhrase)) {
      options.push(randomPhrase);
    }
  }

  options.sort(() => Math.random() - 0.5);

  options.forEach(option => {
    const btn = document.createElement("button");
    btn.className = "option";
    btn.textContent = option;

    btn.addEventListener("click", event => {
      createSparkles(event);

      document.querySelectorAll("#quizOptions .option").forEach(button => {
        button.disabled = true;
      });

      if (option === question.en) {
        btn.classList.add("correct");
        quizFeedback.textContent = "Correct! Great job.";
        addPoints(10);
      } else {
        btn.classList.add("wrong");
        quizFeedback.textContent = `Wrong. Correct answer: ${question.en}`;
        addMistake(question);
        loseStreak();
      }
    });

    quizOptions.appendChild(btn);
  });
}

function loadTyping() {
  currentTyping = randomIndex(phrases);
  typingQuestion.textContent = phrases[currentTyping].pl;
  typingInput.value = "";
  typingFeedback.textContent = "";
}

function normalize(text) {
  return text.toLowerCase().replace(/[.,!?]/g, "").trim();
}

function checkTyping() {
  const userAnswer = normalize(typingInput.value);
  const correctAnswer = normalize(phrases[currentTyping].en);

  if (userAnswer === correctAnswer) {
    typingFeedback.textContent = "Perfect! Correct translation.";
    addPoints(15);
  } else if (correctAnswer.includes(userAnswer) && userAnswer.length > 5) {
    typingFeedback.textContent = `Almost! Correct answer: ${phrases[currentTyping].en}`;
    addPoints(5);
  } else {
    typingFeedback.textContent = `Not quite. Correct answer: ${phrases[currentTyping].en}`;
    addMistake(phrases[currentTyping]);
    loseStreak();
  }
}

function loadTicket() {
  currentTicket = randomIndex(tickets);
  ticketText.textContent = tickets[currentTicket].issue;
  replyInput.value = "";
  ticketFeedback.textContent = "";
  sampleReply.classList.add("hidden");
  sampleReply.innerHTML = "";
}

function checkTicketReply() {
  const reply = replyInput.value.toLowerCase().trim();
  const ticket = tickets[currentTicket];

  if (reply.length < 10) {
    ticketFeedback.textContent = "Write a longer reply.";
    loseStreak();
    return;
  }

  let matched = 0;

  ticket.keywords.forEach(keyword => {
    if (reply.includes(keyword)) matched++;
  });

  if (matched >= 2) {
    ticketFeedback.textContent = "Good reply! You used useful IT support words.";
    unlockAchievement("ticketSolved");
    addPoints(15);
  } else {
    ticketFeedback.textContent = "Nice try. Add more specific IT support words.";
    loseStreak();
  }

  sampleReply.classList.remove("hidden");
  sampleReply.innerHTML = `<strong>Example reply:</strong><p>${ticket.sample}</p>`;
}

function loadChat() {
  chatFeedback.textContent = "";
  chatOptions.innerHTML = "";

  currentChat = randomIndex(clientChats);
  const chat = clientChats[currentChat];

  chatProblem.textContent = chat.problem;

  const shuffled = [...chat.options].sort(() => Math.random() - 0.5);

  shuffled.forEach(option => {
    const btn = document.createElement("button");
    btn.className = "option";
    btn.textContent = option;

    btn.addEventListener("click", event => {
      createSparkles(event);

      document.querySelectorAll("#chatOptions .option").forEach(button => {
        button.disabled = true;
      });

      if (option === chat.correct) {
        btn.classList.add("correct");
        chatFeedback.textContent = "Correct client response!";
        addPoints(10);
      } else {
        btn.classList.add("wrong");
        chatFeedback.textContent = `Better answer: ${chat.correct}`;
        loseStreak();
      }
    });

    chatOptions.appendChild(btn);
  });
}

function loadInterview() {
  currentInterview = randomIndex(interviewQuestions);
  interviewQuestion.textContent = interviewQuestions[currentInterview].question;
  interviewExample.classList.add("hidden");
  interviewExample.innerHTML = "";
}

function showInterviewExample() {
  interviewExample.classList.remove("hidden");
  interviewExample.innerHTML = `<strong>Example answer:</strong><p>${interviewQuestions[currentInterview].example}</p>`;
}

function startDailyChallenge() {
  dailyItems = [...phrases].sort(() => Math.random() - 0.5).slice(0, 5);
  dailyIndex = 0;
  dailyCompleted = 0;
  dailyFeedback.textContent = "";
  loadDailyQuestion();
}

function loadDailyQuestion() {
  dailyOptions.innerHTML = "";

  if (dailyIndex >= dailyItems.length) {
    dailyQuestion.textContent = "Daily Challenge completed!";
    dailyProgress.textContent = "5 / 5 completed";
    dailyFeedback.textContent = "Great job! You earned bonus points.";
    unlockAchievement("dailyDone");
    points += 25;
    updateStats();
    return;
  }

  const question = dailyItems[dailyIndex];
  dailyQuestion.textContent = question.pl;
  dailyProgress.textContent = `${dailyCompleted} / 5 completed`;

  let options = [question.en];

  while (options.length < 4) {
    const randomPhrase = phrases[randomIndex(phrases)].en;
    if (!options.includes(randomPhrase)) options.push(randomPhrase);
  }

  options.sort(() => Math.random() - 0.5);

  options.forEach(option => {
    const btn = document.createElement("button");
    btn.className = "option";
    btn.textContent = option;

    btn.addEventListener("click", event => {
      createSparkles(event);

      if (option === question.en) {
        dailyFeedback.textContent = "Correct!";
        addPoints(8);
      } else {
        dailyFeedback.textContent = `Wrong. Correct answer: ${question.en}`;
        addMistake(question);
        loseStreak();
      }

      dailyCompleted++;
      dailyIndex++;

      setTimeout(loadDailyQuestion, 700);
    });

    dailyOptions.appendChild(btn);
  });
}

function renderCategories() {
  const categories = [...new Set(phrases.map(item => item.category))];

  categories.forEach(category => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categoryFilter.appendChild(option);
  });
}

function renderDictionary() {
  dictionaryList.innerHTML = "";

  const search = searchInput.value.toLowerCase();
  const category = categoryFilter.value;

  const filtered = phrases.filter(item => {
    const matchesSearch =
      item.en.toLowerCase().includes(search) ||
      item.pl.toLowerCase().includes(search);

    const matchesCategory = category === "all" || item.category === category;

    return matchesSearch && matchesCategory;
  });

  filtered.forEach(item => {
    const div = document.createElement("div");
    div.className = "dictionary-item";
    div.innerHTML = `
      <strong>${item.en}</strong>
      <p>${item.pl}</p>
      <small>${item.category}</small>
    `;
    dictionaryList.appendChild(div);
  });
}

function renderMistakes() {
  mistakesList.innerHTML = "";

  if (mistakes.length === 0) {
    mistakesList.innerHTML = "<p>No mistakes yet. Nice!</p>";
    return;
  }

  mistakes.forEach(item => {
    const div = document.createElement("div");
    div.className = "dictionary-item";
    div.innerHTML = `
      <strong>${item.pl}</strong>
      <p>${item.en}</p>
    `;
    mistakesList.appendChild(div);
  });
}

function renderAchievements() {
  achievementsList.innerHTML = "";

  achievements.forEach(achievement => {
    const unlocked = unlockedAchievements.includes(achievement.id);

    const div = document.createElement("div");
    div.className = unlocked ? "achievement-card unlocked" : "achievement-card";

    div.innerHTML = `
      <h3>${achievement.title}</h3>
      <p>${achievement.description}</p>
      <strong>${unlocked ? "Unlocked" : "Locked"}</strong>
    `;

    achievementsList.appendChild(div);
  });
}

function applyTheme() {
  if (theme === "light") {
    document.body.classList.add("light");
    themeBtn.textContent = "Dark Mode";
  } else {
    document.body.classList.remove("light");
    themeBtn.textContent = "Light Mode";
  }

  saveProgress();
}

document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(item => item.classList.remove("active"));
    document.querySelectorAll(".panel").forEach(panel => panel.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});

showAnswerBtn.addEventListener("click", () => {
  flashAnswer.classList.remove("hidden");
});

nextFlashBtn.addEventListener("click", loadFlashcard);
nextQuizBtn.addEventListener("click", loadQuiz);

checkTypingBtn.addEventListener("click", checkTyping);
nextTypingBtn.addEventListener("click", loadTyping);

checkReplyBtn.addEventListener("click", checkTicketReply);
nextTicketBtn.addEventListener("click", loadTicket);

nextChatBtn.addEventListener("click", loadChat);

showInterviewBtn.addEventListener("click", showInterviewExample);
nextInterviewBtn.addEventListener("click", loadInterview);

startDailyBtn.addEventListener("click", startDailyChallenge);

searchInput.addEventListener("input", renderDictionary);
categoryFilter.addEventListener("change", renderDictionary);

clearMistakesBtn.addEventListener("click", () => {
  mistakes = [];
  renderMistakes();
  saveProgress();
});

themeBtn.addEventListener("click", () => {
  theme = theme === "dark" ? "light" : "dark";
  applyTheme();
});

resetBtn.addEventListener("click", () => {
  points = 0;
  correct = 0;
  streak = 0;
  mistakes = [];
  unlockedAchievements = [];
  updateStats();
  renderMistakes();
  renderAchievements();
});

applyTheme();
renderCategories();
updateStats();
loadFlashcard();
loadQuiz();
loadTyping();
loadTicket();
loadChat();
loadInterview();
renderDictionary();
renderMistakes();
renderAchievements();