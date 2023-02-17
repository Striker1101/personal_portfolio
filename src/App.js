// import "./App.css";
import Blog from "./blog/app";
import Homepage from "./pages/Homepage";
import theme from "./Theme";
import {ThemeProvider} from "styled-components";
import Global from "./component/styles/Global";
import { Routes, Route } from "react-router-dom";

function App() {
  return (

      <ThemeProvider theme={theme}>
        <Global />
        <Routes>
          <Route index path="/" element={<Homepage />} />
          <Route path="/blog/*" element={<Blog />} />
        </Routes>
      </ThemeProvider>
  );
}

export default App;
