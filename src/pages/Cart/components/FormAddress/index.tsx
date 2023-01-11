import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import {
  FormAndPaymentContainer,
  AddressText,
  CepInput,
  StreetInput,
  NumberInput,
  ComplementInput,
  DistrictInput,
  CityInput,
  StateInput,
  PaymentContainer,
  PaymentText,
  PaymentButtonContainer,
  Form,
  ButtonCredit,
  ButtonDebit,
  ButtonMoney,
} from './styles'

export function FormAddress() {
  const [select, setSelect] = useState('')
  const { register } = useFormContext()

  return (
    <FormAndPaymentContainer>
      <h2>Complete seu pedido</h2>
      <Form>
        <AddressText>
          <MapPinLine size={22} />
          <p>
            <span>Endereço de Entrega</span> <br />
            Informe o endereço onde deseja receber seu pedido
          </p>
        </AddressText>
        <CepInput
          type="number"
          placeholder="CEP"
          {...register('cep')}
          id="cep"
        />{' '}
        <br />
        <StreetInput
          id="street"
          type="text"
          placeholder="Rua"
          {...register('street')}
        />{' '}
        <br />
        <NumberInput
          id="number"
          type="number"
          placeholder="Número"
          {...register('number')}
        />
        <ComplementInput
          id="complement"
          type="text"
          placeholder="Complemento"
          {...register('complement')}
        />
        <br />
        <DistrictInput
          id="district"
          type="text"
          placeholder="Bairro"
          {...register('district')}
        />
        <CityInput
          type="text"
          placeholder="Cidade"
          {...register('city')}
          id="city"
        />
        <StateInput
          type="text"
          placeholder="UF"
          {...register('state')}
          id="state"
        />
      </Form>

      <PaymentContainer>
        <PaymentText>
          <CurrencyDollar size={22} />
          <p>
            <span>Pagamento</span> <br />O pagamento é feito na entrega. Escolha
            a forma que deseja pagar
          </p>
        </PaymentText>

        <PaymentButtonContainer>
          <ButtonCredit
            type="button"
            isSelected={select === 'credit'}
            onClick={() => {
              setSelect('credit')
            }}
            activeColor="creditColor"
          >
            <CreditCard size={16} />
            CARTÃO DE CRÉDITO
          </ButtonCredit>

          <ButtonDebit
            type="button"
            isSelected={select === 'debit'}
            onClick={() => {
              setSelect('debit')
            }}
            activeColor="debitColor"
          >
            <Bank size={16} />
            CARTÃO DE DÉBITO
          </ButtonDebit>

          <ButtonMoney
            type="button"
            isSelected={select === 'money'}
            onClick={() => {
              setSelect('money')
            }}
            activeColor="moneyColor"
          >
            <Money size={16} />
            DINHEIRO
          </ButtonMoney>
        </PaymentButtonContainer>
      </PaymentContainer>
    </FormAndPaymentContainer>
  )
}
