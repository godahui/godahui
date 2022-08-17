import { Template } from "./components/Template";
import { Header } from "./components/Header";
import { SliderContainer } from "./components/SliderContainer";
import { ProductContainer } from "./components/ProductContainer";
import { ServiceContainer } from "./components/ServiceContainer";

function App() {
  return (
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
  );
}

export default App;
