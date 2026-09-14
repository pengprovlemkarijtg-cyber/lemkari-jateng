export default function OrganisasiPage() {
  return (
    <main>

      {/* HEADER */}
      <header className="simple-header">
        <div className="container simple-header-content">

          <a href="/" className="back-home">
            ← Kembali ke Beranda
          </a>

          <div className="page-brand">
            LEMKARI KARATE-DO INDONESIA
            <span>PROVINSI JAWA TENGAH</span>
          </div>

        </div>
      </header>


      {/* HERO HALAMAN */}
      <section className="page-hero">
        <div className="container">

          <span>PROFIL PERGURUAN</span>

          <h1>
            LEMKARI KARATE-DO INDONESIA
          </h1>

          <p>
            Provinsi Jawa Tengah
          </p>

        </div>
      </section>


      {/* PROFIL */}
      <section className="section">
        <div className="container">

          <div className="section-heading">
            <span>TENTANG KAMI</span>
            <h2>Profil LEMKARI Jawa Tengah</h2>
          </div>

          <div className="organization-content">

            <div className="organization-logo">
  <div className="large-logo">
    <img
      src="/images/logo-lemkari.png"
      alt="Logo LEMKARI Karate-Do Indonesia"
    />
  </div>
</div>


            <div className="organization-text">

              <h3>
                LEMKARI Jawa Tengah
              </h3>

              <p>
                LEMKARI Jawa Tengah merupakan bagian dari Pengurus Besar LEMKARI Karate-Do Indonesia yang berkomitmen dalam pembinaan, pengembangan, dan peningkatan prestasi karate di Provinsi Jawa Tengah.
              </p>

              <p>
                 Kami terus berupaya membangun organisasi yang solid, meningkatkan kualitas, memperluas pengembangan karate di berbagai daerah, serta mencetak karateka-karateka berprestasi yang mampu mengharumkan nama Jawa Tengah di tingkat nasional maupun internasional.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* SEJARAH */}
      <section className="section section-gray">
        <div className="container">

          <div className="section-heading">
            <span>SEJARAH</span>
            <h2>Perguruan LEMKARI</h2>
          </div>

          <div className="text-section">

            <p>
              LEMKARI didirikan oleh Saiko Shihan Anton Lesiangi pada 30 Agustus 1970 dan secara organisatoris disahkan pada Kongres I LEMKARI pada 12 September 1972 di Pandaan, Jawa Timur.
            </p>

            <p>
              LEMKARI merupakan salah satu perguruan karate nasional di Indonesia yang memiliki akar sejarah dari perkembangan karate aliran Shotokan di tanah air. Berdirinya LEMKARI tidak dapat dilepaskan dari perkembangan PORKI (Persatuan Olahraga Karate Indonesia), yang kemudian menjadi bagian penting dari sejarah terbentuknya FORKI. 
            </p>

            <p>
              LEMKARI secara resmi melakukan rebranding identitas serta lambang perguruan melalui Kongres Luar Biasa LEMKARI pada 13 Juni 2026, di Hotel Grand Kemang, Jakarta Selatan. Langkah ini bertujuan memperjelas identitas organisasi, menyesuaikan ketentuan administrasi, legalitas organisasi, serta memperkuat eksistensi LEMKARI dalam pembinaan olahraga karate nasional.
            </p>

          </div>

        </div>
      </section>


      {/* LAMBANG */}
<section className="section section-gray">
  <div className="container">

    <div className="section-heading">
      <span>IDENTITAS PERGURUAN</span>
      <h2>Lambang Perguruan</h2>
    </div>

    <div className="emblem-section">

      <div className="emblem-placeholder">
        <img
          src="/images/logo-lemkari.png"
          alt="Lambang Resmi LEMKARI"
          className="large-logo"
        />
      </div>

      <div className="emblem-text">

        <h3>
          Lambang Resmi LEMKARI
        </h3>

        <p>
          Lambang resmi LEMKARI KARATE-DO INDONESIA
          Provinsi Jawa Tengah dapat diunduh oleh
          seluruh pengguna website.
        </p>

        <a
          href="/downloads/lambang-lemkari.png"
          download
          className="button button-dark"
        >
          ↓ Download Lambang
        </a>

      </div>

    </div>

  </div>
</section>


      {/* MARS */}
<section className="section mars-section">

  <div className="container">

    <div className="section-heading">
      <span>MARS PERGURUAN</span>
      <h2>Mars LEMKARI</h2>
    </div>

    <div className="mars-box">

      <div>

        <h3>
          Mars LEMKARI Karate-Do Indonesia
        </h3>

        <p>
          Dengarkan Mars LEMKARI melalui pemutar audio
          di bawah ini atau unduh file Mars untuk
          digunakan sesuai kebutuhan perguruan.
        </p>

        <audio
          controls
          className="mars-player"
        >
          <source
            src="/downloads/mars-lemkari.mp3"
            type="audio/mpeg"
          />

          Browser Anda tidak mendukung pemutar audio.
        </audio>

      </div>

      <div className="mars-buttons">

        <a
          href="/downloads/mars-lemkari.mp3"
          download
          className="button button-dark"
        >
          ↓ Download Mars
        </a>

      </div>

    </div>

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