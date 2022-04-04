import classes from "./Quote.module.css";
import { useEffect, useState } from "react";
import Button from "./Button";

const Quote = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [fade, setFade] = useState("in");

  useEffect(() => {
    fetchNewQuote();
  }, []);

  useEffect(() => {
    setFade("in");
  }, [author, quote]);

  const showNewQuote = () => {
    setFade("out");
    setTimeout(fetchNewQuote, 1500);
  };
  // we want to set fade out for 1 second
  // then we want to change data
  // then we want to fade it in

  const fetchNewQuote = () => {
    fetch("https://type.fit/api/quotes")
      .then((response) => {
        let res = response.json();
        console.log(res);
        return res;
      })
      .then((arr) => {
        let randomIndex = Math.floor(Math.random() * arr.length);
        setQuote(arr[randomIndex].text.trim());
        setAuthor(arr[randomIndex].author);
        console.log(arr[0]);
      })
      .catch((err) => {
        console.error("err:", err);
      });
  };

  const tweetContent = encodeURIComponent('"' + quote + '" ' + author);
  const quoteWrapper = `${classes.quote_wrapper} ${
    fade === "in" ? classes.fadeIn : classes.fadeOut
  }`;

  return (
    <div className={quoteWrapper}>
      <div className={classes.quote_wrapper_inner}>
        <p className={classes.quote_text}>
          <span className={classes.quote_marks}>" </span>
          {quote}
          <span className={classes.quote_marks}>"</span>
        </p>
        <p className={classes.quote_author}>- {author}</p>
        <div className={classes.quote_buttons}>
          <Button>
            <a
              href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${tweetContent}`}
              target="_blank"
              rel="noreferrer"
            >
              Tweet
            </a>
          </Button>
          <Button clicked={showNewQuote}>Click to see new quote</Button>
        </div>
      </div>
    </div>
  );
};

export default Quote;
