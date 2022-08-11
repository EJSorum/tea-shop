import './styles/App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Cart from './components/Cart';
import { useState } from 'react'

/*
The page has the following structure:

App
  -Header
  -Menu
    -MenuList
      -MenuMap
  -Cart
    -CartMap

Menu and Cart are in their own div called menuAndCart
MenuMap contains the .map method that renders each menu item in the array.
CartMap similarly renders the items in the cart.
The Cart component contains the Cart button.  When the button is clicked, the Cart box
appears and displays all items in the cart.
*/

function App() {
  const [cartItems, setCartItems] = useState([])
  const addToCart = (item) => {
    setCartItems([...cartItems, {...item}])

  }
  const removeFromCart = (item) => {
    setCartItems(cartItems.filter((x) => x.id !== item.id))
  }
  return (
    <div className='App'>
        <Header />
        <div className='menuAndCart'>
          <Menu addToCart={addToCart} />
          <Cart cartItems={cartItems} removeFromCart={removeFromCart}/>
        </div>
    </div>
  );
}

export default App;