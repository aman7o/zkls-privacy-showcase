import { TraditionalDemo } from "@/components/TraditionalDemo";
import { ZkTLSDemo } from "@/components/ZkTLSDemo";
import { TechnicalDetails } from "@/components/TechnicalDetails";
import { InfoSection } from "@/components/InfoSection";
import xionLogo from "@/assets/xion-logo.svg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-success/5 via-background to-info/5" />
        <div className="relative container mx-auto px-6 py-16 text-center">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img 
              src={xionLogo} 
              alt="Xion" 
              className="h-16 w-auto animate-float"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-success to-info bg-clip-text text-transparent leading-tight">
            How Subscription Status is Verified Without Exposing Your Data
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            See zkTLS Technology in Action - Privacy-Preserving Verification
          </p>
          
          {/* Decorative elements */}
          <div className="absolute top-1/4 left-10 w-20 h-20 bg-success/20 rounded-full blur-xl animate-pulse" />
          <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-info/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        {/* Info Cards */}
        <InfoSection />
        
        {/* Main Demo Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Interactive Demonstration
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Click "Watch Demo" on each side to see the dramatic difference between 
              traditional data exposure and zkTLS privacy protection.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <TraditionalDemo />
            <ZkTLSDemo />
          </div>
        </section>
        
        {/* Technical Details */}
        <section className="mb-16">
          <TechnicalDetails />
        </section>
        
        {/* Call to Action */}
        <section className="text-center py-16">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              Ready to Embrace Privacy-First Verification?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              zkTLS represents the future of digital privacy - where proving what you need 
              to prove doesn't mean exposing everything else.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="px-6 py-3 bg-gradient-success text-success-foreground rounded-lg font-semibold shadow-success">
                🔐 Privacy Protected
              </div>
              <div className="px-6 py-3 bg-gradient-info text-info-foreground rounded-lg font-semibold shadow-info">
                ✅ Verification Enabled
              </div>
              <div className="px-6 py-3 bg-gradient-dark text-foreground border border-border rounded-lg font-semibold">
                🚀 Future Ready
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            Powered by zkTLS technology - Where privacy meets verification
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;