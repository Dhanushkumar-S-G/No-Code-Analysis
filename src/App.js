import logo from "./logo.svg";
import "./App.css";
import * as FlexmonsterReact from "react-flexmonster";
import 'flexmonster/flexmonster.css';

function App() {
  return (
    <div className="App">
      <FlexmonsterReact.Pivot
        toolbar={true}
        componentFolder="https://cdn.flexmonster.com/"
        width="100%"
        report="https://cdn.flexmonster.com/reports/report.json"
      />
    </div>
  );
}
export default App;