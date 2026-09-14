"use client";

type Agenda = {
  judul: string;
  tanggal?: string;

  // Digunakan untuk menentukan status otomatis
  tanggalAgenda: string;
  waktuMulai?: string;
  waktuSelesai?: string;

  waktu?: string;
  tempat?: string;
  foto?: string;
  deskripsi?: string;
  kategori?: string;
  peserta?: string;
  narahubung?: string;
  link?: string;
  linkLabel?: string;
  informasiTambahan?: string;
};

const dataAgenda: Agenda[] = [
  {
    judul: "Ujian Kenaikan Tingkat LEMKARI",
    tanggal: "20 September 2026",

    // Format tanggal: YYYY-MM-DD
    tanggalAgenda: "2026-09-20",

    // Jam mulai dan selesai digunakan untuk status otomatis
    waktuMulai: "08:00",
    waktuSelesai: "15:00",

    waktu: "08.00 – 15.00 WIB",
    tempat: "Balaikota Surakarta",
    foto: "/images/agenda/ukt.jpg",

    deskripsi:
      "Pelaksanaan Ujian Kenaikan Tingkat LEMKARI Karate-Do Indonesia Provinsi Jawa Tengah.",

    kategori: "Ujian",

    link: "/ukt",
    linkLabel: "Informasi UKT →",
  },

  {
    judul: "Gashuku LEMKARI Jawa Tengah",
    tanggal: "10 Oktober 2026",

    tanggalAgenda: "2026-10-10",

    waktuMulai: "08:00",
    waktuSelesai: "16:00",

    waktu: "08.00 – 16.00 WIB",
    tempat: "Tempat kegiatan",
    foto: "/images/agenda/gashuku.jpg",

    deskripsi:
      "Kegiatan latihan bersama dan pembinaan anggota LEMKARI Jawa Tengah.",

    kategori: "Pembinaan",
  },

  {
    judul: "Kejuaraan Karate",
    tanggal: "15 November 2026",

    tanggalAgenda: "2026-11-15",

    waktuMulai: "08:00",
    waktuSelesai: "17:00",

    waktu: "08.00 – 17.00 WIB",
    tempat: "GOR Tempat Kegiatan",
    foto: "/images/agenda/kejuaraan.jpg",

    deskripsi:
      "Kejuaraan karate yang diikuti oleh peserta dari berbagai dojo.",

    kategori: "Kompetisi",

    peserta: "Kumite dan Kata",

    link: "#",
    linkLabel: "Informasi & Pendaftaran →",
  },
];


/* =====================================================
   FUNGSI MENENTUKAN STATUS AGENDA
   ===================================================== */

function getStatusAgenda(
  tanggalAgenda: string,
  waktuMulai: string = "00:00",
  waktuSelesai: string = "23:59"
) {
  const [tahun, bulan, tanggal] = tanggalAgenda
    .split("-")
    .map(Number);

  const [jamMulai, menitMulai] = waktuMulai
    .split(":")
    .map(Number);

  const [jamSelesai, menitSelesai] = waktuSelesai
    .split(":")
    .map(Number);

  const waktuMulaiAgenda = new Date(
    tahun,
    bulan - 1,
    tanggal,
    jamMulai,
    menitMulai,
    0
  );

  const waktuSelesaiAgenda = new Date(
    tahun,
    bulan - 1,
    tanggal,
    jamSelesai,
    menitSelesai,
    59
  );

  const sekarang = new Date();

  if (sekarang < waktuMulaiAgenda) {
    return "segera";
  }

  if (sekarang > waktuSelesaiAgenda) {
    return "selesai";
  }

  return "berlangsung";
}

import Link from "next/link";
/* =====================================================
   HALAMAN AGENDA
   ===================================================== */

