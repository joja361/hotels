import NavBar from "../navbar/NavBar";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
