function calc(){
    let inpOne = (document.getElementById("inpOne").value).toLowerCase();
    let inpTwo = (document.getElementById("inpTwo").value).toLowerCase();

    let calLove = Math.round(Math.random()*100);
    let loveCal =`${calLove} %`
    let mylove = (Math.random() * (100 - 90) + 90).toFixed(0);    
    if(inpOne =="" || inpTwo ==""){
        error.style.display ="block"
    }else{
        error.style.display ="none"
        if((inpOne == 'joy' || inpOne == 'angel' || inpOne == 'ajoke'|| inpOne== 'oluwaseyi' || inpOne == 'seyi' || inpOne == 'samuel' || inpOne == 'aniekan' || inpOne =='abegunrin') && (inpTwo == 'joy' || inpTwo =='angel' || inpTwo =='ajoke'|| inpTwo =='oluwaseyi' || inpTwo =='seyi' || inpTwo =='samuel' || inpTwo =='aniekan'|| inpTwo =='abegunrin')){
            display.innerHTML = `<h2 style="color:white">${mylove}%</h2>
            <p style="color:white;" >Love Birds... You guys should just go and pick wedding date</p>
            </p>
        `
        
        }else if(calLove == 0 || calLove<=20){
            display.innerHTML =`<h2 style="color:white">${loveCal}</h2>
                <p style="color:white;" >Both of you are using your future Play</p>
            `
        }else if(calLove == 20 || calLove<=40){
            display.innerHTML =`<h2 style="color:white">${loveCal}</h2>
            <p style="color:white;">Bro, Sis its better you escape for your life. Better ones are coming  </p>
            `
        }else if(calLove == 40 || calLove<=60){
            display.innerHTML =`<h2 style="color:white">${loveCal}</h2>
            <p style="color:white;">You guys are still compatible but Bro don't trust Eve, Likewise Sister Don't Trust your Adam... E fit Japa</p>
            `
        }else if(calLove == 60 || calLove<=80){
            display.innerHTML = `<h2 style="color:white">${loveCal}</h2>
            <p style="color:white;">You guys are still a bit compatible, move on to growing your love for each other</p>
            `
        }else if(calLove == 80 || calLove <=100){
            display.innerHTML =`<h2 style="color:white">${loveCal}</h2>
            <p style="color:white;">Love Birds... You guys should just go and pick wedding date</p>
            `
        }
        document.getElementById("inpOne").value = ""
        document.getElementById("inpTwo").value = ""
    }
}w