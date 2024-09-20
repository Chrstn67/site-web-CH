"use strict";(self.webpackChunkmycelium=self.webpackChunkmycelium||[]).push([[552],{9522:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var o=n(4848),t=n(8453);const l={tags:["HTML","Modale","Balises","<dialog></dialog>","JavaScript","React"]},i="Modales",s={id:"Cours/HTML/Modales",title:"Modales",description:"Qu'est-ce qu'une modale ?",source:"@site/docs/Cours/HTML/Modales.md",sourceDirName:"Cours/HTML",slug:"/Cours/HTML/Modales",permalink:"/mycelium/docs/Cours/HTML/Modales",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Cours/HTML/Modales.md",tags:[{inline:!0,label:"HTML",permalink:"/mycelium/docs/tags/html"},{inline:!0,label:"Modale",permalink:"/mycelium/docs/tags/modale"},{inline:!0,label:"Balises",permalink:"/mycelium/docs/tags/balises"},{inline:!0,label:"<dialog></dialog>",permalink:"/mycelium/docs/tags/dialog-dialog"},{inline:!0,label:"JavaScript",permalink:"/mycelium/docs/tags/java-script"},{inline:!0,label:"React",permalink:"/mycelium/docs/tags/react"}],version:"current",frontMatter:{tags:["HTML","Modale","Balises","<dialog></dialog>","JavaScript","React"]},sidebar:"tutorialSidebar",previous:{title:"Les balises HTML avec leurs attributs",permalink:"/mycelium/docs/Cours/HTML/Liste-balises"},next:{title:"S\xe9curit\xe9",permalink:"/mycelium/docs/category/s\xe9curit\xe9"}},a={},d=[{value:"Qu&#39;est-ce qu&#39;une <strong>modale</strong> ?",id:"quest-ce-quune-modale-",level:3},{value:"Section JavaScript Vanilla",id:"section-javascript-vanilla",level:2},{value:"Modale ouverte, impossible \xe0 fermer",id:"modale-ouverte-impossible-\xe0-fermer",level:3},{value:"Une modale ouverte qu&#39;on peut fermer mais pas rouvrir",id:"une-modale-ouverte-quon-peut-fermer-mais-pas-rouvrir",level:3},{value:"Une modale ferm\xe9e, qu&#39;on peut rouvrir et fermer",id:"une-modale-ferm\xe9e-quon-peut-rouvrir-et-fermer",level:3},{value:"Section React",id:"section-react",level:2},{value:"Construire une modale en React",id:"construire-une-modale-en-react",level:3},{value:"Modale ouverte, impossible \xe0 fermer",id:"modale-ouverte-impossible-\xe0-fermer-1",level:4},{value:"Modale ouverte qu&#39;on peut fermer mais pas rouvrir",id:"modale-ouverte-quon-peut-fermer-mais-pas-rouvrir",level:4},{value:"Modale ferm\xe9e, qu&#39;on peut rouvrir et fermer",id:"modale-ferm\xe9e-quon-peut-rouvrir-et-fermer",level:4},{value:"Explications",id:"explications",level:3}];function u(e){const r={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.header,{children:(0,o.jsx)(r.h1,{id:"modales",children:"Modales"})}),"\n",(0,o.jsxs)(r.h3,{id:"quest-ce-quune-modale-",children:["Qu'est-ce qu'une ",(0,o.jsx)(r.strong,{children:"modale"})," ?"]}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.a,{href:"https://codepen.io/Chrstn67/pen/VwJeQjQ",children:"D\xe9monstration sur CodePen"})}),"\n",(0,o.jsxs)(r.admonition,{title:"D\xe9finition",type:"note",children:[(0,o.jsxs)(r.p,{children:["En HTML, une ",(0,o.jsx)(r.strong,{children:"modale"})," (ou ",(0,o.jsx)(r.em,{children:"bo\xeete de dialogue"}),") est une fen\xeatre contextuelle qui appara\xeet au-dessus de la page web principale, obligeant les utilisateurs \xe0 interagir avec elle avant de pouvoir revenir \xe0 la page principale. Les modales sont souvent utilis\xe9es pour afficher des informations importantes, recueillir des entr\xe9es utilisateur ou obtenir une confirmation avant d'ex\xe9cuter une action."]}),(0,o.jsx)(r.p,{children:"Les modales peuvent contenir divers \xe9l\xe9ments tels que du texte, des images, des formulaires, des boutons, etc."})]}),"\n",(0,o.jsx)(r.h2,{id:"section-javascript-vanilla",children:"Section JavaScript Vanilla"}),"\n",(0,o.jsx)(r.h3,{id:"modale-ouverte-impossible-\xe0-fermer",children:"Modale ouverte, impossible \xe0 fermer"}),"\n",(0,o.jsxs)(r.p,{children:["Pour construire une modale en HTML, on utilise la balise ",(0,o.jsx)(r.code,{children:"<dialog>"}),". On peut ajouter l'attribut ",(0,o.jsx)(r.code,{children:"open"})," pour que la modale soit ouverte par d\xe9faut et sans bouton pour la fermer."]}),"\n",(0,o.jsx)(r.admonition,{type:"warning",children:(0,o.jsxs)(r.mdxAdmonitionTitle,{children:["Il y a la balise ",(0,o.jsx)(r.code,{children:"<dialog>"})," qui fait tout le travail : Il est inutile d'utiliser d'autres balises !"]})}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-html",children:"<dialog open>\r\n  Ceci est une modale ouverte par d\xe9faut. Il est impossible de la fermer.\r\n</dialog>\n"})}),"\n",(0,o.jsx)(r.h3,{id:"une-modale-ouverte-quon-peut-fermer-mais-pas-rouvrir",children:"Une modale ouverte qu'on peut fermer mais pas rouvrir"}),"\n",(0,o.jsx)(r.p,{children:"Pour rendre une modale fermable, nous devons ajouter un bouton et du code JavaScript pour g\xe9rer sa fermeture."}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-html",children:'<dialog open id="maModale">\r\n  Ceci est une modale ouverte qu\'il est possible de fermer, mais pas de rouvrir.\r\n  <button id="fermerModale">Fermer</button>\r\n</dialog>\r\n\r\n<script>\r\n  document\r\n    .getElementById("fermerModale")\r\n    .addEventListener("click", function () {\r\n      document.getElementById("maModale").close();\r\n    });\r\n<\/script>\n'})}),"\n",(0,o.jsx)(r.h3,{id:"une-modale-ferm\xe9e-quon-peut-rouvrir-et-fermer",children:"Une modale ferm\xe9e, qu'on peut rouvrir et fermer"}),"\n",(0,o.jsxs)(r.p,{children:["Pour ouvrir une modale avec JavaScript, nous utilisons la m\xe9thode ",(0,o.jsx)(r.code,{children:"showModal()"})," de l'\xe9l\xe9ment ",(0,o.jsx)(r.code,{children:"<dialog>"}),"."]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-html",children:'<dialog id="maModale">\r\n  Ceci est une modale qui peut \xeatre ouverte et ferm\xe9e.\r\n  <button id="fermerModale">Fermer</button>\r\n</dialog>\r\n\r\n<button id="ouvrirModale">Ouvrir la modale</button>\r\n\r\n<script>\r\n  document\r\n    .getElementById("ouvrirModale")\r\n    .addEventListener("click", function () {\r\n      document.getElementById("maModale").showModal();\r\n    });\r\n\r\n  document\r\n    .getElementById("fermerModale")\r\n    .addEventListener("click", function () {\r\n      document.getElementById("maModale").close();\r\n    });\r\n<\/script>\n'})}),"\n",(0,o.jsx)(r.h2,{id:"section-react",children:"Section React"}),"\n",(0,o.jsx)(r.h3,{id:"construire-une-modale-en-react",children:"Construire une modale en React"}),"\n",(0,o.jsxs)(r.p,{children:["Pour construire une modale en React en utilisant la balise ",(0,o.jsx)(r.code,{children:"<dialog>"}),", nous allons cr\xe9er des composants ",(0,o.jsx)(r.strong,{children:"Modal"})," sp\xe9cifiques pour chaque type de modale."]}),"\n",(0,o.jsx)(r.h4,{id:"modale-ouverte-impossible-\xe0-fermer-1",children:"Modale ouverte, impossible \xe0 fermer"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-jsx",children:'import React from "react";\r\nimport "./Modal.scss";\r\n\r\nconst ModalOpenNoClose = () => (\r\n  <dialog open>\r\n    <p>\r\n      Ceci est une modale ouverte par d\xe9faut. Il est impossible de la fermer.\r\n    </p>\r\n  </dialog>\r\n);\r\n\r\nconst App = () => (\r\n  <div>\r\n    <ModalOpenNoClose />\r\n  </div>\r\n);\r\n\r\nexport default App;\n'})}),"\n",(0,o.jsx)(r.h4,{id:"modale-ouverte-quon-peut-fermer-mais-pas-rouvrir",children:"Modale ouverte qu'on peut fermer mais pas rouvrir"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-jsx",children:'import React, { useState } from "react";\r\nimport "./Modal.scss";\r\n\r\nconst ModalOpenCloseOnce = () => {\r\n  const [isOpen, setIsOpen] = useState(true);\r\n\r\n  if (!isOpen) return null;\r\n\r\n  return (\r\n    <dialog open>\r\n      <p>\r\n        Ceci est une modale ouverte qu\'il est possible de fermer, mais pas de\r\n        rouvrir.\r\n      </p>\r\n      <button onClick={() => setIsOpen(false)}>Fermer</button>\r\n    </dialog>\r\n  );\r\n};\r\n\r\nconst App = () => (\r\n  <div>\r\n    <ModalOpenCloseOnce />\r\n  </div>\r\n);\r\n\r\nexport default App;\n'})}),"\n",(0,o.jsx)(r.h4,{id:"modale-ferm\xe9e-quon-peut-rouvrir-et-fermer",children:"Modale ferm\xe9e, qu'on peut rouvrir et fermer"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-jsx",children:'import React, { useState, useRef } from "react";\r\nimport "./Modal.scss";\r\n\r\nconst ModalOpenClose = ({ isOpen, onClose }) => {\r\n  const dialogRef = useRef(null);\r\n\r\n  React.useEffect(() => {\r\n    if (isOpen) {\r\n      dialogRef.current.showModal();\r\n    } else {\r\n      dialogRef.current.close();\r\n    }\r\n  }, [isOpen]);\r\n\r\n  return (\r\n    <dialog ref={dialogRef}>\r\n      <p>Ceci est une modale qui peut \xeatre ouverte et ferm\xe9e.</p>\r\n      <button onClick={onClose}>Fermer</button>\r\n    </dialog>\r\n  );\r\n};\r\n\r\nconst App = () => {\r\n  const [isModalOpen, setIsModalOpen] = useState(false);\r\n\r\n  const openModal = () => setIsModalOpen(true);\r\n  const closeModal = () => setIsModalOpen(false);\r\n\r\n  return (\r\n    <div>\r\n      <button onClick={openModal}>Ouvrir la modale</button>\r\n      <ModalOpenClose isOpen={isModalOpen} onClose={closeModal} />\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default App;\n'})}),"\n",(0,o.jsx)(r.h3,{id:"explications",children:"Explications"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"Les composants modaux en React sont d\xe9finis s\xe9par\xe9ment pour chaque type de comportement souhait\xe9."}),"\n",(0,o.jsxs)(r.li,{children:["Utilisation de ",(0,o.jsx)(r.code,{children:"useState"})," pour g\xe9rer l'\xe9tat d'ouverture et de fermeture de la modale."]}),"\n",(0,o.jsxs)(r.li,{children:["Utilisation de ",(0,o.jsx)(r.code,{children:"useRef"})," et ",(0,o.jsx)(r.code,{children:"useEffect"})," pour contr\xf4ler l'ouverture et la fermeture du ",(0,o.jsx)(r.code,{children:"<dialog>"})," en fonction de l'\xe9tat ",(0,o.jsx)(r.code,{children:"isOpen"})," dans le dernier exemple."]}),"\n"]})]})}function c(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>s});var o=n(6540);const t={},l=o.createContext(t);function i(e){const r=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(l.Provider,{value:r},e.children)}}}]);