import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { ArrowLeft, Trophy, Medal, Award } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface LeaderboardEntry {
  username: string;
  score: number;
  total: number;
  date: string;
}

export function Leaderboard() {
  const navigate = useNavigate();
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("leaderboard") || "[]");
    setLeaderboard(stored);
  }, []);

  const getIcon = (index: number) => {
    if (index === 0) return <Trophy className="w-6 h-6 text-yellow-400" />;
    if (index === 1) return <Medal className="w-6 h-6 text-gray-300" />;
    if (index === 2) return <Award className="w-6 h-6 text-orange-400" />;
    return <span className="w-6 h-6 flex items-center justify-center text-purple-200">{index + 1}</span>;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 p-6 relative overflow-hidden">
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1642104744809-14b986179927?w=1920&q=80"
          alt="Leaderboard Trophy"
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

        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center">
            <Trophy className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-4xl text-white">Leaderboard</h1>
            <p className="text-purple-200">Top performers</p>
          </div>
        </div>

        {leaderboard.length === 0 ? (
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20 text-center">
            <p className="text-purple-200 text-xl">No scores yet. Be the first to play!</p>
          </div>
        ) : (
          <div className="space-y-4">
            {leaderboard.map((entry, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {getIcon(index)}
                    <div>
                      <div className="text-white text-lg">{entry.username}</div>
                      <div className="text-purple-200">
                        {new Date(entry.date).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-white text-2xl">
                      {entry.score}/{entry.total}
                    </div>
                    <div className="text-purple-200">
                      {((entry.score / entry.total) * 100).toFixed(0)}%
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
