(this["webpackJsonpplaan-b"]=this["webpackJsonpplaan-b"]||[]).push([[0],{117:function(e,t,a){e.exports=a(153)},122:function(e,t,a){},129:function(e,t,a){},153:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(6),s=a.n(r),c=(a(122),a(12)),i=a(17),m="rounded bg-white w-1/4 h-32 m-8 flex justify-center items-center rounded shadow-lg hover:bg-gray-100 text-2xl",u=function(){return n.a.createElement("div",{className:"w-full h-auto flex justify-center items-center flex-col"},n.a.createElement("h1",null,"Tere tulemas Plan-B s\xfcsteemi!"),n.a.createElement("div",{className:"w-full flex justify-center flex-col items-center"},n.a.createElement(i.b,{style:{borderRadius:"25px"},className:m,to:"/question"},n.a.createElement("p",null,"Sisesta avaldus")),n.a.createElement(i.b,{style:{borderRadius:"25px"},className:m,to:"/kalender"},n.a.createElement("p",null,"Vaata kalendrit")),n.a.createElement(i.b,{style:{borderRadius:"25px"},className:m,to:"/arst"},n.a.createElement("p",null,"Tervisemurede raportid"))))},o=a(21),d=a(5),p=a(188),E=a(189),b=a(181),f=["K\xf5rge","Keskmine","Madal","Kokku"],v="lg:px-32 xl:px-64 flex justify-center px-8 mt-8",h=function(e){var t=e.summary;return n.a.createElement("div",{style:{borderRadius:"25px"},className:"w-4/5 lg:w-2/5 h-full rounded px-8 py-1 flex justify-around text-center bg-white shadow-md"},Object.keys(t).map((function(e){return n.a.createElement("div",{key:e,className:"flex flex-col justify-center h-full"},n.a.createElement("p",{className:"text-lg font-bold"},t[e]),n.a.createElement("p",{className:"text-md text-gray-600"},f[+e]))})))},x=a(182),g=a(190),N=a(191),w=a(183),j=a(187),k=a(100),y=a.n(k),O=Object(d.a)({root:{border:"1px solid rgba(0, 0, 0, .125)",boxShadow:"none","&:not(:last-child)":{borderBottom:0},"&:before":{display:"none"},"&$expanded":{margin:"auto"}},expanded:{}})(p.a),S=Object(d.a)({root:{backgroundColor:"rgba(0, 0, 0, .03)",borderBottom:"1px solid rgba(0, 0, 0, .125)",marginBottom:-1,minHeight:56,"&$expanded":{minHeight:56}},content:{"&$expanded":{margin:"12px 0"}},expanded:{}})(E.a),C=Object(d.a)((function(e){return{root:{padding:e.spacing(2)}}}))(b.a),M=[{nimi:"Mart Mets","s\xfcmptom":"Peavalu","p\xf5hjus":"Kukkusin pea ees vastu betooni",prioriteediSoovitus:"2"},{nimi:"Madis Malev","s\xfcmptom":"Kopsud valutavad","p\xf5hjus":"Peale viimast r\xe4nnakut k\xfclmetasin",prioriteediSoovitus:"1"},{nimi:"Toomas S\xf5dur","s\xfcmptom":"V\xe4ike haav","p\xf5hjus":"Kriimustasin ja sooviksin plaastrit",prioriteediSoovitus:"0"}],D=Object(x.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:200},selectEmpty:{marginTop:e.spacing(2)}}})),K="text-xl py-1 rounded bg-blue-400 text-white h-full w-32 display justify-center ml-4 shadow-lg hover:bg-blue-500";function R(){var e=n.a.useState(null),t=Object(o.a)(e,2),a=t[0],l=t[1],r=function(e){var t={},a=0;return e.forEach((function(e){var l=e.prioriteediSoovitus,n=t[l];a+=1,t[l]=n?n+1:1})),t[Object.keys(t).length]=a,t}(M),s=D();return n.a.createElement("div",{className:v},n.a.createElement("div",{className:"w-4/5 md:w-full"},n.a.createElement("div",{className:"controls w-full h-14 mb-8 flex justify-between"},n.a.createElement(h,{summary:r}),n.a.createElement("div",{className:"ButtonController"},n.a.createElement("button",{className:K},"Uued"),n.a.createElement("button",{className:K},"Vaadatud"))),n.a.createElement(O,null,n.a.createElement(S,{"aria-controls":"panel1d-content",id:"panel1d-header"},n.a.createElement("div",{className:"flex w-full"},n.a.createElement("p",{className:"w-1/4 text-center"},"Nimi"),n.a.createElement("p",{className:"w-1/4 text-center"},"S\xfcmptom"),n.a.createElement("p",{className:"w-1/4 text-center"},"Esitamisest m\xf6\xf6das"),n.a.createElement("p",{className:"w-1/4 text-center"},"Prioriteet")))),n.a.createElement("div",{className:"shadow-md"},M.map((function(e,t){return n.a.createElement(O,{square:!0,expanded:a===t,onChange:(r=t,function(e,t){l(!!t&&r)}),key:e.nimi},n.a.createElement(S,{"aria-controls":"panel1d-content",id:"panel1d-header",expandIcon:n.a.createElement(y.a,null)},n.a.createElement("p",{className:"w-1/4 text-center"},e.nimi),n.a.createElement("p",{className:"w-1/4 text-center"},e.s\u00fcmptom),n.a.createElement("p",{className:"w-1/4 text-center"},"3 p\xe4eva"),n.a.createElement("p",{className:"w-1/4 text-center"},f[+e.prioriteediSoovitus])),n.a.createElement(C,null,n.a.createElement("div",null,"S\xf5duri kaebus:",e.p\u00f5hjus,n.a.createElement("div",null,n.a.createElement("div",{className:"ButtonController"},n.a.createElement("button",{className:K},"Kaebus"),n.a.createElement("button",{className:K},"Profiil"),n.a.createElement("button",{className:K},"Ajalugu"),n.a.createElement("button",{className:K},n.a.createElement(i.b,{to:"/kalender"},"Tunniplaan"))),n.a.createElement("div",null,n.a.createElement(w.a,{className:s.formControl},n.a.createElement(g.a,{id:"demo-simple-select-label"},"Eeldatav kestvus"),n.a.createElement(j.a,{labelId:"demo-simple-select-label",id:"demo-simple-select"},n.a.createElement(N.a,{value:10},"5 min"),n.a.createElement(N.a,{value:20},"10 min"),n.a.createElement(N.a,{value:30},"30 min")))),n.a.createElement("div",null,n.a.createElement(w.a,{className:s.formControl},n.a.createElement(g.a,{id:"demo-simple-select-label"},"Muuda prioriteeti"),n.a.createElement(j.a,{labelId:"demo-simple-select-label",id:"demo-simple-select"},n.a.createElement(N.a,{value:10},"0"),n.a.createElement(N.a,{value:20},"1"),n.a.createElement(N.a,{value:30},"2")))),n.a.createElement("div",{className:"ButtonController"},n.a.createElement("button",{className:K},"Kinnita"))))));var r})))))}var T=function(){return n.a.createElement("div",{className:"absolute top-0 h-24 w-full bg-blue-400 flex justify-between px-16 items-center"},n.a.createElement("h1",{className:"font-bold text-white text-5xl"},"MEDKIOSK"),n.a.createElement(i.b,{className:"font-bold text-white text-3xl hover:text-gray-300 underline",to:"/"},"Tagasi pealehele "))},P=a(192),q=a(105),B=(a(128),a(129),a(186)),V=a(101),I=a.n(V),J=a(52),W=a.n(J),Y=Object(x.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),width:"25ch"}}}})),A=I()({root:{backgroundColor:"red"}})(P.a),$=function(){Y();var e=Object(l.useState)(""),t=Object(o.a)(e,2),a=t[0],r=t[1],s=Object(l.useState)(""),c=Object(o.a)(s,2),i=c[0],m=c[1],u=Object(l.useState)(""),d=Object(o.a)(u,2),p=d[0],E=d[1],b=Object(l.useState)(null),f=Object(o.a)(b,2),h=f[0],x=f[1],N=Object(l.useState)(!1),w=Object(o.a)(N,2),j=w[0],k=w[1];return n.a.createElement("div",{className:v},n.a.createElement("div",{className:"flex flex-col items-center content-center bg-grey-200 w-1/2 h-full m-auto"},n.a.createElement("h1",{className:"mt-10"},"Taotlus"),n.a.createElement(P.a,{className:A,onChange:function(e){return r(e.target.value)},id:"standard-basic",label:"Nimi",fullWidth:!0,value:a}),n.a.createElement(P.a,{onChange:function(e){return m(e.target.value)},id:"standard-basic",label:"S\xfcmptomid",fullWidth:!0,multiline:!0,value:i}),n.a.createElement(P.a,{className:"material-ui-textfield",onChange:function(e){return E(e.target.value)},id:"standard-basic",label:"Kirjeldus",fullWidth:!0,multiline:!0,value:p}),n.a.createElement("div",{className:"flex justify-around w-full h-1/2 mt-20 items-start"},n.a.createElement("div",{className:"flex flex-col w-1/2"},n.a.createElement(g.a,null,"Vali ebasobiv kuup\xe4ev"),n.a.createElement(P.a,{onClick:function(){return k(!j)},id:"standard-read-only-input",value:null===h?"valimata":W()(h).format("DD/MM/YYYY"),InputProps:{readOnly:!0}}),j?n.a.createElement(q.a,{onChange:function(e){return x(e),void k(!1)},value:h,locale:"et-EE"}):n.a.createElement("button",{onClick:function(){return x(null)}},"T\xfchista valik")),n.a.createElement(B.a,{onClick:function(){console.log(a,i,p,h)},variant:"contained",color:"primary",className:"h-12"},"Saada"))))},H=a(84),z=(a(152),[{title:"R\xe4nnak",start:new Date(2020,9,11,15,30,0),end:new Date(2020,9,11,20,30,0)},{title:"\xd5ppus",start:new Date(2020,9,11,21,0,0),end:new Date(2020,9,11,22,0,0)},{title:"R\xe4nnak",start:new Date(2020,9,13,11,30,0),end:new Date(2020,9,13,14,30,0)},{title:"\xd5ppus",start:new Date(2020,9,12,15,0,0),end:new Date(2020,9,12,17,0,0)}]),U=Object(H.b)(W.a),F={events:[{start:W()().toDate(),end:W()().add(1,"days").toDate(),title:"Some title"}]},G=function(){var e=Object(l.useState)(F),t=Object(o.a)(e,2);t[0],t[1];return n.a.createElement("div",{className:v+" flex-col"},n.a.createElement("div",{className:"shadow-md"},n.a.createElement(H.a,{localizer:U,startAccessor:"start",endAccessor:"end",style:{height:700},events:z,views:["month","day","agenda"],messages:{month:"Kuu",day:"P\xe4ev",today:"T\xe4na",agenda:"P\xe4evik",next:">",previous:"<"}})))},L="rounded bg-green-200 w-1/4 h-32 m-8 flex justify-center items-center rounded shadow-lg",Q=function(){var e=Object(l.useState)(0),t=Object(o.a)(e,2),a=t[0],r=t[1],s={0:{question:"Peale mida terviseh\xe4da tekkis?",answers:["R\xe4nnakut","Sporditegevust","Muu"]},1:{question:"Mis terviseh\xe4da on?",answers:["Jalg valutab","Jalal on villid","Muu"]},2:{question:"Jalavalu on peale r\xe4nnakut levinud ja tihti leebe probleem. M\xe4\xe4ri jalale kreemi. Kui valu muutub talumatuks v\xf5i mitu p\xe4eva j\xe4rjest, siis v\xf5ta uuesti \xfchendust.",answers:["Vigastus pole t\xf5sine - l\xf5peta k\xfcsimustiku t\xe4itmine","Vigastus vajab arsti abi - t\xe4ida lisak\xfcsimustik"]}};return 2===a?n.a.createElement("div",{className:"w-full h-auto flex justify-center items-center flex-col"},n.a.createElement("h1",null,s[a].question),n.a.createElement(i.b,{style:{borderRadius:"25px"},className:L,to:"/"},n.a.createElement("p",null,"Terviseprobleem pole t\xf5sine - liigu tagasi avalehele")),n.a.createElement(i.b,{style:{borderRadius:"25px"},className:L,to:"/form"},n.a.createElement("p",null,"Vajan arsti abi - t\xe4ida k\xfclastuseks k\xfcsimustik"))):n.a.createElement("div",{className:"w-full h-auto flex justify-center items-center flex-col"},n.a.createElement("h1",null,s[a].question),n.a.createElement("div",{className:"w-full flex justify-center flex-col items-center"},n.a.createElement("button",{style:{borderRadius:"25px"},onClick:function(){return r(a+1)},className:L},n.a.createElement("p",null,s[a].answers[0])),n.a.createElement("button",{style:{borderRadius:"25px"},onClick:function(){return r(a+1)},className:L},n.a.createElement("p",null,s[a].answers[1])),n.a.createElement("button",{style:{borderRadius:"25px"},onClick:function(){return r(a+1)},className:L},n.a.createElement("p",null,s[a].answers[2]))))};var X=function(){return n.a.createElement("div",{className:"h-screen"},n.a.createElement(T,null),n.a.createElement("div",{className:"pt-24 h-full"},n.a.createElement(c.c,null,n.a.createElement(c.a,{path:"/form"},n.a.createElement($,null)),n.a.createElement(c.a,{path:"/kalender"},n.a.createElement(G,null)),n.a.createElement(c.a,{path:"/arst"},n.a.createElement(R,null)),n.a.createElement(c.a,{path:"/question"},n.a.createElement(Q,null)),n.a.createElement(c.a,{path:"/"},n.a.createElement(u,null)),n.a.createElement(c.a,{path:"/kalender"},n.a.createElement(G,null)))))};s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(i.a,null,n.a.createElement(X,null))),document.getElementById("root"))}},[[117,1,2]]]);
//# sourceMappingURL=main.74d097f4.chunk.js.map