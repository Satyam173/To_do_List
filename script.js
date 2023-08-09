 add = document.getElementById('add');
 add.addEventListner('click',()=>{
    console.log("Updating list....");
    tit = document.getElementById('title').value;
    desc= document.getElementById('description').value;
    
    if (localStorage.getItem('itemsJson')==null){
        itemJsonArray=[];
        itemsJsonArray.push([tit,desc]);
        localStrorage.getItem('itemJson',JSON.stringify(itemsJsonArray));
    }
    else{
        itemJsonArrayStr = loacalStorage.getItem('itemJson');
        itemJsonArray = JSON.parse(itemJsonArrayStr);
        itemJsonArray.push([tit,desc]);
        localStrorage.getItem('itemJson',stringify('itemJsonArray'));
    }
 })