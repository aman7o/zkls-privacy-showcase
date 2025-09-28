import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronDown, Network, Cpu, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

export const TechnicalDetails = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-6 bg-card border border-border rounded-lg hover:bg-secondary/50 transition-colors"
      >
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-foreground">
            How Does This Actually Work?
          </h3>
          <ChevronDown 
            className={cn(
              "w-6 h-6 text-muted-foreground transition-transform duration-300",
              isExpanded && "rotate-180"
            )} 
          />
        </div>
      </button>
      
      {isExpanded && (
        <Card className="mt-4 p-6 animate-fade-in">
          <Tabs defaultValue="network" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="network" className="flex items-center gap-2">
                <Network className="w-4 h-4" />
                Network Layer
              </TabsTrigger>
              <TabsTrigger value="proof" className="flex items-center gap-2">
                <Cpu className="w-4 h-4" />
                Mathematical Proof
              </TabsTrigger>
              <TabsTrigger value="verification" className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Verification
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="network" className="space-y-4">
              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-8 p-6 bg-gradient-dark rounded-lg">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-info/20 rounded-lg flex items-center justify-center mb-2">
                      🌐
                    </div>
                    <div className="text-sm font-medium">Browser</div>
                  </div>
                  
                  <div className="flex-1 relative">
                    <div className="h-2 bg-success/30 rounded-full">
                      <div className="h-full bg-gradient-to-r from-success to-info rounded-full animate-pulse" />
                    </div>
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-success font-medium">
                      encrypted tunnel
                    </div>
                    <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-info">
                      ↑ zkTLS listens
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-success/20 rounded-lg flex items-center justify-center mb-2">
                      🖥️
                    </div>
                    <div className="text-sm font-medium">Platform Server</div>
                  </div>
                </div>
              </div>
              
              <p className="text-muted-foreground">
                zkTLS captures the encrypted communication between your browser and the subscription 
                platform without breaking the encryption. It acts as a witness to the secure 
                communication, recording the encrypted data flow.
              </p>
            </TabsContent>
            
            <TabsContent value="proof" className="space-y-4">
              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-6 p-6 bg-gradient-dark rounded-lg">
                  <div className="text-center">
                    <div className="w-20 h-16 bg-danger/20 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">📦</span>
                    </div>
                    <div className="text-sm mt-2">Encrypted Data</div>
                  </div>
                  
                  <div className="text-3xl text-muted-foreground">→</div>
                  
                  <div className="text-center">
                    <div className="w-20 h-16 bg-info/20 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">⚙️</span>
                    </div>
                    <div className="text-sm mt-2">Circuit</div>
                  </div>
                  
                  <div className="text-3xl text-muted-foreground">→</div>
                  
                  <div className="text-center">
                    <div className="w-20 h-16 bg-success/20 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">✓</span>
                    </div>
                    <div className="text-sm mt-2">Proof Only</div>
                  </div>
                </div>
              </div>
              
              <p className="text-muted-foreground">
                A mathematical circuit processes the encrypted data to prove subscription status 
                without revealing any other information. The circuit takes the encrypted response 
                and generates a cryptographic proof that only confirms the specific claim 
                (active subscription) while keeping all other data private.
              </p>
            </TabsContent>
            
            <TabsContent value="verification" className="space-y-4">
              <div className="text-center mb-6">
                <div className="p-6 bg-gradient-dark rounded-lg">
                  <div className="max-w-md mx-auto">
                    <div className="bg-success/10 border border-success/30 rounded-lg p-4 mb-4">
                      <div className="text-success text-lg font-bold mb-2">Mathematical Proof</div>
                      <div className="text-sm text-muted-foreground">
                        Cryptographic evidence that subscription is active
                      </div>
                    </div>
                    
                    <div className="text-2xl mb-4">⬇️</div>
                    
                    <div className="bg-info/10 border border-info/30 rounded-lg p-4">
                      <div className="text-info text-lg font-bold mb-2">Third Party Verifier</div>
                      <div className="text-sm text-muted-foreground">
                        Can confirm proof validity without seeing personal data
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-muted-foreground">
                Verifiers can confirm the proof is valid and came from real platform data, 
                but cannot see any personal information. The mathematical proof is 
                self-contained evidence that doesn't require access to the original data 
                to verify its authenticity.
              </p>
            </TabsContent>
          </Tabs>
        </Card>
      )}
    </div>
  );
};