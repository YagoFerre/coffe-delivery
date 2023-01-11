import { createContext, ReactNode, useEffect, useState } from 'react'
import { products } from '../coffes'

export interface Products {
  id: number
  title: string
  subtitle: string
  image: string
  price: number
  type: string[]
  amount: number
}

export interface Cart {
  id: number
  title: string
  image: string
  price: number
  amount: number
}

interface CartContextType {
  coffee: Products[]
  cart: Cart[]
  totalPrice: number
  addItemToCart: (coffee: Products) => void
  removeItemToCart: (coffeeId: number) => void
  incrementAmount: (id: number) => void
  decrementAmount: (id: number) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [coffee, setCoffee] = useState<Products[]>([])
  const [cart, setCart] = useState<Cart[]>([])

  useEffect(() => {
    function loadCoffes() {
      const data = products.map((coffee) => ({
        ...coffee,
        amount: 0,
      }))

      setCoffee(data)
    }

    loadCoffes()
  }, [])

  function incrementAmount(id: number) {
    const newAmount = cart.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          amount: item.amount + 1,
        }
      } else {
        return item
      }
    })
    setCart(newAmount)
  }

  function decrementAmount(id: number) {
    const newAmount = cart.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          amount: item.amount - 1,
        }
      } else {
        return item
      }
    })
    setCart(newAmount)
  }

  function addItemToCart(coffee: Products) {
    const productExists = cart.findIndex((item) => {
      return item.id === coffee.id
    })

    if (productExists >= 0) {
      const newProduct = cart.map((item) => {
        if (coffee.id === item.id) {
          return {
            ...item,
            amount: item.amount + coffee.amount,
          }
        } else {
          return item
        }
      })
      setCart(newProduct)
    } else {
      setCart((state) => [...state, coffee])
    }
  }

  function removeItemToCart(coffeId: number) {
    const coffeeToRemove = cart.filter((coffee) => {
      return coffee.id !== coffeId
    })

    setCart(coffeeToRemove)
  }

  const totalPrice = cart.reduce(
    (total, current) => total + (current ? current.price * current.amount : 0),
    0,
  )

  return (
    <CartContext.Provider
      value={{
        coffee,
        cart,
        addItemToCart,
        incrementAmount,
        decrementAmount,
        totalPrice,
        removeItemToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
