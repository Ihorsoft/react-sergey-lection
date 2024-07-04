import { useState, useEffect } from "react";

const Title = () => {
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    document.title = `You clicked effect ${clicks} times`;
  });

  return (
    <button onClick={() => setClicks(clicks + 1)}>
      You clicked button {clicks} times
    </button>
  );
};

export default Title;
