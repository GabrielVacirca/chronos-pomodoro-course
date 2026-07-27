import { Container } from "../../components/Container";
import { Footer } from "../../components/Footer";
import { Menu } from "../../components/Menu";
import { Logo } from "../../components/Logo";
import { Heading } from "../../components/Heading";

type MainTemplateProps = {
  children: React.ReactNode;
};

export function MainTemplate({ children }: MainTemplateProps) {
  return (
    <>
      <Container>
        <Heading>
          <Logo />
        </Heading>
      </Container>
      <Container>
        <Menu />
      </Container>

      {children}

      <Container>
        <Footer />
      </Container>
    </>
  );
}
