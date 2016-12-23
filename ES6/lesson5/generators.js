/**
 * Created by 35031 on 2016/12/23.
 */
'use strict';
function sum() {
    return a+b;
}
function *fn() {
    let result=sum(yield 1,yield 2);
    console.log('my qq:'+(yield qq));
}
fn();