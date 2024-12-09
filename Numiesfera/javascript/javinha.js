function alternarModo() {
  var body = document.getElementById("corpo");
  var botao = document.getElementById("imagem-cor");
  var cartao = document.querySelectorAll(".card");
  var formulario = document.getElementById("formulario");
  var textos = document.querySelectorAll(".texto-formulario");
  var titulos = document.querySelectorAll(".h2");
  var senhaErrada = document.getElementById("senhaErrada");

  if ( body.style.backgroundColor === "rgb(23, 22, 22)" || body.style.backgroundColor === "#171616") {
    // Modo Claro
    botao.src = "./images/home/modo-noturno.png";
    body.style.backgroundColor = "#f9f9f9";
    body.style.color = "#000000";

    titulos.forEach((titulo) =>{
      titulo.style.color = "#000000"
    })

    cartao.forEach((card) => {
      card.style.background = "linear-gradient(135deg, #ffffff, #f3f3f3)";
      card.style.color = "#000000";
      card.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
      card.style.border = "none"
    });

    if (formulario){
      formulario.style.background = "linear-gradient(135deg, #ffffff, #f3f3f3)";
      formulario.style.border = "1px solid #ddd";
      textos.forEach((texto) => {
        texto.style.color = "#000000";
      });
        senhaErrada.style.color = "#000000"
    }

    localStorage.setItem("tema", "claro");

  } else {
    // Modo Escuro
    botao.src = "./images/home/modo-claro.png";
    body.style.backgroundColor = "#171616";
    body.style.color = "#ffffff";

    cartao.forEach((card) => {
      card.style.background = "#171616";
      card.style.color = "#ffffff";
      card.style.border = "1px solid #211f1f";
    });

    if (formulario){
      formulario.style.background = "#171616";
      formulario.style.border = "1px solid #211f1f";
      textos.forEach((texto) => {
      texto.style.color = "#ffffff";
      });
        senhaErrada.style.color = "#ffffff"
    }

    localStorage.setItem("tema", "escuro");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  var temaSalvo = localStorage.getItem("tema");
  if (temaSalvo === "escuro") {
    alternarModo();
  }

  const formulario = document.querySelector("form");
  
  if (formulario) {
    formulario.addEventListener("submit", (event) => {
      event.preventDefault();
      let senha = document.getElementById("senha").value;
      let confirmaSenha = document.getElementById("confirmar-senha").value;

      if(senha != confirmaSenha){
        senhaErrada.value = "Senhas não coincidem!";
      }
      else{
        var pagina = document.title;
        switch(pagina){
          case "Cadastro":
            alert("Cadastro realizado com sucesso!");
            break;
          case "Entrar":
            alert("Bem vindo!");
            break;
        }
        formulario.reset();
      }
    });
  }
});