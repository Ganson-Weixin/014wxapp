(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/yonghu/add-or-update"],{"2f86":function(n,t,e){"use strict";var i,r=function(){var n=this,t=n.$createElement;n._self._c},u=[];e.d(t,"b",(function(){return r})),e.d(t,"c",(function(){return u})),e.d(t,"a",(function(){return i}))},"541f":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(e("a34a"));function r(n){return n&&n.__esModule?n:{default:n}}function u(n,t,e,i,r,u,a){try{var o=n[u](a),s=o.value}catch(c){return void e(c)}o.done?t(s):Promise.resolve(s).then(i,r)}function a(n){return function(){var t=this,e=arguments;return new Promise((function(i,r){var a=n.apply(t,e);function o(n){u(a,i,r,o,s,"next",n)}function s(n){u(a,i,r,o,s,"throw",n)}o(void 0)}))}}var o=function(){Promise.all([e.e("common/vendor"),e.e("components/w-picker/w-picker")]).then(function(){return resolve(e("6f31"))}.bind(null,e)).catch(e.oe)},s={data:function(){return{ruleForm:{yonghuzhanghao:"",mima:"",yonghuxingming:"",xingbie:"",touxiang:"",yonghushouji:""},xingbieOptions:[],xingbieIndex:0,user:{},ro:{yonghuzhanghao:!1,mima:!1,yonghuxingming:!1,xingbie:!1,touxiang:!1,yonghushouji:!1}}},components:{wPicker:o},computed:{},onLoad:function(){var t=a(i.default.mark((function t(e){var r,u,a,o;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=n.getStorageSync("nowTable"),t.next=3,this.$api.session(r);case 3:if(u=t.sent,this.user=u.data,this.xingbieOptions="男,女".split(","),this.ruleForm.userid=n.getStorageSync("userid"),e.refid&&(this.ruleForm.refid=e.refid),!e.id){t.next=14;break}return this.ruleForm.id=e.id,t.next=12,this.$api.info("yonghu",this.ruleForm.id);case 12:u=t.sent,this.ruleForm=u.data;case 14:if(!e.cross){t.next=45;break}a=n.getStorageSync("crossObj"),t.t0=i.default.keys(a);case 17:if((t.t1=t.t0()).done){t.next=45;break}if(o=t.t1.value,"yonghuzhanghao"!=o){t.next=23;break}return this.ruleForm.yonghuzhanghao=a[o],this.ro.yonghuzhanghao=!0,t.abrupt("continue",17);case 23:if("mima"!=o){t.next=27;break}return this.ruleForm.mima=a[o],this.ro.mima=!0,t.abrupt("continue",17);case 27:if("yonghuxingming"!=o){t.next=31;break}return this.ruleForm.yonghuxingming=a[o],this.ro.yonghuxingming=!0,t.abrupt("continue",17);case 31:if("xingbie"!=o){t.next=35;break}return this.ruleForm.xingbie=a[o],this.ro.xingbie=!0,t.abrupt("continue",17);case 35:if("touxiang"!=o){t.next=39;break}return this.ruleForm.touxiang=a[o],this.ro.touxiang=!0,t.abrupt("continue",17);case 39:if("yonghushouji"!=o){t.next=43;break}return this.ruleForm.yonghushouji=a[o],this.ro.yonghushouji=!0,t.abrupt("continue",17);case 43:t.next=17;break;case 45:this.styleChange();case 46:case"end":return t.stop()}}),t,this)})));function e(n){return t.apply(this,arguments)}return e}(),methods:{styleChange:function(){this.$nextTick((function(){}))},xingbieChange:function(n){this.xingbieIndex=n.target.value,this.ruleForm.xingbie=this.xingbieOptions[this.xingbieIndex]},touxiangTap:function(){var n=this;this.$api.upload((function(t){n.ruleForm.touxiang=n.$base.url+"upload/"+t.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=a(i.default.mark((function n(){return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(this.ruleForm.yonghuzhanghao){n.next=3;break}return this.$utils.msg("用户账号不能为空"),n.abrupt("return");case 3:if(this.ruleForm.mima){n.next=6;break}return this.$utils.msg("密码不能为空"),n.abrupt("return");case 6:if(!this.ruleForm.id){n.next=11;break}return n.next=9,this.$api.update("yonghu",this.ruleForm);case 9:n.next=13;break;case 11:return n.next=13,this.$api.add("yonghu",this.ruleForm);case 13:this.$utils.msgBack("提交成功");case 14:case"end":return n.stop()}}),n,this)})));function t(){return n.apply(this,arguments)}return t}(),optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var t=new Date,e=t.getFullYear(),i=t.getMonth()+1,r=t.getDate();return"start"===n?e-=60:"end"===n&&(e+=2),i=i>9?i:"0"+i,r=r>9?r:"0"+r,"".concat(e,"-").concat(i,"-").concat(r)},toggleTab:function(n){this.$refs[n].show()}}};t.default=s}).call(this,e("543d")["default"])},8054:function(n,t,e){},a98b:function(n,t,e){"use strict";e.r(t);var i=e("541f"),r=e.n(i);for(var u in i)"default"!==u&&function(n){e.d(t,n,(function(){return i[n]}))}(u);t["default"]=r.a},cbc7:function(n,t,e){"use strict";(function(n){e("71ba"),e("921b");i(e("66fd"));var t=i(e("fa7e"));function i(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},fa7e:function(n,t,e){"use strict";e.r(t);var i=e("2f86"),r=e("a98b");for(var u in r)"default"!==u&&function(n){e.d(t,n,(function(){return r[n]}))}(u);e("ff60");var a,o=e("f0c5"),s=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,"247aacc8",null,!1,i["a"],a);t["default"]=s.exports},ff60:function(n,t,e){"use strict";var i=e("8054"),r=e.n(i);r.a}},[["cbc7","common/runtime","common/vendor"]]]);