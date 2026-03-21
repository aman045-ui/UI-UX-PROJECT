import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { ArrowLeft, Clock, CheckCircle2, XCircle } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const quizData = {
  ancient: [
    {
      question: "Which Egyptian pharaoh built the Great Pyramid of Giza?",
      options: ["Tutankhamun", "Khufu", "Ramesses II", "Cleopatra"],
      correct: 1,
    },
    {
      question: "What year did the Roman Empire fall in the West?",
      options: ["476 AD", "410 AD", "395 AD", "509 AD"],
      correct: 0,
    },
    {
      question: "Who was the famous Greek philosopher who taught Alexander the Great?",
      options: ["Socrates", "Plato", "Aristotle", "Pythagoras"],
      correct: 2,
    },
    {
      question: "Which ancient wonder of the world still stands today?",
      options: ["Hanging Gardens of Babylon", "Great Pyramid of Giza", "Colossus of Rhodes", "Lighthouse of Alexandria"],
      correct: 1,
    },
    {
      question: "What was the capital of the ancient Persian Empire?",
      options: ["Babylon", "Persepolis", "Athens", "Memphis"],
      correct: 1,
    },
    {
      question: "Which civilization invented the wheel?",
      options: ["Egyptians", "Greeks", "Sumerians", "Romans"],
      correct: 2,
    },
    {
      question: "What was the name of the famous library in ancient Egypt?",
      options: ["Library of Alexandria", "Library of Babylon", "Library of Athens", "Library of Rome"],
      correct: 0,
    },
    {
      question: "Who was the first Roman Emperor?",
      options: ["Julius Caesar", "Augustus", "Nero", "Caligula"],
      correct: 1,
    },
    {
      question: "Which ancient civilization built Machu Picchu?",
      options: ["Aztec", "Maya", "Inca", "Olmec"],
      correct: 2,
    },
    {
      question: "What writing system did ancient Egyptians use?",
      options: ["Hieroglyphics", "Cuneiform", "Sanskrit", "Linear B"],
      correct: 0,
    },
    {
      question: "Which Greek city-state was known for its military culture?",
      options: ["Athens", "Sparta", "Corinth", "Thebes"],
      correct: 1,
    },
    {
      question: "Who was the last pharaoh of ancient Egypt?",
      options: ["Tutankhamun", "Ramesses II", "Cleopatra VII", "Nefertiti"],
      correct: 2,
    },
    {
      question: "What ancient structure was built to keep out invaders in China?",
      options: ["Forbidden City", "Great Wall", "Terracotta Army", "Summer Palace"],
      correct: 1,
    },
    {
      question: "Which ancient empire was ruled by Hammurabi?",
      options: ["Egyptian", "Babylonian", "Persian", "Assyrian"],
      correct: 1,
    },
    {
      question: "What was the name of the ancient Roman gladiator arena?",
      options: ["Pantheon", "Forum", "Colosseum", "Circus Maximus"],
      correct: 2,
    },
    {
      question: "Which Greek god was the king of the gods?",
      options: ["Apollo", "Poseidon", "Hades", "Zeus"],
      correct: 3,
    },
    {
      question: "What ancient civilization created the first known writing system?",
      options: ["Egyptians", "Sumerians", "Chinese", "Phoenicians"],
      correct: 1,
    },
    {
      question: "Who was the Macedonian king who conquered much of the known world?",
      options: ["Philip II", "Alexander the Great", "Darius I", "Xerxes"],
      correct: 1,
    },
    {
      question: "What was the ancient trade route connecting East and West called?",
      options: ["Silk Road", "Spice Route", "Amber Road", "Incense Route"],
      correct: 0,
    },
    {
      question: "Which Roman general famously crossed the Rubicon River?",
      options: ["Pompey", "Marc Antony", "Julius Caesar", "Scipio"],
      correct: 2,
    },
  ],
  medieval: [
    {
      question: "In what year did the Battle of Hastings take place?",
      options: ["1066", "1215", "1337", "1453"],
      correct: 0,
    },
    {
      question: "Which English king signed the Magna Carta?",
      options: ["Henry VIII", "Richard the Lionheart", "King John", "Edward I"],
      correct: 2,
    },
    {
      question: "What was the primary cause of the Hundred Years' War?",
      options: ["Religious differences", "Trade disputes", "Succession to the French throne", "Colonial expansion"],
      correct: 2,
    },
    {
      question: "Who was the French peasant girl who led armies during the Hundred Years' War?",
      options: ["Eleanor of Aquitaine", "Joan of Arc", "Marie Antoinette", "Catherine de Medici"],
      correct: 1,
    },
    {
      question: "What was the name of the series of religious wars fought in the medieval period?",
      options: ["Crusades", "Reconquista", "Inquisition", "Reformation"],
      correct: 0,
    },
    {
      question: "Which plague devastated Europe in the 14th century?",
      options: ["Spanish Flu", "Black Death", "Antonine Plague", "Smallpox"],
      correct: 1,
    },
    {
      question: "What was the feudal system's lowest social class called?",
      options: ["Knights", "Nobles", "Clergy", "Serfs"],
      correct: 3,
    },
    {
      question: "Which empire was ruled by Charlemagne?",
      options: ["Byzantine Empire", "Holy Roman Empire", "Ottoman Empire", "Carolingian Empire"],
      correct: 3,
    },
    {
      question: "What year did the Byzantine Empire fall to the Ottomans?",
      options: ["1204", "1453", "1492", "1517"],
      correct: 1,
    },
    {
      question: "Who wrote 'The Canterbury Tales' in the medieval period?",
      options: ["William Shakespeare", "Geoffrey Chaucer", "Thomas Malory", "Dante Alighieri"],
      correct: 1,
    },
    {
      question: "What was the name of the Islamic dynasty that ruled Spain?",
      options: ["Abbasid", "Umayyad", "Ottoman", "Safavid"],
      correct: 1,
    },
    {
      question: "Which Viking explorer is believed to have reached North America?",
      options: ["Eric the Red", "Leif Erikson", "Ragnar Lothbrok", "Harald Hardrada"],
      correct: 1,
    },
    {
      question: "What was the primary weapon of medieval knights?",
      options: ["Bow and arrow", "Sword and lance", "Crossbow", "Pike"],
      correct: 1,
    },
    {
      question: "Which city was the center of the Byzantine Empire?",
      options: ["Rome", "Athens", "Constantinople", "Alexandria"],
      correct: 2,
    },
    {
      question: "What was the Great Schism of 1054?",
      options: ["Split between Eastern and Western Christianity", "Muslim conquest of Spain", "Mongol invasions", "Viking raids"],
      correct: 0,
    },
    {
      question: "Who was the legendary king of Camelot?",
      options: ["King Arthur", "King Alfred", "King Richard", "King Edward"],
      correct: 0,
    },
    {
      question: "What architectural style is characterized by pointed arches and flying buttresses?",
      options: ["Romanesque", "Gothic", "Byzantine", "Renaissance"],
      correct: 1,
    },
    {
      question: "Which empire was founded by Genghis Khan?",
      options: ["Persian Empire", "Mongol Empire", "Ottoman Empire", "Chinese Empire"],
      correct: 1,
    },
    {
      question: "What was the main purpose of medieval monasteries?",
      options: ["Military training", "Trade centers", "Religious life and learning", "Royal residences"],
      correct: 2,
    },
    {
      question: "Which English king was known as the 'Lionheart'?",
      options: ["Richard I", "Henry V", "Edward I", "John"],
      correct: 0,
    },
  ],
  modern: [
    {
      question: "What year did World War I begin?",
      options: ["1912", "1914", "1916", "1918"],
      correct: 1,
    },
    {
      question: "Who was the first person to walk on the moon?",
      options: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "John Glenn"],
      correct: 1,
    },
    {
      question: "Which event triggered the start of World War II?",
      options: ["Pearl Harbor attack", "German invasion of Poland", "Assassination of Archduke Franz Ferdinand", "D-Day invasion"],
      correct: 1,
    },
    {
      question: "What year did the Berlin Wall fall?",
      options: ["1987", "1989", "1991", "1993"],
      correct: 1,
    },
    {
      question: "Who was the first female Prime Minister of the United Kingdom?",
      options: ["Angela Merkel", "Margaret Thatcher", "Theresa May", "Indira Gandhi"],
      correct: 1,
    },
    {
      question: "What was the name of the first artificial satellite launched into space?",
      options: ["Explorer 1", "Sputnik 1", "Apollo 1", "Vostok 1"],
      correct: 1,
    },
    {
      question: "Which country was the first to grant women the right to vote?",
      options: ["United States", "United Kingdom", "New Zealand", "France"],
      correct: 2,
    },
    {
      question: "What year did India gain independence from British rule?",
      options: ["1945", "1947", "1950", "1952"],
      correct: 1,
    },
    {
      question: "Who was the leader of the Soviet Union during World War II?",
      options: ["Vladimir Lenin", "Joseph Stalin", "Nikita Khrushchev", "Leon Trotsky"],
      correct: 1,
    },
    {
      question: "What was the Cold War?",
      options: ["A war fought in winter", "Nuclear war between USA and USSR", "Period of tension between USA and USSR", "Economic sanctions"],
      correct: 2,
    },
    {
      question: "Which ship sank on its maiden voyage in 1912?",
      options: ["Lusitania", "Titanic", "Britannic", "Olympic"],
      correct: 1,
    },
    {
      question: "What year did the United States declare independence?",
      options: ["1774", "1776", "1778", "1781"],
      correct: 1,
    },
    {
      question: "Who delivered the famous 'I Have a Dream' speech?",
      options: ["Malcolm X", "Martin Luther King Jr.", "Rosa Parks", "Nelson Mandela"],
      correct: 1,
    },
    {
      question: "What was the Manhattan Project?",
      options: ["Building project in New York", "Development of atomic bomb", "Space exploration program", "Economic recovery plan"],
      correct: 1,
    },
    {
      question: "Which country was NOT part of the Axis powers in World War II?",
      options: ["Germany", "Italy", "Japan", "Soviet Union"],
      correct: 3,
    },
    {
      question: "What year did the Cuban Missile Crisis occur?",
      options: ["1960", "1962", "1964", "1966"],
      correct: 1,
    },
    {
      question: "Who was the first President of the United States?",
      options: ["Thomas Jefferson", "John Adams", "George Washington", "Benjamin Franklin"],
      correct: 2,
    },
    {
      question: "What was apartheid?",
      options: ["Economic system", "System of racial segregation in South Africa", "Religious movement", "Political party"],
      correct: 1,
    },
    {
      question: "Which war was fought between North and South Korea?",
      options: ["Vietnam War", "Korean War", "Cold War", "Gulf War"],
      correct: 1,
    },
    {
      question: "What year did Nelson Mandela become President of South Africa?",
      options: ["1990", "1992", "1994", "1996"],
      correct: 2,
    },
  ],
};

