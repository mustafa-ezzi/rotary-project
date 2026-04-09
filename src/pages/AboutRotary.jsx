import { Globe2, Handshake, Mail, ShieldCheck, Heart, BookOpen, Droplets, Leaf, Scale, TrendingUp, ChevronRight } from "lucide-react";

const focusAreas = [
  { label: "Basic Education & Literacy", icon: BookOpen, color: "from-violet-500/20 to-purple-500/10", border: "border-violet-400/20", iconColor: "text-violet-300" },
  { label: "Maternal & Child Health", icon: Heart, color: "from-rose-500/20 to-pink-500/10", border: "border-rose-400/20", iconColor: "text-rose-300" },
  { label: "Diseases Prevention & Treatment", icon: ShieldCheck, color: "from-orange-500/20 to-amber-500/10 ", border: "border-sky-400/20", iconColor: "text-sky-300" },
  { label: "Water & Sanitation", icon: Droplets, color: "from-cyan-500/20 to-teal-500/10", border: "border-cyan-400/20", iconColor: "text-cyan-300" },
  { label: "Community & Economic Development", icon: TrendingUp, color: "   from-emerald-500/20 to-green-500/10", border: "border-orange-400/20", iconColor: "text-orange-300" },
  { label: "Peace Building & Conflict Resolution", icon: Scale, color: "from-amber-500/20 to-yellow-500/10", border: "border-amber-400/20", iconColor: "text-amber-300" },
  { label: "Environment", icon: Leaf, color: " from-sky-500/20 to-blue-500/10", border: "border-emerald-400/20", iconColor: "text-emerald-300" },
];

const highlights = [
  "1- Successfully Operating Outreach Clinic For Mother & Child Immunization",
  "2- Front Line Warriors In Polio Eradication",
  "3- Laid The Foundation Of Community Policing",
  "4- Planted More Than 15,000 Trees In Karachi And Remote Areas Of Sindh",
  "5- Donated Clean And Green Energy To Rotary Smart Village, Samaro",
  "6- Distributed 100,000 Books From Karachi To Quetta From The Platform Of Rotary Pakistan Literacy Mission",
  "7- Developed & Donated The First Ever Library (Books, Computers & Furniture) To Samaro",
  "8- Organized Numerous Sessions Of Literacy, Financial Literacy And EdTech",
  "9- Organized Numerous Sessions On Women Empowerment",
  "10- Organized Dozens Of Welfare Medical Camps In Karachi",
  "11- Distributed Free Medicines",
  "12- Organized Camps For Hearing Scanning Tests",
  "13- Organized Camps For Eye Tests",
  "14- Have Signed Numerous MOUs With Health Organizations To Benefit Under Privileged Communities",
  "15- Conducted Numerous Programs On Vocational Training For Women & Children",
  "16- Played An Active Role During COVID-19 In Disease Prevention",
  "17- Undertaken Numerous Community Development Programs",
  "18- Supported Numerous Education And Literacy Based Programs",
  "19- Actively Supporting Down Syndrome Awareness and SNE Inclusion Programs",
];

const stats = [
  { value: "1.2M+", label: "Members Worldwide" },
  { value: "45,000+", label: "Rotary Clubs" },
  { value: "200+", label: "Countries" },
  { value: "120+", label: "Years of Service" },
];

