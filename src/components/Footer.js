import React from "react";
function Footer() {
  return (
    <footer className="container mx-auto py-1 fixed bottom-0 md:left-20 bg-white dark:bg-dark-mode">
      <p className="text-xs text-center text-dark-content dark:text-light-content w-full font-normal">
        Designed and Built by{" "}
        <span className="font-semibold bg-gradient-to-r from-purple-700 via-pink-600 to-pink-700
          bg-clip-text text-transparent">Naveen Poludasu</span>
      </p>
    </footer>
  );
}
export default Footer;
