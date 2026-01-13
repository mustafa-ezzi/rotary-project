import { useNavigate } from "react-router-dom";

const Presenter = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-6">
      <div className="max-w-md w-full bg-black rounded-xl p-8 text-center border border-gray-800">

        <h1 className="text-2xl font-bold text-red-500 mb-4">
          Presenter Control Panel
        </h1>

        <p className="text-sm text-gray-400 mb-6">
          Use this panel during live sessions to control the flow.
        </p>

        <div className="space-y-4">
          <button
            onClick={() => navigate("/")}
            className="w-full bg-gray-700 hover:bg-gray-600 py-3 rounded-lg"
          >
            Restart Simulation
          </button>

          <button
            onClick={() => navigate("/reveal")}
            className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-lg font-semibold"
          >
            Trigger Reveal
          </button>

          <button
            onClick={() => navigate("/data-flow")}
            className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg"
          >
            Show Data Flow
          </button>
        </div>

        <p className="text-xs text-gray-500 mt-6">
          Hidden from audience view
        </p>
      </div>
    </div>
  );
};

export default Presenter;
