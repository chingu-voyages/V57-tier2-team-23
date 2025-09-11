import { useState } from "react";
import { Button } from "./components/ui/button";


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full h-screen flex justify-center items-center flex-col">
      <h1>Vite + React</h1>
      <div className="flex justify-center flex-col">
        <Button className="hover:cursor-pointer" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p >
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p>
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
