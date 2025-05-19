import React, { useState } from 'react';
import Navbar from "../componets/nav"

function Sponsor() {
  const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [tier, setTier] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const sponsors = JSON.parse(localStorage.getItem('sponsors')) || [];
        sponsors.push({ name, amount, tier, email, address, phone });
        localStorage.setItem('sponsors', JSON.stringify(sponsors));
        setName('');
        setAmount('');
        setTier('');
        setEmail('');
        setAddress('');
        setPhone('');
    };
  const tiers = [
    { name: 'Børnesponsorat', minAmount: 4000 },
    { name: 'Lejrsponsorat', minAmount: 2000 },
    { name: 'Støtte til foreningen', minAmount: 1000 },
  ];

  return (
    <>
      <Navbar />
      <strong>Tilmeld som sponsor
        Tilmelding Som Sponsor</strong>
      <br />
      <p>Da det er meget individuelt, hvor meget en virksomhed kan og ønsker at støtte med, har vi
        opdelt støttemulighederne i 3 kategorier:
      </p>
      <br />
      <strong>Børnesponsorat
      </strong>
      <p>Hvis din virksomhed vælger at blive børnesponsor, dækker I omkostningerne for et
        navngivet barns ophold og transport til og fra Langeland. Prisen pr. barn varierer fra lejr til
        lejr, men vi har fastsat en gennemsnitspris på kr. 4.000,- pr. barn for et ophold. Denne pris
        inkluderer transport, forplejning, forsikring, udflugter, adgangsbilletter til udflugtsmålene,
        smågaver og slik til ét barn.</p>
      <br />
      <strong>Lejrsponsorat
      </strong>
      <p>For kr. 2.000,- kan virksomheden blive lejrsponsor og være med til at dække alle
        omkostningerne ved børnelejren, som bl.a. omfatter ejendommens drifts- og
        vedligeholdelsesomkostninger samt eventuelle ekstra udgifter omkring en lejr, der f.eks.
        kan være løn til specialuddannet personale.
      </p>
      <strong>Støtte til foreningen</strong>
      <p>Virksomheder, der ønsker at støtte foreningens arbejde med et mindre beløb, kan vælge
        at blive diplomsponsorer. Af administrative årsager skal der minimum støttes med kr.
        1.000,- for at man kan modtage et trykt diplom til ophængning i virksomheden, men alle
        støttebeløb - store som små - er naturligvis velkomne.
      </p>

      <div>
        <h1>Bliv sponsor</h1>
              <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="amount">Amount (DKK):</label>
                    <input
                        type="number"
                        id="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="tier">Select Tier:</label>
                    <select
                    
                        id="tier"
                        value={tier}
                        onChange={(e) => setTier(e.target.value)}
                        required
                    >
                        <option value="">--Select Tier--</option>
                        {tiers.map((t) => (
                            <option key={t.name} value={t.name}>
                                {t.name} (Min: {t.minAmount} DKK)
                            </option>
                        ))}
                    </select>
                </div>
            
                   <div>
                    <label htmlFor="amount">Email:</label>
                    <input
                        type="email"
                        id="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required
                    />
                </div>
                <input
                    type="text"
                    id="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Address"
                          required
                />
                <input

                    type="number"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone Number"
         required
                />
                <button type="submit" disabled={amount < tiers.find(t => t.name === tier)?.minAmount}>
                    Sign Up
                </button>
            </form>
      </div>
      ;</>
  );
};

export default Sponsor;






