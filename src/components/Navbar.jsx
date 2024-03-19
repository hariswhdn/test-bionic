const Navbar = () => {
  return (
    <nav className="flex w-full border-b justify-center">
      <ul className={["flex", "[&>li]:py-3 [&>li]:flex [&>li]:px-6"].join(" ")}>
        <li>
          <a href="/rwd">1. RWD</a>
        </li>
        <li>
          <a href="/">2. Jobs</a>
        </li>
        <li>
          <a href="/airbnb">3. Airbnb</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
