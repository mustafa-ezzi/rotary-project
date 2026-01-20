import { Link } from "react-router-dom";
import { Shield, Lock, Eye, AlertTriangle, Users, CheckCircle, ArrowRight, Zap, Target, TrendingUp } from "lucide-react";

const Landing = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            {/* Hero Section */}
            <main className="flex-grow">
                <div className="relative overflow-hidden">
                    {/* Animated background elements */}
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-700"></div>
                        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
                    </div>

                    <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
                        {/* Hero Content */}
                        <div className="max-w-6xl mx-auto text-center mb-16 sm:mb-24">
                            <div className="inline-flex items-center gap-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-4 sm:px-6 py-2 mb-6 sm:mb-8">
                                <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-purple-300" />
                                <span className="text-xs sm:text-sm text-purple-200 font-medium">Rotary Pakistan – Digital Safety Awareness Initiative
                                </span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4 sm:mb-6">
                                Learn to Stay Safe

                                <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                                    From Online Scams

                                </span>
                            </h1>

                            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 sm:mb-12 px-4">
                                Rotary Pakistan is on a mission to educate students, families, and communities about online scams, fraud, and digital risks.
                                Through real-life examples and safe simulations, we help you recognize red flags before it’s too late.

                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
                                <Link
                                    to="/bank-verification"
                                    className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-full text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-purple-500/50"
                                >
                                    Start Learning

                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <a
                                    href="#how"
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-full border border-white/20 transition-all duration-300"
                                >
                                    <Eye className="w-5 h-5" />
                                    See Awareness Demo

                                </a>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8 mt-12 sm:mt-20 max-w-4xl mx-auto px-4">
                                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-4 sm:p-6 border border-white/10">
                                    <div className="text-2xl sm:text-4xl font-bold text-purple-400 mb-2">98%</div>
                                    <div className="text-xs sm:text-sm text-gray-300">Individuals Educated Across Pakistan
                                    </div>
                                </div>
                                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-4 sm:p-6 border border-white/10">
                                    <div className="text-2xl sm:text-4xl font-bold text-blue-400 mb-2">15+</div>
                                    <div className="text-xs sm:text-sm text-gray-300">Real-Life Scam Examples</div>
                                </div>
                                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-4 sm:p-6 border border-white/10 col-span-2 sm:col-span-1">
                                    <div className="text-2xl sm:text-4xl font-bold text-pink-400 mb-2">15k+</div>
                                    <div className="text-xs sm:text-sm text-gray-300">Free Public Awareness Initiative</div>
                                </div>
                            </div>
                        </div>

                        {/* How It Works */}
                        <div id="how" className="max-w-6xl mx-auto mb-16 sm:mb-24 px-4">
                            <div className="text-center mb-12 sm:mb-16">
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
                                    How This Awareness <span className="text-purple-400">Program Works</span>
                                </h2>
                                <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
                                    A simple learning journey designed to build digital awareness and protect our communities.

                                </p>
                            </div>

                            <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
                                <div className="relative">
                                    <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-purple-500/30 text-center">
                                        <div className="bg-gradient-to-br from-purple-600 to-blue-600 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-xl sm:text-2xl font-bold text-white">
                                            1
                                        </div>
                                        <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Choose a Scenario
                                        </h3>
                                        <p className="text-sm sm:text-base text-gray-300">
                                            Explore examples like fake bank messages, WhatsApp scams, job frauds, and delivery scams common in Pakistan.

                                        </p>
                                    </div>
                                    <div className="hidden sm:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-purple-500 to-transparent"></div>
                                </div>

                                <div className="relative">
                                    <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-blue-500/30 text-center">
                                        <div className="bg-gradient-to-br from-blue-600 to-cyan-600 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-xl sm:text-2xl font-bold text-white">
                                            2
                                        </div>
                                        <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Learn Through Safe Interaction
                                        </h3>
                                        <p className="text-sm sm:text-base text-gray-300">
                                            All examples use fake data for education only. No real information is ever used or collected.

                                        </p>
                                    </div>
                                    <div className="hidden sm:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></div>
                                </div>

                                <div className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-pink-500/30 text-center">
                                    <div className="bg-gradient-to-br from-pink-600 to-purple-600 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-xl sm:text-2xl font-bold text-white">
                                        3
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Understand the Red Flags
                                    </h3>
                                    <p className="text-sm sm:text-base text-gray-300">
                                        See exactly where scams try to trick you and how you can avoid them in real life.

                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Demo Preview */}
                        <div className="max-w-5xl mx-auto mb-16 sm:mb-24 px-4">
                            <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 backdrop-blur-xl rounded-3xl p-6 sm:p-10 border border-orange-500/30">
                                <div className="flex items-center gap-3 mb-6 sm:mb-8">
                                    <div className="bg-orange-500/20 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center">
                                        <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400" />
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-white">Awareness Example: Can You Spot the Scam?
                                    </h3>
                                </div>

                                <p className="text-sm sm:text-base text-gray-300 mb-6">
                                    Below is a sample scam message similar to those many Pakistanis receive daily.
                                    This is only for educational purposes to help you stay alert.
                                </p>

                                <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-4 sm:p-6 mb-6">
                                    <div className="flex items-start gap-3 mb-4">
                                        <div className="bg-red-500/20 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <AlertTriangle className="w-4 h-4 text-red-400" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-xs sm:text-sm text-gray-400 mb-1">From: <span className="text-white font-medium break-all">no-reply@secure-banking-alert.com</span></p>
                                            <p className="text-xs sm:text-sm text-gray-400 mb-3">Subject: <span className="text-red-400 font-semibold">URGENT: Suspicious Activity Detected</span></p>
                                            <div className="bg-slate-800/50 rounded-lg p-3 sm:p-4 border border-slate-600">
                                                <p className="text-sm sm:text-base text-white mb-3">Dear Valued Customer,</p>
                                                <p className="text-sm sm:text-base text-gray-300 mb-3">
                                                    We detected unusual activity on your account. <span className="text-red-400 font-semibold">Your account will be suspended in 6 hours</span> unless you verify your identity immediately.
                                                </p>
                                                <p className="text-sm sm:text-base text-gray-300 mb-4">
                                                    Click below to verify and prevent account closure:
                                                </p>
                                                <button className="bg-red-600 hover:bg-red-700 text-white px-4 sm:px-6 py-2 rounded-lg text-sm font-semibold">
                                                    Verify Now →
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link
                                        to="/bank-verification"
                                        className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
                                    >
                                        <Eye className="w-5 h-5" />
                                        Learn From This Example

                                    </Link>
                                    <button className="flex-1 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold py-3 px-6 rounded-lg border border-white/20 transition-all duration-300">
                                        Show Me The Warning Signs

                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* For Teams */}
                        <div className="max-w-6xl mx-auto mb-16 sm:mb-24 px-4">
                            <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-indigo-500/20">
                                <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                                    <div>
                                        <div className="inline-flex items-center gap-2 bg-indigo-500/20 rounded-full px-4 py-2 mb-4 sm:mb-6">
                                            <Users className="w-4 h-4 text-indigo-300" />
                                            <span className="text-sm text-indigo-200 font-medium">Community Awareness Program
                                            </span>
                                        </div>
                                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                                            Educating Students, Families & Communities

                                        </h2>
                                        <p className="text-sm sm:text-base text-gray-300 mb-6 sm:mb-8">
                                            Rotary Pakistan works with schools, universities, youth groups, and local communities to promote digital safety awareness and reduce the impact of online scams.
                                        </p>
                                        <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                                            <li className="flex items-center gap-3 text-sm sm:text-base text-gray-300">
                                                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                                                Custom scenarios tailored to your industry
                                            </li>
                                            <li className="flex items-center gap-3 text-sm sm:text-base text-gray-300">
                                                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                                                Anonymous progress tracking and analytics
                                            </li>
                                            <li className="flex items-center gap-3 text-sm sm:text-base text-gray-300">
                                                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                                                Compliance reporting and certifications
                                            </li>
                                        </ul>
                                        <div className="flex flex-col sm:flex-row gap-4">
                                            <Link
                                                to="/teams"
                                                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-3 px-6 sm:px-8 rounded-lg"
                                            >
                                                View Awareness Programs

                                                <ArrowRight className="w-5 h-5" />
                                            </Link>
                                            <Link
                                                to="/contact"
                                                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold py-3 px-6 sm:px-8 rounded-lg border border-white/20"
                                            >
                                                Contact Rotary

                                            </Link>
                                        </div>
                                    </div>
                                    {/* <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-slate-700">
                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
                                                <span className="text-sm sm:text-base text-gray-300">Team Members Trained</span>
                                                <span className="text-lg sm:text-xl font-bold text-green-400">1,247</span>
                                            </div>
                                            <div className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
                                                <span className="text-sm sm:text-base text-gray-300">Scenarios Completed</span>
                                                <span className="text-lg sm:text-xl font-bold text-blue-400">8,921</span>
                                            </div>
                                            <div className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
                                                <span className="text-sm sm:text-base text-gray-300">Average Success Rate</span>
                                                <span className="text-lg sm:text-xl font-bold text-purple-400">94%</span>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>

                        {/* Features Section */}
                        <div className="max-w-7xl mx-auto mb-16 sm:mb-24 px-4">
                            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl p-8 sm:p-12 lg:p-16 border border-white/20">
                                <div className="text-center mb-12 sm:mb-16">
                                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
                                        What You’ll 
                                        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Learn Here</span>
                                    </h2>
                                    <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">
                                        Practical awareness to help you stay safe online in everyday life.

                                    </p>
                                </div>

                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-gradient-to-br from-green-500 to-emerald-500 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-base sm:text-lg font-bold text-white mb-2">Email Phishing</h3>
                                            <p className="text-sm text-gray-400">Spot fake emails from banks, delivery services, and government agencies</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-base sm:text-lg font-bold text-white mb-2">SMS Scams</h3>
                                            <p className="text-sm text-gray-400">Identify smishing attacks and malicious text messages</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-base sm:text-lg font-bold text-white mb-2">Voice Calls</h3>
                                            <p className="text-sm text-gray-400">Recognize vishing and fake tech support calls</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="bg-gradient-to-br from-yellow-500 to-orange-500 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-base sm:text-lg font-bold text-white mb-2">Fake Websites</h3>
                                            <p className="text-sm text-gray-400">Learn to verify URLs and detect spoofed login pages</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="bg-gradient-to-br from-red-500 to-pink-500 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-base sm:text-lg font-bold text-white mb-2">Social Media</h3>
                                            <p className="text-sm text-gray-400">Detect fake profiles, investment scams, and romance fraud</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="bg-gradient-to-br from-indigo-500 to-purple-500 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-base sm:text-lg font-bold text-white mb-2">Instant Feedback</h3>
                                            <p className="text-sm text-gray-400">Get detailed explanations after each scenario</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <Link
                                        to="/bank-verification"
                                        className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 sm:px-10 rounded-full text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
                                    >
                                        Start Learning & Stay Safe Online

                                        <ArrowRight className="w-5 h-5" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* How Scammers Operate Section */}
                        <div className="max-w-7xl mx-auto mb-16 sm:mb-24 px-4">
                            <div className="text-center mb-12 sm:mb-16">
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
                                    How Scammers <span className="text-red-400">Target You</span>
                                </h2>
                                <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">
                                    Understanding their tricks is your first step to staying protected.

                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                                {/* Tactic 1 */}
                                <div className="group bg-gradient-to-br from-red-500/10 to-orange-500/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-red-500/20 hover:border-red-500/40 transition-all duration-300 hover:transform hover:scale-105">
                                    <div className="bg-red-500/20 w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                                        <AlertTriangle className="w-6 h-6 sm:w-7 sm:h-7 text-red-400" />
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Urgency & Fear</h3>
                                    <p className="text-sm sm:text-base text-gray-300 mb-4">
                                        "Your account will be closed in 24 hours!" Scammers create panic to bypass your logical thinking and force quick decisions.
                                    </p>
                                    <div className="flex items-center gap-2 text-xs sm:text-sm text-red-400 font-semibold">
                                        <Target className="w-4 h-4" />
                                        <span>Pressure Tactics</span>
                                    </div>
                                </div>

                                {/* Tactic 2 */}
                                <div className="group bg-gradient-to-br from-yellow-500/10 to-amber-500/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 hover:transform hover:scale-105">
                                    <div className="bg-yellow-500/20 w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                                        <Eye className="w-6 h-6 sm:w-7 sm:h-7 text-yellow-400" />
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Authority Impersonation</h3>
                                    <p className="text-sm sm:text-base text-gray-300 mb-4">
                                        Fake emails from "banks," "government," or "tech support" with official-looking logos and language to build false trust.
                                    </p>
                                    <div className="flex items-center gap-2 text-xs sm:text-sm text-yellow-400 font-semibold">
                                        <Shield className="w-4 h-4" />
                                        <span>Identity Fraud</span>
                                    </div>
                                </div>

                                {/* Tactic 3 */}
                                <div className="group bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105">
                                    <div className="bg-purple-500/20 w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                                        <Zap className="w-6 h-6 sm:w-7 sm:h-7 text-purple-400" />
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Too Good To Be True</h3>
                                    <p className="text-sm sm:text-base text-gray-300 mb-4">
                                        "You've won $10,000!" or "Work from home, earn $500/day!" Unrealistic offers that exploit greed and desperation.
                                    </p>
                                    <div className="flex items-center gap-2 text-xs sm:text-sm text-purple-400 font-semibold">
                                        <TrendingUp className="w-4 h-4" />
                                        <span>False Promises</span>
                                    </div>
                                </div>

                                {/* Tactic 4 */}
                                <div className="group bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:transform hover:scale-105">
                                    <div className="bg-blue-500/20 w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                                        <Lock className="w-6 h-6 sm:w-7 sm:h-7 text-blue-400" />
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Data Harvesting</h3>
                                    <p className="text-sm sm:text-base text-gray-300 mb-4">
                                        Fake forms requesting passwords, SSN, credit cards, or OTPs. They build detailed profiles to steal your identity or money.
                                    </p>
                                    <div className="flex items-center gap-2 text-xs sm:text-sm text-blue-400 font-semibold">
                                        <AlertTriangle className="w-4 h-4" />
                                        <span>Information Theft</span>
                                    </div>
                                </div>

                                {/* Tactic 5 */}
                                <div className="group bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:transform hover:scale-105">
                                    <div className="bg-green-500/20 w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                                        <Users className="w-6 h-6 sm:w-7 sm:h-7 text-green-400" />
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Social Engineering</h3>
                                    <p className="text-sm sm:text-base text-gray-300 mb-4">
                                        Pretending to be a friend, colleague, or family member in distress. "I'm stranded, send money now!" exploits empathy.
                                    </p>
                                    <div className="flex items-center gap-2 text-xs sm:text-sm text-green-400 font-semibold">
                                        <Users className="w-4 h-4" />
                                        <span>Relationship Manipulation</span>
                                    </div>
                                </div>

                                {/* Tactic 6 */}
                                <div className="group bg-gradient-to-br from-pink-500/10 to-rose-500/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300 hover:transform hover:scale-105">
                                    <div className="bg-pink-500/20 w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                                        <Target className="w-6 h-6 sm:w-7 sm:h-7 text-pink-400" />
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Malicious Links</h3>
                                    <p className="text-sm sm:text-base text-gray-300 mb-4">
                                        URLs that look real but lead to fake login pages or install malware. One click can compromise your entire device.
                                    </p>
                                    <div className="flex items-center gap-2 text-xs sm:text-sm text-pink-400 font-semibold">
                                        <AlertTriangle className="w-4 h-4" />
                                        <span>Phishing Attacks</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="text-center text-sm text-gray-400 mt-12">
                            This platform is a public awareness initiative by Rotary Pakistan.
                            We do not collect real personal, financial, or sensitive data. All examples are for educational purposes only.
                        </p>

                    </div>
                </div>
            </main>
        </div>
    );
};

export default Landing;
