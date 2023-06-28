import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    padding: 0.85rem;
    border-radius: 4px;
    border: none;
    margin-bottom: 2rem;
  }
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const TaskContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.85rem;
  border: 1px solid white;
  margin-top: 20px;
  width: 80%;

  button {
    padding: 0.5rem;
    background-color: transparent;
    border: 1px solid white;
    cursor: pointer;
    transition: 3ms;

    &:hover {
      filter: brightness(0.6);
    }
  }
`
export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
`