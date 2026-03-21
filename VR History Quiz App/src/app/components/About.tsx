import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, Code, Glasses, Zap, Database, Palette } from "lucide-react";

const techStack = [
  { name: "React", icon: Code, color: "text-cyan-400" },
  { name: "TypeScript", icon: Code, color: "text-blue-400" },
  { name: "Tailwind CSS", icon: Palette, color: "text-purple-400" },
  { name: "Motion", icon: Zap, color: "text-pink-400" },
  { name: "Recharts", icon: Database, color: "text-green-400" },
  { name: "React Router", icon: Glasses, color: "text-yellow-400" },
];

export function About() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 5,
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
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* Main Card */}
          <div className="backdrop-blur-xl bg-white/10 border border-cyan-400/30 rounded-3xl p-12 shadow-2xl">
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring" }}
                className="inline-block mb-6"
              >
                <Glasses className="w-20 h-20 text-cyan-400" />
              </motion.div>
              <h1 className="text-5xl text-white mb-4">VR History Quiz</h1>
              <p className="text-cyan-100 text-xl">
                An immersive journey through time powered by cutting-edge web technology
              </p>
            </div>

            {/* Project Description */}
            <div className="mb-12">
              <h2 className="text-2xl text-white mb-4">About the Project</h2>
              <div className="text-cyan-100 space-y-4">
                <p>
                  VR History Quiz is an interactive educational platform that combines virtual
                  reality aesthetics with historical knowledge testing. Users can travel through
                  different historical eras, answer challenging questions, and compete with others
                  on the global leaderboard.
                </p>
                <p>
                  This application features a modern glassmorphism design with neon blue accents,
                  smooth animations, and an engaging user experience that makes learning history
                  fun and interactive.
                </p>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mb-12">
              <h2 className="text-2xl text-white mb-6">Technology Stack</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="backdrop-blur-xl bg-white/5 border border-cyan-400/20 rounded-xl p-6 text-center hover:bg-white/10 transition-colors"
                  >
                    <tech.icon className={`w-10 h-10 ${tech.color} mx-auto mb-3`} />
                    <p className="text-white">{tech.name}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="mb-12">
              <h2 className="text-2xl text-white mb-6">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-cyan-100">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <div>
                    <h3 className="text-white mb-1">Multiple Historical Eras</h3>
                    <p className="text-sm">Ancient Egypt, Medieval Knights, Cold War Space Race</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <div>
                    <h3 className="text-white mb-1">XP & Progression System</h3>
                    <p className="text-sm">Earn points and unlock achievements</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <div>
                    <h3 className="text-white mb-1">Global Leaderboard</h3>
                    <p className="text-sm">Compete with players worldwide</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <div>
                    <h3 className="text-white mb-1">Timed Challenges</h3>
                    <p className="text-sm">Answer questions under pressure</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <div>
                    <h3 className="text-white mb-1">Glassmorphism UI</h3>
                    <p className="text-sm">Modern, immersive design aesthetic</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <div>
                    <h3 className="text-white mb-1">Smooth Animations</h3>
                    <p className="text-sm">Powered by Motion (Framer Motion)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Developer Info */}
            <div className="backdrop-blur-xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-400/30 rounded-2xl p-8 text-center">
              <h2 className="text-2xl text-white mb-4">Developer Information</h2>
              <div className="text-cyan-100 space-y-2">
                <p className="text-lg">
                  <span className="text-white">Project:</span> VR History Quiz
                </p>
                <p className="text-lg">
                  <span className="text-white">Version:</span> 1.0.0
                </p>
                <p className="text-lg">
                  <span className="text-white">Built with:</span> React + TypeScript + Tailwind CSS
                </p>
                <p className="text-sm mt-4 text-cyan-300">
                  Created as an educational web application demonstrating modern web development
                  practices
                </p>
              </div>
            </div>
          </div>

          {/* Back to Home */}
          <div className="mt-8 text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/")}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all duration-300"
            >
              Back to Home
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
