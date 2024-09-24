// Declarando as variáveis

let searchindex = 0
let displayindex = 0
let txt = document.querySelector('#txt')
let searchinput1 = document.querySelector('#musica-artista')
let searchinput2 = document.querySelector('#artista-musica')

let buttons = [
    document.querySelectorAll('.check')[4],
    document.querySelectorAll('.check')[5]
]

let contentboxes = [
    document.querySelector('#direita'),
    document.querySelector('#esquerda')
]

let infobox = [
    document.querySelector('#picture'),
    document.querySelector('#text')
]

let urlvagalume = `https://www.vagalume.com.br/nome-da-banda-artista/index.js`
let urlwikipedia = `https://pt.wikipedia.org/w/api.php?action=query&prop=extracts&titles=nome-artista-banda&format=json&origin=*&exintro&explaintext`
let urlfmlast = `https://ws.audioscrobbler.com/2.0/?method=artist.getInfo&artist=nome-artista-banda&api_key=7ccf330a33a100bf1be8822299e9421e&format=json`
let artista = ''
let artistaformatado = ''
let musica = ''


let dados = []


searchinput2.addEventListener('keydown', (event) => {
    if(event.key == 'Enter'){
        searchinput1.focus()
    }
})

searchinput1.addEventListener('keydown', (event) => {
    if(event.key == 'Enter'){
        atribuir() 
        searchinput1.value = ''
        searchinput2.value = ''
    }
})

 


buttons[0].addEventListener('click', () => {


    if(displayindex == 0){
        contentboxes[1].classList.remove('left-init')
        contentboxes[1].classList.add('left')
        contentboxes[0].classList.remove('right-init')
        contentboxes[0].classList.add('right')
    }


    


    searchinput2.style.display = 'block'
    txt.innerHTML = `Qual Música deseja procurar?`
    txt.style.color = 'white'
    contentboxes[0].classList.remove('left')
    contentboxes[1].classList.remove('right')
    contentboxes[0].classList.add('right')
    contentboxes[1].classList.add('left')
    buttons[0].style.backgroundColor = 'green'
    buttons[0].style.opacity = '90%'
    buttons[1].style.backgroundColor = 'aliceblue'
    buttons[1].style.opacity = '50%'
    searchinput1.placeholder = "Música"
    searchinput1.value = ''
    
    searchinput2.focus()


    

    searchindex = 1
    displayindex = 1
})


buttons[1].addEventListener('click', () => {




    if(displayindex == 0){
        contentboxes[1].classList.remove('left-init')
        contentboxes[1].classList.add('left')
        contentboxes[0].classList.remove('right-init')
        contentboxes[0].classList.add('right')
    }






    txt.innerHTML = `Qual artista deseja procurar?`
    txt.style.color = 'black'
    searchinput1.placeholder = "Artista"
    contentboxes[0].classList.remove('right')
    contentboxes[1].classList.remove('left')
    contentboxes[0].classList.add('left')
    contentboxes[1].classList.add('right')
    buttons[1].style.backgroundColor = 'green'
    buttons[1].style.opacity = '90%'
    buttons[0].style.backgroundColor = 'aliceblue'
    buttons[0].style.opacity = '50%'
    searchinput1.value = ''
    searchinput1.focus()
    searchinput2.style.display = 'none'


    
    searchindex = 2
    displayindex = 1
})





function atribuir(){

    
    if(searchindex == 2){

        artista = searchinput1.value.toLowerCase()
        

        artistaformatado = artista.split(' ')
        for(let i = 0; i<artistaformatado.length; i++)    {
            artistaformatado[i] = artistaformatado[i][0].toUpperCase() + artistaformatado[i].substr(1);
        }

        urlwikipedia = `https://pt.wikipedia.org/w/api.php?action=query&prop=extracts&titles=${artistaformatado.join(' ')}&format=json&origin=*&exintro&explaintext`   


     
        artista = artista.replaceAll(' ', '-')


       

        urlvagalume = `https://www.vagalume.com.br/${artista}/index.js`
        urlfmlast = `https://ws.audioscrobbler.com/2.0/?method=artist.getInfo&artist=${artista}&api_key=7ccf330a33a100bf1be8822299e9421e&format=json`
            
        
         
    }else{
        artista = searchinput2.value.toLowerCase()
        artista = artista.replaceAll(' ', '-')
        musica = searchinput1.value.toLowerCase()
        urlvagalume = `https://api.vagalume.com.br/search.php?apikey=660a4395f992ff67786584e238f501aa&art=${artista}&mus=${musica}&extra=relart`
    }

    request()

}
async function request(){
    if(searchindex == 2){

        await fetch(urlvagalume)
        .then((response) => {
            console.log(response)
            return response.json()
        })
        .then((data) => {
            console.log(data)
            dados = [
                data.artist.desc,
                [
                    data.artist.toplyrics.item[0].desc,
                    data.artist.toplyrics.item[1].desc,
                    data.artist.toplyrics.item[2].desc
                ]
            ]

            if(dados[0] == undefined){
                dados[0] = 'Artista não encontrado no banco...'
                dados[1] = ''
            }


        })
        .catch(err => {
            alert('ERRO:' + err)
        })

        
        
        await fetch(urlwikipedia)
        .then((response) => {
            return response.json()
        })
        .then( (data) => {
    
            console.log(data)
            dados.push( Object.values(data.query.pages)[0].extract ) 
        })
    
        await fetch(urlfmlast)
        .then( (response) => {
            return response.json()
        })
        .then( (data) => {
            console.log('Este log é da url lastfm')
            console.log(data)
        })
    
    
        updateart(dados[0], dados[1], dados[2])


    }else{

        await fetch(urlvagalume)
        .then( (response) => {
            console.log(response)
            return response.json()
        })
        .then( (data) => {
            console.log(data)
            dados = [
                data.mus[0].name,
                data.art.name,
                String(data.mus[0].text),
                data.mus[0].translate[0].text
            ]

        })

        updatemusic(dados[0], dados[1], dados[2])
    }
   
  
   
}




function updateart(artist , songs , info){

    infobox[0].innerHTML = ''
    infobox[1].innerHTML = ''

    infobox[1].innerHTML += `<h1 class="artist-name">${artist}</h1>`
    infobox[1].innerHTML += `
        <h2 class="title">Top três músicas mais famosas</h2>
        <ol class="artist-songs">
            <li>${songs[0]}</li>
            <li>${songs[1]}</li>
            <li>${songs[2]}</li>
        </ol>
        `
    infobox[1].innerHTML += `
        <h2 class="title">Biografia</h2>
        <p class="artist-info">${info.substr(0, 650)} ...</p>
        `
    

}

function updatemusic(song, artist, lyrics){
 

    infobox[0].innerHTML = ''
    infobox[1].innerHTML = ''
    infobox[1].innerHTML += `<h1 class="artist-name">${artist} - ${song}</h1>`
    infobox[1].innerHTML += `
        <h2 class="title">Letra:</h2>
        <p id="lyrics">${lyrics}</p>
        <div class="info-buttons">
            <button id="translation" onclick="lyricstranslation()">Traduzir letra</button>
            <button id="add-favorite" onclick="updatefav('${artist}', '${song}')">Adicionar favoritos</button>
        </div>
        
        `


}

let lyrics = document.querySelector('#lyrics')
let favobutton = document.querySelector('#add-favorite')
let transbutton = document.querySelector('#translation')

function lyricstranslation(){
    
    console.log('ABAIXO TEMOS A TRADUÇÃO DA MÚSICA:')
    console.log(dados[3])

}
