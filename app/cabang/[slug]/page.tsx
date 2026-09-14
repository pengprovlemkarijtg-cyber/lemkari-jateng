const dataDojo: Record<
  string,
  {
    nama: string;
    slug: string;
    pelatih: string;
    alamat: string;
    kontak: string;
  }[]
> = {
  "kota-surakarta": [
    {
      nama: "SMA Al-Islam 1 Surakarta",
      slug: "smalsa",
      pelatih: "Malik Abdul Azis, S.Ars.",
      alamat: "Jl. Honggowongso No.94, Panularan, Kec. Laweyan, Kota Surakarta, Jawa Tengah 57149",
      kontak: "0812 3648 6837",
    },
  ],
};


const dataCabang: Record<
  string,
  {
    nama: string;
    wilayah: string;
    ketua: string;
    sekretaris: string;
    bendahara: string;
    alamat: string;
    telepon: string;
    email: string;
  }
> = {
  "kabupaten-banjarnegara": {
    nama: "Kabupaten Banjarnegara",
    ketua: "Nama Ketua",
    sekretaris: "Nama Sekretaris",
    bendahara: "Nama Bendahara",
    alamat: "Alamat sekretariat akan ditambahkan",
    telepon: "Nomor telepon akan ditambahkan",
    email: "Email cabang akan ditambahkan",
  },

  "kabupaten-banyumas": {
    nama: "Kabupaten Banyumas",
    ketua: "Nama Ketua",
    sekretaris: "Nama Sekretaris",
    bendahara: "Nama Bendahara",
    alamat: "Alamat sekretariat akan ditambahkan",
    telepon: "Nomor telepon akan ditambahkan",
    email: "Email cabang akan ditambahkan",
  },

  "kabupaten-blora": {
    nama: "Kabupaten Blora",
    ketua: "Nama Ketua",
    sekretaris: "Nama Sekretaris",
    bendahara: "Nama Bendahara",
    alamat: "Alamat sekretariat akan ditambahkan",
    telepon: "Nomor telepon akan ditambahkan",
    email: "Email cabang akan ditambahkan",
  },

  "kabupaten-batang": {
    nama: "Kabupaten Batang",
    ketua: "Nama Ketua",
    sekretaris: "Nama Sekretaris",
    bendahara: "Nama Bendahara",
    alamat: "Alamat sekretariat akan ditambahkan",
    telepon: "Nomor telepon akan ditambahkan",
    email: "Email cabang akan ditambahkan",
  },

  "kabupaten-cilacap": {
    nama: "Kabupaten Cilacap",
    ketua: "Nama Ketua",
    sekretaris: "Nama Sekretaris",
    bendahara: "Nama Bendahara",
    alamat: "Alamat sekretariat akan ditambahkan",
    telepon: "Nomor telepon akan ditambahkan",
    email: "Email cabang akan ditambahkan",
  },

  "kabupaten-demak": {
    nama: "Kabupaten Demak",
    ketua: "Nama Ketua",
    sekretaris: "Nama Sekretaris",
    bendahara: "Nama Bendahara",
    alamat: "Alamat sekretariat akan ditambahkan",
    telepon: "Nomor telepon akan ditambahkan",
    email: "Email cabang akan ditambahkan",
  },

  "kabupaten-grobogan": {
    nama: "Kabupaten Grobogan",
    ketua: "Nama Ketua",
    sekretaris: "Nama Sekretaris",
    bendahara: "Nama Bendahara",
    alamat: "Alamat sekretariat akan ditambahkan",
    telepon: "Nomor telepon akan ditambahkan",
    email: "Email cabang akan ditambahkan",
  },

  "kabupaten-jepara": {
    nama: "Kabupaten Jepara",
    ketua: "Nama Ketua",
    sekretaris: "Nama Sekretaris",
    bendahara: "Nama Bendahara",
    alamat: "Alamat sekretariat akan ditambahkan",
    telepon: "Nomor telepon akan ditambahkan",
    email: "Email cabang akan ditambahkan",
  },

  "kabupaten-magelang": {
    nama: "Kabupaten Magelang",
    ketua: "Nama Ketua",
    sekretaris: "Nama Sekretaris",
    bendahara: "Nama Bendahara",
    alamat: "Alamat sekretariat akan ditambahkan",
    telepon: "Nomor telepon akan ditambahkan",
    email: "Email cabang akan ditambahkan",
  },

  "kota-magelang": {
    nama: "Kabupaten Magelang",
    ketua: "Nama Ketua",
    sekretaris: "Nama Sekretaris",
    bendahara: "Nama Bendahara",
    alamat: "Alamat sekretariat akan ditambahkan",
    telepon: "Nomor telepon akan ditambahkan",
    email: "Email cabang akan ditambahkan",
  },

  "kabupaten-kebumen": {
    nama: "Kabupaten Kebumen",
    ketua: "Nama Ketua",
    sekretaris: "Nama Sekretaris",
    bendahara: "Nama Bendahara",
    alamat: "Alamat sekretariat akan ditambahkan",
    telepon: "Nomor telepon akan ditambahkan",
    email: "Email cabang akan ditambahkan",
  },

  "kabupaten-kendal": {
    nama: "Kabupaten Kendal",
    ketua: "Nama Ketua",
    sekretaris: "Nama Sekretaris",
    bendahara: "Nama Bendahara",
    alamat: "Alamat sekretariat akan ditambahkan",
    telepon: "Nomor telepon akan ditambahkan",
    email: "Email cabang akan ditambahkan",
  },

  "kabupaten-klaten": {
    nama: "Kabupaten Klaten",
    ketua: "Nama Ketua",
    sekretaris: "Nama Sekretaris",
    bendahara: "Nama Bendahara",
    alamat: "Alamat sekretariat akan ditambahkan",
    telepon: "Nomor telepon akan ditambahkan",
    email: "Email cabang akan ditambahkan",
  },

  "kabupaten-pekalongan": {
    nama: "Kabupaten Pekalongan",
    ketua: "Nama Ketua",
    sekretaris: "Nama Sekretaris",
    bendahara: "Nama Bendahara",
    alamat: "Alamat sekretariat akan ditambahkan",
    telepon: "Nomor telepon akan ditambahkan",
    email: "Email cabang akan ditambahkan",
  },

  "kota-pekalongan": {
    nama: "Kota pekalongan",
    ketua: "Nama Ketua",
    sekretaris: "Nama Sekretaris",
    bendahara: "Nama Bendahara",
    alamat: "Alamat sekretariat akan ditambahkan",
    telepon: "Nomor telepon akan ditambahkan",
    email: "Email cabang akan ditambahkan",
  },

  "kota-semarang": {
    nama: "Kota Semarang",
    ketua: "Nama Ketua",
    sekretaris: "Nama Sekretaris",
    bendahara: "Nama Bendahara",
    alamat: "Alamat sekretariat akan ditambahkan",
    telepon: "Nomor telepon akan ditambahkan",
    email: "Email cabang akan ditambahkan",
  },

  "kabupaten-kudus": {
    nama: "Kabupaten Kudus",
    ketua: "Nama Ketua",
    sekretaris: "Nama Sekretaris",
    bendahara: "Nama Bendahara",
    alamat: "Alamat sekretariat akan ditambahkan",
    telepon: "Nomor telepon akan ditambahkan",
    email: "Email cabang akan ditambahkan",
  },

  "kabupaten-pati": {
    nama: "Kabupaten Pati",
    ketua: "Nama Ketua",
    sekretaris: "Nama Sekretaris",
    bendahara: "Nama Bendahara",
    alamat: "Alamat sekretariat akan ditambahkan",
    telepon: "Nomor telepon akan ditambahkan",
    email: "Email cabang akan ditambahkan",
  },

  "kabupaten-purbalingga": {
    nama: "Kabupaten Purbalingga",
    ketua: "Nama Ketua",
    sekretaris: "Nama Sekretaris",
    bendahara: "Nama Bendahara",
    alamat: "Alamat sekretariat akan ditambahkan",
    telepon: "Nomor telepon akan ditambahkan",
    email: "Email cabang akan ditambahkan",
  },

  "kabupaten-sragen": {
    nama: "Kabupaten Sragen",
    ketua: "Nama Ketua",
    sekretaris: "Nama Sekretaris",
    bendahara: "Nama Bendahara",
    alamat: "Alamat sekretariat akan ditambahkan",
    telepon: "Nomor telepon akan ditambahkan",
    email: "Email cabang akan ditambahkan",
  },

  "kabupaten-sukoharjo": {
    nama: "Kabupaten Sukoharjo",
    ketua: "Nama Ketua",
    sekretaris: "Nama Sekretaris",
    bendahara: "Nama Bendahara",
    alamat: "Alamat sekretariat akan ditambahkan",
    telepon: "Nomor telepon akan ditambahkan",
    email: "Email cabang akan ditambahkan",
  },

  "kota-surakarta": {
    nama: "Kota Surakarta",
    ketua: "Dwi Ariyatno, S.STP., M.A.P.",
    sekretaris: "Nama Sekretaris",
    bendahara: "Nama Bendahara",
    alamat: "Alamat sekretariat akan ditambahkan",
    telepon: "Nomor telepon akan ditambahkan",
    email: "Email cabang akan ditambahkan",
  },

  "kabupaten-tegal": {
    nama: "Kabupaten Tegal",
    ketua: "Nama Ketua",
    sekretaris: "Nama Sekretaris",
    bendahara: "Nama Bendahara",
    alamat: "Alamat sekretariat akan ditambahkan",
    telepon: "Nomor telepon akan ditambahkan",
    email: "Email cabang akan ditambahkan",
  },

  "kabupaten-temanggung": {
    nama: "Kabupaten Temanggung",
    ketua: "Nama Ketua",
    sekretaris: "Nama Sekretaris",
    bendahara: "Nama Bendahara",
    alamat: "Alamat sekretariat akan ditambahkan",
    telepon: "Nomor telepon akan ditambahkan",
    email: "Email cabang akan ditambahkan",
  },

  "kabupaten-wonosobo": {
    nama: "Kabupaten Wonosobo",
    ketua: "Nama Ketua",
    sekretaris: "Nama Sekretaris",
    bendahara: "Nama Bendahara",
    alamat: "Alamat sekretariat akan ditambahkan",
    telepon: "Nomor telepon akan ditambahkan",
    email: "Email cabang akan ditambahkan",
  },
};


