import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import { Template } from "./components/Template";
import { Header } from "./components/Header";
import { SliderContainer } from "./components/SliderContainer";
import { ProductContainer } from "./components/ProductContainer";
import { ServiceContainer } from "./components/ServiceContainer";

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
          </>
        }
        footer={<></>}
      />
    </ThemeProvider>
  );
}

export default App;
