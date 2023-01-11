import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import successImage from '../../assets/images/successImage.svg'
import {
  InfoContainer,
  LinearGradient,
  Local,
  OrderInfoBox,
  Payment,
  SuccessContainer,
  Time,
  TitleContent,
} from './styles'

export function Success() {
  return (
    <SuccessContainer>
      <InfoContainer>
        <TitleContent>
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </TitleContent>
        <LinearGradient>
          <OrderInfoBox>
            <Local>
              <div>
                <MapPin size={16} weight="fill" />
              </div>
              <p>
                Entrega em <strong> Rua João Daniel Martinelli, 102</strong>{' '}
                <br /> Farrapos - Porto Alegre, RS
              </p>
            </Local>
            <Time>
              <div>
                <Timer size={16} weight="fill" />
              </div>

              <p>
                Previsão de entrega <br />
                <strong>20 min - 30 min </strong>
              </p>
            </Time>
            <Payment>
              <div>
                <CurrencyDollar size={16} />
              </div>

              <p>
                Pagamento na entrega <br />
                <strong>Cartão de crédito </strong>
              </p>
            </Payment>
          </OrderInfoBox>
        </LinearGradient>
      </InfoContainer>

      <img src={successImage} alt="" />
    </SuccessContainer>
  )
}
