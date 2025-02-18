
export const Header = () => {
  return (
    <div>
      <nav className="flex justify-around items-center">
        <div>
          <img
            src="./images/navImg/blackDiva.png"
            alt="logo-Image"
            className="h-20 w-52"
          />
        </div>
        <div>
          <ul className="flex justify-center space-x-4">
            <a
              href="/dashboard"
              class="text-xl font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-red-100 hover:text-slate-900"
            >
              Home
            </a>
            <a
              href="/team"
              class="text-xl font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-red-100 hover:text-slate-900"
            >
              About
            </a>
            <a
              href="/projects"
              class="text-xl font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-red-100 hover:text-slate-900"
            >
              Contact
            </a>
            <a
              href="/reports"
              class="text-xl font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-red-100 hover:text-slate-900"
            >
              Products
            </a>
          </ul>
        </div>
      </nav>
    </div>
  );
}
