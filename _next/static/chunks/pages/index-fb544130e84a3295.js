(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(a,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(2771)}])},2771:function(a,e,n){"use strict";n.r(e),n.d(e,{default:function(){return x}});var l=n(5893),s=n(5872),t=n(9008),i=n.n(t),o=n(7005),c=n(5152),r=n.n(c),g=n(7294),m=n(6502),d=n(3253);function p(a){let{enable:e}=a,n=(0,g.useCallback)(async a=>{console.log(a),await (0,d.R)(a)},[]),s=(0,g.useCallback)(async a=>{await console.log(a)},[]);return(0,l.jsx)(m.Z,{className:"!z-[999] absolute ".concat(!e&&"hidden"," "),id:"tsparticles",init:n,loaded:s,options:{fullScreen:{zIndex:1},particles:{number:{value:0},color:{value:["#00FFFC","#FC00FF","#fffc00"]},shape:{type:["circle","square"],options:{}},opacity:{value:1,animation:{enable:!0,minimumValue:0,speed:2,startValue:"max",destroy:"min"}},size:{value:4,random:{enable:!0,minimumValue:2}},links:{enable:!1},life:{duration:{sync:!0,value:5},count:1},move:{enable:!0,gravity:{enable:!0,acceleration:10},speed:{min:10,max:20},decay:.1,direction:"none",straight:!1,outModes:{default:"destroy",top:"none"}},rotate:{value:{min:0,max:360},direction:"random",move:!0,animation:{enable:!0,speed:60}},tilt:{direction:"random",enable:!0,move:!0,value:{min:0,max:360},animation:{enable:!0,speed:60}},roll:{darken:{enable:!0,value:25},enable:!0,speed:{min:15,max:25}},wobble:{distance:30,enable:!0,move:!0,speed:{min:-15,max:15}}},emitters:{life:{count:0,duration:.1,delay:.4},rate:{delay:.1,quantity:150},size:{width:0,height:0}}}})}let u=r()(()=>Promise.all([n.e(332),n.e(430)]).then(n.bind(n,4430)).then(a=>a.Wheel),{loadableGenerated:{webpack:()=>[4430]},ssr:!1,loading:()=>(0,l.jsx)("span",{children:"Loading"})});function x(){var a,e;let[n,t]=(0,g.useState)({start:!1,data:[],removeWhenSelected:!1,winner:0,inputValue:"",showConfetti:!1,dialog:{message:"TEAM BETA 02",opened:!1}}),c=()=>{let a=[],e="";n.removeWhenSelected&&n.data.map((l,s)=>{s!==n.winner&&(e+="".concat(l.option,"\n"),a.push({option:l.option}))}),t({...n,data:n.removeWhenSelected?a:n.data,showConfetti:!0,start:!1,inputValue:n.removeWhenSelected?e:n.inputValue,dialog:{message:n.data[n.winner].option,opened:!0}})},r=()=>{if(n.data.length>0){let a=Math.floor(Math.random()*n.data.length);t({...n,start:!0,winner:a})}},m=a=>{let e=a.target.value.split("\n"),l=[];e.map(a=>{a&&l.push({option:a})}),t({...n,data:l,inputValue:a.target.value})};return(0,l.jsxs)(s.T3,{children:[(0,l.jsx)(i(),{children:(0,l.jsx)("title",{children:"Battle For Supremacy | RAFFLE"})}),(0,l.jsx)("header",{className:"flex w-full border-b-bfs-primary border-b-2 py-1 px-2",children:(0,l.jsxs)("div",{className:"flex w-full justify-center md:justify-start items-center gap-2 font-teamdao font-bold",children:[(0,l.jsx)("img",{className:"object-containx cursor-pointer h-12 rounded-full",alt:"image",src:"logo.png"}),(0,l.jsxs)("div",{className:" uppercase font-bold text-3xl py-3 font-tea  ",children:[(0,l.jsx)("span",{className:" text-bfs-primary",children:"Battle"}),(0,l.jsx)("span",{children:"For"}),(0,l.jsx)("span",{className:" text-bfs-secondary",children:"Supremacy"}),(0,l.jsxs)("span",{children:[".TV",(0,l.jsx)("sup",{children:"\xae️"})]})]})]})}),(0,l.jsxs)("div",{className:"flex flex-col lg:flex-row transition-all py-1 px-2 gap-4 lg:gap-2 w-full justify-between h-[calc(100vh-100px)] overflow-hidden",children:[(0,l.jsx)("div",{className:"flex justify-center items-center w-full h-full",children:(0,l.jsxs)("div",{className:"relative",children:[(0,l.jsx)("div",{onClick:r,className:"absolute h-full w-full z-30 flex justify-center items-center",children:(0,l.jsx)("img",{className:"object-containx h-32 rounded-full",alt:"image",src:"logo.png"})}),(0,l.jsx)("div",{className:"w-full h-full [transform:rotate(38deg)]",children:(0,l.jsx)(u,{radiusLineWidth:1,mustStartSpinning:n.start,prizeNumber:n.winner,data:n.data,fontSize:(null===(a=n.data)||void 0===a?void 0:a.length)>50?7:15,backgroundColors:["#d1017d","#0185be"],textColors:["#fff","#000"],textDistance:(null===(e=n.data)||void 0===e?void 0:e.length)>50?70:60,spinDuration:.9,onStopSpinning:c,selectorImage:"gun.png"})})]})}),(0,l.jsx)("div",{className:"flex flex-col justify-center items-center w-full h-full p-5 lg:p-10 pb-32",children:(0,l.jsxs)("div",{className:"w-full lg:w-3/4 flex flex-col h-full gap-2",children:[(0,l.jsxs)("div",{className:"flex items-center gap-2 w-full",children:[(0,l.jsx)(s.XZ,{className:" k-color-brand-bfs-primary",checked:n.removeWhenSelected,onChange:()=>t({...n,removeWhenSelected:!n.removeWhenSelected})}),(0,l.jsx)("span",{className:"text-sm selection:bg-transparent text-zinc-300",children:"Remove Instance when selected"})]}),(0,l.jsx)("textarea",{value:n.inputValue,className:"rounded-lg text-xl xl:text-2xl resize-none dark:bg-zinc-900 dark:border-md-dark-surface-1 border w-full h-96 lg:h-full dark:text-zinc-300 px-3 py-2 outline-none transition-all focus:ring-1 focus:ring-offset-2 dark:focus:ring-offset-md-dark-surface-1 dark:focus:ring-bfs-primary ",onInput:m})]})})]}),(0,l.jsx)("footer",{className:" translucent fixed bottom-0 z-40 border-t-bfs-primary border-t-2  w-full",children:(0,l.jsx)(o.Z,{className:"w-full",loop:0,gradientColor:[24,24,30],children:Array.from({length:2}).map((a,e)=>(0,l.jsxs)("div",{className:"flex gap-10 py-1 w-full items-center",children:[(0,l.jsx)("img",{alt:"image",loading:"lazy",src:"algorand.png",className:"w-14 h-10 object-contain ml-10"}),(0,l.jsx)("img",{alt:"image",loading:"lazy",src:"anti-fund.png",className:"w-14 h-10 object-contain"}),(0,l.jsx)("img",{alt:"image",loading:"lazy",src:"baselayer.png",className:"w-14 h-10 object-contain"}),(0,l.jsx)("img",{alt:"image",loading:"lazy",src:"coinhako.png",className:"w-14 h-10 object-contain"}),(0,l.jsx)("img",{alt:"image",loading:"lazy",src:"dwf-labs.png",className:"w-14 h-10 object-contain"}),(0,l.jsx)("img",{alt:"image",loading:"lazy",src:"everse-capital.png",className:"w-14 h-10 object-contain"}),(0,l.jsx)("img",{alt:"image",loading:"lazy",src:"excapital.png",className:"w-14 h-10 object-contain"}),(0,l.jsx)("img",{alt:"image",loading:"lazy",src:"gains-associates.png",className:"w-14 h-10 object-contain"}),(0,l.jsx)("img",{alt:"image",loading:"lazy",src:"gsg.png",className:"w-14 h-10 object-contain"}),(0,l.jsx)("img",{alt:"image",loading:"lazy",src:"gsr.png",className:"w-14 h-10 object-contain"}),(0,l.jsx)("img",{alt:"image",loading:"lazy",src:"krust.png",className:"w-14 h-10 object-contain"}),(0,l.jsx)("img",{alt:"image",loading:"lazy",src:"libra-capital-ventures.png",className:"w-14 h-10 object-contain"}),(0,l.jsx)("img",{alt:"image",loading:"lazy",src:"nexo.png",className:"w-14 h-10 object-contain"}),(0,l.jsx)("img",{alt:"image",loading:"lazy",src:"ngc-ventures.png",className:"w-14 h-10 object-contain"}),(0,l.jsx)("img",{alt:"image",loading:"lazy",src:"nxgen.png",className:"w-14 h-10 object-contain"}),(0,l.jsx)("img",{alt:"image",loading:"lazy",src:"octava.png",className:"w-14 h-10 object-contain"}),(0,l.jsx)("img",{alt:"image",loading:"lazy",src:"rising-cap.png",className:"w-14 h-10 object-contain"}),(0,l.jsx)("img",{alt:"image",loading:"lazy",src:"shima.png",className:"w-14 h-10 object-contain"}),(0,l.jsx)("img",{alt:"image",loading:"lazy",src:"7up.png",className:"w-14 h-8 object-contain"}),(0,l.jsx)("img",{alt:"image",loading:"lazy",src:"aquafina.png",className:"w-14 h-8 object-contain"}),(0,l.jsx)("img",{alt:"image",loading:"lazy",src:"cheetos.png",className:"w-14 h-8 object-contain"}),(0,l.jsx)("img",{alt:"image",loading:"lazy",src:"fritos.png",className:"w-14 h-8 object-contain"}),(0,l.jsx)("img",{alt:"image",loading:"lazy",src:"gatorade.png",className:"w-14 h-8 object-contain"}),(0,l.jsx)("img",{alt:"image",loading:"lazy",src:"lays.png",className:"w-14 h-8 object-contain"}),(0,l.jsx)("img",{alt:"image",loading:"lazy",src:"lipton.png",className:"w-14 h-8 object-contain"}),(0,l.jsx)("img",{alt:"image",loading:"lazy",src:"mirinda.png",className:"w-14 h-8 object-contain"}),(0,l.jsx)("img",{alt:"image",loading:"lazy",src:"pepsi-max.png",className:"w-14 h-8 object-contain"}),(0,l.jsx)("img",{alt:"image",loading:"lazy",src:"pepsi.png",className:"w-14 h-8 object-contain"}),(0,l.jsx)("img",{alt:"image",loading:"lazy",src:"quaker.png",className:"w-14 h-8 object-contain"}),(0,l.jsx)("img",{alt:"image",loading:"lazy",src:"rr.png",className:"w-14 h-8 object-contain"}),(0,l.jsx)("img",{alt:"image",loading:"lazy",src:"ruffles.png",className:"w-14 h-8 object-contain"}),(0,l.jsx)("img",{alt:"image",loading:"lazy",src:"sb.png",className:"w-14 h-8 object-contain"}),(0,l.jsx)("img",{alt:"image",loading:"lazy",src:"sodastream.png",className:"w-14 h-8 object-contain"}),(0,l.jsx)("img",{alt:"image",loading:"lazy",src:"tostitos.png",className:"w-14 h-8 object-contain"})]},e))})}),(0,l.jsx)(p,{enable:n.showConfetti}),(0,l.jsx)(s.Vq,{onBackdropClick:()=>t({...n,showConfetti:!1,dialog:{...n.dialog,opened:!1}}),opened:n.dialog.opened,content:(0,l.jsx)("div",{className:"text-4xl text-center",children:n.dialog.message}),className:"ring-2 ring-white bg-gradient-to-r from-bfs-primary to-bfs-secondary",colors:{bgMaterial:""}})]})}}},function(a){a.O(0,[408,774,888,179],function(){return a(a.s=8312)}),_N_E=a.O()}]);