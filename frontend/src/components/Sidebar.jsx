import {
  HiAcademicCap,
  HiUsers,
  HiBookOpen,
  HiChartBar,
} from "react-icons/hi";

function Sidebar() {
  return (
    <aside className="w-72 bg-slate-950 text-white flex flex-col">
      <div className="px-8 py-8 border-b border-slate-800">
        <h1 className="text-2xl font-bold">
          IKONEX
        </h1>

        <p className="text-sm text-slate-400 mt-1">
          Student Management
        </p>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-2">
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-900 hover:bg-slate-800">
          <HiChartBar size={20} />
          Dashboard
        </button>

        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800">
          <HiUsers size={20} />
          Students
        </button>

        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800">
          <HiBookOpen size={20} />
          Subjects
        </button>

        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800">
          <HiAcademicCap size={20} />
          Results
        </button>
      </nav>
    </aside>
  );
}

export default Sidebar;