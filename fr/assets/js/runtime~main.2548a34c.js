(()=>{"use strict";var e,a,b,f,d,c={},r={};function t(e){var a=r[e];if(void 0!==a)return a.exports;var b=r[e]={exports:{}};return c[e].call(b.exports,b,b.exports,t),b.exports}t.m=c,e=[],t.O=(a,b,f,d)=>{if(!b){var c=1/0;for(i=0;i<e.length;i++){b=e[i][0],f=e[i][1],d=e[i][2];for(var r=!0,o=0;o<b.length;o++)(!1&d||c>=d)&&Object.keys(t.O).every((e=>t.O[e](b[o])))?b.splice(o--,1):(r=!1,d<c&&(c=d));if(r){e.splice(i--,1);var n=f();void 0!==n&&(a=n)}}return a}d=d||0;for(var i=e.length;i>0&&e[i-1][2]>d;i--)e[i]=e[i-1];e[i]=[b,f,d]},t.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return t.d(a,{a:a}),a},b=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,t.t=function(e,f){if(1&f&&(e=this(e)),8&f)return e;if("object"==typeof e&&e){if(4&f&&e.__esModule)return e;if(16&f&&"function"==typeof e.then)return e}var d=Object.create(null);t.r(d);var c={};a=a||[null,b({}),b([]),b(b)];for(var r=2&f&&e;"object"==typeof r&&!~a.indexOf(r);r=b(r))Object.getOwnPropertyNames(r).forEach((a=>c[a]=()=>e[a]));return c.default=()=>e,t.d(d,c),d},t.d=(e,a)=>{for(var b in a)t.o(a,b)&&!t.o(e,b)&&Object.defineProperty(e,b,{enumerable:!0,get:a[b]})},t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce(((a,b)=>(t.f[b](e,a),a)),[])),t.u=e=>"assets/js/"+({18:"cc06558c",53:"935f2afb",71:"0b3ceb4d",90:"46681d69",141:"d196a99d",177:"332771e4",264:"e306fe21",270:"326074cf",293:"a00d457b",417:"393529d6",479:"59876d0d",508:"e0058e2b",535:"ffb0cd81",621:"f6b7d847",626:"d1588eba",641:"5a7e06aa",643:"6416242b",655:"806839b5",657:"51cb21a6",666:"40d74468",750:"0b1bcaf6",814:"43491996",830:"9666914a",837:"d13856d9",838:"ea94ed8c",902:"fa7a9c43",907:"7b3d6e2b",918:"84e3de88",1076:"7bd6a534",1130:"1e4b653a",1135:"c743b74f",1181:"7b31a540",1328:"a7455422",1352:"6b89e45d",1359:"b602ebfe",1375:"cf23ded0",1466:"b738bd79",1468:"230ff95e",1469:"f1ee3008",1480:"6add2488",1529:"042a1c94",1622:"c0b29b06",1650:"f1ba5992",1661:"5a60f14a",1725:"1dc55c34",1730:"e827c440",1737:"e58cf6b3",1752:"c30ce192",1788:"80486f0b",1826:"7521de86",1874:"e218e3e1",1920:"ca29271b",1962:"f6fa115a",1967:"a4da41b0",1969:"978f47e8",2025:"0d894b2a",2049:"2309da82",2108:"6d840baa",2123:"afd94a8f",2162:"95376ac4",2243:"c91abd5f",2323:"58507a99",2351:"222f2d45",2390:"9d7a7dd9",2444:"084bc63b",2463:"b21f847d",2475:"9900bba0",2490:"3f6b5142",2531:"dbd36e5b",2535:"814f3328",2545:"8407b225",2606:"5d33df56",2643:"395cd29e",2650:"4072efe2",2663:"af2afa76",2672:"d300ca56",2677:"bcf33688",2773:"69ba592a",2796:"c50f6216",2825:"b7b61c86",2840:"afe2f4d8",2892:"b5a67a0c",2905:"5d6147c4",2915:"5ef7e0ed",2926:"13225a85",2941:"bcaa8bc0",2966:"089ddd33",3085:"1f391b9e",3089:"a6aa9e1f",3119:"16583dae",3176:"3df28f80",3185:"2b79562d",3228:"cd375eed",3256:"d4fda7eb",3448:"e0ecb93d",3476:"72b99bb3",3538:"9e3cf431",3598:"39eb8c31",3608:"9e4087bc",3639:"a80dd096",3688:"a583fd27",3729:"492401ba",3756:"05940a73",3800:"a193a73b",3848:"49cf64e6",3910:"ccef6dc0",4013:"01a85c17",4030:"46e8201d",4124:"d18287ae",4150:"e4f95286",4195:"c4f5d8e4",4210:"d3063ad8",4358:"8ec006c3",4368:"a94703ab",4391:"4f2c0d39",4412:"1ad092b8",4413:"4cd5d603",4538:"60bbc5a0",4539:"81df4154",4723:"6cb9d1e2",4744:"84566bb6",4758:"a8006ea4",4838:"7825f7df",4839:"8c965d20",4930:"67b1c97d",4957:"6b2bd9cf",4963:"8076a014",5098:"4f03a575",5138:"62464aed",5231:"65bc3ca6",5312:"71a804df",5367:"401d3510",5419:"c4a5868d",5473:"f74813bc",5515:"45ad9d0d",5532:"ab36fee3",5580:"20f6a349",5587:"7037a4d4",5673:"66b5f1f5",5735:"2182b3a3",5782:"d646238b",5844:"bf0e22f4",5870:"657ebb8d",5934:"f5a9af16",5937:"36a194cd",5982:"265bd3e5",5988:"9768b0b3",6007:"87da79fa",6052:"0b1cc1a6",6059:"4d054c43",6103:"ccc49370",6113:"faa3212f",6165:"8a76da2a",6220:"1aa5177d",6353:"d38cff25",6454:"01655826",6499:"11419b65",6526:"2ddad17c",6583:"3c1252ae",6682:"54dc430b",6702:"fa2b292a",6748:"b4e48480",6774:"db5ace82",6793:"95b40b1b",6810:"464082f2",6846:"585be377",6918:"92293c9c",6973:"93c5c117",6974:"ec46e28f",6995:"41e0356b",7053:"83c1c922",7112:"2ac31968",7133:"52c76a05",7186:"66ee39f1",7249:"39b082b9",7284:"930fa64c",7362:"150310ef",7414:"393be207",7568:"4d4a498a",7590:"328da9da",7709:"46983fa5",7800:"d58f2f6c",7829:"f8bf9680",7918:"17896441",7920:"1a4e3797",7949:"8beafb0e",7994:"ab73522c",8006:"ceafa8c5",8014:"254b2869",8118:"1ad7eeb0",8123:"b91ec292",8215:"ffc74e03",8279:"f6bffcd7",8360:"9e0dc24a",8388:"548347c6",8405:"bfab21b2",8426:"b9b84b2f",8471:"7910d343",8503:"02f010b8",8518:"a7bd4aaa",8520:"89b5f1e3",8527:"6f99de57",8590:"4295ace4",8608:"c95819a4",8610:"6875c492",8637:"4690093a",8674:"68e52937",8680:"021a14a8",8682:"7278cab4",8688:"7cf7f8fc",8738:"720d0eb2",8901:"d773f089",8909:"48005516",8920:"4f46d1f8",8923:"bfb7963e",9010:"33082ef4",9177:"cb03a293",9266:"81478fa3",9291:"95103334",9321:"98f19d29",9343:"b4b3ae7e",9396:"2c4e74b8",9411:"2f059cce",9465:"3669cb04",9481:"74b40711",9486:"e3e4eef0",9541:"5a757be9",9548:"d5877f30",9560:"6a7971ab",9617:"32b5d8a9",9644:"70d66ade",9661:"5e95c892",9670:"8e88ab0e",9673:"e4e3c2ad",9680:"a8597c44",9887:"310c5efb",9924:"4e3016bb",9959:"1f3708e3",9985:"6d7d6cd8"}[e]||e)+"."+{18:"a9cff347",53:"07ae7bf1",71:"9ab06910",90:"c7dd7d39",141:"69ac2fcc",177:"64d3029d",264:"7e4d2db5",270:"c1caa75a",293:"fb50aa3b",417:"8d74afee",479:"bd50efd3",508:"321ab341",535:"4c824885",621:"12d47def",626:"0c9738e7",641:"cd29bd36",643:"781efe47",655:"1579a9dc",657:"f784af2b",666:"2ae12eeb",750:"2f60bb54",814:"86cc23c0",830:"aa70933e",837:"b4c55eec",838:"8ff23840",902:"2cfe0274",907:"5de55156",918:"4bd9d0ff",1076:"141a10ef",1130:"f44cab1f",1135:"dc66fe7d",1181:"5a4c8fe8",1328:"1a747226",1352:"f10984bd",1359:"7ce13e94",1375:"72e88caf",1426:"c01de9d3",1466:"37316d72",1468:"15a33812",1469:"d8bcdbe5",1480:"eec9120a",1529:"1e53b59f",1622:"81221468",1650:"964240f3",1661:"a7764ded",1725:"c69d6369",1730:"77568495",1737:"a714f759",1752:"46583cca",1772:"1d95ad78",1788:"e46b4f37",1826:"b66a6053",1874:"4d7458c4",1920:"bc92f040",1962:"e0be483e",1967:"e945cc13",1969:"c490b8fc",2025:"8629d1d9",2049:"3b1c98f1",2108:"7c2823de",2123:"fbfca839",2162:"6e79b470",2243:"127cace8",2323:"2284f29f",2351:"db17a5f8",2390:"0dfe1db4",2444:"b35983fa",2463:"c0450fb7",2475:"c122e90f",2490:"ac0dec2d",2531:"b827eace",2535:"500b7ff0",2545:"e0424a80",2606:"06b8f9f2",2643:"68290629",2650:"9278e87e",2663:"8a9e2b57",2672:"42ece1d5",2677:"f62856e8",2773:"db6e40e3",2796:"433d02e5",2825:"fc4249eb",2840:"3a805fa9",2892:"eaee59b3",2905:"c791ea98",2915:"466a7671",2926:"1692b608",2941:"1a7c49f8",2966:"e0caad9e",3085:"eb424529",3089:"f14bbab6",3119:"92ab456c",3176:"c7010822",3185:"2b0c5b69",3228:"56183270",3256:"9193c68b",3448:"c498f71f",3476:"001c4e39",3538:"ed80535b",3598:"2148dc7f",3608:"d8227d91",3639:"5c607b78",3688:"8ae7bf59",3729:"0d9957cb",3756:"8294ebfa",3800:"b31e4f02",3848:"ba5c94dc",3910:"90a95c88",4013:"e4e40940",4030:"4d0a0bf1",4124:"a92889d2",4150:"3c6ffaf9",4195:"13fcdabb",4210:"edbc00ee",4332:"e8537b0d",4358:"4771487f",4368:"ada07f70",4391:"4ddff497",4412:"15cda553",4413:"a7eb5c36",4538:"95f949c3",4539:"a3d75e59",4723:"fc79761d",4744:"af435611",4758:"f07ae472",4838:"99b00660",4839:"9ac1562c",4930:"a270b9e6",4957:"e3742bd9",4963:"4d95ab35",5098:"966b39f5",5138:"1f9307b9",5231:"18214591",5312:"6d6beb93",5367:"19c78e13",5419:"047e2c7c",5473:"fc163675",5515:"eafe84d8",5532:"e2fcc6eb",5580:"ed4554a4",5587:"9f143c47",5673:"fc502059",5735:"1b40e8c4",5782:"5f799d34",5844:"cace5af7",5870:"a5c6a051",5934:"5b7f7810",5937:"3afa8b63",5982:"392ca1a3",5988:"edcc8b1a",6007:"ef24f32a",6052:"0fdde56d",6059:"bb8273c4",6103:"e27d1502",6113:"4f41c784",6165:"4b0679fd",6220:"c5e18bfb",6353:"ec33c2cf",6454:"1b7135c9",6499:"0defe860",6526:"491832e3",6583:"b8035157",6682:"c0f1499b",6702:"7362d767",6748:"304ca61e",6774:"e1bb6e6f",6793:"d1167f1d",6810:"f1073bba",6846:"4b3c8bed",6918:"517931d2",6945:"497d7b49",6973:"2e78cc45",6974:"a42d8a0e",6995:"d87fb386",7053:"b96f6022",7112:"f2b31fb1",7133:"c0b05e05",7186:"0500f1a1",7249:"6f85da3e",7284:"9237e01c",7362:"64017f26",7414:"c32158dd",7568:"23edc592",7590:"dc6ea5fb",7709:"ad70e941",7800:"7154d224",7829:"dcd01e5c",7918:"84d47be3",7920:"bf2556db",7949:"8ed4143f",7994:"9a17d870",8006:"8457c027",8014:"ae667761",8118:"84ecf33d",8123:"673bddab",8215:"8642a11e",8279:"c851e765",8360:"81a20dae",8388:"e62f3473",8405:"8bfd9746",8426:"93eb623f",8471:"3c4aded1",8503:"4e4c651f",8518:"e0aa6603",8520:"d85c9526",8527:"b6b1f523",8590:"918a4faf",8608:"c14e9331",8610:"e8d7747a",8637:"2c1d7447",8674:"5c298bee",8680:"7ab776d4",8682:"4320bc8f",8688:"266f4889",8738:"79ef2203",8894:"ae05df2b",8901:"61061a4e",8909:"ed8f1269",8920:"4107f1fb",8923:"37b97500",9010:"c9f924af",9177:"9f1ae373",9266:"a4ede80f",9291:"0729c556",9321:"9a914130",9343:"e45fcfdb",9396:"51def94d",9411:"f48532e5",9465:"3e84fb97",9481:"7a665939",9486:"4679a445",9541:"4b85af4d",9548:"288b701b",9560:"f065d304",9617:"060f3433",9644:"87076a94",9661:"67c86b99",9670:"449643c3",9673:"3f02b772",9677:"40845a74",9680:"f8bb8975",9887:"34d49541",9924:"ca559dfd",9959:"2d07b638",9985:"0a934505"}[e]+".js",t.miniCssF=e=>{},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),f={},d="Archcraft-Wiki:",t.l=(e,a,b,c)=>{if(f[e])f[e].push(a);else{var r,o;if(void 0!==b)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==d+b){r=u;break}}r||(o=!0,(r=document.createElement("script")).charset="utf-8",r.timeout=120,t.nc&&r.setAttribute("nonce",t.nc),r.setAttribute("data-webpack",d+b),r.src=e),f[e]=[a];var l=(a,b)=>{r.onerror=r.onload=null,clearTimeout(s);var d=f[e];if(delete f[e],r.parentNode&&r.parentNode.removeChild(r),d&&d.forEach((e=>e(b))),a)return a(b)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=l.bind(null,r.onerror),r.onload=l.bind(null,r.onload),o&&document.head.appendChild(r)}},t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.p="/fr/",t.gca=function(e){return e={17896441:"7918",43491996:"814",48005516:"8909",95103334:"9291",cc06558c:"18","935f2afb":"53","0b3ceb4d":"71","46681d69":"90",d196a99d:"141","332771e4":"177",e306fe21:"264","326074cf":"270",a00d457b:"293","393529d6":"417","59876d0d":"479",e0058e2b:"508",ffb0cd81:"535",f6b7d847:"621",d1588eba:"626","5a7e06aa":"641","6416242b":"643","806839b5":"655","51cb21a6":"657","40d74468":"666","0b1bcaf6":"750","9666914a":"830",d13856d9:"837",ea94ed8c:"838",fa7a9c43:"902","7b3d6e2b":"907","84e3de88":"918","7bd6a534":"1076","1e4b653a":"1130",c743b74f:"1135","7b31a540":"1181",a7455422:"1328","6b89e45d":"1352",b602ebfe:"1359",cf23ded0:"1375",b738bd79:"1466","230ff95e":"1468",f1ee3008:"1469","6add2488":"1480","042a1c94":"1529",c0b29b06:"1622",f1ba5992:"1650","5a60f14a":"1661","1dc55c34":"1725",e827c440:"1730",e58cf6b3:"1737",c30ce192:"1752","80486f0b":"1788","7521de86":"1826",e218e3e1:"1874",ca29271b:"1920",f6fa115a:"1962",a4da41b0:"1967","978f47e8":"1969","0d894b2a":"2025","2309da82":"2049","6d840baa":"2108",afd94a8f:"2123","95376ac4":"2162",c91abd5f:"2243","58507a99":"2323","222f2d45":"2351","9d7a7dd9":"2390","084bc63b":"2444",b21f847d:"2463","9900bba0":"2475","3f6b5142":"2490",dbd36e5b:"2531","814f3328":"2535","8407b225":"2545","5d33df56":"2606","395cd29e":"2643","4072efe2":"2650",af2afa76:"2663",d300ca56:"2672",bcf33688:"2677","69ba592a":"2773",c50f6216:"2796",b7b61c86:"2825",afe2f4d8:"2840",b5a67a0c:"2892","5d6147c4":"2905","5ef7e0ed":"2915","13225a85":"2926",bcaa8bc0:"2941","089ddd33":"2966","1f391b9e":"3085",a6aa9e1f:"3089","16583dae":"3119","3df28f80":"3176","2b79562d":"3185",cd375eed:"3228",d4fda7eb:"3256",e0ecb93d:"3448","72b99bb3":"3476","9e3cf431":"3538","39eb8c31":"3598","9e4087bc":"3608",a80dd096:"3639",a583fd27:"3688","492401ba":"3729","05940a73":"3756",a193a73b:"3800","49cf64e6":"3848",ccef6dc0:"3910","01a85c17":"4013","46e8201d":"4030",d18287ae:"4124",e4f95286:"4150",c4f5d8e4:"4195",d3063ad8:"4210","8ec006c3":"4358",a94703ab:"4368","4f2c0d39":"4391","1ad092b8":"4412","4cd5d603":"4413","60bbc5a0":"4538","81df4154":"4539","6cb9d1e2":"4723","84566bb6":"4744",a8006ea4:"4758","7825f7df":"4838","8c965d20":"4839","67b1c97d":"4930","6b2bd9cf":"4957","8076a014":"4963","4f03a575":"5098","62464aed":"5138","65bc3ca6":"5231","71a804df":"5312","401d3510":"5367",c4a5868d:"5419",f74813bc:"5473","45ad9d0d":"5515",ab36fee3:"5532","20f6a349":"5580","7037a4d4":"5587","66b5f1f5":"5673","2182b3a3":"5735",d646238b:"5782",bf0e22f4:"5844","657ebb8d":"5870",f5a9af16:"5934","36a194cd":"5937","265bd3e5":"5982","9768b0b3":"5988","87da79fa":"6007","0b1cc1a6":"6052","4d054c43":"6059",ccc49370:"6103",faa3212f:"6113","8a76da2a":"6165","1aa5177d":"6220",d38cff25:"6353","01655826":"6454","11419b65":"6499","2ddad17c":"6526","3c1252ae":"6583","54dc430b":"6682",fa2b292a:"6702",b4e48480:"6748",db5ace82:"6774","95b40b1b":"6793","464082f2":"6810","585be377":"6846","92293c9c":"6918","93c5c117":"6973",ec46e28f:"6974","41e0356b":"6995","83c1c922":"7053","2ac31968":"7112","52c76a05":"7133","66ee39f1":"7186","39b082b9":"7249","930fa64c":"7284","150310ef":"7362","393be207":"7414","4d4a498a":"7568","328da9da":"7590","46983fa5":"7709",d58f2f6c:"7800",f8bf9680:"7829","1a4e3797":"7920","8beafb0e":"7949",ab73522c:"7994",ceafa8c5:"8006","254b2869":"8014","1ad7eeb0":"8118",b91ec292:"8123",ffc74e03:"8215",f6bffcd7:"8279","9e0dc24a":"8360","548347c6":"8388",bfab21b2:"8405",b9b84b2f:"8426","7910d343":"8471","02f010b8":"8503",a7bd4aaa:"8518","89b5f1e3":"8520","6f99de57":"8527","4295ace4":"8590",c95819a4:"8608","6875c492":"8610","4690093a":"8637","68e52937":"8674","021a14a8":"8680","7278cab4":"8682","7cf7f8fc":"8688","720d0eb2":"8738",d773f089:"8901","4f46d1f8":"8920",bfb7963e:"8923","33082ef4":"9010",cb03a293:"9177","81478fa3":"9266","98f19d29":"9321",b4b3ae7e:"9343","2c4e74b8":"9396","2f059cce":"9411","3669cb04":"9465","74b40711":"9481",e3e4eef0:"9486","5a757be9":"9541",d5877f30:"9548","6a7971ab":"9560","32b5d8a9":"9617","70d66ade":"9644","5e95c892":"9661","8e88ab0e":"9670",e4e3c2ad:"9673",a8597c44:"9680","310c5efb":"9887","4e3016bb":"9924","1f3708e3":"9959","6d7d6cd8":"9985"}[e]||e,t.p+t.u(e)},(()=>{var e={1303:0,532:0};t.f.j=(a,b)=>{var f=t.o(e,a)?e[a]:void 0;if(0!==f)if(f)b.push(f[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var d=new Promise(((b,d)=>f=e[a]=[b,d]));b.push(f[2]=d);var c=t.p+t.u(a),r=new Error;t.l(c,(b=>{if(t.o(e,a)&&(0!==(f=e[a])&&(e[a]=void 0),f)){var d=b&&("load"===b.type?"missing":b.type),c=b&&b.target&&b.target.src;r.message="Loading chunk "+a+" failed.\n("+d+": "+c+")",r.name="ChunkLoadError",r.type=d,r.request=c,f[1](r)}}),"chunk-"+a,a)}},t.O.j=a=>0===e[a];var a=(a,b)=>{var f,d,c=b[0],r=b[1],o=b[2],n=0;if(c.some((a=>0!==e[a]))){for(f in r)t.o(r,f)&&(t.m[f]=r[f]);if(o)var i=o(t)}for(a&&a(b);n<c.length;n++)d=c[n],t.o(e,d)&&e[d]&&e[d][0](),e[d]=0;return t.O(i)},b=self.webpackChunkArchcraft_Wiki=self.webpackChunkArchcraft_Wiki||[];b.forEach(a.bind(null,0)),b.push=a.bind(null,b.push.bind(b))})()})();