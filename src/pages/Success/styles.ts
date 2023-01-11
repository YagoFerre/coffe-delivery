import styled from 'styled-components'

export const SuccessContainer = styled.div`
  display: flex;
  margin-top: 6rem;
  align-items: flex-end;
  justify-content: space-between;
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`

export const TitleContent = styled.div`
  > h1 {
    font-size: 2rem;
    font-family: 'Baloo 2', sans-serif;
    font-weight: bold;
    color: ${(props) => props.theme['yellow-dark']};
  }

  > p {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.25rem;
  }
`

export const LinearGradient = styled.div`
  padding: 1px;
  background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  border-radius: 6px 36px;
`

export const OrderInfoBox = styled.div`
  width: 32.875rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
  gap: 2rem;

  border-radius: 6px 36px;
  background: ${(props) => props.theme.background};
`

export const Local = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  > div {
    background: ${(props) => props.theme.purple};
    display: flex;
    align-items: center;
    padding: 0.5rem;
    border-radius: 50%;

    svg {
      color: #ffffff;
    }
  }
`

export const Time = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  > div {
    background: ${(props) => props.theme.yellow};
    display: flex;
    align-items: center;
    padding: 0.5rem;
    border-radius: 50%;

    svg {
      color: #ffffff;
    }
  }
`

export const Payment = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  > div {
    background: ${(props) => props.theme['yellow-dark']};
    display: flex;
    align-items: center;
    padding: 0.5rem;
    border-radius: 50%;

    svg {
      color: #ffffff;
    }
  }
`