const AboutRotary = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.18),_transparent_32%),radial-gradient(circle_at_top_right,_rgba(234,179,8,0.18),_transparent_28%),linear-gradient(135deg,_#020617_0%,_#0f172a_45%,_#111827_100%)]" />
        <div className="absolute -left-24 top-20 h-64 w-64 rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-48 w-96 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />

        <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-28">

          {/* Logo */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-sky-500/20 blur-2xl scale-110" />
              <img
                src="/wheel.png"
                alt="Rotary International Wheel"
                className="relative h-28 w-28 sm:h-36 sm:w-36 md:h-48 md:w-48 lg:h-56 lg:w-56 object-contain"
                style={{ filter: "drop-shadow(0 0 28px rgba(59,130,246,0.5))" }}
              />
            </div>
          </div>

          {/* Badge + Heading */}
          <div className="max-w-4xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-xs font-semibold tracking-wide text-sky-200 sm:text-sm">
              <ShieldCheck className="h-3.5 w-3.5 shrink-0" />
              Rotary International and RCK Safe City
            </div>

            <h1 className="text-3xl font-black leading-[1.08] sm:text-5xl lg:text-6xl xl:text-7xl">
              About{" "}
              <span className="bg-gradient-to-r from-sky-400 via-blue-300 to-amber-300 bg-clip-text text-transparent">
                Rotary
              </span>
            </h1>

            <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8 lg:text-lg">
              Rotary is a global network of more than 1.2 million neighbors, friends, leaders and
              problem solvers who see a world where people unite and take action to create lasting
              changes across the globe in our communities and in ourselves.
            </p>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8 lg:text-lg">
              Solving real problems takes real commitment and vision. For more than 120 years,
              Rotary&apos;s People of Action have used their passion, energy and intelligence to
              undertake action on sustainable projects. Rotary members believe that we have shared
              responsibilities to take action on our world&apos;s most persistent issues. Our more than
              45,000 Rotary Clubs in more than 200 countries work together on seven focus areas
              prescribed by Rotary International.
            </p>
          </div>

          {/* Stats Strip */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-5 text-center backdrop-blur-sm"
              >
                <p className="text-xl font-black text-white sm:text-2xl lg:text-3xl">{value}</p>
                <p className="mt-1 text-xs leading-5 text-slate-400 sm:text-sm">{label}</p>
              </div>
            ))}
          </div>

          {/* Focus Areas + Mission */}
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">

            {/* Focus Areas */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 backdrop-blur-sm">
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <div className="rounded-2xl bg-sky-500/15 p-3 text-sky-300 shrink-0">
                  <Globe2 className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold sm:text-2xl">Seven Focus Areas</h2>
                  <p className="text-xs text-slate-400 sm:text-sm">Prescribed by Rotary International</p>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {focusAreas.map(({ label, icon: Icon, color, border, iconColor }, i) => (
                  <div
                    key={label}
                    className={`flex items-center gap-3 rounded-2xl border ${border} bg-gradient-to-br ${color} px-4 py-3.5 transition-all duration-200 hover:scale-[1.01] hover:border-white/20`}
                  >
                    <div className={`shrink-0 ${iconColor}`}>
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="text-sm leading-6 text-slate-200">
                      <span className="mr-1.5 font-bold text-white/50">{i + 1}.</span>
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mission */}
            <div className="flex flex-col gap-5 rounded-3xl border border-white/10 bg-gradient-to-br from-amber-400/10 via-slate-900/60 to-sky-500/10 p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-amber-400/15 p-3 text-amber-300 shrink-0">
                  <Handshake className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <h2 className="text-xl font-bold sm:text-2xl">Mission</h2>
              </div>

              <p className="text-sm leading-7 text-slate-200 sm:text-base sm:leading-8">
                Our mission is to provide selfless service to others, promote integrity and
                transparency and advance world understanding, goodwill and peace through our
                fellowship of businessmen, professionals and community leaders and it is always
                SERVICE ABOVE SELF.
              </p>

              {/* Motto callout */}
              <div className="rounded-2xl border border-amber-300/25 bg-amber-400/5 p-5 text-center">
                <p className="text-xs uppercase tracking-[0.35em] text-amber-400/70">Rotary Motto</p>
                <p className="mt-2 text-xl font-black tracking-wide text-amber-200 sm:text-2xl">
                  Service Above Self
                </p>
              </div>

              <div className="rounded-2xl border border-sky-400/15 bg-slate-950/50 p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-amber-200/80">Rotary Club of Karachi Safe City</p>
                <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                  Rotary Club of Karachi Safe City (RCK Safe City) belonging to District 3271 is
                  registered with Rotary International and has fifty plus members in the form of
                  Rotarians, Rotaracts and Interacts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Highlights Section ── */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-[linear-gradient(180deg,_rgba(15,23,42,0.97)_0%,_rgba(2,6,23,1)_100%)] p-6 sm:p-8 lg:p-10">

          {/* Section header */}
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-sky-400/70">Our Impact</p>
              <h2 className="text-2xl font-black sm:text-3xl lg:text-4xl">RCK Safe City Highlights</h2>
              <p className="mt-3 text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
                RCK Safe City has had the honor of serving underprivileged communities from Karachi
                to Jamshoro, Hyderabad, Tando Jam, Tando Allah Yar, Tando Adam, Mirpurkhas,
                Samaro, Umerkot, Kunri, Tharparkar, Mithi and remote areas of Sindh by initiating
                numerous projects, highlights of which are:
              </p>
            </div>
            <div className="shrink-0 rounded-2xl border border-sky-400/20 bg-sky-500/10 px-5 py-3 text-center">
              <p className="text-3xl font-black text-sky-300">19</p>
              <p className="text-xs text-slate-400">Achievements</p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {highlights.map((item, i) => (
              <div
                key={item}
                className="group flex items-start gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4 transition-all duration-200 hover:border-sky-400/20 hover:bg-sky-500/[0.04]"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-500/15 text-[10px] font-bold text-sky-400">
                  {i + 1}
                </span>
                <p className="text-xs leading-6 text-slate-300 sm:text-sm sm:leading-7">
                  {item.replace(/^\d+- /, "")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-sky-400/15 bg-gradient-to-br from-sky-900/40 via-slate-900 to-amber-900/30 p-6 sm:p-10">
          {/* decorative blobs */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-sky-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-amber-400/10 blur-3xl" />

          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
            <div className="max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-amber-400/70">Join Us</p>
              <h2 className="text-2xl font-black leading-snug sm:text-3xl lg:text-4xl">
                RCK Safe City has the zeal and passion to create a difference in this world and
                leave a legacy behind.
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                To Create a Difference in this World &amp; to Join Our Rotary Club. Write to Us:
              </p>
            </div>

            <div className="flex shrink-0 flex-col items-start gap-3 lg:items-end">
              <a
                href="mailto:rcksafecity3271@gmail.com"
                className="inline-flex items-center gap-3 rounded-full border border-sky-300/30 bg-sky-400/10 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-sky-400/20 active:scale-95 sm:px-6 sm:py-4 sm:text-base"
              >
                <Mail className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" />
                <span className="break-all">rcksafecity3271@gmail.com</span>
              </a>
              <p className="text-xs text-slate-500">District 3271 · Rotary International</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutRotary;