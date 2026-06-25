import DashboardLayout from "../layouts/DashboardLayout";
import StatCard from "../components/StatCard";

function Dashboard() {
  return (
    <DashboardLayout>
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
        <StatCard
          title="Students"
          value="520"
        />

        <StatCard
          title="Subjects"
          value="12"
        />

        <StatCard
          title="Streams"
          value="8"
        />

        <StatCard
          title="Teachers"
          value="15"
        />
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;