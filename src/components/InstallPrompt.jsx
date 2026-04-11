import { useState, useEffect, useCallback, useRef } from "react";
import { createPortal } from "react-dom";
import { X, Download, Smartphone, Wifi, Zap, Share, MoreVertical } from "lucide-react";

const DISMISSED_KEY = "cybershield-pwa-dismissed";

function isStandalone() {
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    window.navigator.standalone === true
  );
}

function isIOSDevice() {
  return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
}

function isAndroidDevice() {
  return /Android/i.test(navigator.userAgent);
}

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [installed, setInstalled] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isAndroid, setIsAndroid] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [sheetAnimating, setSheetAnimating] = useState(false);
  const [chipDismissed, setChipDismissed] = useState(false);
  const [canInstall, setCanInstall] = useState(false);
  const sheetRef = useRef(null);

  useEffect(() => {
    if (sessionStorage.getItem(DISMISSED_KEY)) {
      setChipDismissed(true);
      return;
    }
    if (isStandalone()) return;

    setIsIOS(isIOSDevice());
    setIsAndroid(isAndroidDevice());

    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setCanInstall(true);
    };

    window.addEventListener("beforeinstallprompt", handler);
    window.addEventListener("appinstalled", () => {
      setInstalled(true);
      setSheetOpen(false);
    });

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const openSheet = useCallback(() => {
    setSheetOpen(true);
    requestAnimationFrame(() => setSheetAnimating(true));
  }, []);

  useEffect(() => {
    const onOpenRequest = () => openSheet();
    window.addEventListener("cybershield:open-install", onOpenRequest);
    return () =>
      window.removeEventListener("cybershield:open-install", onOpenRequest);
  }, [openSheet]);

  const closeSheet = useCallback(() => {
    setSheetAnimating(false);
    setTimeout(() => setSheetOpen(false), 350);
  }, []);

  const dismissChip = useCallback((e) => {
    e.stopPropagation();
    setChipDismissed(true);
    sessionStorage.setItem(DISMISSED_KEY, "1");
  }, []);

  const install = useCallback(async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    setDeferredPrompt(null);
    setCanInstall(false);
    if (outcome === "accepted") setInstalled(true);
    closeSheet();
  }, [deferredPrompt, closeSheet]);

  if (installed || isStandalone()) return null;

  const showNativeInstall = canInstall && deferredPrompt;

  const floatingChip =
    !chipDismissed &&
    createPortal(
      <div
        className="install-prompt-chip"
        style={{
          position: "fixed",
          bottom: "max(1.5rem, env(safe-area-inset-bottom))",
          left: "max(1rem, env(safe-area-inset-left))",
          right: "auto",
          top: "auto",
          zIndex: 10002,
          display: "flex",
          alignItems: "center",
          gap: "6px",
        }}
      >
        <button
          type="button"
          onClick={openSheet}
          className="flex items-center gap-2 rounded-full border-0 py-2.5 pl-3 pr-4 text-white font-semibold text-xs tracking-wide shadow-lg transition-transform duration-200 hover:scale-105 active:scale-95"
          style={{
            background: "linear-gradient(130deg, #ec4899 0%, #8b5cf6 55%, #3b82f6 100%)",
            boxShadow:
              "0 4px 24px rgba(139,92,246,0.55), 0 0 0 1px rgba(255,255,255,0.15)",
          }}
          aria-label="Install CyberShield on your phone"
        >
          <span className="relative flex h-5 w-5 shrink-0 items-center justify-center">
            <span
              className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-50"
              style={{ background: "rgba(255,255,255,0.6)" }}
            />
            <Smartphone size={14} className="relative text-white" />
          </span>
          <span>Install on phone</span>
        </button>

        <button
          type="button"
          onClick={dismissChip}
          className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/20 bg-black/70 transition-colors hover:bg-black/90"
          aria-label="Hide install button"
        >
          <X size={10} className="text-white/70" />
        </button>
      </div>,
      document.body
    );

  const installSheet =
    sheetOpen &&
    createPortal(
      <>
        <div
          className={`fixed inset-0 z-[10002] transition-opacity duration-350 ${
            sheetAnimating ? "opacity-100" : "opacity-0"
          }`}
          style={{ background: "rgba(0,0,0,0.65)", backdropFilter: "blur(4px)" }}
          onClick={closeSheet}
          aria-hidden="true"
        />

        <div
          ref={sheetRef}
          className={`fixed bottom-0 left-0 right-0 z-[10003] transition-transform duration-350 ease-out ${
            sheetAnimating ? "translate-y-0" : "translate-y-full"
          }`}
          style={{ paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))" }}
        >
          <InstallSheet
            isIOS={isIOS}
            isAndroid={isAndroid}
            showNativeInstall={showNativeInstall}
            onInstall={install}
            onClose={closeSheet}
          />
        </div>
      </>,
      document.body
    );

  return (
    <>
      {floatingChip}
      {installSheet}
    </>
  );
}

