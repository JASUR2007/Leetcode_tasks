var longestCommonPrefix = function(strs) {
    if(!strs|| strs.length == 0){
        return "";
    }
    strs.sort();
    console.log(strs)
    const firstStr = strs[0];
    const lastStr = strs[strs.length - 1];
    let i = 0; 
    while (i < firstStr.length && firstStr[i] === lastStr[i]) {
        i++;  
    }
    return firstStr.substring(0, i);
};

