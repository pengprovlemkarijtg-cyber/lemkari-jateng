const cabang = [
  {
    no: "01",
    nama: "Kabupaten Banjarnegara",
    slug: "kabupaten-banjarnegara",
  },
  {
    no: "02",
    nama: "Kabupaten Banyumas",
    slug: "kabupaten-banyumas",
  },
  {
    no: "03",
    nama: "Kabupaten Batang",
    slug: "kabupaten-batang",
  },
  {
    no: "04",
    nama: "Kabupaten Blora",
    slug: "kabupaten-blora",
  },
  {
    no: "05",
    nama: "Kabupaten Cilacap",
    slug: "kabupaten-cilacap",
  },
  {
    no: "06",
    nama: "Kabupaten Demak",
    slug: "kabupaten-demak",
  },
  {
    no: "07",
    nama: "Kabupaten Grobogan",
    slug: "kabupaten-grobogan",
  },
  {
    no: "08",
    nama: "Kabupaten Jepara",
    slug: "kabupaten-jepara",
  },
  {
    no: "09",
    nama: "Kabupaten Kebumen",
    slug: "kabupaten-kebumen",
  },
  {
    no: "10",
    nama: "Kabupaten Kendal",
    slug: "kabupaten-kendal",
  },
  {
    no: "11",
    nama: "Kabupaten Klaten",
    slug: "kabupaten-klaten",
    },
  {
    no: "12",
    nama: "Kabupaten Kudus",
    slug: "kabupaten-kudus",
    },
  {
    no: "13",
    nama: "Kabupaten Magelang",
    slug: "kabupaten-magelang",
  },
  {
    no: "14",
    nama: "Kota Magelang",
    slug: "kota-magelang",
  },
  {
    no: "15",
    nama: "Kabupaten Pekalongan",
    slug: "kabupaten-pekalongan",
  },
  {
    no: "16",
    nama: "Kota Pekalongan",
    slug: "kota-pekalongan",
  },
  {
    no: "17",
    nama: "Kabupaten Pati",
    slug: "kabupaten-pati",
  },
  {
    no: "18",
    nama: "Kabupaten Purbalingga",
    slug: "kabupaten-purbalingga",
  },
  {
    no: "19",
    nama: "Kota Semarang",
    slug: "kota-semarang",
  },
  {
    no: "20",
    nama: "Kabupaten Sragen",
    slug: "kabupaten-sragen",
  },
  {
    no: "21",
    nama: "Kabupaten Sukoharjo",
    slug: "kabupaten-sukoharjo",
  },
  {
    no: "22",
    nama: "Kota Surakarta",
    slug: "kota-surakarta",
  },
  {
    no: "23",
    nama: "Kabupaten Tegal",
    slug: "kabupaten-tegal",
  },
  {
    no: "24",
    nama: "Kabupaten Temanggung",
    slug: "kabupaten-temanggung",
  },
  {
    no: "25",
    nama: "Kabupaten Wonosobo",
    slug: "kabupaten-wonosobo",
  },
];

export default function DaftarCabang() {
  return (
    <main>

      {/* HEADER */}

      <div className="container back-home-wrapper">
  <a href="/" className="back-home-button">
    ← Kembali ke Beranda
  </a>
</div>

      <section className="page-hero">
        <div className="container page-hero-content">

          <span>
            WILAYAH ORGANISASI
          </span>

          <h1>
            Cabang LEMKARI
          </h1>

          <p>
            Informasi cabang LEMKARI Karate-Do Indonesia
            yang berada di wilayah Provinsi Jawa Tengah.
          </p>

        </div>
      </section>


      {/* INTRO */}
      <section className="section">
        <div className="container">

          <div className="branch-intro">

            <div>
              <span className="section-label">
                ORGANISASI DAERAH
              </span>

              <h2>
                Jaringan Cabang
                <br />
                LEMKARI Jawa Tengah
              </h2>
            </div>

            <p>
              Halaman ini memuat informasi cabang LEMKARI
              di tingkat kabupaten dan kota. Pilih salah satu
              cabang untuk melihat informasi lebih lengkap
              mengenai pengurus dan sekretariat.
            </p>

          </div>

        </div>
      </section>


      {/* CABANG */}
      <section className="section section-gray">
        <div className="container">

          <div className="section-heading">

            <span>
              DAFTAR WILAYAH
            </span>

            <h2>
              Cabang LEMKARI
            </h2>

          </div>


          <div className="branch-modern-grid">

            {cabang.map((item) => (
              <a
                href={`/cabang/${item.slug}`}
                className="branch-modern-card"
                key={item.slug}
              >

                <div className="branch-card-top">

                  <span className="branch-number">
                    {item.no}
                  </span>

                  <span className="branch-status">
                    AKTIF
                  </span>

                </div>


                <div className="branch-card-icon">
                  📍
                </div>


                <div className="branch-card-content">

                  <span>
                    {item.wilayah}
                  </span>

                  <h3>
                    {item.nama}
                  </h3>

                </div>


                <div className="branch-card-link">
                  Lihat Detail
                  <span>→</span>
                </div>

              </a>
            ))}

          </div>

        </div>
      </section>


      {/* INFORMATION */}
      <section className="section">
        <div className="container">

          <div className="branch-info-box">

            <div className="branch-info-number">
              {String(cabang.length).padStart(2, "0")}
            </div>

            <div>

              <span>
                TOTAL CABANG
              </span>

              <h2>
                Cabang Terdaftar
              </h2>

              <p>
                Jumlah cabang yang ditampilkan pada website
                akan mengikuti data resmi Pengprov LEMKARI
                Jawa Tengah.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* CTA */}
      <section className="official-cta">

        <div className="container">

          <div>

            <span>
              LEMKARI JAWA TENGAH
            </span>

            <h2>
              Temukan Cabang
              <br />
              di Wilayah Anda
            </h2>

            <p>
              Pilih cabang untuk mendapatkan informasi
              pengurus, sekretariat, kontak dan kegiatan.
            </p>

          </div>

          <a
            href="/pengurus-provinsi"
            className="button button-light"
          >
            Lihat Pengurus Provinsi →
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