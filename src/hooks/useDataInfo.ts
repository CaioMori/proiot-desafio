import { useEffect, useState } from "react";

const useDataInfo = () => {
  const [timestamp, setTimestamp] = useState<number>();
  const [active, setActive] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const toggleInterval = () => {
    setActive(!active);
  };

  useEffect(() => {
    const getRandomNumber = () => {
      setLoading(true);
      setTimeout(() => {
        const randomTimestamp = new Date().valueOf();

        setTimestamp(randomTimestamp);
        setLoading(false);
      }, 500);
    };

    if (active) {
      const interval = setInterval(() => {
        getRandomNumber();
      }, 10000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [active, timestamp]);

  return {
    timestamp,
    active,
    loading,
    toggleInterval,
  };
};

export default useDataInfo;
