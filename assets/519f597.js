(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{627:function(e,t,n){"use strict";n(25),n(35),n(8),n(29),n(275);var r=n(634),o=n.n(r);t.a={methods:{isMobile:function(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch(e){return!1}},getParam:function(param){var e={};return window.location.href.replace(location.hash,"").replace(/[?&]+([^=&]+)=?([^&]*)?/gi,(function(t,n,r){e[n]=void 0!==r?r:""})),param?e[param]?e[param]:null:e},makeToast:function(title,text){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.$bvToast.toast(text,{title:title,variant:e,solid:!0})},promisify:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return new Promise((function(t,r){e.apply(void 0,n.concat([function(e,n){e?r(e):t(n)}]))}))},getRate:function(a,b){if(isNaN(a)||isNaN(b))return"-";try{var e=Number(a/b);return this.numberToString(e)}catch(e){return"-"}},numberToString:function(e){return!isNaN(e)&&isFinite(e)&&e>0?e.toLocaleString("en-US",{useGrouping:!1,maximumSignificantDigits:10}):"-"},dateConvert:function(e,t){return o()(e).format(t)},gaSend:function(e,t){this.$gtag("event",e,t||{})},fbtrack:function(e,t){this.$fb.track(e,t||{})}}}},628:function(e){e.exports=JSON.parse('{"gaId":"G-JVB81REYZY","googleSite":"jY1I9xJpJgRsED3X5BkUoQVTZpvH19pMiG_Bs7TD2sQ","msSite":"2222C2A799471867FB1E317854E92631","fbPixelId":"640710157028819","facebookDomain":"k1q2e0j9epiupxtlbslr4hrcpjmsvk","bitlyAccessToken":"c8d8486e6abb506102a9d6c4bf1342d4a207959b","infuraProjectId":"9fe12823e65a4f5d8f698c471a898abc","etherscanApiKey":"BZ1CAV5UXW3GNUUTJYH89DI2N8YYEQUHZQ","polygonscanApiKey":"TBJM1F86UH4F14AZHZCA6V9ZNA9QI1V5T7","bscscanApiKey":"R8J4RGHEWZRWAKSD5FZ9YNW929TE5FMG33","snowtraceApiKey":"C412BZF8HA38IX4R2494CUBFZWXZ42BDB2","serviceReceiver":{"ethereum_mainnet":"0x75Eee167D2E5cC675f5b07f95d6A93E7088d6c34","ethereum_goerli":"0x75eee167d2e5cc675f5b07f95d6a93e7088d6c34","ethereum_sepolia":"0x75eee167d2e5cc675f5b07f95d6a93e7088d6c34","bsc_mainnet":"0x75Eee167D2E5cC675f5b07f95d6A93E7088d6c34","bsc_testnet":"0x75Eee167D2E5cC675f5b07f95d6A93E7088d6c34","polygon_mainnet":"0x75Eee167D2E5cC675f5b07f95d6A93E7088d6c34","polygon_mumbai":"0x75Eee167D2E5cC675f5b07f95d6A93E7088d6c34","avalanche_mainnet":"0x75Eee167D2E5cC675f5b07f95d6A93E7088d6c34","avalanche_fuji":"0x75Eee167D2E5cC675f5b07f95d6A93E7088d6c34"}}')},630:function(e,t,n){"use strict";var r=n(41),o=(n(101),n(29),n(15),n(30),n(8),n(66),n(75),n(38),n(628)),c=n(627),l=n(631),d=n(632);t.a={mixins:[c.a],data:function(){return{web3:null,web3Provider:null,metamask:{installed:!1,netId:null,provider:null},blockchains:{ethereum:"Ethereum",bsc:"Binance Smart Chain",polygon:"Polygon Network",avalanche:"Avalanche"},supportedCompiler:{ethereum:"0.8.20",bsc:"0.8.19",polygon:"0.8.19",avalanche:"0.8.19"},network:{current:null,default:"ethereum_mainnet",map:{1:"ethereum_mainnet",5:"ethereum_goerli",56:"bsc_mainnet",97:"bsc_testnet",137:"polygon_mainnet",80001:"polygon_mumbai",43114:"avalanche_mainnet",43113:"avalanche_fuji"},list:{ethereum_mainnet:{id:1,name:"Ethereum - Mainnet",network:"ethereum",tokenType:"ERC20",type:"mainnet",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:["https://mainnet.infura.io/v3/"],web3Provider:"https://mainnet.infura.io/v3/".concat(o.infuraProjectId),explorer:{link:"https://etherscan.io",name:"Etherscan"},routerV2:{name:"Uniswap",address:"0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",link:"https://app.uniswap.org/#/swap?outputCurrency=ETH",analytics:"https://app.uniswap.org/#/tokens/ethereum",addLiquidity:"https://app.uniswap.org/#/add/ETH"}},ethereum_goerli:{id:5,name:"Goerli - Testnet",network:"ethereum",tokenType:"ERC20",type:"testnet",nativeCurrency:{name:"Ether",symbol:"GoerliETH",decimals:18},rpcUrls:["https://goerli.infura.io/v3/"],web3Provider:"https://goerli.infura.io/v3/".concat(o.infuraProjectId),explorer:{link:"https://goerli.etherscan.io",name:"Etherscan"},routerV2:{name:"Uniswap | Goerli - Testnet",address:"0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",link:"https://app.uniswap.org/#/swap?outputCurrency=ETH",addLiquidity:"https://app.uniswap.org/#/add/ETH"}},ethereum_sepolia:{id:11155111,name:"Sepolia - Testnet",network:"ethereum",tokenType:"ERC20",type:"testnet",nativeCurrency:{name:"Ether",symbol:"SepoliaETH",decimals:18},rpcUrls:["https://sepolia.infura.io/v3/"],web3Provider:"https://sepolia.infura.io/v3/".concat(o.infuraProjectId),explorer:{link:"https://sepolia.etherscan.io",name:"Etherscan"},routerV2:{name:"Uniswap | Sepolia - Testnet",address:"0x313Ba5Edb064e002f8b68dA4F07dC7c179e54197",link:"https://app.uniswap.org/#/swap?outputCurrency=ETH",addLiquidity:"https://app.uniswap.org/#/add/ETH"}},bsc_mainnet:{id:56,name:"Binance Smart Chain - Mainnet",network:"bsc",tokenType:"BEP20",type:"mainnet",nativeCurrency:{name:"BNB",symbol:"BNB",decimals:18},rpcUrls:["https://bsc-dataseed.binance.org/"],web3Provider:"https://bsc-dataseed.binance.org/",explorer:{link:"https://bscscan.com",name:"BscScan"},routerV2:{name:"PancakeSwap",address:"0x10ED43C718714eb63d5aA57B78B54704E256024E",link:"https://pancakeswap.finance/swap?chain=bsc&outputCurrency=BNB",analytics:"https://pancakeswap.finance/info/tokens",addLiquidity:"https://pancakeswap.finance/add/BNB"}},bsc_testnet:{id:97,name:"Binance Smart Chain - Testnet",network:"bsc",tokenType:"BEP20",type:"testnet",nativeCurrency:{name:"BNB",symbol:"BNB",decimals:18},rpcUrls:["https://data-seed-prebsc-1-s1.binance.org:8545/"],web3Provider:"https://data-seed-prebsc-1-s1.binance.org:8545/",explorer:{link:"https://testnet.bscscan.com",name:"BscScan"},routerV2:{name:"PancakeSwap | Binance Smart Chain - Testnet",address:"0xD99D1c33F9fC3444f8101754aBC46c52416550D1",link:"https://pancakeswap.finance/swap?chain=bscTestnet&outputCurrency=tBNB",addLiquidity:"https://pancakeswap.finance/add/tBNB"}},polygon_mainnet:{id:137,name:"Polygon - Mainnet",network:"polygon",tokenType:"ERC20",type:"mainnet",nativeCurrency:{name:"MATIC",symbol:"MATIC",decimals:18},rpcUrls:["https://polygon-rpc.com/"],web3Provider:"https://polygon-rpc.com/",explorer:{link:"https://polygonscan.com",name:"PolygonScan"}},polygon_mumbai:{id:80001,name:"Mumbai - Testnet",network:"polygon",tokenType:"ERC20",type:"testnet",nativeCurrency:{name:"MATIC",symbol:"MATIC",decimals:18},rpcUrls:["https://rpc-mumbai.maticvigil.com/"],web3Provider:"https://rpc-mumbai.maticvigil.com/",explorer:{link:"https://mumbai.polygonscan.com",name:"PolygonScan"}},avalanche_mainnet:{id:43114,name:"Avalanche C-Chain",network:"avalanche",tokenType:"ERC20",type:"mainnet",nativeCurrency:{name:"Avalanche",symbol:"AVAX",decimals:18},rpcUrls:["https://api.avax.network/ext/bc/C/rpc"],web3Provider:"https://avalanche-mainnet.infura.io/v3/".concat(o.infuraProjectId),explorer:{link:"https://snowtrace.io",name:"SnowTrace"}},avalanche_fuji:{id:43113,name:"Fuji - Testnet",network:"avalanche",tokenType:"ERC20",type:"testnet",nativeCurrency:{name:"Avalanche",symbol:"AVAX",decimals:18},rpcUrls:["https://api.avax-test.network/ext/bc/C/rpc"],web3Provider:"https://avalanche-fuji.infura.io/v3/".concat(o.infuraProjectId),explorer:{link:"https://testnet.snowtrace.io",name:"SnowTrace"}}}},serviceReceiver:o.serviceReceiver,contracts:{token:null,service:null},ZERO_ADDRESS:"0x0000000000000000000000000000000000000000",INVALID_SIGNATURE:"0x0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"}},computed:{isMainNetwork:function(){return"mainnet"===this.network.current.type}},methods:{initWeb3:function(e,t){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(Object.prototype.hasOwnProperty.call(n.network.list,e)){r.next=2;break}throw new Error("Failed initializing network ".concat(e,". Allowed values are ").concat(Object.keys(n.network.list),"."));case 2:if(!t||void 0===window.ethereum){r.next=18;break}return console.log("injected ethereum"),n.web3Provider=window.ethereum,n.web3=new Web3(n.web3Provider),n.metamask.installed=n.web3Provider.isMetaMask,n.metamask.provider=n.web3Provider,r.next=10,n.promisify(n.web3.eth.getChainId);case 10:if(o=r.sent,n.metamask.netId=o,o===n.network.list[e].id){r.next=16;break}return n.network.current=n.network.list[n.network.map[o]],r.next=16,n.initWeb3(e,!1);case 16:r.next=22;break;case 18:console.log("provided ethereum"),n.network.current=n.network.list[e],n.web3Provider=new Web3.providers.HttpProvider(n.network.list[e].web3Provider),n.web3=new Web3(n.web3Provider);case 22:case"end":return r.stop()}}),r)})))()},initService:function(e){this.contracts.service=new this.web3.eth.Contract(d.abi,this.serviceReceiver[e])},initToken:function(e,t){var o=this;return Object(r.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n(633)("./".concat(o.supportedCompiler[t],"/").concat(e,".json"));case 2:o.contracts.token=r.sent,o.contracts.token.stringifiedAbi=JSON.stringify(o.contracts.token.abi);case 4:case"end":return r.stop()}}),r)})))()},getTokenByAddress:function(address){return console.log("init ".concat(address," on ").concat(this.network.current.name)),new this.web3.eth.Contract(l.abi,address)}}}},631:function(e){e.exports=JSON.parse('{"abi":[{"inputs":[{"internalType":"string","name":"name_","type":"string"},{"internalType":"string","name":"symbol_","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]}')},632:function(e){e.exports=JSON.parse('{"contractName":"ServiceReceiver","abi":[{"inputs":[{"internalType":"address","name":"signer_","type":"address"},{"internalType":"uint8","name":"discount_","type":"uint8"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"InvalidShortString","type":"error"},{"inputs":[{"internalType":"string","name":"str","type":"string"}],"name":"StringTooLong","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"serviceName","type":"string"},{"indexed":true,"internalType":"address","name":"serviceAddress","type":"address"}],"name":"Created","type":"event"},{"anonymous":false,"inputs":[],"name":"EIP712DomainChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"eip712Domain","outputs":[{"internalType":"bytes1","name":"fields","type":"bytes1"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"version","type":"string"},{"internalType":"uint256","name":"chainId","type":"uint256"},{"internalType":"address","name":"verifyingContract","type":"address"},{"internalType":"bytes32","name":"salt","type":"bytes32"},{"internalType":"uint256[]","name":"extensions","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"tokenAmount","type":"uint256"}],"name":"recoverERC20","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"},{"inputs":[{"internalType":"string","name":"serviceName","type":"string"},{"internalType":"bytes","name":"signature","type":"bytes"},{"internalType":"address","name":"wallet","type":"address"}],"name":"pay","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"signer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"discount","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes","name":"signature","type":"bytes"},{"internalType":"address","name":"wallet","type":"address"},{"internalType":"string","name":"content","type":"string"}],"name":"isSignatureVerified","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"serviceName","type":"string"},{"internalType":"bytes","name":"signature","type":"bytes"},{"internalType":"address","name":"wallet","type":"address"}],"name":"getPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"serviceName","type":"string"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"setPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newSigner","type":"address"}],"name":"changeSigner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"newDiscount","type":"uint8"}],"name":"changeDiscount","outputs":[],"stateMutability":"nonpayable","type":"function"}]}')},633:function(e,t,n){var map={"./0.8.19/AmazingBEP20.json":[638,25],"./0.8.19/AmazingERC20.json":[639,26],"./0.8.19/AntiWhaleBEP20.json":[640,27],"./0.8.19/AntiWhaleERC20.json":[641,28],"./0.8.19/BurnableBEP20.json":[642,29],"./0.8.19/BurnableERC20.json":[643,30],"./0.8.19/CommonBEP20.json":[644,31],"./0.8.19/CommonERC20.json":[645,32],"./0.8.19/DeflationaryBEP20.json":[646,33],"./0.8.19/DeflationaryERC20.json":[647,34],"./0.8.19/HelloBEP20.json":[648,35],"./0.8.19/HelloERC20.json":[649,36],"./0.8.19/LiquidBEP20.json":[650,37],"./0.8.19/LiquidERC20.json":[651,38],"./0.8.19/MintableBEP20.json":[652,39],"./0.8.19/MintableERC20.json":[653,40],"./0.8.19/PausableBEP20.json":[654,41],"./0.8.19/PausableERC20.json":[655,42],"./0.8.19/PowerfulBEP20.json":[656,43],"./0.8.19/PowerfulERC20.json":[657,44],"./0.8.19/SimpleBEP20.json":[658,45],"./0.8.19/SimpleERC20.json":[659,46],"./0.8.19/StandardBEP20.json":[660,47],"./0.8.19/StandardERC20.json":[661,48],"./0.8.19/SwappableBEP20.json":[662,49],"./0.8.19/SwappableERC20.json":[663,50],"./0.8.19/TaxableBEP20.json":[664,51],"./0.8.19/TaxableERC20.json":[665,52],"./0.8.19/UnlimitedBEP20.json":[666,53],"./0.8.19/UnlimitedERC20.json":[667,54],"./0.8.20/AmazingERC20.json":[668,55],"./0.8.20/AntiWhaleERC20.json":[669,56],"./0.8.20/BurnableERC20.json":[670,57],"./0.8.20/CommonERC20.json":[671,58],"./0.8.20/DeflationaryERC20.json":[672,59],"./0.8.20/HelloERC20.json":[673,60],"./0.8.20/LiquidERC20.json":[674,61],"./0.8.20/MintableERC20.json":[675,62],"./0.8.20/PausableERC20.json":[676,63],"./0.8.20/PowerfulERC20.json":[677,64],"./0.8.20/SimpleERC20.json":[678,65],"./0.8.20/StandardERC20.json":[679,66],"./0.8.20/SwappableERC20.json":[680,67],"./0.8.20/TaxableERC20.json":[681,68],"./0.8.20/UnlimitedERC20.json":[682,69]};function r(e){if(!n.o(map,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=map[e],r=t[0];return n.e(t[1]).then((function(){return n.t(r,3)}))}r.keys=function(){return Object.keys(map)},r.id=633,e.exports=r},634:function(e,t,n){e.exports=function(){"use strict";var e=1e3,t=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",c="month",l="quarter",d="year",m="date",y="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},w=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},C={s:w,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+w(r,2,"0")+":"+w(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,c),s=n-i<0,u=t.clone().add(r+(s?-1:1),c);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:d,w:o,d:a,D:m,h:u,m:s,s:i,ms:r,Q:l}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},g="en",T={};T[g]=v;var p=function(e){return e instanceof M},E=function e(t,n,r){var i;if(!t)return g;if("string"==typeof t){var s=t.toLowerCase();T[s]&&(i=s),n&&(T[s]=n,i=s);var u=t.split("-");if(!i&&u.length>1)return e(u[0])}else{var a=t.name;T[a]=t,i=a}return!r&&i&&(g=i),i||!r&&g},k=function(e,t){if(p(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new M(n)},x=C;x.l=E,x.i=p,x.w=function(e,t){return k(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var M=function(){function v(e){this.$L=E(e.locale,null,!0),this.parse(e)}var w=v.prototype;return w.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(x.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(h);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},w.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},w.$utils=function(){return x},w.isValid=function(){return!(this.$d.toString()===y)},w.isSame=function(e,t){var n=k(e);return this.startOf(t)<=n&&n<=this.endOf(t)},w.isAfter=function(e,t){return k(e)<this.startOf(t)},w.isBefore=function(e,t){return this.endOf(t)<k(e)},w.$g=function(e,t,n){return x.u(e)?this[t]:this.set(n,e)},w.unix=function(){return Math.floor(this.valueOf()/1e3)},w.valueOf=function(){return this.$d.getTime()},w.startOf=function(e,t){var n=this,r=!!x.u(t)||t,l=x.p(e),y=function(e,t){var i=x.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?i:i.endOf(a)},h=function(e,t){return x.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},f=this.$W,v=this.$M,w=this.$D,C="set"+(this.$u?"UTC":"");switch(l){case d:return r?y(1,0):y(31,11);case c:return r?y(1,v):y(0,v+1);case o:var g=this.$locale().weekStart||0,T=(f<g?f+7:f)-g;return y(r?w-T:w+(6-T),v);case a:case m:return h(C+"Hours",0);case u:return h(C+"Minutes",1);case s:return h(C+"Seconds",2);case i:return h(C+"Milliseconds",3);default:return this.clone()}},w.endOf=function(e){return this.startOf(e,!1)},w.$set=function(e,t){var n,o=x.p(e),l="set"+(this.$u?"UTC":""),y=(n={},n[a]=l+"Date",n[m]=l+"Date",n[c]=l+"Month",n[d]=l+"FullYear",n[u]=l+"Hours",n[s]=l+"Minutes",n[i]=l+"Seconds",n[r]=l+"Milliseconds",n)[o],h=o===a?this.$D+(t-this.$W):t;if(o===c||o===d){var f=this.clone().set(m,1);f.$d[y](h),f.init(),this.$d=f.set(m,Math.min(this.$D,f.daysInMonth())).$d}else y&&this.$d[y](h);return this.init(),this},w.set=function(e,t){return this.clone().$set(e,t)},w.get=function(e){return this[x.p(e)]()},w.add=function(r,l){var m,y=this;r=Number(r);var h=x.p(l),f=function(e){var t=k(y);return x.w(t.date(t.date()+Math.round(e*r)),y)};if(h===c)return this.set(c,this.$M+r);if(h===d)return this.set(d,this.$y+r);if(h===a)return f(1);if(h===o)return f(7);var v=(m={},m[s]=t,m[u]=n,m[i]=e,m)[h]||1,w=this.$d.getTime()+r*v;return x.w(w,this)},w.subtract=function(e,t){return this.add(-1*e,t)},w.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||y;var r=e||"YYYY-MM-DDTHH:mm:ssZ",i=x.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,c=n.months,l=function(e,n,i,s){return e&&(e[n]||e(t,r))||i[n].slice(0,s)},d=function(e){return x.s(s%12||12,e,"0")},m=n.meridiem||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r},h={YY:String(this.$y).slice(-2),YYYY:x.s(this.$y,4,"0"),M:a+1,MM:x.s(a+1,2,"0"),MMM:l(n.monthsShort,a,c,3),MMMM:l(c,a),D:this.$D,DD:x.s(this.$D,2,"0"),d:String(this.$W),dd:l(n.weekdaysMin,this.$W,o,2),ddd:l(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:x.s(s,2,"0"),h:d(1),hh:d(2),a:m(s,u,!0),A:m(s,u,!1),m:String(u),mm:x.s(u,2,"0"),s:String(this.$s),ss:x.s(this.$s,2,"0"),SSS:x.s(this.$ms,3,"0"),Z:i};return r.replace(f,(function(e,t){return t||h[e]||i.replace(":","")}))},w.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},w.diff=function(r,m,y){var h,f=x.p(m),v=k(r),w=(v.utcOffset()-this.utcOffset())*t,C=this-v,g=x.m(this,v);return g=(h={},h[d]=g/12,h[c]=g,h[l]=g/3,h[o]=(C-w)/6048e5,h[a]=(C-w)/864e5,h[u]=C/n,h[s]=C/t,h[i]=C/e,h)[f]||C,y?g:x.a(g)},w.daysInMonth=function(){return this.endOf(c).$D},w.$locale=function(){return T[this.$L]},w.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=E(e,t,!0);return r&&(n.$L=r),n},w.clone=function(){return x.w(this.$d,this)},w.toDate=function(){return new Date(this.valueOf())},w.toJSON=function(){return this.isValid()?this.toISOString():null},w.toISOString=function(){return this.$d.toISOString()},w.toString=function(){return this.$d.toUTCString()},v}(),_=M.prototype;return k.prototype=_,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",c],["$y",d],["$D",m]].forEach((function(e){_[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),k.extend=function(e,t){return e.$i||(e(t,M,k),e.$i=!0),k},k.locale=E,k.isDayjs=p,k.unix=function(e){return k(1e3*e)},k.en=T[g],k.Ls=T,k.p={},k}()},783:function(e,t,n){"use strict";n.r(t);n(60);var r=n(41),o=(n(101),n(630)),c=n(88),l={name:"Create",mixins:[o.a],data:function(){return{walletAddress:""}},mounted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.initWeb3("ethereum_mainnet",!1);case 2:Object(c.c)("eth_address",{message:"Insert a valid address.",validate:function(t){return e.web3.utils.isAddress(t)}});case 3:case"end":return t.stop()}}),t)})))()},methods:{createAddressPage:function(){var e=this;this.$refs.addressObserver.validate().then((function(t){t&&(document.location.href="/utilities/address-page/".concat(e.walletAddress,"/"))})).catch((function(t){console.log(t),e.makeToast("Some error occurred",t.message,"danger")}))}}},d=n(74),component=Object(d.a)(l,(function(){var e=this,t=e._self._c;return t("div",[t("b-jumbotron",{staticClass:"mb-0 d-flex flex-column justify-content-center peach-gradient text-white text-center",attrs:{fluid:""},scopedSlots:e._u([{key:"header",fn:function(){return[t("span",{staticClass:"display-1"},[e._v("Address Page")])]},proxy:!0},{key:"lead",fn:function(){return[e._v("\n      Create a dedicated page for your On-Chain Address to share."),t("br"),e._v("\n      No login. No setup. No coding required.\n    ")]},proxy:!0}])}),e._v(" "),t("b-row",{staticClass:"mx-0 py-5"},[t("b-col",{attrs:{md:"8","offset-md":"2"}},[t("b-row",[t("b-col",{attrs:{lg:"6"}},[t("div",{staticClass:"pb-3"},[t("h2",{staticClass:"py-5 font-weight-lighter text-dark"},[e._v("\n              Create your Address Page\n            ")]),e._v(" "),t("p",{staticClass:"lead"},[e._v("\n              Enter your Address details. Create a page and share it with your\n              customers.\n            ")])]),e._v(" "),t("ValidationObserver",{ref:"addressObserver",attrs:{tag:"form"},on:{submit:function(t){return t.preventDefault(),e.createAddressPage.apply(null,arguments)}}},[t("ValidationProvider",{attrs:{name:"Wallet Address",rules:{required:!0,eth_address:!0}},scopedSlots:e._u([{key:"default",fn:function(n){var r=n.errors;return[t("b-form-group",{attrs:{label:"Your Address","label-for":"walletAddress"}},[t("b-input-group",[t("b-form-input",{class:{"is-invalid":r.length>0},attrs:{id:"walletAddress",name:"walletAddress",placeholder:"0x123456789...",size:"lg"},model:{value:e.walletAddress,callback:function(t){e.walletAddress="string"==typeof t?t.trim():t},expression:"walletAddress"}}),e._v(" "),t("b-input-group-append",[t("b-button",{attrs:{type:"submit",variant:"success"}},[t("b-icon-plus-circle")],1)],1)],1),e._v(" "),t("small",{directives:[{name:"show",rawName:"v-show",value:r.length>0,expression:"errors.length > 0"}],staticClass:"text-danger"},[e._v("\n                  "+e._s(r[0])+"\n                ")])],1)]}}])})],1)],1),e._v(" "),t("b-col",{attrs:{lg:"6"}},[t("b-img",{attrs:{src:"/assets/images/address-page.svg",alt:"Address Page",fluid:""}})],1)],1)],1)],1),e._v(" "),t("b-row",{staticClass:"bg-light text-dark mx-0 py-5"},[t("b-col",{staticClass:"mb-3",attrs:{lg:"8","offset-lg":"2"}},[t("div",{staticClass:"available-products-table"},[t("b-row",[t("b-col",{attrs:{lg:"4"}},[t("b-card",{staticClass:"mb-3",attrs:{"bg-variant":"light","border-variant":"light"}},[t("b-card-title",{staticClass:"font-weight-light text-center"},[t("p",{staticClass:"h1 mb-2"},[t("b-icon-card-checklist",{staticClass:"m-4"})],1),e._v(" "),t("p",[e._v("Enter Details")])]),e._v(" "),t("p",{staticClass:"card-text text-center"},[e._v("\n                Enter your Address. Verify all the information create your\n                page.\n              ")])],1)],1),e._v(" "),t("b-col",{attrs:{lg:"4"}},[t("b-card",{staticClass:"mb-3",attrs:{"bg-variant":"light","border-variant":"light"}},[t("b-card-title",{staticClass:"font-weight-light text-center"},[t("p",{staticClass:"h1 mb-2"},[t("b-icon-link",{staticClass:"m-4"})],1),e._v(" "),t("p",[e._v("Multi Chain")])]),e._v(" "),t("p",{staticClass:"card-text text-center"},[e._v("\n                View details from several different blockchain in the same\n                place.\n              ")])],1)],1),e._v(" "),t("b-col",{attrs:{lg:"4"}},[t("b-card",{staticClass:"mb-3",attrs:{"bg-variant":"light","border-variant":"light"}},[t("b-card-title",{staticClass:"font-weight-light text-center"},[t("p",{staticClass:"h1 mb-2"},[t("b-icon-share",{staticClass:"m-4"})],1),e._v(" "),t("p",[e._v("Share Page")])]),e._v(" "),t("p",{staticClass:"card-text text-center"},[e._v("\n                Create your page and wasily share it via email or social.\n              ")])],1)],1)],1)],1)])],1)],1)}),[],!1,null,null,null),m=component.exports,title="Address Page | Create a Page for your On-Chain Address | SmartContracts Tools",y="Create a dedicated page for your On-Chain Address to share. Enter your Address details, create and share it with your customers.",h={components:{Create:m},head:function(){return{title:title,meta:[{hid:"description",name:"description",content:y},{name:"twitter:title",content:title},{name:"og:title",content:title},{name:"twitter:description",content:y},{name:"og:description",content:y},{name:"og:url",content:"https://www.smartcontracts.tools".concat(this.$router.currentRoute.path)},{name:"og:image",content:"https://www.smartcontracts.tools/assets/images/social/sct-address-page.png"},{name:"twitter:image",content:"https://www.smartcontracts.tools/assets/images/social/sct-address-page.png"}]}}},f=Object(d.a)(h,(function(){return(0,this._self._c)("Create")}),[],!1,null,null,null);t.default=f.exports}}]);