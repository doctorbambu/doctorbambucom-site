import{j as e}from"./jsx-runtime.D_zvdyIk.js";import"./index.CDtNdmU6.js";const l=()=>{const r=[{label:"Ancient",icon:"📜",url:"#"},{label:"Home",icon:"🎋",url:"#"},{label:"Modern",icon:"🧬",url:"#"}];return e.jsxs("nav",{className:"bambu-dock",children:[r.map(a=>e.jsxs("a",{href:a.url,className:"dock-item",children:[e.jsx("span",{className:"dock-icon",children:a.icon}),e.jsx("span",{className:"dock-label",children:a.label})]},a.label)),e.jsx("style",{children:`
        .bambu-dock {
          display: flex;
          gap: 40px;
          padding: 15px 40px;
          background: rgba(244, 241, 232, 0.2);
          backdrop-filter: blur(12px);
          border-radius: 50px;
          border: 1px solid rgba(155, 126, 75, 0.3);
          box-shadow: 0 10px 30px rgba(74, 59, 40, 0.1);
        }
        .dock-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-decoration: none;
          transition: transform 0.2s ease;
        }
        .dock-item:hover {
          transform: translateY(-5px);
        }
        .dock-icon {
          font-size: 1.8rem;
          filter: sepia(0.5) saturate(1.5);
        }
        .dock-label {
          font-size: 0.65rem;
          color: #4A3B28;
          font-weight: 700;
          margin-top: 4px;
          text-transform: uppercase;
          letter-spacing: 0.05rem;
        }
      `})]})};export{l as default};
