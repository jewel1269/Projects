
   
    
    const flowChart = document.getElementById('flow-chart')
    
    const discountPrice = document.getElementById('discount-price');
    



const allButton = document.getElementsByClassName('btn btn-primary');
let count = 0;
for(const btn of allButton){
    btn.addEventListener('click', function(e){
        count = count + 1;
        const placeName = e.target.parentNode.parentNode.childNodes[1].innerText;
       const price = e.target.parentNode.parentNode.childNodes[4].innerText;
       const convertedPrice = parseInt(price)
       console.log(convertedPrice)
   
  
    
    //    const addPrice = document.getElementById('flow-chart').innerText = placeName;
    // //    const addPrice = document.getElementById('flow-chart').innerText = price;
const selectContainer = document.getElementById('flow-chart');
const li = document.createElement('li');
const p = document.createElement('p')
p.innerText = placeName;
const p2 = document.createElement('p')
p2.innerText = price;
      li.appendChild(p);
       li.appendChild(p2);
       selectContainer.appendChild(li);


       const totalCost = document.getElementById('total-price').innerText;
     const convertedTotalCost = parseInt(totalCost);
     const outShow = convertedPrice + convertedTotalCost;
    // console.log(totalCost)
    
     

       
     document.getElementById('total-price').innerText= outShow;
     const finalAmount =  document.getElementById('total').innerText= outShow;
     console.log(finalAmount)
})
}

const applyCoupon = document.getElementById('apply-coupon');
applyCoupon.addEventListener("click", function(){
    
const inputArea = document.getElementById('input-field').value;
     const couponCode = inputArea.split(" ").join("").toUpperCase();

if(finalAmount >= 200){
     if(couponCode === "SELL200"){
        const inputField = document.getElementById('discount-price')
      const discountAmount = finalAmount * 0.2;
      inputField.innerText = discountAmount;
     }
     else{
        alert("Invalid Coupon");
     }
    }
    else{
        alert("Please fill up 200$")
    }

})














