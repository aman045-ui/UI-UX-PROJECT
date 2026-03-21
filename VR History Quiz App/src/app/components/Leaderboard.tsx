import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { Trophy, Medal, Crown, Home, ArrowLeft } from "lucide-react";
import { getLeaderboard, User } from "../utils/storage";

export function Leaderboard() {
  const navigate = useNavigate();
  const [leaderboard, setLeaderboard] = useState<User[]>([]);

  useEffect(() => {
    const data = getLeaderboard();
    setLeaderboard(data);
  }, []);

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="w-8 h-8 text-yellow-400" />;
      case 2:
        return <Medal className="w-8 h-8 text-gray-400" />;
      case 3:
        return <Medal className="w-8 h-8 text-orange-600" />;
      default:
        return null;
    }
  };

  const getRankColor = (rank: number) => {
    switch (rank) {
      case 1:
        return "from-yellow-500/30 to-orange-500/30 border-yellow-400/50";
      case 2:
        return "from-gray-500/30 to-slate-500/30 border-gray-400/50";
      case 3:
        return "from-orange-500/30 to-red-500/30 border-orange-400/50";
      default:
        return "from-cyan-500/10 to-blue-500/10 border-cyan-400/30";
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 min-h-screen px-4 py-12">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-cyan-300 hover:text-cyan-100 mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>

          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring" }}
              className="inline-block mb-4"
            >
              <div className="p-6 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-full">
                <Trophy className="w-16 h-16 text-yellow-400" />
              </div>
            </motion.div>
            <h1 className="text-5xl text-white mb-2">Leaderboard</h1>
            <p className="text-cyan-100 text-lg">Top VR History Quiz Champions</p>
          </div>
        </div>

        {/* Leaderboard List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {leaderboard.map((user, index) => (
            <motion.div
              key={user.username}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`backdrop-blur-xl bg-gradient-to-r ${getRankColor(
                index + 1
              )} border-2 rounded-2xl p-6 shadow-xl`}
            >
              <div className="flex items-center gap-6">
                {/* Rank */}
                <div className="flex-shrink-0 w-16 text-center">
                  {getRankIcon(index + 1) || (
                    <span className="text-3xl text-cyan-400">#{index + 1}</span>
                  )}
                </div>

                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-3xl shadow-lg">
                    {user.avatar}
                  </div>
                </div>

                {/* User Info */}
                <div className="flex-grow">
                  <h3 className="text-2xl text-white mb-1">{user.username}</h3>
                  <div className="flex items-center gap-4 text-sm text-cyan-100">
                    <span>
                      {user.unlockHistory.length} Era{user.unlockHistory.length !== 1 ? "s" : ""}{" "}
                      Unlocked
                    </span>
                  </div>
                </div>

                {/* XP */}
                <div className="flex-shrink-0 text-right">
                  <p className="text-sm text-cyan-100 mb-1">Total XP</p>
                  <p className="text-3xl">
                    <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                      {user.xp}
                    </span>
                  </p>
                </div>
              </div>

              {/* Unlocked Eras */}
              {user.unlockHistory.length > 0 && (
                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="flex flex-wrap gap-2">
                    {user.unlockHistory.map((era) => (
                      <span
                        key={era}
                        className="px-3 py-1 bg-cyan-500/20 text-cyan-100 rounded-full text-xs"
                      >
                        {era === "egypt"
                          ? "Ancient Egypt"
                          : era === "medieval"
                          ? "Medieval Era"
                          : "Cold War"}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom Actions */}
        <div className="max-w-4xl mx-auto mt-12 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/dashboard")}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all duration-300"
          >
            <Home className="w-5 h-5" />
            Back to Dashboard
          </motion.button>
        </div>
      </div>
    </div>
  );
}
