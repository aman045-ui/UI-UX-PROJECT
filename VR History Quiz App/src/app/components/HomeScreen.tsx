import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { Glasses } from "lucide-react";

export function HomeScreen() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background VR Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1760143769893-21e377b06a7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWUiUyMGhlYWRzZXQlMjBmdXR1cmlzdGljJTIwYmx1ZXxlbnwxfHx8fDE3NzM5MDU5MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
        }}
      />

      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            className="inline-block mb-6"
            animate={{
              rotateY: [0, 360],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Glasses className="w-24 h-24 text-cyan-400" />
          </motion.div>

          <h1 className="text-7xl mb-4 font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-transparent bg-clip-text">
              VR History Quiz
            </span>
          </h1>

          <p className="text-xl text-cyan-100 mb-12 max-w-2xl">
            Step into the past through virtual reality and test your knowledge across different eras
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/login")}
            className="px-12 py-6 text-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all duration-300 border-2 border-cyan-400/30"
          >
            Start Journey
          </motion.button>

          <div className="mt-8 flex gap-4 justify-center">
            <button
              onClick={() => navigate("/leaderboard")}
              className="text-cyan-300 hover:text-cyan-100 underline underline-offset-4"
            >
              Leaderboard
            </button>
            <span className="text-cyan-300">|</span>
            <button
              onClick={() => navigate("/about")}
              className="text-cyan-300 hover:text-cyan-100 underline underline-offset-4"
            >
              About
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
