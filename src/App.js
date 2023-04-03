import Timer from "./components/TimeDisplay/TimeDisplay";
import Button from "./components/Button/Button";

function App() {

  // const {time, setTime} = useState(0);

  return (
    <div className="main">
      <Timer />
      <Button>Start</Button>
      <Button>Stop</Button>
      <Button>Reset</Button>
    </div>
  );
}

export default App;
