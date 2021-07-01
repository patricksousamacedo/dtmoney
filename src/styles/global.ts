import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle `
  :root {
    --red: #E52E4D;
    --blue: #5429CC;
    --green: #33CC95;

    --blue-light: #6933FF;

    --text-title: #363F5F;
    --text-body: #969CB3;

    --background: #F0F2F5;
    --shape: #FFFFFF;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  // O padrão das fontes é 16px para as principais telas de pc
  html {
    @media (max-width: 1080px) { // enqueato a largura da tela for menor que 1080px
      font-size: 93.75%; // isso dá 15px (16*0.9375 = 15)
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // isso da 14px (16*0.875 = 14)
    }
  }

  // 1Rem = tamanho do fontesize da pagina
  // se o tamnaho padrão da pagina for 16px, 1rem será 16px
  // ou seja a fonte diminui de acordo com o tamanho da tela

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased; // isso é um hack pra deixar as fontes mais nitidas no chrome
  }

  // esses tem suas proprias fontes, adicionando o poppins aqui, sobre escreve essa fonte
  body, input, textarea, button { 
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] { // isso quer dizer: tudo que estiver desabilitado na aplicação, seja botão ou outra coisa
    opacity: 0.6;
    cursor: not-allowed;
  }

.react-modal-overlay {
  background: rgba( 0, 0, 0, 0.5);

  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;
}

.react-modal-content {
  width: 100%;
  max-width: 576px;
  background: var(--background);
  padding: 3rem;
  position: relative;
  border-radius: 0.24rem;
}

.react-modal-close {
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  border: 0;
  background: transparent;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }

}

`