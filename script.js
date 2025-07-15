function desbloquear(id) {
  const ramo = document.getElementById(id);
  ramo.disabled = false;
  ramo.classList.remove('bloqueado');

  // Puedes agregar más reglas si quieres que un ramo desbloquee varios
  if (id === 'quimica2') {
    desbloquear('bioquimica');
  }
}
