-- =====================================================
-- SIWA DATABASE V1
-- =====================================================

CREATE TABLE IF NOT EXISTS orang (

    id INTEGER PRIMARY KEY AUTOINCREMENT,

    nama TEXT NOT NULL,

    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,

    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP

);

CREATE TABLE IF NOT EXISTS organisasi (

    id INTEGER PRIMARY KEY AUTOINCREMENT,

    nama TEXT NOT NULL,

    jenis TEXT,

    created_at DATETIME DEFAULT CURRENT_TIMESTAMP

);

CREATE TABLE IF NOT EXISTS alamat (

    id INTEGER PRIMARY KEY AUTOINCREMENT,

    orang_id INTEGER,

    jalan TEXT,

    kota TEXT,

    provinsi TEXT,

    negara TEXT DEFAULT 'Indonesia',

    FOREIGN KEY (orang_id)
        REFERENCES orang(id)

);

CREATE TABLE IF NOT EXISTS kontak (

    id INTEGER PRIMARY KEY AUTOINCREMENT,

    orang_id INTEGER,

    jenis TEXT,

    nilai TEXT,

    FOREIGN KEY (orang_id)
        REFERENCES orang(id)

);

CREATE TABLE IF NOT EXISTS tag (

    id INTEGER PRIMARY KEY AUTOINCREMENT,

    nama TEXT UNIQUE

);

CREATE TABLE IF NOT EXISTS orang_tag (

    orang_id INTEGER,

    tag_id INTEGER,

    PRIMARY KEY (orang_id, tag_id),

    FOREIGN KEY (orang_id)
        REFERENCES orang(id),

    FOREIGN KEY (tag_id)
        REFERENCES tag(id)

);