import { CounterDisplay, CounterControls } from './components/1-counter-demo';
import { Switcher } from './components/2-theme-demo';
import { Profile } from './components/3-auth-demo/';
import { Cart } from './components/4-cart-demo';

export default function App() {
  return (
    <div>
      <h1>Class 21 - Zustand</h1>
      <CounterDisplay />
      <CounterControls />

      <Switcher />

      <Profile />

      <Cart />
    </div>
  );
}
