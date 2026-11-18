// articleDummy.js
// Dummy data fallback saat BE error.
// Struktur tetap sama dengan response mentah dari Backend:
// id, title, content, excerpt, image, author_email, created_at, tags.

// Foto menggunakan Unsplash.
// Jika foto gagal dimuat, FE dapat menggunakan fallback image.

const articleImages = {
  saham: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=85',
  keuangan: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85',
  teknikal: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&w=1200&q=85',
  diversifikasi: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=85',
  dividen: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=85',
  investor: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=1200&q=85',
  ihsg: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1200&q=85',
  trading: 'https://images.unsplash.com/photo-1535320903710-d993d3d77d29?auto=format&fit=crop&w=1200&q=85',
};

// Membuat konten artikel dalam format HTML
const body = (intro, paragraphs, heading, points, quote) => `
  <p><strong>${intro}</strong></p>

  ${paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join('\n')}

  <h2>${heading}</h2>

  <ul>
    ${points.map((point) => `<li>${point}</li>`).join('\n')}
  </ul>

  <blockquote>${quote}</blockquote>

  <p>
    Dengan memahami informasi tersebut, investor dapat mengambil
    keputusan yang lebih terencana berdasarkan tujuan dan profil
    risiko masing-masing. Selalu lakukan riset sebelum mengambil
    keputusan investasi.
  </p>
`;

const make = (id, title, excerpt, image, author, created_at, tags, content) => ({
  id,
  title,
  excerpt,
  content,
  image,
  author_email: author,
  created_at,
  tags,
});

