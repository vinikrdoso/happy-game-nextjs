export function StatsSection() {
  return (
    <section className="py-20 bg-neutral-900">
      <div className="p-4 max-w-[1344px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold">
              Estatísticas Impactantes da Indústria de Jogos
            </h2>
            <p className="text-lg text-neutral-400">
              A indústria de jogos movimenta bilhões de reais anualmente,
              atraindo milhões de jogadores. Com o crescimento das plataformas
              sociais, a conexão entre gamers nunca foi tão evidente.
            </p>
          </div>

          {/* Stats */}
          <div className="space-y-8">
            <div className="space-y-2 p-8 bg-neutral-900 rounded-2xl border border-neutral-700 hover:border-primary-green-base transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-green-base/20 group cursor-pointer">
              <span className="text-6xl font-heading font-bold text-primary-green-base group-hover:scale-105 inline-block transition-transform">
                75%
              </span>
              <p className="text-neutral-400">
                dos jogadores buscam comunidades online para interagir
              </p>
            </div>
            <div className="space-y-2 p-8 bg-neutral-900 rounded-2xl border border-neutral-700 hover:border-primary-green-base transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-green-base/20 group cursor-pointer">
              <span className="text-6xl font-heading font-bold text-primary-green-base group-hover:scale-105 inline-block transition-transform">
                80%
              </span>
              <p className="text-neutral-400">
                dos jogos são adquiridos através de recomendações
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
