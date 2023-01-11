import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useContext, useState } from 'react'
import { CartContext, Products } from '../../../../contexts/CartContext'
import {
  ButtonCart,
  ButtonIncrementContainer,
  CoffeButtonsContainer,
  CoffeItemContainer,
  CoffeItemContent,
} from './styles'

interface CoffeItemProps {
  coffee: Products
}

export function CoffeeItem({ coffee }: CoffeItemProps) {
  const { addItemToCart } = useContext(CartContext)
  const [amount, setAmount] = useState(0)

  function handleIncrementAmount() {
    setAmount(amount + 1)
  }

  function handleDecrementAmount() {
    if (amount > 0) {
      setAmount(amount - 1)
    }
  }

  function handleAddCoffeeToCart() {
    const addNewCoffee = { ...coffee, amount }
    addItemToCart(addNewCoffee)
    setAmount(0)
  }

  return (
    <CoffeItemContainer>
      <CoffeItemContent>
        <img src={coffee.image} alt="" />
        <div>
          {coffee.type.map((item) => (
            <span key={item + coffee.id}>{item}</span>
          ))}
        </div>

        <h2>{coffee.title}</h2>
        <p>{coffee.subtitle}</p>
      </CoffeItemContent>
      <CoffeButtonsContainer>
        <strong>R$ {coffee.price.toFixed(2)}</strong>

        <ButtonIncrementContainer>
          <button onClick={handleDecrementAmount}>
            <Minus weight="bold" size={14} />
          </button>
          <span> {amount} </span>
          <button onClick={handleIncrementAmount}>
            <Plus weight="bold" size={14} />
          </button>
        </ButtonIncrementContainer>

        <ButtonCart onClick={handleAddCoffeeToCart} disabled={amount === 0}>
          <ShoppingCart size={20} weight="fill" />
        </ButtonCart>
      </CoffeButtonsContainer>
    </CoffeItemContainer>
  )
}
