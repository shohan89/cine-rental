import { useState } from "react";
import Moon from "../assets/icons/moon.svg";
import Logo from "../assets/logo.svg";
import Ring from "../assets/ring.svg";
import ShoppingCart from "../assets/shopping-cart.svg";
import Cart from "./Cart";

export default function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  // cart open handler
  function handleCartOpen() {
	setIsCartOpen(true);
  }

  // cart close handler
  function handleCartClose() {
	setIsCartOpen(false);
  }
  return (
    <>
      {isCartOpen && <Cart onClose={handleCartClose}/>}
      <header className="text-center px-4">
        <nav className="container flex items-center justify-between space-x-10 py-6">
          <a href="index.html">
            <img src={Logo} width="139" height="26" alt="" />
          </a>
          <ul className="flex items-center space-x-5">
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={Ring} width="24" height="24" alt="" />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={Moon} width="24" height="24" alt="" />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
				onClick={handleCartOpen}
              >
                <img src={ShoppingCart} width="24" height="24" alt="" />
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
