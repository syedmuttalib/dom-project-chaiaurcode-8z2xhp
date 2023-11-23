const from=document.querySelector('form')
from.addEventListener('submit',(e)=>{
e.preventDefault() // default action will stop
//add target.value==== and convert it string to parseInt
const height=parseInt(document.querySelector('#height').value)
const weight=parseInt(document.querySelector('#weight').value)
const results=document.querySelector('#results')
if(height == "" || height < 0 || isNaN(height))
{
   results.innerHTML=`please enter valid height ${height}`
}
else if(weight == "" || weight < 0 || isNaN(weight))
{
  results.innerHTML=`please enter valid height ${weight}`
}
else
{
  const bmi=(weight/((height*height)/10000)).toFixed(2);
  // const Result=results.innerHTML=`<span>${bmi}</span>`
  if(bmi <=18.6)
  {
    results.innerHTML=`under weight ${bmi}`
  }else if(bmi<=18.6 && bmi>24.9)
  {
    results.innerHTML=`Normal Range ${bmi}`
  }else if(bmi>24.9){results.innerHTML=`Over weight ${bmi}`}
}


})

// const height=document.getElementById('height')
// // console.log(height)
// const weight=document.getElementById('weight')
// // console.log(weight)
// let cal_btn=document.getElementsByTagName('button')
// console.log(cal_btn)
// const result=document.getElementById('results')
// console.log(result)
// const weight_guide=document.getElementById('weight-guide')
// console.log(weight_guide)

// cal_btn=weight/(height*height)
// console.log(cal_btn)



