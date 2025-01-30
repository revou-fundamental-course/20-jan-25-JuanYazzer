function hitungBMI() {
    // IS. function dijalankan setelah menekan tombol hitung
    // FS. hasil ditambahkan di layar
    // deklarasi
    let berat = parseFloat(document.getElementById("beratBadan").value);
    let tinggi = parseFloat(document.getElementById("tinggiBadan").value);
    let usia = parseInt(document.getElementById("usia").value);
    let jenisKelamin = document.querySelector('input[name="jenisKelamin"]:checked');
    let resultBMI = document.getElementById("hasil");
    let kategoriText = document.getElementById("kategori");
    let penyemangatText = document.getElementById("penyemangat");
    let resultSection = document.querySelector(".result");

    // Validasi
    if (!jenisKelamin) {
        alert("Pilih jenis kelamin terlebih dahulu.");
        return;
    }

    if (isNaN(berat) || isNaN(tinggi) || isNaN(usia)) {
        alert("Pastikan semua input telah diisi dengan angka yang benar.");
        return;
    }
    
    if (berat <= 0 || tinggi <= 0 || usia <= 0) {
        alert("Berat, tinggi, dan usia harus lebih dari nol.");
        return;
    }

    // Perhitungan BMI
    let tinggiMeter = tinggi / 100;
    let bmi = berat / (tinggiMeter * tinggiMeter);
    let kategori, penyemangat, backgroundColor;

    // Pengelompokan BMI
    if (bmi < 18.5) {
        kategori = "Kurus (Underweight)";
        penyemangat = "Jaga pola makan yang sehat dan perbanyak asupan nutrisi!";
        backgroundColor = "yellow";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        kategori = "Normal";
        penyemangat = "Tetap jaga pola makan dan olahraga teratur!";
        backgroundColor = "green";
    } else if (bmi >= 25 && bmi < 29.9) {
        kategori = "Gemuk (Overweight)";
        penyemangat = "Mulai atur pola makan dan tingkatkan aktivitas fisik!";
        backgroundColor = "orange";
    } else {
        kategori = "Obesitas";
        penyemangat = "Segera konsultasikan dengan ahli gizi dan lakukan perubahan gaya hidup sehat!";
        backgroundColor = "red";
    }
    // Penandan untuk jenis kelamin
    if (jenisKelamin.value === "cowo") {
        resultSection.style.border = "10px solid blue";
    } else if (jenisKelamin.value === "cewe") {
        resultSection.style.border = "10px solid pink";
    }
    // result
    resultBMI.textContent = `BMI Anda: ${bmi.toFixed(2)}`;
    kategoriText.textContent = kategori;
    penyemangatText.textContent = penyemangat;
    // menampilkan block hasil
    resultSection.style.display = "block";
    kategoriText.style.backgroundColor = backgroundColor;
    kategoriText.style.padding = "8px 12px"; // Tambahkan padding agar lebih rapi
    kategoriText.style.borderRadius = "15px"; // Buat tampilan rounded
    kategoriText.style.color = "black"; // Warna teks agar lebih kontras
    kategoriText.style.display = "inline-block"; // Supaya bentuknya tidak melebar ke seluruh halaman
    
}

function resetForm() {
    document.getElementById("beratBadan").value = "";
    document.getElementById("tinggiBadan").value = "";
    document.getElementById("usia").value = "";
    document.querySelectorAll('input[name="jenisKelamin"]').forEach(el => el.checked = false);
    
    let resultSection = document.querySelector(".result");
    resultSection.style.display = "none";
}