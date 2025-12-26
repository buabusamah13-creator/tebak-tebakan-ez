let currentQuestion = 0;

// SOAL DARI KAMU (LEVEL SYSTEM)
const questions = [
  {
    question: `LEVEL 1 🔐
Clue: HURUF
Jika tiga = empat
Jika dua = tiga
Jika tujuh = lima
Jika delapan = ??`,
    answer: "tujuh"
  },
  {
    question: `LEVEL 2 🧠
*TES LOGIKA*

Saya punya 6 telur
2 telur pecah
2 telur dimasak
2 telur dimakan
berapa telur yang tersisa?`,
    answer: "4"
  },
  {
    question: `LEVEL 3 😏
Apa yang jauh di mata tapi dekat di hati?`,
    answer: "usus"
  }
];

function showQuestion() {
  document.getElementById("question").innerText =
    questions[currentQuestion].question;
  document.getElementById("message").innerText = "";
}

function checkAnswer() {
  let userAnswer = document.getElementById("answer").value.toLowerCase().trim();
  let correctAnswer = questions[currentQuestion].answer.toLowerCase();

  if (userAnswer === correctAnswer) {
    document.getElementById("message").innerText =
      "✅ Benar! Lanjut ke level berikutnya...";
    currentQuestion++;

    if (currentQuestion < questions.length) {
      setTimeout(() => {
        document.getElementById("answer").value = "";
        showQuestion();
      }, 1000);
    } else {
      document.getElementById("question").innerText =
        "🏆 GG EZ! Semua level berhasil diselesaikan!";
      document.getElementById("answer").style.display = "none";
    }
  } else {
    document.getElementById("message").innerText =
      "❌ Salah! Coba mikir lagi...";
  }
}

// tampilkan soal pertama
showQuestion();
