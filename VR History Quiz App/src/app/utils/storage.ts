// Local storage utilities for managing user data and game state

export interface User {
  username: string;
  xp: number;
  unlockHistory: string[];
  avatar: string;
}

export interface QuizResult {
  era: string;
  score: number;
  totalQuestions: number;
  date: string;
}

export const getUser = (): User | null => {
  const userStr = localStorage.getItem("vrQuizUser");
  return userStr ? JSON.parse(userStr) : null;
};

export const setUser = (user: User): void => {
  localStorage.setItem("vrQuizUser", JSON.stringify(user));
};

export const addXP = (xpToAdd: number): void => {
  const user = getUser();
  if (user) {
    user.xp += xpToAdd;
    setUser(user);
  }
};

export const addUnlockHistory = (era: string): void => {
  const user = getUser();
  if (user && !user.unlockHistory.includes(era)) {
    user.unlockHistory.push(era);
    setUser(user);
  }
};

export const getLeaderboard = (): User[] => {
  const leaderboardStr = localStorage.getItem("vrQuizLeaderboard");
  if (!leaderboardStr) {
    // Initialize with mock data
    const mockLeaderboard: User[] = [
      { username: "QuantumExplorer", xp: 4500, unlockHistory: ["egypt", "medieval", "coldwar"], avatar: "🌟" },
      { username: "TimeTraveler88", xp: 3800, unlockHistory: ["egypt", "medieval"], avatar: "⏰" },
      { username: "HistoryBuff", xp: 3200, unlockHistory: ["egypt", "coldwar"], avatar: "📚" },
      { username: "VRMaster", xp: 2900, unlockHistory: ["medieval"], avatar: "🎮" },
      { username: "ChronoSeeker", xp: 2400, unlockHistory: ["egypt"], avatar: "🔮" },
    ];
    localStorage.setItem("vrQuizLeaderboard", JSON.stringify(mockLeaderboard));
    return mockLeaderboard;
  }
  return JSON.parse(leaderboardStr);
};

export const updateLeaderboard = (user: User): void => {
  let leaderboard = getLeaderboard();
  const existingIndex = leaderboard.findIndex((u) => u.username === user.username);
  
  if (existingIndex !== -1) {
    leaderboard[existingIndex] = user;
  } else {
    leaderboard.push(user);
  }
  
  leaderboard.sort((a, b) => b.xp - a.xp);
  localStorage.setItem("vrQuizLeaderboard", JSON.stringify(leaderboard));
};
