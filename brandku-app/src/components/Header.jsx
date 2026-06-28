const Header = () => (
    <header class="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <div class="text-2xl font-extrabold text-blue-600 tracking-tight">
                Brandku
            </div>
            <nav class="flex space-x-8 text-sm font-medium text-gray-600">
                <a href="#" class="tombol text-blue-600">Beranda</a>
                <a href="#" class="tombol hover:text-gray-600">Fitur</a>
                <a href="#" class="tombol hover:text-gray-600">Harga</a>
            </nav>
        </div>
    </header>
)
export default Header;