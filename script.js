// DỮ LIỆU CÂU HỎI (Đáp án đúng là isCorrect: true)
const QUIZ_BANK = {
  de1: [
    {
      q: "Nhân vật Naib Subedar có bao nhiêu găng tay vào thời điểm đầu ra mắt?",
      options: [
        { text: "4 cái", isCorrect: true },
        { text: "5 cái", isCorrect: false },
        { text: "3 cái", isCorrect: false },
        { text: "2 cái", isCorrect: false }
      ]
    },
    {
      q: "Trong hồ sơ của Jack the Ripper, chủ trang viên ghi nhận anh hứng thú (Interest) thứ gì?",
      options: [
        { text: "Giải phẫu", isCorrect: true },
        { text: "Đêm sương mù", isCorrect: false },
        { text: "Phụ nữ", isCorrect: false },
        { text: "Hội họa", isCorrect: false }
      ]
    },
    {
      q: "Gậy hoa hồng của Jack có mấy phiên bản?",
      options: [
        { text: "2 phiên bản: đỏ và xanh", isCorrect: true },
        { text: "2 phiên bản: đỏ và hồng", isCorrect: false },
        { text: "3 phiên bản: đỏ, xanh và trắng", isCorrect: false },
        { text: "3 phiên bản: đỏ, hồng và xanh", isCorrect: false }
      ]
    },
    {
      q: "Skin COA có cả Jack và Naib là rơi vào mùa nào của COA?",
      options: [
        { text: "Mùa 2", isCorrect: true },
        { text: "Mùa 1", isCorrect: false },
        { text: "Mùa 3", isCorrect: false },
        { text: "Mùa 4", isCorrect: false }
      ]
    },
    {
      q: "Jack xuất hiện bao nhiêu lần trong tranh/ảnh official khi Naib đang ăn?",
      options: [
        { text: "1 lần", isCorrect: true },
        { text: "0 lần", isCorrect: false },
        { text: "3 lần", isCorrect: false },
        { text: "4 lần", isCorrect: false }
      ]
    },
    {
      q: "Tình trạng hiện tại của Naib Subdedar trong hồ sơ của trang viên là?",
      options: [
        { text: "Không rõ", isCorrect: true },
        { text: "Đã bị cấm vì phá luật", isCorrect: false },
        { text: "Đã bị loại khỏi trò chơi", isCorrect: false },
        { text: "Đã qua đời", isCorrect: false }
      ]
    },
    {
      q: "Ngày nhân vật của Jack the Ripper là ngày bao nhiêu?",
      options: [
        { text: "07/08", isCorrect: true },
        { text: "08/08", isCorrect: false },
        { text: "08/07", isCorrect: false },
        { text: "07/07", isCorrect: false }
      ]
    },
    {
      q: "Năm mà Naib và Jack đăng quang NYMPH?",
      options: [
        { text: "Naib 2025 – Jack 2024", isCorrect: true },
        { text: "Naib 2024 – Jack 2025", isCorrect: false },
        { text: "Naib 2023 – Jack 2024", isCorrect: false },
        { text: "Naib 2024 – Jack 2023", isCorrect: false }
      ]
    },
    {
      q: "Mục đích của Naib Subedar khi tham gia trò chơi của trang viên là?",
      options: [
        { text: "Khử đối tượng theo yêu cầu khách hàng", isCorrect: true },
        { text: "Tìm lại cảm giác nơi chiến trường", isCorrect: false },
        { text: "Kiếm chút kinh phí để trở về quê hương", isCorrect: false },
        { text: "Để ăn sập trang viên", isCorrect: false }
      ]
    },
    {
      q: "Skin S limited đầu tiên của Jack tên là?",
      options: [
        { text: "Evil Eye Host", isCorrect: true },
        { text: "Golden Tentacle", isCorrect: false },
        { text: "Soul Emissary", isCorrect: false },
        { text: "Tuberose", isCorrect: false }
      ]
    }
  ],
  de2: [
    {
      q: "Trong hồ sơ của Naib Subedar, chủ trang viên ghi nhận cậu thích (Like) thứ gì?",
      options: [
        { text: "Đao kiếm", isCorrect: true },
        { text: "Đồ ăn", isCorrect: false },
        { text: "Tiền bạc", isCorrect: false },
        { text: "Gia Đình", isCorrect: false }
      ]
    },
    {
      q: "Nhân vật Jack ban đầu có kỹ năng gì?",
      options: [
        { text: "Tạo một vùng sương mù ở khu vực survivor hoạt động và chỉ chém ra gió khi bên trong.", isCorrect: true },
        { text: "Tạo một vùng sương mù ở khu vực survivor hoạt động và tàng hình khi đi bên trong vùng.", isCorrect: false },
        { text: "Chém gió và mất 0,5 máu của survivor", isCorrect: false },
        { text: "Chém gió và mất 0,25 máu của survivor", isCorrect: false }
      ]
    },
    {
      q: "Mr. Inference và Tuberose đã gặp nhau vào dịp nào lần đầu tiên?",
      options: [
        { text: "Năm Anniversary thứ 4", isCorrect: true },
        { text: "Năm Anniversary thứ 2", isCorrect: false },
        { text: "Năm Anniversary thứ 3", isCorrect: false },
        { text: "Năm Anniversary thứ 5", isCorrect: false }
      ]
    },
    {
      q: "Trong các series dưới đây, series nào Jack và Naib là hai phe đối địch với nhau?",
      options: [
        { text: "Call of Abyss", isCorrect: true },
        { text: "Tết 2026", isCorrect: false },
        { text: "Halloween 2023", isCorrect: false },
        { text: "Cầu 1 Mùa 8 – Mafia", isCorrect: false }
      ]
    },
    {
      q: "Sinh nhật của Naib Subedar là ngày bao nhiêu?",
      options: [
        { text: "23/07", isCorrect: true },
        { text: "15/07", isCorrect: false },
        { text: "22/07", isCorrect: false },
        { text: "22/08", isCorrect: false }
      ]
    },
    {
      q: "Tình trạng hiện tại của Jack the Ripper trong hồ sơ của trang viên là?",
      options: [
        { text: "Đã qua đời", isCorrect: true },
        { text: "Không rõ", isCorrect: false },
        { text: "Đã bị cấm vì phá luật", isCorrect: false },
        { text: "Đã bị loại khỏi trò chơi", isCorrect: false }
      ]
    },
    {
      q: "Skin S limited đầu tiên của Naib tên là?",
      options: [
        { text: "Man in Red", isCorrect: true },
        { text: "Cheshire Cat", isCorrect: false },
        { text: "Atsushi Nakajima (Skin Collab với Bungo Stray Dog)", isCorrect: false },
        { text: "Cabinet of Curiosities", isCorrect: false }
      ]
    },
    {
      q: "Động vật tượng trưng cho Naib Subedar và Jack the Ripper theo game là?",
      options: [
        { text: "Gấu trúc đỏ - Không có", isCorrect: true },
        { text: "Gấu trúc đỏ - Chó", isCorrect: false },
        { text: "Gấu trúc đỏ - Quạ", isCorrect: false },
        { text: "Gấu trúc đỏ - Jack kiki", isCorrect: false }
      ]
    },
    {
      q: "Lý do Jack the Ripper khi tham gia trò chơi của trang viên là?",
      options: [
        { text: "Theo lời thầy giáo giao phó cho mình", isCorrect: true },
        { text: "Tham gia để tạo ra tác phẩm nghệ thuật cuối cùng", isCorrect: false },
        { text: "Nhân cách kia chấp nhận lời mời", isCorrect: false },
        { text: "Không được mời, tự ý tham gia", isCorrect: false }
      ]
    },
    {
      q: "Lần lượt, Jack và Naib được chủ trang viên đánh số là đợt tham gia/ thử nghiệm trò chơi thứ mấy?",
      options: [
        { text: "2 – 9", isCorrect: true },
        { text: "3 – 5", isCorrect: false },
        { text: "3 – 9", isCorrect: false },
        { text: "2 – 5", isCorrect: false }
      ]
    }
  ]
};