export default function AgendaPage() {
  return (
    <main>

            {/* =================================================
          KEMBALI KE BERANDA
      ================================================= */}

      <div className="container back-home-wrapper">
        <Link href="/" className="back-home-button">
          ← Kembali ke Beranda
        </Link>
      </div>

      {/* =================================================
          HERO
      ================================================= */}

      <section className="page-hero">

        <div className="container page-hero-content">

          <span>
            
          </span>

          <h1>
            Agenda Kegiatan
          </h1>

          <p>
            Informasi agenda dan kegiatan
            LEMKARI Karate-Do Indonesia
            Provinsi Jawa Tengah.
          </p>

        </div>

      </section>


      {/* =================================================
          DAFTAR AGENDA
      ================================================= */}

      <section className="section agenda-section">

        <div className="container">

          <div className="section-heading">

            <span>
              AGENDA
            </span>

            <h2>
              Kegiatan LEMKARI Jawa Tengah
            </h2>

            <p>
              Klik judul agenda untuk melihat informasi
              lengkap mengenai kegiatan.
            </p>

          </div>


          <div className="agenda-list">

            {dataAgenda.map((agenda, index) => {

              const status = getStatusAgenda(
                agenda.tanggalAgenda,
                agenda.waktuMulai,
                agenda.waktuSelesai
              );

              return (

                <details
                  className="agenda-item"
                  key={agenda.judul}
                >

                  {/* =================================================
                      JUDUL / BAR AGENDA
                  ================================================= */}

                  <summary className="agenda-title">

                    <div className="agenda-number">
                      {String(index + 1).padStart(2, "0")}
                    </div>


                    <div className="agenda-title-text">

                      <span>
                        {agenda.kategori || "AGENDA"}
                      </span>

                      <h3>
                        {agenda.judul}
                      </h3>

                    </div>


                    {/* STATUS */}

                    <div
                      className={`agenda-status agenda-status-${status}`}
                    >
                      {status === "segera" && "SEGERA"}

                      {status === "berlangsung" &&
                        "BERLANGSUNG"}

                      {status === "selesai" &&
                        "SELESAI"}
                    </div>


                    {/* TOMBOL + */}

                    <div className="agenda-plus">
                      +
                    </div>

                  </summary>


                  {/* =================================================
                      DETAIL AGENDA
                  ================================================= */}

                  <div className="agenda-detail">


                    {/* FOTO */}

                    {agenda.foto && (

                      <div className="agenda-photo">

                        <img
                          src={agenda.foto}
                          alt={agenda.judul}
                        />

                      </div>

                    )}


                    {/* INFORMASI */}

                    <div className="agenda-info">


                      <div className="agenda-info-header">

                        <span>
                          INFORMASI KEGIATAN
                        </span>

                        <h2>
                          {agenda.judul}
                        </h2>

                      </div>


                      {/* STATUS DI DALAM DETAIL */}

                      <div
                        className={`agenda-status-detail agenda-status-detail-${status}`}
                      >

                        <span>
                          STATUS KEGIATAN
                        </span>

                        <strong>

                          {status === "segera" &&
                            "SEGERA"}

                          {status === "berlangsung" &&
                            "BERLANGSUNG"}

                          {status === "selesai" &&
                            "SELESAI"}

                        </strong>

                      </div>


                      {/* =================================================
                          META INFORMASI
                      ================================================= */}

                      <div className="agenda-meta">


                        {agenda.tanggal && (

                          <div className="agenda-meta-item">

                            <span>
                              TANGGAL
                            </span>

                            <strong>
                              {agenda.tanggal}
                            </strong>

                          </div>

                        )}


                        {agenda.waktu && (

                          <div className="agenda-meta-item">

                            <span>
                              WAKTU
                            </span>

                            <strong>
                              {agenda.waktu}
                            </strong>

                          </div>

                        )}


                        {agenda.tempat && (

                          <div className="agenda-meta-item">

                            <span>
                              TEMPAT
                            </span>

                            <strong>
                              {agenda.tempat}
                            </strong>

                          </div>

                        )}


                        {agenda.kategori && (

                          <div className="agenda-meta-item">

                            <span>
                              KATEGORI
                            </span>

                            <strong>
                              {agenda.kategori}
                            </strong>

                          </div>

                        )}


                        {agenda.peserta && (

                          <div className="agenda-meta-item">

                            <span>
                              PESERTA
                            </span>

                            <strong>
                              {agenda.peserta}
                            </strong>

                          </div>

                        )}


                        {agenda.narahubung && (

                          <div className="agenda-meta-item">

                            <span>
                              NARAHUBUNG
                            </span>

                            <strong>
                              {agenda.narahubung}
                            </strong>

                          </div>

                        )}

                      </div>


                      {/* =================================================
                          DESKRIPSI
                      ================================================= */}

                      {agenda.deskripsi && (

                        <div className="agenda-description">

                          <h3>
                            Tentang Kegiatan
                          </h3>

                          <p>
                            {agenda.deskripsi}
                          </p>

                        </div>

                      )}


                      {/* =================================================
                          INFORMASI TAMBAHAN
                      ================================================= */}

                      {agenda.informasiTambahan && (

                        <div className="agenda-description">

                          <h3>
                            Informasi Tambahan
                          </h3>

                          <p>
                            {agenda.informasiTambahan}
                          </p>

                        </div>

                      )}


                      {/* =================================================
                          LINK
                      ================================================= */}

                      {agenda.link && (

                        <div className="agenda-action">

                          <a
                            href={agenda.link}
                            target={
                              agenda.link.startsWith("http")
                                ? "_blank"
                                : undefined
                            }
                            rel={
                              agenda.link.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
                            className="button button-primary"
                          >
                            {agenda.linkLabel ||
                              "Selengkapnya →"}
                          </a>

                        </div>

                      )}

                    </div>

                  </div>

                </details>

              );

            })}

          </div>

        </div>

      </section>


      {/* =================================================
          FOOTER
      ================================================= */}

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