export const Header = () => {
  return (
    <div className="relative top-0 left-0 w-full z-50 flex justify-center items-center py-4">
      <nav className="flex gap-4 p-2 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a href="#" className="nav-item">
          Home
        </a>
        <a href="#" className="nav-item">
          Projects
        </a>
        <a href="#" className="nav-item">
          About
        </a>
        <a
          href="#"
          className="nav-item bg-white text-gray-900 hover:bg-white/70"
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
