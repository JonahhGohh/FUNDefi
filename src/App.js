import "./App.css";
import Navibar from "./Navibar";
import { AuthProvider } from "./components/contexts/AuthContext";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Navibar />
      </AuthProvider>
    </div>
  );
}

export default App;
