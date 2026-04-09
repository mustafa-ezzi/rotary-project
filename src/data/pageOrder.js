export const pageOrder = [
  {
    path: "/",
    label: "Home",
    matches: (location) => location.pathname === "/",
  },
  {
    path: "/bank-verification",
    label: "Training",
    matches: (location) => location.pathname === "/bank-verification",
  },
  {
    path: "/verify?step=1",
    label: "Verification Part 1",
    matches: (location) =>
      location.pathname === "/verify" &&
      (new URLSearchParams(location.search).get("step") || "1") === "1",
  },
  {
    path: "/verify?step=2",
    label: "Verification Part 2",
    matches: (location) =>
      location.pathname === "/verify" &&
      new URLSearchParams(location.search).get("step") === "2",
  },
  {
    path: "/otp",
    label: "OTP Verification",
    matches: (location) => location.pathname === "/otp",
  },
  {
    path: "/reveal",
    label: "Reveal",
    matches: (location) => location.pathname === "/reveal",
  },
  {
    path: "/data-flow",
    label: "Data Flow",
    matches: (location) => location.pathname === "/data-flow",
  },
  {
    path: "/how-it-looks-legit",
    label: "How It Looks Legit",
    matches: (location) => location.pathname === "/how-it-looks-legit",
  },
  {
    path: "/scam-messages",
    label: "Scam Messages",
    matches: (location) => location.pathname === "/scam-messages",
  },
  {
    path: "/final-pledge",
    label: "Final Pledge",
    matches: (location) => location.pathname === "/final-pledge",
  },
];
