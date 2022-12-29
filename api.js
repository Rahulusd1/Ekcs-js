data = {
    "num1": 10,
    "num2": 200
}

body = JSON.stringify(data);


async function app(){
await fetch("http://127.0.0.1:5000/add",{
    method: "POST",
    headers: {
        'Content-Type': 'application/json'
    },
    body:body
})
}