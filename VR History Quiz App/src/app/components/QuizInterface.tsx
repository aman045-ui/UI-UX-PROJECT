import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Timer, ArrowLeft } from "lucide-react";
import { quizData } from "../utils/quizData";
import { addXP, addUnlockHistory, updateLeaderboard, getUser } from "../utils/storage";

export function QuizInterface() {
  const navigate = useNavigate();
  const { era } = useParams<{ era: string }>();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);

  const questions = era ? quizData[era] || [] : [];
  const question = questions[currentQuestion];

  // Timer
  useEffect(() => {
    if (timeLeft > 0 && !showPopup) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !showPopup) {
      handleAnswer(-1); // Time's up, wrong answer
    }
  }, [timeLeft, showPopup]);

  const handleAnswer = (answerIndex: number) => {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(answerIndex);
    const correct = answerIndex === question.correctAnswer;
    setIsCorrect(correct);
    setShowPopup(true);

    if (correct) {
      setScore(score + 1);
    }

    // Auto advance after 2.5 seconds
    setTimeout(() => {
      setShowPopup(false);
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setTimeLeft(30);
      } else {
        // Quiz finished
        finishQuiz(correct ? score + 1 : score);
      }
    }, 2500);
  };

  const finishQuiz = (finalScore: number) => {
    const xpEarned = finalScore * 100;
    addXP(xpEarned);
    if (era) {
      addUnlockHistory(era);
    }
    
    const user = getUser();
    if (user) {
      updateLeaderboard(user);
    }

    navigate("/score", {
      state: { score: finalScore, total: questions.length, xp: xpEarned },
    });
  };

  if (!question) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <p className="text-white text-xl">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 min-h-screen px-4 py-8">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-8 flex justify-between items-center">
          <button
            onClick={() => navigate("/era-selection")}
            className="flex items-center gap-2 text-cyan-300 hover:text-cyan-100 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Exit Quiz
          </button>

          {/* Timer */}
          <div className="flex items-center gap-3 backdrop-blur-xl bg-white/10 border border-cyan-400/30 rounded-full px-6 py-3">
            <Timer className="w-6 h-6 text-cyan-400" />
            <span
              className={`text-2xl ${
                timeLeft <= 10 ? "text-red-400" : "text-white"
              }`}
            >
              {timeLeft}s
            </span>
          </div>

          <div className="text-white">
            Question {currentQuestion + 1}/{questions.length}
          </div>
        </div>

        {/* Question Card */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="backdrop-blur-xl bg-white/10 border border-cyan-400/30 rounded-2xl p-8 shadow-2xl mb-8"
            >
              <h2 className="text-3xl text-white mb-8">{question.question}</h2>

              {/* Answer Options */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {question.options.map((option, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: selectedAnswer === null ? 1.02 : 1 }}
                    whileTap={{ scale: selectedAnswer === null ? 0.98 : 1 }}
                    onClick={() => handleAnswer(index)}
                    disabled={selectedAnswer !== null}
                    className={`p-6 rounded-xl border-2 text-left transition-all duration-300 ${
                      selectedAnswer === index
                        ? index === question.correctAnswer
                          ? "bg-green-500/30 border-green-400"
                          : "bg-red-500/30 border-red-400"
                        : selectedAnswer !== null && index === question.correctAnswer
                        ? "bg-green-500/30 border-green-400"
                        : "bg-white/5 border-cyan-400/30 hover:bg-white/10 hover:border-cyan-400"
                    } ${selectedAnswer !== null ? "cursor-not-allowed" : "cursor-pointer"}`}
                  >
                    <span className="text-cyan-400 mr-3">
                      {["A", "B", "C", "D"][index]}.
                    </span>
                    <span className="text-white">{option}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Score Indicator */}
          <div className="text-center">
            <p className="text-cyan-100">
              Current Score: <span className="text-cyan-400 text-xl">{score}</span> /{" "}
              {currentQuestion + (selectedAnswer !== null ? 1 : 0)}
            </p>
          </div>
        </div>
      </div>

      {/* Popup Overlay */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`fixed inset-0 z-50 flex items-center justify-center ${
              isCorrect ? "bg-green-500/30" : "bg-red-500/30"
            } backdrop-blur-sm`}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="backdrop-blur-xl bg-white/10 border-2 border-white/30 rounded-3xl p-12 max-w-2xl mx-4 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
              >
                <h2
                  className={`text-5xl mb-4 ${
                    isCorrect ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {isCorrect ? "Sync Success!" : "Data Corruption!"}
                </h2>
              </motion.div>

              {isCorrect ? (
                <p className="text-white text-xl">
                  Excellent work! +100 XP earned
                </p>
              ) : (
                <div className="text-white">
                  <p className="text-xl mb-4">The correct answer was:</p>
                  <p className="text-2xl text-cyan-400 mb-4">
                    {question.options[question.correctAnswer]}
                  </p>
                  <p className="text-sm text-cyan-100">{question.explanation}</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
