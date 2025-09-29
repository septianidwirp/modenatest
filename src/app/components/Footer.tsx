import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-white">
  <div className="bg-[#1C1C1C] py-12">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <div>
        <h3 className="text-2xl font-semibold">Dapatkan Update Terbaru</h3>
        <p className="text-gray-300 mt-2">
          Jadi yang pertama tahu tentang penawaran, produk, dan info terbaru dari MODENA.
        </p>
      </div>
      <form action="#" method="POST" className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
        <input type="email" placeholder="Masukkan alamat email Anda"
               className="px-4 py-3 w-full sm:w-80 rounded-md text-black" required/>
        <button type="submit"
                className="bg-white text-black font-semibold px-6 py-3 rounded-md hover:bg-gray-300">
          Berlangganan
        </button>
      </form>
    </div>
  </div>

  <div className="bg-[#111111] border-t border-b border-gray-700 py-4">
    <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 px-4">
      <div className="flex items-center gap-2">
        <img src="https://cdn.modena.com/static/version1759114222/frontend/Modena/default/id_ID/images/globe.svg"
             alt="location" className="w-5 h-5"/>
        <span className="font-medium">Indonesia</span>
      </div>

      <div className="flex gap-4 text-xl">
        <a href="https://x.com/modenaindonesia" target="_blank"><i className="fab fa-twitter"></i></a>
        <a href="https://www.linkedin.com/company/modenagroup/" target="_blank"><i className="fab fa-linkedin"></i></a>
        <a href="https://www.facebook.com/ModenaIndonesia" target="_blank"><i className="fab fa-facebook-square"></i></a>
        <a href="https://www.instagram.com/modenaindonesia/" target="_blank"><i className="fab fa-instagram"></i></a>
        <a href="https://www.tiktok.com/@modena.indonesia" target="_blank">
          <img src="https://cdn.modena.com/media/wysiwyg/Tiktok.png" alt="TikTok" className="w-6 h-6"/>
        </a>
      </div>
    </div>
  </div>

  <div className="container mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
    <div>
      <img src="https://cdn.modena.com/media/wysiwyg/footer/logo-footer.png" alt="Modena Logo" className="w-44 mb-4"/>
    </div>

    <div>
      <h4 className="font-semibold mb-4">Korporasi</h4>
      <ul className="space-y-2 text-gray-400">
        <li><a href="/">Korporasi</a></li>
        <li><a href="/id_id/blog/">Berita</a></li>
        <li><a href="/id_id/about-us">Tentang Kami</a></li>
        <li><a href="https://group.modena.com/our-values/sustainability">Keberlanjutan</a></li>
      </ul>
    </div>

    <div>
      <h4 className="font-semibold mb-4">Support</h4>
      <ul className="space-y-2 text-gray-400">
        <li><a href="https://www.modena.com/id_id/support-main-page/">Kontak Kami</a></li>
        <li><a href="https://www.modena.com/id_id/support-service-center/">Service Center</a></li>
        <li><a href="https://www.modena.com/id_id/trade-in/">Registrasi Produk</a></li>
        <li><a href="https://www.modena.com/id_id/contract-service/">Kontrak Servis</a></li>
      </ul>
    </div>

    <div>
      <h4 className="font-semibold mb-4">Informasi</h4>
      <ul className="space-y-2 text-gray-400">
        <li><a href="https://www.modena.com/id_id/privacy-policy/">Kebijakan Privasi</a></li>
        <li><a href="https://www.modena.com/id_id/cookie-policy/">Kebijakan Cookie</a></li>
        <li><a href="https://www.modena.com/id_id/terms-and-conditions/">Syarat & Ketentuan</a></li>
        <li><a href="https://www.modena.com/id_id/whistleblower">Whistleblower</a></li>
      </ul>
    </div>
  </div>

  <div className="bg-[#111111] border-t border-gray-700">
    <div className="container mx-auto py-6 text-center text-gray-500 text-sm">
      © 2025 MODENA. All Rights Reserved
    </div>
  </div>
</footer>

  );
}
export default Footer;