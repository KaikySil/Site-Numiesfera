function alternarModo() {
    var body = document.getElementById("corpo");
    var botao = document.getElementById("imagem-cor");
    var principal = document.getElementById("principal-cronologia");
    var cartao = document.querySelectorAll(".cronologia");
  
  if (body.style.backgroundColor === "rgb(23, 22, 22)" || body.style.backgroundColor === "#171616") {
      // Modo Claro
      botao.src = "./images/home/modo-noturno.png";
      body.style.backgroundColor = "#f9f9f9";
      body.style.color = "#000000";
      principal.style.color = "#000000";

      cartao.forEach(carta =>{
        carta.style.background = "#ffffff";
        carta.style.border = "none";
      })
  }
  else {
      // Modo Escuro
      botao.src = "./images/home/modo-claro.png";
      body.style.backgroundColor = "#171616";
      body.style.color = "#ffffff";
      principal.style.color = "#ffffff";

      cartao.forEach(carta =>{
        carta.style.background = "#171616";
        carta.style.border = "1px solid #211f1f";
      })
    }
  }