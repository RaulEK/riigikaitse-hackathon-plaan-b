(this["webpackJsonpplaan-b"]=this["webpackJsonpplaan-b"]||[]).push([[0],{106:function(e,t,a){e.exports=a(141)},111:function(e,t,a){},117:function(e,t,a){},141:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(6),c=a.n(r),s=(a(111),a(12)),i=a(30),o="rounded bg-green-200 w-1/4 h-32 m-8 flex justify-center items-center rounded shadow-lg",m=function(){return l.a.createElement("div",{className:"w-full h-auto flex justify-center items-center flex-col"},l.a.createElement("h1",null,"Tere tulemas Plan-B s\xfcsteemi!"),l.a.createElement("div",{className:"w-full flex justify-center flex-col items-center"},l.a.createElement(i.b,{style:{borderRadius:"25px"},className:o,to:"/form"},l.a.createElement("p",null,"Sisesta avaldus")),l.a.createElement(i.b,{style:{borderRadius:"25px"},className:o,to:"/kalender"},l.a.createElement("p",null,"Vaata kalendrit")),l.a.createElement(i.b,{style:{borderRadius:"25px"},className:o,to:"/arst"},l.a.createElement("p",null,"Vaata kaebusi"))))},u=a(26),d=a(5),p=a(175),f=a(176),b=a(171),E=["K\xf5rge","Keskmine","Madal","Kokku"],x=function(e){var t=e.summary;return l.a.createElement("div",{style:{borderRadius:"25px"},className:"w-4/5 lg:w-2/5 h-full border rounded px-8 py-1 flex justify-around text-center"},Object.keys(t).map((function(e){return l.a.createElement("div",{key:e,className:"flex flex-col justify-center h-full"},l.a.createElement("p",{className:"text-lg font-bold"},t[e]),l.a.createElement("p",{className:"text-md text-gray-400"},E[+e]))})))},v=Object(d.a)({root:{border:"1px solid rgba(0, 0, 0, .125)",boxShadow:"none","&:not(:last-child)":{borderBottom:0},"&:before":{display:"none"},"&$expanded":{margin:"auto"}},expanded:{}})(p.a),h=Object(d.a)({root:{backgroundColor:"rgba(0, 0, 0, .03)",borderBottom:"1px solid rgba(0, 0, 0, .125)",marginBottom:-1,minHeight:56,"&$expanded":{minHeight:56}},content:{"&$expanded":{margin:"12px 0"}},expanded:{}})(f.a),g=Object(d.a)((function(e){return{root:{padding:e.spacing(2)}}}))(b.a),w=[{nimi:"Mart Mets","s\xfcmptom":"Peavalu","p\xf5hjus":"Kukkusin pea ees vastu betooni",prioriteediSoovitus:"2"},{nimi:"Madis Malev","s\xfcmptom":"Kopsud valutavad","p\xf5hjus":"Peale viimast r\xe4nnakut k\xfclmetasin",prioriteediSoovitus:"1"},{nimi:"Toomas S\xf5dur","s\xfcmptom":"V\xe4ike haav","p\xf5hjus":"Kriimustasin ja sooviksin plaastrit",prioriteediSoovitus:"0"}],N="text-xl py-1  border rounded bg-blue-400 text-white h-full w-32 display justify-center ml-4";function j(){var e=l.a.useState(null),t=Object(u.a)(e,2),a=t[0],n=t[1],r=function(e){var t={},a=0;return e.forEach((function(e){var n=e.prioriteediSoovitus,l=t[n];a+=1,t[n]=l?l+1:1})),t[Object.keys(t).length]=a,t}(w);return l.a.createElement("div",{className:"lg:px-32 xl:px-64 flex justify-center px-8"},l.a.createElement("div",{className:"w-4/5 md:w-full"},l.a.createElement("div",{className:"controls w-full h-14 mb-8 flex justify-between"},l.a.createElement(x,{summary:r}),l.a.createElement("div",{className:"ButtonController"},l.a.createElement("button",{className:N},"Uued"),l.a.createElement("button",{className:N},"Vaadatud"))),l.a.createElement(v,null,l.a.createElement(h,{"aria-controls":"panel1d-content",id:"panel1d-header"},l.a.createElement("div",{className:"flex w-full"},l.a.createElement("p",{className:"w-1/4 text-center"},"Nimi"),l.a.createElement("p",{className:"w-1/4 text-center"},"S\xfcmptom"),l.a.createElement("p",{className:"w-1/4 text-center"},"Esitamisest m\xf6\xf6das"),l.a.createElement("p",{className:"w-1/4 text-center"},"Prioriteet")))),w.map((function(e,t){return l.a.createElement(v,{square:!0,expanded:a===t,onChange:(r=t,function(e,t){n(!!t&&r)}),key:e.nimi},l.a.createElement(h,{"aria-controls":"panel1d-content",id:"panel1d-header"},l.a.createElement("p",{className:"w-1/4 text-center"},e.nimi),l.a.createElement("p",{className:"w-1/4 text-center"},e.s\u00fcmptom),l.a.createElement("p",{className:"w-1/4 text-center"},"3 p\xe4eva"),l.a.createElement("p",{className:"w-1/4 text-center"},e.prioriteediSoovitus)),l.a.createElement(g,null,l.a.createElement("div",null,"S\xf5duri kaebus:",e.p\u00f5hjus,l.a.createElement("button",null,"Kinnita"))));var r}))))}var y=function(){return l.a.createElement("div",{className:"absolute top-0 h-24 w-full bg-blue-400 flex justify-between px-16 items-center"},l.a.createElement("h1",{className:"font-bold text-white text-5xl"},"Plan-B"),l.a.createElement(i.b,{className:"font-bold text-white text-3xl",to:"/"},"Tagasi"))},k=a(172),O=a(174),S=a(96),D=(a(116),a(117),a(173)),C=a(177),M=a(92),K=a.n(M),P=a(48),B=a.n(P),R=Object(k.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),width:"25ch"}}}})),T=K()({root:{backgroundColor:"red"}})(O.a),V=function(){R();var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),s=Object(u.a)(c,2),i=s[0],o=s[1],m=Object(n.useState)(""),d=Object(u.a)(m,2),p=d[0],f=d[1],b=Object(n.useState)(null),E=Object(u.a)(b,2),x=E[0],v=E[1],h=Object(n.useState)(!1),g=Object(u.a)(h,2),w=g[0],N=g[1];return l.a.createElement("div",{className:"m-auto bg-gray-300 h-full"},l.a.createElement("div",{className:"flex flex-col items-center content-center bg-grey-200 w-1/2 h-full m-auto"},l.a.createElement("h1",{className:"mt-10"},"Taotlus"),l.a.createElement(O.a,{className:T,onChange:function(e){return r(e.target.value)},id:"standard-basic",label:"Nimi",fullWidth:!0,value:a}),l.a.createElement(O.a,{onChange:function(e){return o(e.target.value)},id:"standard-basic",label:"S\xfcmptomid",fullWidth:!0,multiline:!0,value:i}),l.a.createElement(O.a,{className:"material-ui-textfield",onChange:function(e){return f(e.target.value)},id:"standard-basic",label:"Kirjeldus",fullWidth:!0,multiline:!0,value:p}),l.a.createElement("div",{className:"flex justify-around w-full h-1/2 mt-20 items-start"},l.a.createElement("div",{className:"flex flex-col w-1/2"},l.a.createElement(C.a,null,"Vali ebasobiv kuup\xe4ev"),l.a.createElement(O.a,{onClick:function(){return N(!w)},id:"standard-read-only-input",value:null===x?"valimata":B()(x).format("DD/MM/YYYY"),InputProps:{readOnly:!0}}),w?l.a.createElement(S.a,{onChange:function(e){return v(e),void N(!1)},value:x,locale:"et-EE"}):l.a.createElement("button",{onClick:function(){return v(null)}},"T\xfchista valik")),l.a.createElement(D.a,{onClick:function(){console.log(a,i,p,x)},variant:"contained",color:"primary",className:"h-12"},"Saada"))))},Y=a(79),W=(a(140),[{title:"R\xe4nnak",start:new Date(2020,9,11,15,30,0),end:new Date(2020,9,11,20,30,0)},{title:"\xd5ppus",start:new Date(2020,9,11,21,0,0),end:new Date(2020,9,11,22,0,0)},{title:"R\xe4nnak",start:new Date(2020,9,13,11,30,0),end:new Date(2020,9,13,14,30,0)},{title:"\xd5ppus",start:new Date(2020,9,12,15,0,0),end:new Date(2020,9,12,17,0,0)}]),$=Object(Y.b)(B.a),A={events:[{start:B()().toDate(),end:B()().add(1,"days").toDate(),title:"Some title"}]},H=function(){var e=Object(n.useState)(A),t=Object(u.a)(e,2);t[0],t[1];return l.a.createElement("div",null,l.a.createElement("h1",{className:"font-bold text-dark text-2xl"},"Mart Mets"),l.a.createElement(Y.a,{localizer:$,startAccessor:"start",endAccessor:"end",style:{height:500},events:W,views:["month","day","agenda"],messages:{month:"Kuu",day:"P\xe4ev",today:"T\xe4na",agenda:"P\xe4evik",next:">",previous:"<"}}))};var I=function(){return l.a.createElement("div",{className:"h-screen"},l.a.createElement(y,null),l.a.createElement("div",{className:"pt-24 h-full"},l.a.createElement(s.c,null,l.a.createElement(s.a,{path:"/form"},l.a.createElement(V,null)),l.a.createElement(s.a,{path:"/kalender"},l.a.createElement(H,null)),l.a.createElement(s.a,{path:"/arst"},l.a.createElement(j,null)),l.a.createElement(s.a,{path:"/"},l.a.createElement(m,null)))))};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(i.a,null,l.a.createElement(I,null))),document.getElementById("root"))}},[[106,1,2]]]);
//# sourceMappingURL=main.f3baa4e3.chunk.js.map