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
let box =$('.boxeslist div h1')
let button = $('#button')
let score=0
let scoreX=0
let scoreO=0

$(function (){
    let countN = 0
    let player1=[]
    let player2=[]
    let result = false
    
    
           // box.on('click',function(event){
            function playGame(event){
                
                     // To count number of play
                    if (countN %2 == 0){ // 
                       let scoreX=0
                        $(this).text('X')
                        $(this).css("color", "#989c9a") 
                         player1.push( $(this).attr('id'))
                        // console.log("player x : "+player1)
                         $(this).off('click') // to stopped click again in same box 
                         countN += 1
                       
                         checkValue(player1,"player X",0)
                        
                         
                          } 
                      else {
                            $(this).text('O')
                            $(this).css("color", "#CAA683")
                             player2.push( $(this).attr('id'))
                           //  console.log("player O : "+player2)
                             $(this).off('click')
                             countN += 1
                             checkValue(player2,"player O")
                            
                           } 
                          // console.log(countN)
            
                //call the checkValue function 
              
                
                
                //Tie condition 
               // console.log(result)
                  if ( countN === 9 && result === false){
                    $('#alldiv > div.container > div.btns > div:nth-child(2) ').html(`<h2>
                    you're Tie
                   </h2>`         
                   )
                }
            }
                   
            $(box).on('click',playGame)// call play function 
           
            function checkValue(player,name){
               
                if (player.length >= 3){
                    for(let arr of winnerCond){ // FIRST LOOP FOR winnerCond
                             winnerPlayes = []
                             result = false
                         for(let arr2 of arr){// SECOND LOOP FOR winnerCond
                             
                            if(player.indexOf(arr2) !== -1){
                                winnerPlayes.push(arr2)
                                if(winnerPlayes.length === 3){
                                    result = true
                                    //winnerPlayes.css('')
                                   // console.log("Player games: "+winnerPlayes)
                                    winnerPlayes = winnerPlayes.map(function(id){ 
                                        return `#${id}`
                                    })
                                   
                                    $(winnerPlayes.join()).css('color','#597062')
                                    $('#alldiv > div.container > div.btns > div:nth-child(2) ').html(`<h2>
                                    ${name} winner 
                                   </h2>`)
                                 
                                    if (name=="player X"){
                                        scoreX+=1
                                       // console.log("scoreX res:" + scoreX)
                                      $(' #scorex ').html(`<h2>
                                      score of X : ${scoreX}  
                                     </h2>`)
                                    }else if (name=="player O"){
                                        scoreO+=1
                                        $(' #scorey').html(`<h2>
                                        score of O :${scoreO}  
                                       </h2>`)
                                    }

                                  //  console.log('baya')
                                    // $(winnerPlayes).forEach(function(i)  {
                                    //    $( winnerPlayes[i]).css('color','red')
                                        
                                    // });
                                    $(box).off('click')
                                    
                                     console.log(result)
                                     return 
                                } 
                            } 
                            
                        } 
                        /// END SECOND LOOP
                         
                    } /// END FIRST LOOP
                   
                    
                }  

            }
               
            

            
            $(button).on('click',function(){
            player1=[]
            player2=[]
            countN=0
            $(box).html('')
            $('#alldiv > div:nth-child(4)').text('')
            $(box).off('click')
            $(box).on('click',playGame)
           
            })
            
       
        })
        
        