


let body = document.body

let main = document.createElement('main')
main.className = 'main'
body.append(main)

let searchContainer = document.createElement('div')
searchContainer.className = 'searchContainer'
main.append(searchContainer)

let key = '?api_key=9hcCaC1s01jrJlCJmEVNUvgkeSqdq1dk'
let limit
let api = 'https://api.giphy.com/v1/gifs/search'

let searchInput = document.createElement('input')
searchInput.className = 'searchInput'
searchInput.id = 'searchInput'

let searchButton = document.createElement('button')
searchButton.className = 'searchButton'
searchButton.id = 'searchButton'
searchButton.innerHTML = 'Search'

let addLimit = document.createElement('select')
addLimit.className = 'addLimit'

for (let i = 10; i < 50; i += 10) {
    let addLimitParm = document.createElement('option')
    addLimitParm.innerHTML = i
    addLimitParm.value = i
    addLimit.append(addLimitParm)
}

let res = document.createElement('div')
res.id = 'res'


searchContainer.prepend(searchInput)
searchContainer.prepend(addLimit)

searchContainer.prepend(searchButton)
main.append(res)


let search = async () => {
    res.innerHTML = ''
    let request = await fetch(`${api}${key}&q=${searchInput.value}&limit=${addLimit.value}`)
    let response = await request.json()
    console.log(response);

    for (const i of response.data) {
        let gifCart = document.createElement('div')
        gifCart.className = 'gifCart'

        let searchImg = document.createElement('iframe')
        searchImg.className = 'searchImg'


        let gifTitle = document.createElement('h3')
        gifTitle.className = 'gifTitle'
        gifTitle.innerHTML = `${i.title}`

        searchImg.src = await i.embed_url

        gifCart.append(searchImg)
        gifCart.append(gifTitle)

        res.append(gifCart)

        console.log(searchImg.offsetWidth);
        gifTitle.style.maxWidth = `${searchImg.offsetWidth}px`
    }

}


searchButton.addEventListener('click', search)


