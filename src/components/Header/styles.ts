import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.5rem;

  nav {
    display: flex;
    gap: 0.75rem;

    a {
      text-decoration: none;
    }
  }
`

export const ButtonCity = styled.button`
  display: flex;
  gap: 0.25rem;
  align-items: center;

  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};
  border: 0;
  border-radius: 6px;

  padding: 0.5rem;
  font-size: 0.875rem;

  svg {
    color: ${(props) => props.theme.purple};
  }
`

export const ButtonCart = styled.button`
  display: flex;

  background: ${(props) => props.theme['yellow-light']};
  border: 0;
  border-radius: 6px;

  padding: 0.5rem;
  font-size: 0.875rem;

  cursor: pointer;

  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }
`
export const CartCounter = styled.span`
  width: 1.25rem;
  height: 1.25rem;
  margin-right: -1rem;
  margin-top: -1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme['yellow-dark']};
  border-radius: 50%;
`
