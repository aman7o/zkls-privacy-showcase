import { TraditionalDemo } from "@/components/TraditionalDemo";
import { ZkTLSDemo } from "@/components/ZkTLSDemo";
import { TechnicalDetails } from "@/components/TechnicalDetails";
import { InfoSection } from "@/components/InfoSection";
import xionLogo from "@/assets/xion-logo.svg";

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Header */}
      <header className="py-4 px-8 flex justify-between items-center border-b">
        <div className="flex items-center">
          <img src={xionLogo} alt="XION Logo" className="h-8 mr-3" />
          <h1 className="text-2xl font-bold">XION</h1>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-sm font-semibold text-gray-600 hover:text-black">DEVELOPERS</a>
          <a href="#" className="text-sm font-semibold text-gray-600 hover:text-black">INDIVIDUALS</a>
          <a href="#" className="text-sm font-semibold text-gray-600 hover:text-black">ECOSYSTEM</a>
          <a href="#" className="text-sm font-semibold text-gray-600 hover:text-black">PRESS</a>
          <a href="#" className="text-sm font-semibold text-gray-600 hover:text-black">CONTACT</a>
          <a href="#" className="text-sm font-semibold text-gray-600 hover:text-black">BLOG</a>
        </nav>
      </header>

      <main className="container mx-auto px-8 py-12">
        {/* Hero Section */}
        <section className="text-left py-20">
          <h2 className="text-6xl md:text-8xl font-extrabold leading-none">
            MAINSTREAM
            <br />
            ADOPTION
          </h2>
          <p className="max-w-md mt-6 text-gray-600">
            XION empowers developers to build, launch, and scale consumer-ready products from the ground up, removing technical barriers for all users.
          </p>
        </section>

        {/* Info Cards */}
        <InfoSection />

        {/* Main Demo Section */}
        <section className="my-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
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
        <section className="my-16">
          <TechnicalDetails />
        </section>

        {/* XION Future Section */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Enter the Age of Proofs?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              zkTLS represents the future of digital privacy - where proving what you need
              to prove doesn't mean exposing everything else.
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">What XION is Building Next</h3>
              <p className="text-lg leading-relaxed">
                <strong className="font-semibold">XION is entering the "Age of Proofs" - making verification work seamlessly at global scale.</strong>{" "}
                Built on XION's proven foundation of wallet-free accounts, gasless transactions, and seamless user experience, the next 18 months will bring advanced zero-knowledge technology that transforms digital verification:
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="p-6 bg-gray-50 border border-gray-200 rounded-lg">
                <h4 className="text-xl font-bold mb-4">🔧 ZK Infrastructure:</h4>
                <ul className="space-y-3 text-left">
                  <li><strong>ZK TLS Platform:</strong> Prove any data on the internet while keeping personal details private</li>
                  <li><strong>ZK VM:</strong> Verifiable off-chain compute for proof of execution and secure data processing</li>
                  <li><strong>ZK Data Layer:</strong> Store and manage digital credentials with full user ownership</li>
                </ul>
              </div>

              <div className="p-6 bg-gray-50 border border-gray-200 rounded-lg">
                <h4 className="text-xl font-bold mb-4">⚡ ZK Tools:</h4>
                <ul className="space-y-3 text-left">
                  <li><strong>ZK Email:</strong> Prove email contents and interactions without revealing your inbox</li>
                  <li><strong>ZK JWT:</strong> Turn Web2 logins into private, verifiable credentials</li>
                  <li><strong>ZK Identity:</strong> Portable credentials with selective disclosure across platforms</li>
                  <li><strong>ZK Shuffle:</strong> Secure and fair outcomes in games and competitions</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-8 mt-16">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            Powered by zkTLS technology - Where privacy meets verification at mass scale
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;