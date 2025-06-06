import React, { useState } from "react";
import { Form } from "./Form";
import { Newform } from "./Newform";

export default function App() {
  const [quotesList, setQuotesList] = useState([]);


  function handleSubmit(e) {
    e.preventDefault();
    const author = e.target.author.value;
    const text = e.target.text.value;
    const newQuote = { id: quotesList.length + 1, author, text };
    setQuotesList([...quotesList, newQuote]);
    e.target.reset();
  }

  return (
    <>
    <Newform />
    </>
    // <div>
    //   <h1>Quotes</h1>
    //   <form onSubmit={handleSubmit}>
    //     <input 
    //       type="text" 
    //       name="author"
    //       placeholder="Author" 
    //       required
    //     />
    //     <input 
    //       type="text" 
    //       name="text"
    //       placeholder="Quote" 
    //       required
    //     />
    //     <button type="submit">Add Quote</button>
    //   </form>

    //   <div className="quotes-list">
    //     {quotesList.map((quote) => (
    //       <div key={quote.id}>
    //         <h2>{quote.author}</h2>
    //         <p>{quote.text}</p>
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
}
