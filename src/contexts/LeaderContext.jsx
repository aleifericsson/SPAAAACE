import React, { createContext } from "react";
import { useGame } from "../hooks/useGame";

export const leaderContext = createContext([]);

export function LeaderContextProvider({ children }) {
  const { leaderboard } = useGame();

  return (
    <leaderContext.Provider value={leaderboard}>
      {children}
    </leaderContext.Provider>
  );
}
