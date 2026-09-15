"use client";

import { useState } from "react";
import Link from "next/link";

import {
  dataSabukBerwarna,
  dataSabukHitam,
} from "@/data/keanggotaan";

type JenisAnggota = "berwarna" | "hitam";

type AnggotaBerwarna = {
  nama: string;
  nomorInduk: string | null;
  cabang: string | null;
  dojo: string | null;
  hasilSabuk: string | null;
  hasilKyu: string | null;
};

type AnggotaHitam = {
  nama: string;
  nomorInduk: string | null;
  cabang: string | null;
};

export default function KeanggotaanPage() {
  const [jenis, setJenis] =
    useState<JenisAnggota>("berwarna");

  const [search, setSearch] = useState("");

  /*
   * DATA YANG DIGUNAKAN
   */
  const daftar =
    jenis === "berwarna"
      ? (dataSabukBerwarna as AnggotaBerwarna[])
      : (dataSabukHitam as AnggotaHitam[]);

  /*
   * PENCARIAN
   */
  const kataKunci = String(search)
    .toLowerCase()
    .trim();

  const hasilPencarian = daftar.filter((anggota) => {
    if (!kataKunci) {
      return false;
    }

    const nama = String(
      anggota.nama ?? ""
    ).toLowerCase();

    const nomorInduk = String(
      anggota.nomorInduk ?? ""
    ).toLowerCase();

    const cabang = String(
      anggota.cabang ?? ""
    ).toLowerCase();

    const dojo =
      jenis === "berwarna"
        ? String(
            (anggota as AnggotaBerwarna).dojo ?? ""
          ).toLowerCase()
        : "";

    return (
      nama.includes(kataKunci) ||
      nomorInduk.includes(kataKunci) ||
      cabang.includes(kataKunci) ||
      dojo.includes(kataKunci)
    );
  });

  /*
   * HANYA TAMPILKAN 50 HASIL
   */
  const hasilTampil =
    hasilPencarian.slice(0, 50);

  return (
    <main className="keanggotaan-page">

      {/* =========================
          KEMBALI KE BERANDA
      ========================== */}

      <div className="keanggotaan-back-home">
        <Link href="/">
          ← Kembali ke Beranda
        </Link>
      </div>


      {/* =========================
          HERO
      ========================== */}

      <section className="keanggotaan-hero">

        <div className="container">

          <div className="hero-badge">
            DATA KEANGGOTAAN
          </div>

          <h1>
            Keanggotaan LEMKARI
          </h1>

          <p>
            Cari dan periksa data anggota
            LEMKARI KARATE-DO INDONESIA
            Provinsi Jawa Tengah.
          </p>

        </div>

      </section>


      {/* =========================
          KONTEN PENCARIAN
      ========================== */}

      <section className="keanggotaan-section">

        <div className="container">


          {/* =========================
              PILIH JENIS ANGGOTA
          ========================== */}

          <div className="anggota-tabs">

            <button
              type="button"
              className={
                jenis === "berwarna"
                  ? "anggota-tab active"
                  : "anggota-tab"
              }
              onClick={() => {
                setJenis("berwarna");
                setSearch("");
              }}
            >

              <span className="tab-icon">
                🥋
              </span>

              <span className="tab-content">

                <strong>
                  Sabuk Berwarna
                </strong>

                <small>
                  {dataSabukBerwarna.length.toLocaleString(
                    "id-ID"
                  )}{" "}
                  anggota
                </small>

              </span>

            </button>


            <button
              type="button"
              className={
                jenis === "hitam"
                  ? "anggota-tab active"
                  : "anggota-tab"
              }
              onClick={() => {
                setJenis("hitam");
                setSearch("");
              }}
            >

              <span className="tab-icon">
                ⚫
              </span>

              <span className="tab-content">

                <strong>
                  Sabuk Hitam / MSH
                </strong>

                <small>
                  {dataSabukHitam.length.toLocaleString(
                    "id-ID"
                  )}{" "}
                  anggota
                </small>

              </span>

            </button>

          </div>


          {/* =========================
              KOTAK PENCARIAN
          ========================== */}

          <div className="anggota-search">

            <span className="search-icon">
              🔎
            </span>

            <input
              type="text"
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              placeholder={
                jenis === "berwarna"
                  ? "Ketik nama, nomor induk, cabang, atau dojo..."
                  : "Ketik nama, nomor induk, atau cabang..."
              }
            />

            {search && (
              <button
                type="button"
                className="search-clear"
                onClick={() =>
                  setSearch("")
                }
                aria-label="Hapus pencarian"
              >
                ×
              </button>
            )}

          </div>


          {/* =========================
              PESAN AWAL
          ========================== */}

          {!kataKunci && (

            <div className="search-welcome">

              <div className="search-welcome-icon">
                🔎
              </div>

              <h2>
                Cari Data Anggota
              </h2>

              <p>
                Silakan masukkan nama,
                nomor induk, cabang, atau
                dojo pada kolom pencarian
                untuk melihat data anggota.
              </p>

            </div>

          )}


          {/* =========================
              INFORMASI HASIL
          ========================== */}

          {kataKunci && (

            <div className="hasil-info">

              <div>
                Ditemukan{" "}
                <strong>
                  {hasilPencarian.length.toLocaleString(
                    "id-ID"
                  )}
                </strong>{" "}
                data
              </div>

              <div className="hasil-kata">
                Pencarian:{" "}
                <strong>
                  "{search}"
                </strong>
              </div>

            </div>

          )}


          {/* =========================
              DATA TIDAK DITEMUKAN
          ========================== */}

          {kataKunci &&
            hasilTampil.length === 0 && (

              <div className="data-kosong">

                <div className="kosong-icon">
                  🔍
                </div>

                <h3>
                  Data tidak ditemukan
                </h3>

                <p>
                  Tidak ditemukan anggota
                  dengan kata kunci:
                </p>

                <strong>
                  "{search}"
                </strong>

                <br />

                <button
                  type="button"
                  onClick={() =>
                    setSearch("")
                  }
                >
                  Cari Lagi
                </button>

              </div>

            )}


          {/* =========================
              HASIL PENCARIAN
          ========================== */}

          {kataKunci &&
            hasilTampil.length > 0 && (

              <div className="anggota-grid">

                {hasilTampil.map(
                  (anggota, index) => {

                    const nomorInduk =
                      anggota.nomorInduk;

                    if (nomorInduk) {

                      return (
                        <Link
                          href={`/anggota/${encodeURIComponent(
                            nomorInduk
                          )}`}
                          className="anggota-card-link"
                          key={`${anggota.nama}-${nomorInduk}-${index}`}
                        >

                          <article className="anggota-card">

                            {/* HEADER */}

                            <div className="anggota-card-header">

                              <span className="anggota-status">
                                {jenis === "berwarna"
                                  ? "ANGGOTA KYU"
                                  : "MSH"}
                              </span>

                              <span className="anggota-number">
                                #{index + 1}
                              </span>

                            </div>


                            {/* NAMA */}

                            <h2>
                              {anggota.nama}
                            </h2>


                            {/* DETAIL */}

                            <div className="anggota-detail">

                              <div className="detail-row">

                                <span>
                                  Nomor Induk
                                </span>

                                <strong>
                                  {anggota.nomorInduk ||
                                    "-"}
                                </strong>

                              </div>


                              <div className="detail-row">

                                <span>
                                  Cabang
                                </span>

                                <strong>
                                  {anggota.cabang ||
                                    "-"}
                                </strong>

                              </div>


                              {jenis === "berwarna" && (

                                <>

                                  <div className="detail-row">

                                    <span>
                                      Dojo
                                    </span>

                                    <strong>
                                      {
                                        (anggota as AnggotaBerwarna)
                                          .dojo || "-"
                                      }
                                    </strong>

                                  </div>


                                  <div className="detail-row">

                                    <span>
                                      Hasil Sabuk
                                    </span>

                                    <strong className="sabuk-text">
                                      {
                                        (anggota as AnggotaBerwarna)
                                          .hasilSabuk || "-"
                                      }
                                    </strong>

                                  </div>


                                  <div className="detail-row">

                                    <span>
                                      Hasil Kyu
                                    </span>

                                    <strong className="kyu-text">
                                      {
                                        (anggota as AnggotaBerwarna)
                                          .hasilKyu || "-"
                                      }
                                    </strong>

                                  </div>

                                </>

                              )}

                            </div>


                            {/* LINK DETAIL */}

                            <div className="anggota-card-footer">

                              <span>
                                Lihat detail anggota
                              </span>

                              <span className="card-arrow">
                                →
                              </span>

                            </div>

                          </article>

                        </Link>
                      );

                    }


                    return (
                      <article
                        className="anggota-card"
                        key={`${anggota.nama}-${index}`}
                      >

                        <div className="anggota-card-header">

                          <span className="anggota-status">
                            MSH
                          </span>

                          <span className="anggota-number">
                            #{index + 1}
                          </span>

                        </div>

                        <h2>
                          {anggota.nama}
                        </h2>

                        <div className="anggota-detail">

                          <div className="detail-row">

                            <span>
                              Nomor Induk
                            </span>

                            <strong>
                              -
                            </strong>

                          </div>

                          <div className="detail-row">

                            <span>
                              Cabang
                            </span>

                            <strong>
                              {anggota.cabang ||
                                "-"}
                            </strong>

                          </div>

                        </div>

                      </article>
                    );

                  }
                )}

              </div>

            )}


          {/* =========================
              BATAS HASIL
          ========================== */}

          {hasilPencarian.length > 50 && (

            <div className="data-limit">

              <strong>
                Menampilkan 50 hasil pertama.
              </strong>

              <span>
                Persempit pencarian dengan
                mengetik nama atau nomor induk
                yang lebih lengkap.
              </span>

            </div>

          )}

        </div>

      </section>

    </main>
  );
}