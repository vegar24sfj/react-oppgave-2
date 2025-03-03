import { useState, useEffect } from "react";

const CatFacts = () => {
  const [facts, setFacts] = useState([]); // Bruker useState for å lagre kattfakta
  const [loading, setLoading] = useState(true); // Bruker useState for å håndtere lastestatus
  const [error, setError] = useState(null); // Bruker useState for feilstatus

  useEffect(() => {
    fetch("https://catfact.ninja/facts?limit=5")
      .then((response) => response.json())
      .then((data) => {
        setFacts(data.data); // Setter dataene fra API-et
        setLoading(false); // Endrer loading-status til false når data er hentet
      })
      .catch(() => {
        setError("Noe gikk galt. Prøv igjen senere."); // Feilhåndtering
        setLoading(false); // Setter loading til false selv om det er en feil
      });
  }, []); // Tom array som gjør at useEffect kjøres kun én gang ved mounting

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h3>Kattfakta</h3>
      <ul>
        {facts.map((fact, index) => (
          <li key={index}>{fact.fact}</li>
        ))}
      </ul>
    </div>
  );
};

export default CatFacts;
