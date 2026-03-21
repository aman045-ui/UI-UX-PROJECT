import { useNavigate } from "react-router";
import { ArrowLeft, Sparkles, Target, Zap, Users } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  const navigate = useNavigate();

  const features = [
    {
      icon: Sparkles,
      title: "Immersive Experience",
      description: "Step into history with our VR-inspired interface",
    },
    {
      icon: Target,
      title: "Multiple Categories",
      description: "Test your knowledge across different historical periods",
    },
    {
      icon: Zap,
      title: "Timed Challenges",
      description: "Race against the clock for maximum excitement",
    },
    {
      icon: Users,
      title: "Compete Globally",
      description: "Compare your scores with players worldwide",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 p-6 relative overflow-hidden">
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1600081523138-0bae23488dea?w=1920&q=80"
          alt="About VR History"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-indigo-900/90 to-blue-900/90"></div>
      </div>
      <div className="max-w-4xl mx-auto relative z-10">
        <button
          onClick={() => navigate("/dashboard")}
          className="flex items-center gap-2 text-white hover:text-purple-200 transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Dashboard
        </button>

        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 mb-8">
          <h1 className="text-4xl text-white mb-4">About VR History Quiz Show</h1>
          <p className="text-purple-200 text-lg leading-relaxed">
            Embark on an educational adventure through time! VR History Quiz Show combines the excitement of virtual reality aesthetics with engaging historical trivia. Test your knowledge of ancient civilizations, medieval kingdoms, and modern history while competing with players from around the world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-blue-400 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl text-white mb-2">{feature.title}</h3>
                <p className="text-purple-200">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
          <h2 className="text-2xl text-white mb-4">How to Play</h2>
          <ol className="space-y-4 text-purple-200">
            <li className="flex gap-3">
              <span className="text-white">1.</span>
              <span>Choose a historical category that interests you</span>
            </li>
            <li className="flex gap-3">
              <span className="text-white">2.</span>
              <span>Answer questions within the time limit</span>
            </li>
            <li className="flex gap-3">
              <span className="text-white">3.</span>
              <span>Earn points for correct answers</span>
            </li>
            <li className="flex gap-3">
              <span className="text-white">4.</span>
              <span>Climb the leaderboard and become a history champion!</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
