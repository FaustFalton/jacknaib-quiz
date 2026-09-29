/* DỮ LIỆU CÂU HỎI CHUẨN XÁC TỪ FILE PDF (Đáp án đúng có isCorrect: true) */
const QUIZ_DATA = {
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
      q: "Tình trạng hiện tại của Naib Subedar trong hồ sơ của trang viên là?",
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

// KHÓA THIẾT BỊ: Key lưu trữ trong trình duyệt
const STORAGE_LOCK_KEY = "eternal_waltz_quiz_lock";
const TIMER_KEY = "eternal_waltz_quiz_endtime";

let currentExamKey = "de1";
let randomizedQuestions = [];
let timerInterval = null;

// Hàm xáo trộn mảng (Fisher-Yates)
function shuffleArray(arr) {
  const cloned = [...arr];
  for (let i = cloned.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cloned[i], cloned[j]] = [cloned[j], cloned[i]];
  }
  return cloned;
}

// Kiểm tra nếu người này đã từng làm bài trước đó
window.addEventListener("DOMContentLoaded", () => {
  const lockedData = localStorage.getItem(STORAGE_LOCK_KEY);
  if (lockedData) {
    displayResultScreen(JSON.parse(lockedData));
  }
});

// Chọn Đề 1 hoặc Đề 2
function chooseExam(examKey) {
  currentExamKey = examKey;
  document.querySelectorAll(".exam-card").forEach((card, index) => {
    card.classList.toggle("active", (index === 0 && examKey === 'de1') || (index === 1 && examKey === 'de2'));
  });
}

// Bắt đầu làm bài
function startQuiz() {
  const nameVal = document.getElementById("player-name").value.trim();
  const playerName = nameVal || "Khách mời vô danh";

  // 1. ĐẢO CÂU HỎI VÀ ĐẢO ĐÁP ÁN
  randomizedQuestions = shuffleArray(QUIZ_DATA[currentExamKey]).map(item => ({
    question: item.q,
    options: shuffleArray(item.options)
  }));

  // 2. Render câu hỏi ra giao diện
  const container = document.getElementById("questions-container");
  container.innerHTML = "";

  randomizedQuestions.forEach((qItem, qIdx) => {
    const card = document.createElement("div");
    card.className = "glass-card question-item";

    const optionsHtml = qItem.options.map(opt => `
      <label class="option-item" onclick="onSelectOption(this)">
        <input type="radio" class="option-radio" name="question_${qIdx}" value="${opt.isCorrect}" />
        <div class="custom-bullet"></div>
        <span>${opt.text}</span>
      </label>
    `).join("");

    card.innerHTML = `
      <div class="question-badge">Câu hỏi ${qIdx + 1} / 10</div>
      <div class="question-text">${qItem.question}</div>
      <div class="options-group">${optionsHtml}</div>
    `;
    container.appendChild(card);
  });

  // Chuyển màn hình
  document.getElementById("screen-welcome").style.display = "none";
  document.getElementById("screen-quiz").style.display = "block";
  window.scrollTo({ top: 0, behavior: "smooth" });

  // 3. ĐẾM NGƯỢC 5 PHÚT (Không bị reset khi F5)
  let endTime = localStorage.getItem(TIMER_KEY);
  if (!endTime) {
    endTime = Date.now() + 5 * 60 * 1000;
    localStorage.setItem(TIMER_KEY, endTime);
  }
  startTimer(endTime, playerName);
}

function onSelectOption(labelElement) {
  const group = labelElement.parentElement;
  group.querySelectorAll(".option-item").forEach(el => el.classList.remove("selected"));
  labelElement.classList.add("selected");
  
  const radio = labelElement.querySelector("input[type='radio']");
  if (radio) radio.checked = true;

  // Cập nhật số lượng câu đã chọn
  const checkedCount = document.querySelectorAll("input[type='radio']:checked").length;
  document.getElementById("progress-indicator").innerText = `Đã chọn: ${checkedCount}/10`;
}

function startTimer(targetTime, playerName) {
  const timerElement = document.getElementById("timer");
  const timerBox = document.getElementById("timer-box");

  timerInterval = setInterval(() => {
    const timeLeft = Math.max(0, Math.floor((targetTime - Date.now()) / 1000));
    const mins = Math.floor(timeLeft / 60);
    const secs = timeLeft % 60;

    timerElement.innerText = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

    if (timeLeft <= 60) {
      timerBox.classList.add("hurry-up");
    }

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      alert("Đã hết 5 phút quy định! Hệ thống sẽ tự động gửi bài của bạn.");
      submitFinalScore(playerName);
    }
  }, 1000);
}

function handleConfirmSubmit() {
  const answered = document.querySelectorAll("input[type='radio']:checked").length;
  let confirmMsg = "Bạn có chắc chắn muốn nộp bài thi không?";
  if (answered < 10) {
    confirmMsg = `Bạn mới chọn ${answered}/10 câu. Bạn vẫn muốn nộp bài chứ?`;
  }

  if (confirm(confirmMsg)) {
    const nameVal = document.getElementById("player-name").value.trim();
    submitFinalScore(nameVal || "Khách mời vô danh");
  }
}

// Chấm điểm và KHÓA VĨNH VIỄN không cho thi lại
function submitFinalScore(playerName) {
  clearInterval(timerInterval);
  localStorage.removeItem(TIMER_KEY);

  // Tính điểm kín
  let totalScore = 0;
  randomizedQuestions.forEach((_, qIdx) => {
    const chosenRadio = document.querySelector(`input[name="question_${qIdx}"]:checked`);
    if (chosenRadio && chosenRadio.value === "true") {
      totalScore++;
    }
  });

  const record = {
    name: playerName,
    examName: currentExamKey === 'de1' ? 'Đề 01' : 'Đề 02',
    score: totalScore,
    timestamp: new Date().toLocaleTimeString('vi-VN') + " - " + new Date().toLocaleDateString('vi-VN')
  };

  // Lưu vào localStorage nhằm chặn thi lại
  localStorage.setItem(STORAGE_LOCK_KEY, JSON.stringify(record));

  displayResultScreen(record);
}

// Hiển thị kết quả duy nhất (Đề đóng, không hiện đúng/sai từng câu)
function displayResultScreen(data) {
  document.getElementById("screen-welcome").style.display = "none";
  document.getElementById("screen-quiz").style.display = "none";
  document.getElementById("screen-result").style.display = "block";

  document.getElementById("result-user-info").innerText = `Thí sinh: ${data.name} • ${data.examName}`;
  document.getElementById("result-final-score").innerText = `${data.score} / 10`;
  document.getElementById("result-description").innerHTML = `
    Thời gian nộp: <strong>${data.timestamp}</strong><br>
    <em>(Mỗi người chơi chỉ được gửi bài duy nhất 1 lần)</em><br><br>
    Hãy giữ nguyên màn hình này và đưa cho nhân viên tại Booth để nhận quà nhé!
  `;

  window.scrollTo({ top: 0, behavior: "smooth" });
}