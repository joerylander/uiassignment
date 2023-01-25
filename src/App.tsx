import axios from "axios";
import { useEffect, useState } from "react";
import { DEFAULT_VALUES } from "./constants";
import Home from "./pages/Home";
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

  return <>{loaded && <Home data={data} loaded={loaded} />}</>;
}

export default App;
