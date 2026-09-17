function mostrarMensagem() {
    let mensagem = document.querySelector("#mensagem");

    if (mensagem) {
        mensagem.remove();
        return;
    }

    mensagem = document.createElement("p");
    mensagem.id = "mensagem";
    mensagem.textContent = "Obrigado por visitar meu site! 🚀";

    document.querySelector("#sobre").appendChild(mensagem);
}
