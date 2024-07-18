import { Outlet, useNavigate } from "react-router-dom";
import { Footer, Header } from "./components";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";

function App() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        userData ? dispatch(login(userData)) : dispatch(logout());
        navigate("/login");
        // console.log(userData);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header className="bg-gray-900 shadow-md" />
      <main className="flex-grow flex justify-center items-center">
        {!loading ? (
          <Outlet />
        ) : (
          <div className="text-xl font-semibold">Loading...</div>
        )}
      </main>
      <Footer className="bg-gray-900 text-gray-300 p-4" />
    </div>
  );
}

export default App;
