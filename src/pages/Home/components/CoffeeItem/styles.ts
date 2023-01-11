import styled from 'styled-components'

export const CoffeItemContainer = styled.div`
  max-width: 16rem;
  padding: 1.25rem;

  display: flex;
  flex-direction: column;

  background: ${(props) => props.theme['base-card']};
  border-top-left-radius: 6px;
  border-top-right-radius: 36px;

  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 36px;
`
export const CoffeItemContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 120px;
    height: 120px;
    margin-top: -2.5rem;
    padding-bottom: 1rem;
  }

  > div {
    display: flex;
    gap: 0.5rem;
  }

  span {
    padding: 0.25rem 0.5rem;
    color: ${(props) => props.theme['yellow-dark']};
    background: ${(props) => props.theme['yellow-light']};

    font-weight: bold;
    font-size: 0.625rem;
    border-radius: 6.25rem;

    margin-bottom: 1rem;
  }

  h2 {
    font-size: 1.25rem;
    font-weight: bold;
    font-family: 'Baloo 2', sans-serif;
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-label']};
    text-align: center;
    margin-top: 0.5rem;
  }
`
export const CoffeButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
`

export const ButtonIncrementContainer = styled.div`
  display: flex;
  padding: 0.5rem;
  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  width: 4.5rem;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  button {
    border: 0;
    background: transparent;
    cursor: pointer;

    svg {
      color: ${(props) => props.theme.purple};

      &:hover {
        color: ${(props) => props.theme['purple-dark']};
      }
    }
  }

  span {
    color: ${(props) => props.theme['base-title']};
  }
`

export const ButtonCart = styled.button`
  padding: 0.5rem;
  border: 0;
  border-radius: 6px;
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme['purple-dark']};
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: ${(props) => props.theme.purple};
  }

  &:disabled {
    cursor: auto;
    background: ${(props) => props.theme['purple-dark']};
  }
`
