"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[614],{614:function(e,n,t){t.r(n),t.d(n,{default:function(){return Z}});var a,r=t(168),i=t(7689),o=t(7630),s=t(4554),d=t(890),l=t(9201),c=t(184),u=(0,l.Z)((0,c.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack"),p=(0,l.Z)((0,c.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete"),h=t(6148),m=t(4373),g=t(2954),f=(0,o.ZP)(s.Z)({padding:15}),x=(0,o.ZP)(d.Z)({fontSize:22,margin:"10px 20px 20px 75px",display:"flex"}),v=(0,o.ZP)(s.Z)(a||(a=(0,r.Z)(["\n  font-size: 12px;\n  background-color: #ddd;\n  color: #223;\n  padding: 2px 4px;\n  margin-left: 6px;\n  border-radius: 4px;\n  align-self: center;\n"]))),w=(0,o.ZP)(s.Z)({marginLeft:15,width:"100%","&>div":{display:"flex","&>p>span":{fontSize:12,color:"#878787"}}}),y=(0,o.ZP)(s.Z)({margin:"0 50px 0 auto"}),Z=function(){var e=(0,i.bx)().openDrawer,n=(0,i.TH)().state.email,t=(0,m.Z)(g.Y.moveEmailsToBin);return(0,c.jsxs)(s.Z,{style:e?{marginLeft:250,marginTop:62}:{marginTop:62,width:"100%"},children:[(0,c.jsxs)(f,{children:[(0,c.jsx)(u,{onClick:function(){return window.history.back()},color:"action",fontSize:"small"}),(0,c.jsx)(p,{fontSize:"small",color:"action",style:{marginLeft:40},onClick:function(){return t.call([n._id]),void window.history.back()}})]}),(0,c.jsxs)(x,{children:[n.subject,(0,c.jsx)(v,{component:"span",children:"Inbox"})]}),(0,c.jsxs)(s.Z,{style:{display:"flex"},children:[(0,c.jsx)("img",{src:h.Iu,alt:"dppic",width:"40px",height:"40px",style:{borderRadius:"50%",background:"#FF8551",margin:"5px 10px 0 10px",padding:2}}),(0,c.jsxs)(w,{children:[(0,c.jsxs)(s.Z,{children:[(0,c.jsxs)(d.Z,{style:{marginTop:"10px"},children:[n.name,(0,c.jsxs)(s.Z,{component:"span",children:[" \xa0< ",n.to," >"]})," "]}),(0,c.jsxs)(y,{children:[new window.Date(n.date).getDate(),"\xa0",new window.Date(n.date).toLocaleString("default",{month:"long"}),"\xa0",new window.Date(n.date).getFullYear(),"\xa0"]})]}),(0,c.jsx)(d.Z,{style:{marginTop:20},children:n.body})]})]})]})}},6148:function(e,n,t){t.d(n,{Fr:function(){return i},Iu:function(){return r},Pv:function(){return a}});var a="https://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0.jpg",r="https://www.srikiran.org/wp-content/uploads/2021/07/xnew_Avatar-Blank-Profile-Picture-Display-Pic-Mystery-Man-973460.png.pagespeed.ic.hA_i2zIsZe.webp",i={inbox:{heading:"Your Inbox is Empty",subHeading:"Mails that don't exist in other tabs will be shown here."},drafts:{heading:"You don't have any saved drafts.",subHeading:"Saving a draft allows ou to keeep a message you aren't ready to send yet."},starred:{heading:"You haven't starred any email/s.",subHeading:"Stars let you ginve messages a spaecial status to make them easier to findTo star a mail click on star."},sent:{heading:"You haven't sent any emails.",subHeading:"Send one Now!."},bin:{heading:"Empty bin.",subHeading:"you can see your deleted emails here ."},allmail:{heading:"You do not have any type of mail.",subHeading:"But you can see all your emails here"}}},4373:function(e,n,t){t.d(n,{Z:function(){return c}});var a=t(4165),r=t(5861),i=t(9439),o=t(2791),s=t(1243),d=function(){var e=(0,r.Z)((0,a.Z)().mark((function e(n,t,r){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)({method:n.method,url:"".concat("","/").concat(n.endpoint,"/").concat(r),data:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n,t,a){return e.apply(this,arguments)}}(),l=d,c=function(e){var n=(0,o.useState)(null),t=(0,i.Z)(n,2),s=t[0],d=t[1],c=(0,o.useState)(""),u=(0,i.Z)(c,2),p=u[0],h=u[1],m=(0,o.useState)(!1),g=(0,i.Z)(m,2),f=g[0],x=g[1],v=function(){var n=(0,r.Z)((0,a.Z)().mark((function n(t){var r,i,o=arguments;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=o.length>1&&void 0!==o[1]?o[1]:"",d(null),h(""),x(!0),n.prev=4,n.next=7,l(e,t,r);case 7:i=n.sent,d(i.data),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(4),h(n.t0.message);case 14:return n.prev=14,x(!1),n.finish(14);case 17:case"end":return n.stop()}}),n,null,[[4,11,14,17]])})));return function(e){return n.apply(this,arguments)}}();return{call:v,response:s,error:p,isLoading:f}}},2954:function(e,n,t){t.d(n,{Y:function(){return a}});var a={saveSentEmail:{endpoint:"save",method:"POST"},getEmailFromType:{endpoint:"emails",method:"GET"},saveDraftEmails:{endpoint:"save-draft",method:"POST"},moveEmailsToBin:{endpoint:"bin",method:"POST"},toggleStarred:{endpoint:"starred",method:"POST"},deleteEmail:{endpoint:"delete",method:"DELETE"}}}}]);
//# sourceMappingURL=614.a19a4c64.chunk.js.map