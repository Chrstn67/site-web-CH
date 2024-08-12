"use strict";(self.webpackChunkmycelium=self.webpackChunkmycelium||[]).push([[7933],{8697:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=s(4848),t=s(8453);const i={tags:["JavaScript","React","Donn\xe9es","String","Integer","Bool\xe9en","Undefined","Symbol","BigInt","Object","Array","Function","Date","RegExp","Map","Set"]},l="Les types de donn\xe9es",o={id:"Cours/JavaScript/JS+ReactJS/Les-types-de-donnees",title:"Les types de donn\xe9es",description:"Que sont les diff\xe9rents types de donn\xe9es en JS ?",source:"@site/docs/Cours/JavaScript/JS+ReactJS/Les-types-de-donnees.md",sourceDirName:"Cours/JavaScript/JS+ReactJS",slug:"/Cours/JavaScript/JS+ReactJS/Les-types-de-donnees",permalink:"/mycelium/docs/Cours/JavaScript/JS+ReactJS/Les-types-de-donnees",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Cours/JavaScript/JS+ReactJS/Les-types-de-donnees.md",tags:[{inline:!0,label:"JavaScript",permalink:"/mycelium/docs/tags/java-script"},{inline:!0,label:"React",permalink:"/mycelium/docs/tags/react"},{inline:!0,label:"Donn\xe9es",permalink:"/mycelium/docs/tags/donnees"},{inline:!0,label:"String",permalink:"/mycelium/docs/tags/string"},{inline:!0,label:"Integer",permalink:"/mycelium/docs/tags/integer"},{inline:!0,label:"Bool\xe9en",permalink:"/mycelium/docs/tags/booleen"},{inline:!0,label:"Undefined",permalink:"/mycelium/docs/tags/undefined"},{inline:!0,label:"Symbol",permalink:"/mycelium/docs/tags/symbol"},{inline:!0,label:"BigInt",permalink:"/mycelium/docs/tags/big-int"},{inline:!0,label:"Object",permalink:"/mycelium/docs/tags/object"},{inline:!0,label:"Array",permalink:"/mycelium/docs/tags/array"},{inline:!0,label:"Function",permalink:"/mycelium/docs/tags/function"},{inline:!0,label:"Date",permalink:"/mycelium/docs/tags/date"},{inline:!0,label:"RegExp",permalink:"/mycelium/docs/tags/reg-exp"},{inline:!0,label:"Map",permalink:"/mycelium/docs/tags/map"},{inline:!0,label:"Set",permalink:"/mycelium/docs/tags/set"}],version:"current",frontMatter:{tags:["JavaScript","React","Donn\xe9es","String","Integer","Bool\xe9en","Undefined","Symbol","BigInt","Object","Array","Function","Date","RegExp","Map","Set"]},sidebar:"tutorialSidebar",previous:{title:"Liste des m\xe9thodes JavaScript",permalink:"/mycelium/docs/Cours/JavaScript/JS+ReactJS/Les-methodes"},next:{title:"Les variables",permalink:"/mycelium/docs/Cours/JavaScript/JS+ReactJS/Les-variables"}},a={},c=[{value:"Types Primitifs",id:"types-primitifs",level:2},{value:"1. <strong>Number</strong>",id:"1-number",level:3},{value:"2. <strong>String</strong>",id:"2-string",level:3},{value:"3. <strong>Boolean</strong>",id:"3-boolean",level:3},{value:"4. <strong>Null</strong>",id:"4-null",level:3},{value:"5. <strong>Undefined</strong>",id:"5-undefined",level:3},{value:"6. <strong>Symbol</strong>",id:"6-symbol",level:3},{value:"7. <strong>BigInt</strong>",id:"7-bigint",level:3},{value:"Objets",id:"objets",level:2},{value:"1. <strong>Object</strong>",id:"1-object",level:3},{value:"2. <strong>Array</strong>",id:"2-array",level:3},{value:"3. <strong>Function</strong>",id:"3-function",level:3},{value:"4. <strong>Date</strong>",id:"4-date",level:3},{value:"5. <strong>RegExp</strong>",id:"5-regexp",level:3},{value:"Type de donn\xe9es complexes",id:"type-de-donn\xe9es-complexes",level:2},{value:"1. <strong>Map</strong>",id:"1-map",level:3},{value:"2. <strong>Set</strong>",id:"2-set",level:3},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"les-types-de-donn\xe9es",children:"Les types de donn\xe9es"})}),"\n",(0,r.jsx)(n.p,{children:"Que sont les diff\xe9rents types de donn\xe9es en JS ?"}),"\n",(0,r.jsx)(n.p,{children:"En JavaScript, il existe plusieurs types de donn\xe9es que tu peux utiliser pour stocker et manipuler des informations. Ces types de donn\xe9es peuvent \xeatre class\xe9s en deux grandes cat\xe9gories : les types primitifs et les objets. Comprendre ces types est crucial pour devenir un d\xe9veloppeur JavaScript comp\xe9tent."}),"\n",(0,r.jsx)(n.h2,{id:"types-primitifs",children:"Types Primitifs"}),"\n",(0,r.jsxs)(n.h3,{id:"1-number",children:["1. ",(0,r.jsx)(n.strong,{children:"Number"})]}),"\n",(0,r.jsxs)(n.p,{children:["Le type ",(0,r.jsx)(n.code,{children:"number"})," est utilis\xe9 pour repr\xe9senter \xe0 la fois les entiers et les nombres \xe0 virgule flottante."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"let entier = 42;\r\nlet flottant = 3.14;\r\nlet negatif = -100;\r\nlet grandNombre = 1.23e5; // 123000\n"})}),"\n",(0,r.jsx)(n.p,{children:"En React, tu peux utiliser les nombres directement dans le rendu JSX :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"function AfficherNombre() {\r\n  const monNombre = 42;\r\n  return <div>Mon nombre est {monNombre}</div>;\r\n}\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"2-string",children:["2. ",(0,r.jsx)(n.strong,{children:"String"})]}),"\n",(0,r.jsxs)(n.p,{children:["Le type ",(0,r.jsx)(n.code,{children:"string"})," est utilis\xe9 pour repr\xe9senter des cha\xeenes de caract\xe8res. Tu peux utiliser des guillemets simples, doubles ou des backticks pour cr\xe9er des cha\xeenes de caract\xe8res."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:'let simple = "Bonjour";\r\nlet double = "tout le monde";\r\nlet backticks = `Bonjour, ${double}!`;\n'})}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"En g\xe9n\xe9ral, lors de la sauvegarde du fichier sur l'IDE, les simples guillemets se transforment automatiquement en double."})}),"\n",(0,r.jsx)(n.p,{children:"En React :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:'function AfficherMessage() {\r\n  const message = "Bonjour, Monde!";\r\n  return <div>{message}</div>;\r\n}\n'})}),"\n",(0,r.jsxs)(n.h3,{id:"3-boolean",children:["3. ",(0,r.jsx)(n.strong,{children:"Boolean"})]}),"\n",(0,r.jsxs)(n.p,{children:["Le type ",(0,r.jsx)(n.code,{children:"boolean"})," a deux valeurs possibles : ",(0,r.jsx)(n.code,{children:"true"})," et ",(0,r.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"let vrai = true;\r\nlet faux = false;\n"})}),"\n",(0,r.jsx)(n.p,{children:"En React, les bool\xe9ens sont souvent utilis\xe9s pour conditionner le rendu :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"function AfficherCondition() {\r\n  const isLoggedIn = true;\r\n  return (\r\n    <div>\r\n      {isLoggedIn ? <p>Bienvenue!</p> : <p>Veuillez vous connecter.</p>}\r\n    </div>\r\n  );\r\n}\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"4-null",children:["4. ",(0,r.jsx)(n.strong,{children:"Null"})]}),"\n",(0,r.jsxs)(n.p,{children:["Le type ",(0,r.jsx)(n.code,{children:"null"})," repr\xe9sente l'absence volontaire de valeur."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"let sansValeur = null;\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"5-undefined",children:["5. ",(0,r.jsx)(n.strong,{children:"Undefined"})]}),"\n",(0,r.jsxs)(n.p,{children:["Le type ",(0,r.jsx)(n.code,{children:"undefined"})," indique qu'une variable a \xe9t\xe9 d\xe9clar\xe9e mais n'a pas encore \xe9t\xe9 assign\xe9e."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"let nonDefini;\r\nconsole.log(nonDefini); // undefined\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"6-symbol",children:["6. ",(0,r.jsx)(n.strong,{children:"Symbol"})]}),"\n",(0,r.jsxs)(n.p,{children:["Le type ",(0,r.jsx)(n.code,{children:"symbol"})," est utilis\xe9 pour cr\xe9er des identifiants uniques."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:'let sym1 = Symbol("description");\r\nlet sym2 = Symbol("description");\r\nconsole.log(sym1 === sym2); // false\n'})}),"\n",(0,r.jsxs)(n.h3,{id:"7-bigint",children:["7. ",(0,r.jsx)(n.strong,{children:"BigInt"})]}),"\n",(0,r.jsxs)(n.p,{children:["Le type ",(0,r.jsx)(n.code,{children:"BigInt"})," est utilis\xe9 pour repr\xe9senter des entiers qui sont trop grands pour \xeatre repr\xe9sent\xe9s par le type ",(0,r.jsx)(n.code,{children:"number"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"let grandEntier = BigInt(123456789012345678901234567890);\r\nlet autreGrandEntier = 123456789012345678901234567890n;\n"})}),"\n",(0,r.jsx)(n.h2,{id:"objets",children:"Objets"}),"\n",(0,r.jsxs)(n.h3,{id:"1-object",children:["1. ",(0,r.jsx)(n.strong,{children:"Object"})]}),"\n",(0,r.jsx)(n.p,{children:"Les objets sont utilis\xe9s pour stocker des collections de donn\xe9es et des entit\xe9s plus complexes."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:'let personne = {\r\n  nom: "John",\r\n  age: 30,\r\n  saluer: function () {\r\n    console.log("Bonjour!");\r\n  },\r\n};\n'})}),"\n",(0,r.jsx)(n.p,{children:"En React, les objets peuvent \xeatre utilis\xe9s pour passer des propri\xe9t\xe9s (props) :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:'function AfficherPersonne(props) {\r\n  return (\r\n    <div>\r\n      <p>Nom: {props.nom}</p>\r\n      <p>\xc2ge: {props.age}</p>\r\n    </div>\r\n  );\r\n}\r\n\r\n// Utilisation\r\nconst personne = { nom: "John", age: 30 };\r\n\r\nfunction App() {\r\n  return <AfficherPersonne {...personne} />;\r\n}\n'})}),"\n",(0,r.jsxs)(n.h3,{id:"2-array",children:["2. ",(0,r.jsx)(n.strong,{children:"Array"})]}),"\n",(0,r.jsx)(n.p,{children:"Les tableaux sont des listes ordonn\xe9es de valeurs."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:'let nombres = [1, 2, 3, 4, 5];\r\nlet melange = [1, "Bonjour", true, null];\n'})}),"\n",(0,r.jsx)(n.p,{children:"En React, tu peux utiliser des tableaux pour rendre des listes d'\xe9l\xe9ments :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:'function AfficherListe() {\r\n  const items = ["Pomme", "Banane", "Orange"];\r\n  return (\r\n    <ul>\r\n      {items.map((item, index) => (\r\n        <li key={index}>{item}</li>\r\n      ))}\r\n    </ul>\r\n  );\r\n}\n'})}),"\n",(0,r.jsxs)(n.h3,{id:"3-function",children:["3. ",(0,r.jsx)(n.strong,{children:"Function"})]}),"\n",(0,r.jsx)(n.p,{children:"Les fonctions sont des objets qui peuvent \xeatre appel\xe9s."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"function saluer(nom) {\r\n  return `Bonjour, ${nom}!`;\r\n}\r\n\r\nconst multiplier = (a, b) => a * b;\n"})}),"\n",(0,r.jsx)(n.p,{children:"En React, les fonctions sont utilis\xe9es pour d\xe9finir des composants et des hooks :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:'function Bouton(props) {\r\n  return <button onClick={props.onClick}>Clique-moi</button>;\r\n}\r\n\r\n// Utilisation\r\nfunction App() {\r\n  const handleClick = () => {\r\n    alert("Bouton cliqu\xe9!");\r\n  };\r\n\r\n  return <Bouton onClick={handleClick} />;\r\n}\n'})}),"\n",(0,r.jsxs)(n.h3,{id:"4-date",children:["4. ",(0,r.jsx)(n.strong,{children:"Date"})]}),"\n",(0,r.jsxs)(n.p,{children:["Le type ",(0,r.jsx)(n.code,{children:"Date"})," est utilis\xe9 pour repr\xe9senter les dates et heures."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:'let maintenant = new Date();\r\nlet dateSpecifique = new Date("2024-07-23");\n'})}),"\n",(0,r.jsxs)(n.h3,{id:"5-regexp",children:["5. ",(0,r.jsx)(n.strong,{children:"RegExp"})]}),"\n",(0,r.jsx)(n.p,{children:"Les expressions r\xe9guli\xe8res sont utilis\xe9es pour correspondre \xe0 des motifs dans les cha\xeenes de caract\xe8res."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:'let motif = /bonjour/i;\r\nconsole.log(motif.test("Bonjour le monde")); // true\n'})}),"\n",(0,r.jsx)(n.h2,{id:"type-de-donn\xe9es-complexes",children:"Type de donn\xe9es complexes"}),"\n",(0,r.jsxs)(n.h3,{id:"1-map",children:["1. ",(0,r.jsx)(n.strong,{children:"Map"})]}),"\n",(0,r.jsxs)(n.p,{children:["Les objets ",(0,r.jsx)(n.code,{children:"Map"})," permettent de stocker des paires cl\xe9-valeur. Contrairement aux objets, les cl\xe9s peuvent \xeatre de n'importe quel type."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:'let map = new Map();\r\nmap.set("nom", "John");\r\nmap.set(1, "one");\r\nconsole.log(map.get("nom")); // John\n'})}),"\n",(0,r.jsxs)(n.h3,{id:"2-set",children:["2. ",(0,r.jsx)(n.strong,{children:"Set"})]}),"\n",(0,r.jsxs)(n.p,{children:["Les objets ",(0,r.jsx)(n.code,{children:"Set"})," permettent de stocker des valeurs uniques."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"let set = new Set();\r\nset.add(1);\r\nset.add(1); // Ignor\xe9\r\nset.add(2);\r\nconsole.log(set.size); // 2\n"})}),"\n",(0,r.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,r.jsx)(n.p,{children:"En comprenant et en utilisant correctement ces diff\xe9rents types de donn\xe9es, tu seras en mesure de cr\xe9er des applications JavaScript et React robustes et performantes. N'oublie pas de toujours v\xe9rifier les types de donn\xe9es que tu manipules pour \xe9viter les erreurs et am\xe9liorer la lisibilit\xe9 de ton code."})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>o});var r=s(6540);const t={},i=r.createContext(t);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);