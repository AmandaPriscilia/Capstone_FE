const API_BASE_URL = 'http://localhost:5000';

export async function registerUser({ username, email, password }) {
  const response = await fetch(`${API_BASE_URL}/auth/register/user`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, email, password }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Gagal mendaftar');
  }

  return data;
}

export async function loginUser({ email, password }) {
  const response = await fetch(`${API_BASE_URL}/auth/login/user`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Gagal login');
  }

  // Simpan token ke localStorage atau sessionStorage jika diperlukan
  // localStorage.setItem('token', data.token);

  return data;
}

export async function fetchContacts() {
  try {
    const response = await fetch(`${API_BASE_URL}/contacts`);
    const data = await response.json();
    if (response.ok && data.success && Array.isArray(data.data)) {
      return data.data;
    } else {
      return [];
    }
  } catch (err) {
    console.error('Fetch contacts error:', err);
    return [];
  }
}

export async function submitArticle(article) {
  try {
    const response = await fetch(`${API_BASE_URL}/articles`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(article),
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.error('Submit article error:', err);
    return { success: false, message: 'Gagal mengirim artikel.' };
  }
}
