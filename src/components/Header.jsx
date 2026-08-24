function Header({ children }) {
  return (
    <header className="flex flex-col items-center justify-center gap-1 mt-10 mb-5">
      <h2 className="text-4xl font-bold text-heading">React ToDo</h2>
      {children}
    </header>
  );
}

export default Header;
