// Quiz questions for different eras

export interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const quizData: Record<string, Question[]> = {
  egypt: [
    {
      question: "Which pharaoh is known for building the Great Pyramid of Giza?",
      options: ["Tutankhamun", "Khufu", "Ramses II", "Cleopatra"],
      correctAnswer: 1,
      explanation: "Khufu (also known as Cheops) commissioned the Great Pyramid around 2580-2560 BCE.",
    },
    {
      question: "What was the primary purpose of Egyptian mummification?",
      options: [
        "To preserve the body for the afterlife",
        "To study anatomy",
        "To prevent disease",
        "To honor enemies",
      ],
      correctAnswer: 0,
      explanation: "Egyptians believed preserving the body was essential for the soul's journey in the afterlife.",
    },
    {
      question: "What writing system did ancient Egyptians use?",
      options: ["Cuneiform", "Hieroglyphics", "Sanskrit", "Latin"],
      correctAnswer: 1,
      explanation: "Hieroglyphics combined logographic and alphabetic elements, used for over 3000 years.",
    },
    {
      question: "Which river was central to ancient Egyptian civilization?",
      options: ["Tigris", "Euphrates", "Nile", "Indus"],
      correctAnswer: 2,
      explanation: "The Nile River provided water, transportation, and fertile soil through annual flooding.",
    },
    {
      question: "Who was the last active pharaoh of ancient Egypt?",
      options: ["Nefertiti", "Hatshepsut", "Cleopatra VII", "Ankhesenamun"],
      correctAnswer: 2,
      explanation: "Cleopatra VII ruled until 30 BCE when Egypt became a Roman province.",
    },
  ],
  medieval: [
    {
      question: "What year did the Battle of Hastings take place?",
      options: ["1066", "1215", "1337", "1453"],
      correctAnswer: 0,
      explanation: "The Battle of Hastings in 1066 led to Norman conquest of England under William the Conqueror.",
    },
    {
      question: "What was the primary role of a medieval knight?",
      options: [
        "Trade merchant",
        "Mounted warrior in service to a lord",
        "Religious scholar",
        "Farmer",
      ],
      correctAnswer: 1,
      explanation: "Knights were armored cavalry who served lords in exchange for land and protection.",
    },
    {
      question: "Which document limited the power of the English king in 1215?",
      options: ["The Constitution", "Magna Carta", "Bill of Rights", "Declaration of Independence"],
      correctAnswer: 1,
      explanation: "Magna Carta established that everyone, including the king, was subject to the law.",
    },
    {
      question: "What was the Black Death?",
      options: [
        "A military campaign",
        "A famine",
        "A bubonic plague pandemic",
        "A political movement",
      ],
      correctAnswer: 2,
      explanation: "The Black Death (1347-1351) killed an estimated 75-200 million people in Eurasia.",
    },
    {
      question: "What were the Crusades primarily about?",
      options: [
        "Trade routes",
        "Religious wars for control of the Holy Land",
        "Scientific exploration",
        "Agricultural expansion",
      ],
      correctAnswer: 1,
      explanation: "The Crusades were military expeditions by European Christians to reclaim the Holy Land.",
    },
  ],
  coldwar: [
    {
      question: "When did the Cold War officially begin?",
      options: ["1939", "1945", "1950", "1960"],
      correctAnswer: 1,
      explanation: "The Cold War began shortly after World War II ended in 1945, lasting until 1991.",
    },
    {
      question: "Which Soviet satellite was the first to orbit Earth?",
      options: ["Luna 1", "Sputnik 1", "Vostok 1", "Salyut 1"],
      correctAnswer: 1,
      explanation: "Sputnik 1 launched on October 4, 1957, marking the start of the Space Age.",
    },
    {
      question: "What was the policy of 'containment' designed to prevent?",
      options: [
        "Nuclear proliferation",
        "The spread of communism",
        "Immigration",
        "Economic recession",
      ],
      correctAnswer: 1,
      explanation: "Containment was a US policy to prevent the spread of communism beyond existing boundaries.",
    },
    {
      question: "Which US President initiated the Apollo moon landing program?",
      options: ["Eisenhower", "Kennedy", "Johnson", "Nixon"],
      correctAnswer: 1,
      explanation: "JFK announced the goal of landing on the moon in 1961, achieved in 1969 under Nixon.",
    },
    {
      question: "What year did the Berlin Wall fall?",
      options: ["1985", "1987", "1989", "1991"],
      correctAnswer: 2,
      explanation: "The Berlin Wall fell on November 9, 1989, symbolizing the end of the Cold War.",
    },
  ],
};
