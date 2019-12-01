const player1=[]
const player2=[]
// let player 

let games = [[],[],[]]



let box1= $('#box1')
let box2= $('#box2')
let box3= $('#box3')
let box4= $('#box4')
let box5= $('#box5')
let box6= $('#box6')
let box7= $('#box7')
let box8= $('#box8')
let box9= $('#box9')

let box =$('.boxeslist div h1')
$(function (){
    let countN =0
    let arr=[]
    let j=0
    
    
            box.on('click',function(event){
                if(countN<9 ){ // To count number of play
                    
                    if (countN%2 == 0){ // 
                      //  let indX=0
                            $(this).text ('X') 
                            $(this).off('click')// to stopped click again in same box 
                          countN += 1
                        } else {
                        //  let indX=5
                            $(this).text ('O')
                           $(this).off('click')
                        
                           countN += 1
                        }
                }
                console.log(games)
                return arr
              })    
             console.log((arr))
            //  function chickWinner(arr1){
            //      if (arr1[])
            //   let x = $('this').eq(1)
            //   console.log(x) 
            //   let y = $('this').eq(2)
            //   console.log(y) 
            //  }
            function checkValue (arrV){

                $("arrV").eq().click

            }


            checkValue(arr)


                


             
            
       
        
           
 })
