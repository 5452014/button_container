let nums=[1,2,3,6,9,8,7,4];
const ids=[1,2,3,6,9,8,7,4];

let btn5=document.querySelector('#btn5')

btn5.addEventListener('click', function () {
    btn_values.unshift(nums.pop());
   for (let i = 0; i < id.length; i++) {
    document.getElementById("btn"+id[i]).innerHTML=nums[i]
    
   }
});