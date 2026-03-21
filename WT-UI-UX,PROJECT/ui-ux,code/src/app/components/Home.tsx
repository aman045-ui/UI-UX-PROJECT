import { useNavigate } from "react-router";
import { Sparkles, VolumeX } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1660190366607-9b192135e0d3?w=1920&q=80"
          alt="VR Headset"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-indigo-900/80 to-blue-900/80"></div>
      </div>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 text-center px-6">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-blue-400 rounded-2xl flex items-center justify-center shadow-2xl transform rotate-6 hover:rotate-0 transition-transform">
              <Sparkles className="w-16 h-16 text-white" />
            </div>
          </div>
        </div>

        <h1 className="text-6xl text-white mb-4 tracking-tight">
          VR History Quiz Show
        </h1>
        <p className="text-xl text-purple-200 mb-12 max-w-md mx-auto">
          Step into the past and test your knowledge across the ages
        </p>

        <button
          onClick={() => navigate("/login")}
          className="bg-white text-purple-900 px-12 py-4 rounded-full hover:bg-purple-50 transition-all shadow-2xl hover:scale-105 active:scale-95"
        >
          Start Adventure
        </button>

        <div className="mt-16 flex justify-center gap-8 text-purple-300">
          <button className="hover:text-white transition-colors">
            <VolumeX className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
