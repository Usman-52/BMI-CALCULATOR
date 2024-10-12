clcBtn.addEventListener("click", function(){
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;

    

    if(height.trim() && weight.trim()) {
        height= height / 100;
        var bmi = (weight/(height * height)).toFixed(2);
        var resultText;
        if( bmi < 18.5) {
            resultText = `underWeight ${bmi}`
        }
        else if(bmi >= 18.5 && bmi <= 24.9){
            resultText = `Normal Weight ${bmi}`
        }else if( bmi >= 25 && bmi <= 29.9) {
            resultText = `over weight ${bmi}`
        }else {
           resultText =  `obesity ${bmi}`
        }

        document.getElementById("result").textContent = resultText;

        if (height <= 0 || weight <= 0) {
            alert("Please enter a positive value")
        }

    }

   else{
    alert("⛔ Both fields must be filled with positive Numbers")
   }

    
})