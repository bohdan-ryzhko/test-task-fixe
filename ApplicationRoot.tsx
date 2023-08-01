import { FC, useEffect } from "react";
import { Header } from "./components/Header";
import { ProductList } from "./components/ProductList";
import { Container } from "./components/Container";

export const ApplicationRoot: FC = () => {
  return (
    <>
      <Header />
      <Container>
        <ProductList />
      </Container>
    </>
  )
}
