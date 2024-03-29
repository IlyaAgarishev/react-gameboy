import { useEffect, useState } from "react";

const useTurnOnGameboy = () => {
  const [batteryIsActivated, setBatteryIsActivated] = useState(false);
  const [screenIsActivated, setScreenIsActivated] = useState(false);

  // TODO: попробовать заменить на react-transition-group
  useEffect(() => {
    setTimeout(() => {
      setBatteryIsActivated(true);

      setTimeout(() => {
        setScreenIsActivated(true);
      }, 650);
    }, 500);
  }, []);

  return {
    batteryIsActivated,
    screenIsActivated,
  };
};

export default useTurnOnGameboy;
