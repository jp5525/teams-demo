(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"0chk":function(e,t,n){"use strict";n.r(t);n("f3/d"),n("a1Th"),n("XfO3"),n("HEwt"),n("rE2o"),n("ioFf"),n("VRzm"),n("KKXr"),n("rGqo"),n("yt8O"),n("Btvt");var r=n("o0o1"),a=n.n(r),o=(n("ls82"),n("q1tI")),i=n.n(o),s=n("3r0M"),c=n("XyXI"),l=n("iUi7"),u=n("/Ina"),d=n("wX7S"),p=n("iY3s"),m=n("Skks"),h=n("WZt7");function f(e){return function(e){if(Array.isArray(e))return y(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function b(e,t,n,r,a,o,i){try{var s=e[o](i),c=s.value}catch(l){return void n(l)}s.done?t(c):Promise.resolve(c).then(r,a)}function g(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){b(o,r,a,i,s,"next",e)}function s(e){b(o,r,a,i,s,"throw",e)}i(void 0)}))}}function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var v=function(e){return null==e||0==e.length},w={mainPadding:{padding:"0px 2em"},mainSidePadding:{padding:"10px 2em"},mainPdf:{display:"flex",justifyContent:"center"},mainTable:{backgroundColor:"#fff",border:"1px solid #d8e2f0",borderRadius:"4px",boxShadow:"0 0 10px 0 rgba(19,29,41,.05)",position:"relative",padding:"0em 3em 2em"},backButton:{cusor:"pointer"},label:{fontWeight:"bold"}},E={en:{heading:"Moneybird Configuration",apiSection:{title:i.a.createElement("label",{style:w.label},"API Token"),description:i.a.createElement("span",null,"This is the API Token for you MoneyBird Account. You can generate one ",i.a.createElement("a",{target:"_blank",href:"https://moneybird.com/user/applications/new"},"here")," for personal use."),succsess:"API Token is vaild",fail:"API Token NOT vaild",placeholder:"API Token",show:"Click to choose another api key"},contactSection:{title:i.a.createElement("label",{style:w.label},"Contact"),description:i.a.createElement("span",null,"The contact whos data will show up on the tab"),placeholder:"Choose a Contact"},typeSection:{title:i.a.createElement("label",{style:w.label},"Data Type"),description:i.a.createElement("span",null,"The type of data to show on the tab")},deleteDialog:{cancel:"Cancel",confirm:"Yes",header:"Delete API Key",message:function(e){return"Are you sure you want to delete "+e}},tabs:["Invoices","Quotes"]},nl:{heading:"Moneybird Koppelen",apiSection:{title:i.a.createElement("label",{style:w.label},"API token invoeren"),description:i.a.createElement("span",null,"Vul hier een API-token in van je Moneybird account. Je kunt ",i.a.createElement("a",{target:"_blank",href:"https://moneybird.com/user/applications/new"},"hier")," een API-token genereren. Vul een naam in die herkenbaar is voor deze connectie, bijvoorbeeld ‘Microsoft Teams Integratie’. Kies voor ‘API token voor persoonlijk gebruik’ en geef toegang voor alle onderdelen. Vervolgens verschijnt er een API-token in beeld. Vul deze hieronder in."),succsess:"API-token is geldig",fail:"API-token niet geldig",placeholder:"API token invoeren",show:"Klik om een ​​andere API-sleutel te kiezen"},contactSection:{title:i.a.createElement("label",{style:w.label},"Contact"),description:i.a.createElement("span",null,"Selecteer de Contact waarvan je de gegevens wilt tonen in de Tab."),placeholder:"Kies een Contact"},typeSection:{title:i.a.createElement("label",{style:w.label},"Data Type"),description:i.a.createElement("span",null,"Het type gegevens dat op het tabblad moet worden weergegeven")},deleteDialog:{cancel:"Annuleren",confirm:"Ja",header:"API-sleutel verwijderen",message:function(e){return"Weet je zeker dat je wilt verwijderen "+e}},tabs:["Facturen","Offertes"]}},T=function(e){var t,n;function r(){var t;return(t=e.call(this)||this).microsoftTeams&&t.microsoftTeams.initialize(),t.state={apiKey:null,adminId:null,admins:null,admin:null,contacts:null,contact:null,loadingContacts:!1,keys:[],isNew:!1,isOpen:!1,isContactsOpen:!1,locale:null,tabType:"invoices",showApiKeys:!1,loaded:!1},t.addWebhookToMoneybird=t.addWebhookToMoneybird.bind(k(t)),t.setUpWebhook=t.setUpWebhook.bind(k(t)),t.deleteKeyFromDb=t.deleteKeyFromDb.bind(k(t)),t.createKeyEntry=t.createKeyEntry.bind(k(t)),t.getAdmin=t.getAdmin.bind(k(t)),t}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=r.prototype;return o.componentDidMount=function(){var e=g(a.a.mark((function e(){var t=this;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.microsoftTeams=window?window.microsoftTeams:null,this.microsoftTeams.initialize(),this.microsoftTeams.getContext(function(){var e=g(a.a.mark((function e(n){var r,o,s,c,l;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.tid,o=n.locale,e.prev=1,e.next=4,fetch("https://moneybirdhandlerproxy.azurewebsites.net/api/key/"+r,{mode:"cors",method:"GET"});case 4:return s=e.sent,e.next=7,s.json();case 7:c=e.sent,console.log({json:c}),l=c.map((function(e){return{content:i.a.createElement("div",null,i.a.createElement("span",{style:{cursor:"pointer"},class:"lnr lnr-trash",onClick:function(){return t.setState({deleteKey:e.key,isOpen:!1})}})," - ",i.a.createElement("span",{style:{cursor:"pointer"},onClick:g(a.a.mark((function n(){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.setUpWebhook(e.key);case 2:case"end":return n.stop()}}),n)})))},e.key)),key:e.key}})),t.setState({keys:l,tid:r,locale:o}),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(1),console.log("BOO"),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}().bind(this));case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),o.addWebhookToMoneybird=function(){var e=g(a.a.mark((function e(t,n,r){var o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://moneybirdhandlerproxy.azurewebsites.net/api/MoneyBirdProxy",{mode:"cors",method:"POST",body:JSON.stringify({method:"POST",path:n+"/webhooks.json",key:t,data:{url:"https://moneybirdhandlerproxy.azurewebsites.net/api/teams/en/"+r,events:["sales_invoice_created"]}})});case 2:return o=e.sent,e.next=5,o.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),o.getAdmin=function(){var e=g(a.a.mark((function e(t,n){var r,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return void 0===n&&(n=!1),e.prev=1,e.next=4,fetch("https://moneybirdhandlerproxy.azurewebsites.net/api/MoneyBirdProxy",{mode:"cors",method:"POST",body:JSON.stringify({method:"GET",path:"administrations.json",key:t})});case 4:return r=e.sent,e.next=7,r.json();case 7:if(!(o=e.sent).error){e.next=12;break}this.setState({admins:!1,isOpen:!1,contacts:null}),e.next=14;break;case 12:return this.setState({admin:o[0],adminId:o[0].id,admins:!0}),e.abrupt("return",o[0].id);case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(1),console.log(e.t0);case 19:case"end":return e.stop()}}),e,this,[[1,16]])})));return function(t,n){return e.apply(this,arguments)}}(),o.setUpWebhook=function(){var e=g(a.a.mark((function e(t){var n=this;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({apiKey:t,isOpen:!1}),console.log("SETUPWEBHOOK"),this.microsoftTeams.settings.setValidityState(!0),console.log("saved"),this.microsoftTeams.settings.registerOnSaveHandler(function(e){console.log("REGISTERSAVEHANDLER"),n.microsoftTeams.getContext(function(r){console.log("GETCONTEXT");var o="connector-moneybird-"+r.teamId+"-"+r.channelId;n.microsoftTeams.settings.setSettings({contentUrl:"https://jp5525.github.io/teams-demo/connector",entityId:o,configName:"MoneyBird Invoices"}),n.microsoftTeams.settings.getSettings(function(){var r=g(a.a.mark((function r(o){var i,s,c,l,u;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return i=o.webhookUrl,s=/webhook\/(.*)/.exec(i),c=encodeURIComponent(s[1]),console.log({webhookUrl:i}),r.next=6,n.getAdmin(t);case 6:return l=r.sent,r.next=9,n.addWebhookToMoneybird(t,l,encodeURIComponent(c));case 9:u=r.sent,console.log({webhook:u}),e.notifySuccess();case 12:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}())}.bind(n))}.bind(this));case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),o.deleteKeyFromDb=function(){var e=g(a.a.mark((function e(){var t,n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,n=t.deleteKey,r=t.keys,v(n)){e.next=5;break}return e.next=4,fetch("https://moneybirdhandlerproxy.azurewebsites.net/api/key/"+n,{mode:"cors",method:"DELETE"});case 4:this.setState({deleteKey:null,apiKey:"",keys:r.filter((function(e){return e.key!=n}))});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),o.createKeyEntry=function(e){var t=this;return{content:i.a.createElement("div",null,i.a.createElement("span",{style:{cursor:"pointer"},class:"lnr lnr-trash",onClick:function(){return t.setState({deleteKey:e})}})," - ",i.a.createElement("span",{style:{cursor:"pointer"},onClick:function(){return t.handleToken(e)}},e)),key:e}},o.render=function(){var e=this,t=this.state,n=(t.contacts,t.contact,t.admins),r=(t.admin,t.apiKey),a=t.keys,o=t.isOpen,y=t.locale,b=(t.loadingContacts,t.showApiKeys,t.deleteKey);console.log({locale:y});var g=y?E[y.split("-")[0]]:null;g&&(g.tabs[0],g.tabs[1]);return g?i.a.createElement(s.a,{theme:c.themes.teams},i.a.createElement("div",{style:w.mainPadding},i.a.createElement("div",{style:w.mainTable},i.a.createElement(l.a,{content:g.heading}),i.a.createElement(u.a,{gap:"gap.small",vAlign:"center",hAlign:"start"},i.a.createElement(d.a,{justifyContent:"center"},i.a.createElement("form",{style:{width:"100%"}},g.apiSection.title," ",i.a.createElement("br",null),g.apiSection.description,0==n?i.a.createElement(i.a.Fragment,null," ",i.a.createElement("br",null),i.a.createElement(p.a,{content:g.apiSection.fail,style:{background:"#cc4a31",color:"white",marginTop:"10px",marginBottom:"10px"}})):null,n?i.a.createElement(i.a.Fragment,null," ",i.a.createElement("br",null),i.a.createElement(p.a,{content:g.apiSection.succsess,style:{background:"#7fba00",color:"white",marginTop:"10px",marginBottom:"10px"}})):null,i.a.createElement(m.a,{items:a,placeholder:g.apiSection.placeholder,onOpenChange:function(){return e.setState({isOpen:!o})},name:"apiKey",id:"apiKey",clearable:r&&r.length>0,fluid:!0,search:!0,open:o,searchQuery:r,itemToString:function(e){return e?e.key:null},onSearchQueryChange:function(t,n){return e.setState({apiKey:n.searchQuery})},noResultsMessage:{content:"Add... "+r,onClick:function(t){e.setState({isNew:!0,keys:[e.createKeyEntry(r)].concat(f(a)),isOpen:!1})},style:{cursor:"pointer"},active:!0}}),i.a.createElement(h.a,{cancelButton:g.deleteDialog.cancel,onCancel:function(){return e.setState({deleteKey:null})},confirmButton:g.deleteDialog.confirm,onConfirm:this.deleteKeyFromDb,content:g.deleteDialog.message(b),header:g.deleteDialog.header,open:!v(b),backdrop:!0}))))))):null},r}(i.a.Component);t.default=T}}]);
//# sourceMappingURL=component---src-pages-connector-js-55a0c83b769836a986e6.js.map