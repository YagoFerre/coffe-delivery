import styled from 'styled-components'

export const FormAndPaymentContainer = styled.div`
  max-width: 40rem;
  display: flex;
  flex-direction: column;
`

export const Form = styled.div`
  padding: 2.5rem;

  border-radius: 6px;
  background: ${(props) => props.theme['base-card']};
`

export const AddressText = styled.div`
  display: flex;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }

  p {
    color: ${(props) => props.theme['base-text']};
    line-height: 1.5rem;
    font-size: 0.875rem;
  }
  span {
    font-size: 1rem;
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 1.25rem;
  }
`

const baseInput = styled.input`
  border-radius: 4px;
  border: thin solid ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};
  background: ${(props) => props.theme['base-input']};

  padding: 0.75rem;

  ::placeholder {
    color: ${(props) => props.theme['base-label']};
  }

  &:focus {
    border-color: ${(props) => props.theme['yellow-dark']};
  }
`

export const CepInput = styled(baseInput)`
  width: 12.5rem;
  margin: 2rem 0 0;
`

export const StreetInput = styled(baseInput)`
  width: 35rem;
  margin: 1rem 0 0;
`

export const NumberInput = styled(baseInput)`
  width: 12.5rem;
  margin: 1rem 0.75rem 0 0;
`

export const ComplementInput = styled(baseInput)`
  width: 21.75rem;
  margin: 1rem 0 0;
`

export const DistrictInput = styled(baseInput)`
  width: 12.5rem;
  margin: 1rem 0.75rem 0 0;
`

export const CityInput = styled(baseInput)`
  width: 17.25rem;
  margin: 1rem 0.75rem 0 0;
`

export const StateInput = styled(baseInput)`
  width: 3.75rem;
  margin: 1rem 0 0;
`

export const PaymentContainer = styled.div`
  margin-top: 1rem;
  padding: 2.5rem;

  border-radius: 6px;
  background: ${(props) => props.theme['base-card']};
`

export const PaymentText = styled.div`
  display: flex;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme.purple};
  }

  p {
    color: ${(props) => props.theme['base-text']};
    line-height: 1.5rem;
    font-size: 0.875rem;
  }
  span {
    font-size: 1rem;
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 1.25rem;
  }
`

export const PaymentButtonContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`

interface ButtonProps {
  isSelected: boolean
  activeColor: 'creditColor' | 'debitColor' | 'moneyColor'
}

const colors = {
  creditColor: '#EBE5F9',
  debitColor: '#EBE5F9',
  moneyColor: '#EBE5F9',
  purpleDark: '#8047F8',
}

const baseButtonPayment = styled.button<ButtonProps>`
  padding: 1rem;
  border-radius: 6px;
  background: ${(props) =>
    props.isSelected ? colors[props.activeColor] : props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};
  font-size: 0.75rem;
  border: 1px solid ${(props) => (props.isSelected ? '#8047F8' : 'transparent')};

  display: flex;
  align-items: center;
  gap: 0.813rem;

  cursor: pointer;
  transition: 0.2s;

  svg {
    color: ${(props) => props.theme.purple};
  }

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }
`
export const ButtonCredit = styled.button<ButtonProps>`
  padding: 1rem;
  border-radius: 6px;
  background: ${(props) =>
    props.isSelected ? colors[props.activeColor] : props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};
  font-size: 0.75rem;
  border: 1px solid ${(props) => (props.isSelected ? '#8047F8' : 'transparent')};

  display: flex;
  align-items: center;
  gap: 0.813rem;

  cursor: pointer;
  transition: 0.2s;

  svg {
    color: ${(props) => props.theme.purple};
  }

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }
`

export const ButtonDebit = styled.button<ButtonProps>`
  padding: 1rem;
  border-radius: 6px;
  background: ${(props) =>
    props.isSelected ? colors[props.activeColor] : props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};
  font-size: 0.75rem;
  border: 1px solid ${(props) => (props.isSelected ? '#8047F8' : 'transparent')};

  display: flex;
  align-items: center;
  gap: 0.813rem;

  cursor: pointer;
  transition: 0.2s;

  svg {
    color: ${(props) => props.theme.purple};
  }

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }
`

export const ButtonMoney = styled.button<ButtonProps>`
  padding: 1rem;
  border-radius: 6px;
  background: ${(props) =>
    props.isSelected ? colors[props.activeColor] : props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};
  font-size: 0.75rem;
  border: 1px solid ${(props) => (props.isSelected ? '#8047F8' : 'transparent')};

  display: flex;
  align-items: center;
  gap: 0.813rem;

  cursor: pointer;
  transition: 0.2s;

  svg {
    color: ${(props) => props.theme.purple};
  }

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }
`
