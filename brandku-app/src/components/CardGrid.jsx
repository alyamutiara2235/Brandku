import Card from './Card'

const CardGrid = ({features}) => (
  <section className="py-12 px-6 bg-white">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-900 mb-8">
        Mengapa Brandku?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features && features.map(items => (
          <Card key={items.id} icon={items.icon} title={items.title} subtitle={items.subtitle} />
        ))}
      </div>
    </div>
  </section>
)

export default CardGrid;