function InstallSheet({
  isIOS,
  isAndroid,
  showNativeInstall,
  onInstall,
  onClose,
}) {
  return (
    <div
      className="mx-2 mb-2 overflow-hidden rounded-2xl border border-violet-500/25"
      style={{
        background:
          "linear-gradient(160deg, rgba(10,8,28,0.98) 0%, rgba(20,8,40,0.98) 100%)",
        backdropFilter: "blur(24px)",
        boxShadow: "0 -8px 50px rgba(139,92,246,0.25)",
      }}
    >
      <div
        className="h-[2px] w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent, #ec4899, #8b5cf6, #3b82f6, transparent)",
        }}
      />

      <div className="p-5">
        <div className="mb-4 flex items-center gap-3">
          <div
            className="h-14 w-14 shrink-0 overflow-hidden rounded-2xl"
            style={{ boxShadow: "0 0 24px rgba(139,92,246,0.55)" }}
          >
            <img
              src="/pwa-192x192.png"
              alt="CyberShield"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-base font-bold tracking-wide text-white">CyberShield</p>
            <p className="mt-0.5 text-xs text-violet-300/60">
              Add to your home screen for app-like access
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-0 bg-white/10 hover:bg-white/15"
          >
            <X size={14} className="text-white/60" />
          </button>
        </div>

        <div className="mb-4 flex flex-wrap gap-2">
          {[
            { icon: <Wifi size={11} />, label: "Works offline" },
            { icon: <Zap size={11} />, label: "Opens fast" },
            { icon: <Smartphone size={11} />, label: "Like a real app" },
          ].map(({ icon, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-1.5 rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-[11px] font-semibold text-violet-300/80"
            >
              {icon}
              {label}
            </span>
          ))}
        </div>

        {isIOS && <IosSteps onClose={onClose} />}
        {isAndroid && !showNativeInstall && <AndroidSteps onClose={onClose} />}
        {!isIOS && !isAndroid && !showNativeInstall && (
          <DesktopSteps onClose={onClose} />
        )}

        {showNativeInstall && (
          <button
            type="button"
            onClick={onInstall}
            className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl border-0 py-3.5 text-sm font-bold tracking-wide text-white transition-transform hover:scale-[1.02] active:scale-[0.98]"
            style={{
              background:
                "linear-gradient(130deg, #ec4899 0%, #8b5cf6 50%, #3b82f6 100%)",
              boxShadow: "0 4px 24px rgba(139,92,246,0.45)",
            }}
          >
            <Download size={16} />
            Install now
          </button>
        )}
      </div>
    </div>
  );
}

function StepList({ title, steps, onClose }) {
  return (
    <>
      <p className="mb-3 text-xs font-medium uppercase tracking-wide text-slate-400">
        {title}
      </p>
      <div className="flex flex-col gap-2">
        {steps.map(({ step, icon, text }) => (
          <div
            key={step}
            className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5"
          >
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-violet-500/30 bg-violet-500/20 text-[10px] font-bold text-violet-300">
              {step}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-slate-300">
              {icon}
              {text}
            </span>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={onClose}
        className="mt-4 w-full rounded-xl border border-white/10 bg-white/10 py-3 text-sm font-bold text-white/80 transition-colors hover:bg-white/15"
      >
        Got it
      </button>
    </>
  );
}

function IosSteps({ onClose }) {
  return (
    <StepList
      title="Install on iPhone / iPad (Safari)"
      onClose={onClose}
      steps={[
        {
          step: "1",
          icon: <Share size={13} className="shrink-0 text-blue-400" />,
          text: (
            <>
              Tap <span className="font-bold text-blue-400">Share</span> in Safari
            </>
          ),
        },
        {
          step: "2",
          icon: <span className="shrink-0 font-black text-violet-400">+</span>,
          text: (
            <>
              Choose{" "}
              <span className="font-bold text-violet-400">Add to Home Screen</span>
            </>
          ),
        },
        {
          step: "3",
          icon: <span className="shrink-0 text-xs font-bold text-pink-400">✓</span>,
          text: (
            <>
              Tap <span className="font-bold text-pink-400">Add</span> to finish
            </>
          ),
        },
      ]}
    />
  );
}

function AndroidSteps({ onClose }) {
  return (
    <StepList
      title="Install on Android (Chrome)"
      onClose={onClose}
      steps={[
        {
          step: "1",
          icon: <MoreVertical size={13} className="shrink-0 text-slate-300" />,
          text: (
            <>
              Tap the <span className="font-bold text-white">⋮ menu</span> (top right)
            </>
          ),
        },
        {
          step: "2",
          icon: <Download size={13} className="shrink-0 text-violet-400" />,
          text: (
            <>
              Tap <span className="font-bold text-violet-400">Install app</span> or{" "}
              <span className="font-bold text-violet-400">Add to Home screen</span>
            </>
          ),
        },
        {
          step: "3",
          icon: <span className="shrink-0 text-xs font-bold text-pink-400">✓</span>,
          text: <>Confirm — the app icon appears on your home screen</>,
        },
      ]}
    />
  );
}

function DesktopSteps({ onClose }) {
  return (
    <StepList
      title="Install on desktop (Chrome / Edge)"
      onClose={onClose}
      steps={[
        {
          step: "1",
          icon: <Download size={13} className="shrink-0 text-violet-400" />,
          text: (
            <>
              Look for the <span className="font-bold text-violet-400">install</span>{" "}
              icon in the address bar
            </>
          ),
        },
        {
          step: "2",
          icon: <span className="shrink-0 text-xs font-bold text-pink-400">✓</span>,
          text: <>Click Install — CyberShield opens like a desktop app</>,
        },
      ]}
    />
  );
}
