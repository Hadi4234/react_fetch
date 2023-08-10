import { useEffect, useState } from "react"

const Quote = () => {
  const[quote,setQuote]=useState("");

  useEffect(()=>{
   const fetchQuote = async()=>{
      const res= await fetch('https://api.quotable.io/random');
      const data = await res.json();
    setQuote(data);
    }  
    fetchQuote();
  },[1000]);

  return (
    <div>
      <h1>Get Quotes using fetch API</h1>
      <div>
        {quote?.content}
      </div>
    </div>
  )
}

export default Quote
