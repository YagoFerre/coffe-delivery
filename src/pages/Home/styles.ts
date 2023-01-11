import styled from 'styled-components'

export const IntroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  margin-top: 5.75rem;

  background: url('src\assets\background.png');
`

export const IntroContent = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 3rem;
    line-height: 3.875rem;
    color: ${(props) => props.theme['base-title']};
  }
`

export const Subtitle = styled.p`
  margin-top: 1rem;
  font-size: 1.25rem;
`

export const InconsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5rem 2rem;
  margin-top: 4.125rem;
`

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  p {
    font-size: 1rem;
  }
`

export const ImageBox = styled.img`
  padding-left: 0.25rem;

  p {
    font-size: 1rem;
  }
`

export const CoffeItemContainer = styled.div`
  margin-top: 8rem;
`
export const Title = styled.h2`
  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 800;
  font-size: 2rem;
  line-height: 130%;
  color: ${(props) => props.theme['base-title']};
  margin-bottom: 3.375rem;
`

export const CoffesItemContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2.5rem 2rem;
  margin-bottom: 9.813rem;
`
