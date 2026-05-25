const button =
document.getElementById(
'shortenBtn'
)

const input =
document.getElementById(
'urlInput'
)

const result =
document.getElementById(
'result'
)


button.addEventListener(
'click',

async () => {

const url =
input.value

console.log(url)

const response =
await fetch(
'/shorten',
{

method:'POST',

headers:{
'Content-Type':
'application/json'
},

body:
JSON.stringify({
url:url
})

}

)

const data =
await response.json()

result.innerText =
data.short_url

}

)