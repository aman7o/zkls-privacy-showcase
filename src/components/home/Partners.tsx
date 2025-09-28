const partners = [
  "HASHKEY Capital",
  "Multicoin Capital",
  "MECHANISM CAPITAL",
  "VALOR",
  "MORNINGSTAR VENTURES",
  "Animoca Brands",
  "SPARTAN",
];

export const Partners = () => {
  return (
    <section className="py-20 px-8">
      <h3 className="text-sm font-semibold text-gray-500 mb-8">BACKED BY THE BEST:</h3>
      <div className="flex flex-wrap items-center justify-center gap-12">
        {partners.map((partner) => (
          <div key={partner} className="text-gray-400 font-bold">
            {/* Placeholder for logo */}
            {partner}
          </div>
        ))}
      </div>
    </section>
  );
};