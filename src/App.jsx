import { BrowserRouter, Routes, Route } from "react-router-dom";
import Wrapper from "./pages/Wrapper";
import Test from "./pages/Test";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Wrapper>
              <Test />
            </Wrapper>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
