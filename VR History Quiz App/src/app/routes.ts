import { createBrowserRouter } from "react-router";
import { HomeScreen } from "./components/HomeScreen";
import { LoginRegister } from "./components/LoginRegister";
import { Dashboard } from "./components/Dashboard";
import { EraSelection } from "./components/EraSelection";
import { QuizInterface } from "./components/QuizInterface";
import { ScoreSummary } from "./components/ScoreSummary";
import { Leaderboard } from "./components/Leaderboard";
import { About } from "./components/About";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeScreen,
  },
  {
    path: "/login",
    Component: LoginRegister,
  },
  {
    path: "/dashboard",
    Component: Dashboard,
  },
  {
    path: "/era-selection",
    Component: EraSelection,
  },
  {
    path: "/quiz/:era",
    Component: QuizInterface,
  },
  {
    path: "/score",
    Component: ScoreSummary,
  },
  {
    path: "/leaderboard",
    Component: Leaderboard,
  },
  {
    path: "/about",
    Component: About,
  },
]);
