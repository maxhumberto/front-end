document.getElementById("submit").addEventListener("click", function () {
    const userAnswer = document.getElementById("answer").value.trim().toLowerCase();
    const correctAnswer = "paris";
  
    const feedback = document.getElementById("feedback");
  
    if (userAnswer === correctAnswer) {
      feedback.textContent = "Resposta correta! 🎉";
      feedback.style.color = "green";
    } else {
      feedback.textContent = "Resposta incorreta. Tente novamente. ❌";
      feedback.style.color = "red";
    }
  
    // Limpa o campo de entrada para nova tentativa
    document.getElementById("answer").value = "";
  });