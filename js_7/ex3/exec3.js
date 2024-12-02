    document.getElementById("filter").addEventListener("click", function () {
    const priceFilter = parseFloat(document.getElementById("price-filter").value);
    const rows = document.querySelectorAll("#products-table tbody tr");
    const filteredProductsList = document.getElementById("filtered-products");
  
    // Limpa a lista de produtos filtrados
    filteredProductsList.innerHTML = "";
  
    if (isNaN(priceFilter)) {
      alert("Por favor, insira um valor válido.");
      return;
    }
  
    rows.forEach((row) => {
      const productName = row.cells[0].textContent;
      const productPrice = parseFloat(row.cells[1].textContent);
  
      if (productPrice > priceFilter) {
        const listItem = document.createElement("li");
        listItem.textContent = `${productName} - R$ ${productPrice.toFixed(2)}`;
        filteredProductsList.appendChild(listItem);
      }
    });
  
    if (filteredProductsList.innerHTML === "") {
      filteredProductsList.innerHTML = "<li>Nenhum produto encontrado.</li>";
    }
  });
  