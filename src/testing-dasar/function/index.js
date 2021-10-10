export function penjumlahan(angka1, angka2) {
  return angka1 + angka2;
}

export function perkalian(angka1, angka2) {
  return angka1 * angka2;
}

export function gaji(gajiKotor) {
  const pajak = 10 / 100;
  const pajakTerbayar = gajiKotor * pajak;
  const gajiBersih = gajiKotor - pajakTerbayar;
  return `gaji anda sebesar ${gajiBersih}`;
}

export function salam(nama) {
  return `Selamat malam ${nama}`;
}
