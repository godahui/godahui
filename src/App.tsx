import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import { Template } from "./components/Template";
import { Header } from "./components/Header";
import { SliderContainer } from "./components/SliderContainer";
import { ProductContainer } from "./components/ProductContainer";
import { ServiceContainer } from "./components/ServiceContainer";
import { InfoContainer } from "./components/InfoContainer";
import { Footer } from "./components/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Template
        header={<Header />}
        container={
          <>
            <SliderContainer />
            <ProductContainer />
            <ServiceContainer />
            <InfoContainer />
          </>
        }
        footer={<Footer />}
      />
    </ThemeProvider>
  );
}

export default App;
