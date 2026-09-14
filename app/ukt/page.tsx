import Link from "next/link";

export default function UKTPage() {
  return (
    <main>
      {/* HEADER */}
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

      {/* HERO */}
      <section className="page-hero">
        <div className="container page-hero-content">
          <Link href="/" className="branch-back-link">
           
          </Link>

          <span className="branch-page-label">
            
          </span>

          <h1>Ujian Kenaikan Tingkat</h1>

          <p>
            Informasi dan layanan Ujian Kenaikan Tingkat (UKT)
            LEMKARI Provinsi Jawa Tengah.
          </p>
        </div>
      </section>

            {/* DESKRIPSI UKT */}
      <section className="section ukt-about-section">
        <div className="container">

          <div className="section-heading">
            <span>TENTANG UKT</span>

            <h2>Ujian Kenaikan Tingkat</h2>
          </div>

          {/* DESKRIPSI */}
          <div className="ukt-description-main">
            <p>
              Ujian Kenaikan Tingkat (UKT) merupakan bagian dari
              proses pembinaan dan pengembangan karateka LEMKARI.
              Melalui UKT, karateka mengikuti proses pengujian
              sesuai dengan tingkat dan ketentuan yang berlaku.
            </p>

            <p>
              Laman ini disediakan untuk memberikan informasi
              sekaligus memudahkan karateka dan pengurus dalam
              proses persiapan serta pengumpulan data UKT.
            </p>

            <p>
              Sebelum mengikuti proses UKT, peserta diharapkan
              membaca informasi dan mengikuti tahapan pengisian
              data yang telah ditentukan.
            </p>
          </div>


          {/* INFORMASI WARNA SABUK */}
          <div className="ukt-belt-box">

            <div className="ukt-belt-heading">
              <span>TINGKATAN</span>

              <h3>Warna Sabuk &amp; Tingkat Kyu</h3>

              <p>
                Urutan warna sabuk dan tingkatan Kyu dalam
                pelaksanaan Ujian Kenaikan Tingkat LEMKARI.
              </p>
            </div>

            <div className="belt-table-wrapper">
              <table className="belt-table">
                <thead>
                  <tr>
                    <th>Warna Sabuk</th>
                    <th>Tingkat Kyu</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>
                      <span className="belt-color belt-white"></span>
                      Putih
                    </td>
                    <td>Kyu 10</td>
                  </tr>

                  <tr>
                    <td>
                      <span className="belt-color belt-yellow"></span>
                      Kuning
                    </td>
                    <td>Kyu 9</td>
                  </tr>

                  <tr>
                    <td>
                      <span className="belt-color belt-orange"></span>
                      Oranye
                    </td>
                    <td>Kyu 8</td>
                  </tr>

                  <tr>
                    <td>
                      <span className="belt-color belt-green"></span>
                      Hijau
                    </td>
                    <td>Kyu 7</td>
                  </tr>

                  <tr>
                    <td>
                      <span className="belt-color belt-light-blue"></span>
                      Biru Muda
                    </td>
                    <td>Kyu 6</td>
                  </tr>

                  <tr>
                    <td>
                      <span className="belt-color belt-dark-blue"></span>
                      Biru Tua
                    </td>
                    <td>Kyu 5</td>
                  </tr>

                  <tr>
                    <td>
                      <span className="belt-color belt-purple"></span>
                      Ungu
                    </td>
                    <td>Kyu 4</td>
                  </tr>

                  <tr>
                    <td>
                      <span className="belt-color belt-brown"></span>
                      Cokelat
                    </td>
                    <td>Kyu 3 – 1</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>


          {/* ALUR UKT */}
          <div className="ukt-info-box">

            <span>ALUR UKT</span>

            <div className="ukt-step">
              <strong>01</strong>

              <div>
                <h3>Pengajuan UKT</h3>

                <p>
                  Surat pengajuan UKT dikirim oleh cabang kepada
                  Sekretaris Pengprov untuk menerima surat rekomendasi.
                </p>
              </div>
            </div>

            <div className="ukt-step">
              <strong>02</strong>

              <div>
                <h3>Kesiapan Berkas Pendukung</h3>

                <p>
                  Isi berkas pendukung UKT untuk dikumpulkan
                  ke Tim Penguji.
                </p>
              </div>
            </div>

            <div className="ukt-step">
              <strong>03</strong>

              <div>
                <h3>Pelaksanaan UKT</h3>

                <p>
                  Mengikuti pelaksanaan UKT sesuai jadwal dan
                  ketentuan yang ditetapkan.
                </p>
              </div>
            </div>

            <div className="ukt-step">
              <strong>04</strong>

              <div>
                <h3>Input Data Peserta</h3>

                <p>
                  Menyelesaikan pengisian form data serta foto
                  peserta UKT pada link yang tersedia.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* LAYANAN UKT */}
      <section className="section section-gray">
        <div className="container">
          <div className="section-heading">
            <span>LAYANAN UKT</span>

            <h2>
              Akses Berkas UKT
            </h2>
          </div>

          <div className="ukt-service-grid">
            
            {/* FORM KESIAPAN */}
<div className="ukt-service-card">
  <div className="ukt-service-number">
    01
  </div>

  <div className="ukt-service-content">
    <span></span>

    <h3>
      Berkas UKT
    </h3>

    <p>
      Unduh berkas kesiapan peserta dalam mengikuti Ujian
      Kenaikan Tingkat.
    </p>

    <a
      href="https://drive.google.com/drive/folders/1MPO--eHRrO56cB9r4a1ik_SauCZUkryf?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
      className="button button-dark"
    >
      Unduh Berkas →
    </a>
  </div>
</div>


            {/* DATA & FOTO */}
<div className="ukt-service-card">
  <div className="ukt-service-number">
    02
  </div>

  <div className="ukt-service-content">
    <span></span>

    <h3>
      Pengumpulan Data &amp; Foto
    </h3>

    <p>
      Pilih cabang untuk melakukan pengumpulan
      data dan foto UKT.
    </p>

    {/* DAFTAR CABANG */}
    <div className="ukt-cabang-list">

      {/* CABANG 1 */}
      <details className="ukt-cabang-item">
        <summary>
          Banjarnegara
          <span>＋</span>
        </summary>

        <div className="ukt-cabang-links">

          <a
            href="https://docs.google.com/spreadsheets/d/1J3Nfeqhhp3xcNRoHjl8njCpJEk9a8xQnR0zABtK08Jg/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-primary"
          >
            📄 Upload Data →
          </a>

          <a
            href="https://drive.google.com/drive/folders/1X-d4iX5_73l5XNv3cl2FnbIUlrXd1yIK?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-dark"
          >
            📷 Upload Foto →
          </a>

        </div>
      </details>


      {/* CABANG 2 */}
      <details className="ukt-cabang-item">
        <summary>
          Banyumas
          <span>＋</span>
        </summary>

        <div className="ukt-cabang-links">

          <a
            href="https://docs.google.com/spreadsheets/d/1bod4zAdYT4A7Z6cd_FVr7L494OLvFewU1SnUNHTsj0g/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-primary"
          >
            📄 Upload Data →
          </a>

          <a
            href="https://drive.google.com/drive/folders/1SWnDLA_Hw0lj_x7-YSwqb5n6ppAWVr99?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-dark"
          >
            📷 Upload Foto →
          </a>

        </div>
      </details>


      {/* CABANG 3 */}
      <details className="ukt-cabang-item">
        <summary>
          Batang
          <span>＋</span>
        </summary>

        <div className="ukt-cabang-links">

          <a
            href="https://docs.google.com/spreadsheets/d/1YWPGabYDQ_EMVbMggnrZEvWVhsd6bh2hvUh4JjLdUcw/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-primary"
          >
            📄 Upload Data →
          </a>

          <a
            href="https://drive.google.com/drive/folders/1l7VPBoN5BQS9jJu3BrWGzmWFUvmhXshE?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-dark"
          >
            📷 Upload Foto →
          </a>

        </div>
      </details>


      {/* CABANG 4 */}
      <details className="ukt-cabang-item">
        <summary>
          Blora
          <span>＋</span>
        </summary>

        <div className="ukt-cabang-links">

          <a
            href="https://docs.google.com/spreadsheets/d/1_Jjy6D2wD-Xp0xvUCxRT-ra2V6K2HWYXTxIMfESZkX8/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-primary"
          >
            📄 Upload Data →
          </a>

          <a
            href="https://drive.google.com/drive/folders/1d0qcXatf_XLgdu-jdDMjxL2PdBO5Nrjf?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-dark"
          >
            📷 Upload Foto →
          </a>

        </div>
      </details>


      {/* CABANG 5 */}
      <details className="ukt-cabang-item">
        <summary>
          Cilacap
          <span>＋</span>
        </summary>

        <div className="ukt-cabang-links">

          <a
            href="https://docs.google.com/spreadsheets/d/11OELb9p--RkVG52RSN3Dm2v8Y2NYymvqS1e4CflGxRg/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-primary"
          >
            📄 Upload Data →
          </a>

          <a
            href="https://drive.google.com/drive/folders/1CTvuBApMqq7r4LPUmpeg63Opm5mPIrRb?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-dark"
          >
            📷 Upload Foto →
          </a>

        </div>
      </details>

      {/* CABANG 6 */}
      <details className="ukt-cabang-item">
        <summary>
          Demak
          <span>＋</span>
        </summary>

        <div className="ukt-cabang-links">

          <a
            href="https://docs.google.com/spreadsheets/d/17L042p3vcG0AGGEd99NTsBk4fXfX3xw-GVPX-fRCQ0I/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-primary"
          >
            📄 Upload Data →
          </a>

          <a
            href="https://drive.google.com/drive/folders/1wGSwVwSCNwaR9MGzUO3gDam_QkW8Lotf?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-dark"
          >
            📷 Upload Foto →
          </a>

        </div>
      </details>

      {/* CABANG 7 */}
      <details className="ukt-cabang-item">
        <summary>
          Grobogan
          <span>＋</span>
        </summary>

        <div className="ukt-cabang-links">

          <a
            href="https://docs.google.com/spreadsheets/d/1zFSNZpMz-kVTVbrjgMc1K3Bq5u9GnPAb0gEGUKjoIkU/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-primary"
          >
            📄 Upload Data →
          </a>

          <a
            href="https://drive.google.com/drive/folders/122XmbICKryNzlxm5NgEs5l0ZjpQVCPHU?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-dark"
          >
            📷 Upload Foto →
          </a>

        </div>
      </details>

      {/* CABANG 8 */}
      <details className="ukt-cabang-item">
        <summary>
          Jepara
          <span>＋</span>
        </summary>

        <div className="ukt-cabang-links">

          <a
            href="https://docs.google.com/spreadsheets/d/15GFD0LKj9ZvnhmwcsLf77k1RiS24eLw5frFPd13yZbA/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-primary"
          >
            📄 Upload Data →
          </a>

          <a
            href="https://drive.google.com/drive/folders/1nL9x177IkuYIDlCH4FdLdruIZpMylkDX?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-dark"
          >
            📷 Upload Foto →
          </a>

        </div>
      </details>

      {/* CABANG 9 */}
      <details className="ukt-cabang-item">
        <summary>
          Kabupaten Pekalongan
          <span>＋</span>
        </summary>

        <div className="ukt-cabang-links">

          <a
            href="https://docs.google.com/spreadsheets/d/1w22f36QYQ7ardmeJStz1XaL_a9D-BwkuTNCGEs0s2Ng/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-primary"
          >
            📄 Upload Data →
          </a>

          <a
            href="https://drive.google.com/drive/folders/19BXLwvS-np4AU_B8MDsPKeCzHoH_XKy9?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-dark"
          >
            📷 Upload Foto →
          </a>

        </div>
      </details>

      {/* CABANG 10 */}
      <details className="ukt-cabang-item">
        <summary>
          Kota Pekalongan
          <span>＋</span>
        </summary>

        <div className="ukt-cabang-links">

          <a
            href="https://docs.google.com/spreadsheets/d/1Sf_upx84egqDclhqhpqS-Rwx8erV4ouG8lxMVyZLkdg/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-primary"
          >
            📄 Upload Data →
          </a>

          <a
            href="https://drive.google.com/drive/folders/10bgw6dFxmNLvbWt98TfmwbxRiIik6ngy?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-dark"
          >
            📷 Upload Foto →
          </a>

        </div>
      </details>

      {/* CABANG 11 */}
      <details className="ukt-cabang-item">
        <summary>
          Kota Semarang
          <span>＋</span>
        </summary>

        <div className="ukt-cabang-links">

          <a
            href="https://docs.google.com/spreadsheets/d/1JuoaQJ2eUUg0evX7e2-g2EPUtEfiKNAGVA7b5saDfKs/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-primary"
          >
            📄 Upload Data →
          </a>

          <a
            href="https://drive.google.com/drive/folders/1cRl1oyqeXy26HFhZ5dkWWFHKLnj6SY8z?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-dark"
          >
            📷 Upload Foto →
          </a>

        </div>
      </details>

      {/* CABANG 12 */}
      <details className="ukt-cabang-item">
        <summary>
          Kebumen
          <span>＋</span>
        </summary>

        <div className="ukt-cabang-links">

          <a
            href="https://docs.google.com/spreadsheets/d/1UBRf7i8IMZuvzePAtVLFXVumX9yvW65v7ra0iSJfUmA/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-primary"
          >
            📄 Upload Data →
          </a>

          <a
            href="https://drive.google.com/drive/folders/1rWs6shdAmtN13w5ArS4Stp_hX871BP2z?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-dark"
          >
            📷 Upload Foto →
          </a>

        </div>
      </details>

          {/* CABANG 13 */}
      <details className="ukt-cabang-item">
        <summary>
          Kendal
          <span>＋</span>
        </summary>

        <div className="ukt-cabang-links">

          <a
            href="https://docs.google.com/spreadsheets/d/1I2SD61uZU2-x2UC0nNiGApN90PmANn4C26q9RltxVao/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-primary"
          >
            📄 Upload Data →
          </a>

          <a
            href="https://drive.google.com/drive/folders/1DYaLz5mnBql_3iRPTrXNktaCjVthP7cc?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-dark"
          >
            📷 Upload Foto →
          </a>

        </div>
      </details>
      
      {/* CABANG 14 */}
      <details className="ukt-cabang-item">
        <summary>
          Klaten
          <span>＋</span>
        </summary>

        <div className="ukt-cabang-links">

          <a
            href="https://docs.google.com/spreadsheets/d/1NZSeca1J_0wnXUe2YRBXPFMvyyN_dZOF4YzIaG6x7fY/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-primary"
          >
            📄 Upload Data →
          </a>

          <a
            href="https://drive.google.com/drive/folders/1MWmpiexevhs7GUEUS93Kuz17yJiZ8nrd?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-dark"
          >
            📷 Upload Foto →
          </a>

        </div>
      </details>

      {/* CABANG 15 */}
      <details className="ukt-cabang-item">
        <summary>
          Kudus
          <span>＋</span>
        </summary>

        <div className="ukt-cabang-links">

          <a
            href="https://docs.google.com/spreadsheets/d/1wKZanoHg5WYtAHmgRuNFkWt3QB8dZXn7ApjIKNRWtDw/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-primary"
          >
            📄 Upload Data →
          </a>

          <a
            href="https://drive.google.com/drive/folders/1fBqTya3KbDPWuFsXcfvWqVvGrqrEj94w?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-dark"
          >
            📷 Upload Foto →
          </a>

        </div>
      </details>

      {/* CABANG 16 */}
      <details className="ukt-cabang-item">
        <summary>
          Magelang
          <span>＋</span>
        </summary>

        <div className="ukt-cabang-links">

          <a
            href="https://docs.google.com/spreadsheets/d/1svor5uJ9HfwLLE2LPR1gHY5uF1T20Fakuv1TZFOAoBA/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-primary"
          >
            📄 Upload Data →
          </a>

          <a
            href="https://drive.google.com/drive/folders/1qTbvdux0tYNjQ8ovHUumJS3vDsMfNS57?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-dark"
          >
            📷 Upload Foto →
          </a>

        </div>
      </details>

      {/* CABANG 17 */}
      <details className="ukt-cabang-item">
        <summary>
          Pati
          <span>＋</span>
        </summary>

        <div className="ukt-cabang-links">

          <a
            href="https://docs.google.com/spreadsheets/d/1SlUcZd3ZEiWh8Y_f9ZcFUkRPwJcpgQWJK8wrQYOEomg/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-primary"
          >
            📄 Upload Data →
          </a>

          <a
            href="https://drive.google.com/drive/folders/15c7SCXM-E07WzslSCP22w9llDl4o0GS2?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-dark"
          >
            📷 Upload Foto →
          </a>

        </div>
      </details>

      {/* CABANG 18 */}
      <details className="ukt-cabang-item">
        <summary>
          Purbalingga
          <span>＋</span>
        </summary>

        <div className="ukt-cabang-links">

          <a
            href="https://docs.google.com/spreadsheets/d/1Nzgz0_mjyQ90NikBf25D8BBgahYKZppmcyJp0orbQX4/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-primary"
          >
            📄 Upload Data →
          </a>

          <a
            href="https://drive.google.com/drive/folders/10tMJEmPkLtmYRnLlWpm58qeVU6b-nLOo?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-dark"
          >
            📷 Upload Foto →
          </a>

        </div>
      </details>

      {/* CABANG 19 */}
      <details className="ukt-cabang-item">
        <summary>
          Sragen
          <span>＋</span>
        </summary>

        <div className="ukt-cabang-links">

          <a
            href="https://docs.google.com/spreadsheets/d/11_H6t8RSexApPoj6Pq_a23X4tn5YXTQxH76agV342os/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-primary"
          >
            📄 Upload Data →
          </a>

          <a
            href="https://drive.google.com/drive/folders/17sejpDB3yf36bXug7rsAvXst_L7Uh4Vy?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-dark"
          >
            📷 Upload Foto →
          </a>

        </div>
      </details>

      {/* CABANG 20 */}
      <details className="ukt-cabang-item">
        <summary>
          Sukoharjo
          <span>＋</span>
        </summary>

        <div className="ukt-cabang-links">

          <a
            href="https://docs.google.com/spreadsheets/d/1NFd2CqlxZE-ctYn-rKgnz2Bz_Y9BRYU2G0DPKh4lyBg/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-primary"
          >
            📄 Upload Data →
          </a>

          <a
            href="https://drive.google.com/drive/folders/1P8HgiVtkJtnBbSCCRS0mZQ6xbb0c05y-?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-dark"
          >
            📷 Upload Foto →
          </a>

        </div>
      </details>

      {/* CABANG 21 */}
      <details className="ukt-cabang-item">
        <summary>
          Surakarta
          <span>＋</span>
        </summary>

        <div className="ukt-cabang-links">

          <a
            href="https://docs.google.com/spreadsheets/d/1SghRI1exa7n4CrMPVWGAdwTLspcK4HY7Gbx6-aJXVUM/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-primary"
          >
            📄 Upload Data →
          </a>

          <a
            href="https://drive.google.com/drive/folders/1clNsNMC6syxv1YrK3TwiOqiW8jdSsBu6?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-dark"
          >
            📷 Upload Foto →
          </a>

        </div>
      </details>

      {/* CABANG 22 */}
      <details className="ukt-cabang-item">
        <summary>
          Tegal
          <span>＋</span>
        </summary>

        <div className="ukt-cabang-links">

          <a
            href="https://docs.google.com/spreadsheets/d/1GBaOQvunlfFS7erVDjvJuHlGWOADpMGEQa-xggMqlYU/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-primary"
          >
            📄 Upload Data →
          </a>

          <a
            href="https://drive.google.com/drive/folders/1zrhoQhYldG7oPxYe_c1f761HhQJJ0RLF?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-dark"
          >
            📷 Upload Foto →
          </a>

        </div>
      </details>

      {/* CABANG 23 */}
      <details className="ukt-cabang-item">
        <summary>
          Temanggung
          <span>＋</span>
        </summary>

        <div className="ukt-cabang-links">

          <a
            href="https://docs.google.com/spreadsheets/d/1rxf3xILd9m13l43e9xiL_uLAjLGNorhXeM1PQLQxF-o/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-primary"
          >
            📄 Upload Data →
          </a>

          <a
            href="https://drive.google.com/drive/folders/15v_s3XJ-8-NwEcZNNvs5498Ep-tecJG6?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-dark"
          >
            📷 Upload Foto →
          </a>

        </div>
      </details>

      {/* CABANG 24 */}
      <details className="ukt-cabang-item">
        <summary>
          Wonosobo
          <span>＋</span>
        </summary>

        <div className="ukt-cabang-links">

          <a
            href="https://docs.google.com/spreadsheets/d/1xfSZP8HoGES2PlYiSTcekp53D08XLX7fEvi05r6JtY4/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-primary"
          >
            📄 Upload Data →
          </a>

          <a
            href="https://drive.google.com/drive/folders/1nyDdumTsJFUdVJhGN-1XipWGTbAwYuJY?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-dark"
          >
            📷 Upload Foto →
          </a>

        </div>
      </details>


      {/* TAMBAHKAN CABANG LAIN DI SINI */}

    </div>
  </div>
</div>

          </div>
        </div>
      </section>

      {/* CATATAN */}
      <section className="section">
        <div className="container">
          <div className="ukt-note">
            <div className="ukt-note-icon">
              !
            </div>

            <div>
              <span>PERHATIAN</span>

              <h3>
                Pastikan data yang dikirim sudah benar
              </h3>

              <p>
                Sebelum mengirim formulir, periksa kembali
                nama peserta, tempat/ tanggal lahir, cabang/dojo, sabuk/kyu, serta foto yang akan dikumpulkan.
                Pastikan seluruh data telah diisi dengan benar
                sesuai ketentuan yang berlaku.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="official-cta">
        <div className="container">
          <div>
            <span>LEMKARI JAWA TENGAH</span>

            <h2>
              Siapkan diri untuk mengikuti UKT
            </h2>

            <p>
              Ikuti setiap tahapan dengan tertib dan
              pastikan seluruh data peserta telah
              dipersiapkan dengan baik.
            </p>
          </div>

          <Link
            href="/"
            className="button button-primary"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </section>
    </main>
  );
}