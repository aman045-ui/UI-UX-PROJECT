import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { Trophy, RotateCcw, Home } from "lucide-react";
import confetti from "canvas-confetti";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Score() {
  const navigate = useNavigate();
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const storedScore = parseInt(localStorage.getItem("quizScore") || "0");
    const storedTotal = parseInt(localStorage.getItem("quizTotal") || "3");
    setScore(storedScore);
    setTotal(storedTotal);

    const percentage = (storedScore / storedTotal) * 100;
    if (percentage >= 70) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }

    const username = localStorage.getItem("username") || "Player";
    const leaderboard = JSON.parse(localStorage.getItem("leaderboard") || "[]");
    leaderboard.push({ username, score: storedScore, total: storedTotal, date: new Date().toISOString() });
    leaderboard.sort((a: any, b: any) => b.score - a.score);
    localStorage.setItem("leaderboard", JSON.stringify(leaderboard.slice(0, 10)));
  }, []);

  const percentage = (score / total) * 100;
  const getMessage = () => {
    if (percentage >= 90) return "Outstanding!";
    if (percentage >= 70) return "Great Job!";
    if (percentage >= 50) return "Good Effort!";
    return "Keep Practicing!";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 p-6 relative overflow-hidden">
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1759701546980-1211be084c70?w=1920&q=80"
          alt="Trophy Winner"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-indigo-900/90 to-blue-900/90"></div>
      </div>
      <div className="max-w-md w-full relative z-10">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 text-center">
          <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Trophy className="w-12 h-12 text-white" />
          </div>

          <h1 className="text-4xl text-white mb-4">{getMessage()}</h1>

          <div className="mb-8">
            <div className="text-6xl text-white mb-4">
              {score} / {total}
            </div>
            <div className="text-2xl text-purple-200">
              {percentage.toFixed(0)}% Correct
            </div>
          </div>

          <div className="space-y-4">
            <button
              onClick={() => navigate("/categories")}
              className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-xl hover:from-purple-600 hover:to-blue-600 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-5 h-5" />
              Try Again
            </button>

            <button
              onClick={() => navigate("/dashboard")}
              className="w-full bg-white/10 border border-white/30 text-white py-3 rounded-xl hover:bg-white/20 transition-all flex items-center justify-center gap-2"
            >
              <Home className="w-5 h-5" />
              Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
