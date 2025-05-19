import Navbar from "../componets/nav"
import React, { useEffect, useState } from 'react';

function Tak() {
  const [sponsors, setSponsors] = useState([]);

  useEffect(() => {
    const storedSponsors = JSON.parse(localStorage.getItem('sponsors')) || [];
    setSponsors(storedSponsors);
  }, []);

  return (
    <>
      <Navbar />
      <p>Børnelejren på Langeland takker alle, der på den ene eller anden måde, har støttet
        foreningens arbejde med at sende dårligt stillede børn på et ophold på Søgård Hovedgård
        - det være sig ved naturaliesponsorater eller økonomisk støtte fra støttemedlemmer,
        virksomhedssponsorer og donationer fra fonde.
        En særlig tak til:</p>
      <div>
   
        <ul>
          {sponsors.map((sponsor, index) => (
            <li key={index}>{sponsor.name}  {sponsor.amount} {sponsor.tier}  - DKK</li>
          ))}
        </ul>
      </div>

    </>
  )
}

export default Tak


