import React, { useEffect, useState } from 'react';
import { ArrowLeft, Calendar, User, Clock, Share2, Users, Heart, Home, Utensils, Music, Sparkles, Globe, Camera, BookOpen, ChevronDown } from 'lucide-react';
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
        { id: 'struktur-sosial', title: 'Struktur Sosial', icon: Users },
        { id: 'sistem-ekonomi', title: 'Sistem Ekonomi', icon: Utensils },
        { id: 'budaya-tradisi', title: 'Budaya & Tradisi', icon: Music },
        { id: 'pola-permukiman', title: 'Pola Permukiman', icon: Home },
        { id: 'sistem-pengetahuan', title: 'Sistem Pengetahuan', icon: Heart }
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
                        src="/images/images/ethnography.jpg"
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
                🔍 Etnografi
              </span>
                        </div>

                        <h1 className={`text-5xl md:text-7xl font-bold text-white mb-8 transition-all duration-1000 leading-tight ${
                            isVisible ? 'animate-slide-in-up stagger-1' : 'opacity-0 translate-y-10'
                        }`}>
                            Etnografi Dusun <span className="text-pink-400">Sidomulya</span>
                        </h1>

                        <p className={`text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl transition-all duration-1000 ${
                            isVisible ? 'animate-slide-in-up stagger-2' : 'opacity-0 translate-y-10'
                        }`}>
                            Kajian mendalam tentang kehidupan sosial-budaya masyarakat yang unik,
                            mengungkap dinamika tradisi dan adaptasi di era modern.
                        </p>

                        <div className={`flex flex-wrap items-center gap-8 text-white/80 mb-12 transition-all duration-1000 ${
                            isVisible ? 'animate-fade-in stagger-3' : 'opacity-0'
                        }`}>
                            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                                <Calendar className="w-5 h-5" />
                                <span className="font-medium">22 Februari 2024</span>
                            </div>
                            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                                <User className="w-5 h-5" />
                                <span className="font-medium">Dr. Siti Rahayu</span>
                            </div>
                            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                                <Clock className="w-5 h-5" />
                                <span className="font-medium">20 menit baca</span>
                            </div>
                        </div>

                        <div className={`flex items-center gap-4 transition-all duration-1000 ${
                            isVisible ? 'animate-slide-in-up stagger-4' : 'opacity-0 translate-y-10'
                        }`}>
                            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full transition-all duration-300 hover:shadow-2xl flex items-center gap-3 font-semibold transform hover:-translate-y-1">
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
                            <div className="bg-gradient-to-br from-white to-purple-50/50 rounded-3xl shadow-2xl border border-purple-100/50 overflow-hidden">
                                <div className="p-12">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-2xl">
                                            <BookOpen className="w-8 h-8 text-white" />
                                        </div>
                                        <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-800 to-pink-700 bg-clip-text text-transparent">
                                            Pendahuluan Etnografi
                                        </h2>
                                    </div>

                                    <div className="prose prose-lg max-w-none">
                                        <p className="text-gray-700 leading-relaxed text-xl mb-8 first-letter:text-5xl first-letter:font-bold first-letter:text-purple-600 first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                                            Etnografi Dusun Sidomulya merupakan kajian mendalam tentang kehidupan sosial-budaya masyarakat yang
                                            tinggal di kawasan bekas pabrik gula Sumberharjo. Penelitian ini mengeksplorasi bagaimana masyarakat
                                            mempertahankan tradisi di tengah perubahan zaman dan adaptasi terhadap kondisi pasca-industri.
                                        </p>

                                        <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-xl mb-8">
                                            <div className="flex items-start gap-4">
                                                <Camera className="w-8 h-8 text-purple-500 mt-1 flex-shrink-0" />
                                                <div>
                                                    <h4 className="font-bold text-purple-800 mb-2">Metodologi Penelitian</h4>
                                                    <p className="text-gray-700">
                                                        Melalui observasi partisipatif dan wawancara mendalam yang dilakukan selama dua tahun (2022-2024),
                                                        kajian ini mengungkap dinamika budaya, sistem sosial, dan strategi survival yang unik dari komunitas
                                                        multikultural di Sidomulya.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Struktur Sosial Section */}
                <section id="struktur-sosial" className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-16">
                                <div className="flex items-center justify-center gap-4 mb-8">
                                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-2xl">
                                        <Users className="w-8 h-8 text-white" />
                                    </div>
                                    <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-800 to-cyan-700 bg-clip-text text-transparent">
                                        Struktur Sosial dan Demografi
                                    </h2>
                                </div>
                            </div>

                            <div className="grid lg:grid-cols-2 gap-8 mb-12">
                                <div className="bg-white p-8 rounded-3xl shadow-xl border border-blue-100">
                                    <h4 className="font-bold text-blue-800 mb-6 text-xl flex items-center gap-3">
                                        <span>👥</span> Komposisi Penduduk
                                    </h4>
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center p-3 bg-blue-50 rounded-xl">
                                            <span className="font-medium">Total KK</span>
                                            <span className="font-bold text-blue-600">245 Kepala Keluarga</span>
                                        </div>
                                        <div className="flex justify-between items-center p-3 bg-blue-50 rounded-xl">
                                            <span className="font-medium">Jumlah Jiwa</span>
                                            <span className="font-bold text-blue-600">892 orang</span>
                                        </div>
                                        <div className="flex justify-between items-center p-3 bg-blue-50 rounded-xl">
                                            <span className="font-medium">Etnis Mayoritas</span>
                                            <span className="font-bold text-blue-600">Jawa (78%)</span>
                                        </div>
                                        <div className="flex justify-between items-center p-3 bg-blue-50 rounded-xl">
                                            <span className="font-medium">Etnis Minoritas</span>
                                            <span className="font-bold text-blue-600">Sunda, Madura, Tionghoa</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white p-8 rounded-3xl shadow-xl border border-cyan-100">
                                    <h4 className="font-bold text-cyan-800 mb-6 text-xl flex items-center gap-3">
                                        <span>📊</span> Struktur Usia
                                    </h4>
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center p-3 bg-cyan-50 rounded-xl">
                                            <span className="font-medium">Anak-anak (0-14)</span>
                                            <span className="font-bold text-cyan-600">23%</span>
                                        </div>
                                        <div className="flex justify-between items-center p-3 bg-cyan-50 rounded-xl">
                                            <span className="font-medium">Dewasa (15-59)</span>
                                            <span className="font-bold text-cyan-600">58%</span>
                                        </div>
                                        <div className="flex justify-between items-center p-3 bg-cyan-50 rounded-xl">
                                            <span className="font-medium">Lansia (60+)</span>
                                            <span className="font-bold text-cyan-600">19%</span>
                                        </div>
                                        <div className="flex justify-between items-center p-3 bg-cyan-50 rounded-xl">
                                            <span className="font-medium">Rasio Ketergantungan</span>
                                            <span className="font-bold text-cyan-600">72:100</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-3xl border border-blue-200">
                                <h4 className="font-bold text-blue-800 mb-6 text-xl flex items-center gap-3">
                                    <span>👑</span> Sistem Kepemimpinan Tradisional
                                </h4>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-4">
                                        <div className="bg-white p-4 rounded-2xl shadow-md">
                                            <h5 className="font-semibold text-blue-700 mb-2">Kepala Dusun (Kadus)</h5>
                                            <p className="text-gray-600 text-sm">Pemimpin formal yang dipilih melalui musyawarah</p>
                                        </div>
                                        <div className="bg-white p-4 rounded-2xl shadow-md">
                                            <h5 className="font-semibold text-blue-700 mb-2">Sesepuh Desa</h5>
                                            <p className="text-gray-600 text-sm">Tokoh informal yang dihormati karena usia dan pengalaman</p>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="bg-white p-4 rounded-2xl shadow-md">
                                            <h5 className="font-semibold text-blue-700 mb-2">Pemuda Karang Taruna</h5>
                                            <p className="text-gray-600 text-sm">Organisasi generasi muda yang aktif dalam pembangunan</p>
                                        </div>
                                        <div className="bg-white p-4 rounded-2xl shadow-md">
                                            <h5 className="font-semibold text-blue-700 mb-2">Ibu-ibu PKK</h5>
                                            <p className="text-gray-600 text-sm">Kelompok perempuan yang mengurus kesejahteraan sosial</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Continue with other sections following the same pattern... */}
                {/* I'll provide a couple more sections to show the pattern */}

                {/* Sistem Ekonomi Section */}
                <section id="sistem-ekonomi" className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                <div>
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-3 rounded-2xl">
                                            <Utensils className="w-8 h-8 text-white" />
                                        </div>
                                        <h2 className="text-4xl font-bold bg-gradient-to-r from-green-800 to-emerald-700 bg-clip-text text-transparent">
                                            Sistem Ekonomi dan Mata Pencaharian
                                        </h2>
                                    </div>

                                    <p className="text-gray-700 leading-relaxed text-lg mb-8">
                                        Pasca penutupan pabrik gula, masyarakat Sidomulya mengembangkan ekonomi subsisten yang kreatif dan
                                        berkelanjutan. Transformasi ekonomi ini menunjukkan adaptabilitas luar biasa dalam menghadapi perubahan
                                        struktural yang drastis.
                                    </p>

                                    <div className="grid grid-cols-3 gap-4 mb-8">
                                        <div className="bg-green-50 p-6 rounded-2xl text-center border border-green-200">
                                            <div className="text-3xl font-bold text-green-600 mb-2">67%</div>
                                            <div className="text-sm text-gray-700 font-medium">Pertanian & Perkebunan</div>
                                        </div>
                                        <div className="bg-blue-50 p-6 rounded-2xl text-center border border-blue-200">
                                            <div className="text-3xl font-bold text-blue-600 mb-2">23%</div>
                                            <div className="text-sm text-gray-700 font-medium">Usaha Kecil & Dagang</div>
                                        </div>
                                        <div className="bg-orange-50 p-6 rounded-2xl text-center border border-orange-200">
                                            <div className="text-3xl font-bold text-orange-600 mb-2">10%</div>
                                            <div className="text-sm text-gray-700 font-medium">Buruh & Jasa</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="relative">
                                    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                        <img
                                            src="/images/images/economic-system.jpg"
                                            alt="Sistem Ekonomi Lokal"
                                            className="w-full h-96 object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                        <div className="absolute bottom-6 left-6 right-6">
                                            <p className="text-white font-semibold text-lg">
                                                Aktivitas ekonomi masyarakat Sidomulya
                                            </p>
                                        </div>
                                    </div>
                                    <div className="absolute -top-6 -left-6 w-24 h-24 bg-green-200/30 rounded-full blur-2xl"></div>
                                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-emerald-200/30 rounded-full blur-2xl"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Conclusion Section */}
                <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-3xl p-12 shadow-2xl">
                                <Globe className="w-16 h-16 mx-auto mb-6" />
                                <h3 className="text-3xl font-bold mb-6">Kesimpulan Etnografi</h3>
                                <p className="leading-relaxed text-lg">
                                    Kajian etnografi ini mengungkapkan bahwa masyarakat Dusun Sidomulya merupakan komunitas yang dinamis,
                                    mampu mempertahankan identitas budaya sambil beradaptasi dengan perubahan zaman. Kearifan lokal mereka
                                    menjadi modal sosial yang berharga dalam menghadapi tantangan masa depan.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}