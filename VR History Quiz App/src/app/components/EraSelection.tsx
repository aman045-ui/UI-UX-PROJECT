import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";

const eras = [
  {
    id: "egypt",
    name: "Ancient Egypt",
    description: "3100 BCE - 30 BCE",
    image:
      "https://images.unsplash.com/photo-1606419598102-95ead4deaf4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwZWd5cHQlMjBweXJhbWlkcyUyMHNwaGlueHxlbnwxfHx8fDE3NzM5MDU5MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "from-yellow-500/30 to-orange-500/30",
    borderColor: "border-yellow-400/50",
  },
  {
    id: "medieval",
    name: "Medieval Knights",
    description: "5th - 15th Century",
    image:
      "https://images.unsplash.com/photo-1600081522821-b6a482861e45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpZXZhbCUyMGtuaWdodCUyMGFybW9yJTIwY2FzdGxlfGVufDF8fHx8MTc3MzkwNTkxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "from-gray-500/30 to-slate-600/30",
    borderColor: "border-gray-400/50",
  },
  {
    id: "coldwar",
    name: "Cold War Space Race",
    description: "1947 - 1991",
    image:
      "https://images.unsplash.com/photo-1771086951012-afcdab82cb8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFjZSUyMHJvY2tldCUyMGNvbGQlMjB3YXJ8ZW58MXx8fHwxNzczOTA1OTEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "from-blue-500/30 to-cyan-500/30",
    borderColor: "border-cyan-400/50",
  },
];

export function EraSelection() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/3 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 min-h-screen px-4 py-8">
        {/* Header */}
        <div className="max-w-6xl mx-auto mb-8">
          <button
            onClick={() => navigate("/dashboard")}
            className="flex items-center gap-2 text-cyan-300 hover:text-cyan-100 mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Dashboard
          </button>
          <h1 className="text-5xl text-white mb-2">Select Your Era</h1>
          <p className="text-cyan-100 text-lg">
            Choose a historical period to begin your VR quiz journey
          </p>
        </div>

        {/* Era Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {eras.map((era, index) => (
            <motion.div
              key={era.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              onClick={() => navigate(`/quiz/${era.id}`)}
              className="cursor-pointer group"
            >
              <div
                className={`backdrop-blur-xl bg-gradient-to-br ${era.color} border-2 ${era.borderColor} rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-cyan-500/50`}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url('${era.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  
                  {/* Era Name Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl text-white mb-1">{era.name}</h3>
                    <p className="text-cyan-100 text-sm">{era.description}</p>
                  </div>
                </div>

                {/* Action */}
                <div className="p-6">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300"
                  >
                    Start Quiz
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Info Text */}
        <div className="max-w-6xl mx-auto mt-12 text-center">
          <p className="text-cyan-100/70 text-sm">
            Each quiz contains 5 questions. Earn 100 XP per correct answer!
          </p>
        </div>
      </div>
    </div>
  );
}
