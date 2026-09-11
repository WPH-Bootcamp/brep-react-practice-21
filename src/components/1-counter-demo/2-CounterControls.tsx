import { useCounterStore } from '../../stores/counterStore';

function CounterControls() {
  const increment = useCounterStore((state) => state.increment);

  const decrement = useCounterStore((state) => state.decrement);

  const reset = useCounterStore((state) => state.reset);
  const printDouble = useCounterStore((state) => state.printDouble);

  return (
    <div>
      <button onClick={decrement}>-</button>

      <button onClick={reset}>Reset</button>

      <button onClick={increment}>+</button>

      <button onClick={printDouble}>Print Console Double</button>
    </div>
  );
}

export default CounterControls;
