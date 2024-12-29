
import { useEffect, useState } from "react";

function Clock() {
  const [time, setTime] = useState(null);

  useEffect(() => {
    const timerid = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerid);
    };
  }, []);

  if (time === null) return null;

  return (
    <div>
      <h1>Current Time</h1>
      <p>{time.toLocaleTimeString()}</p>
    </div>
  );
}

export default Clock;