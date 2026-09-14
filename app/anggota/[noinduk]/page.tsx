"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import {
  dataSabukBerwarna,
  dataSabukHitam,
} from "@/data/keanggotaan";

export default function DetailAnggota() {
  const params = useParams();

  const noinduk = decodeURIComponent(
    String(params.noinduk || "")
  );

  // Cari anggota sabuk berwarna
  const anggotaBerwarna = dataSabukBerwarna.find(
    (anggota) => anggota.nomorInduk === noinduk
  );

  // Cari anggota sabuk hitam / MSH
  const anggotaHitam = dataSabukHitam.find(
    (anggota) => anggota.nomorInduk === noinduk
  );

  // Jika anggota tidak ditemukan
  if (!anggotaBerwarna && !anggotaHitam) {
    return (
      <main className="member-detail-page">
        <section className="page-hero">
          <div className="container">
            <h1>Anggota Tidak Ditemukan</h1>
            <p>
              Data anggota dengan nomor induk tersebut tidak ditemukan.
            </p>
          </div>
        </section>

        <section className="container member-detail-content">
          <Link href="/keanggotaan" className="back-button">
            ← Kembali ke Keanggotaan
          </Link>
        </section>
      </main>
    );
  }

  // Jika anggota sabuk hitam
  if (anggotaHitam) {
    return (
      <main className="member-detail-page">

        <section className="page-hero">
          <div className="container">
            <p className="page-kicker">DATA KEANGGOTAAN</p>

            <h1>{anggotaHitam.nama}</h1>

            <p>
              Sabuk Hitam / MSH
            </p>
          </div>
        </section>

        <section className="container member-detail-content">

          <Link href="/keanggotaan" className="back-button">
            ← Kembali ke Keanggotaan
          </Link>

          <div className="member-profile-card">

            <div className="member-profile-header">
              <div className="member-avatar">
                {anggotaHitam.nama.charAt(0)}
              </div>

              <div>
                <span className="member-status">
                  SABUK HITAM / MSH
                </span>

                <h2>{anggotaHitam.nama}</h2>

                <p>
                  Nomor Induk:{" "}
                  <strong>
                    {anggotaHitam.nomorInduk || "-"}
                  </strong>
                </p>
              </div>
            </div>

            <div className="member-info-grid">

              <div className="member-info-item">
                <span>Nama</span>
                <strong>{anggotaHitam.nama}</strong>
              </div>

              <div className="member-info-item">
                <span>Nomor Induk</span>
                <strong>
                  {anggotaHitam.nomorInduk || "-"}
                </strong>
              </div>

              <div className="member-info-item">
                <span>Cabang</span>
                <strong>
                  {anggotaHitam.cabang || "-"}
                </strong>
              </div>

              <div className="member-info-item">
                <span>Status</span>
                <strong>Sabuk Hitam / MSH</strong>
              </div>

            </div>

          </div>

        </section>
      </main>
    );
  }

  // Data anggota sabuk berwarna
  const anggota = anggotaBerwarna!;

  return (
    <main className="member-detail-page">

      <section className="page-hero">
        <div className="container">

          <p className="page-kicker">
            DATA KEANGGOTAAN
          </p>

          <h1>{anggota.nama}</h1>

          <p>
            Profil Anggota LEMKARI Jawa Tengah
          </p>

        </div>
      </section>


      <section className="container member-detail-content">

        <Link href="/keanggotaan" className="back-button">
          ← Kembali ke Keanggotaan
        </Link>


        {/* PROFIL */}

        <div className="member-profile-card">

          <div className="member-profile-header">

            <div className="member-avatar">
              {anggota.nama.charAt(0)}
            </div>

            <div>

              <span className="member-status">
                ANGGOTA SABUK BERWARNA
              </span>

              <h2>{anggota.nama}</h2>

              <p>
                Nomor Induk:{" "}
                <strong>
                  {anggota.nomorInduk || "-"}
                </strong>
              </p>

            </div>

          </div>


          <div className="member-info-grid">

            <div className="member-info-item">
              <span>Nama Lengkap</span>
              <strong>{anggota.nama}</strong>
            </div>

            <div className="member-info-item">
              <span>Nomor Induk</span>
              <strong>
                {anggota.nomorInduk || "-"}
              </strong>
            </div>

            <div className="member-info-item">
              <span>Tempat Lahir</span>
              <strong>
                {anggota.tempatLahir || "-"}
              </strong>
            </div>

            <div className="member-info-item">
              <span>Tanggal Lahir</span>
              <strong>
                {anggota.tanggalLahir || "-"}
              </strong>
            </div>

            <div className="member-info-item">
              <span>Cabang</span>
              <strong>
                {anggota.cabang || "-"}
              </strong>
            </div>

            <div className="member-info-item">
              <span>Dojo</span>
              <strong>
                {anggota.dojo || "-"}
              </strong>
            </div>

            <div className="member-info-item highlight">
              <span>Hasil Sabuk</span>
              <strong>
                {anggota.hasilSabuk || "-"}
              </strong>
            </div>

            <div className="member-info-item highlight">
              <span>Hasil Kyu</span>
              <strong>
                {anggota.hasilKyu || "-"}
              </strong>
            </div>

            <div className="member-info-item">
              <span>Tanggal Ujian</span>
              <strong>
                {anggota.tanggalUjian || "-"}
              </strong>
            </div>

            <div className="member-info-item">
              <span>Sabuk Terakhir</span>
              <strong>
                {anggota.sabukTerakhir || "-"}
              </strong>
            </div>

            <div className="member-info-item">
              <span>Kyu Terakhir</span>
              <strong>
                {anggota.kyuTerakhir || "-"}
              </strong>
            </div>

          </div>

        </div>


        {/* RIWAYAT KYU */}

        <div className="member-history-card">

          <div className="section-heading">

            <span className="section-label">
              RIWAYAT UJIAN
            </span>

            <h2>Riwayat Kyu</h2>

            <p>
              Riwayat kenaikan tingkat yang tercatat
              dalam data keanggotaan.
            </p>

          </div>


          {anggota.riwayatKyu.length > 0 ? (

            <div className="kyu-history">

              {anggota.riwayatKyu.map(
                (riwayat, index) => (

                  <div
                    className="kyu-history-item"
                    key={`${riwayat.kyu}-${index}`}
                  >

                    <div className="kyu-number">
                      {riwayat.kyu || "-"}
                    </div>

                    <div className="kyu-history-info">

                      <strong>
                        Kyu {riwayat.kyu || "-"}
                      </strong>

                      <span>
                        Sabuk:{" "}
                        {riwayat.sabuk || "-"}
                      </span>

                      <small>
                        Tanggal ujian:{" "}
                        {riwayat.tanggalUjian || "-"}
                      </small>

                    </div>

                  </div>

                )
              )}

            </div>

          ) : (

            <div className="empty-history">
              Belum terdapat riwayat Kyu yang tercatat.
            </div>

          )}

        </div>


        <div className="member-detail-footer">

          <Link
            href="/keanggotaan"
            className="back-button"
          >
            ← Kembali ke Daftar Keanggotaan
          </Link>

        </div>

      </section>

    </main>
  );
}