let count = 0;

//Gombok és egyéb elemek eltárolása változókba
const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");


//const decrease = document.getElementById("decrease");
//const reset = document.getElementById("reset");
//const increase = document.getElementById("increase");


console.log(btns);

//Ciklussal végiglépkedek az eltárolt gombokon, amelyeken rajta van a .btn class
btns.forEach((btn)=>{

    //Az összes gomb közül, amelyeket bejárok a ciklussal, melyiket kattintottam meg
    btn.addEventListener("click" , (e)=>{
        
        //Az éppen aktuálisan megkattintott gombom
        const style = e.currentTarget.classList;

        //Ha az akutálisan megktat
        if(style.contains("decrease")){

            count--;
        }

        else if(style.contains("increase")){

            count++;
        }

        else{

            count = 0;
        }

        //Színek hozzáadása a spanhez
        if(count > 0){

            value.style.color="green";
        }

        else if(count < 0){

            value.style.color="red";
        }

        else{

            value.style.color="black";
        }



        value.textContent = count;
    })

})



/*
//Egyszerű, lusta módszer
increase.addEventListener("click" , ()=> {

    //Növeelem az alapértékem 1-el
    count++;

    //Megnézem, hogy az alapértékem nagyobb-e mint 0
    if(count > 0){

        //ha nagyobb, hozzáadok zöld betűtszínt
        value.style.color = "green";
    }
    
    //Majd az alapértékem aktuális értékét beállítom a value id-val elátott spannek
    value.textContent = count;

})


decrease.addEventListener("click" , ()=> {

    count--;

    if(count < 0){

        value.style.color = "red";
    }
    
    value.textContent = count;

})

//Egyszerű, lusta módszer
reset.addEventListener("click" , ()=> {

    //Az alapértéket visszaállítjuk 0-ra
    count = 0;
    
    //A betűszínt visszaállítom feketére
    value.style.color = "black";

    value.textContent = count;

})

*/