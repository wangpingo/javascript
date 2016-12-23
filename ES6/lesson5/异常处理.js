/**
 * Created by 35031 on 2016/12/23.
 */
'use strict';
function *fn() {

    let qq ;//默认情况下返回undefine，不会抛出异常
    try {
        qq=yield;
    }catch(e) {
        console.log('qq have error!')
    }
    console.log(qq);
}
let g=fn();
g.next();
// g.next('qq 1593894520');
g.throw('error!');