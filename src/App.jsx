import Dither from './components/Background/Dither';
import './App.css'; 

function App() {
  return (
    <>
      {/* BACKGROUND ORIGINAL */}
      <div style={{ width: '100%', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: 0 }}>
        <Dither
          waveColor={[0.5, 0.5, 0.5]}
          disableAnimation={false}
          enableMouseInteraction
          mouseRadius={0.25}
          colorNum={4}
          waveAmplitude={0.3}
          waveFrequency={3}
          waveSpeed={0.05}
        />
      </div>

      <main style={{ position: 'relative', zIndex: 1, pointerEvents: 'none', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        
        <div style={{ padding: '2rem', textAlign: 'center' }}>
          
          {/* HAPUS pointerEvents: 'auto' DARI SINI */}
          {/* Sekarang kursor akan tembus pandang melewati teks ini, ombak jadi super mulus! */}
          <h1>Web Profil Haikal</h1>
          <p style={{ marginBottom: '20px' }}>Proyek gabut pakai React Vite.</p>
          
          {/* pointerEvents: 'auto' CUKUP ditaruh di elemen yang BISA DIKLIK saja (seperti tombol/link) */}
          <button className="counter" style={{ pointerEvents: 'auto', cursor: 'pointer' }}>
            Tombol Landing Page
          </button>
        </div>

      </main>
    </>
  );
}

export default App;