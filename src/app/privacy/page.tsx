'use client';

import { ArrowLeft, Shield, Eye, Lock, Database } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <img src="/logo.png" alt="PUNGKASA YULIANTO" className="h-10 w-10 rounded-lg" />
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">
                  PUNGKASA YULIANTO
                </h1>
                <p className="text-xs text-gray-600">Material Bangunan Terpercaya</p>
              </div>
            </Link>
            
            <Link 
              href="/" 
              className="flex items-center space-x-2 text-gray-600 hover:text-orange-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Kembali ke Beranda</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-orange-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Kebijakan Privasi
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              PUNGKASA YULIANTO berkomitmen untuk melindungi privasi dan keamanan data pribadi Anda.
            </p>
          </div>

          {/* Privacy Policy Content */}
          <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <Eye className="w-6 h-6 text-orange-600 mr-3" />
                Pendahuluan
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Selamat datang di PUNGKASA YULIANTO. Kami menghargai privasi Anda dan berkomitmen untuk melindungi data pribadi yang Anda berikan kepada kami. 
                Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda saat menggunakan layanan kami.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <Database className="w-6 h-6 text-orange-600 mr-3" />
                Informasi yang Kami Kumpulkan
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">Informasi Pribadi</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Nama lengkap</li>
                    <li>Nomor telepon</li>
                    <li>Alamat email</li>
                    <li>Alamat pengiriman</li>
                    <li>Informasi pembayaran</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">Informasi Teknis</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Alamat IP</li>
                    <li>Jenis browser</li>
                    <li>Informasi perangkat</li>
                    <li>Data penggunaan website</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <Lock className="w-6 h-6 text-orange-600 mr-3" />
                Penggunaan Informasi
              </h2>
              <p className="text-gray-600 mb-4">
                Kami menggunakan informasi yang Anda berikan untuk:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Memproses pesanan dan transaksi</li>
                <li>Menyediakan layanan pelanggan</li>
                <li>Mengirimkan informasi produk dan penawaran</li>
                <li>Meningkatkan kualitas layanan kami</li>
                <li>Keperluan internal operasional</li>
                <li>Memenuhi kewajiban hukum</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Perlindungan Data</h2>
              <p className="text-gray-600 mb-4">
                PUNGKASA YULIANTO mengimplementasikan berbagai langkah keamanan untuk melindungi data pribadi Anda:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Enkripsi data sensitif</li>
                <li>Akses terbatas ke informasi pribadi</li>
                <li>Server yang aman dan terlindungi</li>
                <li>Monitoring keamanan berkelanjutan</li>
                <li>Kebijakan privasi untuk karyawan</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Berbagi Informasi</h2>
              <p className="text-gray-600 mb-4">
                Kami tidak menjual, menyewakan, atau membagikan informasi pribadi Anda kepada pihak ketiga, kecuali:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Dengan persetujuan Anda</li>
                <li>Untuk memproses transaksi (mitra pembayaran, pengiriman)</li>
                <li>Untuk kepatuhan hukum</li>
                <li>Untuk melindungi hak-hak kami</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Hak Anda</h2>
              <p className="text-gray-600 mb-4">
                Sebagai pengguna, Anda memiliki hak untuk:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Mengakses data pribadi Anda</li>
                <li>Memperbarui informasi yang tidak akurat</li>
                <li>Menghapus data pribadi Anda</li>
                <li>Menolak pemasaran langsung</li>
                <li>Meminta salinan data Anda</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cookies</h2>
              <p className="text-gray-600 mb-4">
                Website kami menggunakan cookies untuk meningkatkan pengalaman pengguna. Cookies membantu kami:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Mengingat preferensi Anda</li>
                <li>Menganalisis traffic website</li>
                <li>Menyediakan konten yang relevan</li>
                <li>Meningkatkan keamanan</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Perubahan Kebijakan</h2>
              <p className="text-gray-600">
                Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Perubahan akan diberitahukan melalui website kami. 
                Penggunaan terus menerus layanan kami setelah perubahan berarti Anda menerima kebijakan yang diperbarui.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Kontak Kami</h2>
              <p className="text-gray-600 mb-4">
                Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau perlindungan data pribadi Anda, silakan hubungi:
              </p>
              <div className="bg-orange-50 p-4 rounded-lg">
                <p className="text-gray-700"><strong>PUNGKASA YULIANTO</strong></p>
                <p className="text-gray-600">MLOPO, Kel. Mlopoharjo, Kec. Wuryantoro</p>
                <p className="text-gray-600">Kab. Wonogiri, Provinsi Jawa Tengah</p>
                <p className="text-gray-600">Telepon: 082310598347</p>
                <p className="text-gray-600">Email: info@pungkasayulianto.com</p>
              </div>
            </section>

            <section>
              <p className="text-sm text-gray-500 text-center">
                Kebijakan Privasi ini berlaku efektif sejak tanggal 1 Januari 2024 dan terakhir diperbarui pada tanggal tersebut.
              </p>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <img src="/logo.png" alt="PUNGKASA YULIANTO" className="h-10 w-10 rounded-lg" />
              <h3 className="text-xl font-bold">PUNGKASA YULIANTO</h3>
            </div>
            <p className="text-gray-400 mb-4">Supplier material bangunan terpercaya</p>
            <div className="flex justify-center space-x-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
              <Link href="/" className="hover:text-white transition-colors">Beranda</Link>
            </div>
            <p className="text-gray-500 text-sm mt-6">
              &copy; 2024 PUNGKASA YULIANTO. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}