import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { DEFAULT_VALUES } from "./constants";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/product";
import "./styles.css";

function App() {
  const [data, setData] = useState<DataType>(DEFAULT_VALUES);
  const [loaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        "https://static.ui.com/fingerprint/ui/public.json"
      );

      setData(data);
      setIsLoaded(true);
    })();
  }, []);

  return (
    <>
      <Header />
      <Routes>
        {loaded && <Route path="/" element={<Home data={data} />} />}
        {loaded && (
          <Route
            path="/product/:productId"
            element={loaded && <Product data={data.devices} />}
          />
        )}
        {!loaded && (
          <Route
            path="*"
            element={
              <>
                <h1>ERROR MESSAGE COMPONENT IMPLEMENTATION HERE</h1>
              </>
            }
          />
        )}
      </Routes>
    </>
  );
}

export default App;
