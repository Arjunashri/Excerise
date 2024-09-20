function search(){
    let filter =document.getElementById("find").value.toUpperCase();

    let item = document.querySelectorAll(".product");

    let l=document.getElementsByTagName("h3");

    for( var i =0; i<=l.length;i++){
        let a=item[i].getElementsByTagName("h3")[0];

        let value=a.innerHTML || a.innerText || a.textContent;
        
        if(value.toUpperCase().indexOf(filter) > -1) {
            item[i].style.display="";

        }else{
            item[i].style.display="none";
        }
    }
}


/*
function search() {
    let filter = document.getElementById("find").value.toUpperCase();
    let items = document.querySelectorAll(".product");

    for (let i = 0; i < items.length; i++) {
        let itemName = items[i].querySelector("h3").textContent.toUpperCase();
        
        if (itemName.indexOf(filter) > -1) {
            items[i].style.display = "block"; // or any other appropriate display value
        } else {
            items[i].style.display = "none";
        }
    }
}

*/
