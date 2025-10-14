function enviarFormulario() {
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  if (!nome || !email || !mensagem) {
    alert("Por favor, preencha todos os campos.");
    return false;
  }

  alert("Mensagem enviada com sucesso!");
}