export function Quiz() {
  const navigate = useNavigate();
  const { category } = useParams<{ category: string }>();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);

  const questions = quizData[category as keyof typeof quizData] || quizData.ancient;

  useEffect(() => {
    if (timeLeft === 0 && !showFeedback) {
      handleAnswerClick(-1);
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, showFeedback]);

  const handleAnswerClick = (answerIndex: number) => {
    if (showFeedback) return;

    setSelectedAnswer(answerIndex);
    setShowFeedback(true);

    const isCorrect = answerIndex === questions[currentQuestion].correct;
    if (isCorrect) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowFeedback(false);
        setTimeLeft(30);
      } else {
        localStorage.setItem("quizScore", String(score + (isCorrect ? 1 : 0)));
        localStorage.setItem("quizTotal", String(questions.length));
        navigate("/score");
      }
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 p-6 relative overflow-hidden">
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1705598931001-d2b3985f7460?w=1920&q=80"
          alt="Quiz Background"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-indigo-900/90 to-blue-900/90"></div>
      </div>
      <div className="max-w-4xl mx-auto relative z-10">
        <button
          onClick={() => navigate("/categories")}
          className="flex items-center gap-2 text-white hover:text-purple-200 transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>

        <div className="flex justify-between items-center mb-8">
          <div className="text-purple-200">
            Question {currentQuestion + 1} of {questions.length}
          </div>
          <div className="flex items-center gap-2 text-white bg-white/10 backdrop-blur-lg px-4 py-2 rounded-full">
            <Clock className="w-5 h-5" />
            <span>{timeLeft}s</span>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 mb-6">
          <h2 className="text-2xl text-white mb-8">
            {questions[currentQuestion].question}
          </h2>

          <div className="grid gap-4">
            {questions[currentQuestion].options.map((option, index) => {
              const isCorrect = index === questions[currentQuestion].correct;
              const isSelected = index === selectedAnswer;

              let bgColor = "bg-white/10 hover:bg-white/20";
              if (showFeedback) {
                if (isCorrect) {
                  bgColor = "bg-green-500/30 border-green-400";
                } else if (isSelected && !isCorrect) {
                  bgColor = "bg-red-500/30 border-red-400";
                }
              }

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(index)}
                  disabled={showFeedback}
                  className={`${bgColor} border border-white/30 rounded-xl p-4 text-white text-left transition-all hover:scale-102 active:scale-98 disabled:cursor-not-allowed`}
                >
                  <div className="flex items-center justify-between">
                    <span>{option}</span>
                    {showFeedback && isCorrect && (
                      <CheckCircle2 className="w-6 h-6 text-green-400" />
                    )}
                    {showFeedback && isSelected && !isCorrect && (
                      <XCircle className="w-6 h-6 text-red-400" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {showFeedback && (
          <div className={`text-center p-6 rounded-2xl ${selectedAnswer === questions[currentQuestion].correct ? "bg-green-500/20 text-green-300" : "bg-red-500/20 text-red-300"}`}>
            {selectedAnswer === questions[currentQuestion].correct ? (
              <div className="flex items-center justify-center gap-2">
                <CheckCircle2 className="w-8 h-8" />
                <span className="text-xl">Correct! Great job!</span>
              </div>
            ) : (
              <div className="flex items-center justify-center gap-2">
                <XCircle className="w-8 h-8" />
                <span className="text-xl">Try Again! The correct answer was: {questions[currentQuestion].options[questions[currentQuestion].correct]}</span>
              </div>
            )}
          </div>
        )}

        <div className="mt-4 bg-white/10 backdrop-blur-lg rounded-full h-2 overflow-hidden">
          <div
            className="bg-gradient-to-r from-purple-500 to-blue-500 h-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}
