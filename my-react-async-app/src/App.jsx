import { useState } from "react";
import DataFetcher from "./components/DataFetcher";

function App() {
  const [postId, setPostId] = useState(1);

  return (
    <div className="App">
      <h1>Завантаження постів</h1>
      <button onClick={() => setPostId((prev) => prev + 1)}>Наступний пост</button>
      <DataFetcher id={postId} />
    </div>
  );
}

export default App;