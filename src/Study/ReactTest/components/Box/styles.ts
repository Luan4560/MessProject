import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid white;
  padding: 1rem;
  border-radius: 8px;

  .product-image {
    img {
      width: 250px;
      height: 250px;
      border-radius: 8px;
    }
  }
`

export const CardContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0rem;
`