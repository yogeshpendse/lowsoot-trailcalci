import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Calcinput } from "./pages/Calcinput";
import { Report } from "./pages/Report";
import { Privateroute } from "./routes/Privateroutes";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Calcinput />} />
        <Route
          path="/report"
          element={
            <Privateroute>
              <Report />
            </Privateroute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