export default async function ProfilCabang({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const cabang = dataCabang[slug];

  if (!cabang) {
    return (
      <main>

        <section className="page-hero">
          <div className="container page-hero-content">

            <span>
              LEMKARI JAWA TENGAH
            </span>

            <h1>
              Cabang Tidak Ditemukan
            </h1>

            <p>
              Data cabang yang Anda cari belum tersedia
              pada website.
            </p>

          </div>
        </section>

        <section className="section">
          <div className="container">

            <a
              href="/cabang"
              className="button button-dark"
            >
              ← Kembali ke Daftar Cabang
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
            href="/cabang"
            className="branch-back-link"
          >
            ← Kembali ke Daftar Cabang
          </a>

          <span className="branch-page-label">
            
          </span>

          <h1>
            {cabang.nama}
          </h1>

          <p>
            LEMKARI Karate-Do Indonesia
            <br />
            Provinsi Jawa Tengah
          </p>

        </div>

      </section>


      {/* IDENTITAS */}
      <section className="section">

        <div className="container">

          <div className="branch-profile-header">

            <div className="branch-profile-symbol">
              L
            </div>

            <div>

              <span>
                LEMKARI JAWA TENGAH
              </span>

              <h2>
                Cabang {cabang.nama}
              </h2>

              <p>
                Wilayah {cabang.wilayah}
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* PENGURUS */}
      <section className="section section-gray">

        <div className="container">

          <div className="section-heading">

            <span>
              STRUKTUR CABANG
            </span>

            <h2>
              Pengurus Cabang
            </h2>

          </div>


          <div className="branch-official-grid">

            <div className="branch-official-card">

              <div className="branch-official-photo">
                FOTO
              </div>

              <div className="branch-official-info">

                <span>
                  KETUA
                </span>

                <h3>
                  {cabang.ketua}
                </h3>

                <p>
                  Pengurus Cabang LEMKARI
                </p>

              </div>

            </div>


            <div className="branch-official-card">

              <div className="branch-official-photo">
                FOTO
              </div>

              <div className="branch-official-info">

                <span>
                  SEKRETARIS
                </span>

                <h3>
                  {cabang.sekretaris}
                </h3>

                <p>
                  Pengurus Cabang LEMKARI
                </p>

              </div>

            </div>


            <div className="branch-official-card">

              <div className="branch-official-photo">
                FOTO
              </div>

              <div className="branch-official-info">

                <span>
                  BENDAHARA
                </span>

                <h3>
                  {cabang.bendahara}
                </h3>

                <p>
                  Pengurus Cabang LEMKARI
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* INFORMASI SEKRETARIAT */}
      <section className="section">

        <div className="container">

          <div className="section-heading">

            <span>
              INFORMASI CABANG
            </span>

            <h2>
              Sekretariat & Kontak
            </h2>

          </div>


          <div className="branch-contact-grid">

            <div className="branch-contact-card">

              <div className="branch-contact-icon">
                📍
              </div>

              <div>

                <span>
                  ALAMAT SEKRETARIAT
                </span>

                <p>
                  {cabang.alamat}
                </p>

              </div>

            </div>


            <div className="branch-contact-card">

              <div className="branch-contact-icon">
                ☎
              </div>

              <div>

                <span>
                  TELEPON
                </span>

                <p>
                  {cabang.telepon}
                </p>

              </div>

            </div>


            <div className="branch-contact-card">

              <div className="branch-contact-icon">
                @
              </div>

              <div>

                <span>
                  EMAIL
                </span>

                <p>
                  {cabang.email}
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* DAFTAR DOJO */}
      <section className="section section-gray">

        <div className="container">

          <div className="section-heading">

            <span>
              JARINGAN DOJO
            </span>

            <h2>
              Daftar Dojo
            </h2>

          </div>


          <div className="dojo-grid">

            {(dataDojo[slug] || []).map((dojo) => (

              <a
                href={`/cabang/${slug}/dojo/${dojo.slug}`}
                className="dojo-card"
                key={dojo.slug}
              >



                <div className="dojo-info">


                  <h3>
                    {dojo.nama}
                  </h3>

                  <p>
                    Pelatih: {dojo.pelatih}
                  </p>

                </div>


                <div className="dojo-link">
                  Lihat Dojo
                  <span>→</span>
                </div>

              </a>

            ))}

          </div>

        </div>

      </section>


      {/* KEGIATAN */}
      <section className="section section-gray">

        <div className="container">

          <div className="section-heading">

            <span>
              DOKUMENTASI
            </span>

            <h2>
              Kegiatan Cabang
            </h2>

          </div>


          <div className="branch-gallery">

            <div className="branch-gallery-item">
              <span>
                FOTO KEGIATAN
              </span>
            </div>

            <div className="branch-gallery-item">
              <span>
                FOTO KEGIATAN
              </span>
            </div>

            <div className="branch-gallery-item">
              <span>
                FOTO KEGIATAN
              </span>
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
              Ingin Melihat
              <br />
              Cabang Lain?
            </h2>

            <p>
              Lihat daftar cabang LEMKARI lainnya
              di wilayah Provinsi Jawa Tengah.
            </p>

          </div>

          <a
            href="/cabang"
            className="button button-light"
          >
            ← Semua Cabang
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