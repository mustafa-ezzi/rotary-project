import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { registerSW } from "virtual:pwa-register";

const PwaUpdateContext = createContext(null);

const UPDATE_CHECK_MS = 60 * 60 * 1000; // 1 hour

export function PwaUpdateProvider({ children }) {
  const [needRefresh, setNeedRefresh] = useState(false);
  const updateSWRef = useRef(null);

  useEffect(() => {
    let intervalId;

    const updateSW = registerSW({
      immediate: true,
      onNeedRefresh() {
        setNeedRefresh(true);
      },
      onRegisteredSW(_swUrl, registration) {
        if (!registration) return;
        const check = () => registration.update().catch(() => {});
        check();
        intervalId = setInterval(check, UPDATE_CHECK_MS);
      },
    });

    updateSWRef.current = updateSW;

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, []);

  const applyUpdate = useCallback(() => {
    const fn = updateSWRef.current;
    if (typeof fn === "function") {
      fn(true);
    } else {
      window.location.reload();
    }
  }, []);

  return (
    <PwaUpdateContext.Provider value={{ needRefresh, applyUpdate }}>
      {children}
    </PwaUpdateContext.Provider>
  );
}

export function usePwaUpdate() {
  const ctx = useContext(PwaUpdateContext);
  if (!ctx) {
    throw new Error("usePwaUpdate must be used within PwaUpdateProvider");
  }
  return ctx;
}
