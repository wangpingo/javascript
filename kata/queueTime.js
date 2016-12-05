/**
 * Created by 35031 on 2016/12/5.
 */
function queueTime(customers, n) {
    if(!customers || customers.length === 0) return 0;
    if(customers.length <= n)return Math.max.apply(null, customers);
    var pool = Array.from({length: n}).map(v => 0),
        i = 0,
        len = customers.length,
        min;
    for( ; i < len ;i++ ) {
        min = Math.min.apply(null, pool);
        pool[pool.lastIndexOf(min)] += customers[i];
    }
    return Math.max.apply(null, pool);
}
console.log(queueTime([],0));//0
console.log(queueTime([1,2,3,4],1));//10
console.log(queueTime([2,2,3,3,4,4],2));//9
console.log(queueTime([1,2,3,4,5],100));//5
console.log(queueTime([1,4,6,8,3],2));//1,3,4,6,8->10
console.log(queueTime([1,4,6,8,9,100],2));//16
//当n=0时， 0
//当n<arr.length
//当n>=arr.length 找最大