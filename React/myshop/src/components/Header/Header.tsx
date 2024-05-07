import React, { useState } from 'react';
import { Cart } from '../Cart/Cart';
import { FiLogIn, FiLogOut, FiShoppingCart } from 'react-icons/fi';

import * as S from './styles'; // ! Todos os componentes com S. na frente do nome do componente é um componente estilizado

export const Header: React.FC = () => {
  const [showcart, setShowCart] = useState(false);
  const isLogged = false;

  return (
    <S.StyledHeader>
      <S.Wrapper>
        <S.HeaderTitle>MyShop.</S.HeaderTitle>

        <S.ButtonsWrapper>
          <S.AuthButton isLogged={isLogged}>
            {isLogged ? 'Logout' : 'Login'}
            {isLogged ? <FiLogOut /> : <FiLogIn />}
          </S.AuthButton>

          <S.CartButton onClick={() => setShowCart(!showcart)}>
            Carrinho
            <FiShoppingCart />
          </S.CartButton>
        </S.ButtonsWrapper>
      </S.Wrapper>

      <Cart showCart={showcart} />
    </S.StyledHeader>
  );
};