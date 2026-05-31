import { useMemo, useState } from "react";
import { Mail, MessageSquareText, Send, ShieldCheck, UserRound } from "lucide-react";

const FEEDBACK_EMAIL = "cybershieldsafecity@gmail.com";

const FeedbackPortal = () => {
  const [formData, setFormData] = useState({
    name: "",
    comments: "",
    scamStory: "",
  });
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const displayName = useMemo(() => {
    const trimmedName = formData.name.trim();
    return trimmedName || "Anonymous";
  }, [formData.name]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setError("");
    setSent(false);
  };

  const buildEmailBody = () => {
    const comments = formData.comments.trim() || "Not provided";
    const scamStory = formData.scamStory.trim() || "Not provided";
    const submittedAt = new Date().toLocaleString();

    return [
      "CyberShield Feedback Portal Submission",
      "",
      `Name: ${displayName}`,
      `Submitted At: ${submittedAt}`,
      "",
      "Website Comments:",
      comments,
      "",
      "Scam Story:",
      scamStory,
      "",
      "Submission Note:",
      "The sender may have provided website comments, a scam story, or both.",
    ].join("\n");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.comments.trim() && !formData.scamStory.trim()) {
      setError("Please write website comments, your scam story, or both before sending.");
      return;
    }

    const subject = `CyberShield Feedback from ${displayName}`;
    const mailtoLink = `mailto:${FEEDBACK_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(buildEmailBody())}`;

    setSent(true);
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 text-center">
          <div className="mb-5 flex justify-center">
            <div className="rounded-2xl bg-cyan-500/15 p-4 ring-1 ring-cyan-300/30">
              <ShieldCheck className="h-10 w-10 text-cyan-200" />
            </div>
          </div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-cyan-200">
            CyberShield Safe City
          </p>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Feedback Portal
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
            Share website feedback, a scam experience, or both. Your name is optional and will be sent as Anonymous if left blank.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <section className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-cyan-950/30">
            <h2 className="mb-4 text-xl font-bold text-white">What happens next?</h2>
            <div className="space-y-4 text-sm text-slate-300">
              <div className="flex gap-3">
                <Mail className="mt-0.5 h-5 w-5 flex-shrink-0 text-cyan-200" />
                <p>Your email app will open with a structured message addressed to {FEEDBACK_EMAIL}.</p>
              </div>
              <div className="flex gap-3">
                <UserRound className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-200" />
                <p>If you leave the name field empty, the submission will show the sender name as Anonymous.</p>
              </div>
              <div className="flex gap-3">
                <MessageSquareText className="mt-0.5 h-5 w-5 flex-shrink-0 text-violet-200" />
                <p>You only need to fill one message field: website comments, scam story, or both.</p>
              </div>
            </div>
          </section>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white p-5 text-slate-950 shadow-2xl shadow-black/30 sm:p-6">
            <div className="grid gap-5">
              <label className="block">
                <span className="mb-2 block text-sm font-bold text-slate-800">Name</span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Leave blank for Anonymous"
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-950 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-bold text-slate-800">Comments about website</span>
                <textarea
                  name="comments"
                  value={formData.comments}
                  onChange={handleChange}
                  placeholder="Tell us what worked well or what can be improved."
                  rows={5}
                  className="w-full resize-y rounded-xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-950 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-bold text-slate-800">Your scam story</span>
                <textarea
                  name="scamStory"
                  value={formData.scamStory}
                  onChange={handleChange}
                  placeholder="Share what happened, how it started, and what warning signs you noticed."
                  rows={6}
                  className="w-full resize-y rounded-xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-950 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                />
              </label>

              {error && (
                <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                  {error}
                </p>
              )}

              {sent && (
                <p className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">
                  Your email app should open now. Please review and send the message from there.
                </p>
              )}

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-600 px-5 py-3 text-base font-bold text-white shadow-lg shadow-cyan-600/25 transition hover:border-transparent hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200"
              >
                <Send className="h-5 w-5" />
                Send Feedback Email
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FeedbackPortal;
