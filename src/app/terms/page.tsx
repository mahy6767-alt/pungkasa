'use client';

import { ArrowLeft, FileText, ShoppingCart, Shield, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function TermsAndConditions() {
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
              <FileText className="w-10 h-10 text-orange-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Syarat dan Ketentuan
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Syarat dan ketentuan penggunaan layanan PUNGKASA YULIANTO untuk transaksi material bangunan.
            </p>
          </div>

          {/* Terms Content */}
          <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <FileText className="w-6 h-6 text-orange-600 mr-3" />
                Penerimaan Syarat dan Ketentuan
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Dengan mengakses dan menggunakan website serta layanan dari PUNGKASA YULIANTO, Anda setuju untuk terikat 
                oleh syarat dan ketentuan ini. Jika Anda tidak setuju dengan bagian mana pun dari syarat dan ketentuan ini, 
                Anda tidak boleh menggunakan layanan kami.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <ShoppingCart className="w-6 h-6 text-orange-600 mr-3" />
                Layanan Kami
              </h2>
              <p className="text-gray-600 mb-4">
                PUNGKASA YULIANTO menyediakan layanan perdagangan eceran berbagai macam material bangunan meliputi:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Penjualan material bangunan secara eceran</li>
                <li>Konsultasi pemilihan material</li>
                <li>Layanan pengiriman material</li>
                <li>Informasi harga dan ketersediaan produk</li>
                <li>Layanan purnajual</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Kewajiban Pelanggan</h2>
              <p className="text-gray-600 mb-4">
                Sebagai pelanggan, Anda setuju untuk:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Memberikan informasi yang akurat dan lengkap</li>
                <li>Melakukan pembayaran sesuai dengan kesepakatan</li>
                <li>Memeriksa kondisi barang saat diterima</li>
                <li>Menggunakan material sesuai dengan standar keamanan</li>
                <li>Melaporkan kerusakan atau ketidaksesuaian dalam waktu 24 jam</li>
                <li>Mematuhi batasan penggunaan layanan</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Harga dan Pembayaran</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">Kebijakan Harga</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Harga dapat berubah sewaktu-waktu tanpa pemberitahuan terlebih dahulu</li>
                    <li>Harga yang berlaku adalah harga pada saat transaksi</li>
                    <li>Harga belum termasuk biaya pengiriman (jika ada)</li>
                    <li>Khusus untuk proyek besar, tersedia harga khusus</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">Metode Pembayaran</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Pembayaran tunai</li>
                    <li>Transfer bank</li>
                    <li>Pembayaran tempat (COD) untuk wilayah tertentu</li>
                    <li>Syarat pembayaran kredit untuk pelanggan tetap</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Pengiriman dan Penerimaan</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">Kebijakan Pengiriman</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Pengiriman dilakukan setelah pembayaran lunas</li>
                    <li>Biaya pengiriman disesuaikan dengan jarak dan volume</li>
                    <li>Waktu pengiriman estimasi 1-3 hari kerja</li>
                    <li>Pengiriman hanya untuk wilayah Jawa Tengah dan sekitarnya</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">Penerimaan Barang</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Pelanggan wajib memeriksa kondisi barang saat diterima</li>
                    <li>Klaim kerusakan harus disertai bukti foto/video</li>
                    <li>Barang yang sudah diterima tidak dapat dikembalikan</li>
                    <li>Pengembalian hanya berlaku untuk barang cacat pabrik</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <Shield className="w-6 h-6 text-orange-600 mr-3" />
                Garansi dan Kualitas
              </h2>
              <p className="text-gray-600 mb-4">
                PUNGKASA YULIANTO berkomitmen untuk menyediakan material bangunan berkualitas:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Semua produk adalah barang baru dan asli</li>
                <li>Garansi sesuai dengan ketentuan pabrikan</li>
                <li>Kami tidak bertanggung jawab atas kesalahan instalasi</li>
                <li>Klaim garansi harus disertai dengan bukti pembelian</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <AlertCircle className="w-6 h-6 text-orange-600 mr-3" />
                Pembatalan dan Pengembalian
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">Kebijakan Pembatalan</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Pembatalan sebelum pengiriman: biaya administrasi 10%</li>
                    <li>Pembatalan setelah pengiriman: tidak dapat dilakukan</li>
                    <li>Pesanan khusus tidak dapat dibatalkan</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">Kebijakan Pengembalian</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Pengembalian hanya untuk barang cacat produksi</li>
                    <li>Pengembalian harus dilakukan dalam 7 hari</li>
                    <li>Barang harus dalam kondisi tidak terpakai</li>
                    <li>Biaya pengembalian ditanggung pembeli</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Batasan Tanggung Jawab</h2>
              <p className="text-gray-600 mb-4">
                PUNGKASA YULIANTO tidak bertanggung jawab atas:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Kerugian yang disebabkan oleh kesalahan penggunaan</li>
                <li>Keterlambatan pengiriman karena force majeure</li>
                <li>Kerusakan akibat bencana alam atau kejadian tak terduga</li>
                <li>Kerugian tidak langsung atau konsekuensial</li>
                <li>Kesalahan spesifikasi dari pihak pembeli</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Kekayaan Intelektual</h2>
              <p className="text-gray-600">
                Semua konten di website PUNGKASA YULIANTO termasuk namun tidak terbatas pada logo, desain, teks, gambar, 
                dan software dilindungi oleh hukum kekayaan intelektual. Tidak diperbolehkan menggunakan konten kami tanpa 
                izin tertulis dari PUNGKASA YULIANTO.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sengketa</h2>
              <p className="text-gray-600 mb-4">
                Setiap sengketa yang timbul dari penggunaan layanan kami akan diselesaikan melalui:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Musyawarah dan mufakat terlebih dahulu</li>
                <li>Mediasi melalui pihak ketiga yang netral</li>
                <li>Penyelesaian melalui pengadilan di Wonogiri, Jawa Tengah</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Perubahan Syarat dan Ketentuan</h2>
              <p className="text-gray-600">
                PUNGKASA YULIANTO berhak mengubah syarat dan ketentuan ini sewaktu-waktu. Perubahan akan diberitahukan 
                melalui website kami. Penggunaan terus menerus layanan kami setelah perubahan berarti Anda menerima 
                syarat dan ketentuan yang diperbarui.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Kontak Kami</h2>
              <p className="text-gray-600 mb-4">
                Untuk pertanyaan atau klarifikasi mengenai syarat dan ketentuan ini, silakan hubungi:
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
                Syarat dan Ketentuan ini berlaku efektif sejak tanggal 1 Januari 2024 dan terakhir diperbarui pada tanggal tersebut.
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