let hari = "Rabu";
let aktivitas;

switch (hari) {
    case "Senin":
        aktivitas = "Meeting mingguan";
        break;
    case "Selasa":
        aktivitas = "Pelatihan karyawan";
        break;
    case "Rabu":
        aktivitas = "Work from home";
        break;
    case "Kamis":
        aktivitas = "Presentasi proyek";
        break;
    case "Jumat":
        aktivitas = "Evaluasi mingguan";
        break;
    default:
        aktivitas = "Libur akhir pekan";
}

console.log(`Hari ${hari}, aktivitas: ${aktivitas}`);
// Output: "Hari Rabu, aktivitas: Work from home"