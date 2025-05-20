<?php
// Variabel logika
$usia = 20;
$memiliki_sim = true;

// Logika AND: Hanya akan true jika kedua kondisi terpenuhi
if ($usia >= 18 && $memiliki_sim) {
    echo "Anda boleh mengemudi.<br>";
} else {
    echo "Anda belum memenuhi syarat untuk mengemudi.<br>";
}

// Logika XOR: True jika hanya salah satu kondisi yang true
$login_dengan_email = true;
$login_dengan_username = false;

if ($login_dengan_email xor $login_dengan_username) {
    echo "Login berhasil dengan salah satu metode.<br>";
} else {
    echo "Login gagal atau ada lebih dari satu metode digunakan.<br>";
}
?>
