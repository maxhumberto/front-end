
document.getElementById("calculate").addEventListener("click", function () {
    const rows = document.querySelectorAll("tbody tr");
    let totalAverage = 0;
    let studentCount = 0;
  
    rows.forEach((row) => {
      const grades = row.querySelectorAll("td input[type='number']");
      const averageCell = row.querySelector(".average");
      const resultCell = row.querySelector(".result");
  
      let sum = 0;
  
      grades.forEach((grade) => {
        sum += parseFloat(grade.value);
      });
  
      const average = sum / grades.length;
      averageCell.textContent = average.toFixed(2);
      totalAverage += average;
      studentCount++;
  
      if (average >= 7) {
        resultCell.textContent = "Aprovado";
        resultCell.style.color = "green";
      } else {
        resultCell.textContent = "Reprovado";
        resultCell.style.color = "red";
      }
    });
  
    const classAverage = totalAverage / studentCount;
    alert(`A média geral da turma é: ${classAverage.toFixed(2)}`);
  });
  