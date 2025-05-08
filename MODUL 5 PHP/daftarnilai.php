<!DOCTYPE html>
<html>
<head>
    <title>Daftar Nilai</title>
</head>
<body>
    <h2>Input Daftar Nilai</h2>
    <form method="POST">
        Nama: <input type="text" name="nama" required><br><br>
        Nilai: <input type="number" name="nilai" required><br><br>
        <input type="submit" name="submit" value="Kirim">
    </form>

    <?php
    if (isset($_POST['submit'])) {
        $nama = $_POST['nama'];
        $nilai = $_POST['nilai'];
        $hasil = "";

        if ($nilai >= 80) {
            $hasil = "A";
        } elseif ($nilai >= 70 && $nilai <= 79) {
            $hasil = "B";
        } elseif ($nilai >= 60 && $nilai <= 69) {
            $hasil = "C";
        } elseif ($nilai >= 50 && $nilai <= 59) {
            $hasil = "D";
        } else {
            $hasil = "Tidak Lulus";
        }

        echo "<hr>";
        echo "<h3>Hasil:</h3>";
        echo "Nama: " . htmlspecialchars($nama) . "<br>";
        echo "Nilai: " . $nilai . "<br>";
        echo "Keterangan: " . $hasil;
    }
    ?>
</body>
</html>
