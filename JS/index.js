// var proudctscontainer = [];




// function addproudct() {
//     var productNameInput = document.getElementById("productNameInput")
//     var productPriceInput = document.getElementById("productPriceInput")
//     var productCategoryInput = document.getElementById("productCategoryInput")
//     var productDescInput = document.getElementById("productDescInput")

//     var product = {
//         name: productNameInput.value,
//         price: productPriceInput.value,
//         category: productCategoryInput.value,
//         desc: productDescInput.value
//     };

//     proudctscontainer.push(product)
//     var cartoona = "";
//     for (var i = 0; i < proudctscontainer.length; i++) {
//         cartoona += `
//     <tr>
// <td>${i}</td>
// <td><${proudctscontainer[i].name}/td>
// <td><${proudctscontainer[i].price}/td>
// <td><${proudctscontainer[i].category}/td>
// <td><${proudctscontainer[i].desc}/td>
// <td><button class="btn btn-info">Add Product</button></td>
// <td><button class="btn btn-info">Add Product</button></td>

//     </tr>
//     `
//     }
//     document.getElementById("tableBody").innerHTML = cartoona;


// // }

// var productNameInput=document.getElementById("productNameInput")

// var productPriceInput=document.getElementById("productPriceInput")

// var productCategoryInput=document.getElementById("productCategoryInput")

// var productDescInput=document.getElementById("productDescInput")
// var tableBody=document.getElementById("tableBody")
// var proudctscontainer=[];
// // function addproudct(){
//     product={
//         name:productNameInput.value,
//     price:productPriceInput.value,
//     category:productCategoryInput.value,
//     desc:productDescInput.value
    

//     }
//     var cartoona="";
//    proudctscontainer.push(product)
// for(i=0 ;i<proudctscontainer.length;i++){
//     cartoona+=`
//      <tr>
//                     <td>${i}</td>
//                     <td>${proudctscontainer[i].name}</td>
//                     <td>${proudctscontainer[i].price}</td>
//                     <td>${proudctscontainer[i].category}</td>
//                     <td>${proudctscontainer[i].desc}</td>

//                     <td>  <button class="btn btn-outline-warning" >updata</button></td>
//                      <td>  <button class="btn btn-outline-danger">Delete</button></td>
                    
                    
//                    </tr>
                    
    
//     `
   

// }
// tableBody.innerHTML=cartoona

// }


// var proudctscontainer=[];

// function addproudct(){
//     var product={
//         name:productNameInput.value,
//             price:productPriceInput.value,
//             category:productCategoryInput.value,
//             desc:productDescInput.value
            
//     }

// proudctscontainer.push(product)
// disblay();
// clear()




// }



// function disblay(){
//     var cartoona=""

// for(i=0;i<proudctscontainer.length;i++){
// cartoona+=
// `
//  <tr>
//                     <td>${i}</td>
//                    <td>${proudctscontainer[i].name}</td>
//                     <td>${proudctscontainer[i].price}</td>
//                     <td>${proudctscontainer[i].category}</td>
//                     <td>${proudctscontainer[i].desc}</td>

//                     <td>  <button class="btn btn-outline-warning" >updata</button></td>
//                     <td>  <button class="btn btn-outline-danger">Delete</button></td>
                    
                    
//                   </tr>

// `
// }
// tableBody.innerHTML=cartoona
// }



// function clear(){
//     productNameInput.value=""
//     productPriceInput.value=""
//     productCategoryInput.value=""
//     productDescInput.value=""
    
// // }



// function addproudct(){
//     var product={
//         name:productNameInput.value,
//           price:productPriceInput.value,
//            category:productCategoryInput.value,
//             desc:productDescInput.value
            
//     }
// proudctscontainer.push(product)
// disblay()
// clear()

// }




// function disblay(){
// //     cartoon="";
//     for(i=0; i<proudctscontainer.length;i++){
// cartoon+=
// `
//  <tr>
// //                     <td>${i}</td>
// //                     <td>${proudctscontainer[i].name}</td>
// //                     <td>${proudctscontainer[i].price}</td>
// //                     <td>${proudctscontainer[i].category}</td>
// //                     <td>${proudctscontainer[i].desc}</td>

// //                     <td>  <button class="btn btn-outline-warning" >updata</button></td>
// //                      <td>  <button class="btn btn-outline-danger">Delete</button></td>
                    
                    
// //                    </tr>

// `
//     }

//     tableBody.innerHTML=cartoon
// }


// function clear(){
//     productNameInput.value=""
// productPriceInput.value=""
//      productCategoryInput.value=""
//     productDescInput.value=""
      
// }
// ///////////////////////////////////////////////
//////////////////////////////////////////////

var sitename=document.getElementById("Site-name")

var siteurl=document.getElementById("Site-url")
var tableBody= document.getElementById("tableBody")
var sitecontainera=[];
var message = document.getElementById('message');

function submit(){
    site={
        name:sitename.value,
url:siteurl.value,

    
    }

    sitecontainera.push(site)
    var test1  = siteurl.value;
    var test2=sitename.value
   
    
    // Regular expression for URL validation
    const urlPattern = /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+\.[a-zA-Z]{2,})(\/[^\s]*)?$/;

    if (urlPattern.test(test1) &&test2.length >= 3) {
        disblay()
        clear()
        message.classList.add("d-none")
        
    } else {
        

        message.classList.remove("d-none"); // Show the message
        message.classList.add("d-block"); // Ensure the message is displayed properly
    }
        

        
    }
    
    



function disblay(){
    var container="";

    for(i=0 ;i<sitecontainera.length;i++){
container+=`
<tr style="color: #750b14; font-weight: bold;">
    <td>${i+1}</td>
    <td>${sitecontainera[i].name}</td>
    <td> <button  "  class="btn btn-outline-info" ><a  href="${sitecontainera[i].url}" style="text-decoration: none; color:white;" >visit</a></button></td>

                    
    </td>
    <td> <button onclick=" deleteet(${i})"   class="btn btn-outline-danger" >Delete</button></td>

                    
    
</tr>
    

`

    }

    tableBody.innerHTML=container
}



function clear(){

    sitename.value=""
    siteurl.value=""
    
        
}

function deleteet(index){
sitecontainera.splice(index,1)
disblay()
}





function closeModal() {
    message.classList.replace("d-block", "d-none")
}