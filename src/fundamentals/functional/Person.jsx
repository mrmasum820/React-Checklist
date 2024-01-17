import React from "react";

const Person = () => {
  const persons = [
    {
      id: 0,
      name: "Bruce",
      age: 28,
      email: "bruce@gmail.com",
      skill: "React js",
    },
    {
      id: 1,
      name: "Clark",
      age: 29,
      email: "clark@gmail.com",
      skill: "Angular js",
    },
    {
      id: 2,
      name: "Diana",
      age: 26,
      email: "diana@gmail.com",
      skill: "Vue js",
    },
  ];

  return (
    <div>
      {persons.map((person) => (
        <div key={person.id}>
          <h2>Hi, My name is {person.name}</h2>
          <p>I am {person.age} years old </p>
          <p>My email is {person.email}</p>
          <p>I know {person.skill}</p>
        </div>
      ))}
    </div>
  );
};

export default Person;
