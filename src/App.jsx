import { Outlet } from "react-router-dom";
import { Footer, Header } from "./components";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow h-full">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
