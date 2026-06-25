function Topbar() {
  return (
    <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-8">
      <div>
        <h2 className="text-xl font-semibold">
          Dashboard
        </h2>

        <p className="text-gray-500 text-sm">
          Welcome back
        </p>
      </div>

      <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">
        A
      </div>
    </header>
  );
}

export default Topbar;