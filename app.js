import React, { useState } from "react";
import ReactDOM from "react-dom";


const Total = ({ course }) => {
  const sum =
    course.parts[0].exercises +
    course.parts[1].exercises +
    course.parts[2].exercises;
  return <p>Number of exercises {sum}</p>;
};
const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
      {
        name: "total of exercises",
        exercises: {exercises[0] + exercises[1] + exercises[2]},
        id:4,
      },
    ],
  };

  return <Course course={course} />;
};

<App></App>;

export default App;
