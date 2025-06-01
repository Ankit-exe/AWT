import React, { useState } from "react";

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
    <div>
      <h1>Quotes</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="author"
          placeholder="Author" 
          required
        />
        <input 
          type="text" 
          name="text"
          placeholder="Quote" 
          required
        />
        <button type="submit">Add Quote</button>
      </form>

      <div className="quotes-list">
        {quotesList.map((quote) => (
          <div key={quote.id}>
            <h2>{quote.author}</h2>
            <p>{quote.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
