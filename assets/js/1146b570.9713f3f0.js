"use strict";(self.webpackChunkmycelium=self.webpackChunkmycelium||[]).push([[5973],{8113:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>t,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var s=r(4848),c=r(8453);const a={tags:["JavaScript","React","Regex","M\xe9thodes"]},i="Les Regex",l={id:"Cours/JavaScript/JS+ReactJS/Les-Regex",title:"Les Regex",description:"La hantise de 200% des d\xe9veloppeurs...",source:"@site/docs/Cours/JavaScript/JS+ReactJS/Les-Regex.md",sourceDirName:"Cours/JavaScript/JS+ReactJS",slug:"/Cours/JavaScript/JS+ReactJS/Les-Regex",permalink:"/mycelium/docs/Cours/JavaScript/JS+ReactJS/Les-Regex",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Cours/JavaScript/JS+ReactJS/Les-Regex.md",tags:[{inline:!0,label:"JavaScript",permalink:"/mycelium/docs/tags/java-script"},{inline:!0,label:"React",permalink:"/mycelium/docs/tags/react"},{inline:!0,label:"Regex",permalink:"/mycelium/docs/tags/regex"},{inline:!0,label:"M\xe9thodes",permalink:"/mycelium/docs/tags/methodes"}],version:"current",frontMatter:{tags:["JavaScript","React","Regex","M\xe9thodes"]},sidebar:"tutorialSidebar",previous:{title:"JS + React",permalink:"/mycelium/docs/category/js--react"},next:{title:"Les types de donn\xe9es",permalink:"/mycelium/docs/Cours/JavaScript/JS+ReactJS/Les-types-de-donnees"}},t={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Syntaxe de base des Regex",id:"syntaxe-de-base-des-regex",level:2},{value:"Modificateurs",id:"modificateurs",level:2},{value:"Exemples",id:"exemples",level:3},{value:"Caract\xe8res sp\xe9ciaux",id:"caract\xe8res-sp\xe9ciaux",level:2},{value:"Exemples",id:"exemples-1",level:3},{value:"Groupes et plages de caract\xe8res",id:"groupes-et-plages-de-caract\xe8res",level:2},{value:"Exemples",id:"exemples-2",level:3},{value:"Quantificateurs",id:"quantificateurs",level:2},{value:"Exemples",id:"exemples-3",level:3},{value:"Groupes capturants et non-capturants",id:"groupes-capturants-et-non-capturants",level:2},{value:"Exemples",id:"exemples-4",level:3},{value:"Assertions",id:"assertions",level:2},{value:"Exemples",id:"exemples-5",level:3},{value:"M\xe9thodes Regex en JavaScript",id:"m\xe9thodes-regex-en-javascript",level:2},{value:"Test",id:"test",level:3},{value:"Match",id:"match",level:3},{value:"Replace",id:"replace",level:3},{value:"Split",id:"split",level:3},{value:"Exemples en React",id:"exemples-en-react",level:2},{value:"Validation de formulaire avec Regex",id:"validation-de-formulaire-avec-regex",level:3},{value:"Exemples d&#39;emails valid\xe9s par cette regex",id:"exemples-demails-valid\xe9s-par-cette-regex",level:4},{value:"Exemples d&#39;emails non valid\xe9s par cette regex",id:"exemples-demails-non-valid\xe9s-par-cette-regex",level:4},{value:"Recherche en temps r\xe9el avec Regex",id:"recherche-en-temps-r\xe9el-avec-regex",level:3},{value:"Conclusion",id:"conclusion",level:2}];function o(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"les-regex",children:"Les Regex"}),"\n",(0,s.jsx)(n.p,{children:"La hantise de 200% des d\xe9veloppeurs..."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://codepen.io/Chrstn67/pen/zYVBpbV",children:"D\xe9monstration sur CodePen"})}),"\n",(0,s.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsx)(n.p,{children:"Les expressions r\xe9guli\xe8res (Regex) sont des motifs utilis\xe9s pour correspondre \xe0 des combinaisons de caract\xe8res dans des cha\xeenes de texte. En JavaScript, elles sont extr\xeamement puissantes pour la manipulation de cha\xeenes, la validation de formulaires, et bien d'autres t\xe2ches. Ce guide te donnera une compr\xe9hension approfondie des Regex en JavaScript, avec des exemples en JavaScript pur et en React."}),"\n",(0,s.jsx)(n.h2,{id:"syntaxe-de-base-des-regex",children:"Syntaxe de base des Regex"}),"\n",(0,s.jsx)(n.p,{children:"En JavaScript, les Regex peuvent \xeatre cr\xe9\xe9es de deux mani\xe8res :"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Litt\xe9ral Regex"})," : Utilise des barres obliques (/) pour entourer le motif."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const regex = /abc/;\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Objet RegExp"})," : Utilise le constructeur ",(0,s.jsx)(n.code,{children:"RegExp"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'const regex = new RegExp("abc");\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"modificateurs",children:"Modificateurs"}),"\n",(0,s.jsx)(n.p,{children:"Les modificateurs permettent d\u2019ajuster le comportement des Regex :"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"i"})," : Ignore la casse."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"g"})," : Recherche globale (trouve toutes les occurrences)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"m"})," : Recherche multilignes."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"s"})," : Permet au point (",(0,s.jsx)(n.code,{children:"."}),") de correspondre aux caract\xe8res de nouvelle ligne (un point = un caract\xe8re)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"u"})," : Active le mode Unicode."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"y"})," : Recherche positionn\xe9e."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"exemples",children:"Exemples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const regex1 = /abc/i; // Ignore la casse\r\nconst regex2 = /abc/g; // Recherche globale\r\nconst regex3 = /abc/m; // Recherche multilignes\n"})}),"\n",(0,s.jsx)(n.h2,{id:"caract\xe8res-sp\xe9ciaux",children:"Caract\xe8res sp\xe9ciaux"}),"\n",(0,s.jsx)(n.p,{children:"Les Regex utilisent des caract\xe8res sp\xe9ciaux pour d\xe9finir des motifs :"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"."})," : Correspond \xe0 n'importe quel caract\xe8re sauf une nouvelle ligne."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"\\d"})," : Correspond \xe0 un chiffre (\xe9quivalent \xe0 ",(0,s.jsx)(n.code,{children:"[0-9]"}),")."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"\\w"})," : Correspond \xe0 un caract\xe8re de mot (lettres, chiffres, et underscore)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"\\s"})," : Correspond \xe0 un espace blanc (espace, tabulation, etc.)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"\\b"})," : Correspond \xe0 une limite de mot."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"^"})," : D\xe9but de la cha\xeene."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"$"})," : Fin de la cha\xeene."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"exemples-1",children:"Exemples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'const regex1 = /.at/; // Correspond \xe0 "cat", "bat", "hat", etc.\r\nconst regex2 = /\\d/; // Correspond \xe0 "0", "1", "2", etc.\r\nconst regex3 = /\\w/; // Correspond \xe0 "a", "A", "0", "_", etc.\n'})}),"\n",(0,s.jsx)(n.h2,{id:"groupes-et-plages-de-caract\xe8res",children:"Groupes et plages de caract\xe8res"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[abc]"})," : Correspond \xe0 un caract\xe8re parmi 'a', 'b' ou 'c'."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[a-z]"})," : Correspond \xe0 un caract\xe8re parmi 'a' \xe0 'z'."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[^abc]"})," : Correspond \xe0 un caract\xe8re qui n'est pas parmi 'a', 'b' ou 'c'."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"exemples-2",children:"Exemples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const regex1 = /[aeiou]/; // Correspond \xe0 une voyelle\r\nconst regex2 = /[0-9]/; // Correspond \xe0 un chiffre\r\nconst regex3 = /[^0-9]/; // Correspond \xe0 un non-chiffre\n"})}),"\n",(0,s.jsx)(n.h2,{id:"quantificateurs",children:"Quantificateurs"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"*"})," : 0 ou plus."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"+"})," : 1 ou plus."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"?"})," : 0 ou 1."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"{n}"})," : Exactement n occurrences."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"{n,}"})," : Au moins n occurrences."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"{n,m}"})," : Entre n et m occurrences."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"exemples-3",children:"Exemples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'const regex1 = /a*/; // Correspond \xe0 "a", "aa", "", etc.\r\nconst regex2 = /a+/; // Correspond \xe0 "a", "aa", etc.\r\nconst regex3 = /a?/; // Correspond \xe0 "a" ou ""\r\nconst regex4 = /a{2}/; // Correspond \xe0 "aa"\r\nconst regex5 = /a{2,}/; // Correspond \xe0 "aa", "aaa", etc.\r\nconst regex6 = /a{2,4}/; // Correspond \xe0 "aa", "aaa", "aaaa"\n'})}),"\n",(0,s.jsx)(n.h2,{id:"groupes-capturants-et-non-capturants",children:"Groupes capturants et non-capturants"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"(abc)"})," : Groupe capturant."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"(?:abc)"})," : Groupe non-capturant."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"exemples-4",children:"Exemples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'const regex1 = /(abc)/; // Capture "abc"\r\nconst regex2 = /(?:abc)/; // Ne capture pas "abc"\n'})}),"\n",(0,s.jsx)(n.h2,{id:"assertions",children:"Assertions"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"?="})," : Lookahead positif."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"?!"})," : Lookahead n\xe9gatif."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"?<="})," : Lookbehind positif."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"?<!"})," : Lookbehind n\xe9gatif."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"exemples-5",children:"Exemples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'const regex1 = /a(?=b)/; // Correspond \xe0 "a" suivi de "b"\r\nconst regex2 = /a(?!b)/; // Correspond \xe0 "a" non suivi de "b"\r\nconst regex3 = /(?<=b)a/; // Correspond \xe0 "a" pr\xe9c\xe9d\xe9 de "b"\r\nconst regex4 = /(?<!b)a/; // Correspond \xe0 "a" non pr\xe9c\xe9d\xe9 de "b"\n'})}),"\n",(0,s.jsx)(n.h2,{id:"m\xe9thodes-regex-en-javascript",children:"M\xe9thodes Regex en JavaScript"}),"\n",(0,s.jsx)(n.h3,{id:"test",children:"Test"}),"\n",(0,s.jsxs)(n.p,{children:["La m\xe9thode ",(0,s.jsx)(n.code,{children:"test"})," v\xe9rifie si un motif existe dans une cha\xeene."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'const regex = /abc/;\r\nconst result = regex.test("abcde"); // true\n'})}),"\n",(0,s.jsx)(n.h3,{id:"match",children:"Match"}),"\n",(0,s.jsxs)(n.p,{children:["La m\xe9thode ",(0,s.jsx)(n.code,{children:"match"})," retourne les correspondances trouv\xe9es dans une cha\xeene."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'const regex = /abc/g;\r\nconst result = "abcdeabc".match(regex); // ["abc", "abc"]\n'})}),"\n",(0,s.jsx)(n.h3,{id:"replace",children:"Replace"}),"\n",(0,s.jsxs)(n.p,{children:["La m\xe9thode ",(0,s.jsx)(n.code,{children:"replace"})," remplace les correspondances trouv\xe9es dans une cha\xeene."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'const regex = /abc/g;\r\nconst result = "abcdeabc".replace(regex, "xyz"); // "xyzdexyz"\n'})}),"\n",(0,s.jsx)(n.h3,{id:"split",children:"Split"}),"\n",(0,s.jsxs)(n.p,{children:["La m\xe9thode ",(0,s.jsx)(n.code,{children:"split"})," divise une cha\xeene par le motif correspondant."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'const regex = /-/;\r\nconst result = "2021-07-15".split(regex); // ["2021", "07", "15"]\n'})}),"\n",(0,s.jsx)(n.h2,{id:"exemples-en-react",children:"Exemples en React"}),"\n",(0,s.jsx)(n.h3,{id:"validation-de-formulaire-avec-regex",children:"Validation de formulaire avec Regex"}),"\n",(0,s.jsx)(n.p,{children:"Imaginons un formulaire de connexion qui n\xe9cessite une validation d'email et de mot de passe."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'import React, { useState } from "react";\r\n\r\nconst LoginForm = () => {\r\n  const [email, setEmail] = useState("");\r\n  const [password, setPassword] = useState("");\r\n  const [error, setError] = useState("");\r\n\r\n  const validateEmail = (email) => {\r\n    const regex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\r\n    return regex.test(email);\r\n  };\r\n\r\n  const handleSubmit = (e) => {\r\n    e.preventDefault();\r\n    if (!validateEmail(email)) {\r\n      setError("Invalid email");\r\n      return;\r\n    }\r\n    if (password.length < 6) {\r\n      setError("Password must be at least 6 characters long");\r\n      return;\r\n    }\r\n    setError("");\r\n    // Continue with form submission\r\n  };\r\n\r\n  return (\r\n    <form onSubmit={handleSubmit}>\r\n      <div>\r\n        <label>Email:</label>\r\n        <input\r\n          type="email"\r\n          value={email}\r\n          onChange={(e) => setEmail(e.target.value)}\r\n        />\r\n      </div>\r\n      <div>\r\n        <label>Password:</label>\r\n        <input\r\n          type="password"\r\n          value={password}\r\n          onChange={(e) => setPassword(e.target.value)}\r\n        />\r\n      </div>\r\n      {error && <p style={{ color: "red" }}>{error}</p>}\r\n      <button type="submit">Login</button>\r\n    </form>\r\n  );\r\n};\r\n\r\nexport default LoginForm;\n'})}),"\n",(0,s.jsxs)(n.admonition,{title:"Explication de la Regex",type:"info",children:[(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const regex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\n"})}),(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Caract\xe8re/Groupe"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"^"})}),(0,s.jsx)(n.td,{children:"Indique le d\xe9but de la cha\xeene. La correspondance doit commencer d\xe8s le d\xe9but de la cha\xeene, sans aucun caract\xe8re avant."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"[^\\s@]+"})}),(0,s.jsxs)(n.td,{children:["Groupe de caract\xe8res qui match une ou plusieurs occurrences (indiqu\xe9 par ",(0,s.jsx)(n.code,{children:"+"}),") de tout caract\xe8re sauf un espace (",(0,s.jsx)(n.code,{children:"\\s"}),") ou un ",(0,s.jsx)(n.code,{children:"@"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"[^\\s@]"})}),(0,s.jsxs)(n.td,{children:["Correspond \xe0 n'importe quel caract\xe8re qui n'est ni un espace (",(0,s.jsx)(n.code,{children:"\\s"}),") ni un ",(0,s.jsx)(n.code,{children:"@"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"+"})}),(0,s.jsx)(n.td,{children:"Indique que le groupe pr\xe9c\xe9dent doit appara\xeetre au moins une fois, mais peut appara\xeetre plusieurs fois."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"@"})}),(0,s.jsxs)(n.td,{children:["Correspond exactement au caract\xe8re ",(0,s.jsx)(n.code,{children:"@"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"[^\\s@]+"})}),(0,s.jsxs)(n.td,{children:["Encore une fois, correspond \xe0 une ou plusieurs occurrences de n'importe quel caract\xe8re sauf un espace ou un ",(0,s.jsx)(n.code,{children:"@"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"\\."})}),(0,s.jsxs)(n.td,{children:["Correspond exactement \xe0 un point (",(0,s.jsx)(n.code,{children:"."}),"). Note que le point doit \xeatre \xe9chapp\xe9 avec un backslash (",(0,s.jsx)(n.code,{children:"\\"}),") parce que, dans les regex, un point seul (",(0,s.jsx)(n.code,{children:"."}),") correspond \xe0 n'importe quel caract\xe8re."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"[^\\s@]+"})}),(0,s.jsxs)(n.td,{children:["Une derni\xe8re fois, correspond \xe0 une ou plusieurs occurrences de n'importe quel caract\xe8re sauf un espace ou un ",(0,s.jsx)(n.code,{children:"@"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"$"})}),(0,s.jsx)(n.td,{children:"Indique la fin de la cha\xeene. La correspondance doit se terminer \xe0 la fin de la cha\xeene, sans aucun caract\xe8re apr\xe8s."})]})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"exemples-demails-valid\xe9s-par-cette-regex",children:"Exemples d'emails valid\xe9s par cette regex"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"mailto:user@example.com",children:"user@example.com"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"mailto:firstname.lastname@domain.co.uk",children:"firstname.lastname@domain.co.uk"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"mailto:email@subdomain.example.com",children:"email@subdomain.example.com"})}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"exemples-demails-non-valid\xe9s-par-cette-regex",children:"Exemples d'emails non valid\xe9s par cette regex"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"plainaddress (pas de @ et de domaine)"}),"\n",(0,s.jsx)(n.li,{children:"@missingusername.com (manque le nom d'utilisateur avant le @)"}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"mailto:username@.com",children:"username@.com"})," (manque le nom de domaine avant le point)"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Cette regex est une mani\xe8re simple mais efficace de v\xe9rifier la validit\xe9 d'une adresse email. Cependant, il est important de noter que les adresses email peuvent avoir des formats tr\xe8s complexes et cette regex ne couvre pas tous les cas possibles. Pour une validation plus rigoureuse, des biblioth\xe8ques sp\xe9cialis\xe9es ou une v\xe9rification c\xf4t\xe9 serveur peuvent \xeatre n\xe9cessaires."}),"\n",(0,s.jsx)(n.h3,{id:"recherche-en-temps-r\xe9el-avec-regex",children:"Recherche en temps r\xe9el avec Regex"}),"\n",(0,s.jsx)(n.p,{children:"Imaginons un composant qui filtre une liste d'\xe9l\xe9ments en temps r\xe9el."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'import React, { useState } from "react";\r\n\r\nconst SearchFilter = () => {\r\n  const [searchTerm, setSearchTerm] = useState("");\r\n  const items = [\r\n    "apple",\r\n    "banana",\r\n    "cherry",\r\n    "date",\r\n    "elderberry",\r\n    "fig",\r\n    "grape",\r\n  ];\r\n\r\n  const filteredItems = items.filter((item) => {\r\n    const regex = new RegExp(searchTerm, "i");\r\n    return regex.test(item);\r\n  });\r\n\r\n  return (\r\n    <div>\r\n      <input\r\n        type="text"\r\n        placeholder="Search..."\r\n        value={searchTerm}\r\n        onChange={(e) => setSearchTerm(e.target.value)}\r\n      />\r\n      <ul>\r\n        {filteredItems.map((item, index) => (\r\n          <li key={index}>{item}</li>\r\n        ))}\r\n      </ul>\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default SearchFilter;\n'})}),"\n",(0,s.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsx)(n.p,{children:"Les expressions r\xe9guli\xe8res en JavaScript sont un outil puissant pour manipuler et valider des cha\xeenes de texte. Elles peuvent sembler complexes au d\xe9but, mais avec de la pratique, tu d\xe9couvriras leur utilit\xe9 dans de nombreuses situations. Ce guide t'a fourni une base solide, que tu peux maintenant approfondir avec des exercices et des projets pratiques. Bon codage !"})]})}function u(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>l});var s=r(6540);const c={},a=s.createContext(c);function i(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);