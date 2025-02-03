import React, { useState } from "react";
import { API } from "../constants";
import { useQuery } from "@tanstack/react-query";
import { Grid } from "../components.js";
import { isAuthenticated, getUserId } from "../components.js";
import { solveSudoku } from "../solving.js";

const Solvemypuzzle = () => {
  const [gridValues, setGridValues] = useState(
    Array(9)
      .fill(0)
      .map(() => Array(9).fill(0))
  );

  const handleSolve = async () => {
    console.log(gridValues);
  
    if (isAuthenticated()) {
      console.log("This is running :)");
  
      const userId = getUserId();
      console.log("This is running 2 :)");
  
      try {
        const response = await fetch(`${API}puzzles/`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            initial_puzzle: gridValues,
            users: [userId],
          }),
        });
  
        if (!response.ok) {
          throw new Error(`API request failed with status: ${response.status}`);
        }
  
        console.log("This is running 3 :)");
  
        const data = await response.json();
        console.log("Solved Puzzle:", data);
  
        setGridValues(data.solved_puzzle);
      } catch (error) {
        console.error("Error solving puzzle:", error.message);
        console.error("Full error:", error);
      }
  
      console.log("This is running 4 :)");
    } else {
      setGridValues(solveSudoku(gridValues));
    }
  };
  
  

  return (
    <div>
      <h2>Solve My Puzzle</h2>
      <Grid gridValues={gridValues} setGridValues={setGridValues} />
      <button type="button" onClick={handleSolve}>
        Solve it!
      </button>
    </div>
  );
};

export default Solvemypuzzle;
