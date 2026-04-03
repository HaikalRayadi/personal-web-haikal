import React from 'react';

/* --- Komponen UI Utama --- */
import StaggeredMenu from './components/StaggeredMenu/StaggeredMenu';
import TargetCursor from './components/Cursor/TargetCursor';
import Galaxy from './components/Background/Galaxy'; 
import Lanyard from './components/Lanyard/Lanyard'; 

/* --- Komponen Teks Animasi --- */
import RotatingText from './components/Text/RotatingText';
import TrueFocus from './components/Text/TrueFocus';
import DecryptedText from './components/Text/DecryptedText';

/* --- Komponen Logo Loop & Icons --- */
import LogoLoop from './components/LogoLoop/LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiFigma, SiGithub } from 'react-icons/si';

import './App.css';

// 1. Konfigurasi Link Menu
const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home', link: '#home' },
  { label: 'Tech', ariaLabel: 'View technologies', link: '#tech' },
  { label: 'Projects', ariaLabel: 'View projects', link: '#projects' },
  { label: 'Contact', ariaLabel: 'Get in touch', link: '#contact' }
];

// 2. Konfigurasi Link Socials (di dalam menu)
const socialItems = [
  { label: 'GitHub', link: 'https://github.com/HaikalRayadi' },
  { label: 'LinkedIn', link: 'https://linkedin.com' },
  { label: 'Instagram', link: 'https://instagram.com' }
];

// 3. Konfigurasi Logo Tech Stack
const techLogos = [
  { node: <SiReact color="#61DAFB" />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs color="#ffffff" />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript color="#3178C6" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss color="#06B6D4" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiNodedotjs color="#339933" />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiFigma color="#F24E1E" />, title: "Figma", href: "https://figma.com" },
  { node: <SiGithub color="#ffffff" />, title: "GitHub", href: "https://github.com" },
];

