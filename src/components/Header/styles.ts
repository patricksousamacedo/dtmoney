import styled from 'styled-components';

export const Container = styled.header `

  background: var(--blue);
`;

export const Content = styled.div `

  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 12rem; // 16px nas lateiras e 160px no bottom
  display: flex; 
  align-items: center; // logo e botão alinhados verticalmente ao centro
  justify-content: space-between; // um espaço entre a logo e o botão

  button {
    font-size: 1rem;
    color: #fff;
    background: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem; //4px
    height: 3rem; //48px

    transition: filter 0.2s; // aplica o filter em 0.2s

    &:hover {
      filter: brightness(0.9) // escureçe o botão levemente
      // essa filter tem muitas coisas legais, estude ela
    }
  }

`;