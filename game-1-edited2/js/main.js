
var basket = document.getElementById("basket");
var egg = Array.from( document.querySelectorAll("#egg-img"));
var eggBroken = Array.from( document.querySelectorAll("#broken-egg-img"));
var score = document.getElementById('score');
var life = document.getElementById('life');
var posEgg1 = 0;
var posEgg2 = 0;
var posEgg3 = 0;
var count = 0;
var life= 10;
var IntervalStartEgg1;
var IntervalStartEgg2;
var IntervalStartEgg3;
var result = 0;
var loss = 10;
var randomInterval = 30;
var randomInterval2 = 10;
var randomInterval3 = 20;

document.body.addEventListener("mousemove",function(e){

    basket.style.left = e.clientX;
})


function callAll()
{
    startEgg2();
    startEgg();
    startEgg3();
}
function startEgg2()
{
    
    IntervalStartEgg2 = setInterval("moveEgg2()",randomInterval2);

}
function startEgg3()
{
    
    IntervalStartEgg3 = setInterval("moveEgg3()",randomInterval3);
}
function startEgg()
{
    IntervalStartEgg1 = setInterval("moveEgg()",randomInterval);
}

function moveEgg()
{
    
        
        if(posEgg1 < 740)
        {
            posEgg1 +=2;
            egg[1].style.top = posEgg1 + "px";
            egg[1].style.display = 'block';
            eggBroken[1].style.display = 'none';
           
        }
       
        else if(basket.getBoundingClientRect().left >= (egg[1].getBoundingClientRect().left - 60) && basket.getBoundingClientRect().left <= (egg[1].getBoundingClientRect().left + 20))
        {
            clearInterval(IntervalStartEgg1);
            posEgg1 = 0;
            randomInterval = Math.floor((Math.random() * 20) + 10);
            result++;
            document.getElementById('result').innerHTML = "score "+ result;
            eggBroken[1].style.display = 'none';
            //console.log(result);
            startEgg();
        }
        else
        {
            clearInterval(IntervalStartEgg1);
            randomInterval = Math.floor((Math.random() * 20) + 10);
            posEgg1 = 0;
            loss--;
            document.getElementById('loss').innerHTML = "Life "+ loss;
            eggBroken[1].style.display = 'block';
            egg[1].style.display = 'none';
            setTimeout(startEgg,2000)
            // startEgg();
        }

    }

//}

// -------------------------------------------------------------------
function moveEgg2()
{
    //debugger;

        if(posEgg2 < 740)
        {
            posEgg2 +=2;
            egg[2].style.top = posEgg2 + "px";
            eggBroken[2].style.display = 'none';
            egg[2].style.display = 'block';
        }

        else if(basket.getBoundingClientRect().left >= (egg[2].getBoundingClientRect().left - 60) && basket.getBoundingClientRect().left  <= (egg[2].getBoundingClientRect().left + 20))
        {
            clearInterval(IntervalStartEgg2);
            posEgg2 = 0;
            result++;
            document.getElementById('result').innerHTML = "score " + result;
            eggBroken[2].style.display = 'none';
            //console.log(result);
            startEgg2();
        }
        else
        {
            randomInterval2 = Math.floor((Math.random() * 20) + 10);
            console.log("2: "+ randomInterval2);
            clearInterval(IntervalStartEgg2);
            posEgg2 = 0;
            loss--;
            document.getElementById('loss').innerHTML = "Life "+ loss;
            eggBroken[2].style.display = 'block';
            egg[2].style.display = 'none';
            setTimeout(startEgg2,2000);
            // startEgg2();
        }

}
// -------------------------------------------------------------------
function moveEgg3()
{
    //debugger;

        if(posEgg3 < 740)
        {
            posEgg3 +=2;
            egg[0].style.top = posEgg3 + "px";
            eggBroken[0].style.display = 'none';
            egg[0].style.display = 'block';
        }

        else if(basket.getBoundingClientRect().left >= (egg[0].getBoundingClientRect().left - 60) && basket.getBoundingClientRect().left  <= (egg[0].getBoundingClientRect().left + 20))
        {
            clearInterval(IntervalStartEgg3);
            posEgg3 = 0;
            randomInterval3 = Math.floor((Math.random() * 20) + 10);
            result++;
            document.getElementById('result').innerHTML = "score "+ result+"";
            eggBroken[0].style.display = 'none';
            startEgg3();
        }
        else
        {
            
            randomInterval3 = Math.floor((Math.random() * 20) + 10);
            clearInterval(IntervalStartEgg3);
            posEgg3 = 0;
            loss--;
            document.getElementById('loss').innerHTML = "Life "+ loss;
            egg[0].style.display = 'none';
            eggBroken[0].style.display = 'block';
            setTimeout(startEgg3,2000)
            // startEgg3();
        }

}





























// function hideEgg()
// {

//     document.body.addEventListener("mousemove",function(e){
//     console.log(e.clientX)

//         if(egg.e.clientX == 347 && basket.e.clientX == 347)
//         {
//             // window.alert("hideEgg")

//             for(var i=0; i<egg.length; i++)
//              {
//                 egg[i].style.display ="none";
//                 console.log(e.clientX)

//             }
//             count++;
//             score.innerHTML = count;
//         }



//     else if(egg.e.clientX == 437 && basket.e.clientX == 437)
//     {
//         for(var i=0; i<eggBroken.length; i++)
//         {

//             eggBroken[i].style.display ="block";
//         }
//       life--;
//         score.innerHTML = count;
//     }

//     })



// }

