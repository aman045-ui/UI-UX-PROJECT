import { useNavigate } from "react-router";
import { ArrowLeft, Crown, Castle, Rocket } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function CategorySelection() {
  const navigate = useNavigate();

  const categories = [
    {
      id: "ancient",
      name: "Ancient History",
      description: "Explore civilizations of antiquity",
      icon: Crown,
      gradient: "from-amber-400 to-orange-500",
      image: "https://images.unsplash.com/photo-1705598931001-d2b3985f7460?w=800&q=80",
    },
    {
      id: "medieval",
      name: "Medieval",
      description: "Knights, castles, and kingdoms",
      icon: Castle,
      gradient: "from-slate-400 to-gray-600",
      image: "https://images.unsplash.com/photo-1600081522821-b6a482861e45?w=800&q=80",
    },
    {
      id: "modern",
      name: "Modern",
      description: "Industrial revolution to present",
      icon: Rocket,
      gradient: "from-cyan-400 to-blue-500",
      image: "https://images.unsplash.com/photo-1563195416-6fa1b3187194?w=800&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 p-6 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/95 via-indigo-900/95 to-blue-900/95"></div>
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <button
          onClick={() => navigate("/dashboard")}
          className="flex items-center gap-2 text-white hover:text-purple-200 transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Dashboard
        </button>

        <h1 className="text-4xl text-white mb-4">Choose Your Era</h1>
        <p className="text-purple-200 mb-12">Select a category to begin your quiz</p>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => navigate(`/quiz/${category.id}`)}
                className="group relative bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all hover:scale-105 active:scale-95"
              >
                <ImageWithFallback
                  src={category.image}
                  alt={category.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity"
                />
                <div className="relative p-8">
                  <div className={`w-20 h-20 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl text-white mb-2">{category.name}</h3>
                  <p className="text-purple-200">{category.description}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
