// 
const annuallyPrice = document.querySelectorAll('.pricing-component .price.annually');
const monthlyPrice = document.querySelectorAll('.pricing-component .price.monthly');

console.log(annuallyPrice, monthlyPrice);
// # Function to select plan
function selectPlan(btn) {
    btn.classList.toggle('annually');
    btn.classList.toggle('monthly');
    
    if (btn.classList.contains('annually')) {
        removeActiveClassFromAll(monthlyPrice);
        addActiveClassFromAll(annuallyPrice);
    } else {
        removeActiveClassFromAll(annuallyPrice);
        addActiveClassFromAll(monthlyPrice);
    }
}
// # Function to remove active class from all items in array.
function removeActiveClassFromAll(arr) {
    arr.forEach(item => {
        item.classList.remove('active');
    })
}
// # Function to add active class to all items in array.
function addActiveClassFromAll(arr) {
    arr.forEach(item => {
        item.classList.add('active');
    })
}