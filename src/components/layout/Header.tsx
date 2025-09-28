import xionLogo from "@/assets/xion-logo.svg";

export const Header = () => {
  return (
    <header className="py-4 px-8 flex justify-between items-center">
      <div className="flex items-center">
        <img src={xionLogo} alt="XION Logo" className="h-8 mr-3" />
        <h1 className="text-2xl font-bold">XION</h1>
      </div>
      <nav className="hidden md:flex items-center space-x-8">
        <a href="#" className="text-sm font-semibold">DEVELOPERS</a>
        <a href="#" className="text-sm font-semibold">INDIVIDUALS</a>
        <a href="#" className="text-sm font-semibold">ECOSYSTEM</a>
        <a href="#" className="text-sm font-semibold">PRESS</a>
        <a href="#" className="text-sm font-semibold">CONTACT</a>
        <a href="#" className="text-sm font-semibold">BLOG</a>
      </nav>
    </header>
  );
};