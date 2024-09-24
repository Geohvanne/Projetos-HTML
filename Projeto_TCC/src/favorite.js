let favsection = document.querySelector('#favsection')
let favoritelist = document.querySelector('#favorite-list')
let favarray = []
let favindex = 0

function updatefav(artist, song){


    if(artist == undefined || artist == null || song == undefined || song == null){
        
        favoritelist.innerHTML = ''
        for(let i = 0 ; i < favarray.length ; i++){
            if(favarray[i] != null){
             favoritelist.innerHTML += ` 
                 <li id="item${i}">${favarray[i]}  <button class="remove-item" onclick="removeitem(${i})"><i class="bi bi-trash3"></i></button></li>
             `
            }
        }


    }else{

        if(favindex == 0){
            favsection.style.display = 'block'
            favsection.style.display = 'flex'
    
            favarray.push(`${artist} - ${song}`)
          
    
            favoritelist.innerHTML += `
                <li id="item0">${favarray[0]}  <button class="remove-item" onclick="removeitem(0)"> <i class="bi bi-trash3"></i> </button></li>
            `
        
    
            favindex = 1
    
        }else{
    
            favoritelist.innerHTML = ''
            favarray.push(`${artist} - ${song}`)
    
            for(let i = 0 ; i < favarray.length ; i++){
                    if(favarray[i] != null){
                    favoritelist.innerHTML += `
                        <li id="item${i}">${favarray[i]}   <button class="remove-item" onclick="removeitem(${i})"> <i class="bi bi-trash3"></i> </button></li>
                    `
                }
            }
    
        }

    }


    
}


function limpafav(){
    favsection.style.display = 'none'
    favoritelist.innerHTML = ''
    favarray = []
    favindex = 0
}

function removeitem(param){
    favarray[param] = null
    updatefav()
}