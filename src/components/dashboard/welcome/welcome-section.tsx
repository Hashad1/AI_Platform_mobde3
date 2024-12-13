interface WelcomeSectionProps {
  userName: string;
}

export function WelcomeSection({ userName }: WelcomeSectionProps) {
  return (
    <div>
      <h2 className="text-3xl font-bold tracking-tight">
        مرحباً، {userName}
      </h2>
      <p className="text-muted-foreground">
        هذه نظرة عامة على نشاط مساعديك الذكيين
      </p>
    </div>
  );
}