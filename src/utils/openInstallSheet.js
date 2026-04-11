export function openInstallSheet() {
  window.dispatchEvent(new CustomEvent("cybershield:open-install"));
}

export function isAppInstalled() {
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    window.navigator.standalone === true
  );
}
