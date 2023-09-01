import { useEffect, useState } from 'react';

const Quotes = () => {
  const [quotes, setQuotes] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const API_KEY = 'Aqz84Xsb9ZWWvtIJkt1gpA==ic0A8u9hNy32yM4W';
  const URL = 'https://api.api-ninjas.com/v1/quotes';

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch(URL, {
          headers: {
            'X-Api-Key': API_KEY,
          },
        });
        const data = await response.json();
        setQuotes(data[0]);
        setLoading(false);
      } catch (error) {
        setError('Error Fetching quote');
        setLoading(false);
      }
    };
    fetchQuote();
  }, []);

  return (
    <div className="quotesContent">
      {loading && <p className="loadQuote" />}
      {!loading && !error && (
        <div>
          <p className="quoteStyle">
            &quot;
            {quotes.quote}
            &quot;
          </p>
          <p>
            -
            {quotes.author}
          </p>
        </div>
      )}
      {!loading && error && <p>{error}</p>}
    </div>
  );
};

export default Quotes;
