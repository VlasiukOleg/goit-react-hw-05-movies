import { Outlet } from 'react-router-dom';
import { Container, Header, Link, Footer } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Outlet />
      <Footer>Copyright © 2023 Created by Vlasiuk Oleg.</Footer>
    </Container>
  );
};
