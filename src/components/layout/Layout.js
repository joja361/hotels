import NavBar from "../navbar/NavBar";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <main className="main">{children}</main>
    </>
  );
};

export default Layout;
