import { createContext, useContext, useState } from 'react';

const CreditCardContext = createContext([]);

export const useCreditCard = () => {
  return useContext(CreditCardContext);
}

export const CreditCardProvider = ({children}) => {

  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [cvv, setCvv] = useState('');

  const cardMAX = 16;
  const yearMAX = 4;
  const monthMAX = 2;
  const cvvMAX = 3;

  return (
    <CreditCardContext.Provider value={{
      name, setName,
      cardNumber, setCardNumber,
      year, setYear,
      month, setMonth,
      cvv, setCvv,
      cardMAX, yearMAX, monthMAX, cvvMAX
    }}>
      {children}
    </CreditCardContext.Provider>
  )
}
