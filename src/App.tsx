import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "./App.styles";
import Header from "./components/header/header";
import { Layout } from "./layout/core.layout";
import Apps from "./pages/apps/apps";

const App = () => {
  return (
    <Layout>
      <Container>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="*" Component={Apps}></Route>
          </Routes>
        </BrowserRouter>
      </Container>
    </Layout>
  );
};

export default App;
