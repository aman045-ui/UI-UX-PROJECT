import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { Trophy, History, Zap, LogOut, Crown } from "lucide-react";
import { getUser, User } from "../utils/storage";

export function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const currentUser = getUser();
    if (!currentUser) {
      navigate("/login");
    } else {
      setUser(currentUser);
    }
  }, [navigate]);

  if (!user) return null;

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 min-h-screen px-4 py-8">
        {/* Header */}
        <div className="max-w-6xl mx-auto mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl text-white mb-2">
                Welcome, <span className="text-cyan-400">{user.username}</span>
              </h1>
              <p className="text-cyan-100">Your VR History Dashboard</p>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-cyan-400/30 text-cyan-100 rounded-lg transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Current XP Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="backdrop-blur-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-2xl p-6 shadow-xl"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-cyan-100 text-sm mb-1">Current XP</p>
                <p className="text-4xl text-white">{user.xp}</p>
              </div>
              <div className="p-3 bg-cyan-500/20 rounded-xl">
                <Zap className="w-6 h-6 text-cyan-400" />
              </div>
            </div>
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${Math.min((user.xp / 5000) * 100, 100)}%` }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
              />
            </div>
            <p className="text-cyan-100 text-xs mt-2">Next level: 5000 XP</p>
          </motion.div>

          {/* Unlock History Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="backdrop-blur-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-2xl p-6 shadow-xl"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-purple-100 text-sm mb-1">Eras Unlocked</p>
                <p className="text-4xl text-white">{user.unlockHistory.length}/3</p>
              </div>
              <div className="p-3 bg-purple-500/20 rounded-xl">
                <History className="w-6 h-6 text-purple-400" />
              </div>
            </div>
            <div className="space-y-1">
              {["Ancient Egypt", "Medieval Era", "Cold War"].map((era, index) => (
                <div
                  key={era}
                  className={`text-xs px-2 py-1 rounded ${
                    user.unlockHistory.includes(
                      ["egypt", "medieval", "coldwar"][index]
                    )
                      ? "bg-purple-500/30 text-purple-100"
                      : "bg-white/5 text-gray-400"
                  }`}
                >
                  {era}
                  {user.unlockHistory.includes(["egypt", "medieval", "coldwar"][index]) &&
                    " ✓"}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Rank Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="backdrop-blur-xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-400/30 rounded-2xl p-6 shadow-xl"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-yellow-100 text-sm mb-1">Your Rank</p>
                <p className="text-4xl text-white">
                  {user.xp >= 4000 ? "Elite" : user.xp >= 2000 ? "Advanced" : "Novice"}
                </p>
              </div>
              <div className="p-3 bg-yellow-500/20 rounded-xl">
                <Crown className="w-6 h-6 text-yellow-400" />
              </div>
            </div>
            <p className="text-yellow-100 text-sm">
              {user.xp >= 4000
                ? "You're in the top tier!"
                : `${4000 - user.xp} XP until Elite rank`}
            </p>
          </motion.div>
        </div>

        {/* Main Action */}
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="backdrop-blur-xl bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 border border-cyan-400/30 rounded-3xl p-12 text-center shadow-2xl"
          >
            <Trophy className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
            <h2 className="text-4xl text-white mb-4">Ready to Explore History?</h2>
            <p className="text-cyan-100 mb-8 text-lg">
              Choose an era and test your knowledge in the VR portal
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/era-selection")}
              className="px-12 py-6 text-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all duration-300 border-2 border-cyan-400/30"
            >
              Enter Portal
            </motion.button>
          </motion.div>
        </div>

        {/* Quick Links */}
        <div className="max-w-6xl mx-auto mt-8 flex gap-4 justify-center">
          <button
            onClick={() => navigate("/leaderboard")}
            className="text-cyan-300 hover:text-cyan-100 underline underline-offset-4"
          >
            View Leaderboard
          </button>
          <span className="text-cyan-300">|</span>
          <button
            onClick={() => navigate("/about")}
            className="text-cyan-300 hover:text-cyan-100 underline underline-offset-4"
          >
            About
          </button>
        </div>
      </div>
    </div>
  );
}
