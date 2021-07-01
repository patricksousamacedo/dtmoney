import logoImg from '../../assets/logo.svg'

import { Container, Content } from './styles'

interface HeaderProps { // para tipar o TS
  onOpenNewTransactionModal: () => void; // void: retorno da função é vazio
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return(
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
        </button> 
      </Content>
    </Container>
  )
}