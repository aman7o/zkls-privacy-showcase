import { Card } from "@/components/ui/card";
import { ReactNode } from "react";

interface InfoCardProps {
  title: string;
  children: ReactNode;
}

const InfoCard = ({ title, children }: InfoCardProps) => (
  <Card className="p-6 border border-gray-200 rounded-lg">
    <div className="space-y-3">
      <div>
        <h3 className="text-lg font-bold mb-3">{title}</h3>
        <div className="text-gray-600 leading-relaxed">{children}</div>
      </div>
    </div>
  </Card>
);

export const InfoSection = () => {
  return (
    <section className="grid md:grid-cols-2 gap-8 my-16">
      <InfoCard title="What is zkTLS?">
        Zero-Knowledge Transport Layer Security combines standard web encryption with
        mathematical proofs to verify information without revealing it. It's like having
        a witness that can confirm facts without exposing the details.
      </InfoCard>

      <InfoCard title="Why Does This Matter?">
        Traditional verification exposes all your personal data to prove one simple fact.
        zkTLS proves only what's necessary while keeping everything else private,
        giving you control over your digital identity.
      </InfoCard>

      <InfoCard title="Real-World Impact">
        With zkTLS, you can prove subscription status, account balances, age verification,
        or credentials without revealing sensitive personal information to third parties.
        Privacy and verification can finally coexist.
      </InfoCard>

      <InfoCard title="Use Cases">
        This technology works for any platform - streaming services, software subscriptions,
        news sites, cloud services, financial accounts, and more. Any service that requires
        verification can benefit from zkTLS privacy protection.
      </InfoCard>
    </section>
  );
};