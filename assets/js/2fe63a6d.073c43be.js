"use strict";(self.webpackChunkmycelium=self.webpackChunkmycelium||[]).push([[1824],{7321:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var t=n(4848),r=n(8453);const i={tags:["S\xe9curit\xe9","Attaques"]},a="Les Attaques dans le D\xe9veloppement Web",l={id:"Cours/Securite/Les-attaques",title:"Les Attaques dans le D\xe9veloppement Web",description:"Le d\xe9veloppement web est passionnant mais comporte des risques importants. Pour garantir la s\xe9curit\xe9 de tes applications et prot\xe9ger les donn\xe9es des utilisateurs, il est crucial de comprendre les diff\xe9rents types d'attaques. Voici un guide d\xe9taill\xe9 sur les quatre principales menaces en mati\xe8re de s\xe9curit\xe9 web, avec des exemples et des conseils pour te prot\xe9ger.",source:"@site/docs/Cours/Securite/Les-attaques.md",sourceDirName:"Cours/Securite",slug:"/Cours/Securite/Les-attaques",permalink:"/mycelium/docs/Cours/Securite/Les-attaques",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Cours/Securite/Les-attaques.md",tags:[{inline:!0,label:"S\xe9curit\xe9",permalink:"/mycelium/docs/tags/securite"},{inline:!0,label:"Attaques",permalink:"/mycelium/docs/tags/attaques"}],version:"current",frontMatter:{tags:["S\xe9curit\xe9","Attaques"]},sidebar:"tutorialSidebar",previous:{title:"Diff\xe9rences entre un professionnel de la cybers\xe9curit\xe9 et un hacker \xe9thique",permalink:"/mycelium/docs/Cours/Securite/Cybersecurite-Hacker"},next:{title:"S\xe9curiser sa Connexion avec un bon Mot de Passe",permalink:"/mycelium/docs/Cours/Securite/Mot-de-passe"}},u={},c=[{value:"1. Injection SQL",id:"1-injection-sql",level:2},{value:"Qu&#39;est-ce que c&#39;est ?",id:"quest-ce-que-cest-",level:3},{value:"Exemple",id:"exemple",level:3},{value:"Comment s&#39;en pr\xe9munir ?",id:"comment-sen-pr\xe9munir-",level:3},{value:"Exemple avec PHP et MySQLi",id:"exemple-avec-php-et-mysqli",level:4},{value:"2. Cross-Site Scripting (XSS)",id:"2-cross-site-scripting-xss",level:2},{value:"Qu&#39;est-ce que c&#39;est ?",id:"quest-ce-que-cest--1",level:3},{value:"Exemple",id:"exemple-1",level:3},{value:"Comment s&#39;en pr\xe9munir ?",id:"comment-sen-pr\xe9munir--1",level:3},{value:"Exemple avec JavaScript",id:"exemple-avec-javascript",level:4},{value:"3. Cross-Site Request Forgery (CSRF)",id:"3-cross-site-request-forgery-csrf",level:2},{value:"Qu&#39;est-ce que c&#39;est ?",id:"quest-ce-que-cest--2",level:3},{value:"Exemple",id:"exemple-2",level:3},{value:"Comment s&#39;en pr\xe9munir ?",id:"comment-sen-pr\xe9munir--2",level:3},{value:"Exemple avec PHP",id:"exemple-avec-php",level:4},{value:"4. Attaque par Force Brute",id:"4-attaque-par-force-brute",level:2},{value:"Qu&#39;est-ce que c&#39;est ?",id:"quest-ce-que-cest--3",level:3},{value:"Exemple",id:"exemple-3",level:3},{value:"Comment s&#39;en pr\xe9munir ?",id:"comment-sen-pr\xe9munir--3",level:3},{value:"Exemple avec PHP",id:"exemple-avec-php-1",level:4},{value:"Conclusion",id:"conclusion",level:2}];function o(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"les-attaques-dans-le-d\xe9veloppement-web",children:"Les Attaques dans le D\xe9veloppement Web"})}),"\n",(0,t.jsx)(s.p,{children:"Le d\xe9veloppement web est passionnant mais comporte des risques importants. Pour garantir la s\xe9curit\xe9 de tes applications et prot\xe9ger les donn\xe9es des utilisateurs, il est crucial de comprendre les diff\xe9rents types d'attaques. Voici un guide d\xe9taill\xe9 sur les quatre principales menaces en mati\xe8re de s\xe9curit\xe9 web, avec des exemples et des conseils pour te prot\xe9ger."}),"\n",(0,t.jsx)(s.h2,{id:"1-injection-sql",children:"1. Injection SQL"}),"\n",(0,t.jsx)(s.h3,{id:"quest-ce-que-cest-",children:"Qu'est-ce que c'est ?"}),"\n",(0,t.jsx)(s.p,{children:"L'injection SQL est une attaque o\xf9 un attaquant ins\xe8re du code SQL malveillant dans une requ\xeate SQL. Cela peut permettre \xe0 l'attaquant de manipuler, extraire ou supprimer des donn\xe9es dans la base de donn\xe9es."}),"\n",(0,t.jsx)(s.h3,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(s.p,{children:"Imaginons un formulaire de connexion qui utilise le code SQL suivant pour v\xe9rifier les informations de l'utilisateur :"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"SELECT * FROM utilisateurs WHERE nom_utilisateur = 'user' AND mot_de_passe = 'pass';\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Si un attaquant entre ",(0,t.jsx)(s.code,{children:"' OR '1'='1"})," comme mot de passe, la requ\xeate devient :"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"SELECT * FROM utilisateurs WHERE nom_utilisateur = 'user' AND mot_de_passe = '' OR '1'='1';\n"})}),"\n",(0,t.jsx)(s.p,{children:"Cette requ\xeate est toujours vraie, permettant \xe0 l'attaquant de se connecter sans avoir les bons identifiants."}),"\n",(0,t.jsx)(s.h3,{id:"comment-sen-pr\xe9munir-",children:"Comment s'en pr\xe9munir ?"}),"\n",(0,t.jsxs)(s.p,{children:["Utilise des ",(0,t.jsx)(s.strong,{children:"requ\xeates pr\xe9par\xe9es"})," ou des ",(0,t.jsx)(s.strong,{children:"requ\xeates param\xe9tr\xe9es"})," pour \xe9viter que les donn\xe9es entr\xe9es par l'utilisateur ne soient trait\xe9es comme du code SQL."]}),"\n",(0,t.jsx)(s.h4,{id:"exemple-avec-php-et-mysqli",children:"Exemple avec PHP et MySQLi"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-php",children:'$stmt = $conn->prepare("SELECT * FROM utilisateurs WHERE nom_utilisateur = ? AND mot_de_passe = ?");\r\n$stmt->bind_param("ss", $nom_utilisateur, $mot_de_passe);\r\n$stmt->execute();\r\n$result = $stmt->get_result();\n'})}),"\n",(0,t.jsx)(s.p,{children:"Avec des requ\xeates pr\xe9par\xe9es, les entr\xe9es utilisateur sont trait\xe9es comme des donn\xe9es et non comme des instructions SQL."}),"\n",(0,t.jsx)(s.h2,{id:"2-cross-site-scripting-xss",children:"2. Cross-Site Scripting (XSS)"}),"\n",(0,t.jsx)(s.h3,{id:"quest-ce-que-cest--1",children:"Qu'est-ce que c'est ?"}),"\n",(0,t.jsx)(s.p,{children:"Le Cross-Site Scripting (XSS) est une attaque o\xf9 un attaquant injecte du code JavaScript malveillant dans une page web. Ce code est ensuite ex\xe9cut\xe9 dans le navigateur des autres utilisateurs, ce qui peut compromettre leurs donn\xe9es ou leurs sessions."}),"\n",(0,t.jsx)(s.h3,{id:"exemple-1",children:"Exemple"}),"\n",(0,t.jsx)(s.p,{children:"Supposons une application de forum o\xf9 les utilisateurs peuvent laisser des commentaires. Si l'application n'\xe9chappe pas les entr\xe9es, un attaquant peut soumettre un commentaire comme :"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-html",children:'<script>\r\n  alert("Vous avez \xe9t\xe9 pirat\xe9 !");\r\n<\/script>\n'})}),"\n",(0,t.jsx)(s.p,{children:"Ce code JavaScript s'ex\xe9cutera chaque fois qu'un utilisateur consulte le commentaire, affichant une alerte."}),"\n",(0,t.jsx)(s.h3,{id:"comment-sen-pr\xe9munir--1",children:"Comment s'en pr\xe9munir ?"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"\xc9chapper les donn\xe9es"})," avant de les afficher pour \xe9viter l'ex\xe9cution de code malveillant. Convertis les caract\xe8res sp\xe9ciaux en entit\xe9s HTML."]}),"\n"]}),"\n",(0,t.jsx)(s.h4,{id:"exemple-avec-javascript",children:"Exemple avec JavaScript"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-javascript",children:'function escapeHTML(text) {\r\n  return text\r\n    .replace(/&/g, "&amp;")\r\n    .replace(/</g, "&lt;")\r\n    .replace(/>/g, "&gt;")\r\n    .replace(/"/g, "&quot;")\r\n    .replace(/\'/g, "&#039;");\r\n}\n'})}),"\n",(0,t.jsxs)(s.ol,{start:"2",children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Utilise les en-t\xeates de s\xe9curit\xe9"})," comme ",(0,t.jsx)(s.code,{children:"Content-Security-Policy"})," (CSP) pour restreindre les ressources que les pages peuvent charger et ex\xe9cuter."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"3-cross-site-request-forgery-csrf",children:"3. Cross-Site Request Forgery (CSRF)"}),"\n",(0,t.jsx)(s.h3,{id:"quest-ce-que-cest--2",children:"Qu'est-ce que c'est ?"}),"\n",(0,t.jsx)(s.p,{children:"Le Cross-Site Request Forgery (CSRF) est une attaque o\xf9 un attaquant induit un utilisateur authentifi\xe9 \xe0 ex\xe9cuter des actions non souhait\xe9es sur un site o\xf9 il est d\xe9j\xe0 authentifi\xe9."}),"\n",(0,t.jsx)(s.h3,{id:"exemple-2",children:"Exemple"}),"\n",(0,t.jsx)(s.p,{children:"Supposons que tu aies une page de modification de mot de passe sur ton site web. Un attaquant pourrait cr\xe9er une page malveillante avec le code suivant :"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-html",children:'<form action="https://tonsite.com/changer_mdp" method="POST">\r\n  <input type="hidden" name="nouveau_mdp" value="motdepassecompromis" />\r\n  <input type="submit" value="Changer le mot de passe" />\r\n</form>\n'})}),"\n",(0,t.jsx)(s.p,{children:"Si un utilisateur connect\xe9 visite cette page, le mot de passe sera chang\xe9 sans qu'il le sache."}),"\n",(0,t.jsx)(s.h3,{id:"comment-sen-pr\xe9munir--2",children:"Comment s'en pr\xe9munir ?"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Utilise des tokens CSRF"})," : g\xe9n\xe8re un token unique pour chaque session et inclue-le dans les formulaires."]}),"\n"]}),"\n",(0,t.jsx)(s.h4,{id:"exemple-avec-php",children:"Exemple avec PHP"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-php",children:"// G\xe9n\xe9rer un token\r\n$_SESSION['csrf_token'] = bin2hex(random_bytes(32));\r\n\r\n// Inclure le token dans un formulaire\r\necho '<input type=\"hidden\" name=\"csrf_token\" value=\"' . $_SESSION['csrf_token'] . '\">';\n"})}),"\n",(0,t.jsxs)(s.ol,{start:"2",children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"V\xe9rifie le token \xe0 la r\xe9ception"})," pour t'assurer que la requ\xeate provient de la m\xeame session."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"4-attaque-par-force-brute",children:"4. Attaque par Force Brute"}),"\n",(0,t.jsx)(s.h3,{id:"quest-ce-que-cest--3",children:"Qu'est-ce que c'est ?"}),"\n",(0,t.jsx)(s.p,{children:"Une attaque par force brute est une m\xe9thode o\xf9 un attaquant essaie toutes les combinaisons possibles de mots de passe ou de cl\xe9s pour acc\xe9der \xe0 un compte ou une ressource prot\xe9g\xe9e."}),"\n",(0,t.jsx)(s.h3,{id:"exemple-3",children:"Exemple"}),"\n",(0,t.jsx)(s.p,{children:"Un attaquant peut utiliser un script pour tenter des milliers de combinaisons de mots de passe jusqu'\xe0 trouver le bon."}),"\n",(0,t.jsx)(s.h3,{id:"comment-sen-pr\xe9munir--3",children:"Comment s'en pr\xe9munir ?"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Limite les tentatives de connexion"})," en mettant en place un verrouillage de compte apr\xe8s un certain nombre d'\xe9checs de connexion."]}),"\n"]}),"\n",(0,t.jsx)(s.h4,{id:"exemple-avec-php-1",children:"Exemple avec PHP"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-php",children:"if ($tentatives >= 5) {\r\n  // Bloquer la connexion ou introduire un d\xe9lai\r\n}\n"})}),"\n",(0,t.jsxs)(s.ol,{start:"2",children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Encourage l'utilisation de mots de passe forts"})," et exige leur changement r\xe9gulier."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Impl\xe9mente l'authentification multi-facteurs (MFA)"})," pour ajouter une couche de s\xe9curit\xe9 suppl\xe9mentaire."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsx)(s.p,{children:"La s\xe9curit\xe9 dans le d\xe9veloppement web est essentielle pour prot\xe9ger les donn\xe9es et garantir le bon fonctionnement des applications. En comprenant les diff\xe9rents types d'attaques et en mettant en \u0153uvre des mesures pr\xe9ventives appropri\xe9es, tu contribueras \xe0 cr\xe9er des applications plus s\xfbres et r\xe9silientes. Reste \xe0 jour avec les derni\xe8res vuln\xe9rabilit\xe9s et pratiques de s\xe9curit\xe9 pour assurer la protection continue de tes projets."})]})}function d(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>a,x:()=>l});var t=n(6540);const r={},i=t.createContext(r);function a(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);