 
let miniCarGame={
     car : '',
     moveby :0,    
             
     initialize:function(){
       this.car =document.getElementById("greenCar");
     },

     moveCar:function(){
        let car =document.getElementById('greenCar')
        let moveby=0;
        let carobj=this.car
        let intervelId =null;
        window.addEventListener('keydown',(e)=>{ 

          switch (e.which){
           
            case 65 : {  
                moveby+=5;
                carobj.style.left = parseInt(moveby)+'px'               
              break;
            }

          
            case  82:{
              console.log('you pressed r');
              moveby-=5;
              carobj.style.left =parseInt(moveby)+'px'  
              break;    
            } 
           
            case  32:{
              clearInterval(intervelId)
              intervelId=null;
              console.log('u pressed space bar(accelarator)');
              intervelId= setInterval(move,10);                          
              function move(){ 
                moveby+=2;
                carobj.style.left = parseInt(moveby)+'px'  
              }
              break;
            }
            
            case  66:{
              console.log('u pressed break')
              clearInterval(intervelId)
              intervelId=null;
              break;
            }

            default:{ 
            console.log('follow instruction to run the car')
           }
          } 
          });
     }}
     
     
          miniCarGame.initialize();
          miniCarGame.moveCar();