function App() {
  const mainFontFamily = "'ClashDisplay-Light', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";

  return (
    <>
      {/* --- 1. BACKGROUND GALAXY (Paling Bawah) --- */}
      <div style={{ 
        width: '100%', 
        height: '100vh', 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        zIndex: 0,
        background: '#000000' /* Memastikan background hitam pekat */
      }}>
        <Galaxy 
          mouseRepulsion={true}
          mouseInteraction={true}
          density={1}
          glowIntensity={0.3}
          saturation={0}
          hueShift={140}
          twinkleIntensity={0.3}
          rotationSpeed={0.1}
          repulsionStrength={2}
          autoCenterRepulsion={0}
          starSpeed={0.5}
          speed={1}
        />
      </div>

      {/* --- 2. LANYARD 3D --- */}
      <div id="home" style={{ 
        position: 'absolute', 
        top: -100, 
        left: -300, 
        width: '100vw', 
        height: '100vh', 
        zIndex: 1, 
        /* Pointer events 'none' pada wrapper agar mouse tembus ke Galaxy */
        pointerEvents: 'none' 
      }}>
        {/* Supaya lanyard tetap interaktif, pastikan di dalam komponen Lanyard (Canvas) pointerEvents-nya auto */}
        <div style={{ pointerEvents: 'auto', width: '100%', height: '100%' }}>
          <Lanyard position={[0, 0, 11]} gravity={[0, -40, 0]} />
        </div>
      </div>

      {/* --- 3. STAGGERED MENU --- */}
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        menuButtonColor="#ffffff"
        openMenuButtonColor="#000000"
        changeMenuColorOnOpen={true}
        isFixed={true}
        colors={['#000000', '#111111', '#1a1a1a']} 
        accentColor="#b5ff6d" 
        logoUrl="/vite.svg" 
      />

      {/* --- 4. HERO SECTION --- */}
      <main style={{ 
        position: 'relative', 
        zIndex: 2, 
        pointerEvents: 'none', 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'flex-end',
        paddingRight: '8%' 
      }}>
        
        <div style={{ 
          textAlign: 'left', 
          width: '100%', 
          maxWidth: '650px', 
          color: 'white', 
          fontFamily: mainFontFamily 
        }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.2rem', pointerEvents: 'auto' }}>
            <span className="font-light-custom" style={{ fontSize: '1.4rem' }}>Hi!</span>
            <RotatingText
              texts={['Welcome To My Personal Website', 'Glad to see you here', 'Let\'s Scroll Down To Look My Website!']}
              mainClassName="px-3 overflow-hidden py-1 justify-center rounded-lg font-mono font-bold"
              style={{ backgroundColor: '#ffffff', color: '#000000' }}
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={3000}
            />
          </div>

          <div className="cursor-target" style={{ pointerEvents: 'auto', marginBottom: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '28px', flexWrap: 'wrap' }}>
              <span className="font-bold-custom" style={{ fontSize: '3.5rem', lineHeight: '1' }}>I'm</span>
              <div className="true-focus-match font-bold-custom" style={{ fontSize: '3.5rem', lineHeight: '1' }}>
                <TrueFocus 
                  sentence="Haikal Rayadi"
                  manualMode={false}
                  blurAmount={5}
                  borderColor="#b5ff6d" 
                  glowColor="rgba(181, 255, 109, 0.5)" 
                  animationDuration={0.5}
                  pauseBetweenAnimations={1}
                />
              </div>
            </div>

            <h2 
              className="font-bold-custom" 
              style={{ 
              fontSize: '3.5rem', 
              lineHeight: '1.1',
              marginTop: '10px', 
              letterSpacing: '-1px',
              color: '#ffffff',
              textShadow: '0 0 10px rgba(181, 255, 109, 0.3)'
            }}>
              WEB DEVELOPER
            </h2>
          </div>

          <div style={{ marginBottom: '3rem', pointerEvents: 'auto', maxWidth: '550px' }}>
            <div className="font-light-custom" style={{ fontSize: '1.1rem', color: '#ccc', lineHeight: '1.6' }}>
              <DecryptedText 
                text="Mahasiswa IT yang lagi hobi bereksperimen dengan Three.js dan animasi 3D. Mari jelajahi proyek gabut saya di sini."
                speed={80}
                maxIterations={15}
                sequential={true}
                revealDirection="start"
                animateOn="view"
                className="revealed"
                encryptedClassName="encrypted"
              />
            </div>
          </div>

          <button 
            className="counter cursor-target font-bold-custom" 
            style={{ 
              pointerEvents: 'auto', 
              padding: '12px 30px',
              border: '1px solid #b5ff6d', 
              background: 'transparent',
              color: 'white',
              fontSize: '1rem',
              borderRadius: '50px',
              transition: 'all 0.3s ease'
            }}
          >
            Scroll Down
          </button>
          
        </div>
      </main>

      <section id="tech" style={{ 
        position: 'relative', 
        zIndex: 2, 
        padding: '80px 0', 
        width: '100%',
        background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.8))' 
      }}>
        
        <h3 className="font-bold-custom" style={{ textAlign: 'center', color: '#ffffff', fontSize: '1.8rem', marginBottom: '40px' }}>
          TECH STACK
        </h3>

        <div style={{ height: '120px', position: 'relative', overflow: 'hidden' }}>
          <LogoLoop
            logos={techLogos}
            speed={100}
            direction="left"
            logoHeight={60}
            gap={60}
            hoverSpeed={0}
            scaleOnHover={true}
            fadeOut={true}
            fadeOutColor="#000000"
            ariaLabel="Technology partners"
          />
        </div>
      </section>

      {/* --- 5. KURSOR TARGET (Paling Atas & zIndex Tertinggi) --- */}
      <div style={{ position: 'fixed', top: 0, left: 0, zIndex: 9999, pointerEvents: 'none' }}>
        <TargetCursor 
          spinDuration={2}
          hideDefaultCursor={true}
          parallaxOn={true}
          hoverDuration={0.2}
        />
      </div>
    </>
  );
}

export default App;