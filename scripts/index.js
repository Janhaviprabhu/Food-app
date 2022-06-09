let id;

async function main(){

let ip= document.getElementById("food").value;

if(ip==""){
    document.getElementById("results").innerHTML=null;
}
else{
    let url= `https://www.themealdb.com/api/json/v1/1/search.php?s=${ip}`
    async function getdata(){
        try{
            let res= await fetch(url)

            let data= await res.json();
           appendinResult(data.meals)
           console.log(data.meals)

        }
        catch(error){
            console.log(error)
        }
    }
    getdata()
}
}

let appendinResult= (data)=>{
    document.getElementById("results").innerHTML=null;

    data.forEach((ele)=>{

        let div=document.createElement("div")
        div.setAttribute("class","div")

        let p=document.createElement("p")
        p.innerText=ele.strMeal;
        p.setAttribute("class","p")
        p.addEventListener("click",showmeal)
        p.style.cursor="pointer";

        div.append(p)
        document.getElementById("results").append(div)

        function showmeal(){
            document.getElementById("results").innerHTML=null;
            document.getElementById("appendresult").innerHTML=null;
            let meal=ele.strMeal;

            async function getmeal(){
                let res = await fetch(
                  `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`);

                  let data= await res.json()

                  appendmeal(data.meals)

            }
            getmeal()
        }

        //--appending Meals to Body--//

        function appendmeal(data){
            document.getElementById("appendresult").innerHTML = null;

            data.forEach((el)=>{
                
                let box=document.createElement("div")
                box.setAttribute("class","box")

                let img=document.createElement("img")
                img.src=el.strMealThumb;
                img.setAttribute("class", "img")

                let name= document.createElement("p")
                name.innerHTML= el.strMeal;
                name.setAttribute("class","name")

                let area= document.createElement("p")
                area.innerHTML="Origin :=" +el.strArea;
                area.setAttribute("class", "name");

                let des= document.createElement("p")
                des.innerText=el.strInstructions;
                des.setAttribute("class", "name");

                box.append(img,name,area,des)

                document.getElementById("appendresult").append(box)

            })
        }


    })
}

function debouncing(fun,delay){
    if(id)
    {
        clearTimeout(id)
    }
    id=setTimeout(function(){
        fun()
    },delay)
}