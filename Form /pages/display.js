import Link from 'next/link';

export default function Display() {
  // 1. LocalStorage'dan form verilerini çekiyoruz. Eğer veri yoksa boş bir nesne kullanıyoruz.
  const formData = JSON.parse(localStorage.getItem('formData')) || {};

  return (
    <div>
      <h1>Girilen Bilgiler</h1>
      <p>Ad: {formData.firstName}</p> 
      <p>Soyad: {formData.lastName}</p> 
      <p>Adres: {formData.address}</p> 
      <Link href="/"> 
        Geri Dön
      </Link>
    </div>
  );
}ssss
