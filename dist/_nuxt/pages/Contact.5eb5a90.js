(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{199:function(e,t,o){var content=o(211);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(31).default)("6c576eb6",content,!0,{sourceMap:!1})},209:function(e,t,o){e.exports=o.p+"img/contact.8d28320.jpg"},210:function(e,t,o){"use strict";var n=o(199);o.n(n).a},211:function(e,t,o){(t=o(30)(!1)).push([e.i,".container[data-v-0aea1560]{margin-top:120px}form[data-v-0aea1560]{margin-top:40px;text-align:left}",""]),e.exports=t},224:function(e,t,o){"use strict";o.r(t);o(11),o(47);var n=o(16),r={data:function(){return{showAlert:!1,formData:{name:"",email:"",message:""}}},methods:{sendMessage:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=t,(data=new FormData).append("Name",o.formData.name),data.append("Email",o.formData.email),data.append("Message",o.formData.message),fetch("https://formspree.io/f/xdojnndl",{method:"POST",body:data,headers:{Accept:"application/json"}}).then((function(e){e.ok?(t.showAlert=!0,form.reset()):alert("Sending message failed, please try again")}));case 6:case"end":return e.stop()}}),e)})))()}},head:{title:"Contact 📧 - Asaolu Elijah",meta:[{hid:"description",name:"description",content:"Do you have any enquires? Send a message now to Asaolu Elijah"},{hid:"og:title",name:"og:title",content:"Contact 📧 - Asaolu Elijah"},{property:"og:description",content:"Do you have any enquires? Send a message now to Asaolu Elijah"},{hid:"og:image",name:"og:image",content:o(209)}]}},l=(o(210),o(23)),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("b-container",{staticClass:"page animate__animated animate__fadeIn"},[o("b-row",{staticClass:"justify-content-center"},[o("b-col",{attrs:{cols:"md-6"}},[o("h2",[e._v("Get in touch 💌")]),e._v(" "),o("p",{staticClass:"text-left"},[e._v("\n        If you have any question or just want to say hi, i'll try my best to\n        get back to you.\n      ")]),e._v(" "),e.showAlert?o("b-alert",{attrs:{show:"",variant:"success"}},[o("strong",[e._v("All done 🎉")]),o("br"),e._v("\n        Thanks for reaching out "+e._s(this.formData.name)+", I'll reply as soon\n        as i can.\n      ")]):e._e(),e._v(" "),o("b-form",{staticClass:"mb-5",on:{submit:function(t){return t.preventDefault(),e.sendMessage(t)}}},[o("b-form-group",{attrs:{id:"input-group-1",label:"Your Name:"}},[o("b-form-input",{attrs:{placeholder:"John Doe",required:""},model:{value:e.formData.name,callback:function(t){e.$set(e.formData,"name",t)},expression:"formData.name"}})],1),e._v(" "),o("b-form-group",{attrs:{id:"input-group-2",label:"Your Email:"}},[o("b-form-input",{attrs:{type:"email",placeholder:"john@doe.com",required:""},model:{value:e.formData.email,callback:function(t){e.$set(e.formData,"email",t)},expression:"formData.email"}})],1),e._v(" "),o("b-form-group",{attrs:{id:"input-group-3",label:"Your Message"}},[o("b-form-textarea",{attrs:{"no-resize":"",rows:"3",placeholder:"What's up Ibrahim, are you available for..",required:""},model:{value:e.formData.message,callback:function(t){e.$set(e.formData,"message",t)},expression:"formData.message"}})],1),e._v(" "),o("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v("Submit")])],1)],1)],1)],1)}),[],!1,null,"0aea1560",null);t.default=component.exports}}]);