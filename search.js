
document.querySelector("input").addEventListener("input", function(e){
  val = e.target.value.toUpperCase();
  
  console.log(val)
  
  let user = users.filter((ele)=> 
    
    !ele.name.first.toUpperCase().indexOf(val) ||  !ele.name.last.toUpperCase().indexOf(val)
  )
  
  console.log(user)
  
  showData(user)
  
})



function showData(user){
  
document.querySelector(".container").innerHTML = ""
  
  user.map((ele) => {
  
document.querySelector(".container").innerHTML += `
  <div>
    <div>
      <img src="${ele.picture.large}" />
      <h3>${ele.name.first} ${ele.name.last}</h3>
      <i>${ele.email}</i>
    </div>
  </div>

`
})



}


users.map((ele) => {
  
document.querySelector(".container").innerHTML += `
  <div>
    <div>
      <img src="${ele.picture.large}" />
      <h3>${ele.name.first} ${ele.name.last}</h3>
      <i>${ele.email}</i>
    </div>
  </div>

`
})



