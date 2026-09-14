"use client";

/* =====================================================
   HALAMAN PRESTASI & PENCAPAIAN
   ===================================================== */

import { useState } from "react";
import Link from "next/link";

type Prestasi = {
  nama: string;
  jabatan?: string;
  slug: string;
  foto?: string;
  kategori?: string;
  cabang?: string;
  dojo?: string;
  tahun?: string;
  tanggalInput: string;
  prestasi: string[];
  kejuaraan?: string[];
  deskripsi?: string;
  informasiTambahan?: string;
};

const dataPrestasi: Prestasi[] = [
  {
  nama: "Nama Atlet / Tokoh",
  jabatan: "Atlet LEMKARI Jawa Tengah",
  slug: "nama-atlet-tokoh",
  foto: "/images/prestasi/atlet-1.jpg",
  kategori: "Atlet",
  cabang: "Kota Surakarta",
  dojo: "SMA Al-Islam 1 Surakarta",
  tahun: "2025",
  tanggalInput: "2026-09-10",

  prestasi: [
    "Juara 1 Kejuaraan Karate Tingkat Nasional",
  ],

  kejuaraan: [
    "Kejuaraan Karate Nasional 2025",
  ],

}
];

function formatNomor(index: number) {
  return String(index + 1).padStart(2, "0");
}

