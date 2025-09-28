import { useState } from "react";
import { DemoCard } from "./DemoCard";
import { LoginForm } from "./LoginForm";
import { DataItem } from "./DataItem";
import { CircuitVisualization } from "./CircuitVisualization";
import { Shield, Lock, CheckCircle } from "lucide-react";

export const ZkTLSDemo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showConnection, setShowConnection] = useState(false);
  const [showEncryptedData, setShowEncryptedData] = useState(false);
  const [showProcessing, setShowProcessing] = useState(false);
  const [showProof, setShowProof] = useState(false);

  const startDemo = () => {
    if (isPlaying) return;
    resetDemo();
    setIsPlaying(true);

    setTimeout(() => setShowConnection(true), 500);
    setTimeout(() => setShowEncryptedData(true), 1500);
    setTimeout(() => setShowProcessing(true), 2500);
    setTimeout(() => setShowProof(true), 4000);
    setTimeout(() => setIsPlaying(false), 5500);
  };

  const resetDemo = () => {
    setShowConnection(false);
    setShowEncryptedData(false);
    setShowProcessing(false);
    setShowProof(false);
  };

  return (
    <DemoCard
      title="zkTLS Way"
      subtitle="The Solution"
      className="h-full"
    >
      <div className="space-y-6">
        <LoginForm
          onLogin={startDemo}
          onReplay={resetDemo}
          isPlaying={isPlaying}
        />

        {showConnection && (
          <div className="text-center space-y-3">
            <div className="flex items-center justify-center gap-4">
              <Shield className="w-6 h-6 text-green-500" />
              <div className="flex-1 h-1 bg-gray-200 rounded-full" />
              <Lock className="w-6 h-6 text-green-500" />
            </div>
            <p className="text-sm text-green-600 font-medium">
              🔒 Secure TLS Connection Established
            </p>
          </div>
        )}

        {showEncryptedData && (
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-blue-600 mb-4">
              👁️ zkTLS Captures Encrypted Communication:
            </h4>
            <div className="p-3 rounded-lg border border-gray-200 bg-gray-50 font-mono text-xs text-gray-500 break-all">
              [Encrypted Data Block: 7a6e4f52684261...]
            </div>
          </div>
        )}

        {showProcessing && (
          <CircuitVisualization />
        )}

        {showProof && (
          <div className="space-y-3">
            <DataItem
              icon="✅"
              label="Has Active Subscription"
              value="Mathematical proof verified"
              isVisible={true}
              isProof={true}
            />
            <div className="mt-4 p-3 bg-green-50 border border-green-500 rounded-lg">
              <p className="text-sm text-green-700 font-medium text-center">
                Subscription verified. Personal information was never exposed.
              </p>
            </div>
          </div>
        )}
      </div>
    </DemoCard>
  );
};