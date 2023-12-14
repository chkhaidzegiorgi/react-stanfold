import { Container } from "./components/App.styles";
import { Layout } from "./layout/core.layout";
import Home from "./pages/home/home";

const App = () => {
  return (
    <Layout>
      <Container>
        <Home />
      </Container>
    </Layout>
  );
};

export default App;
