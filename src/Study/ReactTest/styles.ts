import styled from 'styled-components';
import backgrounImage from '../../assets/background.jpg'

export const Container = styled.main`
  background-image: url(${backgrounImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;
`

export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;

  h1 {
    font-size: 3.5rem;
    letter-spacing: 2px;
  }
`


export const Content = styled.div`
  height: 100%;
  width: 100%;
  flex-direction: column;
  display: flex;
  align-items: center;
  margin-bottom: 15rem;
  justify-content: center;
`