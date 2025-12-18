'use client';

import { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronRight, Package, Truck, Shield, Hammer } from 'lucide-react';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      {/* Header Navigation */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img src="/logo.png" alt="PUNGKASA YULIANTO" className="h-10 w-10 rounded-lg" />
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">
                  PUNGKASA YULIANTO
                </h1>
                <p className="text-xs text-gray-600">Material Bangunan Terpercaya</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#beranda" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Beranda</a>
              <a href="#tentang" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Tentang</a>
              <a href="#produk" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Produk</a>
              <a href="#kontak" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Kontak</a>
              <div className="flex space-x-4 ml-8">
                <a href="/privacy" className="text-sm text-gray-600 hover:text-orange-600 transition-colors">Privacy</a>
                <a href="/terms" className="text-sm text-gray-600 hover:text-orange-600 transition-colors">Terms</a>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="container mx-auto px-4 py-4 space-y-3">
              <a href="#beranda" className="block text-gray-700 hover:text-orange-600 transition-colors font-medium py-2">Beranda</a>
              <a href="#tentang" className="block text-gray-700 hover:text-orange-600 transition-colors font-medium py-2">Tentang</a>
              <a href="#produk" className="block text-gray-700 hover:text-orange-600 transition-colors font-medium py-2">Produk</a>
              <a href="#kontak" className="block text-gray-700 hover:text-orange-600 transition-colors font-medium py-2">Kontak</a>
              <div className="flex space-x-4 pt-3 border-t">
                <a href="/privacy" className="text-sm text-gray-600 hover:text-orange-600 transition-colors">Privacy</a>
                <a href="/terms" className="text-sm text-gray-600 hover:text-orange-600 transition-colors">Terms</a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="beranda" className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold">
                  <span className="bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">
                    PUNGKASA YULIANTO
                  </span>
                </h1>
                <h2 className="text-3xl lg:text-4xl font-semibold text-gray-800">
                  Supplier Material Bangunan Terpercaya
                </h2>
              </div>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Solusi lengkap untuk kebutuhan material bangunan Anda. Menyediakan berbagai macam material berkualitas dengan harga kompetitif untuk proyek konstruksi dan renovasi Anda.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-orange-600 to-orange-700 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-700 hover:to-orange-800 transition-all transform hover:scale-105 shadow-lg">
                  Hubungi Kami
                </button>
                <button className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-orange-50 transition-colors">
                  Lihat Produk
                </button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">1000+</div>
                  <div className="text-sm text-gray-600">Produk Tersedia</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">10+</div>
                  <div className="text-sm text-gray-600">Tahun Pengalaman</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">24/7</div>
                  <div className="text-sm text-gray-600">Layanan Support</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl p-8 shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1541976590-713941681591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Construction Materials" 
                  className="rounded-xl shadow-lg w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4 p-6 rounded-xl hover:bg-orange-50 transition-colors">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                <Package className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Produk Lengkap</h3>
              <p className="text-gray-600">Berbagai macam material bangunan berkualitas tinggi</p>
            </div>

            <div className="text-center space-y-4 p-6 rounded-xl hover:bg-orange-50 transition-colors">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                <Truck className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Pengiriman Cepat</h3>
              <p className="text-gray-600">Delivery tepat waktu dan aman ke lokasi proyek</p>
            </div>

            <div className="text-center space-y-4 p-6 rounded-xl hover:bg-orange-50 transition-colors">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Kualitas Terjamin</h3>
              <p className="text-gray-600">Produk dengan standar kualitas terbaik</p>
            </div>

            <div className="text-center space-y-4 p-6 rounded-xl hover:bg-orange-50 transition-colors">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                <Hammer className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Harga Kompetitif</h3>
              <p className="text-gray-600">Harga terbaik untuk material bangunan berkualitas</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="tentang" className="py-16 bg-gradient-to-br from-slate-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Mengapa Memilih <span className="bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">PUNGKASA YULIANTO</span>?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <ChevronRight className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Pengalaman Bertahun-tahun</h4>
                    <p className="text-gray-600">Telah melayani kebutuhan material bangunan untuk berbagai proyek konstruksi dan renovasi</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <ChevronRight className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Lokasi Strategis</h4>
                    <p className="text-gray-600">Berlokasi di Wonogiri, Jawa Tengah - mudah dijangkau dan melayani wilayah sekitarnya</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <ChevronRight className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Pelayanan Prima</h4>
                    <p className="text-gray-600">Tim profesional yang siap membantu Anda memilih material yang tepat untuk kebutuhan proyek</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <img 
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Construction Site" 
                className="rounded-xl shadow-lg w-full h-64 object-cover"
              />
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Visi Kami</h3>
                <p className="text-gray-600">Menjadi supplier material bangunan terpercaya yang menyediakan produk berkualitas dengan pelayanan terbaik untuk mendukung kesuksesan proyek konstruksi Anda.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="produk" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Produk Unggulan</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Berbagai macam material bangunan berkualitas untuk memenuhi kebutuhan proyek Anda</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Semen & Mortar",
                description: "Berbagai merek semen dan mortar berkualitas untuk kebutuhan konstruksi",
                image: "https://images.unsplash.com/photo-1589758438368-0ad531db3366?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Batu & Bata",
                description: "Batu bata, batako, dan berbagai jenis batu untuk fondasi dan dinding",
                image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Besi & Baja",
                description: "Besi beton, baja ringan, dan berbagai material besi konstruksi",
                image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Atap & Genteng",
                description: "Berbagai jenis atap dan genteng untuk rumah dan bangunan",
                image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Cat & Cat Pelapis",
                description: "Berbagai merek cat berkualitas untuk interior dan eksterior",
                image: "https://images.unsplash.com/photo-1589927986089-35812379d55c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Pipa & Plumbing",
                description: "Berbagai jenis pipa dan aksesoris plumbing untuk instalasi air",
                image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              }
            ].map((product, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.title}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <button className="text-orange-600 font-semibold hover:text-orange-700 transition-colors flex items-center">
                    Lihat Detail <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontak" className="py-16 bg-gradient-to-br from-orange-600 to-orange-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Hubungi Kami</h2>
            <p className="text-xl opacity-90">Siap melayani kebutuhan material bangunan Anda</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold">Telepon</h3>
              <p className="opacity-90">082310598347</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold">Alamat</h3>
              <p className="opacity-90">MLOPO, Kel. Mlopoharjo, Kec. Wuryantoro, Kab. Wonogiri, Provinsi Jawa Tengah</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold">Email</h3>
              <p className="opacity-90">info@pungkasayulianto.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <img src="/logo.png" alt="PUNGKASA YULIANTO" className="h-10 w-10 rounded-lg" />
                <h3 className="text-xl font-bold">PUNGKASA YULIANTO</h3>
              </div>
              <p className="text-gray-400">Supplier material bangunan terpercaya untuk kebutuhan konstruksi dan renovasi Anda.</p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Layanan</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Material Bangunan</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Konsultasi Proyek</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pengiriman</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Perusahaan</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#tentang" className="hover:text-white transition-colors">Tentang Kami</a></li>
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Terms & Conditions</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Kontak</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>082310598347</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Wonogiri, Jawa Tengah</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 PUNGKASA YULIANTO. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}