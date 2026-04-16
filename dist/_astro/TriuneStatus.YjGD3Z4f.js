import{j as e}from"./jsx-runtime.D_zvdyIk.js";import"./index.CDtNdmU6.js";const o=()=>{const r=[{id:"mind",label:"DB.AI",color:"#9B7E4B"},{id:"ancient",label:"CCM.AI",color:"#C5A059"},{id:"modern",label:"ECB.AI",color:"#4A3B28"}];return e.jsxs("div",{className:"triune-led-cluster",children:[r.map(l=>e.jsxs("div",{className:"led-group",children:[e.jsx("div",{className:"led-glow",style:{backgroundColor:l.color}}),e.jsx("span",{className:"led-text",children:l.label})]},l.id)),e.jsx("style",{children:`
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
      `})]})};export{o as default};
