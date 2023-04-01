interface product {
    id: number;
    pname: string;
    pdescription: string;
    price: number;
}
function getproduct(): Promise<product[]> {
    return fetch("api.json")
    .then(response => response.json())
    .then(response => { return response as product[]})

}

getproduct().then(product =>
    {
        document.write("welcome to shop"+"<br>")
        document.write(product.map (pro =>
           "product id :" + pro.id +"<br>" +"product name :" + pro.pname
           +"<br>"+"product Description: "+pro.pdescription +"<br>" +
           "product price :"+ pro.price+"<br>").toString())
    })

function fakapi(){
    return fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(json => console.log(json))
}
fakapi()
