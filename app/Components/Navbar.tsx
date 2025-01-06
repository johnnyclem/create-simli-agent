export default function Navbar() {
  return (
    <div className="fixed bottom-[32px] left-[32px] z-50 w-full md:w-auto">
      <nav>
        <ul className="font-medium flex p-4 md:p-0 mt-4 border border-black rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-black md:dark:bg-black">
          <li>
            <a
              onClick={() => {
                window.open("https://sou.ls");
              }}
              className="block cursor-pointer py-2 px-3 text-gray-900 rounded   md:border-0 md:p-0 dark:text-white hover:underline    "
            >
              sou.ls
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                window.open("https://bo.dy");
              }}
              className="block cursor-pointer py-2 px-3 text-gray-900 rounded   md:border-0  md:p-0 dark:text-white hover:underline    "
            >
              <b>
                bo.dy
              </b>
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                window.open("https://6079.ai");
              }}
              className="block cursor-pointer py-2 px-3 text-gray-900 rounded   md:border-0  md:p-0 dark:text-white hover:underline    "
            >
              $THINK
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
