import React, { useEffect, useState } from "react";
import "./quote.css";
import SocialOptions from "./SocialOptions";
import twitter from "./twitter.svg";
import tumblr from "./tumblr.svg";

const Quote = ({ handleColor, color }) => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = () => {
    let url = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        let dataQuotes = data.quotes; //array of quotes
        let randomNumber = Math.floor(Math.random() * dataQuotes.length); //generates random number
        let randomQuote = dataQuotes[randomNumber];
        //Update State and call parent handleColor() function
        setQuote(randomQuote.quote);
        setAuthor(randomQuote.author);
        handleColor();
      });
  };

  return (
    <div className="quote-box">
      <div className="quote">
        <p className="quote__text" style={{ color: "#" + color }}>
          {quote}
        </p>
        <p className="quote__author" style={{ color: "#" + color }}>
          - {author}
        </p>
        <div className="quote-box__bottom">
          <div className="quote-box__share">
            <SocialOptions src={twitter} color={color} />
            <SocialOptions src={tumblr} color={color} />
          </div>
          <button
            className="quote-box__button"
            onClick={getQuote}
            style={{ background: "#" + color }}
          >
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quote;