export const DUMMY_ARTICLES = [
  // 1. INVESTASI SAHAM
  make(
    1,
    'Panduan Memulai Investasi Saham untuk Pemula',
    'Belum pernah investasi saham? Kenali langkah dasar mulai dari membuka rekening efek hingga memilih saham pertama Anda.',
    articleImages.saham,
    'admin@narastocks.com',
    '2026-10-12T08:00:00Z',
    [
      { name: 'Pemula', bgColor: 'dcfce7', textColor: '166534' },
      { name: 'Investasi', bgColor: 'dbeafe', textColor: '1e40af' },
    ],
    body(
      'Investasi saham merupakan salah satu cara untuk mengembangkan aset dalam jangka panjang dengan memiliki sebagian kepemilikan suatu perusahaan.',
      [
        'Bagi pemula, memahami cara kerja pasar saham merupakan langkah pertama yang penting. Saham diperdagangkan melalui Bursa Efek Indonesia (BEI), dan investor dapat melakukan transaksi melalui perusahaan sekuritas yang telah memiliki izin.',
        'Sebelum membeli saham, pastikan Anda sudah memahami tujuan investasi, kemampuan finansial, serta risiko yang mungkin terjadi. Harga saham dapat mengalami kenaikan maupun penurunan mengikuti kondisi perusahaan dan pasar.',
      ],
      'Langkah Memulai Investasi Saham',
      [
        'Pelajari dasar-dasar pasar modal dan mekanisme perdagangan saham.',
        'Pilih perusahaan sekuritas yang terdaftar dan diawasi OJK.',
        'Buka rekening dana nasabah (RDN).',
        'Pelajari laporan keuangan dan kinerja perusahaan.',
        'Mulai dengan dana yang sesuai kemampuan finansial.',
      ],
      'Investasi yang baik dimulai dari pengetahuan, perencanaan, dan pemahaman terhadap risiko.',
    ),
  ),

  // 2. LAPORAN KEUANGAN
  make(
    2,
    'Cara Membaca Laporan Keuangan Perusahaan',
    'Laporan keuangan adalah kunci analisis fundamental. Pelajari cara membaca neraca, laba rugi, dan arus kas dengan lebih mudah.',
    articleImages.keuangan,
    'analis@narastocks.com',
    '2026-10-14T08:00:00Z',
    [
      { name: 'Fundamental', bgColor: 'dbeafe', textColor: '1e40af' },
      { name: 'Edukasi', bgColor: 'fef9c3', textColor: '854d0e' },
    ],
    body(
      'Laporan keuangan memberikan gambaran mengenai kondisi dan kinerja keuangan sebuah perusahaan dalam periode tertentu.',
      [
        'Dalam analisis fundamental, laporan keuangan menjadi salah satu sumber informasi penting bagi investor. Melalui laporan tersebut, investor dapat mengetahui kemampuan perusahaan menghasilkan keuntungan, mengelola aset, serta memenuhi kewajiban.',
        'Terdapat tiga laporan utama yang perlu dipahami, yaitu laporan posisi keuangan, laporan laba rugi, dan laporan arus kas.',
      ],
      'Tiga Laporan Keuangan Utama',
      [
        'Neraca: menunjukkan aset, liabilitas, dan ekuitas perusahaan.',
        'Laporan laba rugi: menggambarkan pendapatan, beban, dan keuntungan perusahaan.',
        'Laporan arus kas: menunjukkan pergerakan kas dari aktivitas operasi, investasi, dan pendanaan.',
        'Rasio keuangan: membantu mengevaluasi profitabilitas, likuiditas, dan solvabilitas.',
      ],
      'Memahami laporan keuangan membantu investor menilai kondisi perusahaan sebelum mengambil keputusan.',
    ),
  ),

  // 3. ANALISIS TEKNIKAL
  make(
    3,
    'Mengenal Analisis Teknikal: Support dan Resistance',
    'Support dan resistance adalah konsep dasar analisis teknikal untuk membantu mengidentifikasi area harga yang berpotensi menjadi titik beli dan jual.',
    articleImages.teknikal,
    'analis@narastocks.com',
    '2026-10-16T08:00:00Z',
    [
      { name: 'Teknikal', bgColor: 'ede9fe', textColor: '5b21b6' },
      { name: 'Trading', bgColor: 'fce7f3', textColor: '9d174d' },
    ],
    body(
      'Analisis teknikal merupakan metode analisis yang menggunakan data historis harga dan volume perdagangan untuk mempelajari pergerakan pasar.',
      [
        'Dua konsep yang sering digunakan dalam analisis teknikal adalah support dan resistance. Keduanya membantu trader mengidentifikasi area harga yang secara historis menunjukkan respons pasar.',
        'Support merupakan area harga yang berpotensi menahan penurunan. Sebaliknya, resistance merupakan area harga yang berpotensi menahan kenaikan.',
      ],
      'Perbedaan Support dan Resistance',
      [
        'Support: area harga yang berpotensi menjadi tempat munculnya tekanan beli.',
        'Resistance: area harga yang berpotensi menjadi tempat munculnya tekanan jual.',
        'Breakout: kondisi ketika harga bergerak melewati area support atau resistance.',
        'Retest: kondisi ketika harga kembali menguji area yang sebelumnya ditembus.',
      ],
      'Support dan resistance merupakan alat bantu analisis, bukan jaminan arah pergerakan harga.',
    ),
  ),

  // 4. DIVERSIFIKASI
  make(
    4,
    'Strategi Diversifikasi Portofolio di Tengah Volatilitas',
    'Volatilitas pasar tidak bisa dihindari, tetapi risikonya dapat dikelola melalui diversifikasi portofolio yang tepat.',
    articleImages.diversifikasi,
    'admin@narastocks.com',
    '2026-10-18T08:00:00Z',
    [
      { name: 'Strategi', bgColor: 'ffedd5', textColor: '9a3412' },
      { name: 'Portofolio', bgColor: 'e0e7ff', textColor: '3730a3' },
    ],
    body(
      'Diversifikasi merupakan strategi pengelolaan investasi dengan menyebarkan dana ke berbagai instrumen atau aset untuk mengurangi ketergantungan pada satu jenis investasi.',
      [
        'Pasar keuangan dapat mengalami perubahan karena berbagai faktor, seperti kondisi ekonomi, kebijakan pemerintah, suku bunga, dan sentimen investor.',
        'Dengan diversifikasi, investor dapat mengurangi dampak negatif apabila salah satu aset mengalami penurunan nilai. Namun, strategi ini tidak sepenuhnya menghilangkan risiko investasi.',
      ],
      'Cara Melakukan Diversifikasi',
      [
        'Menyebarkan investasi ke beberapa sektor industri.',
        'Mempertimbangkan berbagai instrumen investasi.',
        'Menyesuaikan komposisi portofolio dengan profil risiko.',
        'Melakukan evaluasi portofolio secara berkala.',
        'Menghindari konsentrasi investasi pada satu perusahaan.',
      ],
      'Diversifikasi membantu mengelola risiko, bukan menghilangkan seluruh kemungkinan kerugian.',
    ),
  ),

  // 5. DIVIDEN
  make(
    5,
    'Dividen: Apa Itu dan Bagaimana Cara Mendapatkannya?',
    'Dividen adalah pembagian laba perusahaan kepada pemegang saham. Simak mekanisme pembagian dan tanggal penting yang perlu diketahui.',
    articleImages.dividen,
    'admin@narastocks.com',
    '2026-10-20T08:00:00Z',
    [
      { name: 'Dividen', bgColor: 'd1fae5', textColor: '065f46' },
      { name: 'Saham', bgColor: 'dbeafe', textColor: '1e40af' },
    ],
    body(
      'Dividen merupakan bagian keuntungan perusahaan yang dibagikan kepada pemegang saham berdasarkan keputusan perusahaan dan ketentuan yang berlaku.',
      [
        'Tidak semua perusahaan membagikan dividen secara rutin. Sebagian perusahaan memilih menggunakan laba yang diperoleh untuk mendukung ekspansi, pengembangan produk, atau kebutuhan operasional.',
        'Investor yang tertarik pada saham dividen perlu memperhatikan jadwal pembagian dividen, kondisi keuangan perusahaan, serta keberlanjutan kinerja bisnisnya.',
      ],
      'Tanggal Penting dalam Pembagian Dividen',
      [
        'Cum Date: hari terakhir investor membeli saham untuk memperoleh hak dividen.',
        'Ex Date: tanggal ketika saham diperdagangkan tanpa hak atas dividen.',
        'Recording Date: tanggal pencatatan pemegang saham yang berhak menerima dividen.',
        'Payment Date: tanggal pembayaran dividen kepada investor.',
      ],
      'Dividen dapat menjadi salah satu sumber keuntungan investasi, tetapi tetap perlu dianalisis bersama kondisi fundamental perusahaan.',
    ),
  ),

  // 6. KESALAHAN INVESTOR
  make(
    6,
    'Kesalahan Umum Investor Pemula yang Wajib Dihindari',
    'Ikut-ikutan tren, tidak memiliki rencana investasi, dan mengambil keputusan berdasarkan emosi merupakan beberapa kesalahan yang sering terjadi.',
    articleImages.investor,
    'editor@narastocks.com',
    '2026-10-22T08:00:00Z',
    [
      { name: 'Pemula', bgColor: 'dcfce7', textColor: '166534' },
      { name: 'Tips', bgColor: 'fce7f3', textColor: '9d174d' },
    ],
    body(
      'Memulai investasi saham membutuhkan pemahaman dan kedisiplinan. Tanpa persiapan yang cukup, investor pemula dapat melakukan kesalahan dalam mengambil keputusan.',
      [
        'Salah satu kesalahan yang sering terjadi adalah membeli saham hanya karena mengikuti rekomendasi atau tren yang sedang ramai dibicarakan. Padahal, setiap investor memiliki tujuan dan toleransi risiko yang berbeda.',
        'Kesalahan lainnya adalah terlalu sering memantau perubahan harga sehingga keputusan investasi lebih banyak dipengaruhi emosi daripada analisis.',
      ],
      'Kesalahan yang Perlu Dihindari',
      [
        'Membeli saham tanpa melakukan riset terlebih dahulu.',
        'Menginvestasikan seluruh dana pada satu saham.',
        'Tidak memiliki tujuan dan strategi investasi.',
        'Mengabaikan risiko dan kondisi fundamental perusahaan.',
        'Mengambil keputusan secara impulsif ketika harga bergerak.',
      ],
      'Keputusan investasi sebaiknya didasarkan pada analisis dan perencanaan, bukan sekadar mengikuti tren.',
    ),
  ),

  // 7. IHSG
  make(
    7,
    'Memahami IHSG dan Pengaruhnya terhadap Portofolio Anda',
    'IHSG merupakan indikator utama pergerakan harga saham di Bursa Efek Indonesia. Ketahui fungsi dan cara memahami pergerakannya.',
    articleImages.ihsg,
    'analis@narastocks.com',
    '2026-10-24T08:00:00Z',
    [
      { name: 'Pasar Modal', bgColor: 'e0f2fe', textColor: '075985' },
      { name: 'IHSG', bgColor: 'ede9fe', textColor: '5b21b6' },
    ],
    body(
      'Indeks Harga Saham Gabungan atau IHSG merupakan indeks yang menggambarkan pergerakan harga saham yang tercatat di Bursa Efek Indonesia.',
      [
        'Pergerakan IHSG sering digunakan sebagai gambaran umum kondisi pasar saham Indonesia. Ketika IHSG mengalami kenaikan, pasar secara keseluruhan menunjukkan penguatan berdasarkan perhitungan indeks.',
        'Namun, kenaikan atau penurunan IHSG tidak selalu mencerminkan kondisi seluruh saham. Setiap perusahaan memiliki kinerja dan karakteristik yang berbeda.',
      ],
      'Faktor yang Memengaruhi IHSG',
      ['Kondisi ekonomi nasional dan global.', 'Perubahan tingkat suku bunga.', 'Kebijakan pemerintah dan bank sentral.', 'Kinerja perusahaan yang tercatat di bursa.', 'Sentimen dan aktivitas investor domestik maupun asing.'],
      'IHSG memberikan gambaran pasar secara umum, tetapi bukan satu-satunya indikator untuk menilai suatu saham.',
    ),
  ),

  // 8. INVESTASI VS TRADING
  make(
    8,
    'Investasi Jangka Panjang vs Trading: Mana yang Cocok?',
    'Setiap gaya berinvestasi memiliki tujuan, risiko, dan kebutuhan waktu yang berbeda. Kenali perbedaannya sebelum menentukan strategi.',
    articleImages.trading,
    'editor@narastocks.com',
    '2026-10-26T08:00:00Z',
    [
      { name: 'Strategi', bgColor: 'ffedd5', textColor: '9a3412' },
      { name: 'Trading', bgColor: 'fce7f3', textColor: '9d174d' },
    ],
    body(
      'Investasi jangka panjang dan trading merupakan dua pendekatan berbeda dalam memanfaatkan pergerakan harga aset di pasar keuangan.',
      [
        'Investor jangka panjang umumnya membeli aset dengan tujuan memperoleh pertumbuhan nilai dalam periode yang lebih lama. Analisis fundamental sering digunakan untuk menilai prospek dan kondisi perusahaan.',
        'Sementara itu, trading lebih berfokus pada pergerakan harga dalam periode yang relatif singkat. Trader biasanya menggunakan analisis teknikal untuk menentukan peluang transaksi.',
      ],
      'Perbedaan Investasi dan Trading',
      [
        'Jangka waktu: investasi cenderung lebih panjang, sedangkan trading lebih pendek.',
        'Analisis: investasi sering menggunakan fundamental, sedangkan trading banyak menggunakan teknikal.',
        'Frekuensi transaksi: investor umumnya lebih jarang bertransaksi.',
        'Risiko: keduanya memiliki risiko yang perlu dikelola sesuai strategi.',
        'Tujuan: disesuaikan dengan kebutuhan dan rencana keuangan masing-masing.',
      ],
      'Tidak ada satu strategi yang cocok untuk semua orang. Pilih pendekatan berdasarkan tujuan, waktu, dan kemampuan mengelola risiko.',
    ),
  ),
];

// Untuk articlePresenter:
// Meniru pagination dari Backend.
// Mengembalikan { data, total }.

export const getDummyArticles = (page = 1, limit = 3) => {
  const start = (page - 1) * limit;

  return {
    data: DUMMY_ARTICLES.slice(start, start + limit),
    total: DUMMY_ARTICLES.length,
  };
};

// Untuk showArticlePresenter:
// Mencari artikel berdasarkan ID.
// Jika tidak ditemukan, gunakan artikel pertama.

export const getDummyArticleById = (id) => DUMMY_ARTICLES.find((article) => String(article.id) === String(id)) || DUMMY_ARTICLES[0];
