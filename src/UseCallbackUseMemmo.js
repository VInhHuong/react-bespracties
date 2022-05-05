import "./styles.css";
import React, { useEffect } from "react";

const Count = React.memo(({ count }) => {
  console.log("haha");
  return <div>{count}</div>;
});
export default function UseCallBackUseMemo() {
  const [count, setCount] = React.useState(1);
  const [count2, setCount2] = React.useState(1);
  const increase = React.useCallback(() => setCount(count + 1), [count]);
  const calculateCount = () => {
    console.log("calculating...");
    return count * 2;
  };
  const x2Count = React.useMemo(calculateCount, [count]);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Count count={count} increase={increase} />
      x2Count: {x2Count}
      <button onClick={() => setCount(count + 1)}>increase</button>
      <button onClick={() => setCount2(count2 + 1)}>increase2</button>
    </div>
  );
}
