import { useEffect, useState } from "react";

const useTurnOnGameboy = () => {
  const [batteryIsActivated, setBatteryIsActivated] = useState(false);
  const [screenIsActivated, setScreenIsActivated] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setBatteryIsActivated(true);

      setTimeout(() => {
        setScreenIsActivated(true);
      }, 1000);
    }, 500);
  }, []);

  return {
    batteryIsActivated,
    screenIsActivated,
  };
};

export default useTurnOnGameboy;
