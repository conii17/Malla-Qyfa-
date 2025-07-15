function desbloquear(lista) {
  lista.forEach(id => {
    const ramo = document.getElementById(id);
    if (ramo && ramo.classList.contains("bloqueado")) {
      ramo.disabled = false;
      ramo.classList.remove("bloqueado");
    }
  });
}
