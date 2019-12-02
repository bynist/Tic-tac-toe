
// let player 



let winnerCond = [
                  ["0","4","8"],
                  ["0","3","6"],
                  ["1","4","7"],
                  ["2","5","8"],
                  ["6","7","8"],
                  ["3","4","5"],
                  ["0","1","2"],
                  ["6","4","2"]
                ]

      
let winnerPlayes = [] // [0,0,0]

// let box0= $('#0')
// let box1= $('#1')
// let box2= $('#2')
// let box3= $('#3')
// let box4= $('#4')
// let box5= $('#5')
// let box6= $('#6')
// let box7= $('#7')
// let box8= $('#8')

let box =$('.boxeslist div h1')
$(function (){
    let countN = 0
    let player1=[]
    let player2=[]
    
    
            box.on('click',function(event){
                if(countN <9 ){ // To count number of play
                    
                    if (countN %2 == 0){ // 

                        $(this).text('X') 
                         player1.push( $(this).attr('id'))
                    //   console.log("player x : "+player1)
                           $(this).off('click')
                           // to stopped click again in same box 
                      
                         countN += 1
                        } 
                        else {

                            $(this).text('O')
                             player2.push( $(this).attr('id'))
                            // console.log(player2)
                           $(this).off('click')
                         
                           countN += 1
                      
                         }
                    
                }
                
                //call the checkValue function 
                checkValue(player1,"player X")
                checkValue(player2,"player O")
              })    
           

            function checkValue(player,name){
                let result = true
                if (player.length >= 3){
                    for(let arr of winnerCond){ // FIRST LOOP FOR winnerCond
                        winnerPlayes = []
                        result = false

                        for(let arr2 of arr){// SECOND LOOP FOR winnerCond
                            if(player.indexOf(arr2) !== -1){
                                winnerPlayes.push(arr2)
                                if(winnerPlayes.length >= 3){
                                    result = true
                                    console.log("Player games: "+winnerPlayes)
                                    console.log( name+" Winner")
                                   // $(winnerPlayes.attr('id')).css('color','blue')
                                    $(box).off('click')
                                   // return result
                                }
                            }
                        }/// END SECOND LOOP
                         
                      } /// END FIRST LOOP
                     
                } 
               
            }


    

                  
            
       
        
           
 })
