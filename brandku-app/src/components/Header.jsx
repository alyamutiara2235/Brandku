const Header = () => (
    <header className="flex justify-between items-center bg-white border-b border-gray-100 sticky top-0 z-50">
            <span className="text-5xl font-bold text-blue-600">
                Brandku
            </span>
            <nav className="flex space-x-8 text-sm font-medium text-gray-600">
                <a href="#" className="tombol text-blue-600">Beranda</a>
                <a href="#" className="tombol hover:text-gray-600">Fitur</a>
                <a href="#" className="tombol hover:text-gray-600">Harga</a>
            </nav>
    </header>
)
export default Header;