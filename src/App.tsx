import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import { Template } from "./components/Template";
import { Header } from "./components/Header";
import { SliderContainer } from "./components/SliderContainer";
import { ProductContainer } from "./components/ProductContainer";
import { ServiceContainer } from "./components/ServiceContainer";
import { InfoContainer } from "./components/InfoContainer";
import { Footer } from "./components/Footer";
import { useEffect, useState } from "react";

export const App = () => {
  const [scrollY, setScrollY] = useState(0);

  const scrollHeader = scrollY > 150 ? "scroll-header" : "header";
  const scrollProduct = scrollY > 280 ? "animation-cont" : "cont";
  const scrollService = scrollY > 580 ? "animation-cont" : "cont";
  const scrollInfo = scrollY > 1600 ? "animation-cont" : "cont";

  useEffect(() => {
    const onScroll = () => {
      const scroll = window.scrollY;
      setScrollY(scroll);
      console.log(scrollY);
    };
    document.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [scrollY]);
  return (
    <ThemeProvider theme={theme}>
      <Template
        header={<Header scrollHeader={scrollHeader} />}
        container={
          <>
            <SliderContainer />
            <ProductContainer scrollProduct={scrollProduct} />
            <ServiceContainer scrollService={scrollService} />
            <InfoContainer scrollInfo={scrollInfo} />
          </>
        }
        footer={<Footer />}
      />
    </ThemeProvider>
  );
};
