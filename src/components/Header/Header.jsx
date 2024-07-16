import React from "react";
import { useSelector } from "react-redux";
import { Container, Logo } from "../index";
import { Link } from "react-router-dom";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "SignUp",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <header className="bg-gray-900 shadow-md">
      <Container>
        <nav className="flex items-center justify-between p-4">
          <div className="text-gray-300 hover:text-white text-3xl font-semibold">
            <Link to={"/"}>
              <Logo />
            </Link>
          </div>
          <ul className="flex space-x-4">
            {navItems.map(
              (item) =>
                item.active && (
                  <Link to={item.slug} key={item.name}>
                    <li>
                      <button className="text-gray-300 hover:text-white px-3 py-2 rounded-md transition-colors duration-300">
                        {item.name}
                      </button>
                    </li>
                  </Link>
                )
            )}
            {authStatus && (
              <Link to={"/login"}>
                <li>
                  <button className="text-gray-300 hover:text-white px-3 py-2 rounded-md transition-colors duration-300">
                    Logout
                  </button>
                </li>
              </Link>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
