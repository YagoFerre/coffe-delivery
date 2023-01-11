import { ButtonCart, ButtonCity, CartCounter, HeaderContainer } from './styles'
import logo from '../../assets/svg/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Header() {
  const { cart } = useContext(CartContext)
  const totalItems = cart.length

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logo} alt="Logo Ignite" />
      </NavLink>

      <nav>
        <ButtonCity>
          <MapPin size={22} weight="fill" />
          Brasília, DF
        </ButtonCity>

        <NavLink to="/cart">
          <ButtonCart>
            <ShoppingCart size={22} weight="fill" />
            <CartCounter>{totalItems > 0 ? totalItems : 0}</CartCounter>
          </ButtonCart>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
