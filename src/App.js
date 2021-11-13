import axios from "axios";
import { useState, useEffect } from "react";

import "./App.css";
import Quotebox from "./components/Quotebox";

function App() {
  const [theme, setTheme] = useState("#cc1b1b");
  const [quotes, setQuotes] = useState([]);
  const [currQuote, setCurrQuote] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
      );
      setQuotes(res.data.quotes);
      setCurrQuote(res.data.quotes[0]);
    };
    fetchData();
  }, []);
  return (
    <div className="App" style={{ backgroundColor: theme }}>
      <Quotebox
        quotes={quotes}
        currQuote={currQuote}
        setCurrQuote={setCurrQuote}
        theme={theme}
        setTheme={setTheme}
      />
    </div>
  );
}

export default App;
