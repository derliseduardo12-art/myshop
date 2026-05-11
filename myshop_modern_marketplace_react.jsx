export default function MyShop() {
  const categorias = [
    {
      nombre: 'Zapatillas',
      imagen: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop',
      descripcion: 'Nike, Adidas, Puma y más.'
    },
    {
      nombre: 'Ropa',
      imagen: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1200&auto=format&fit=crop',
      descripcion: 'Moda urbana y elegante.'
    },
    {
      nombre: 'Joyas',
      imagen: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1200&auto=format&fit=crop',
      descripcion: 'Accesorios premium y modernos.'
    },
    {
      nombre: 'Electrónicos',
      imagen: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop',
      descripcion: 'Celulares, audífonos y gadgets.'
    }
  ];

  const tiendas = [
    {
      nombre: 'Nike',
      link: 'https://www.nike.com',
    },
    {
      nombre: 'Amazon',
      link: 'https://www.amazon.com',
    },
    {
      nombre: 'AliExpress',
      link: 'https://www.aliexpress.com',
    },
    {
      nombre: 'Falabella',
      link: 'https://www.falabella.com.pe',
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Header */}
      <header className="border-b border-gray-800 sticky top-0 bg-black/90 backdrop-blur z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-wide">
            MY<span className="text-gray-400">SHOP</span>
          </h1>

          <nav className="hidden md:flex gap-8 text-sm uppercase tracking-wider">
            <a href="#categorias" className="hover:text-gray-400 transition">Categorías</a>
            <a href="#tiendas" className="hover:text-gray-400 transition">Tiendas</a>
            <a href="#productos" className="hover:text-gray-400 transition">Productos</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>

        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1600&auto=format&fit=crop"
          alt="banner"
          className="w-full h-[700px] object-cover opacity-60"
        />

        <div className="absolute inset-0 z-20 flex items-center">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-5xl md:text-7xl font-bold leading-tight max-w-3xl">
              Tu Marketplace Elegante y Moderno
            </h2>

            <p className="mt-6 text-gray-300 max-w-xl text-lg">
              Compra ropa, zapatillas, joyas y electrónicos desde las mejores tiendas del mundo en una sola plataforma.
            </p>

            <button className="mt-8 bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition">
              Explorar Productos
            </button>
          </div>
        </div>
      </section>

      {/* Categorías */}
      <section id="categorias" className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex justify-between items-center mb-10">
          <h3 className="text-4xl font-bold">Categorías</h3>
          <p className="text-gray-400">Explora por rubros</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categorias.map((cat, index) => (
            <div
              key={index}
              className="group bg-white/5 border border-gray-800 rounded-3xl overflow-hidden hover:border-white transition duration-300"
            >
              <div className="overflow-hidden h-72">
                <img
                  src={cat.imagen}
                  alt={cat.nombre}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-6">
                <h4 className="text-2xl font-semibold">{cat.nombre}</h4>
                <p className="text-gray-400 mt-2">{cat.descripcion}</p>

                <button className="mt-5 border border-white px-5 py-2 rounded-xl hover:bg-white hover:text-black transition">
                  Ver Productos
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Productos */}
      <section id="productos" className="bg-white text-black py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center mb-10">
            <h3 className="text-4xl font-bold">Productos Destacados</h3>
            <p className="text-gray-600">Marketplace afiliado</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1,2,3].map((item) => (
              <div key={item} className="bg-gray-100 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition">
                <img
                  src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop"
                  alt="producto"
                  className="w-full h-72 object-cover"
                />

                <div className="p-6">
                  <h4 className="text-2xl font-bold">Nike Air Premium</h4>
                  <p className="text-gray-600 mt-2">
                    Producto conectado a tiendas afiliadas.
                  </p>

                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-3xl font-bold">S/ 399</span>
                    <button className="bg-black text-white px-5 py-3 rounded-xl hover:scale-105 transition">
                      Comprar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tiendas */}
      <section id="tiendas" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h3 className="text-4xl font-bold">Tiendas Asociadas</h3>
          <p className="text-gray-400 mt-3">
            Conexión directa con tiendas reales y confiables.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {tiendas.map((tienda, index) => (
            <a
              key={index}
              href={tienda.link}
              target="_blank"
              rel="noreferrer"
              className="border border-gray-800 rounded-3xl p-10 flex items-center justify-center text-2xl font-bold hover:bg-white hover:text-black transition"
            >
              {tienda.nombre}
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-10 text-center text-gray-500">
        <h4 className="text-2xl font-bold text-white">MYSHOP</h4>
        <p className="mt-3">Marketplace moderno de ropa, zapatillas, joyas y tecnología.</p>
        <p className="mt-2 text-sm">© 2026 MYSHOP - Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
