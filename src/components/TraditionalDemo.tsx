import { useState, useEffect } from "react";
import { DemoCard } from "./DemoCard";
import { LoginForm } from "./LoginForm";
import { DataItem } from "./DataItem";
import { Server, Wifi } from "lucide-react";

const userData = [
  { icon: "📧", label: "Email", value: "john.doe@gmail.com" },
  { icon: "👤", label: "Full Name", value: "John Doe" },
  { icon: "💳", label: "Payment Method", value: "Visa •••• 1234" },
  { icon: "💰", label: "Plan", value: "Premium ($15.99/month)" },
  { icon: "📅", label: "Billing Date", value: "January 15, 2024" },
  { icon: "📊", label: "Usage Data", value: "47 sessions this month" },
  { icon: "📱", label: "Recent Activity", value: "Content Library Access" },
  { icon: "⏰", label: "Account Created", value: "March 2019" },
  { icon: "🏠", label: "Address", value: "123 Main St, New York" },
  { icon: "🔍", label: "Browsing History", value: "Recent searches and preferences" },
];

export const TraditionalDemo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showConnection, setShowConnection] = useState(false);
  const [showDataFlow, setShowDataFlow] = useState(false);
  const [showUserData, setShowUserData] = useState(false);
  const [dataItems, setDataItems] = useState<boolean[]>(new Array(userData.length).fill(false));

  const startDemo = () => {
    if (isPlaying) return;
    resetDemo();
    setIsPlaying(true);

    // Step 1: Show connection
    setTimeout(() => setShowConnection(true), 500);

    // Step 2: Show data flow
    setTimeout(() => setShowDataFlow(true), 1500);

    // Step 3: Show user data one by one
    setTimeout(() => {
      setShowUserData(true);
      userData.forEach((_, index) => {
        setTimeout(() => {
          setDataItems(prev => {
            const newItems = [...prev];
            newItems[index] = true;
            return newItems;
          });
        }, index * 200);
      });
    }, 2500);

    // Reset playing state
    setTimeout(() => setIsPlaying(false), 5000);
  };

  const resetDemo = () => {
    setShowConnection(false);
    setShowDataFlow(false);
    setShowUserData(false);
    setDataItems(new Array(userData.length).fill(false));
  };

  return (
    <DemoCard
      title="Traditional Way"
      subtitle="The Problem"
      variant="traditional"
      className="h-full"
    >
      <div className="space-y-6">
        <LoginForm
          onLogin={startDemo}
          onReplay={resetDemo}
          isPlaying={isPlaying}
          variant="traditional"
        />

        {/* Connection Animation */}
        {showConnection && (
          <div className="text-center space-y-3 animate-fade-in">
            <div className="flex items-center justify-center gap-4">
              <Wifi className="w-6 h-6 text-danger animate-pulse" />
              <div className="flex-1 h-1 bg-danger/30 rounded-full overflow-hidden">
                <div className="h-full bg-danger animate-data-flow rounded-full" />
              </div>
              <Server className="w-6 h-6 text-danger animate-pulse" />
            </div>
            <p className="text-sm text-danger font-medium">
              Connecting to Subscription Platform...
            </p>
          </div>
        )}

        {/* Data Display */}
        {showUserData && (
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-danger mb-4">
              📡 Full Response Received:
            </h4>
            <div className="grid gap-3">
              {userData.map((item, index) => (
                <DataItem
                  key={`traditional-${index}`}
                  icon={item.icon}
                  label={item.label}
                  value={item.value}
                  variant="exposed"
                  isVisible={dataItems[index]}
                  delay={index * 100}
                />
              ))}
            </div>
            <div className="mt-6 p-4 bg-danger/20 border border-danger rounded-lg">
              <p className="text-sm text-danger font-medium text-center">
                ❌ To prove subscription, ALL personal data gets revealed
              </p>
            </div>
          </div>
        )}
      </div>
    </DemoCard>
  );
};