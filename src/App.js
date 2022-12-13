import logo from './logo.svg';
import gambar1 from './assets/galeri1.jpeg';
import gambar2 from './assets/galeri2.jpeg';
import './App.css';
// import styled from 'styled-components';

function App() {
  return (
    <div className="wrap">
  {/* bagian menu		 */}
  <nav className="menu">
    <ul>
      <li>
        <a href="home.html">Home</a>
      </li>
      <li>
        <a href="galeri.html">Galeri</a>
      </li>
      <li>
        <a href="event.html">Event</a>
      </li>
      <li>
        <a href="kontak.html">Kontak</a>
      </li>
      <li>
        <a href="about.html">About</a>
      </li>
    </ul>
  </nav>
  {/* akhir bagian menu */}
  {/* bagian sidebar website */}
  <aside className="sidebar">
    <div className="widget">
      <h2>Halaman Event</h2>
      <p>Selamat datang di www.malasngoding.com, situs ini menyediakan tutorial pemrograman web, mobile &amp; desktop.</p>
    </div>
    <div className="widget">
      <h2>Ebook Gratis</h2>
      <p>Teman-teman bisa mendapatkan ebook tutorial gratis di sini <a target="_blank" href="https://www.malasngoding.com">www.malasngoding.com</a>.</p>
    </div>
  </aside>
  {/* akhir bagian sidebar website */}
  {/* bagian konten Blog */}
  <div className="blog">
    <div className="conteudo">
      <img src={gambar1}/>
      <h1> Template Sederhana HTML &amp; CSS </h1>
      <hr></hr>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <a href="#" className="continue-lendo">Selengkapnya →</a>
    </div>
    <div className="conteudo">
      <img src={gambar2} />
      <h1> Belajar HTML Lengkap </h1>
      <hr></hr>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <a href="#" className="continue-lendo">Selengkapnya →</a>
    </div>
  </div>
  {/* akhir bagian konten Blog */}
</div>

   
  );
}

export default App;
