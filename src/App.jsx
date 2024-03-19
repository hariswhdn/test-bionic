import { BrowserRouter, Routes, Route } from "react-router-dom";
import Wrapper from "./pages/Wrapper";
import Home from "./pages/Home";
import AirBnb from "./pages/AirBnb";
import Rwd from "./pages/Rwd";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Wrapper>
              <Home />
            </Wrapper>
          }
        />
        <Route path="/rwd" element={<Rwd />} />
        <Route path="/airbnb" element={<AirBnb />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
