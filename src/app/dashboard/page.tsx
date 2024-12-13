import { WelcomeSection } from "@/components/dashboard/welcome/welcome-section";
import { StatsSection } from "@/components/dashboard/stats/stats-section";
import { DashboardLayout } from "@/components/dashboard/layout";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <WelcomeSection userName="محمد" />
        <StatsSection />
      </div>
    </DashboardLayout>
  );
}