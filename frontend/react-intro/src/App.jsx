import React from "react";
import { useState } from "react";


const Greet = (props) => {
  return <h1>Hello {props.name}</h1>;
};

const Quote = ({ text, author }) => {
  return (
    <h1>
      {text} - {author}
    </h1>
  );
};

const Quotes = () => {

  const [quotes, setQuotes] = useState([
    "The only way to do great work is to love what you do.",
    "The only way to do great work is to love what you do.",
    "The only way to do great work is to love what you do.",
  ]);
  
  return (
    <div>
      <h3>
        {quotes.map((quote,index) => (
         <Quote key={index} text={quote} author="Ankit" />
        ))}
      </h3>
    </div>
  );
};

export default function App() {
  return (
    <>
      <div>App</div>
      <Greet name="John" />
      <Quote text="Life is a journey." author="Ankit" />
      <Quotes />
    </>
  );
}
