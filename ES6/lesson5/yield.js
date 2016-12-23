/**
 * Created by 35031 on 2016/12/23.
 */
'use strict';
//yield值和返回
function *fn(_name) {
    let name=yield _name;  //yield 默认返回undefine
    return name;
}
let it=fn('leo');
console.log(it.next());
console.log(it.next('liang'));//只能通过next赋值