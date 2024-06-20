import React, { useState, useRef, useEffect } from 'react';

const Counter = ({ initialValue }) => {
  initialValue = 0
  const [count, setCount] = useState(initialValue);
  const directionRef = useRef(null);
  const previousDirectionRef = useRef(null);

  useEffect(() => {
    // Determina la direzione del cambiamento rispetto a initialValue
    if (count > initialValue) {
      directionRef.current = 'up';
    } else if (count < initialValue) {
      directionRef.current = 'down';
    } else {
      directionRef.current = null;
    }

    // Registra la direzione nella console solo se è diversa dalla precedente
    if (directionRef.current !== previousDirectionRef.current) {
      console.log('Direzione cambiata:', directionRef.current);
      previousDirectionRef.current = directionRef.current; // Aggiorna il riferimento alla direzione precedente
    }
  }, [count, initialValue]); // Dipendenze dell'effetto: count e initialValue

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div>
      <h2>Contatore: {count}</h2>
      <button onClick={increment}>Incrementa</button>
      <button onClick={decrement}>Decrementa</button>
    </div>
  );
}

export default Counter;