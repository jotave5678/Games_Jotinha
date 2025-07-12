function showAlert(mensagem) {
  alert(mensagem);
}

document.getElementById("contatoForm").addEventListener("submit", function(e) {
  e.preventDefault();
  showAlert("Mensagem enviada com sucesso! Obrigado pelo contato.");
  this.reset();
});

document.getElementById("sugestaoForm").addEventListener("submit", function(e) {
  e.preventDefault();
  showAlert("Sugestão enviada! Obrigado pela contribuição.");
  this.reset();
});

document.getElementById("cadastroForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const senha = this.senha.value;
  const confirmar = this.confirmarSenha.value;

  if (senha.length < 6) {
    showAlert("A senha deve ter pelo menos 6 caracteres.");
    return;
  }

  if (senha !== confirmar) {
    showAlert("As senhas não coincidem.");
    return;
  }

  showAlert("Cadastro realizado com sucesso!");
  this.reset();
});

document.getElementById("newsletterForm").addEventListener("submit", function(e) {
  e.preventDefault();
  showAlert("Você foi inscrito na nossa newsletter!");
  this.reset();
});
