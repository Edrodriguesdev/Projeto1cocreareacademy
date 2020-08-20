var credenciaiscocreare = {
  usuario: "academy@cocreare.com.br",
  password: "123456",
};

function validateForm() {
  const usuario = document.getElementById("usuario");
  const senha = document.getElementById("senha");

  if (
    usuario.value == credenciaiscocreare.usuario &&
    senha.value == credenciaiscocreare.password
  ) {
    window.location.href = "./";
  } else {
    document.getElementById("erro").style.display = "block";
    alert("Credenciais inválidas");
  }
}
