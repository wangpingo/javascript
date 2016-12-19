/**
 * Created by 35031 on 2016/12/19.
 */
'use strict';
var obj={
    'qq':'222222',
    'weixin':'dasds'
};
obj[Symbol.iterator]=function () {
    let i=0;
    let self=this;
    const names=Object.keys(this);
    const length=names.length;
    //iterator
    return {
        next:function () {
            let name=names[i++];
            let qq=self[name];
            return {value: {name,qq},done:i>length}
        }
    }
};
for (let u of obj)console.log(u);