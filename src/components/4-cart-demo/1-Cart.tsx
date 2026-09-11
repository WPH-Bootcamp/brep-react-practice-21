import { useCartStore } from '../../stores/cartStore';

function Cart() {
  const items = useCartStore((state) => state.items);
  const itemsLength = useCartStore((state) => state.items.length);
  return (
    <div>
      <h2>Total Items dari Cart</h2>
      <ol>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button>Hapus</button>
          </li>
        ))}
      </ol>
      <p>Total : {itemsLength}</p>
    </div>
  );
}

export default Cart;
