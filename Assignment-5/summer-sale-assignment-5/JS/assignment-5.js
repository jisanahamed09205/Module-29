let total = 0;

function handleClick(event) {
    const card = event.currentTarget;
    const selectItemContainer = document.getElementById('selected-item');
    const itemName = card.querySelector('.card-with-li').innerText;
    const li = document.createElement('li');
    li.style.listStyleType = 'decimal';
    li.innerText = itemName;
    if (selectItemContainer.innerHTML.indexOf(itemName) === -1) {
        selectItemContainer.appendChild(li);
    }
    const price = parseFloat(card.querySelector('.text-price-section').innerText.split(' ')[0]);
    total += price;
    const mainPrice = document.getElementById('total').innerText = total.toFixed(2);
    // console.log(mainPrice);
    const promoCodeInput = document.getElementById('promo-code-input');
    const promoCodeButton = document.getElementById('btn-apply');
    if (promoCodeInput.value === 'SELL200') {
        if (total >= 200) {
            promoCodeButton.disabled = false;
        } else {
            promoCodeButton.enabled = true;
        }
    }
}

function applyPromoCode() {
    const promoCodeInput = document.getElementById('promo-code-input');
    const promoCodeButton = document.getElementById('btn-apply');
    
    if (promoCodeInput.value === 'SELL200' && total >= 200) {
        const discount = total * 0.2;
        const discountedTotal = total - discount;
        document.getElementById('discount-result').innerText = discount.toFixed(2);
        document.getElementById('final-amount').innerText = discountedTotal.toFixed(2);
    }
}

const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('click', handleClick);
});

document.getElementById('btn-apply').addEventListener('click', applyPromoCode);
// page reset
function resetPage(){
    window.location.reload()
    // if(mainPrice > 0){
    //     
    // }
    // else{
    //     document.getElementById('my-modal-btn').removeAttribute('disabled');
    // }
}

