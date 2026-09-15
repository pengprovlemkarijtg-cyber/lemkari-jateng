"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main>

      {/* =====================================================
          NAVBAR
      ===================================================== */}

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


          {/* MENU DESKTOP */}

<nav className="nav-menu">

  <a href="/">
    Beranda
  </a>

  <a href="/organisasi">
    Organisasi
  </a>

  <a href="/pengurus-provinsi">
    Pengurus Provinsi
  </a>

  <a href="/cabang">
    Cabang
  </a>

  <a href="/keanggotaan">
    Keanggotaan
  </a>

  <a href="/ukt">
    UKT
  </a>

  <a href="/agenda">
    Agenda
  </a>

  <a href="/prestasi">
    Prestasi
  </a>

</nav>


{/* TOMBOL MENU PONSEL */}

<button
  type="button"
  className="mobile-menu-button"
  onClick={() => setMenuOpen(!menuOpen)}
  aria-label="Buka menu"
  aria-expanded={menuOpen}
>
  <span></span>
  <span></span>
  <span></span>
</button>


{/* MENU PONSEL */}

{menuOpen && (
  <nav className="mobile-nav-menu">

    <a
      href="/"
      onClick={() => setMenuOpen(false)}
    >
      Beranda
    </a>

    <a
      href="/organisasi"
      onClick={() => setMenuOpen(false)}
    >
      Organisasi
    </a>

    <a
      href="/pengurus-provinsi"
      onClick={() => setMenuOpen(false)}
    >
      Pengurus Provinsi
    </a>

    <a
      href="/cabang"
      onClick={() => setMenuOpen(false)}
    >
      Cabang
    </a>

    <a
      href="/keanggotaan"
      onClick={() => setMenuOpen(false)}
    >
      Keanggotaan
    </a>

    <a
      href="/ukt"
      onClick={() => setMenuOpen(false)}
    >
      UKT
    </a>

    <a
      href="/agenda"
      onClick={() => setMenuOpen(false)}
    >
      Agenda
    </a>

    <a
      href="/prestasi"
      onClick={() => setMenuOpen(false)}
    >
      Prestasi
    </a>

  </nav>
)}

        </div>

      </header>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        id="beranda"
        className="hero"
      >

        <div className="hero-overlay">

          <div className="container hero-content">

            <div className="hero-badge">
              LEMKARI KARATE-DO INDONESIA
            </div>

            <h1>
              PROVINSI
              <br />
              JAWA TENGAH
            </h1>

            <p>
              Website resmi informasi dan layanan
              LEMKARI Karate-Do Indonesia Provinsi Jawa Tengah
            </p>

            <div className="hero-buttons">

              <a
                href="#organisasi"
                className="button button-primary"
              >
                Tentang Organisasi
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          ORGANISASI
      ===================================================== */}

      <section
        id="organisasi"
        className="section"
      >

        <div className="container">

          <div className="section-heading">

            <span>
              PROFIL PERGURUAN
            </span>

            <h2>
              Tentang LEMKARI
            </h2>

          </div>


          <div className="about-grid">

            <div className="about-logo">

              <div className="large-logo">

                <img
                  src="/images/logo-lemkari.png"
                  alt="Logo LEMKARI Karate-Do Indonesia"
                />

              </div>

            </div>


            <div className="about-content">

              <h3>
                LEMKARI KARATE-DO INDONESIA
              </h3>

              <p>
                LEMKARI Karate-Do Indonesia Provinsi Jawa Tengah
                merupakan wadah pembinaan dan pengembangan
                karate Perguruan LEMKARI di Provinsi Jawa Tengah.
              </p>

              <p>
                Website ini menjadi pusat informasi organisasi,
                kepengurusan, cabang, serta agenda kegiatan mendatang.
              </p>

              <a
                href="/organisasi"
                className="text-button"
              >
                Selengkapnya →
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CABANG
      ===================================================== */}

      <section
        id="cabang"
        className="section section-gray"
      >

        <div className="container">

          <div className="section-heading">

            <span>
              WILAYAH ORGANISASI
            </span>

            <h2>
              Cabang LEMKARI Jawa Tengah
            </h2>

          </div>


          <div className="branch-grid">


            {/* KOTA SURAKARTA */}

            <div className="branch-card">

              <h3>
                Kota Surakarta
              </h3>

              <p>
                Informasi pengurus, sekretariat dan
                kontak administrasi cabang.
              </p>

              <a href="/cabang/kota-surakarta">
                Lihat Cabang →
              </a>

            </div>


            {/* KABUPATEN SUKOHARJO */}

            <div className="branch-card">

              <h3>
                Kabupaten Sukoharjo
              </h3>

              <p>
                Informasi pengurus, sekretariat dan
                kontak administrasi cabang.
              </p>

              <a href="/cabang/kabupaten-sukoharjo">
                Lihat Cabang →
              </a>

            </div>


            {/* KOTA SEMARANG */}

            <div className="branch-card">

              <h3>
                Kota Semarang
              </h3>

              <p>
                Informasi pengurus, sekretariat dan
                kontak administrasi cabang.
              </p>

              <a href="/cabang/kota-semarang">
                Lihat Cabang →
              </a>

            </div>

          </div>


          <div className="center-button">

            <a
              href="/cabang"
              className="button button-dark"
            >
              Lihat Semua Cabang
            </a>

          </div>

        </div>

      </section>


      {/* =====================================================
          DOWNLOAD
      ===================================================== */}

      <section className="download-section">

  <div className="container download-content">

    <div>

      <span>
        DOKUMEN PERGURUAN
      </span>

      <h2>
        Lambang & Mars Perguruan
      </h2>

      <p>
        Dokumen resmi yang dapat diunduh oleh
        seluruh pengguna website.
      </p>

    </div>


    <div className="download-buttons">

      <a
        href="/downloads/lambang-lemkari.png"
        download
        className="button button-outline"
      >
        ↓ Download Lambang
      </a>

      <a
        href="/downloads/mars-lemkari.mp3"
        download
        className="button button-outline"
      >
        ↓ Download Mars
      </a>

    </div>

  </div>

