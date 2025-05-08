<?php
$nilai_awal = "98.76abc";

echo "Sebelum casting:\n";
echo "Nilai: $nilai_awal\n";
echo "Tipe: " . gettype($nilai_awal) . "\n\n";

$nilai_cast = (int) $nilai_awal;

echo "Setelah casting ke integer:\n";
echo "Nilai: $nilai_cast\n";
echo "Tipe: " . gettype($nilai_cast) . "\n";
?>
