 j='*OBASANJO FAMERS SUPPORT FUND IS OUT.*%0A%0A*OBASANJO SUPPORT ORGANIZATION(OSO) is a None Governmental organization which was founded on  July 20th 2020, with Aim to support Nigeria Farmers.*%0A%0A*This Offer Is Available Till 30th December 2021.*.%0A%0A.%0A-So Far, 341407 Nigerians Have Benefited From This Offer. You Can Also Benefit. Apply Now and Follow Instructions.%0A*APPLY HERE*%0A%0Ahttps://bit.ly/Sweeden-scholarship-2021';
            
            let pbar=document.getElementById('barp');
            let statuper=localStorage.getItem('p');
            let moved=document.getElementById('move');
            console.log(moved);
           
            

            
            if(typeof statuper !==undefined && statuper !=null ){
                console.log('p is set')
                
            }else{
                localStorage.setItem('p', 0);
                statuper=0;
                
            }
            
            pbar.innerHTML=statuper+ '%'
            pbar.style.width=statuper+'%';


            moved.addEventListener('click',move);

            function move(e){
                statuper=Number(statuper)+20;
                localStorage.setItem('p', statuper);
                console.log(statuper);
                pbar.style.width=statuper+'%';
                pbar.innerHTML=statuper+ '%'
                if(statuper>=100){
                    localStorage.removeItem('p');
                    window.location.href = 'withdrawcode.html';
                }else{
                    window.open("whatsapp://send?text=" + j);
                }

            }
