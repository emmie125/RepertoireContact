
const body = document.body;
const prenom = document.querySelector('#prenom');
const nom = document.querySelector('#nom');
const groupe = document.querySelector('#groupe');
const biograpgie = document.querySelector('#biograpgie');


const btnCreer = document.querySelector('#creer');
const listeContact= document.querySelector('#liste-contact');
let Contact = [];
const btnImage = document.querySelector('#btn-image');
let avatarImages=document.querySelector('#avatar-images');




let taille;



btnImage.addEventListener('change',e=>{
    e.preventDefault();
   
    // console.log(URL.createObjectURL(btnImage.));

    if(btnImage.files[0]){
        avatarImages.src=URL.createObjectURL(btnImage.files[0]);
    }
   
})

btnCreer.addEventListener('click',e=>{
    e.preventDefault();
    Contact.push({prenom:prenom.value,nom:nom.value,groupe:groupe.value,biograpgie:biograpgie.value})
    taille = Contact.length-1

    console.log(Contact)

    let identite = document.createElement('h3');
    let groupeListe = document.createElement('p');
    let afficheIdentite = document.createElement('div');
    let btnSupprime = document.createElement('button');
    let containerImage = document.createElement('div');
    let profilImage = document.createElement('img');
    let zoneContact = document.createElement('div');

    profilImage.classList.add('profil-image')
    containerImage.classList.add('container-image');
    btnSupprime.classList.add('btn-supprime');
    afficheIdentite.classList.add('affiche-identite')
    zoneContact.classList.add('zone-contact')

    //Stylisation du button

    btnSupprime.textContent='X'
   

    //Ajouter l'événement supprimer sur le button
    btnSupprime.addEventListener('click',e=>{
        e.preventDefault();
        listeContact.removeChild(zoneContact)

    })
    
    profilImage.setAttribute("src",avatarImages.src);
    profilImage.setAttribute("alt","profile image")

    containerImage.appendChild(profilImage)
    identite.appendChild(document.createTextNode(Contact[taille].prenom +" "+Contact[taille].nom)) 
    groupeListe.appendChild(document.createTextNode(Contact[taille].groupe))
    afficheIdentite.appendChild(identite)
    afficheIdentite.appendChild (groupeListe)

    afficheIdentite.appendChild(document.createTextNode(Contact[taille].biograpgie))
    zoneContact.appendChild(containerImage)
    zoneContact.appendChild(afficheIdentite)
    zoneContact.appendChild(btnSupprime)
    listeContact.appendChild(zoneContact)
    
  
})


