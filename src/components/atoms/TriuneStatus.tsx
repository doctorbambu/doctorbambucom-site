// src/components/atoms/TriuneStatus.tsx
import React from 'react';

const TriuneStatus = () => {
  const sovereigns = [
    { id: 'mind', label: 'DB.AI', color: '#9B7E4B' },    // doctorbambu.ai
    { id: 'ancient', label: 'CCM.AI', color: '#C5A059' }, // classicalchinesemedicine.ai
    { id: 'modern', label: 'ECB.AI', color: '#4A3B28' }   // ecbome.ai
  ];

  return (
    <div className="triune-led-cluster">
      {sovereigns.map((s) => (
        <div key={s.id} className="led-group">
          <div className="led-glow" style={{ backgroundColor: s.color }}></div>
          <span className="led-text">{s.label}</span>
        </div>
      ))}

      <style>{`
        .triune-led-cluster {
          display: flex;
          gap: 15px;
          padding: 6px 14px;
          background: rgba(244, 241, 232, 0.4);
          backdrop-filter: blur(8px);
          border-radius: 25px;
          border: 1px solid rgba(155, 126, 75, 0.15);
        }
        .led-group {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .led-glow {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          box-shadow: 0 0 8px rgba(155, 126, 75, 0.4);
          animation: pulse-glow 3s infinite ease-in-out;
        }
        .led-text {
          font-size: 0.6rem;
          font-weight: 800;
          color: #4A3B28;
          letter-spacing: 0.08rem;
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.3; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1.1); }
        }
      `}</style>
    </div>
  );
};

export default TriuneStatus;