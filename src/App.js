import logo from './logo.svg';
import gambar1 from './assets/galeri1.jpeg';
import gambar2 from './assets/galeri2.jpeg';
import './App.css';
import Navbar, {Navbar_menu, Navbar_list, Navbar_a} from './components/Header';
import Title,{Paragraph} from './components/Typo';
// import styled from 'styled-components';

function App() {
  return (
    <div className="wrap">
  {/* bagian menu		 */}
  <Navbar>
    <Navbar_menu>
      <Navbar_list>
        <Navbar_a href="home.html">Home</Navbar_a>
      </Navbar_list>
      <Navbar_list>
        <Navbar_a href="galeri.html">Galeri</Navbar_a>
      </Navbar_list>
      <Navbar_list>
        <Navbar_a href="event.html">Event</Navbar_a>
      </Navbar_list>
      <Navbar_list>
        <Navbar_a href="kontak.html">Kontak</Navbar_a>
      </Navbar_list>
      <Navbar_list>
        <Navbar_a href="about.html">About</Navbar_a>
      </Navbar_list>
    </Navbar_menu>
  </Navbar>
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
      <Title> Template Sederhana HTML &amp; CSS </Title>
      <hr></hr>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Paragraph>
      <a href="#" className="continue-lendo">Selengkapnya →</a>
    </div>
    <div className="conteudo">
      <img src={gambar2} />
      <Title> Belajar HTML Lengkap </Title>
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
