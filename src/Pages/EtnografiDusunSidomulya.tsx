import React, { useEffect, useState } from 'react';
import { ArrowLeft, Calendar, User, Clock, Share2, Users, Heart, Home, Utensils, Music, Sparkles, Globe, Camera, BookOpen, ChevronDown, Shield, Activity, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function EtnografiDusunSidomulya() {
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
        { id: 'permasalahan', title: 'Permasalahan', icon: Shield },
        { id: 'program-biosekuriti', title: 'Program Biosekuriti', icon: Activity },
        { id: 'aset-masyarakat', title: 'Aset Masyarakat', icon: Users },
        { id: 'strategi', title: 'Strategi Implementasi', icon: TrendingUp },
        { id: 'kesimpulan', title: 'Kesimpulan', icon: Heart }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50">
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
                                            ? 'bg-purple-500 text-white shadow-lg scale-105'
                                            : 'hover:bg-purple-50 text-gray-600 hover:text-purple-600'
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
                    <div className="absolute top-20 right-10 w-32 h-32 bg-purple-200/30 rounded-full animate-float filter blur-2xl"></div>
                    <div className="absolute bottom-20 left-16 w-40 h-40 bg-pink-300/40 rounded-full animate-float-delayed filter blur-3xl"></div>
                    <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-indigo-200/25 rounded-full animate-bounce-gentle filter blur-xl"></div>
                    <Sparkles className="absolute top-1/4 left-1/4 w-6 h-6 text-purple-400/60 animate-pulse" />
                    <Sparkles className="absolute bottom-1/4 right-1/3 w-4 h-4 text-pink-400/70 animate-bounce-gentle" />
                </div>

                {/* Hero Image */}
                <div className="absolute inset-0">
                    <img
                        src="https://legalist.id/wp-content/uploads/2023/11/Izin-usaha-peternakan.jpg"
                        alt="Kehidupan Masyarakat Sidomulya"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/60 via-purple-800/40 to-pink-900/60"></div>
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
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm border border-white/20">
                🔬 Analisis Biosekuriti
              </span>
                        </div>

                        <h1 className={`text-4xl md:text-6xl font-bold text-white mb-8 transition-all duration-1000 leading-tight ${
                            isVisible ? 'animate-slide-in-up stagger-1' : 'opacity-0 translate-y-10'
                        }`}>
                            Analisis Kesiapan Masyarakat pada Keberlanjutan Program <span className="text-pink-400">Biosekuriti</span>
                        </h1>

                        <p className={`text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-3xl transition-all duration-1000 ${
                            isVisible ? 'animate-slide-in-up stagger-2' : 'opacity-0 translate-y-10'
                        }`}>
                            dengan Menggunakan Metode Aset Based Community Development Sebagai Upaya Pencegahan Penyakit Pada Hewan Ternak Di Dusun Sidomulyo, Desa Banjarmulya, Pemalang
                        </p>

                        <div className={`flex flex-wrap items-center gap-8 text-white/80 mb-12 transition-all duration-1000 ${
                            isVisible ? 'animate-fade-in stagger-3' : 'opacity-0'
                        }`}>
                            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                                <Calendar className="w-5 h-5" />
                                <span className="font-medium">8 Agustus 2025</span>
                            </div>
                            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                                <User className="w-5 h-5" />
                                <span className="font-medium">KKN-T UNDIP TIM 28 Kelompok 4</span>
                            </div>
                            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                                <Clock className="w-5 h-5" />
                                <span className="font-medium">15 menit baca</span>
                            </div>
                        </div>

                        <div className={`flex items-center gap-4 transition-all duration-1000 ${
                            isVisible ? 'animate-slide-in-up stagger-4' : 'opacity-0 translate-y-10'
                        }`}>
                            <button
                                onClick={() => document.getElementById('pendahuluan')?.scrollIntoView({ behavior: 'smooth' })}
                                className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl flex items-center gap-3 font-semibold backdrop-blur-sm border border-white/20"
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
                        <div className="max-w-6xl mx-auto">
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                <div className="bg-gradient-to-br from-white to-purple-50/50 rounded-3xl shadow-2xl border border-purple-100/50 overflow-hidden p-12">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-2xl">
                                            <BookOpen className="w-8 h-8 text-white" />
                                        </div>
                                        <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-800 to-pink-700 bg-clip-text text-transparent">
                                            Pendahuluan
                                        </h2>
                                    </div>

                                    <div className="prose prose-lg max-w-none">
                                        <p className="text-gray-700 leading-relaxed text-xl mb-8 first-letter:text-5xl first-letter:font-bold first-letter:text-purple-600 first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                                            Desa banjarmulya terletak di kecamatan pemalang dan menjadi salah satu desa terluas di pemalang. Mata pencaharian di desa banjarmulya didominasi oleh hasil pertanian seperti jagung, padi, dan lainnya. Selain itu, banyak warga yang memelihara hewan ternak sebagai sumber perekonomian maupun kebutuhan sehari-hari. Akan tetapi, pengetahuan dan pencegahan penyakit pada hewan ternak masih minim di daerah tersebut.
                                        </p>

                                        <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-xl mb-8">
                                            <div className="flex items-start gap-4">
                                                <Camera className="w-8 h-8 text-purple-500 mt-1 flex-shrink-0" />
                                                <div>
                                                    <h4 className="font-bold text-purple-800 mb-2">Konteks Geografis</h4>
                                                    <p className="text-gray-700">
                                                        Desa Banjarmulya, Kecamatan Pemalang merupakan salah satu desa terluas dengan mata pencaharian utama di bidang pertanian dan peternakan.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Peta/Lokasi Desa */}
                                <div className="relative">
                                    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                        <img
                                            src="/images/images/WhatsApp Image 2025-07-23 at 13.11.28_8d47d2f8.jpg"
                                            alt="Kondisi geografis Desa Banjarmulya"
                                            className="w-full h-96 object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                        <div className="absolute bottom-6 left-6 right-6">
                                            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 border border-white/50">
                                                <p className="text-gray-800 font-semibold text-lg mb-2">
                                                    Kawasan Pertanian dan Peternakan Banjarmulya
                                                </p>
                                                <p className="text-gray-600 text-sm">
                                                    Kondisi geografis yang mendukung aktivitas pertanian dan peternakan masyarakat
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute -top-6 -right-6 w-24 h-24 bg-purple-200/30 rounded-full blur-2xl"></div>
                                    <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-pink-200/30 rounded-full blur-2xl"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Permasalahan Section */}
                <section id="permasalahan" className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-16">
                                <div className="flex items-center justify-center gap-4 mb-8">
                                    <div className="bg-gradient-to-r from-red-500 to-orange-500 p-3 rounded-2xl">
                                        <Shield className="w-8 h-8 text-white" />
                                    </div>
                                    <h2 className="text-4xl font-bold bg-gradient-to-r from-red-800 to-orange-700 bg-clip-text text-transparent">
                                        Identifikasi Permasalahan
                                    </h2>
                                </div>
                            </div>

                            <div className="grid lg:grid-cols-2 gap-8 mb-8">
                                <div className="bg-white p-8 rounded-3xl shadow-xl border border-red-100">
                                    <h4 className="font-bold text-red-800 mb-6 text-xl flex items-center gap-3">
                                        <span>🗣️</span> Wawancara dengan Mitra
                                    </h4>
                                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-red-400">
                                        <p className="text-gray-700 leading-relaxed">
                                            Berdasarkan pernyataan mitra kita yakni pak dani (20/07/25), melalui wawancara mengatakan bahwa salah satu sumber penyakit yang ada pada hewan ternaknya berasal dari gigitan nyamuk. Permasalahan tersebut dapat menimbulkan demam ataupun penyakit kulit pada hewan ternak. Dalam proses penyembuhannya, pak dani biasanya memberikan obat yang disarankan oleh sesama peternak lainnya.
                                        </p>
                                    </div>
                                </div>

                                {/* Dokumentasi Wawancara */}
                                <div className="relative">
                                    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                        <img
                                            src="/images/images/WhatsApp Image 2025-08-13 at 22.33.41_0957f77c.jpg"
                                            alt="Dokumentasi wawancara dengan peternak lokal"
                                            className="w-full h-96 object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                        <div className="absolute bottom-6 left-6 right-6">
                                            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 border border-white/50">
                                                <p className="text-gray-800 font-semibold text-lg mb-2">
                                                    Sesi Wawancara dengan Peternak
                                                </p>
                                                <p className="text-gray-600 text-sm">
                                                    Tim KKN melakukan wawancara mendalam dengan peternak lokal untuk memahami permasalahan kesehatan ternak
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-3xl border border-red-200">
                                <h4 className="font-bold text-red-800 mb-6 text-xl flex items-center gap-3">
                                    <span>⚠️</span> Dampak Permasalahan
                                </h4>
                                <p className="text-gray-700 leading-relaxed mb-6">
                                    Hal tersebut menggambarkan minimnya pengetahuan mereka akan penyakit dan obat-obatan pada hewan ternak, yang mana dapat mengakibatkan penyakit serius apabila ada kesalahan diagnosis. Dengan demikian, permasalahan tersebut membutuhkan pendampingan dari pencegahan penyakit pada hewan ternak guna menghindari penyakit fatal pada hewan ternak.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Program Biosekuriti Section */}
                <section id="program-biosekuriti" className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-16">
                                <div className="flex items-center justify-center gap-4 mb-8">
                                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-3 rounded-2xl">
                                        <Activity className="w-8 h-8 text-white" />
                                    </div>
                                    <h2 className="text-4xl font-bold bg-gradient-to-r from-green-800 to-emerald-700 bg-clip-text text-transparent">
                                        Program Biosekuriti
                                    </h2>
                                </div>
                            </div>

                            <div className="bg-white p-8 rounded-3xl shadow-xl border border-green-100 mb-8">
                                <p className="text-gray-700 leading-relaxed mb-8">
                                    Dengan adanya fenomena tersebut, para mahasiswa KKN-T UNDIP TIM 28 kelompok 4 membuat biosekuriti pada kandang ternak sebagai upaya pencegahan penyakit pada hewan ternak. Adapun program biosekuriti yang dibuat yakni:
                                </p>

                                <div className="grid md:grid-cols-3 gap-6">
                                    <div className="bg-green-50 p-6 rounded-2xl border border-green-200">
                                        <h5 className="font-semibold text-green-700 mb-3">🌾 Fermentasi Pakan</h5>
                                        <p className="text-gray-600 text-sm">Optimalisasi pakan ternak melalui fermentasi untuk meningkatkan nilai gizi</p>
                                    </div>
                                    <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200">
                                        <h5 className="font-semibold text-blue-700 mb-3">💡 Smart Light Trap</h5>
                                        <p className="text-gray-600 text-sm">Penangkap nyamuk dan hewan berbahaya menggunakan teknologi pintar</p>
                                    </div>
                                    <div className="bg-purple-50 p-6 rounded-2xl border border-purple-200">
                                        <h5 className="font-semibold text-purple-700 mb-3">🧽 Disinfektan Kandang</h5>
                                        <p className="text-gray-600 text-sm">Pembersihan dan sterilisasi kandang secara berkala</p>
                                    </div>
                                </div>
                            </div>

                            {/* Dokumentasi Program */}
                            <div className="grid md:grid-cols-2 gap-8 mb-8">
                                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                    <img
                                        src="/images/images/WhatsApp Image 2025-07-23 at 13.11.28_8d47d2f8.jpg"
                                        alt="Implementasi program fermentasi pakan"
                                        className="w-full h-64 object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <p className="text-white font-semibold">Program Fermentasi Pakan</p>
                                    </div>
                                </div>
                                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                    <img
                                        src="/images/images/WhatsApp Image 2025-08-15 at 08.31.15_e78a7817.jpg"
                                        alt="Smart light trap dan disinfektan kandang"
                                        className="w-full h-64 object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <p className="text-white font-semibold">Smart Light Trap & Disinfektan</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-3xl border border-green-200">
                                <h4 className="font-bold text-green-800 mb-4 text-xl">🎯 Tujuan Program</h4>
                                <p className="text-gray-700 leading-relaxed">
                                    Program yang ada bertujuan untuk terus menjaga kesehatan para ternak serta mencegah segala macam penyakit yang membahayakan hewan ternak. Adapun harapan yang terbentuk dari pembentukan inovasi yang telah dibuat yakni, para warga juga memahami tata cara pembuatan produk maupun mempertahankan keberlanjutan inovasi agar bisa menciptakan ternak yang unggul.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Aset Masyarakat Section */}
                <section id="aset-masyarakat" className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-16">
                                <div className="flex items-center justify-center gap-4 mb-8">
                                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-2xl">
                                        <Users className="w-8 h-8 text-white" />
                                    </div>
                                    <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-800 to-cyan-700 bg-clip-text text-transparent">
                                        Aset Based Community Development
                                    </h2>
                                </div>
                                <p className="text-gray-600 max-w-3xl mx-auto">
                                    Sebuah metode pengembangan masyarakat yang tidak hanya fokus pada kekurangan tetapi juga kelebihan atau potensi yang ada di masyarakat
                                </p>
                            </div>

                            <div className="space-y-8">
                                {/* Aset Manusia */}
                                <div className="grid lg:grid-cols-2 gap-8 items-center">
                                    <div className="bg-white p-8 rounded-3xl shadow-xl border border-blue-100">
                                        <h4 className="font-bold text-blue-800 mb-6 text-xl flex items-center gap-3">
                                            <span>👥</span> 1. Aset Manusia
                                        </h4>
                                        <p className="text-gray-700 leading-relaxed mb-6">
                                            Dusun sidomulyo dihuni oleh lansia yang minim akan produktivitas pekerjaan berat tetapi masih tetap aktif dalam kegiatan bermasyarakat yang condong kearah kreativitas. Selain itu, masih banyak warga yang aktif beternak untuk mengisi keseharian. Dengan demikian, pembuatan alat, disinfektan, serta optimalisasi pakan dapat dilakukan oleh para lansia guna mengisi waktu luang mereka sekaligus menjaga ternak lebih sehat.
                                        </p>
                                        <p className="text-gray-700 leading-relaxed mb-6">
                                            Terdapat banyak pemuda aktif yang seringkali ikut serta menjadi panitia dalam setiap acara di dusun sidomulyo. Banyak warga yang tertarik pada kegiatan yang menunjang kreativitas seperti pembuatan tanaman hidroponik, ataupun pengelolaan limbah plastik sebagai wadah tanaman.
                                        </p>
                                    </div>
                                    <div className="relative">
                                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                            <img
                                                src="/images/images/WhatsApp Image 2025-08-13 at 19.20.34_01260fa6.jpg"
                                                alt="Aktivitas masyarakat dalam kegiatan kreatif"
                                                className="w-full h-80 object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                                            <div className="absolute bottom-6 left-6 right-6">
                                                <p className="text-white font-semibold text-lg">
                                                    Keterlibatan Aktif Masyarakat dalam Program
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Aset Sosial */}
                                <div className="grid lg:grid-cols-2 gap-8 items-center">
                                    <div className="relative order-2 lg:order-1">
                                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                            <img
                                                src="/images/images/WhatsApp Image 2025-07-23 at 13.11.28_8d47d2f8.jpg"
                                                alt="Kegiatan sosial masyarakat seperti PKK dan pengajian"
                                                className="w-full h-80 object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                                            <div className="absolute bottom-6 left-6 right-6">
                                                <p className="text-white font-semibold text-lg">
                                                    Kegiatan PKK dan Organisasi Masyarakat
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-white p-8 rounded-3xl shadow-xl border border-cyan-100 order-1 lg:order-2">
                                        <h4 className="font-bold text-cyan-800 mb-6 text-xl flex items-center gap-3">
                                            <span>🤝</span> 2. Aset Sosial
                                        </h4>
                                        <p className="text-gray-700 leading-relaxed mb-6">
                                            Jaringan kekerabatan sangat erat di dusun sidomulyo. Tidak hanya antar warga, tetapi juga antara warga dan pejabat desa juga cukup dekat dan harmonis. Selain itu, terdapat kelompok ibu-ibu PKK yang aktif dalam mengikuti kegiatan seperti posyandu, posbindu, dan juga arisan. Segala bentuk gotong royong dan kerjasama antar warga maupun pejabat desa, sangat mendorong keberhasilan program pencegahan penyakit dan peningkatan kesehatan pada hewan ternak.
                                        </p>
                                    </div>
                                </div>

                                {/* Aset Fisik */}
                                <div className="grid lg:grid-cols-2 gap-8 items-center">
                                    <div className="bg-white p-8 rounded-3xl shadow-xl border border-green-100">
                                        <h4 className="font-bold text-green-800 mb-6 text-xl flex items-center gap-3">
                                            <span>🏞️</span> 3. Aset Fisik
                                        </h4>
                                        <p className="text-gray-700 leading-relaxed mb-6">
                                            Aset fisik yang dimaksud dapat dilihat dari banyaknya lahan atau sumber daya alam yang dapat digunakan. Seperti banyaknya tanaman atau bahan baku yang dapat terkelola dengan baik, sehingga dapat dimanfaatkan menjadi bahan utama dari pakan maupun disinfektan kandang. Selain itu, masih banyak lahan kosong yang belum difungsikan secara maksimal sehingga dapat dialihfungsikan menjadi tempat pengelolaan biosekuriti peternak menjadi produk inovasi warga bersama.
                                        </p>
                                    </div>
                                    <div className="relative">
                                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                            <img
                                                src="/images/images/sumberharjo.jpg"
                                                alt="Lahan dan sumber daya alam desa"
                                                className="w-full h-80 object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                                            <div className="absolute bottom-6 left-6 right-6">
                                                <p className="text-white font-semibold text-lg">
                                                    Potensi Lahan dan Sumber Daya Alam
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Aset Teknologi */}
                                <div className="bg-white p-8 rounded-3xl shadow-xl border border-purple-100">
                                    <h4 className="font-bold text-purple-800 mb-6 text-xl flex items-center gap-3">
                                        <span>📱</span> 4. Aset Pengetahuan Teknologi
                                    </h4>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Meskipun warga sekitar didominasi oleh lansia, tetapi banyak dari mereka yang masih menggunakan smartphone dengan aktif. Hal ini dapat dilihat dari setiap informasi kegiatan yang dibagikan di grup desa, yang mana menjadi faktor utama banyaknya kegiatan warga yang dilakukan secara bersama-sama. Selain itu, mereka juga aktif menggunakan media sosial sebagai hiburan. Salah satu mitra kami yang sangat membantu kami di lapangan menjelaskan bahwa dirinya juga terlibat dalam pemasaran internet atau Wi-fi, beliau menyebutkan bahwa banyak warga yang berminat dalam melakukan pemasangan wi-fi di daerahnya.
                                    </p>
                                </div>

                                {/* Aset Kepercayaan */}
                                <div className="bg-white p-8 rounded-3xl shadow-xl border border-orange-100">
                                    <h4 className="font-bold text-orange-800 mb-6 text-xl flex items-center gap-3">
                                        <span>🕌</span> 5. Aset Kepercayaan dan Kebudayaan
                                    </h4>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Masyarakat dusun sidomulyo sangat taat terhadap ajaran agama Islam, mereka seringkali mengadakan pengajian rutin seperti yang dilakukan oleh ibu-ibu setiap 1 minggu sekali, serta oleh bapak-bapak yang dilakukan setiap setengah bulan sekali. Pelaksanaannya dilakukan secara bergilir dan berganti pada rumah warga, hingga menimbulkan antusias antar warganya sehingga di dalam kegiatan tersebut menimbulkan kebiasaan saling memberi dan menolong satu sama lain.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed">
                                        Dalam konteks agama dan kepercayaan, Geertz mengakui bahwa agama merupakan simbol kebudayaan. Hal ini dapat diartikan bahwa agama menjadi sebuah motivasi atau pendorong dalam merasakan segala jenis emosi dan segala tindakan yang mereka ambil. Dengan demikian, agama menjadi alasan yang kuat dari banyaknya nilai saling tolong menolong, tanggung jawab, serta rasa iba dan kasihan dari masyarakat dusun sidomulyo.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Strategi Section */}
                <section id="strategi" className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-16">
                                <div className="flex items-center justify-center gap-4 mb-8">
                                    <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-3 rounded-2xl">
                                        <TrendingUp className="w-8 h-8 text-white" />
                                    </div>
                                    <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-800 to-purple-700 bg-clip-text text-transparent">
                                        Strategi Implementasi
                                    </h2>
                                </div>
                            </div>

                            <div className="space-y-8">
                                <div className="grid lg:grid-cols-2 gap-8 items-center">
                                    <div className="bg-white p-8 rounded-3xl shadow-xl border border-indigo-100">
                                        <h4 className="font-bold text-indigo-800 mb-6 text-xl flex items-center gap-3">
                                            <span>1️⃣</span> Aktif Menjalin Sosialisasi dengan Masyarakat Setempat
                                        </h4>
                                        <p className="text-gray-700 leading-relaxed mb-4">
                                            Dalam pemahaman antropologi, setiap masyarakat memiliki standar sosial budaya yang berbeda. Maka dari itu, kita perlu ikut serta membaur ke dalam masyarakat untuk dapat diterima dan memberikan ide ataupun inovasi yang dapat mereka lakukan. Berdasarkan aset sosial yang telah diidentifikasi, kita dapat melihat bahwa nilai kekeluargaan dan kebersamaan sangat erat terjalin.
                                        </p>
                                        <p className="text-gray-700 leading-relaxed">
                                            Dengan demikian, mahasiswa harus mengikuti nilai moral yang tertanam dalam budaya setempat agar bisa diterima oleh masyarakat. Dalam hal ini, para mahasiswa bisa ikut aktif dalam kegiatan bersama seperti PKK, pengajian, kerja bakti atau sekedar bercengkrama di sore hari.
                                        </p>
                                    </div>
                                    <div className="relative">
                                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                            <img
                                                src="/images/images/WhatsApp Image 2025-08-14 at 11.59.04_cf1245b2.jpg"
                                                alt="Mahasiswa KKN berinteraksi dengan masyarakat"
                                                className="w-full h-80 object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                                            <div className="absolute bottom-6 left-6 right-6">
                                                <p className="text-white font-semibold text-lg">
                                                    Integrasi Mahasiswa dengan Masyarakat
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white p-8 rounded-3xl shadow-xl border border-purple-100">
                                    <h4 className="font-bold text-purple-800 mb-6 text-xl flex items-center gap-3">
                                        <span>2️⃣</span> Pendampingan dalam Perancangan Biosekuriti ke Masyarakat
                                    </h4>
                                    <p className="text-gray-700 leading-relaxed">
                                        Dalam hal ini, mahasiswa akan mensimulasikan cara pembuatan biosekuriti ke masyarakat setempat. Hal tersebut juga berfungsi untuk meningkatkan pengetahuan sains dan teknologi untuk masyarakat di dusun sidomulyo. Dengan memberikan tutorial dan pendampingan secara langsung, mereka dapat memahami dengan cepat, serta lebih mudah bertanya mengenai hal yang mereka tidak mengerti. Dengan demikian, keberhasilan program tersebut akan terealisasikan apabila masyarakat dan mahasiswa melakukan praktik langsung turun lapangan alih-alih hanya memberikan teori saja.
                                    </p>
                                </div>

                                <div className="bg-white p-8 rounded-3xl shadow-xl border border-pink-100">
                                    <h4 className="font-bold text-pink-800 mb-6 text-xl flex items-center gap-3">
                                        <span>3️⃣</span> Monitoring dan Evaluasi Berkelanjutan
                                    </h4>
                                    <p className="text-gray-700 leading-relaxed">
                                        Perlu dipahami bahwasannya program KKN hanya sampai 40 hari. Namun, untuk menjaga keberlanjutan program perlu adanya monitoring dan evaluasi secara berkala. Hal tersebut dapat dilakukan secara daring ataupun melalui internet guna mempermudah akses monitoring jarak jauh. Kemampuan masyarakat dalam menggunakan smartphone cukup baik, sehingga dapat mempermudah keberlanjutan program biosekuriti pada aspek peternakan.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Kesimpulan Section */}
                <section id="kesimpulan" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-3xl p-12 shadow-2xl">
                                <Globe className="w-16 h-16 mx-auto mb-6" />
                                <h3 className="text-3xl font-bold mb-6">Kesimpulan</h3>
                                <p className="leading-relaxed text-lg">
                                    Berdasarkan aset-aset yang telah diidentifikasi, dapat disimpulkan bahwa masyarakat dusun sidomulyo memiliki kesiapan menjadi aktor keberlanjutan program biosekuriti. Adapun langkah strategis yang perlu dilakukan untuk mendorong keberhasilan program diversifikasi produk peternakan guna meningkatkan perekonomian masyarakat dusun sidomulyo melalui pendekatan Asset Based Community Development dapat diimplementasikan dengan memanfaatkan potensi lokal yang ada.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}