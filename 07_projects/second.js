const form = document.querySelector('form')
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')

    if(height==="" || height<1 || isNaN(height)){
      result.innerText = "please enter valid height"
    }
    else if(weight==="" || weight<1 || isNaN(weight)){
      result.innerText = "please enter valid height"
    }
    else{
      const bmi = (weight/((height*height)/10000)).toFixed(2)
      result.innerHTML=`<span>${bmi}</span>`
    }
})