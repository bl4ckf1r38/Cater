// CÓDIGO PARA index.html (página de login)
document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();

      let username = document.getElementById('username').value;
      let password = document.getElementById('password').value;

      if (username === 'Cater' && password === '05052024') {
        window.location.href = 'welcome.html';
      } else {
        alert('Usuário ou senha inválidos!');
      }
    });
  }

  // CÓDIGO PARA welcome.html (botão de logout)
  const logoutButton = document.getElementById('logoutButton');
  if (logoutButton) {
    logoutButton.addEventListener('click', () => {
      // Se quiser limpar localStorage aqui
      // localStorage.removeItem('usuarioLogado');
      window.location.href = 'index.html';
    });
  }
});