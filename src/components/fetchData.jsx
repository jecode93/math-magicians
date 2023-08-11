import React, { useEffect, useState } from 'react';
// import { Axios } from 'axios';
import Quotes from './quotes';

export default function FetchData() {
  const [quote, setQuote] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const apiKey = 'lGdmxaApU87yDaz1n5zNbS6zBKQ4lFVdikwORfjk';
  const category = 'computers';
  useEffect(() => {
    setIsLoading(true);
    try {
      fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
        headers: {
          'X-Api-Key': apiKey,
        },
      })
        .then((response) => response.json())
        .then((json) => setQuote(json[0]))
        .then(() => setIsLoading(false));
    } catch (error) {
      setHasError(true);
    }
  }, []);

  if (hasError) return <div>Something went wrong!</div>;
  return (
    isLoading ? <div>Loading... </div> : <Quotes text={quote.quote} />
  );
}
