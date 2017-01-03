/**
 * Created by 35031 on 2017/1/3.
 */
'use strict';
var obj={name:'leo'};
var proxy=new Proxy(obj,{
   get:function (target,key) {
       return 'no';
   },
   set:function (target,key,value) {
        
    }
});
console.log(proxy.name);
