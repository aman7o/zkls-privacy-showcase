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

      {/* XION Introduction Section */}
      <section className="container mx-auto px-6 py-12 max-w-5xl">
        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            <strong className="text-foreground">XION is revolutionizing brand engagement through privacy-first technology.</strong>{" "}
            Using zkTLS (Zero-Knowledge Transport Layer Security), over 150 global brands including Uber, Amazon, BMW, and Marvel Rivals now verify customer data without exposing personal information. With 6.6+ million interactions across 20+ brands and 800,000+ active users, XION has reduced customer acquisition costs by 79% while enabling users to get rewarded for their engagement. Unlike traditional advertising where personal data gets monetized by intermediaries, XION's mathematical proofs ensure users maintain data ownership while brands can still verify actions. As Uber's Head of New Growth stated:{" "}
            <em className="text-success">"I can easily see us 10xing our spend with EarnOS as it's the most effective funnel we have access to."</em>
          </p>
          
          <p className="text-xl font-semibold text-foreground">
            Below, see exactly how this privacy-preserving verification works:
          </p>
        </div>
      </section>

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
        
        {/* XION Future Section */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              Ready to Enter the Age of Proofs?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              zkTLS represents the future of digital privacy - where proving what you need 
              to prove doesn't mean exposing everything else.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="px-6 py-3 bg-gradient-success text-success-foreground rounded-lg font-semibold shadow-success">
                🔮 Privacy Protected
              </div>
              <div className="px-6 py-3 bg-gradient-info text-info-foreground rounded-lg font-semibold shadow-info">
                ✅ Verification Enabled
              </div>
              <div className="px-6 py-3 bg-gradient-dark text-foreground border border-border rounded-lg font-semibold">
                🚀 Mass Adoption Ready
              </div>
            </div>
          </div>
          
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4 text-foreground">What XION is Building Next</h3>
              <p className="text-lg leading-relaxed">
                <strong className="text-foreground">XION is entering the "Age of Proofs" - making verification work seamlessly at global scale.</strong>{" "}
                Built on XION's proven foundation of wallet-free accounts, gasless transactions, and seamless user experience, the next 18 months will bring advanced zero-knowledge technology that transforms digital verification:
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="p-6 bg-card border border-border rounded-lg">
                <h4 className="text-xl font-bold mb-4 text-success">🔧 ZK Infrastructure:</h4>
                <ul className="space-y-3 text-left">
                  <li><strong>ZK TLS Platform:</strong> Prove any data on the internet while keeping personal details private</li>
                  <li><strong>ZK VM:</strong> Verifiable off-chain compute for proof of execution and secure data processing</li>
                  <li><strong>ZK Data Layer:</strong> Store and manage digital credentials with full user ownership</li>
                </ul>
              </div>
              
              <div className="p-6 bg-card border border-border rounded-lg">
                <h4 className="text-xl font-bold mb-4 text-info">⚡ ZK Tools:</h4>
                <ul className="space-y-3 text-left">
                  <li><strong>ZK Email:</strong> Prove email contents and interactions without revealing your inbox</li>
                  <li><strong>ZK JWT:</strong> Turn Web2 logins into private, verifiable credentials</li>
                  <li><strong>ZK Identity:</strong> Portable credentials with selective disclosure across platforms</li>
                  <li><strong>ZK Shuffle:</strong> Secure and fair outcomes in games and competitions</li>
                </ul>
              </div>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-card to-secondary/20 border border-border rounded-lg">
              <h4 className="text-xl font-bold mb-4 text-success">🚀 Mass Adoption Ready:</h4>
              <p className="mb-4">XION's seamless technology foundation makes this accessible to everyone:</p>
              <ul className="grid md:grid-cols-2 gap-3 text-left">
                <li><strong>No wallets needed</strong> - Sign in with email or biometrics like any app</li>
                <li><strong>No gas fees</strong> - Pay with familiar currencies like USDC, not crypto tokens</li>
                <li><strong>Mobile-first</strong> - Works instantly on any device without downloads or setup</li>
                <li><strong>Apple ID integration</strong> - One-click access for 3+ billion Apple users</li>
              </ul>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-secondary/20 to-card border border-border rounded-lg">
              <h4 className="text-xl font-bold mb-4 text-info">🎯 Real-World Impact:</h4>
              <p className="mb-4">
                From gym memberships to job applications, airline loyalty points to social media verification - XION's technology works invisibly in the background. Users get privacy and rewards, businesses get accurate verification, and developers get simple tools to build with.
              </p>
              
              <p className="text-lg font-semibold text-foreground">
                The combination of advanced ZK proofs and effortless user experience means verification technology can finally reach mainstream audiences without technical barriers.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            Powered by zkTLS technology - Where privacy meets verification at mass scale
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;