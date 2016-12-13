/**
 * Created by 35031 on 2016/12/6.
 */

function clone(arr)
{
    var ret = new Array();
    for (var p in arr)
    {
        ret[p] = arr[p];
    }
    return ret;
}
var LRU = function (obj)
{
    this.arr = clone(obj.arr); //页地址流
    // console.log(this.arr);// iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
    this.pages = obj.pages; //页数
    //this.stack=new Array(this.pages);
    this.stack = [];
    // console.log(this.stack);//iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
    this.count = 0; //命中数
};
LRU.prototype = {
    init: function ()
    {
        this.run();
    },
    run: function ()
    {
        var i = 0,
            len = 0,
            arr = this.arr,
            stack = this.stack,
            tmp = new Array(),
            stack2;
        for (var j in arr)//2 ,3,2,1
        { //页地址流
            console.log(arr[j]);//-----------------------------------
            stack2 = clone(stack);
            for (i = 0, len = this.pages;i < len; i++)
            {
                if (arr[j] == stack[i])
                {
                    this.count++;
                    tmp = stack.splice(i, 1);
                    stack.unshift(tmp[0]); //LRU操作，重新排序
                    break;
                }
            }
            //console.log(stack2);//----------------------------------
            if (i == len && stack[i] == undefined) stack.unshift(arr[j]);
            else if (i == len)
            {
                stack.pop();
                stack.unshift(arr[j]);
            } //LRU操作,删除并添加
            else continue;
        }
    }
};
//缺页
// var arr = ranArr(20, 5);
// console.log(arr);
arr = [7,0,1,2,0,3,0,4,2,3,0,3,2,1,2,0,1,7,0,1];
var obj = new LRU(
    {
        arr: arr,
        pages: 3
    });
obj.run();
// obj.init();
console.log(obj);
console.log(obj.count / (obj.arr.length));