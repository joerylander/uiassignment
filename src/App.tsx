import axios from "axios";
import { useEffect, useState } from "react";
import Home from "./pages/Home";

const DEFAULT_VALUES = {
  version: "version_number",
  devices: [
    {
      sysids: [""],
      icon: {
        id: "",
        resolutions: [[0]],
      },
      line: {
        name: "",
        id: "",
      },
      guids: [""],
      uisp: {
        nameLegacy: [""],
        bleServices: {},
        line: "",
        firmware: {
          board: [""],
          platform: "",
        },
      },
      product: {
        abbrev: "",
        name: "",
      },
      shortnames: [""],
      triplets: [""],
      id: "",
    },
  ],
};

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
  console.log(data?.devices);
  return <>{loaded && <Home data={data} />}</>;
}

export default App;
