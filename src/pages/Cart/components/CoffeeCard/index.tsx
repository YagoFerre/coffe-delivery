import { Minus, Plus, Trash } from 'phosphor-react'
import { Container, ButtonsContainer, PriceContainer } from './styles'

import { Cart, CartContext } from '../../../../contexts/CartContext'
import { useContext } from 'react'

interface CoffeeCardProps {
  coffee: Cart
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const { incrementAmount, decrementAmount, removeItemToCart } =
    useContext(CartContext)

  function handleIncrementAmount() {
    incrementAmount(coffee.id)
  }

  function handleDecrementAmount() {
    decrementAmount(coffee.id)
  }

  function handleRemoveItemToCart() {
    removeItemToCart(coffee.id)
  }

  return (
    <Container>
      <img src={coffee.image} alt="" />
      <div>
        <h1>{coffee.title}</h1>
        <ButtonsContainer>
          <div>
            <button
              type="button"
              onClick={handleDecrementAmount}
              disabled={coffee.amount === 0}
            >
              <Minus size={14} weight="bold" />
            </button>

            <span> {coffee.amount} </span>

            <button type="button" onClick={handleIncrementAmount}>
              <Plus size={14} weight="bold" />
            </button>
          </div>

          <button onClick={handleRemoveItemToCart}>
            <Trash size={16} /> REMOVER
          </button>
        </ButtonsContainer>
      </div>

      <PriceContainer>
        <p>R$ {coffee.price.toFixed(2)}</p>
      </PriceContainer>
    </Container>
  )
}
