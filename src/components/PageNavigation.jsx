import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { pageOrder } from "../data/pageOrder";

const PageNavigation = () => {
  const location = useLocation();
  const currentIndex = pageOrder.findIndex((page) =>
    page.matches ? page.matches(location) : page.path === location.pathname
  );

  if (currentIndex === -1) return null;

  const previousPage = currentIndex > 0 ? pageOrder[currentIndex - 1] : null;
  const nextPage = currentIndex < pageOrder.length - 1 ? pageOrder[currentIndex + 1] : null;
  const currentPage = pageOrder[currentIndex];

  return (
    <div className="mx-auto w-full max-w-7xl px-4 pb-3 pt-3 sm:px-6 lg:px-8 bg-transparent">
      <div className="flex items-center justify-center gap-4">
        {previousPage ? (
          <Link
            to={previousPage.path}
            className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-300/30 text-slate-300 transition duration-200 hover:border-slate-200/60 hover:text-white hover:bg-white/[0.05]"
            title={previousPage.label}
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>
        ) : (
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-400/15 text-white/30 cursor-not-allowed">
            <ArrowLeft className="h-5 w-5" />
          </div>
        )}

        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
            {currentIndex + 1}/{pageOrder.length}
          </p>
          <p className="mt-1 text-sm text-slate-400">{currentPage.label}</p>
        </div>

        {nextPage ? (
          <Link
            to={nextPage.path}
            className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-300/30 text-slate-300 transition duration-200 hover:border-slate-200/60 hover:text-white hover:bg-white/[0.05]"
            title={nextPage.label}
          >
            <ArrowRight className="h-5 w-5" />
          </Link>
        ) : (
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-400/15 text-white/30 cursor-not-allowed">
            <ArrowRight className="h-5 w-5" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PageNavigation;
