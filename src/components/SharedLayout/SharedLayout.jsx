import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Container, Header, Link, Footer, Main } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>

      <Suspense fallback={<div>Loading...</div>}>
        <Main>
          <Outlet />
        </Main>
      </Suspense>

      <Footer>Copyright © 2023 Created by Vlasiuk Oleg.</Footer>
    </Container>
  );
};
