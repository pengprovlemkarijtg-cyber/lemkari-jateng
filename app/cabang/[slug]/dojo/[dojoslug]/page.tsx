const dataDojo: Record<
  string,
  {
    nama: string;
    pelatih: string;
    fotoPelatih: string;
    logoDojo: string;
    tagline: string;
    alamat: string;
    kontak: string;
    galeri: string[];
  }
> = {
  "smalsa": {
    nama: "SMA Al-Islam 1 Surakarta",
      pelatih: "Malik Abdul Azis, S.Ars.",
      fotoPelatih: "/images/malik.jpg",
      logoDojo: "/images/logo-smalsa.png",
      tagline: "'Hesitation is Defeat'",
      alamat: "Jl. Honggowongso No.94, Panularan, Kec. Laweyan, Kota Surakarta, Jawa Tengah 57149",
      kontak: "0812 3648 6837",
      galeri: [
      "/images/dojo/smalsa/foto-1.jpg",
      "/images/dojo/smalsa/foto-2.jpg",
      "/images/dojo/smalsa/foto-3.jpg",
      "/images/dojo/smalsa/foto-4.jpg",
      "/images/dojo/smalsa/foto-5.jpg",
      "/images/dojo/smalsa/foto-6.jpg",
    ],
  }
};


export default async function DetailDojo({
  params,
}: {
  params: Promise<{
    slug: string;
    dojoslug: string;
  }>;
}) {

  const { slug, dojoslug } = await params;

  const dojo = dataDojo[dojoslug];


  if (!dojo) {
    return (
      <main>

        <section className="page-hero">

          <div className="container page-hero-content">

            <span>
              LEMKARI JAWA TENGAH
            </span>

            <h1>
              Dojo Tidak Ditemukan
            </h1>

            <p>
              Data dojo yang Anda cari belum tersedia
              pada website.
            </p>

          </div>

        </section>


        <section className="section">

          <div className="container">

            <a
              href={`/cabang/${slug}`}
              className="button button-dark"
            >
              ← Kembali ke Cabang
            </a>

          </div>

        </section>

      </main>
    );
  }


  return (
    <main>

      {/* HEADER */}

      <section className="page-hero">

        <div className="container page-hero-content">

          <a
            href={`/cabang/${slug}`}
            className="branch-back-link"
          >
            ← Kembali ke Cabang
          </a>

          <span className="branch-page-label">
            
          </span>

          <h1>
            {dojo.nama}
          </h1>

          <p>
            LEMKARI Karate-Do Indonesia
            <br />
            Provinsi Jawa Tengah
          </p>

        </div>

      </section>


      {/* IDENTITAS DOJO */}

      <section className="section">

        <div className="container">

          <div className="dojo-profile">

            <div className="dojo-profile-logo">
  <img
    src={dojo.logoDojo}
    alt={`Logo ${dojo.nama}`}
  />
</div>

            <div className="dojo-profile-info">

              <span>
                DOJO LEMKARI
              </span>

              <h2>
                {dojo.nama}
              </h2>

              <p>
  {dojo.tagline}
</p>

            </div>

          </div>

        </div>

      </section>


      {/* INFORMASI DOJO */}

      <section className="section section-gray">

        <div className="container">

          <div className="section-heading">

            <span>
              INFORMASI DOJO
            </span>

            <h2>
              Pelatih & Kontak
            </h2>

          </div>


          <div className="dojo-detail-grid">

            {/* PELATIH */}

            <div className="dojo-detail-card">

            <div className="dojo-coach-photo">
  <img
    src={dojo.fotoPelatih}
    alt={`Foto ${dojo.pelatih}`}
  />
</div>

              <span>
                PELATIH
              </span>

              <h3>
                {dojo.pelatih}
              </h3>

            </div>


            {/* ALAMAT */}

            <div className="dojo-detail-card">

              <div className="dojo-detail-icon">
                📍
              </div>

              <span>
                LOKASI LATIHAN
              </span>

              <h3>
                Alamat Dojo
              </h3>

              <p>
                {dojo.alamat}
              </p>

            </div>


            {/* KONTAK */}

            <div className="dojo-detail-card">

              <div className="dojo-detail-icon">
                ☎
              </div>

              <span>
                KONTAK
              </span>

              <h3>
                {dojo.kontak}
              </h3>

              <a
                href={`https://wa.me/${dojo.kontak.replace(/^0/, "62")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="dojo-whatsapp"
              >
                Hubungi via WhatsApp →
              </a>

            </div>

          </div>

        </div>

      </section>

            {/* GALERI DOJO */}

<section className="section dojo-gallery-section">

  <div className="container">

    <div className="section-heading">

      <span>
        GALERI DOJO
      </span>

      <h2>
        
      </h2>

      <p>
        
      </p>

    </div>


    <div className="dojo-gallery-grid">

      {dojo.galeri.map((foto, index) => (

        <div
          className="dojo-gallery-item"
          key={foto}
        >

          <img
            src={foto}
            alt={`Kegiatan ${dojo.nama} ${index + 1}`}
          />

        </div>

      ))}

    </div>

  </div>

</section>


      {/* KEMBALI */}

      <section className="section">

        <div className="container">

          <a
            href={`/cabang/${slug}`}
            className="button"
          >
            ← Kembali ke Daftar Dojo
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
