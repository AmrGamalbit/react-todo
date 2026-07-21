function Header({ children }) {
  return (
    <header>
      <h2 className="text-4xl font-bold text-heading flex items-center justify-center m-10">
        React ToDo
      </h2>
      {children}
    </header>
  );
}

export default Header;
