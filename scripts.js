

  const dob = document.getElementById("subject");
  const fathername = document.getElementById("father");
  const fatherph = document.getElementById("fatherphn");
  const address = document.getElementById("add");
  const gender=document.getElementById("gen");
  const roll=document.getElementById("roll no");
  const email=document.getElementById("email");
  const phn=document.getElementById("phone");
  const myform = document.getElementById("myform");
  const errorElement=document.getElementById("error-message");
  myform.addEventListener('submit',(e)=>{
    let messages=[]
    if(dob.value==='' ||dob.value==null){
      messages.push('enter valid dob')
    }
    if(fathername.value.length<=6){
      messages.push('enter valid name')
    }
    if(fatherph.value==='' ||fatherph.value==null){
      messages.push('enter valid phone')
    }
    if(address.value==='' ||address.value==null){
      messages.push('enter valid address')
    }
    if(gender.value==='' ||gender.value==null){
      messages.push('enter valid gender')
    }
    if(roll.value==='' ||roll.value==null){
      messages.push('enter valid number')
    }
    if(email.value==='' ||email.value==null){
      messages.push('enter valid email')
    }
    if(phn.value==='' ||phn.value==null){
      messages.push('enter valid phone')
    }

    if(messages.length >0){
      e.preventDefault()
      errorElement.innerText=messages.join(', ')
    }

  })
