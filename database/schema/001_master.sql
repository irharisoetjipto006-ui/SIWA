-- =====================================================
-- SIWA DATABASE SCHEMA
-- File : 001_master.sql
-- Version : 0.1.0
-- =====================================================

PRAGMA foreign_keys = ON;

-- =====================================================
-- MASTER : ORANG
-- =====================================================

CREATE TABLE orang (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nama TEXT NOT NULL,
    dibuat_pada DATETIME DEFAULT CURRENT_TIMESTAMP,
    diubah_pada DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- =====================================================
-- MASTER : ORGANISASI
-- =====================================================

CREATE TABLE organisasi (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nama TEXT NOT NULL,
    jenis TEXT,
    dibuat_pada DATETIME DEFAULT CURRENT_TIMESTAMP,
    diubah_pada DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- =====================================================
-- MASTER : ALAMAT
-- =====================================================

CREATE TABLE alamat (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    jalan TEXT,
    kelurahan TEXT,
    kecamatan TEXT,
    kota TEXT,
    provinsi TEXT,
    negara TEXT DEFAULT 'Indonesia',
    kode_pos TEXT
);

-- =====================================================
-- MASTER : KONTAK
-- =====================================================

CREATE TABLE kontak (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    orang_id INTEGER NOT NULL,
    jenis TEXT NOT NULL,
    nilai TEXT NOT NULL,
    utama INTEGER DEFAULT 0,

    FOREIGN KEY (orang_id) REFERENCES orang(id)
);

-- =====================================================
-- MASTER : TAG
-- =====================================================

CREATE TABLE tag (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nama TEXT NOT NULL UNIQUE
);

-- =====================================================
-- RELASI ORANG - TAG
-- =====================================================

CREATE TABLE orang_tag (
    orang_id INTEGER NOT NULL,
    tag_id INTEGER NOT NULL,

    PRIMARY KEY (orang_id, tag_id),

    FOREIGN KEY (orang_id) REFERENCES orang(id),
    FOREIGN KEY (tag_id) REFERENCES tag(id)
);