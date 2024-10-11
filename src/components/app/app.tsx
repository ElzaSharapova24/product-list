import './app.css'
import {Box} from "@mui/material";
import {Route, Routes} from 'react-router-dom';
import ProductsPage from "../../pages/products-page.tsx";

function App() {

  return (
      <Box display="flex">
          <Box component="main">
              <Routes>
                  <Route path="/" element={<ProductsPage/>}/>
              </Routes>
          </Box>
      </Box>
  )
}

export default App
