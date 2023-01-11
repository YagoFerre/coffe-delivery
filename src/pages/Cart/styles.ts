import styled from 'styled-components'

export const CartContainer = styled.form`
  display: flex;
  justify-content: space-between;

  h2 {
    margin-top: 4rem;
    margin-bottom: 1rem;
    font-family: 'Baloo 2', sans-serif;
    color: ${(props) => props.theme['base-title']};
  }
`

export const CoffeSelectedContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 28rem;
  padding: 2.5rem;
  background: ${(props) => props.theme['base-card']};
  border-top-left-radius: 6px;
  border-top-right-radius: 36px;

  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 36px;
`

export const PriceContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 1.5rem;
  gap: 0.75rem;

  div {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
    gap: 8px;

    h3 {
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`

export const ButtonConfirm = styled.button`
  width: 100%;
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme.yellow};

  padding: 0.75rem 2rem;
  margin-top: 1.5rem;
  border: 0;
  border-radius: 6px;

  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1rem;

  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: ${(props) => props.theme['yellow-dark']};
  }

  &:disabled {
    cursor: auto;

    &:hover {
      background: ${(props) => props.theme.yellow};
    }
  }
`
