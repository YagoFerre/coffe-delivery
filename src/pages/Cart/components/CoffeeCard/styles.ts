import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  padding: 8px 4px;
  width: 368px;
  height: 104px;
  margin-bottom: 12px;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};
  img {
    width: 4rem;
    height: 4rem;
  }
  > div {
    display: block;
    margin-right: 30px;
    margin-left: 20px;
    h1 {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  height: 2rem;
  gap: 8px;
  margin-top: 8px;

  > div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 4.5rem;
    height: 2rem;
    background: ${(props) => props.theme['base-button']};
    border-radius: 6px;

    button {
      border: none;
      background: ${(props) => props.theme['base-button']};
      cursor: pointer;

      svg {
        color: ${(props) => props.theme.purple};
      }

      &:hover svg {
        color: ${(props) => props.theme['purple-dark']};
      }
    }
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    width: 5.688rem;
    height: 2rem;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 160%;
    color: ${(props) => props.theme['base-text']};
    background: ${(props) => props.theme['base-button']};
    border-radius: 6px;
    border: none;
    cursor: pointer;

    svg {
      color: ${(props) => props.theme.purple};
    }

    &:hover svg {
      color: ${(props) => props.theme['purple-dark']};
    }

    &:hover {
      background: ${(props) => props.theme['base-hover']};
    }
  }
`

export const PriceContainer = styled.main`
  font-weight: bold;
  font-size: 1rem;
  display: flex;
  flex-direction: row;
`
