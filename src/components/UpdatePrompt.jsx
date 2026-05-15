import { createPortal } from "react-dom";
import { RefreshCw, Sparkles } from "lucide-react";
import { usePwaUpdate } from "../context/PwaUpdateContext";

export default function UpdatePrompt() {
  const { needRefresh, applyUpdate } = usePwaUpdate();

  if (!needRefresh) return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="pwa-update-title"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 10050,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1.25rem",
        background: "rgba(0, 0, 0, 0.55)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }}
    >
      <motionDiv
        className="pwa-update-card"
        style={{
          width: "100%",
          maxWidth: "22rem",
          borderRadius: "1.25rem",
          overflow: "hidden",
          border: "1px solid rgba(255, 255, 255, 0.18)",
          background:
            "linear-gradient(160deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 40%, rgba(20,10,45,0.85) 100%)",
          backdropFilter: "blur(28px) saturate(180%)",
          WebkitBackdropFilter: "blur(28px) saturate(180%)",
          boxShadow:
            "0 24px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(139,92,246,0.2), inset 0 1px 0 rgba(255,255,255,0.25)",
          animation: "pwaUpdateIn 0.45s cubic-bezier(0.34, 1.4, 0.64, 1) forwards",
        }}
      >
        <div
          style={{
            height: "3px",
            background:
              "linear-gradient(90deg, transparent, #ec4899, #8b5cf6, #3b82f6, transparent)",
          }}
        />

        <div style={{ padding: "1.5rem 1.35rem 1.35rem" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "1rem",
            }}
          >
            <div
              style={{
                width: "3rem",
                height: "3rem",
                borderRadius: "0.85rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background:
                  "linear-gradient(135deg, rgba(236,72,153,0.25), rgba(139,92,246,0.35))",
                border: "1px solid rgba(255,255,255,0.15)",
                boxShadow: "0 0 24px rgba(139,92,246,0.35)",
              }}
            >
              <img
                src="/pwa-192x192.png"
                alt=""
                style={{ width: "2rem", height: "2rem", objectFit: "contain" }}
              />
            </motionDiv>
            <div>
              <p
                id="pwa-update-title"
                style={{
                  margin: 0,
                  fontSize: "1.05rem",
                  fontWeight: 800,
                  letterSpacing: "0.04em",
                  color: "#fff",
                }}
              >
                App updated
              </p>
              <p
                style={{
                  margin: "0.2rem 0 0",
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  color: "rgba(167,139,250,0.9)",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                }}
              >
                New version available
              </p>
            </motionDiv>
          </motionDiv>

          <p
            style={{
              margin: "0 0 1.25rem",
              fontSize: "0.875rem",
              lineHeight: 1.55,
              color: "rgba(226, 232, 240, 0.85)",
            }}
          >
            CyberShield has been updated with the latest content. Tap the button
            below to refresh and use the newest version.
          </p>

          <button
            type="button"
            onClick={applyUpdate}
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              padding: "0.85rem 1rem",
              borderRadius: "0.85rem",
              border: "none",
              cursor: "pointer",
              fontSize: "0.85rem",
              fontWeight: 800,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#fff",
              background:
                "linear-gradient(130deg, #ec4899 0%, #8b5cf6 50%, #3b82f6 100%)",
              boxShadow: "0 4px 28px rgba(139,92,246,0.45)",
              transition: "transform 0.2s",
            }}
          >
            <RefreshCw size={16} strokeWidth={2.5} />
            Update app
            <Sparkles size={14} style={{ opacity: 0.85 }} />
          </button>
        </motionDiv>
      </motionDiv>

      <style>{`
        @keyframes pwaUpdateIn {
          from { opacity: 0; transform: scale(0.92) translateY(12px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </motionDiv>,
    document.body
  );
}
