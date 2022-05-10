import { Navbar, Container, NavbarBrand } from 'reactstrap';

export function Header() {
  return (
    <Navbar color="dark" dark>
      <Container>
        <p>this is how i want my header to be</p>
        <NavbarBrand href="/">Cookbook</NavbarBrand>
      </Container>
    </Navbar>
  );
}