const LOCK_KEY = "eternal_waltz_quiz_locked";
const TIMER_KEY = "eternal_waltz_timer_deadline";

let quizList = [];
let currentIndex = 0;
let currentScore = 0;
let timerId = null;
let playerName = "";

// Hàm xáo trộn mảng
function shuffle(arr) {
  const clone = [...arr];
  for (let i = clone.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [clone[i], clone[j]] = [clone[j], clone[i]];
  }
  return clone;
}

// Kiểm tra nếu thiết bị đã làm bài trước đó
window.addEventListener("DOMContentLoaded", () => {
  const savedResult = localStorage.getItem(LOCK_KEY);
  if (savedResult) {
    showResultScreen(JSON.parse(savedResult));
  }
});

function handleStart() {
  const nameInput = document.getElementById("player-name").value.trim();
  playerName = nameInput || "Thám tử";

  // Tự động chọn ngẫu nhiên Đề 1 hoặc Đề 2 (Người chơi không chọn)
  const randomSetKey = Math.random() < 0.5 ? "de1" : "de2";

  // Đảo câu hỏi và đảo đáp án của từng câu
  quizList = shuffle(QUIZ_BANK[randomSetKey]).map(item => ({
    question: item.q,
    options: shuffle(item.options)
  }));

  currentIndex = 0;
  currentScore = 0;

  // Hiển thị màn hình làm bài
  document.getElementById("screen-start").style.display = "none";
  document.getElementById("screen-quiz").style.display = "block";

  // Bắt đầu 5 phút đếm ngược
  let deadline = localStorage.getItem(TIMER_KEY);
  if (!deadline) {
    deadline = Date.now() + 5 * 60 * 1000;
    localStorage.setItem(TIMER_KEY, deadline);
  }
  startCountdown(deadline);

  // Hiển thị câu đầu tiên
  renderQuestion();
}

