document.addEventListener('submit', event=>{
    event.preventDefault();
    let form = document.querySelector('#productForm');
    let data = new FormData(form);
    let title = data.get('title');
    let price = data.get('price');
    let req = {
        title:title,
        price:price,
    }

    fetch('http://localhost:8080/api/productos',{
        method: 'POST',
        body:JSON.stringify(req),
        headers:{
            "Content-type":"application/json"
        }
    }).then(result=>{
        return result.json();
    }).then(json=>{
        console.log(json);
    })
})