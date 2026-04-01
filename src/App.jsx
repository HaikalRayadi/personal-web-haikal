import Dither from './components/Background/Dither';
import TargetCursor from './components/Cursor/TargetCursor'; // Import kursornya
import './App.css'; 

function App() {
  return (
    <>
      {/* KURSOR CUSTOM KITA */}
      <TargetCursor 
        spinDuration={2}
        hideDefaultCursor={true}
        parallaxOn={true}
        hoverDuration={0.2}
      />

      {/* BACKGROUND ORIGINAL */}
      <div style={{ width: '100%', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: 0 }}>
        <Dither
          waveColor={[0.5, 0.5, 0.5]}
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={0.3}
          colorNum={4}
          waveAmplitude={0.3}
          waveFrequency={3}
          waveSpeed={0.05}
        />
      </div>

      {/* KONTEN LANDING PAGE */}
      <main style={{ position: 'relative', zIndex: 1, pointerEvents: 'none', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        
        <div style={{ padding: '2rem', textAlign: 'center' }}>
          
          <h1>Web Profil Haikal</h1>
          <p style={{ marginBottom: '20px' }}>Personal Web</p>
          
          {/* Tambahkan class "cursor-target" agar kursor mendeteksi tombol ini */}
          {/* pointerEvents: 'auto' agar tombol tetap bisa di-hover dan di-klik */}
          <button className="counter cursor-target" style={{ pointerEvents: 'auto', cursor: 'none' }}>
            Tombol Landing Page
          </button>
          
        </div>

      </main>
    </>
  );
}

export default App;