import { useEffect, useState } from "react";

const useDocTitle = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count - ${count}`;
  }, [count]);

  return [count, setCount];
};

export default useDocTitle;
