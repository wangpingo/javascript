/**
 * Created by 35031 on 2016/12/7.
 */
function validParentheses(parens) {
    var arr=parens.split('');
    for (var i=0;i<arr.length;i++){
        if (arr[i]==')'){
            if (arr[i-1]=='('){
                arr.splice(i-1,2);
                i=-1;
            }
        }
    }
    if (arr.length==0) return true;
    if (arr.length>0) return false;
}
console.log(validParentheses('()'));
console.log(validParentheses(')(()))'));
console.log(validParentheses('('));
console.log(validParentheses('(())((()())())'));