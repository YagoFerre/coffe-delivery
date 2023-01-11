import coffeImage from '../../assets/svg/image-coffe.svg'
import cart from '../../assets/svg/cart.svg'
import clock from '../../assets/svg/clock.svg'
import box from '../../assets/svg/box.svg'
import cup from '../../assets/svg/cup.svg'
import {
  CoffeItemContainer,
  CoffesItemContent,
  Icon,
  ImageBox,
  InconsContainer,
  IntroContainer,
  IntroContent,
  Subtitle,
  Title,
} from './styles'
import { CoffeeItem } from './components/CoffeeItem'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Home() {
  const { coffee } = useContext(CartContext)

  return (
    <>
      <IntroContainer>
        <IntroContent>
          <h1>
            Encontre o café perfeito <br />
            para qualquer hora do dia
          </h1>
          <Subtitle>
            Com o Coffe Delivery você recebe seu café onde estiver, a <br />
            qualquer hora
          </Subtitle>

          <InconsContainer>
            <Icon>
              <img src={cart} alt="" />
              <p>Compra simples e segura</p>
            </Icon>
            <Icon>
              <ImageBox src={box} alt="" />
              <p>Embalagem mantém o café intacto</p>
            </Icon>
            <Icon>
              <img src={clock} alt="" />
              <p>Entrega rápida e rastreada</p>
            </Icon>
            <Icon>
              <img src={cup} alt="" />
              <p>O café chega fresquinho até você</p>
            </Icon>
          </InconsContainer>
        </IntroContent>

        <img src={coffeImage} alt="" />
      </IntroContainer>

      <CoffeItemContainer>
        <Title>Nossos cafés</Title>

        <CoffesItemContent>
          {coffee.map((coffee) => (
            <CoffeeItem key={coffee.id} coffee={coffee} />
          ))}
        </CoffesItemContent>
      </CoffeItemContainer>
    </>
  )
}
