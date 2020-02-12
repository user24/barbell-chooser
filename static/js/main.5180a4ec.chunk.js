(this["webpackJsonpbarbell-chooser"]=this["webpackJsonpbarbell-chooser"]||[]).push([[0],{13:function(e,r,t){e.exports=t(20)},18:function(e,r,t){},19:function(e,r,t){},20:function(e,r,t){"use strict";t.r(r);var n=t(0),a=t.n(n),l=t(10),s=t.n(l),i=(t(9),t(12)),o=t(1),u=t(5),c=t(3),g=t(2),h=t(4),p=t(6),m=t(7),b=t(11),k={NONE:"NONE",YES:"YES",IPF:"IPF",IWF:"IWF",DUAL:"DUAL"},d={LIGHT:"LIGHT",MEDIUM:"MEDIUM",HARD:"HARD",AGGRESSIVE:"AGGRESSIVE"},f={active:!0,name:"",url:null,image:null,price:null,diameter:null,centreKnurl:null,knurlMarks:null,knurlDepth:null,psi:null,kgRating:null,finishes:null,bearings:null,kgWeight:20,notes:null,warrantyMonths:null,sleeves:null},E=function(e){function r(){return Object(o.a)(this,r),Object(c.a)(this,Object(g.a)(r).apply(this,arguments))}return Object(h.a)(r,e),r}(Object(b.a)(f)),w=function(e){var r=Object(p.a)({},e);return r.knurlDepth&&(r.knurlDepth=d[r.knurlDepth.toUpperCase()]||null),r.knurlMarks&&(r.knurlMarks=k[r.knurlMarks.toUpperCase()]||null),new E(r)},v=Object.keys(m).map((function(e){var r=Object(p.a)({},m[e]);return r.name=e,w(r)})),B=function(e){return null!==e?e:"?"},M=function(e){return e.replace(/\w\S*/g,(function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()}))},y=function(e){function r(){return Object(o.a)(this,r),Object(c.a)(this,Object(g.a)(r).apply(this,arguments))}return Object(h.a)(r,e),Object(u.a)(r,[{key:"render",value:function(){var e=this.props.barbell;return a.a.createElement("tr",null,a.a.createElement("td",null,e.image?a.a.createElement("img",{className:"bar-image",src:"./assets/".concat(e.image),alt:e.name}):"?"),a.a.createElement("td",null,a.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer external"},B(e.name))),a.a.createElement("td",null,e.price?"\xa3".concat(e.price):"?"),a.a.createElement("td",null,e.diameter?"".concat(e.diameter,"mm"):"?"),a.a.createElement("td",null,e.psi||(e.kgRating?"".concat(e.kgRating,"kg"):"?")),a.a.createElement("td",null,e.knurlDepth?M(e.knurlDepth):"?"),a.a.createElement("td",null,function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"\u2713",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"x",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"?";return!0===e?r:!1===e?t:n}(e.centreKnurl)),a.a.createElement("td",null,B(e.knurlMarks)),a.a.createElement("td",null,B(e.bearings)),a.a.createElement("td",null,e.sleeves?M(e.sleeves):"?"),a.a.createElement("td",null,B(e.finishes)),a.a.createElement("td",null,e.warrantyMonths?"".concat(e.warrantyMonths," mo"):"?"),a.a.createElement("td",null,e.notes?e.notes:"-"))}}]),r}(n.PureComponent),P=(t(18),function(e){function r(e){var t;return Object(o.a)(this,r),(t=Object(c.a)(this,Object(g.a)(r).call(this,e))).setSortProp=function(e){var r={};r.sortProp=e,r.sortAsc=t.state.sortAsc,t.state.sortProp===r.sortProp?r.sortAsc=!t.state.sortAsc:r.sortAsc=!0,t.setState(r)},t.sortBars=function(){var e=t.state.sortProp,r=t.state.sortAsc?1:-1,n=t.state.sortAsc?-1:1;return Object(i.a)(v).filter((function(e){return e.active})).sort((function(t,a){return null===t[e]?n:null===a[e]?r:t[e]===a[e]?t.name>a.name?r:n:t[e]>a[e]?r:n}))},t.state={sortProp:"price",sortAsc:!0},t}return Object(h.a)(r,e),Object(u.a)(r,[{key:"render",value:function(){var e=this,r=this.sortBars();return a.a.createElement(n.Fragment,null,a.a.createElement("h1",null,"Barbell Comparison Chart"),a.a.createElement("div",null,"Mostly powerlifting barbells at present, but will eventually expand the list to include everything I can find."),a.a.createElement("table",{className:"barbell-table table table-striped"},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null),a.a.createElement("th",null,a.a.createElement("span",{className:"header-trigger",onClick:function(){return e.setSortProp("name")}},"Name")),a.a.createElement("th",null,a.a.createElement("span",{className:"header-trigger",onClick:function(){return e.setSortProp("price")}},"Price")),a.a.createElement("th",null,a.a.createElement("span",{className:"header-trigger",onClick:function(){return e.setSortProp("diameter")}},"Diameter")),a.a.createElement("th",null,a.a.createElement("span",{className:"header-trigger",onClick:function(){return e.setSortProp("psi")}},"PSI / kg rating")),a.a.createElement("th",null,a.a.createElement("span",{className:"header-trigger",onClick:function(){return e.setSortProp("knurlDepth")}},"Knurl")),a.a.createElement("th",null,a.a.createElement("span",{className:"header-trigger",onClick:function(){return e.setSortProp("centreKnurl")}},"Centre Knurl?")),a.a.createElement("th",null,a.a.createElement("span",{className:"header-trigger",onClick:function(){return e.setSortProp("knurlMarks")}},"Marks")),a.a.createElement("th",null,a.a.createElement("span",{className:"header-trigger",onClick:function(){return e.setSortProp("bearings")}},"Bearings")),a.a.createElement("th",null,a.a.createElement("span",{className:"header-trigger",onClick:function(){return e.setSortProp("sleeves")}},"Sleeves")),a.a.createElement("th",null,a.a.createElement("span",{className:"header-trigger",onClick:function(){return e.setSortProp("finishes")}},"Finishes")),a.a.createElement("th",null,a.a.createElement("span",{className:"header-trigger",onClick:function(){return e.setSortProp("warrantyMonths")}},"Warranty")),a.a.createElement("th",null,a.a.createElement("span",{className:"header-trigger",onClick:function(){return e.setSortProp("notes")}},"Notes")))),a.a.createElement("tbody",null,r.map((function(e){return a.a.createElement(y,{key:e.name,barbell:e})})))))}}]),r}(n.PureComponent));t(19);var S=function(){return a.a.createElement(P,null)};s.a.render(a.a.createElement(S,null),document.getElementById("root"))},7:function(e){e.exports=JSON.parse('{"Extreme Fitness Tiger Power Bar Pro ":{"url":"https://www.extremefitness.co.uk/the-tiger-power-bar","image":"silverback.png","price":225,"diameter":29,"centreKnurl":true,"knurlMarks":"IPF","knurlDepth":"aggressive","psi":216,"finishes":"Chrome","bearings":"Bronze Bushings. v. low spin","sleeves":"snap ring","notes":"I have this bar and it is excellent. Price includes EXTREME10 10% discount.","warrantyMonths":12},"Again Faster Weight Training Barbell":{"url":"https://againfaster.eu/en_gb/weightlifting-bars-plates/barbells/again-faster-weight-training-barbell.html","image":"again.png","price":90,"diameter":30,"centreKnurl":true,"knurlMarks":"yes","knurlDepth":"medium","kgRating":300,"finishes":"Chrome","sleeves":"bolted","notes":"Knurl marks look like IWF but not sure.","warrantyMonths":12},"Strength Shop 2028 Bar":{"url":"https://www.strengthshop.co.uk/weights-bars/bars/olympic-bars/olympic-bar-chrome.html","image":"2028.png","price":120,"diameter":28,"centreKnurl":true,"knurlMarks":"ipf","psi":165,"kgRating":250,"finishes":"Chrome, Black Zinc","bearings":"Bushings and Bearings","sleeves":"bolted","warrantyMonths":6},"Wolverson Power Bar":{"url":"https://wolverson-fitness.co.uk/collections/powerlifting/products/wolverson-power-bar","image":"wolv.png","price":135,"diameter":29,"centreKnurl":true,"knurlMarks":"ipf","knurlDepth":"hard","psi":211,"finishes":"Chrome","bearings":"Needle Bearings","sleeves":"bolted","notes":"Price includes WOLFPACK 10% discount. Details confirmed over email Jan 2020."},"Extreme Fitness Royal Cerakote Bar":{"url":"https://www.extremefitness.co.uk/royal-20kg-barbell","image":"royal.png","price":126,"diameter":28,"centreKnurl":false,"knurlMarks":"dual","knurlDepth":"light","psi":190,"kgRating":700,"finishes":"Cerakote","bearings":"Bearings with Bronze bushings","sleeves":"snap ring","notes":"Price includes EXTREME10 10% discount.","warrantyMonths":12},"Again Faster Evolution Barbell":{"url":"https://againfaster.eu/en_gb/again-faster-evolution-barbell.html","image":"again-evo.png","price":148.5,"diameter":28,"centreKnurl":false,"knurlMarks":"dual","psi":209,"finishes":"Zinc","bearings":"Bronze & Steel bushings, Ball bearings","sleeves":"snap ring","warrantyMonths":12},"Mirafit M3":{"url":"https://www.mirafit.co.uk/mirafit-m3-7ft-20kg-olympic-barbell-silver-black.html","image":"mirafitm3.png","price":150,"diameter":28,"centreKnurl":false,"knurlMarks":"dual","psi":218,"kgRating":680,"finishes":"Hard Chrome or Black","bearings":"Copper bushings, 4x needle & 4x ball bearings"},"Saber Fitness 20kg barbell":{"url":"https://www.saberfit.org/product-page/20kg-barbell","image":"saber.png","price":149,"diameter":28.5,"centreKnurl":false,"knurlMarks":"dual","psi":190,"kgRating":680,"finishes":"Chrome","bearings":"4x bearings","warrantyMonths":12},"Strength Shop 2029 Power Bar":{"url":"https://www.strengthshop.co.uk/weights-bars/bars/olympic-bars/strength-shop-2029-bar-chrome.html","image":"2029.png","price":150,"diameter":29,"centreKnurl":true,"knurlMarks":"ipf","psi":185,"kgRating":260,"finishes":"Chrome, Zinc","bearings":"Needle Bearings","sleeves":"bolted","warrantyMonths":6},"ATX Eco Power Bar":{"url":"https://www.thegymrevolution.co.uk/index.php/atx-economy-power-bar.html","image":"atxeco.png","price":185,"diameter":28.5,"centreKnurl":false,"knurlMarks":"dual","knurlDepth":"medium","psi":185,"kgRating":500,"finishes":"Hard Chrome","bearings":"Brass Bushings","sleeves":"snap ring"},"Bells of Steel Power bar":{"url":"https://www.thegymrevolution.co.uk/index.php/atx-economy-power-bar.html","image":"bells.png","price":189,"diameter":29,"centreKnurl":true,"knurlMarks":"IPF","knurlDepth":"aggressive","psi":210,"finishes":"Bare Steel","bearings":"Brass Bushings","sleeves":"snap ring","notes":"Note the unusual thinner collars for MOAR WEIGHT."},"Strength Shop Bastard Bar":{"url":"https://www.strengthshop.co.uk/weights-bars/bars/olympic-bars/strengthshop-bastard-bar-with-centre-knurling.html","image":"bastard.png","price":200,"diameter":28,"knurlMarks":"dual","knurlDepth":"aggressive","psi":210,"finishes":"Chrome, Black, Red, Blue","bearings":"Brass Bushings, needle bearing and ball bearing","sleeves":"bolted","notes":"Available with or without centre knurl. Sleeves are bolted behind the end caps.","warrantyMonths":6},"Extreme Fitness Tiger Bar":{"active":false,"url":"https://www.strengthshop.co.uk/weights-bars/bars/olympic-bars/strengthshop-bastard-bar-with-centre-knurling.html","image":"tiger.png","price":180,"diameter":29,"knurlMarks":"IPF","knurlDepth":"aggressive","centreKnurl":true,"psi":220,"finishes":"Black Zinc","bearings":"Bronze Bushings","sleeves":"Snap Ring","warrantyMonths":12,"notes":"Price includes EXTREME10 10% discount."},"Again Faster Team Barbell":{"url":"https://againfaster.eu/en_gb/again-faster-team-barbell.html","image":"again-team.png","price":205,"diameter":28,"centreKnurl":false,"knurlMarks":"dual","psi":209,"finishes":"Zinc, Black","bearings":"Bushings, Needle & Ball Bearings","sleeves":"snap ring","warrantyMonths":12}}')}},[[13,1,2]]]);
//# sourceMappingURL=main.5180a4ec.chunk.js.map