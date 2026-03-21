import { useState } from "react";
import { useNavigate } from "react-router";
import { User, Lock, ArrowLeft } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username && password) {
      localStorage.setItem("username", username);
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 p-6 relative overflow-hidden">
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1658808183854-97ed5e8632fb?w=1920&q=80"
          alt="VR Login"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-indigo-900/90 to-blue-900/90"></div>
      </div>
      <button
        onClick={() => navigate("/")}
        className="absolute top-6 left-6 text-white hover:text-purple-200 transition-colors flex items-center gap-2 z-20"
      >
        <ArrowLeft className="w-5 h-5" />
        Back
      </button>

      <div className="w-full max-w-md relative z-10">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
          <h2 className="text-3xl text-white mb-8 text-center">
            Welcome Back
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-purple-200 mb-2">Username</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-300" />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-white/20 border border-white/30 rounded-xl px-12 py-3 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  placeholder="Enter username"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-purple-200 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-300" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white/20 border border-white/30 rounded-xl px-12 py-3 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  placeholder="Enter password"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-xl hover:from-purple-600 hover:to-blue-600 transition-all shadow-lg hover:shadow-xl"
            >
              Login
            </button>
          </form>

          <div className="mt-6 text-center">
            <button className="text-purple-200 hover:text-white transition-colors">
              Don't have an account? <span className="underline">Register</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
