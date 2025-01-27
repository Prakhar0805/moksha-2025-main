import React from 'react';
import styles from './Sponsors.module.css';

const Sponsors = () => {
  return (
    <>
      {/* Background Video */}
      <video autoPlay loop muted playsInline id="bg-video" className={styles.bgVideo}>
        <source src="/assets/bg-video.mp4" type="video/mp4" />
      </video>

      {/* Overlay for Content */}
      <div className={styles.overlay}>
        <h1 className={styles.title}>PAST SPONSORS</h1>
        <div className={styles.sponsorGrid}>
          {/* First Row */}
          <div className={`${styles.box} ${styles.first}`}>
            <img src="/sponsorAssets/Delhi tourism .png" alt="Delhi Tourism" />
          </div>
          <div className={`${styles.box} ${styles.first}`} style={{ width: '250px' }}>
            <img src="../../public/assets/sponsorAssets/Coca cola .png" alt="Coca Cola" />
          </div>
          <div className={`${styles.box} ${styles.first}`}>
            <img src="/sponsorAssets/hero.webp" alt="Hero" />
          </div>
          <div className={`${styles.box} ${styles.first}`} style={{ width: '250px', zIndex: 10, marginLeft: '5px' }}>
            <img src="/sponsorAssets/Amdocs.png" alt="Amdocs" />
          </div>

          {/* Second Row */}
          <div className={`${styles.box} ${styles.second}`}>
            <img src="@/public/assets/sponsorAssets/stockgro.avif" alt="StockGro" style={{ transform: 'scale(0.9)' }} />
          </div>
          <div className={`${styles.box} ${styles.second}`}>
            <img src="/sponsorAssets/chief electoral officer.png" alt="Chief Electoral Officer" style={{ transform: 'scale(0.5)' }} />
          </div>
          <div className={`${styles.box} ${styles.second}`} style={{ width: '140px' }}>
            <img src="/sponsorAssets/philips.jpg" alt="Philips" style={{ transform: 'scale(1)', height: '67%' }} />
          </div>
          <div className={`${styles.box} ${styles.second}`} style={{ width: '100px' }}>
            <img src="/sponsorAssets/bitget.webp" alt="Bitget" />
          </div>
          <div className={`${styles.box} ${styles.second}`} style={{ width: '140px', marginLeft: '-13px', zIndex: 10 }}>
            <img src="/sponsorAssets/myntra fwd.jpeg" alt="Myntra" style={{ transform: 'scale(0.8)' }} />
          </div>
          <div className={`${styles.box} ${styles.second}`} style={{ width: '120px', height: '120px', margin: '-26px', marginTop: '-30px' }}>
            <img src="/sponsorAssets/Delhi Capitals Png Log (1).png" alt="Delhi Capitals" style={{ transform: 'scale(0.6)' }} />
          </div>

          {/* Third Row */}
          <div className={`${styles.box} ${styles.third}`}>
            <img src="/sponsorAssets/maltiplai.png" alt="Maltiplai" />
          </div>
          <div className={`${styles.box} ${styles.third}`} style={{ height: '90px', marginTop: '-10px', marginLeft: '-20px' }}>
            <img src="/sponsorAssets/MG.png" alt="MG" style={{ transform: 'scale(0.6)', marginTop: '-30px' }} />
          </div>
          <div className={`${styles.box} ${styles.third}`} style={{ height: '90px', width: '120px', marginTop: '-10px', marginLeft: '-24px' }}>
            <img src="/sponsorAssets/GAIL.png" alt="GAIL" style={{ transform: 'scale(0.7)', marginTop: '-25px' }} />
          </div>
          <div className={`${styles.box} ${styles.third}`} style={{ width: '140px', height: '40px' }}>
            <img src="/sponsorAssets/sparx.svg" alt="Sparx" />
          </div>
          <div className={`${styles.box} ${styles.third}`} style={{ height: '60px', marginTop: '-10px' }}>
            <img src="/sponsorAssets/Union Bank of india.png" alt="Union Bank of India" />
          </div>
          <div className={`${styles.box} ${styles.third}`}>
            <img src="/sponsorAssets/gigabyte.jpeg" alt="Gigabyte" />
          </div>
          <div className={`${styles.box} ${styles.third}`} style={{ marginTop: '-10px', height: '60px' }}>
            <img src="/sponsorAssets/Bingo.png" alt="Bingo" />
          </div>

          {/* Fourth Row */}
          <div className={`${styles.box} ${styles.fourth}`} style={{ height: '80px', width: '80px', marginTop: '-40px' }}>
            <img src="/sponsorAssets/fp.jpg" alt="FP" style={{ transform: 'scale(0.65)' }} />
          </div>
          <div className={`${styles.box} ${styles.fourth}`}>
            <img src="/sponsorAssets/slick.jpeg" alt="Slick" style={{ transform: 'scale(1.4)' }} />
          </div>
          <div className={`${styles.box} ${styles.fourth}`}>
            <img src="/sponsorAssets/instax.png" alt="Instax" />
          </div>
          <div className={`${styles.box} ${styles.fourth}`} style={{ height: '50px', width: '80px', marginTop: '-30px' }}>
            <img src="/sponsorAssets/Lic.png" alt="LIC" />
          </div>
          <div className={`${styles.box} ${styles.fourth}`} style={{ height: '80px', width: '80px', marginTop: '-40px', borderRadius: '2px', marginRight: '-10px' }}>
            <img src="/sponsorAssets/peck.webp" alt="Peck" style={{ transform: 'scale(0.65)' }} />
          </div>
          <div className={`${styles.box} ${styles.fourth}`}>
            <img src="/sponsorAssets/next ias.png" alt="Next IAS" />
          </div>
          <div className={`${styles.box} ${styles.fourth}`} style={{ height: '70px', marginTop: '-40px' }}>
            <img src="/sponsorAssets/top one percent logo.png" alt="Top One Percent" style={{ transform: 'scale(0.8)' }} />
          </div>
          <div className={`${styles.box} ${styles.fourth}`}>
            <img src="/sponsorAssets/ssps logo.png" alt="SSPS" />
          </div>
          <div className={`${styles.box} ${styles.fourth}`}>
            <img src="/sponsorAssets/BondBazaarLogo.png" alt="Bond Bazaar" />
          </div>
          <div className={`${styles.box} ${styles.fourth}`}>
            <img src="/sponsorAssets/vision ias.png" alt="Vision IAS" />
          </div>

          {/* Fifth Row */}
          <div className={`${styles.box} ${styles.fifth}`} style={{ height: '40px' }}>
            <img src="/sponsorAssets/boult audo.jpg" alt="Boult Audio" />
          </div>
          <div className={`${styles.box} ${styles.fifth}`} style={{ transform: 'scale(1.1)' }}>
            <img src="/sponsorAssets/hover robotix.png" alt="Hover Robotix" />
          </div>
          <div className={`${styles.box} ${styles.fifth}`} style={{ height: '80px', width: '75px', transform: 'scale(0.7)', marginTop: '-30px', marginRight: '-10px', marginLeft: '-10px' }}>
            <img src="/sponsorAssets/stockedgelogo.png" alt="Stock Edge" />
          </div>
          <div className={`${styles.box} ${styles.fifth}`}>
            <img src="/sponsorAssets/plum.jpg" alt="Plum" />
          </div>
          <div className={`${styles.box} ${styles.fifth}`}>
            <img src="/sponsorAssets/himalaya.avif" alt="Himalaya" />
          </div>
          <div className={`${styles.box} ${styles.fifth}`} style={{ height: '50px' }}>
            <img src="/sponsorAssets/web 3 sabha.png" alt="Web3 Sabha" />
          </div>
          <div className={`${styles.box} ${styles.fifth}`} style={{ zIndex: 10 }}>
            <img src="/sponsorAssets/bonkers-corner-logo.jpg" alt="Bonkers Corner" />
          </div>
          <div className={`${styles.box} ${styles.fifth}`} style={{ width: '120px', marginLeft: '-25px', marginRight: '-25px' }}>
            <img src="/sponsorAssets/Logo_Bauli.svg (1).png" alt="Bauli" style={{ transform: 'scale(0.55)' }} />
          </div>
          <div className={`${styles.box} ${styles.fifth}`} style={{ height: '50px', zIndex: 10 }}>
            <img src="/sponsorAssets/indi.jpg" alt="Indi" style={{ transform: 'scale(1.8)' }} />
          </div>
          <div className={`${styles.box} ${styles.fifth}`} style={{ width: '145px', marginLeft: '-36px', marginRight: '-36px' }}>
            <img src="/sponsorAssets/Eazydiner.png" alt="EazyDiner" style={{ transform: 'scale(0.5)' }} />
          </div>
          <div className={`${styles.box} ${styles.fifth}`} style={{ height: '60px', width: '65px', marginRight: '-10px', marginTop: '-25px' }}>
            <img src="/sponsorAssets/storia.png" alt="Storia" style={{ transform: 'scale(0.85)' }} />
          </div>
          <div className={`${styles.box} ${styles.fifth}`}>
            <img src="/sponsorAssets/max protein.jpg" alt="Max Protein" />
          </div>
          <div className={`${styles.box} ${styles.fifth}`} style={{ height: '50px' }}>
            <img src="/sponsorAssets/Gold's_Gym_logo.svg.png" alt="Gold's Gym" />
          </div>
          <div className={`${styles.box} ${styles.fifth}`}>
            <img src="/sponsorAssets/jiosaavn-logo-inline.png" alt="JioSaavn" />
          </div>
          <div className={`${styles.box} ${styles.fifth}`} style={{ width: '100px' }}>
            <img src="/sponsorAssets/radisson blu.png" alt="Radisson Blu" />
          </div>
          <div className={`${styles.box} ${styles.fifth}`}>
            <img src="/sponsorAssets/crispee.jpg" alt="Crispee" />
          </div>
          <div className={`${styles.box} ${styles.fifth}`}>
            <img src="/sponsorAssets/qelica.png" alt="Qelica" />
          </div>
          <div className={`${styles.box} ${styles.fifth}`} style={{ height: '50px' }}>
            <img src="/sponsorAssets/appwards.jpg" alt="Appwards" />
          </div>
          <div className={`${styles.box} ${styles.fifth}`}>
            <img src="/sponsorAssets/bungee.png" alt="Bungee" />
          </div>
          <div className={`${styles.box} ${styles.fifth}`} style={{ height: '50px' }}>
            <img src="/sponsorAssets/xero degree.png" alt="Xero Degree" />
          </div>
          <div className={`${styles.box} ${styles.fifth}`}>
            <img src="/sponsorAssets/lifelong.jpg" alt="Lifelong" />
          </div>
          <div className={`${styles.box} ${styles.fifth}`} style={{ height: '50px', width: '80px' }}>
            <img src="/sponsorAssets/wayspire.webp" alt="Wayspire" />
          </div>
          <div className={`${styles.box} ${styles.fifth}`}>
            <img src="/sponsorAssets/groovenexus.jpg" alt="GrooveNexus" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sponsors;