export default function PrestasiPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const togglePrestasi = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <main>
      {/* =====================================================
          HEADER
          ===================================================== */}
      <section className="simple-header">
        <div className="container simple-header-content">
          <Link href="/" className="back-home">
            ← Kembali ke Beranda
          </Link>

          <div className="page-brand">
            LEMKARI
            <span>PROVINSI JAWA TENGAH</span>
          </div>
        </div>
      </section>

      {/* =====================================================
          HERO
          ===================================================== */}
      <section className="page-hero prestasi-hero">
        <div className="container page-hero-content">
          <span className="page-hero-label"></span>

          <h1>
            Prestasi &amp;
            <br />
            Pencapaian
          </h1>

          <p>
            Mengenal para atlet, pelatih, dan tokoh LEMKARI Jawa Tengah
            beserta prestasi dan pencapaian yang telah diraih.
          </p>
        </div>
      </section>

      {/* =====================================================
          INTRO
          ===================================================== */}
      <section className="section prestasi-intro">
        <div className="container">
          <div className="section-heading">
            <span>CATATAN PRESTASI</span>

            <h2>
              Mereka yang Mengharumkan
              <br />
              Nama LEMKARI Jawa Tengah
            </h2>

    
          </div>
        </div>
      </section>

      {/* =====================================================
          DAFTAR PRESTASI
          ===================================================== */}
      <section className="section prestasi-list-section">
        <div className="container">
          <div className="prestasi-list">
            {[...dataPrestasi]
  .sort(
    (a, b) =>
      new Date(b.tanggalInput).getTime() -
      new Date(a.tanggalInput).getTime()
  )
  .map((item, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  className={`prestasi-item ${
                    isActive ? "prestasi-item-active" : ""
                  }`}
                  key={item.slug}
                >
                  {/* BAR JUDUL */}
                  <button
                    type="button"
                    className="prestasi-title"
                    onClick={() => togglePrestasi(index)}
                    aria-expanded={isActive}
                  >
                    <span className="prestasi-number">
                      {formatNomor(index)}
                    </span>

                    <span className="prestasi-title-text">
                      <strong>{item.nama}</strong>

                      {item.jabatan && (
                        <small>{item.jabatan}</small>
                      )}
                    </span>

                    <span className="prestasi-category">
                      {item.kategori || "PRESTASI"}
                    </span>

                    <span className="prestasi-plus">
                      {isActive ? "−" : "+"}
                    </span>
                  </button>

                  {/* DETAIL */}
                  {isActive && (
                    <div className="prestasi-detail">
                      <div className="prestasi-detail-grid">
                        {/* FOTO */}
                        <div className="prestasi-photo-wrapper">
                          {item.foto ? (
                            <img
                              src={item.foto}
                              alt={item.nama}
                              className="prestasi-photo"
                            />
                          ) : (
                            <div className="prestasi-photo-placeholder">
                              <span>LEMKARI</span>
                              <small>FOTO</small>
                            </div>
                          )}
                        </div>

                        {/* INFORMASI */}
                        <div className="prestasi-content">
                          <div className="prestasi-heading">
                            <span>
                              {item.kategori || "PRESTASI"}
                            </span>

                            <h3>{item.nama}</h3>

                            {item.jabatan && (
                              <p className="prestasi-position">
                                {item.jabatan}
                              </p>
                            )}
                          </div>

                          {/* DATA SINGKAT */}
                          {(item.cabang ||
                            item.dojo ||
                            item.tahun) && (
                            <div className="prestasi-meta">
                              {item.cabang && (
                                <div className="prestasi-meta-item">
                                  <span>CABANG</span>
                                  <strong>{item.cabang}</strong>
                                </div>
                              )}

                              {item.dojo && (
                                <div className="prestasi-meta-item">
                                  <span>DOJO</span>
                                  <strong>{item.dojo}</strong>
                                </div>
                              )}

                              {item.tahun && (
                                <div className="prestasi-meta-item">
                                  <span>TAHUN</span>
                                  <strong>{item.tahun}</strong>
                                </div>
                              )}
                            </div>
                          )}

                          {/* DESKRIPSI */}
                          {item.deskripsi && (
                            <div className="prestasi-description">
                              <h4>Profil &amp; Pencapaian</h4>

                              <p>{item.deskripsi}</p>
                            </div>
                          )}

                          {/* DAFTAR PRESTASI */}
                          {item.prestasi &&
                            item.prestasi.length > 0 && (
                              <div className="prestasi-achievement">
                                <h4>Prestasi yang Diraih</h4>

                                <ul>
                                  {item.prestasi.map(
                                    (prestasi, prestasiIndex) => (
                                      <li key={prestasiIndex}>
                                        <span className="achievement-check">
                                          ✓
                                        </span>

                                        <span>{prestasi}</span>
                                      </li>
                                    )
                                  )}
                                </ul>
                              </div>
                            )}

                          {/* KEJUARAAN */}
                          {item.kejuaraan &&
                            item.kejuaraan.length > 0 && (
                              <div className="prestasi-achievement">
                                <h4>Kejuaraan / Event</h4>

                                <ul>
                                  {item.kejuaraan.map(
                                    (kejuaraan, kejuaraanIndex) => (
                                      <li key={kejuaraanIndex}>
                                        <span className="achievement-dot">
                                          •
                                        </span>

                                        <span>{kejuaraan}</span>
                                      </li>
                                    )
                                  )}
                                </ul>
                              </div>
                            )}

                          {/* INFORMASI TAMBAHAN */}
                          {item.informasiTambahan && (
                            <div className="prestasi-note">
                              <strong>Catatan</strong>

                              <p>
                                {item.informasiTambahan}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          PENUTUP
          ===================================================== */}
      <section className="section prestasi-closing">
        <div className="container">
          <div className="prestasi-closing-box">
            <span></span>

            <h2>
              Prestasi adalah
              <br />
              bagian dari perjalanan.
            </h2>

            <p>
              Setiap pencapaian lahir dari latihan, kedisiplinan,
              semangat, dan perjuangan yang tidak pernah berhenti.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
          ===================================================== */}
      <footer className="footer">
        <div className="container footer-content">
          <div>
            <strong>LEMKARI KARATE-DO INDONESIA</strong>
            <span>PROVINSI JAWA TENGAH</span>
          </div>

          <p>
            © {new Date().getFullYear()} LEMKARI Jawa Tengah.
            Seluruh hak cipta dilindungi.
          </p>
        </div>
      </footer>
    </main>
  );
}