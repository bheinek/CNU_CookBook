import { Navbar, Container, NavbarBrand } from 'reactstrap';

export function Header() {
  return (
    <Navbar color="dark" dark>
      <Container>
        <h1>Welcome in the new feature header</h1>
        <NavbarBrand href="/">Cookbook</NavbarBrand>
      </Container>
    </Navbar>
  );
}
