import React from "react";

function Footer() {
  return (
    <div>
      <footer class="bg-black rounded-lg shadow m-4 pb-2 sm:pt-2 dark:bg-gray-800">
        <div class="w-full mx-auto max-w-screen-xl p-2 sm:p-4 flex md:flex md:items-center md:justify-between">
          <span class="text-sm text-white mt-[0.7rem] md:mt-0 sm:text-center dark:text-gray-400 mx-4">
            © 2023{" "}
            <a href="https://flowbite.com/" class="hover:underline">
              Android Club
            </a>
            . All Rights Reserved.
          </span>
          <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-white dark:text-gray-400 mr-4 sm:mt-0">
            <li>
              <a href="#" className="m-1">
                About
              </a>
            </li>
            <li>
              <a href="#" className="m-1">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="m-1">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="m-1">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
