import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <main className="flex-grow container mx-auto px-6 py-16">
                <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-12">
                    <header className="text-center mb-8">
                        <div className="inline-flex items-center gap-3 mb-4">
                            <span className="text-3xl">🛡️</span>
                            <span className="text-sm text-gray-600">Educational Simulation</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                            Learn How Scams Work — Safely and Effectively
                        </h1>
                        <p className="mt-4 text-gray-600 text-lg">
                            Realistic, harmless simulations that teach you to spot phishing, social-engineering and
                            other common scams using mock/test data only.
                        </p>
                    </header>

                    <section className="grid md:grid-cols-2 gap-8 items-center mb-8">
                        <div>
                            <ul className="space-y-4 text-gray-700">
                                <li className="flex items-start gap-3">
                                    <span className="text-green-600 text-2xl">✔️</span>
                                    <div>
                                        <h3 className="font-semibold">Hands-on Simulations</h3>
                                        <p className="text-sm text-gray-600">Practice with email, SMS, and call scenarios.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-green-600 text-2xl">✔️</span>
                                    <div>
                                        <h3 className="font-semibold">Safe Test Data</h3>
                                        <p className="text-sm text-gray-600">All inputs are simulated; no real bank APIs or transactions.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-green-600 text-2xl">✔️</span>
                                    <div>
                                        <h3 className="font-semibold">Immediate Feedback</h3>
                                        <p className="text-sm text-gray-600">Receive clear, actionable advice after each exercise.</p>
                                    </div>
                                </li>
                            </ul>

                            <div className="mt-6 flex gap-4">
                                <Link to="/bank-verification" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg">
                                    Start Simulation
                                </Link>
                                <a href="#how" className="inline-block border border-gray-200 py-3 px-6 rounded-lg text-gray-700 hover:bg-gray-50">
                                    How it works
                                </a>
                            </div>
                        </div>

                        <div className="bg-gray-50 border border-gray-100 rounded-xl p-6">
                            <h4 className="font-semibold text-gray-800 mb-3">Quick Demo</h4>
                            <p className="text-sm text-gray-600 mb-4">
                                Try a short example: you'll receive a simulated "bank alert" message and decide the safest response. All details are mock values used for training.
                            </p>
                            <div className="bg-white border rounded-lg p-4 text-left">
                                <p className="text-sm text-gray-700">From: <strong>support@mockbank.example</strong></p>
                                <p className="text-sm text-gray-700 mt-2">Subject: <strong>Urgent: Verify your account</strong></p>
                                <p className="mt-3 text-sm text-gray-600">Action: Click the link to verify your identity.</p>
                                <div className="mt-4">
                                    <Link to="/start" className="inline-block bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg text-sm">
                                        Inspect & Respond
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="how" className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">How it works</h2>
                        <ol className="list-decimal list-inside space-y-3 text-gray-700">
                            <li>
                                <strong>Choose a scenario:</strong> pick from bank alerts, delivery scams, job offers, or tech support.
                            </li>
                            <li>
                                <strong>Interact safely:</strong> use mock/test data to respond — nothing touches real services.
                            </li>
                            <li>
                                <strong>Review feedback:</strong> see a clear explanation of cues, mistakes, and safer alternatives.
                            </li>
                        </ol>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Privacy & Safety</h2>
                        <p className="text-gray-600 text-sm">
                            This platform is educational only. Simulations use mock identities and data — no real financial systems are contacted.
                            We only retain anonymized results for improving training unless you explicitly opt-in for progress tracking.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">For Teams</h2>
                        <p className="text-gray-600 text-sm mb-4">Run private training sessions, monitor anonymous completion, and create custom scenarios for your organization.</p>
                        <div className="flex gap-4">
                            <Link to="/teams" className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg text-sm">
                                Team Training
                            </Link>
                            <Link to="/contact" className="inline-block border border-gray-200 py-2 px-4 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
                                Contact Sales
                            </Link>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">FAQ</h2>
                        <div className="space-y-3 text-gray-700 text-sm">
                            <div>
                                <strong>Is this legal?</strong>
                                <p className="text-gray-600">Yes. All content is simulated and intended for education and training only.</p>
                            </div>
                            <div>
                                <strong>Will my real data be used?</strong>
                                <p className="text-gray-600">No. Use anonymized or provided test data. Nothing is sent to external institutions.</p>
                            </div>
                            <div>
                                <strong>Who should use this?</strong>
                                <p className="text-gray-600">Individuals, families, and organizations wanting to increase scam awareness and response skills.</p>
                            </div>
                        </div>
                    </section>

                    <div className="mt-6">
                        <p className="text-sm text-gray-600">All training uses simulated test data only. This site is for education and awareness.</p>
                    </div>
                </div>
            </main>

            {/* <Footer /> */}
        </div>
    );
};

export default Landing;
