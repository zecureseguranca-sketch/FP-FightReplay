export function isStandalone() {
  return window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true;
}

export function applyPwaModeClass() {
  document.documentElement.dataset.mode = isStandalone() ? "standalone" : "browser";
}

export function setupInstallHint(hintEl) {
  // hintEl: elemento opcional para avisar instalar
  if (!hintEl) return;

  const standalone = isStandalone();
  if (standalone) {
    hintEl.style.display = "none";
    return;
  }
  hintEl.style.display = "block";
}