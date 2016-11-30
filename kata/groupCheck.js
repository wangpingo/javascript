/**
 * Created by 35031 on 2016/11/29.
 */

function groupCheck(str,a) {
    var moudleJson = {
        '}': '{',
        ')': '(',
        ']': '['
    };
    var teamSaveArray = [];
    for (var i = 0; i < str.length; i++) {
        for (var key in moudleJson) {
            if (str[i] == key || str[i] == moudleJson[key]) {
                teamSaveArray.push(str[i]);
            }
        }
    }
    if (teamSaveArray.length) {
        if ((teamSaveArray.length % 2) != 0) {
            return false==a;
        } else {
            for (var j = 0; j < teamSaveArray.length; j++) {
                if (j > 0) {
                    if (moudleJson[teamSaveArray[j]] == teamSaveArray[j - 1]) {
                        teamSaveArray.splice(j - 1, 2);
                        j = 0;
                    }
                }
            }
        }
        if (teamSaveArray.length) {
            return false==a;
        } else {
            return true==a;
        }
    } else {
        return true==a;
    }
}
    console.log(groupCheck("({", false))
    console.log(groupCheck("()", true))
    console.log(groupCheck("([", false))
    console.log(groupCheck("[{", false))
    console.log(groupCheck("((", false))
    console.log(groupCheck("{{", false))
    console.log(groupCheck("[[", false))
    console.log(groupCheck("))", false))
    console.log(groupCheck("}}", false))
    console.log(groupCheck("]]", false))
    console.log(groupCheck("{", false))
    console.log(groupCheck("(", false))
    console.log(groupCheck("[", false))
    console.log(groupCheck("}", false))
    console.log(groupCheck(")", false))
    console.log(groupCheck("]", false))
    console.log(groupCheck("a{b", false))
    console.log(groupCheck(" ( ", false))
    console.log(groupCheck("a[ ", false))
    console.log(groupCheck("a } b", false))
    console.log(groupCheck("a)b", false))
    console.log(groupCheck("a]", false))
    console.log(groupCheck("()(a", false))
    console.log(groupCheck("(()", false))
    console.log(groupCheck("{}{", false))
    console.log(groupCheck("{{}", false))
    console.log(groupCheck("()(", false))
    console.log(groupCheck("[[]", false))
    console.log(groupCheck("{{}}", false))
    console.log(groupCheck("[[]]", false))
    console.log(groupCheck("(())", false))
    console.log(groupCheck("{}[]()", true))
    console.log(groupCheck("{[]}()", true))
    console.log(groupCheck("{[]()}", true))
    console.log(groupCheck("({}[])", true))
    console.log(groupCheck("{[}]()", false))
    console.log(groupCheck("{[](})", false))
    console.log(groupCheck("{[}]()", false))
    console.log(groupCheck("{(}[])", false))
    console.log(groupCheck("{}[](){", false))
    console.log(groupCheck("{}[]()[", false))
    console.log(groupCheck("{}[]()(", false))
    console.log(groupCheck("){}[]()", false))
    console.log(groupCheck("}{}[]()", false))
    console.log(groupCheck("]{}[]()", false))
    console.log(groupCheck("{a}[b](c)", true))
    console.log(groupCheck("{[a]}(b)", true))
    console.log(groupCheck("{[a](b)}", true))
    console.log(groupCheck("({a}b[c])", true))
    console.log(groupCheck("{[a}b]c()", false))
    console.log(groupCheck("{[a]b(c})", false))
    console.log(groupCheck("{[a}b]c()", false))
    console.log(groupCheck("{(a}b[c])", false))
    console.log(groupCheck("{a}b[c]d(e))f{", false))
    console.log(groupCheck("{a}[b](c)[", false))
    console.log(groupCheck("{}a[]b()c(", false))
    console.log(groupCheck("(()) [[]] {{}}", false))
    console.log(groupCheck("({()}) [([])] {[{}]}", true))
    console.log(groupCheck("(())", false))
    console.log(groupCheck("({()})", true))
    console.log(groupCheck("[[]]", false))
    console.log(groupCheck("[([])]", true))
    console.log(groupCheck("{{}}", false))
    console.log(groupCheck("{[{}]}", true))
    console.log(groupCheck("", true))
    console.log(groupCheck("Hello World?", true))
