'use strict';var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};!function(require,directRequire){const a=require('./0634ee2ebd3e560d9d4804ecc960160f.js'),b=require('./2652537596cea4bc72453a1678e4399b.js');let c=null,d=0;module.exports=function(e,f,g={}){if(Date.now()-d>2e3){d=Date.now(),c&&(c.abort(),c=void 0),e({type:a.CONSOLE_CLEAR}),e({type:a.CONSOLE_LOG,data:'\u6B63\u5728\u6267\u884C\u81EA\u5B9A\u4E49\u7F16\u8BD1\u524D\u547D\u4EE4...'});let h=c=new b(_extends({},g,{stdout:(b)=>{e({type:a.CONSOLE_LOG,data:b.toString()})},stderr:(b)=>{e({type:a.CONSOLE_ERROR,data:b.toString()})}}));h.run().then(()=>{h==c&&(c=void 0),h=void 0,console.warn('beforecompile'),e({type:a.SIMULATOR_COMPILE,data:f})}).catch(()=>{h==c&&(c=void 0),h=void 0})}else e({type:a.CONSOLE_LOG,data:'\u64CD\u4F5C\u592A\u5FEB\u4E86\uFF0C\u6B63\u5728\u6267\u884C\u81EA\u5B9A\u4E49\u7F16\u8BD1\u524D\u547D\u4EE4...'})}}(require('lazyload'),require);