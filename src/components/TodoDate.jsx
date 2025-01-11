import { useEffect, useState } from "react";

const TodoDate = () => {
  const [dateTime, setDateTime] = useState("");

  //todo Date and Time

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const formattedDate = date.toLocaleDateString();
      const formattedTime = date.toLocaleTimeString();

      setDateTime(`${formattedDate} - ${formattedTime}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return <h2 className="date-time">{dateTime}</h2>;
};

export default TodoDate;
