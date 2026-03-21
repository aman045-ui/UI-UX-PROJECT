import { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { User, Lock, Sparkles } from "lucide-react";
import { setUser, getUser, updateLeaderboard } from "../utils/storage";

export function LoginRegister() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!username.trim()) {
      alert("Please enter a username");
      return;
    }

    const existingUser = getUser();
    
    if (isRegister || !existingUser) {
      // Create new user
      const newUser = {
        username: username.trim(),
        xp: 0,
        unlockHistory: [],
        avatar: "🎮",
      };
      setUser(newUser);
      updateLeaderboard(newUser);
    }
    
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          {/* Glassmorphism Card */}
          <div className="backdrop-blur-xl bg-white/10 border border-cyan-400/30 rounded-2xl shadow-2xl p-8">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-cyan-400 mr-2" />
              <h2 className="text-3xl text-white">
                {isRegister ? "Register" : "Login"}
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Username Field */}
              <div>
                <label className="block text-cyan-100 mb-2 text-sm">Username</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan-400" />
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-white/5 border border-cyan-400/30 rounded-lg text-white placeholder-cyan-300/50 focus:outline-none focus:border-cyan-400 transition-colors"
                    placeholder="Enter your username"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-cyan-100 mb-2 text-sm">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan-400" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-white/5 border border-cyan-400/30 rounded-lg text-white placeholder-cyan-300/50 focus:outline-none focus:border-cyan-400 transition-colors"
                    placeholder="Enter your password"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all duration-300"
              >
                {isRegister ? "Create Account" : "Login"}
              </motion.button>
            </form>

            {/* Toggle Register/Login */}
            <div className="mt-6 text-center">
              <button
                onClick={() => setIsRegister(!isRegister)}
                className="text-cyan-300 hover:text-cyan-100 text-sm underline underline-offset-4"
              >
                {isRegister
                  ? "Already have an account? Login"
                  : "Don't have an account? Register"}
              </button>
            </div>
          </div>

          {/* Back to Home */}
          <div className="mt-6 text-center">
            <button
              onClick={() => navigate("/")}
              className="text-cyan-300 hover:text-cyan-100 text-sm"
            >
              ← Back to Home
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
