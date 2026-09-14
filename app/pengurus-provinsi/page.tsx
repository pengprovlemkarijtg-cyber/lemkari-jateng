const pengurusUtama = [
  {
    jabatan: "KETUA",
    nama: "Willy Budiyanto, S.H., M.H.",
  },
  {
    jabatan: "WAKIL KETUA I",
    nama: "Moh. Ghufron, S.Pd.I.",
  },
  {
    jabatan: "WAKIL KETUA II",
    nama: "Abdul Haris",
  },
  {
    jabatan: "WAKIL KETUA III",
    nama: "Nur Fauzi, S.H., M.H.",
  },
  {
    jabatan: "SEKRETARIS",
    nama: "Eko Supardi, S.Pd.",
  },
  {
    jabatan: "WAKIL SEKRETARIS",
    nama: "Malik Abdul Azis, S.Ars.",
  },
  {
    jabatan: "BENDAHARA",
    nama: "Sugeng Priyadi",
  },
  {
    jabatan: "WAKIL BENDAHARA",
    nama: "Rina Tjahyati, S.H.",
  },
  {
    jabatan: "KETUA MAJELIS SABUK HITAM",
    nama: "Sulistiyo Handoko",
  },
  {
    jabatan: "WAKIL KETUA MAJELIS SABUK HITAM",
    nama: "Jundi Pamungkas, S.Ag.",
  },
];

const bidang = [
  {
    nomor: "01",
    nama: "Bidang Organisasi",
    keterangan: "Mengelola dan mengembangkan organisasi serta cabang.",
  },
  {
     nomor: "02",
    nama: "Bidang Komisi Disiplin dan Kode Etik",
    keterangan: "Menjaga kedisiplinan dan kode etik anggota LEMKARI.",
  },
  {
     nomor: "03",
    nama: "Bidang Penegakan Hukum Organisasi",
    keterangan: "Memastikan kepatuhan peraturan organisasi serta menangani pelanggaran sesuai aturan yang berlaku.",
  },
  {
    nomor: "04",
    nama: "Bidang Pembinaan Prestasi",
    keterangan: "Pembinaan atlet, pelatih dan pengembangan prestasi.",
  },
  {
    nomor: "05",
    nama: "Bidang Komisi Perwasitan",
    keterangan: "Pembinaan dan pengembangan perwasitan.",
  },
  {
    nomor: "06",
    nama: "Bidang Kepelatihan dan Pengembangan Teknik",
    keterangan: "Meningkatkan kualitas pelatih serta pengembangan teknik yang terarah dan berkelanjutan.",
  },
  {
    nomor: "07",
    nama: "Bidang Gashuku dan Ujian",
    keterangan: "Pengembangan Ujian Kenaikan Tingkat dan latihan bersama.",
  },
  {
    nomor: "08",
    nama: "Bidang Pertandingan",
    keterangan: "Pengembangan kejuaraan internal sebagai evaluasi atlet.",
  },
  {
    nomor: "09",
    nama: "Bidang Penelitian, Pengembangan, dan IPTEK",
    keterangan: "penelitian, pengembangan inovasi, serta pemanfaatan ilmu pengetahuan dan teknologi untuk mendukung kemajuan organisasi.",
  },
  {
    nomor: "10",
    nama: "Bidang Hubungan Masyarakat",
    keterangan: "Membangun komunikasi, menjaga hubungan baik, serta menyampaikan informasi organisasi.",
  },
  {
    nomor: "11",
    nama: "Bidang Usaha Dana",
    keterangan: "Mengelola dan mengembangkan kegiatan usaha serta sumber pendanaan organisasi.",
  },
  {
    nomor: "12",
    nama: "Bidang Sarana dan Prasarana",
    keterangan: "Mengelola, menyediakan, dan memastikan ketersediaan serta kelayakan sarana dan prasarana.",
  },
  {
    nomor: "13",
    nama: "Bidang Pembinaan Akhlak Mulia dan Kerohanian",
    keterangan: "Membina karakter, akhlak, dan nilai spiritual anggota LEMKARI.",
  },
  
];

export default function PengurusProvinsi() {
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
          <span>STRUKTUR ORGANISASI</span>

          <h1>
            Pengurus Provinsi
          </h1>

          <p>
            Struktur kepengurusan LEMKARI Karate-Do Indonesia
            Provinsi Jawa Tengah.
          </p>
        </div>
      </section>


      {/* PENGURUS INTI */}
      <section className="section">
        <div className="container">

          <div className="section-heading">
            <span>PENGURUS PROVINSI</span>

            <h2>
              Pengurus Harian
            </h2>
          </div>


          <div className="official-grid">

            {pengurusUtama.map((item) => (
              <div
                className="official-card"
                key={item.jabatan}
              >

                <div className="official-photo">
                  <span>LEMKARI</span>
                </div>

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


      {/* STRUKTUR BIDANG */}
      <section className="section section-gray">
        <div className="container">

          <div className="section-heading">
            <span>STRUKTUR KEPENGURUSAN</span>

            <h2>
              Bidang-Bidang
            </h2>
          </div>


          <div className="division-grid">

  {bidang.map((item) => (
    <a
      href={`/pengurus-provinsi/${item.nomor}`}
      className="division-card"
      key={item.nomor}
    >

      <div className="division-number">
        {item.nomor}
      </div>

      <div>
        <h3>
          {item.nama}
        </h3>

        <p>
          {item.keterangan}
        </p>
      </div>

      <div className="division-arrow">
        →
      </div>

    </a>
  ))}

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
              Bersama Membangun
              <br />
              Karate Jawa Tengah
            </h2>

            <p>
              Informasi kepengurusan dan organisasi akan
              diperbarui sesuai data resmi perguruan.
            </p>
          </div>

          <a
            href="/cabang"
            className="button button-light"
          >
            Lihat Daftar Cabang →
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