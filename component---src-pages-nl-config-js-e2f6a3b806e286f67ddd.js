(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{v1ff:function(e,t,n){"use strict";n.r(t);n("a1Th"),n("XfO3"),n("HEwt"),n("rE2o"),n("ioFf"),n("VRzm"),n("rGqo"),n("yt8O"),n("Btvt"),n("f3/d");var a=n("o0o1"),r=n.n(a),i=(n("ls82"),n("q1tI")),o=n.n(i),s=n("sBL/"),c=n.n(s),l=n("3r0M"),u=n("XyXI"),m=n("iUi7"),d=n("/Ina"),h=n("wX7S"),p=n("iY3s"),f=n("Skks"),y=n("Pr5a"),b=n("U5J5");function g(e){return function(e){if(Array.isArray(e))return v(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function w(e,t,n,a,r,i,o){try{var s=e[i](o),c=s.value}catch(l){return void n(l)}s.done?t(c):Promise.resolve(c).then(a,r)}function k(e){return function(){var t=this,n=arguments;return new Promise((function(a,r){var i=e.apply(t,n);function o(e){w(i,a,r,o,s,"next",e)}function s(e){w(i,a,r,o,s,"throw",e)}o(void 0)}))}}function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var T={mainPadding:{padding:"0px 2em"},mainSidePadding:{padding:"10px 2em"},mainPdf:{display:"flex",justifyContent:"center"},mainTable:{backgroundColor:"#fff",border:"1px solid #d8e2f0",borderRadius:"4px",boxShadow:"0 0 10px 0 rgba(19,29,41,.05)",position:"relative",padding:"0em 3em 2em"},backButton:{cusor:"pointer"},label:{fontWeight:"bold"}},S=function(e){var t,n;function a(){var t;return(t=e.call(this)||this).microsoftTeams&&t.microsoftTeams.initialize(),t.state={apiKey:"",adminId:"",admins:null,admin:null,contacts:null,contact:null,keys:[],new:!1},t.handleChange=t.handleChange.bind(E(t)),t.submit=t.submit.bind(E(t)),t.getOptions=t.getOptions.bind(E(t)),t.handleContact=t.handleContact.bind(E(t)),t.save=t.save.bind(E(t)),t.getAdmin=c()(t.getAdmin,2e3).bind(E(t)),t.handleToken=t.handleToken.bind(E(t)),t.handleAdmin=t.handleAdmin.bind(E(t)),t}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=a.prototype;return i.getAdmin=function(){var e=k(r.a.mark((function e(t){var n,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://moneybirdhandlerproxy.azurewebsites.net/api/MoneyBirdProxy",{mode:"cors",method:"POST",body:JSON.stringify({method:"GET",path:"administrations.json",key:t})});case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,console.log({json:a}),a.error?this.setState({admins:!1}):this.setState({admins:a}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,this,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),i.componentDidMount=function(){var e=this;this.microsoftTeams=window?window.microsoftTeams:null,this.microsoftTeams.initialize(),this.microsoftTeams.getContext(function(){var t=k(r.a.mark((function t(n){var a,i,o;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.tid,console.log("INCONTEXT",a),t.prev=2,t.next=5,fetch("https://moneybirdhandlerproxy.azurewebsites.net/api/key/"+a,{mode:"cors",method:"GET"});case 5:return i=t.sent,t.next=8,i.json();case 8:o=t.sent,console.log({json:o}),e.setState({keys:o.map((function(e){return e.key}))}),t.next=17;break;case 13:t.prev=13,t.t0=t.catch(2),console.log("BOOMER!"),console.log(t.t0);case 17:case"end":return t.stop()}}),t,null,[[2,13]])})));return function(e){return t.apply(this,arguments)}}())},i.getOptions=function(){return this.state.contacts.map((function(e){return{content:e.company_name,value:e.id}}))},i.handleContact=function(e,t){this.setState({contact:t.value},this.save)},i.handleAdmin=function(e,t){this.setState({admin:t.value}),this.submit(t.value)},i.handleChange=function(e){var t;this.setState(((t={})[e.target.name]=e.target.value,t))},i.handleToken=function(e){e&&(this.setState({apiKey:e.target.value}),this.getAdmin(e.target.value))},i.submit=function(){var e=k(r.a.mark((function e(t){var n,a,i=this;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.value,console.log(n),a=this.state.apiKey,this.microsoftTeams.initialize(),this.microsoftTeams.getContext(function(){var e=k(r.a.mark((function e(t){var o,s,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.tid,e.prev=1,e.next=4,fetch("https://moneybirdhandlerproxy.azurewebsites.net/api/MoneyBirdProxy",{mode:"cors",method:"POST",body:JSON.stringify({method:"GET",path:n+"/contacts.json",key:a,tid:o})});case 4:return s=e.sent,e.next=7,s.json();case 7:c=e.sent,console.log({json:c}),i.setState({contacts:c}),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),console.log("BOOM!"),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}());case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),i.save=function(){var e=this,t=this.state,n=t.apiKey,a=t.admin.value,r=t.contact;this.microsoftTeams.initialize(),this.microsoftTeams.settings.setValidityState(!0),this.microsoftTeams.settings.registerOnSaveHandler((function(t){e.microsoftTeams.settings.setSettings({websiteUrl:"https://jp5525.github.io/teams-demo/nl/",contentUrl:"https://jp5525.github.io/teams-demo/nl/",entityId:JSON.stringify({apiKey:n,adminId:a,contact:r}),suggestedDisplayName:"MoneyBird Invoices"}),t.notifySuccess()}))},i.render=function(){var e=this,t=this.state,n=t.contacts,a=t.contact,r=t.admins,i=t.admin,s=t.apiKey,c=t.keys;return o.a.createElement(l.a,{theme:u.themes.teams},o.a.createElement("div",{style:T.mainPadding},o.a.createElement("div",{style:T.mainTable},o.a.createElement(m.a,{content:"MoneyBird Opstelling"}),o.a.createElement(d.a,{gap:"gap.small",vAlign:"center",hAlign:"start"},o.a.createElement(h.a,{justifyContent:"center"},o.a.createElement("form",{onSubmit:this.submit,style:{width:"100%"}},o.a.createElement("label",{style:T.label},"API Token")," ",o.a.createElement("br",null),o.a.createElement("span",null,"TDit is het API-token voor u MoneyBird-account. Je kunt er een genereren ",o.a.createElement("a",{target:"_blank",href:"https://moneybird.com/user/applications/new"},"hier")," voor persoonlijk gebruik."),0==r?o.a.createElement(o.a.Fragment,null," ",o.a.createElement("br",null),o.a.createElement(p.a,{content:"API-token niet geldig",icon:{as:y.a}})):null,r?o.a.createElement(o.a.Fragment,null," ",o.a.createElement("br",null),o.a.createElement(p.a,{content:"API-token IS geldig",icon:{as:b.a}})):null,o.a.createElement(f.a,{items:c,placeholder:"API Token",onChange:this.handleToken,name:"apiKey",id:"apiKey",fluid:!0,search:!0,noResultsMessage:{content:"Add "+s+"...",onClick:function(t){e.setState({new:!0,keys:[s].concat(g(c))})},style:{cursor:"pointer"}}}),o.a.createElement("br",null),o.a.createElement("label",{style:T.label},"Toediening")," ",o.a.createElement("br",null),o.a.createElement("span",null,"Dit is de administratie van waaruit u contacten wilt bekijken"),o.a.createElement(f.a,{items:r?r.map((function(e){return{content:e.name,value:e.id}})):[],value:i?i.content:null,placeholder:"Administratie",onChange:this.handleAdmin,name:"Admin",disabled:!r,fluid:!0}),o.a.createElement("br",null),o.a.createElement("label",{style:T.label},"Contact")," ",o.a.createElement("br",null),o.a.createElement("span",null,"De contactpersoon wiens facturen verschijnen op de factuurtabs"),o.a.createElement(f.a,{items:n?this.getOptions():[],value:a?a.content:null,placeholder:"Contacts",onChange:this.handleContact,name:"contact",disabled:!n})))))))},a}(o.a.Component);t.default=S}}]);
//# sourceMappingURL=component---src-pages-nl-config-js-e2f6a3b806e286f67ddd.js.map