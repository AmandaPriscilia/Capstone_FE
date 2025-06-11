import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchContacts, submitArticle } from '../../../../services/Model.js'; // Pastikan path-nya sesuai

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  const adminStr = localStorage.getItem('admin');
  const admin = adminStr ? JSON.parse(adminStr) : null;

  useEffect(() => {
    if (!admin) {
      navigate('/NaraStocksm/admin/login');
    }
  }, [admin, navigate]);

  useEffect(() => {
    const getContacts = async () => {
      try {
        const data = await fetchContacts();
        setContacts(data);
      } catch (err) {
        setContacts([]);
      }
      setLoading(false);
    };
    getContacts();
  }, []);

  const [article, setArticle] = useState({
    title: '',
    slug: '',
    content: '',
  });
  const [sending, setSending] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleArticleChange = (e) => {
    setArticle({ ...article, [e.target.name]: e.target.value });
  };

  const handleArticleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setSuccessMsg('');
    setErrorMsg('');
    try {
      const data = await submitArticle(article);
      if (data.success) {
        setSuccessMsg('Artikel berhasil dikirim!');
        setArticle({ title: '', slug: '', content: '' });
      } else {
        setErrorMsg(data.message || 'Gagal mengirim artikel.');
      }
    } catch (err) {
      setErrorMsg('Terjadi kesalahan saat mengirim.');
    }
    setSending(false);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <section className="bg-white p-8 rounded-lg shadow-md text-center w-full max-w-5xl">
        <h1 className="text-2xl font-bold mb-4">
          Selamat datang, {admin ? admin.username : 'Admin'}
        </h1>
        <p className="text-gray-700 mb-6">Anda berhasil login sebagai admin.</p>

        <h2 className="text-xl font-semibold mb-4">Daftar Pertanyaan Kontak</h2>
        {loading ? (
          <div>Loading...</div>
        ) : contacts.length === 0 ? (
          <div>Tidak ada data kontak.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full border text-left text-sm">
              <thead>
                <tr className="bg-gray-200">
                  <th className="py-2 px-3 border">No</th>
                  <th className="py-2 px-3 border">Full Name</th>
                  <th className="py-2 px-3 border">Email</th>
                  <th className="py-2 px-3 border">Phone</th>
                  <th className="py-2 px-3 border">Subject</th>
                  <th className="py-2 px-3 border">Message</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((c, i) => (
                  <tr key={c.id || i} className="border-b">
                    <td className="py-1 px-3 border">{i + 1}</td>
                    <td className="py-1 px-3 border">{c.fullname}</td>
                    <td className="py-1 px-3 border">{c.email}</td>
                    <td className="py-1 px-3 border">{c.phone}</td>
                    <td className="py-1 px-3 border">{c.subject}</td>
                    <td className="py-1 px-3 border">{c.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <h2 className="text-xl font-semibold mt-10 mb-4">Tambah Artikel Baru</h2>
        <form onSubmit={handleArticleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            placeholder="Judul"
            value={article.title}
            onChange={handleArticleChange}
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="text"
            name="slug"
            placeholder="Slug (tanpa spasi)"
            value={article.slug}
            onChange={handleArticleChange}
            className="w-full border p-2 rounded"
            required
          />
          <textarea
            name="content"
            placeholder="Konten artikel"
            value={article.content}
            onChange={handleArticleChange}
            className="w-full border p-2 rounded h-32"
            required
          />
          <button
            type="submit"
            disabled={sending}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
          >
            {sending ? 'Mengirim...' : 'Kirim Artikel'}
          </button>
          {successMsg && <p className="text-green-600">{successMsg}</p>}
          {errorMsg && <p className="text-red-600">{errorMsg}</p>}
        </form>
      </section>
    </main>
  );
}
