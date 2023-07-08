const Search =document.querySelector(".Search");
const input =document.querySelector("#input");
const select =document.querySelector("#select");
const result =document.querySelector(".result");



Search.addEventListener("click",(e)=>{
    let inputValue= input.value;
    let selectValue = select.value;

   if(input.value == ""){
      alert("Please enter word");                      
   }else{

        getApi(); 
   }
                            
});



async function  getApi(){
   let json = `words.json`; 
   let response = await fetch(json);
   let data = await response.json();
   
let rst = data.filter((item) => item.word ==input.value.toLowerCase())  

rst.forEach(element => {
       
  if(select.value == "deficiency"){
               
 result.innerHTML =`
      
   <div class="defini">                            <h5>Definition</h5> 
     <p>${element.definition}</p>                              </div> 
                            
     `                                          
  }else if(select.value == "examples"){

       result.innerHTML=`    
        <div class="examples">
             <h5>Examples</h5> 
             <p>${element.examples}</p>                 
             </div>`                     

  }

  else if(select.value == "synonyms"){

   result.innerHTML=`    
 <div class="synonyms">
      <h5>Synonyms</h5> 
 <p>${element.synonyms}</p>                 
 </div>`                     
 }

 else if(select.value == "antonyms"){

 result.innerHTML=`    
<div class="antonyms">
  <h5>Antonyms</h5> 
 <p>${element.antonyms}</p>                 
</div>`                     
 }
 else if(select.value == "All"){
   result.innerHTML =`
      
        <div class="defini">
                  <h5>Definition</h5> 
                            <p>${element.definition}</p>                 
                            </div> 
                            
                            
                            
                            <div class="examples">
                            <h5>Examples</h5> 
                            <p>${element.examples}</p>                 
                            </div>
                            
                            <div class="synonyms">
                            <h5>Synonyms</h5> 
                            <p>${element.synonyms}</p>                 
                            </div>
                            
                            <div class="antonyms">
                            <h5>antonyms</h5> 
                            <p>${element.antonyms}</p>                 
                            </div>
                            <br/>
                            <br/>
                            <div class="checkBox">
  <label for="">Learned</label>
   <input type="checkbox" id="checkbox">
 </div>

                            `
                 
 }

 AddTositItem(element) 
        


         
});      
}

  



function addToGitItem(){
  const item = localStorage.getItem("item");

  return item ? JSON.parse(item) : [];

}


function AddTositItem(element) {
  const NewArry = addToGitItem();
  NewArry.push(element);
  localStorage.setItem("item", JSON.stringify(NewArry));

}



const  getAllTolocal = () =>{
  const have =document.querySelector(".have")
  let all= localStorage.getItem("item");
  let data =JSON.parse(all)
console.log(data)
  data.forEach((element) => {
     have.innerHTML += `
     <div class="words">
     <div class="defini">
     <h1 class="ElementWord">${element.word}</h1>
     <h5>Definition</h5> 
               <p>${element.definition}</p>                 
               </div> 
               
               
               
               <div class="examples">
               <h5>Examples</h5> 
               <p>${element.examples}</p>                 
               </div>
               
               <div class="synonyms">
               <h5>Synonyms</h5> 
               <p>${element.synonyms}</p>                 
               </div>
               
               <div class="antonyms">
               <h5>antonyms</h5> 
               <p>${element.antonyms}</p>                 
               </div>
               </div>
     
     `
  })
}


getAllTolocal();