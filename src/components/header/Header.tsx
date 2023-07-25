import Navbar from "../navbar/Navbar";

function Header() {
  return (
    <header className="h-screen p-4 text-white bg-[#23272F]" id="home">
      <Navbar />
      <section className="p-4 md:flex">
        <div className="w-full py-24 pl-6 md:pl-20 space-y-2">
          <p className="font-bold text-green-600">Hello, I'm</p>
          <h1 className="text-4xl font-bold md:text-6xl">wilson Gichuhi</h1>
          <p>
            Just a man shipping code, crafting mobile & cloud-based web apps. 
            Passionate about Open Source and delivering innovative solutions. 
          </p>
        </div>
        <div className="hidden md:w-full md:flex md:justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="self-center w-48 h-48"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
            />
          </svg>
        </div>
      </section>
    </header>
  );
}


export default Header