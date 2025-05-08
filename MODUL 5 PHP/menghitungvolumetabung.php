<!DOCTYPE html>
<html>
<head>
    <title>Moh. andris Saputra</title>
</head>
<body>
    <?php
        // variabel jari-jari dan tinggi
        $r = 7; // jari-jari
        $t = 15; // tinggi
        $phi = 3.14;

        // Menghitung volume tabung: V = π * r^2 * t
        $volume = $phi * $r * $r * $t;

        // Output
        echo "<h2>Menghitung Volume Tabung</h2>";
        echo "Jari-jari (r): $r cm<br>";
        echo "Tinggi (t): $t cm<br>";
        echo "Volume tabung: $volume cm<sup>3</sup>";
    ?>
</body>
</html>
