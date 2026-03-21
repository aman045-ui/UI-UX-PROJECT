import { useNavigate, useLocation } from "react-router";
import { motion } from "motion/react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Trophy, Home, RotateCcw, Award } from "lucide-react";

export function ScoreSummary() {
  const navigate = useNavigate();
  const location = useLocation();
  const { score = 0, total = 5, xp = 0 } = location.state || {};

  const percentage = Math.round((score / total) * 100);

  const data = [
    { name: "Correct", value: score },
    { name: "Incorrect", value: total - score },
  ];

  const COLORS = ["#22d3ee", "#64748b"];

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 min-h-screen px-4 py-12 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl w-full"
        >
          {/* Main Card */}
          <div className="backdrop-blur-xl bg-white/10 border border-cyan-400/30 rounded-3xl p-12 shadow-2xl text-center">
            {/* Trophy Icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="inline-block mb-6"
            >
              <div className="p-6 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-full">
                <Trophy className="w-16 h-16 text-yellow-400" />
              </div>
            </motion.div>

            <h1 className="text-4xl text-white mb-2">Quiz Complete!</h1>
            <p className="text-cyan-100 mb-8">Here's how you performed</p>

            {/* Chart */}
            <div className="mb-8">
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              
              {/* Percentage in center */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 }}
                className="-mt-44 mb-32"
              >
                <p className="text-6xl text-cyan-400">{percentage}%</p>
              </motion.div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="backdrop-blur-xl bg-cyan-500/10 border border-cyan-400/30 rounded-xl p-6">
                <p className="text-cyan-100 text-sm mb-1">Correct Answers</p>
                <p className="text-4xl text-white">
                  {score}/{total}
                </p>
              </div>
              <div className="backdrop-blur-xl bg-purple-500/10 border border-purple-400/30 rounded-xl p-6">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Award className="w-4 h-4 text-purple-400" />
                  <p className="text-purple-100 text-sm">Total Points Earned</p>
                </div>
                <p className="text-4xl">
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                    {xp} XP
                  </span>
                </p>
              </div>
            </div>

            {/* Performance Message */}
            <div className="mb-8">
              <p className="text-lg text-white">
                {percentage >= 80
                  ? "Outstanding! You're a true history expert! 🌟"
                  : percentage >= 60
                  ? "Great job! Keep exploring the past! 📚"
                  : "Good effort! Try another era to improve! 💪"}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/era-selection")}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all duration-300"
              >
                <RotateCcw className="w-5 h-5" />
                Try Another Era
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/dashboard")}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-cyan-400/30 text-cyan-100 rounded-xl hover:bg-white/20 transition-all duration-300"
              >
                <Home className="w-5 h-5" />
                Back to Dashboard
              </motion.button>
            </div>

            {/* Leaderboard Link */}
            <div className="mt-6">
              <button
                onClick={() => navigate("/leaderboard")}
                className="text-cyan-300 hover:text-cyan-100 underline underline-offset-4 text-sm"
              >
                View Leaderboard
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
