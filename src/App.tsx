import axios from "axios";
import { useEffect, useState } from "react";
import Home from "./pages/Home";

const DEFAULT_VALUES = {};

function App() {
  const [data, setData] = useState<any>();
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
  console.log(data?.devices);
  return <>{loaded && <Home data={data} />}</>;
}

export default App;
