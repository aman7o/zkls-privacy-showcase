import { useState } from "react";
import { DemoCard } from "./DemoCard";
import { LoginForm } from "./LoginForm";
import { DataItem } from "./DataItem";
import { CircuitVisualization } from "./CircuitVisualization";
import { Shield, Lock, CheckCircle } from "lucide-react";

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

export const ZkTLSDemo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showConnection, setShowConnection] = useState(false);
  const [showDataCapture, setShowDataCapture] = useState(false);
  const [showUserData, setShowUserData] = useState(false);
  const [showZkTLSBox, setShowZkTLSBox] = useState(false);
  const [showProcessing, setShowProcessing] = useState(false);
  const [showProof, setShowProof] = useState(false);
  const [dataProtected, setDataProtected] = useState(false);

  const startDemo = () => {
    if (isPlaying) return;
    resetDemo();
    setIsPlaying(true);
    
    // Step 1: Secure connection
    setTimeout(() => setShowConnection(true), 500);
    
    // Step 2: Data capture - show all data briefly
    setTimeout(() => {
      setShowDataCapture(true);
      setShowUserData(true);
    }, 1500);
    
    // Step 3: zkTLS box slides in
    setTimeout(() => setShowZkTLSBox(true), 2500);
    
    // Step 4: Mathematical processing
    setTimeout(() => setShowProcessing(true), 3500);
    
    // Step 5: Data gets protected and proof generated
    setTimeout(() => {
      setDataProtected(true);
      setShowProof(true);
    }, 5000);
    
    // Reset playing state
    setTimeout(() => setIsPlaying(false), 6500);
  };

  const resetDemo = () => {
    setShowConnection(false);
    setShowDataCapture(false);
    setShowUserData(false);
    setShowZkTLSBox(false);
    setShowProcessing(false);
    setShowProof(false);
    setDataProtected(false);
  };

  return (
    <DemoCard
      title="zkTLS Way"
      subtitle="The Solution"
      variant="zktls"
      className="h-full"
    >
      <div className="space-y-6">
        <LoginForm 
          onLogin={startDemo}
          onReplay={resetDemo}
          isPlaying={isPlaying}
          variant="zktls"
        />
        
        {/* Secure Connection */}
        {showConnection && (
          <div className="text-center space-y-3 animate-fade-in">
            <div className="flex items-center justify-center gap-4">
              <Shield className="w-6 h-6 text-success animate-pulse" />
              <div className="flex-1 h-2 bg-success/30 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-success to-info rounded-full animate-slide-in" />
              </div>
              <Lock className="w-6 h-6 text-success animate-pulse" />
            </div>
            <p className="text-sm text-success font-medium">
              🔒 Secure TLS Connection Established
            </p>
          </div>
        )}
        
        {/* Data Capture */}
        {showDataCapture && (
          <div className="space-y-3 animate-fade-in">
            <h4 className="text-lg font-semibold text-info mb-4">
              👁️ zkTLS captures encrypted communication
            </h4>
          </div>
        )}
        
        {/* User Data */}
        {showUserData && (
          <div className="space-y-3 relative">
            <div className="grid gap-2">
              {userData.map((item, index) => (
                <DataItem
                  key={`zktls-${index}`}
                  icon={item.icon}
                  label={item.label}
                  value={item.value}
                  variant={dataProtected ? "protected" : "exposed"}
                  isVisible={true}
                  delay={index * 50}
                />
              ))}
            </div>
            
            {/* zkTLS Processing Box */}
            {showZkTLSBox && (
              <div className="absolute inset-0 bg-black/90 backdrop-blur-sm rounded-lg flex items-center justify-center animate-slide-in">
                <div className="text-center p-6">
                  <div className="text-4xl mb-4">🛡️</div>
                  <div className="text-success text-lg font-bold mb-2">zkTLS Processing</div>
                  <div className="text-sm text-muted-foreground">
                    Capturing encrypted data...
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
        
        {/* Mathematical Processing */}
        {showProcessing && (
          <div className="animate-fade-in">
            <CircuitVisualization isActive={showProcessing} />
          </div>
        )}
        
        {/* Final Proof */}
        {showProof && (
          <div className="text-center space-y-4 animate-fade-in">
            <div className="flex items-center justify-center gap-3 p-4 bg-success/20 border border-success rounded-lg">
              <CheckCircle className="w-8 h-8 text-success animate-pulse-glow" />
              <div>
                <div className="text-success text-xl font-bold">✅ Has Active Subscription</div>
                <div className="text-sm text-muted-foreground">Mathematical proof verified</div>
              </div>
            </div>
            
            <div className="p-4 bg-success/10 border border-success/30 rounded-lg">
              <p className="text-sm text-success font-medium">
                ✅ Subscription verified, personal data stays private
              </p>
            </div>
          </div>
        )}
      </div>
    </DemoCard>
  );
};