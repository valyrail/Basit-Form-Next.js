import { useState } from 'react'; // React kütüphanesinden 'useState' fonksiyonunu içe aktarıyoruz.
import { useRouter } from 'next/router'; // Next.js'in yönlendirme işlemleri için 'useRouter' kancasını içe aktarıyoruz.

export default function Home() { // Ana bileşeni oluşturuyoruz.

  // 1. Boş bir form verisi oluşturuyoruz ve bu veriyi güncellemek için 'setFormData' adında bir fonksiyon kullanıyoruz.
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
  });

  // 2. Form girişlerinin değerlerini güncellemek için bir 'handleChange' fonksiyonu tanımlıyoruz.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // 3. Sayfa yönlendirmesi için Next.js'in router'ını kullanmak üzere 'useRouter' fonksiyonunu kullanıyoruz.
  const router = useRouter();

  // 4. Form gönderildiğinde bu işlev çalışır.
  const handleSubmit = (e) => {
    e.preventDefault();

    // 5. Form verilerini tarayıcının yerel depolama alanına kaydediyoruz ve JSON formatına çeviriyoruz.
    localStorage.setItem('formData', JSON.stringify(formData));

    // 6. "/display" sayfasına yönlendirme yapıyoruz.
    router.push('/display');
  };

  return (
    <div className="centered-form"> 
      <form onSubmit={handleSubmit}> 
        <div>
          <label>Ad: </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange} // Girişlerde değişiklik olduğunda 'handleChange' fonksiyonunu kullanıyoruz.
          />
        </div>
        <div>
          <label>Soyad: </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Adres: </label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Kaydet</button> 
      </form>
    </div>
  );
}
