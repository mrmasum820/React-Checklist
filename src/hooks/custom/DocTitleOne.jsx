import React from "react";
import useDocTitle from "./useDocTitle";

const DocTitleOne = () => {
  const [count, setCount] = useDocTitle();
  //   const [count, setCount] = useState(0);

  //   useEffect(() => {
  //     document.title = `Count - ${count}`;
  //   }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count - {count}</button>
    </div>
  );
};

export default DocTitleOne;
