import React from "react";
// import "./App.css";

import styled, { injectGlobal } from "styled-components";

// eslint-disable-next-line
injectGlobal`
  body {
    margin: 0;
    font-family: -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      Roboto,
      Helvetica,
      Arial,
      sans-serif,
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol";
    }
`;

const Card = styled.div`
  padding: 1.75rem;
  margin: .5rem;
  border-radius: 4px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
  color: white;

  background: ${props => (props.sex === "male" ? "#44bccc" : "#f973bc")};
`;

const Name = styled.h2`
  margin-top: 0;
  font-weight: 900;
  margin-bottom: .75rem;
`;

const Bio = styled.p`
  margin: 0;
  line-height: 1.5;
  strong {
    font-weight: 900;
  }
`;

const Person = props =>
  <Card sex={props.sex}>
    <Name>{props.name}</Name>
    <Bio>
      This <strong>{props.sex}</strong> is currently{" "}
      <strong>{props.age} years old</strong>.
    </Bio>
  </Card>;

const people = [
  { name: "Anna", sex: "female", age: 28 },
  { name: "John", sex: "male", age: 31 },
  { name: "Tim", sex: "male", age: 7 },
  { name: "Bella", sex: "female", age: 4 }
];

// the list of people
const App = () =>
  <div>
    {people.map((person, i) => {
      return (
        <Person name={person.name} age={person.age} sex={person.sex} key={i} />
      );
    })}
  </div>;

export default App;
