// ================================
// MENU MOBILE
// ================================

function abrirMenu() {

    const menu = document.getElementById("menu");

    menu.classList.toggle("ativo");
}


// ================================
// AUMENTAR FONTE
// ================================

function aumentarFonte() {

    document.body.classList.toggle("fonte-grande");

}


// ================================
// DEMONSTRAÇÃO DO ROBÔ
// ================================

function mostrarMensagem(texto, cor) {

    const mensagem = document.getElementById("mensagem");
    const luz = document.getElementById("luz");

    mensagem.textContent = texto;

    // Remove cores anteriores
    luz.classList.remove("amarelo");
    luz.classList.remove("verde");

    // Adiciona a nova cor
    if (cor === "amarelo") {
        luz.classList.add("amarelo");
    }

    if (cor === "verde") {
        luz.classList.add("verde");
    }

}


// ================================
// FECHAR MENU AO CLICAR
// ================================

const links = document.querySelectorAll("#menu a");

links.forEach(function(link) {

    link.addEventListener("click", function() {

        document.getElementById("menu").classList.remove("ativo");

    });

});