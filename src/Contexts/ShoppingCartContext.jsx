import { createContext, useContext, useState } from "react";
import products from '../data/data.json';
import { useLocalStorage } from "../Hooks/UseLocalStorage";

const ShoppingCartContext = createContext([]);

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
}

export const ShoppingCartProvider = ({children}) => {

  const [input, setInput] = useState('');
  const [cartItems, setCartItems] = useLocalStorage("storage", []);
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState(false);
  const [myId, setMyId] = useState(0);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  const viewOpen = (id) => {
    setView(true);
    setMyId(id);
  }

  const viewClose = () => setView(false);

  const filterByFirm = (firm) => {
    return cartItems.filter((item) => item.firm === firm);
  }

  const filteredList = products.filter((product) => {
    return product.name.toLowerCase().includes(input.toLowerCase());
  })

  const getQuantity = (id) => {
    return cartItems.find((item) => item.id == id)?.quantity || 0;
  }

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity, 0
  )

  const addItem = (id) => {
    setCartItems(currItem => {
      if (currItem.find(item => item.id === id) == null) {
        return [...currItem, { id, quantity: 1}];
      } else {
        return currItem.map((item) => {
          if (item.id === id) {
            return {...item, quantity: item.quantity + 1}
          } else {
            return item;
          }
        })
      }
    })
  }

  const subtractItem = (id) => {
    setCartItems(currItem => {
      if (currItem.find((item) => item.id === id)?.quantity === 1) {
        return currItem.filter(item => item.id !== id);
      } else {
        return currItem.map((item) => {
          if (item.id === id) {
            return {...item, quantity: item.quantity - 1}
          } else {
            return item;
          }
        })
      }
    })
  }

  const removeItem = (id) => {
    setCartItems(currItem => {
      return currItem.filter(item => item.id !== id);
    })
  }

  const removeAll = () => {
    setCartItems([]);
  }

  return (
    <ShoppingCartContext.Provider value={{
      
      input, setInput, filteredList,
      cartItems, setCartItems, 
      getQuantity, addItem,
      subtractItem, removeItem,
      isOpen, open, close, cartQuantity,
      removeAll,
      view, setView, viewOpen, viewClose,
      myId, setMyId,
      filterByFirm

      }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}