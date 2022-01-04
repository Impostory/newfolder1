//alert("isi form berikut")
//document.write("this")
//console.log("yes ure using js")


let gelas = "kopi"

//console.log(geleas)

function baca(stock, order){
    console.log(gelas)

    console.log("sisa stock= "+stock)
    console.log("pesanan= "+order)

    let hasil= stock-order
    if (hasil > 0){
        console.log=hasil
    }
    else{
        console.log("stock kurang")
    }
}
baca(1,2)

function klik(){
    
    let reciver = 'samsul@mail.com'

    let name = document.getElementById("name1").value
    let email = document.getElementById("email1").value
    let number = document.getElementById("number1").value
    let selection = document.getElementById("selection1").value
    let isi = document.getElementById("isi1").value

    if(name=='' || email=='' || number=='' || selection == ''|| isi==''){
        alert("isi semua")
    }
    else{
        console.log(name)
        console.log(email)
        console.log(number)
        console.log(selection)
        console.log(isi) 

        let dataobject ={
            name:name,
            email:email,
            number:number,
            selection:selection
        }
        console.log("dataobject" + dataobject.name)

        let a = document.createElement('a')
        a.href = `mailto: ${reciver}?subject=${selection}&body=hallo saya ${name}, pesan saya adalah ${isi}, saya dapat dihibungin pada ${number}` 
        a.click()
    }



}
