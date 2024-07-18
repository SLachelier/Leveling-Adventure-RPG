import React from 'react';

// If you have a Header or Footer component, import them here
// import Header from './Header';
// import Footer from './Footer';

const Layout: React.FC = ({ children }) => {
  return (
    <div className="layout">
      {/* Uncomment if you have Header/Footer components */}
      {/* <Header /> */}
      <main className="game-content">
        {children} {/* This is where the content of your pages will be injected */}
      </main>
      {/* <Footer /> */}
      <style jsx>{`
        .layout {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
        .game-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }
      `}</style>
    </div>
  );
};

export default Layout;