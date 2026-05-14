import Layout from '@/components/Layout';

const AboutPage = () => {
  return (
    <Layout>
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-gray-900">Tentang HATORENA</h1>
            
            <div className="space-y-6 text-gray-700">
              <p>
                Kualitas dan konsistensi adalah fondasi dari segala yang kami lakukan. 
                Setiap produk yang kami tawarkan dipilih dengan memperhatikan bahan, 
                fungsi, dan penyelesaian akhir secara keseluruhan, memastikan bahwa 
                produk tersebut memenuhi kebutuhan praktis serta harapan pasar.
              </p>

              <p>
                Fokus kami tidak hanya pada bagaimana sebuah produk terlihat, 
                tetapi juga bagaimana produk tersebut berfungsi dalam penggunaan sehari-hari. 
                Setiap pesanan ditangani dengan standar yang sama, baik untuk jumlah kecil 
                maupun besar. Konsistensi sangat penting, terutama untuk hubungan bisnis 
                jangka panjang, dan prinsip ini tercermin dalam cara produk kami diperiksa, 
                dikemas, dan dikirimkan.
              </p>

              <p>
                Tujuan kami sederhana: menyediakan barang-barang yang dapat diandalkan 
                pelanggan tanpa meragukan kualitasnya. Komunikasi yang jelas dan penanganan 
                yang bertanggung jawab adalah bagian dari proses kami. Detail produk selalu 
                akurat, ekspektasi dikelola dengan tepat, dan transaksi ditangani secara profesional.
              </p>

              <p>
                Hal ini menciptakan kepercayaan dan memungkinkan kerja sama berkelanjutan. 
                Pertumbuhan didorong oleh peningkatan kualitas bukan hanya volume semata. 
                Dengan menjaga standar produk yang ketat dan pendekatan yang praktis, 
                operasi kami terus membangun kredibilitas dengan mitra-mitra yang 
                menghargai keandalan, kualitas, dan kerja sama jangka panjang.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Misi Kami</h3>
                <p className="text-gray-700">
                  Kami berkomitmen untuk menyediakan celana sport jogging jogger berkualitas premium 
                  yang nyaman dipakai sehari-hari. Produk kami dirancang dengan bahan terbaik, 
                  jahitan rapi, dan model kekinian yang cocok untuk berbagai aktivitas olahraga maupun santai.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Nilai-Nilai Kami</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><span className="font-semibold">Kualitas:</span> Kami hanya menawarkan produk yang memenuhi standar kualitas ketat kami</li>
                  <li><span className="font-semibold">Keberlanjutan:</span> Kami berkomitmen pada produk dan praktik yang ramah lingkungan</li>
                  <li><span className="font-semibold">Fokus Pelanggan:</span> Kepuasan Anda adalah prioritas utama kami</li>
                  <li><span className="font-semibold">Inovasi:</span> Kami terus meningkatkan produk dan layanan kami</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;