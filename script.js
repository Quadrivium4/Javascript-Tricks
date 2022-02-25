function get(str){
    str = str.split('');
    if(str[0] == '.'){
        str.shift();
        str = str.join('');
        return document.getElementsByClassName(str);
    }
    else if(str[0] == '#'){
        str.shift();
        str = str.join('');
        return document.getElementById(str);
    }
    else{
        str = str.join('');
        return document.getElementsByTagName(str);
    }
}
function styleAll(str, attr, value){
    for(let i = 0; i <get(str).length; i++){
        get(str)[i].style[attr]= value;
    }
}
