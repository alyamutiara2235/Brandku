const Card =({ icon, title, subtitle }) => (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
        <div className="text-2xl mb-4">{ icon }</div>
        <h3 className="text-gray-800 mb-2 text-base font-semibold">{ title }</h3>
        <p className="text-gray-500 text-xs leading-relaxed">
            { subtitle }
        </p>
    </div>
)

export default Card;