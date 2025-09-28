import { Card } from "@/components/ui/card";
import { ReactNode } from "react";

interface InfoCardProps {
  title: string;
  children: ReactNode;
  icon: string;
}

const InfoCard = ({ title, children, icon }: InfoCardProps) => (
  <Card className="p-6 bg-gradient-to-br from-card to-secondary/20 border-border/50 hover:border-accent/50 transition-all duration-300">
    <div className="space-y-3">
      {icon && (
        <div className="text-3xl" role="img" aria-label={title}>
          {icon}
        </div>
      )}
      <div>
        <h3 className="text-lg font-bold mb-3 text-foreground">{title}</h3>
        <div className="text-muted-foreground leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  </Card>
);

export const InfoSection = () => {
  return (
    <section className="grid md:grid-cols-2 gap-6 mb-12">
      <InfoCard title="What is zkTLS?" icon="">
        Zero-Knowledge Transport Layer Security combines standard web encryption with
        mathematical proofs to verify information without revealing it. It's like having
        a witness that can confirm facts without exposing the details.
      </InfoCard>

      <InfoCard title="Why Does This Matter?" icon="">
        Traditional verification exposes all your personal data to prove one simple fact.
        zkTLS proves only what's necessary while keeping everything else private,
        giving you control over your digital identity.
      </InfoCard>

      <InfoCard title="Real-World Impact" icon="">
        With zkTLS, you can prove subscription status, account balances, age verification,
        or credentials without revealing sensitive personal information to third parties.
        Privacy and verification can finally coexist.
      </InfoCard>

      <InfoCard title="Use Cases" icon="">
        This technology works for any platform - streaming services, software subscriptions,
        news sites, cloud services, financial accounts, and more. Any service that requires
        verification can benefit from zkTLS privacy protection.
      </InfoCard>
    </section>
  );
};