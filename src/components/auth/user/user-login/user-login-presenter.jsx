import { loginUser } from '../../../../services/Model.js';

class UserLoginPresenter {
  constructor() {
    this.view = null;
  }

  setView(view) {
    this.view = view;
  }

  async handleLoginAttempt(email, password) {
    this.view.showLoading(true);
    this.view.clearErrorMessage();
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    if (!email || !password) {
      this.view.showErrorMessage('Email dan password harus diisi.');
      this.view.showLoading(false);
      return;
    }

    if (!this.isValidEmail(email)) {
      this.view.showErrorMessage('Format email tidak valid.');
      this.view.showLoading(false);
      return;
    }

    try {
      const data = await loginUser({ email, password });

      localStorage.setItem('token', data.token);
      localStorage.setItem(
        'user',
        JSON.stringify({
          id: data.id,
          email: data.email,
          role: data.role,
          username: data.username,
        }),
      );
      localStorage.setItem('justLoggedIn', 'true');

      this.view.onLoginSuccess();
    } catch (error) {
      // Server BE mati / tidak bisa dihubungi -> tampilkan popup
      if (this.isServerUnreachable(error)) {
        this.view.showServerError();
      } else {
        this.view.showErrorMessage(error.message || 'Login gagal. Coba lagi.');
      }
    } finally {
      this.view.showLoading(false);
    }
  }

  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Mendeteksi error jaringan / server off (bukan salah email atau password)
  isServerUnreachable(error) {
    if (!error) return false;

    // fetch gagal terhubung -> TypeError
    if (error instanceof TypeError) return true;

    // axios: tidak ada response dari server
    if (error.code === 'ERR_NETWORK' || error.code === 'ECONNABORTED') return true;
    if (error.request && !error.response) return true;

    // status gateway error (server mati di hosting seperti Railway)
    const status = error.status || error.response?.status;
    if ([502, 503, 504].includes(status)) return true;

    // pesan error umum dari berbagai browser
    return /failed to fetch|networkerror|network error|load failed|timeout|econnrefused/i.test(error.message || '');
  }
}

export default UserLoginPresenter;
