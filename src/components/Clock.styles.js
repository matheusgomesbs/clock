import styled from 'styled-components';

export const Clock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #000000;
  color: #f7f7f7;

  span {
    position: relative;
    font-family: 'Rajdhani', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #0e0e0e;
    max-width: 25rem;
    width: 100%;
    border-radius: 2rem;
    font-size: 20rem;
    line-height: 1;
    font-weight: bold;
    padding: 2rem 0;
  }

  span::before {
    position: absolute;
    content: '';
    height: 0.3rem;
    width: 100%;
    background: #000000;
  }

  span:first-child {
    margin-right: 2rem;
  }

  @media (max-width: 768px) {
    padding: 1rem;

    span {
      max-width: 20rem;
      font-size: 10rem;
    }

    span:first-child {
      margin-right: 1rem;
    }
  }

  @media (max-width: 425px) {
    flex-direction: column;
    padding: 1rem;

    span {
      max-width: 18.75rem;
      font-size: 10rem;
    }

    span:first-child {
      margin-right: 0;
      margin-bottom: 1rem;
    }
  }
`;
