const features = [
  {
    title: "Build",
    description: "Get access to developer resources, and start building today.",
  },
  {
    title: "Participate",
    description: "Explore the XION ecosystem and participate in XION's mainnet.",
  },
  {
    title: "Get XION",
    description: "Learn about and acquire $XION, the native asset powering the ecosystem.",
  },
  {
    title: "Stake",
    description: "Participate in securing the network by staking $XION tokens.",
  },
];

export const Features = () => {
  return (
    <section className="py-20 px-8">
      <div className="grid md:grid-cols-4 gap-8">
        {features.map((feature) => (
          <div key={feature.title} className="border p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};