function renderQuestion() {
  const currentQ = quizList[currentIndex];
  document.getElementById("question-number").innerText = `Câu ${currentIndex + 1} / ${quizList.length}`;
  document.getElementById("question-text").innerText = currentQ.question;

  const optionsBox = document.getElementById("options-box");
  optionsBox.innerHTML = "";

  currentQ.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.className = "opt-btn";
    btn.innerText = opt.text;
    
    // Bấm trả lời là tự lướt qua luôn!
    btn.onclick = () => handleAnswer(btn, opt.isCorrect);
    optionsBox.appendChild(btn);
  });
}

function handleAnswer(btnElement, isCorrect) {
  // Khóa tất cả các nút tránh bấm nhanh nhiều lần
  const buttons = document.querySelectorAll(".opt-btn");
  buttons.forEach(b => b.disabled = true);

  btnElement.classList.add("clicked");

  if (isCorrect) {
    currentScore++;
  }

  // Tự lướt qua câu tiếp theo sau 0.25 giây
  setTimeout(() => {
    currentIndex++;
    if (currentIndex < quizList.length) {
      renderQuestion();
    } else {
      finishQuiz();
    }
  }, 250);
}

function startCountdown(deadline) {
  const timerTag = document.getElementById("timer");

  timerId = setInterval(() => {
    const remaining = Math.max(0, Math.floor((deadline - Date.now()) / 1000));
    const mins = Math.floor(remaining / 60);
    const secs = remaining % 60;

    timerTag.innerText = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

    if (remaining <= 60) {
      timerTag.classList.add("urgent");
    }

    if (remaining <= 0) {
      clearInterval(timerId);
      finishQuiz();
    }
  }, 1000);
}

function finishQuiz() {
  clearInterval(timerId);
  localStorage.removeItem(TIMER_KEY);

  const payload = {
    name: playerName,
    score: currentScore,
    total: quizList.length
  };

  // Khóa luôn trong máy, không cho làm lại
  localStorage.setItem(LOCK_KEY, JSON.stringify(payload));
  showResultScreen(payload);
}

function showResultScreen(data) {
  document.getElementById("screen-start").style.display = "none";
  document.getElementById("screen-quiz").style.display = "none";
  document.getElementById("screen-result").style.display = "block";

  document.getElementById("result-name").innerText = data.name;
  document.getElementById("result-score").innerText = `${data.score}/${data.total || 10}`;
}