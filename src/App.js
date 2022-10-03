import axios from "axios";
import "./styles.css";

export default function App() {
  let debounce = (getPost) => {
    let timeout;
    return () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        getPost();
      }, 1000);
    };
  };
  let listen = debounce(async () => {
    let res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    console.log(res.data.title);
  });
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Enter something..."
        onChange={() => listen()}
      />
    </div>
  );
}
