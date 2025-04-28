let logBtn = document.getElementById("logBtn");

 logBtn.addEventListener("click", function(){
    document.querySelector(".loginPage").style.display="block";
 })
 addEventListener("click", function(){

    let email = document.getElementById("name");
    let pass = document.getElementById("pass");

    if(email.value == "" || pass.value == ""){
        alert("Please Enter Email Password")
    }else{
        alert("You Loged In");
        document.querySelector(".loginPage").style.display="none";

    }

 })
 trackBtn.addEventListener("click", function(){
    document.querySelector(".tracking").style.display="flex";
    document.getElementById("order").style.display="none";
 })
 let cart = [];
        let totalPrice = 0;
        
        function addToCart(button) {
            const item = button.parentElement;
            const name = item.getAttribute('data-name');
            const price = parseFloat(item.getAttribute('data-price'));
        
            cart.push({ name, price });
            
            totalPrice += price;
        
            updateCartDisplay();
        }
        function updateCartDisplay() {
            const cartItemsList = document.getElementById('cart-items');
            cartItemsList.innerHTML = ''; 
        
            cart.forEach((item, index) => {
                const listItem = document.createElement('li');
                listItem.textContent = `${item.name} - Rs${item.price.toFixed(2)} `;
                

                const removeButton = document.createElement('button');
                removeButton.textContent = 'Remove';
                removeButton.onclick = () => removeFromCart(index);
                listItem.appendChild(removeButton);
        
                cartItemsList.appendChild(listItem);
            });
        
            document.getElementById('total-price').textContent = totalPrice.toFixed(2);
        }