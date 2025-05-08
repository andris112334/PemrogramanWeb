function prosesLogout() {
    localStorage.removeItem('userSessionToken');
    alert('Anda telah berhasil loogout');
    window.location.href = 'login.html';
}