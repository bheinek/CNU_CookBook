import { Container } from 'reactstrap';

export function Footer() {
  return (
    <Container as="footer">
      <hr />
      <p>This is my new Footer lets check this out</p>
      <p>&copy; {new Date().getFullYear()} &middot; CN Group CZ a.s.</p>
    </Container>
  );
}
