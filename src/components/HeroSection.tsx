const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/media/hero/WB-501.jpg"
          alt="Background Image"
          className="object-cover object-center w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
        <h1 className="text-5xl font-bold leading-tight mb-4">Botol Minum Premium</h1>
        <p className="text-lg text-gray-300 mb-8">Tetap terhidrasi dengan gaya menggunakan botol minum premium yang ramah lingkungan</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#products" className="px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-pink-600 to-pink-800 rounded-full hover:from-pink-700 hover:to-pink-900 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/30">Belanja Sekarang</a>
          <a href="#products" className="px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-green-600 to-green-800 rounded-full hover:from-green-700 hover:to-green-900 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/30">Beli Sekarang</a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;