import { createBrowserRouter } from "react-router";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Dashboard } from "./components/Dashboard";
import { CategorySelection } from "./components/CategorySelection";
import { Quiz } from "./components/Quiz";
import { Score } from "./components/Score";
import { Leaderboard } from "./components/Leaderboard";
import { About } from "./components/About";

export const router = createBrowserRouter([
  {
    path: "/",
    children: [
      { index: true, Component: Home },
      { path: "login", Component: Login },
      { path: "dashboard", Component: Dashboard },
      { path: "categories", Component: CategorySelection },
      { path: "quiz/:category", Component: Quiz },
      { path: "score", Component: Score },
      { path: "leaderboard", Component: Leaderboard },
      { path: "about", Component: About },
    ],
  },
]);
