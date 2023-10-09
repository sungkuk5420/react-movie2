import HomeScreen from "./routes/Home";
import DetailScreen from "./routes/Detail";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/movie" element={<DetailScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
