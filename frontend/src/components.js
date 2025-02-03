import { useState } from "react";

export const isAuthenticated = () => {
  const token = localStorage.getItem("access_token");
  return !!token;
};

export const getUserId = () => {
    const token = localStorage.getItem("access_token");
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      return payload.user_id;
    } catch (error) {
      console.error("Invalid token:", error);
      return null;
    }
} 

export const Grid = ({gridValues, setGridValues}) => {
    return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(9, 30px)",
        gridGap: "2px",
      }}
    >
      {Array(81).fill(0).map((_, index) => {
          const row = Math.floor(index / 9);
          const col = index % 9;

          const borderStyle = {
            borderTop:
              row % 3 === 0 ? "2px solid black" : "1px solid lightgray",
            borderLeft:
              col % 3 === 0 ? "2px solid black" : "1px solid lightgray",
            borderRight: col === 8 || col % 3 === 2 ? "2px solid black" : "",
            borderBottom: row === 8 || row % 3 === 2 ? "2px solid black" : "",
          };
          return (
            <input
              key={index}
              type = "number"
              min = "1"
              max = "9"
              value = {gridValues[row][col] || ""}
              onChange={(e) => {
                const newGrid = gridValues.map(row => [...row]);
                newGrid[row][col] = e.target.value? parseInt(e.target.value) : 0;
                setGridValues(newGrid);
              }}
              style={{
                width: "30px",
                height: "30px",
                textAlign: "center",
                ...borderStyle,
              }}
            />
          );
        })}
    </div>
  );
};
