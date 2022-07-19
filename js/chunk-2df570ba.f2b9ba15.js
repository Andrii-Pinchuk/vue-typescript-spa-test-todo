(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2df570ba"],{2766:function(t,s,i){"use strict";i.r(s);var a=function(){var t=this,s=t._self._c;t._self._setupProxy;return s("div",{staticClass:"login-page"},[t._m(0),s("main",{staticClass:"login-page__main-content"},[t._m(1),s("section",{staticClass:"product-description login-page__product-description"},[t._m(2),s("div",{staticClass:"login-page__login-form-container"},[s("form",{staticClass:"login-form",on:{submit:function(s){return t.validateCredential(s)}}},[s("div",{staticClass:"login-form__login-information"},[s("div",{staticClass:"login-form__login-input-container"},[s("label",{attrs:{for:"login"}},[t._v("Name")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.login,expression:"login"}],attrs:{type:"text",id:"login"},domProps:{value:t.login},on:{keydown:t.clearLoginInputErrors,input:function(s){s.target.composing||(t.login=s.target.value)}}}),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isLoginEmpty&&!t.isWrongUserCredentials,expression:"isLoginEmpty && !isWrongUserCredentials"}],staticClass:"error-information login-form__error-information"},[s("img",{attrs:{src:i("7464"),alt:"Input error"}}),s("span",[t._v("Cannot be empty")])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isWrongUserCredentials&&!t.isLoginEmpty,expression:"isWrongUserCredentials && !isLoginEmpty"}],staticClass:"error-information login-form__error-information"},[s("img",{attrs:{src:i("7464"),alt:"Input error"}}),s("span",[t._v("Enter valid user credentials")])])]),s("div",{staticClass:"login-form__password-input-container"},[s("label",{attrs:{for:"password"}},[t._v("Password")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",id:"password"},domProps:{value:t.password},on:{keydown:t.clearPasswordInputErrors,input:function(s){s.target.composing||(t.password=s.target.value)}}}),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isPasswordEmpty&&!t.isWrongUserCredentials,expression:"isPasswordEmpty && !isWrongUserCredentials"}],staticClass:"error-information login-form__error-information"},[s("img",{attrs:{src:i("7464"),alt:"Input error"}}),s("span",[t._v("Cannot be empty")])])]),s("button",{staticClass:"button login-form__submit-button",attrs:{type:"submit"}},[t._v(" Login ")]),s("button",{staticClass:"button login-form__reset-password-button",attrs:{type:"button"}},[t._v(" Forgot password ")])]),s("button",{staticClass:"button login-form__register-button",attrs:{type:"button"}},[t._v("Register now")])])])])]),t._m(3)])},e=[function(){var t=this,s=t._self._c;t._self._setupProxy;return s("header",{staticClass:"page-header"},[s("div",{staticClass:"page-header__top-line"}),s("div",{staticClass:"page-header__logo-block"},[s("img",{staticClass:"page-header__logo",attrs:{src:i("5331"),alt:"Citi company logo"}})])])},function(){var t=this,s=t._self._c;t._self._setupProxy;return s("section",{staticClass:"login-page__main-title-container"},[s("h1",{staticClass:"login-page__main-title"},[t._v("Welcome to Business Analytics Online")])])},function(){var t=this,s=t._self._c;t._self._setupProxy;return s("div",[s("p",{staticClass:"product-description__main-description"},[s("span",{staticClass:"product-description__main-description_bold-text"},[t._v("Business Analytics")]),t._v(" — a new, convenient tool for managing and forecasting your business performance, which will help analyze your own finances and cash flows, visualize your reporting, business processes, KPI's")]),s("ul",{staticClass:"article-list"},[s("li",[s("article",[s("h2",[t._v("Interactive Reporting")]),s("p",[t._v("In just a few clicks, you can connect your data from 1C,CRM (Bitrix24, AmoCRM, ZohoCRM), E‑commerce (PROM.UA, Rozetka, ebay), Logistic (Nova Poshta), Google Analytics and many more systems that reflect different aspects of business activities.")])])]),s("li",[s("article",[s("h2",[t._v("Automated data updates")]),s("p",[t._v("The application automatically updates and structures the data in just 60 seconds, saving you time and money.")])])]),s("li",[s("article",[s("h2",[t._v("Data Security")]),s("p",[t._v("The Bank guarantees the safety of your personal data, ensuring their integrity and confidentiality.")])])])])])},function(){var t=this,s=t._self._c;t._self._setupProxy;return s("footer",{staticClass:"page-footer"},[s("div",{staticClass:"page-footer__main-content"},[s("img",{staticClass:"page-footer__logo",attrs:{src:i("5331"),alt:"Citi company logo"}}),s("ul",[s("li",[s("a",{attrs:{href:"#"}},[t._v("Terms & Conditions")])]),s("li",[s("a",{attrs:{href:"#"}},[t._v("Privacy")])]),s("li",[s("a",{attrs:{href:"#"}},[t._v("Notice at Collection")])]),s("li",[s("a",{attrs:{href:"#"}},[t._v("CA Privacy Hub")])]),s("li",[s("a",{attrs:{href:"#"}},[t._v("Contact Us")])]),s("li",[s("a",{attrs:{href:"#"}},[t._v("Sitemap")])])])]),s("span",{staticClass:"page-footer__company-information"},[t._v(" Copyright © 2020 Citigroup Inc. Citibank, N.A. Member FDIC. Equal Opportunity Lender. ")])])}],o=i("9ab4"),r=i("1b40"),n=i("b7aa");let l=class extends r["b"]{constructor(){super(...arguments),this.login="",this.password="",this.isLoginEmpty=!1,this.isPasswordEmpty=!1,this.isWrongUserCredentials=!1}validateCredential(t){t.preventDefault(),this.clearLoginInputErrors(),this.clearPasswordInputErrors(),0===this.login.length&&(this.isLoginEmpty=!0),0===this.password.length&&(this.isPasswordEmpty=!0),"Admin"===this.login&&"12345"===this.password?(localStorage.setItem("isUserAuthorized","true"),localStorage.setItem("userName",this.login),this.$router.push({path:n["a"].TODO})):0!==this.login.length&&0!==this.password.length&&(this.isLoginEmpty=!1,this.isWrongUserCredentials=!0)}clearLoginInputErrors(){this.isLoginEmpty=!1,this.isWrongUserCredentials=!1}clearPasswordInputErrors(){this.isPasswordEmpty=!1}};l=Object(o["a"])([r["a"]],l);var c=l,p=c,u=i("2877"),g=Object(u["a"])(p,a,e,!1,null,null,null);s["default"]=g.exports},5331:function(t,s,i){t.exports=i.p+"img/logo.afc396c2.svg"},7464:function(t,s,i){t.exports=i.p+"img/input_error.9b4d2c70.svg"}}]);
//# sourceMappingURL=chunk-2df570ba.f2b9ba15.js.map