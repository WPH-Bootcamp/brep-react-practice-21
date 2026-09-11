import { useCounterStore } from '../../stores/counterStore';
import { useShallow } from 'zustand/shallow';

function CounterDisplay() {
  //   const count = useCounterStore((state) => state.count);
  const { count, increment } = useCounterStore(
    useShallow((state) => ({
      count: state.count,
      increment: state.increment,
    }))
  );

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default CounterDisplay;
