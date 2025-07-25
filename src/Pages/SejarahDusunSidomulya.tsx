import React, { useEffect, useState } from 'react';
import { ArrowLeft, Calendar, User, Clock, Share2, BookOpen, MapPin, Factory, Users, Trophy, Image as ImageIcon, Quote, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function SejarahDusunSidomulya() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        setIsVisible(true);
        window.scrollTo(0, 0);
    }, []);

    const handleBackClick = () => {
        navigate('/');
    };

    const sections = [
        { id: 'pendahuluan', title: 'Pendahuluan', icon: BookOpen },
        { id: 'era-kolonial', title: 'Era Kolonial', icon: Factory },
        { id: 'era-kemerdekaan', title: 'Era Kemerdekaan', icon: Trophy },
        { id: 'era-transisi', title: 'Era Transisi', icon: Users },
        { id: 'warisan', title: 'Warisan & Masa Depan', icon: MapPin }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-emerald-50">
            {/* Floating Navigation */}
            <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
                <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl border border-white/50 p-4">
                    <div className="space-y-3">
                        {sections.map((section) => {
                            const Icon = section.icon;
                            return (
                                <button
                                    key={section.id}
                                    onClick={() => {
                                        const element = document.getElementById(section.id);
                                        element?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className={`flex items-center gap-3 w-full p-3 rounded-xl transition-all duration-300 ${
                                        activeSection === section.id
                                            ? 'bg-green-500 text-white shadow-lg scale-105'
                                            : 'hover:bg-green-50 text-gray-600 hover:text-green-600'
                                    }`}
                                    title={section.title}
                                >
                                    <Icon className="w-4 h-4" />
                                    <span className="text-sm font-medium whitespace-nowrap">{section.title}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <div className="relative min-h-screen overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 left-10 w-32 h-32 bg-green-200/30 rounded-full animate-float filter blur-2xl"></div>
                    <div className="absolute bottom-20 right-16 w-40 h-40 bg-emerald-300/40 rounded-full animate-float-delayed filter blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-lime-200/25 rounded-full animate-bounce-gentle filter blur-xl"></div>
                </div>

                {/* Hero Image */}
                <div className="absolute inset-0">
                    <img
                        src="/images/sumberharjo.jpg"
                        alt="Pabrik Gula Sumberharjo"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
                </div>

                <div className="relative container mx-auto px-4 h-screen flex flex-col justify-center">
                    {/* Back Button */}
                    <div className={`mb-8 transition-all duration-700 ${isVisible ? 'animate-slide-in-left' : 'opacity-0 -translate-x-10'}`}>
                        <button
                            onClick={handleBackClick}
                            className="inline-flex items-center gap-3 text-white/90 hover:text-white font-medium transition-all duration-300 hover:gap-4 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            <span>Kembali ke Beranda</span>
                        </button>
                    </div>

                    {/* Hero Content */}
                    <div className="max-w-4xl">
                        <div className={`mb-6 transition-all duration-1000 ${isVisible ? 'animate-slide-in-up' : 'opacity-0 translate-y-10'}`}>
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm border border-white/20">
                📚 Sejarah
              </span>
                        </div>

                        <h1 className={`text-5xl md:text-7xl font-bold text-white mb-8 transition-all duration-1000 leading-tight ${
                            isVisible ? 'animate-slide-in-up stagger-1' : 'opacity-0 translate-y-10'
                        }`}>
                            Sejarah Dusun <span className="text-green-400">Sidomulya</span>
                        </h1>

                        <p className={`text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl transition-all duration-1000 ${
                            isVisible ? 'animate-slide-in-up stagger-2' : 'opacity-0 translate-y-10'
                        }`}>
                            Perjalanan panjang sebuah dusun dari masa kolonial hingga era modern,
                            dituturkan melalui jejak-jejak peradaban yang masih tersimpan hingga kini.
                        </p>

                        <div className={`flex flex-wrap items-center gap-8 text-white/80 mb-12 transition-all duration-1000 ${
                            isVisible ? 'animate-fade-in stagger-3' : 'opacity-0'
                        }`}>
                            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                                <Calendar className="w-5 h-5" />
                                <span className="font-medium">15 Maret 2024</span>
                            </div>
                            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                                <User className="w-5 h-5" />
                                <span className="font-medium">Pak Suroto</span>
                            </div>
                            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                                <Clock className="w-5 h-5" />
                                <span className="font-medium">15 menit baca</span>
                            </div>
                        </div>

                        <div className={`flex items-center gap-4 transition-all duration-1000 ${
                            isVisible ? 'animate-slide-in-up stagger-4' : 'opacity-0 translate-y-10'
                        }`}>
                            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full transition-all duration-300 hover:shadow-2xl flex items-center gap-3 font-semibold transform hover:-translate-y-1">
                                <Share2 className="w-5 h-5" />
                                <span>Bagikan Artikel</span>
                            </button>
                            <button
                                onClick={() => document.getElementById('pendahuluan')?.scrollIntoView({ behavior: 'smooth' })}
                                className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl flex items-center gap-3 font-semibold backdrop-blur-sm border border-white/30"
                            >
                                <span>Mulai Membaca</span>
                                <ChevronDown className="w-5 h-5 animate-bounce" />
                            </button>
                        </div>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Article Content */}
            <div className="relative bg-white">
                {/* Pendahuluan Section */}
                <section id="pendahuluan" className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="bg-gradient-to-br from-white to-green-50/50 rounded-3xl shadow-2xl border border-green-100/50 overflow-hidden">
                                <div className="p-12">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-3 rounded-2xl">
                                            <BookOpen className="w-8 h-8 text-white" />
                                        </div>
                                        <h2 className="text-4xl font-bold bg-gradient-to-r from-green-800 to-emerald-700 bg-clip-text text-transparent">
                                            Pendahuluan
                                        </h2>
                                    </div>

                                    <div className="prose prose-lg max-w-none">
                                        <p className="text-gray-700 leading-relaxed text-xl mb-8 first-letter:text-5xl first-letter:font-bold first-letter:text-green-600 first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                                            Dusun Sidomulya, sebuah permukiman kecil yang terletak di bawah bayangan cerobong tua Pabrik Gula Sumberharjo,
                                            menyimpan kisah panjang perjalanan sejarah yang menarik. Dari masa kolonial Belanda hingga era kemerdekaan Indonesia,
                                            dusun ini telah menjadi saksi berbagai peristiwa penting yang membentuk identitas dan karakter masyarakatnya.
                                        </p>

                                        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-xl mb-8">
                                            <Quote className="w-8 h-8 text-green-500 mb-4" />
                                            <blockquote className="text-lg italic text-gray-700">
                                                "Sejarah adalah guru terbaik, dan Dusun Sidomulya adalah bukti hidup bagaimana sebuah komunitas
                                                dapat bertahan dan berkembang melalui berbagai perubahan zaman."
                                            </blockquote>
                                            <cite className="text-green-600 font-semibold mt-2 block">- Pak Suroto, Sesepuh Desa</cite>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Era Kolonial Section */}
                <section id="era-kolonial" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                <div>
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-3 rounded-2xl">
                                            <Factory className="w-8 h-8 text-white" />
                                        </div>
                                        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-800 to-indigo-700 bg-clip-text text-transparent">
                                            Era Kolonial (1800-1945)
                                        </h2>
                                    </div>

                                    <div className="prose prose-lg max-w-none">
                                        <p className="text-gray-700 leading-relaxed text-lg mb-6">
                                            Sejarah Dusun Sidomulya tidak dapat dipisahkan dari berdirinya Pabrik Gula Sumberharjo pada awal abad ke-19.
                                            Pabrik ini didirikan oleh pemerintah kolonial Belanda sebagai bagian dari sistem kultuurstelse (sistem tanam paksa)
                                            yang diberlakukan di Jawa.
                                        </p>

                                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100">
                                                <h4 className="font-bold text-blue-800 mb-3 text-lg">🏗️ Pembangunan Infrastruktur</h4>
                                                <ul className="space-y-2 text-gray-700">
                                                    <li>• Jalur kereta api untuk transportasi tebu</li>
                                                    <li>• Sistem irigasi modern untuk perkebunan</li>
                                                    <li>• Perumahan untuk pekerja pabrik</li>
                                                    <li>• Fasilitas umum seperti sekolah dan klinik</li>
                                                </ul>
                                            </div>
                                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-indigo-100">
                                                <h4 className="font-bold text-indigo-800 mb-3 text-lg">👥 Dampak Sosial</h4>
                                                <ul className="space-y-2 text-gray-700">
                                                    <li>• Urbanisasi pekerja dari berbagai daerah</li>
                                                    <li>• Percampuran budaya Jawa dan etnis lain</li>
                                                    <li>• Sistem kerja terstruktur dan disiplin tinggi</li>
                                                    <li>• Lahirnya komunitas multikultural</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="relative">
                                    {/* Historical Image */}
                                    <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-6">
                                        <img
                                            src="/images/Suikerfabriek_Soember-Hardjo_bij_Pemalang,_KITLV_18230.jpg"
                                            alt="Pabrik Gula Sumberharjo pada era kolonial"
                                            className="w-full h-96 object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                        <div className="absolute bottom-6 left-6 right-6">
                                            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 border border-white/50">
                                                <p className="text-gray-800 font-semibold text-lg mb-2">
                                                    Pabrik Gula Sumberharjo pada era kolonial
                                                </p>
                                                <p className="text-gray-600 text-sm">
                                                    Foto historis dari koleksi KITLV menunjukkan kemegahan pabrik gula yang menjadi pusat ekonomi regional
                                                </p>
                                                <div className="flex items-center gap-2 mt-2">
                                                    <ImageIcon className="w-4 h-4 text-blue-500" />
                                                    <span className="text-xs text-gray-500">Sumber: KITLV Digital Collections</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Additional Historical Context */}
                                    <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-blue-100">
                                        <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                                            <span>📸</span> Saksi Sejarah
                                        </h4>
                                        <p className="text-gray-700 text-sm leading-relaxed">
                                            Foto di atas merupakan dokumentasi langka dari masa kejayaan Pabrik Gula Sumberharjo.
                                            Terlihat jelas arsitektur kolonial yang megah dengan cerobong asap tinggi menjulang,
                                            mencerminkan kemajuan teknologi industri pada masanya. Pabrik ini tidak hanya menjadi
                                            pusat produksi gula, tetapi juga ikon modernitas di wilayah Pemalang dan sekitarnya.
                                        </p>
                                    </div>

                                    {/* Decorative elements */}
                                    <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-200/30 rounded-full blur-2xl"></div>
                                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-200/30 rounded-full blur-2xl"></div>
                                </div>
                            </div>

                            {/* Additional Context */}
                            <div className="mt-12 bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-blue-100">
                                <p className="text-gray-700 leading-relaxed text-lg">
                                    Kehadiran pabrik gula ini mengubah lanskap geografis dan sosial daerah secara drastis. Lahan-lahan pertanian
                                    tradisional dialihfungsikan menjadi perkebunan tebu, sementara masyarakat lokal beradaptasi dengan sistem ekonomi
                                    baru yang berorientasi pada industri. Foto historis dari koleksi KITLV ini menjadi bukti visual bagaimana
                                    Pabrik Gula Sumberharjo menjadi landmark penting yang mendefinisikan identitas kawasan selama lebih dari seabad.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Era Kemerdekaan Section */}
                <section id="era-kemerdekaan" className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                <div className="relative order-2 lg:order-1">
                                    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                        <img
                                            src="/images/images (1).jpeg"
                                            alt="Era Kemerdekaan"
                                            className="w-full h-96 object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                        <div className="absolute bottom-6 left-6 right-6">
                                            <p className="text-white font-semibold text-lg">
                                                Masa keemasan pabrik gula pasca kemerdekaan
                                            </p>
                                        </div>
                                    </div>
                                    <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-200/30 rounded-full blur-2xl"></div>
                                    <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-200/30 rounded-full blur-2xl"></div>
                                </div>

                                <div className="order-1 lg:order-2">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-3 rounded-2xl">
                                            <Trophy className="w-8 h-8 text-white" />
                                        </div>
                                        <h2 className="text-4xl font-bold bg-gradient-to-r from-yellow-700 to-orange-700 bg-clip-text text-transparent">
                                            Era Kemerdekaan (1945-1980)
                                        </h2>
                                    </div>

                                    <div className="prose prose-lg max-w-none">
                                        <p className="text-gray-700 leading-relaxed text-lg mb-6">
                                            Pasca kemerdekaan Indonesia, Pabrik Gula Sumberharjo mengalami nasionalisasi dan menjadi bagian dari
                                            Perusahaan Negara Perkebunan (PNP). Era ini menandai babak baru dalam sejarah Dusun Sidomulya dengan
                                            berbagai perubahan signifikan.
                                        </p>

                                        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-8 rounded-2xl border border-yellow-200 mb-6">
                                            <h4 className="font-bold text-yellow-800 mb-4 text-xl flex items-center gap-3">
                                                <span>🌟</span> Masa Keemasan (1950-1970)
                                            </h4>
                                            <p className="text-gray-700 leading-relaxed">
                                                Periode ini merupakan masa keemasan pabrik gula dimana produksi mencapai puncaknya. Dusun Sidomulya
                                                berkembang pesat dengan fasilitas yang semakin lengkap. Masyarakat menikmati kehidupan yang relatif
                                                sejahtera dengan jaminan kerja yang stabil dan berbagai fasilitas sosial.
                                            </p>
                                        </div>

                                        <p className="text-gray-700 leading-relaxed text-lg">
                                            Namun, mulai tahun 1970-an, industri gula nasional menghadapi berbagai tantangan termasuk persaingan
                                            global dan penurunan produktivitas. Hal ini mulai berdampak pada kehidupan masyarakat Dusun Sidomulya.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Era Transisi Section */}
                <section id="era-transisi" className="py-20 bg-gradient-to-br from-red-50 to-pink-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-16">
                                <div className="flex items-center justify-center gap-4 mb-8">
                                    <div className="bg-gradient-to-r from-red-500 to-pink-500 p-3 rounded-2xl">
                                        <Users className="w-8 h-8 text-white" />
                                    </div>
                                    <h2 className="text-4xl font-bold bg-gradient-to-r from-red-800 to-pink-700 bg-clip-text text-transparent">
                                        Era Transisi dan Adaptasi (1980-Sekarang)
                                    </h2>
                                </div>
                            </div>

                            <div className="grid lg:grid-cols-2 gap-12 mb-12">
                                <div className="bg-white p-8 rounded-3xl shadow-xl border border-red-100">
                                    <h4 className="font-bold text-red-800 mb-6 text-xl flex items-center gap-3">
                                        <span>⚠️</span> Tantangan yang Dihadapi
                                    </h4>
                                    <ul className="space-y-4 text-gray-700">
                                        <li className="flex items-start gap-3">
                                            <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                                            <span>Hilangnya lapangan kerja utama akibat penutupan pabrik</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                                            <span>Penurunan drastis ekonomi lokal dan daya beli masyarakat</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                                            <span>Urbanisasi besar-besaran penduduk ke kota-kota besar</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                                            <span>Degradasi infrastruktur dan fasilitas umum</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-white p-8 rounded-3xl shadow-xl border border-green-100">
                                    <h4 className="font-bold text-green-800 mb-6 text-xl flex items-center gap-3">
                                        <span>💡</span> Strategi Adaptasi
                                    </h4>
                                    <ul className="space-y-4 text-gray-700">
                                        <li className="flex items-start gap-3">
                                            <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                                            <span>Diversifikasi ke sektor pertanian dan peternakan</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                                            <span>Pengembangan usaha kecil dan menengah berbasis lokal</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                                            <span>Penguatan gotong royong dan solidaritas masyarakat</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                                            <span>Pelestarian budaya dan tradisi sebagai identitas</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
                                <p className="text-gray-700 leading-relaxed text-lg">
                                    Meskipun menghadapi berbagai tantangan, masyarakat Dusun Sidomulya menunjukkan ketahanan dan adaptabilitas
                                    yang luar biasa. Mereka berhasil membangun ekonomi alternatif berbasis pertanian dan usaha kecil sambil
                                    tetap mempertahankan nilai-nilai komunal yang telah mengakar sejak masa lalu.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Warisan dan Masa Depan Section */}
                <section id="warisan" className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-16">
                                <div className="flex items-center justify-center gap-4 mb-8">
                                    <div className="bg-gradient-to-r from-purple-500 to-indigo-500 p-3 rounded-2xl">
                                        <MapPin className="w-8 h-8 text-white" />
                                    </div>
                                    <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-800 to-indigo-700 bg-clip-text text-transparent">
                                        Warisan dan Visi Masa Depan
                                    </h2>
                                </div>
                            </div>

                            <div className="grid lg:grid-cols-3 gap-8 mb-12">
                                <div className="bg-white p-6 rounded-2xl shadow-lg border border-purple-100 text-center">
                                    <div className="text-4xl mb-4">🏛️</div>
                                    <h4 className="font-bold text-purple-800 mb-3">Resiliensi</h4>
                                    <p className="text-gray-600">Kemampuan beradaptasi dengan perubahan</p>
                                </div>
                                <div className="bg-white p-6 rounded-2xl shadow-lg border border-purple-100 text-center">
                                    <div className="text-4xl mb-4">🤝</div>
                                    <h4 className="font-bold text-purple-800 mb-3">Solidaritas</h4>
                                    <p className="text-gray-600">Semangat gotong royong yang kuat</p>
                                </div>
                                <div className="bg-white p-6 rounded-2xl shadow-lg border border-purple-100 text-center">
                                    <div className="text-4xl mb-4">💡</div>
                                    <h4 className="font-bold text-purple-800 mb-3">Inovasi</h4>
                                    <p className="text-gray-600">Kreativitas dalam menghadapi tantangan</p>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-3xl p-12 shadow-2xl">
                                <h3 className="text-3xl font-bold mb-6 text-center">Kesimpulan</h3>
                                <p className="leading-relaxed text-lg text-center max-w-4xl mx-auto">
                                    Sejarah Dusun Sidomulya adalah cerminan dari perjalanan bangsa Indonesia secara keseluruhan.
                                    Dari masa kolonial yang penuh tantangan, era kemerdekaan yang penuh harapan, hingga periode
                                    transisi yang membutuhkan adaptasi, masyarakat Sidomulya telah membuktikan bahwa dengan
                                    semangat gotong royong dan kearifan lokal, sebuah komunitas dapat bertahan dan berkembang
                                    meskipun menghadapi berbagai perubahan zaman.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}