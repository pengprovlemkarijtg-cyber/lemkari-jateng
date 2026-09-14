const pengurusOrganisasi = [
  {
    jabatan: "KETUA BIDANG",
    nama: "Catur Krida Setiawan",
  },
  {
    jabatan: "ANGGOTA",
    nama: "Aufa Hanif Abiyyu Sulthon, S.T.",
  },
  {
    jabatan: "ANGGOTA",
    nama: "Achten Nungki Alfa S., S.Pd.",
  },
  {
    jabatan: "ANGGOTA",
    nama: "Kukuh Prayoga, S.Pd.",
  },
  
];

export default function BidangOrganisasi() {
  return (
    <main>

      {/* NAVBAR */}
      <header className="navbar">
        <div className="container nav-content">

          <div className="brand">

            <div className="brand-logo">
              <img
                src="/images/logo-lemkari.png"
                alt="Logo LEMKARI"
              />
            </div>

            <div>
              <div className="brand-title">
                LEMKARI
              </div>

              <div className="brand-subtitle">
                KARATE-DO INDONESIA
              </div>

              <div className="brand-province">
                PROVINSI JAWA TENGAH
              </div>
            </div>

          </div>

          <nav className="nav-menu">
            <a href="/">Beranda</a>
            <a href="/organisasi">Organisasi</a>
            <a href="/pengurus-provinsi">Pengurus Provinsi</a>
            <a href="/cabang">Cabang</a>
            <a href="/#ijazah">Cek Ijazah</a>
            <a href="/#agenda">Agenda</a>
          </nav>

        </div>
      </header>


      {/* HEADER HALAMAN */}
      <section className="page-hero">
        <div className="container page-hero-content">

          <span>BIDANG PENGURUS PROVINSI</span>

          <h1>
            Bidang Kepelatihan dan Pengembangan Teknik
          </h1>

          <p>
            Susunan pengurus Bidang Kepelatihan dan Pengembangan Teknik
          </p>

        </div>
      </section>


      {/* PENGURUS BIDANG */}
      <section className="section">
        <div className="container">

          <div className="section-heading">
            <span>PENGURUS BIDANG</span>

            <h2>
              Kepelatihan dan Pengembangan Teknik
            </h2>
          </div>


          <div className="official-grid">

            {pengurusOrganisasi.map((item, index) => (
              <div
                className="official-card"
                key={index}
              >

                {/* FOTO */}
                <div className="official-photo">
                  <span>FOTO</span>
                </div>


                {/* DATA PENGURUS */}
                <div className="official-info">

                  <span className="official-position">
                    {item.jabatan}
                  </span>

                  <h3>
                    {item.nama}
                  </h3>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* KEMBALI */}
      <section className="section section-gray">
        <div className="container">

          <a
            href="/pengurus-provinsi"
            className="button"
          >
            ← Kembali ke Pengurus Provinsi
          </a>

        </div>
      </section>


      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-content">

          <div>
            <h3>
              LEMKARI KARATE-DO INDONESIA
            </h3>

            <p>
              PROVINSI JAWA TENGAH
            </p>
          </div>

          <div>
            <p>
              Website Informasi Resmi
            </p>

            <p>
              © 2026 LEMKARI Jawa Tengah
            </p>
          </div>

        </div>
      </footer>

    </main>
  );
}