if(!self.define){let e,n={};const s=(s,a)=>(s=new URL(s+".js",a).href,n[s]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=n,document.head.appendChild(e)}else e=s,importScripts(s),n()})).then((()=>{let e=n[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(a,c)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(n[i])return;let r={};const d=e=>s(e,i),t={module:{uri:i},exports:r,require:d};n[i]=Promise.all(a.map((e=>t[e]||d(e)))).then((e=>(c(...e),r)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/7up.png",revision:"7f0aa54b104c1b0ee81f47fe502cd69e"},{url:"/TEAMDAO-Regular.otf",revision:"02e60b3bcdd8334de3b695bf27b3041c"},{url:"/_next/static/chunks/332.ef4fc2025b5140d8.js",revision:"ef4fc2025b5140d8"},{url:"/_next/static/chunks/408-24847ac02f18d7ee.js",revision:"24847ac02f18d7ee"},{url:"/_next/static/chunks/430.84e9f351eced32bb.js",revision:"84e9f351eced32bb"},{url:"/_next/static/chunks/framework-cda2f1305c3d9424.js",revision:"cda2f1305c3d9424"},{url:"/_next/static/chunks/main-41c7a067006caf69.js",revision:"41c7a067006caf69"},{url:"/_next/static/chunks/pages/_app-5ddec46a25dd57db.js",revision:"5ddec46a25dd57db"},{url:"/_next/static/chunks/pages/_error-54de1933a164a1ff.js",revision:"54de1933a164a1ff"},{url:"/_next/static/chunks/pages/index-592cb7342715d05d.js",revision:"592cb7342715d05d"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-ca28f28bece36cab.js",revision:"ca28f28bece36cab"},{url:"/_next/static/css/c9b7eb0009485193.css",revision:"c9b7eb0009485193"},{url:"/_next/static/dABSKhEo9h7dwzrZDqthy/_buildManifest.js",revision:"e02c8d5d4eec9942ea5380033489993a"},{url:"/_next/static/dABSKhEo9h7dwzrZDqthy/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/algorand.png",revision:"10b3477b4d219dd7c3cd74a202eb1bb1"},{url:"/anti-fund.png",revision:"8f8d243f7bff91396b7f2d05e76ae99f"},{url:"/aquafina.png",revision:"cb8d84e2d3632f2954d95c68d6bf9f0d"},{url:"/baselayer.png",revision:"5835ca0a78a1af21f5d252414ed7df6e"},{url:"/cheetos.png",revision:"e7f77dd8e22b57d8518d8024a85cbb46"},{url:"/coinhako.png",revision:"f8a0a70fbcf4738a3e8c5a111209b477"},{url:"/cursor.png",revision:"210be8ef23dce84c908a238689a912c1"},{url:"/dwf-labs.png",revision:"35f4c29f168b151a83e0176b4c2742c4"},{url:"/everse-capital.png",revision:"a82c7bf35d68f1f15d8ad6c746d6f06c"},{url:"/excapital.png",revision:"4cd0b8379750757f7057d7bd8b0e3f99"},{url:"/f1.ttf",revision:"90c10fedcba64d6d4ec43309b0971b4b"},{url:"/fritos.png",revision:"f3f31b6548b892d199cec44305fd2033"},{url:"/gains-associates.png",revision:"fab3e66874ff63c9294a022ae2dcf131"},{url:"/gatorade.png",revision:"2f48008d6845c2f51f3d446718aea575"},{url:"/gsg.png",revision:"3aa90e4a6c18b67551baf19a5f927e0b"},{url:"/gsr.png",revision:"d3cb0700e69a527e8a0ee34046ca82db"},{url:"/gun.png",revision:"91babae28d0817610a4bf8ada0cea340"},{url:"/icon-192x192.png",revision:"5b25ce8a1fa1efde490e5383d3db0268"},{url:"/icon-256x256.png",revision:"b97ac98fe8ea6cc14dd463f182478807"},{url:"/icon-384x384.png",revision:"2c622d7d3971e9865a9fcf10506270b2"},{url:"/icon-512x512.png",revision:"97c711b32dbbceb2a2b81acc760f9394"},{url:"/krust.png",revision:"8d91f666b3c3393f616c6021cccf5336"},{url:"/lays.png",revision:"f091de81adea18c94368881bbfae818b"},{url:"/libra-capital-ventures.png",revision:"f2156bd013c5d3b7bd9a9d4c11c4264b"},{url:"/lipton.png",revision:"c8234a1b49c2cd0593e3a84622f5e857"},{url:"/logo.png",revision:"727edd9470525b87ace01879d8321fb2"},{url:"/manifest.json",revision:"681432fef8d64c2666efdc4922287b6f"},{url:"/mirinda.png",revision:"c6814b0b562d98378b082af36da49088"},{url:"/nexo.png",revision:"7fc1c5f1adb3c6ce81811eb306e6a3a3"},{url:"/ngc-ventures.png",revision:"df543caba4ec85bdfb52f5a212384e5b"},{url:"/nxgen.png",revision:"f2f609b29e4a205e42581395d333631e"},{url:"/octava.png",revision:"d46bb0b18526b7553cd677337f959432"},{url:"/pepsi-max.png",revision:"90d9a81b4ca75d0a062c2db529dce148"},{url:"/pepsi.png",revision:"e50717dd8d0a81c4fe304c458b9acaa0"},{url:"/quaker.png",revision:"de64426bcd6519b5127c0131fdc3210a"},{url:"/rising-cap.png",revision:"033f9abda773991cb69aac0c1b65ecac"},{url:"/rr.png",revision:"713d32b50d3b1669cbbeb91b5fffd876"},{url:"/ruffles.png",revision:"6974f422cc5093c4ec7e9bf705213d60"},{url:"/sb.png",revision:"cf87692711a9e49303d8fa7c40fb47b9"},{url:"/shima.png",revision:"348eb91c1c569ee1884341463c0acdd3"},{url:"/sodastream.png",revision:"c87735614cb3b74dd32f1de2f2869486"},{url:"/team-dao-v2.png",revision:"c44a01889d7d36091ad0f6f59cef46a4"},{url:"/team-logo.png",revision:"e784861ef833c6fadeafa4a3a04148fd"},{url:"/tostitos.png",revision:"b8b6291f7056c1c1bddd60b26d37a9c7"},{url:"/tri.png",revision:"9617d94acd3ef4734e516da259fed0ec"},{url:"/triangle.png",revision:"97a25690fb966d490d5ee57c8839e4fe"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:n,event:s,state:a})=>n&&"opaqueredirect"===n.type?new Response(n.body,{status:200,statusText:"OK",headers:n.headers}):n}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const n=e.pathname;return!n.startsWith("/api/auth/")&&!!n.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
