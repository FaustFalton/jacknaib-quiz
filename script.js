// Dữ liệu 2 đề (Đáp án đúng có isCorrect: true)
const DATA = {
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
        { text: "Evil Eye Host",