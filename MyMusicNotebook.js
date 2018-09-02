function dropDown(){
    var x = document.getElementById('navTab');
        if(x.className==="links"){
            x.className+=" mobileNav";
        }else{
            x.className = "links";
        }
}