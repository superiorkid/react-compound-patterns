import { Link, Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="space-y-10 max-w-3xl mx-auto min-h-screen">
      <section className="space-y-3 py-4">
        <h1 className="text-3xl font-semibold text-center">React Patterns</h1>
        <nav className="flex justify-around">
          <Link
            to={{ pathname: "/", hash: "#homepage" }}
            className="text-sky-500 hover:underline"
          >
            Homepage
          </Link>
          <Link to={{ pathname: "/about", hash: "#about" }}>About</Link>
        </nav>
      </section>

      <Outlet />
    </div>
  );
};

export default MainLayout;
