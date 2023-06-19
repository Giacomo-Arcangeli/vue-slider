// preparo le immagini
const sources = ['img/01.webp' , 'img/02.webp' , 'img/03.webp' , 'img/04.webp' , 'img/05.webp'];

// recupero l'elemento gallery
const gallery = document.querySelector('.gallery');


// preparo la stringa dell'html per inserirci le immagini
let imageElement = '';

// per ogni source creo un tag html
for (let i = 0; i < sources.length; i++){
    imageElement += `<img src="${sources[i]}">`; 
}

// inserisco ls stringa creata in precedenza dentro la gallery nel DOM
gallery.innerHTML = imageElement;

// recupero le immagini
const images = document.querySelectorAll('#carousel img');

// recupero i bottoni dal DOM
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

// preparo la gestione dell'index (l'immagine da mostrare)
let currentIndex = 0;

// rendo visibile la prima immagine aggiungendogli la classe
images[currentIndex].classList.add('active');


// **************** LOGICA ****************

// al click del bottone
nextButton.addEventListener('click' , function(){
    
    
    // rimuovo la classe active all'immagine corrispondente al currentIndex
    images[currentIndex].classList.remove('active');
    
    // aumento il currentIndex
    currentIndex++;

    //! se sono all'ultima immagine impedisco di cliccare
    if(currentIndex === images.length){
       currentIndex = 0;
   }

    // aggiungo la classe active all'immagine corrispondente al currentIndex
    images[currentIndex].classList.add('active');

})

// al click del bottone
prevButton.addEventListener('click' , function(){
    
    
    // rimuovo la classe active all'immagine corrispondente al currentIndex
    images[currentIndex].classList.remove('active');
    
    // diminuisco il currentIndex
    currentIndex--;
    
    //! se sono alla prima immagine impedisco di cliccare
    if(currentIndex < 0){
        currentIndex = images.length -1;
    }

    // aggiungo la classe active all'immagine corrispondente al currentIndex
    images[currentIndex].classList.add('active');

})


