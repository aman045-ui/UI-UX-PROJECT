import { useNavigate } from "react-router";
import { Play, Trophy, BookOpen, Info, LogOut } from "lucide-react";
import { useEffect, useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Dashboard() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (!storedUsername) {
      navigate("/login");
    } else {
      setUsername(storedUsername);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("username");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 p-6 relative overflow-hidden">
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1705599017107-15ce6c54ab55?w=1920&q=80"
          alt="Dashboard Background"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/85 via-indigo-900/85 to-blue-900/85"></div>
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl text-white">Dashboard</h1>
            <p className="text-purple-200 mt-2">Welcome back, {username}!</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-purple-200 hover:text-white transition-colors"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <button
            onClick={() => navigate("/categories")}
            className="group bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all hover:scale-105 active:scale-95"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center">
                <Play className="w-8 h-8 text-white" />
              </div>
              <div className="text-left">
                <h3 className="text-2xl text-white">Start Quiz</h3>
                <p className="text-purple-200">Begin your journey</p>
              </div>
            </div>
          </button>

          <button
            onClick={() => navigate("/leaderboard")}
            className="group bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all hover:scale-105 active:scale-95"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <div className="text-left">
                <h3 className="text-2xl text-white">Leaderboard</h3>
                <p className="text-purple-200">Top players</p>
              </div>
            </div>
          </button>

          <button
            onClick={() => navigate("/categories")}
            className="group bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all hover:scale-105 active:scale-95"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <div className="text-left">
                <h3 className="text-2xl text-white">Categories</h3>
                <p className="text-purple-200">Choose your era</p>
              </div>
            </div>
          </button>

          <button
            onClick={() => navigate("/about")}
            className="group bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all hover:scale-105 active:scale-95"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center">
                <Info className="w-8 h-8 text-white" />
              </div>
              <div className="text-left">
                <h3 className="text-2xl text-white">About</h3>
                <p className="text-purple-200">Learn more</p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
