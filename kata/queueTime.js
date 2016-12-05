/*** Created by 350*/
function queueTime(customers, n) {
    if(!customers || customers.length === 0) return 0;
    if(customers.length <= n)return Math.max.apply(null, customers);
    var pool = Array.from({length: n}).map(v => 0),//创建一个有n长pool数组
        i = 0,
        len = customers.length,
        min;
    for( ; i < len ;i++ ) {
        min = Math.min.apply(null, pool);//找到pool里面的最小的元素
        pool[pool.lastIndexOf(min)] += customers[i];//pool[pool.lastIndexOf(min)] =pool[pool.lastIndexOf(min)] + customers[i]
    }
    return Math.max.apply(null, pool);
}
var pools = Array.from({length: 2});
console.log(pools.length);
console.log(queueTime([],0));//0
console.log(queueTime([1,2,3,4],1));//10 //[0] min=0 pool[0]=1;
console.log(queueTime([2,2,3,3,4,4],2));//9  // [0,0]
console.log(queueTime([1,2,3,4,5],100));//5
console.log(queueTime([1,4,6,8,3],2));//1,3,4,6,8->10
console.log(queueTime([1,4,6,8,9,100],2));//16
//当n=0时， 0
//当n<arr.length
//当n>=arr.length 找最大