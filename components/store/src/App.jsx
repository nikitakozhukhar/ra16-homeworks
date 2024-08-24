
import "./App.css";

import ShopItemClass from "./components/StoreCC/ShopItemClass";
import ShopItemFunc from "./components/StoreFC/ShopItemFunc";

const itemData = {
  brand: 'Tiger of Sweden',
  title: 'Leonard coat',
  description: 'Minimalistic coat in cotton-blend',
  descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
  price: 399,
  currency: '£'
}

export default function App() {
  return (
    <div className="container">
    <div className="background-element">
    </div>
    <div className="highlight-window">
      <div className='highlight-overlay'></div>
    </div>
    <div className="window">
      <ShopItemClass item={itemData} />;
      <ShopItemFunc item={itemData} />
    </div>
  </div>
  );
}