</section>


      {/* =====================================================
          SEKRETARIAT & KONTAK RESMI
      ===================================================== */}

      <section className="contact-section">

        <div className="container">

          <div className="section-heading">

            <span>
              HUBUNGI KAMI
            </span>

            <h2>
              Sekretariat & Kontak Resmi
            </h2>

            <p>
              Informasi kontak resmi LEMKARI Karate-Do Indonesia
              Provinsi Jawa Tengah.
            </p>

          </div>


          <div className="contact-grid">


            {/* SEKRETARIAT */}

            <div className="contact-card">

              <div className="contact-icon">
                📍
              </div>

              <div>

                <span>
                  SEKRETARIAT
                </span>

                <h3>
                  LEMKARI Jawa Tengah
                </h3>

                <p>
                  Dk. Pringtutul Selatan RT 04/02, Pringtutul, Rowokele, Kebumen 54472.
                </p>

                <p className="contact-address">
                  <strong>
                   
                  </strong>
                  <br />
                  
                </p>

              </div>

            </div>


            {/* EMAIL */}

            <div className="contact-card">

              <div className="contact-icon">
                ✉
              </div>

              <div>

                <span>
                  EMAIL RESMI
                </span>

                <h3>
                  Email Pengprov
                </h3>

                <p>
                  Untuk informasi dan komunikasi resmi
                  LEMKARI Jawa Tengah.
                </p>

                <a
                  href="mailto:pengprov.lemkarijtg@gmail.com"
                  className="contact-email"
                >
                  pengprov.lemkarijtg@gmail.com
                </a>

              </div>

            </div>


          </div>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

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