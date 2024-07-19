import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Container, Logo, LogoutBtn } from "../index";
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
      name: "My Posts",
      slug: "/my-posts",
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
        <nav className="flex items-center justify-between p-4 relative">
          {/* Logo */}
          <div className="text-gray-300 hover:text-white text-3xl font-semibold">
            <Link to={"/"}>
              <Logo />
            </Link>
          </div>

          {/* Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isMenuOpen ? "Close" : "Menu"}
            </button>
          </div>

          {/* Navigation Links */}
          <ul
            className={`lg:flex lg:space-x-4 absolute lg:static bg-gray-900 lg:bg-transparent top-full left-0 w-full lg:w-auto lg:mt-0 mt-4 lg:p-0 p-4 lg:flex-row flex-col z-10 rounded-lg ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            {navItems.map(
              (item) =>
                item.active && (
                  <li key={item.name} className="mb-2 lg:mb-0">
                    <Link to={item.slug}>
                      <button
                        className="text-gray-300 hover:text-white px-3 py-2 rounded-md transition-colors duration-300 w-full text-left"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </button>
                    </Link>
                  </li>
                )
            )}
            {authStatus && (
              <li onClick={() => setIsMenuOpen(false)}>
                <Link to={"/login"}>
                  <LogoutBtn />
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
