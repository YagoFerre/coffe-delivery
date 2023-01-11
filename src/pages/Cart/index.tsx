import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'
import { CoffeeCard } from './components/CoffeeCard'
import { FormAddress } from './components/FormAddress'
import * as zod from 'zod'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  ButtonConfirm,
  CardContainer,
  CartContainer,
  CoffeSelectedContainer,
  PriceContent,
} from './styles'

const formValidation = zod.object({
  cep: zod.number().min(8, 'Informe seu CEP').max(9),
  street: zod.string().min(1, 'Informe seu Bairro'),
  number: zod.number().min(3, 'O número precisa ter no mínimo 3 caracteres'),
  complement: zod.string().optional(),
  district: zod.string().min(1, 'Informe seu município'),
  city: zod.string().min(1, 'Informe sua cidade'),
  state: zod.string().min(2, 'Informe sua UF'),
})

type FormData = zod.infer<typeof formValidation>

export function Cart() {
  const { cart, totalPrice } = useContext(CartContext)

  const newForm = useForm<FormData>({
    resolver: zodResolver(formValidation),
    defaultValues: {
      street: '',
      complement: '',
      district: '',
      city: '',
      state: '',
    },
  })

  const { handleSubmit, reset } = newForm

  function handleSubmitForm() {
    reset()
  }

  return (
    <CartContainer action="" onSubmit={handleSubmit(handleSubmitForm)}>
      <FormProvider {...newForm}>
        <FormAddress />
      </FormProvider>

      <CoffeSelectedContainer>
        <h2>Cafés selecionados</h2>
        <CardContainer>
          {cart.map((coffee) => (
            <CoffeeCard coffee={coffee} key={coffee.id} />
          ))}
          <PriceContent>
            <div>
              <p>Total de itens</p>
              <p>R$ {totalPrice.toFixed(2)}</p>
            </div>
            <div>
              <p>Entrega</p>
              <p>R$ 3.50</p>
            </div>
            <div>
              <h3>Total</h3>
              <h3>R$ {(totalPrice + 3.5).toFixed(2)}</h3>
            </div>
          </PriceContent>
          <NavLink to="/success">
            <ButtonConfirm type="submit" disabled={cart.length === 0}>
              CONFIRMAR PEDIDO
            </ButtonConfirm>
          </NavLink>
        </CardContainer>
      </CoffeSelectedContainer>
    </CartContainer>
  )
}
