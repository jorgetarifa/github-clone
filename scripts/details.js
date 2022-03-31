import { getRepoInfo } from "../helpers/getInfo.js";
import { showRepoInfo } from "../modules/showRepoInfo.js";
let contenedorRepos = document.getElementById('contenedor-repositorios')
const mostrarInfoUser = document.getElementById('izquierda')


document.addEventListener('DOMContentLoaded', async () => {
         let userName = localStorage.getItem('user');

         let repos = await getRepoInfo(`https://api.github.com/users/${userName}/repos`)
         .then(res => res)

         let dataUsers = await getRepoInfo(`https://api.github.com/users/${userName}`).then(res => res)
         
         console.log(`Esto es ${dataUsers}`)
         showRepoInfo( repos, contenedorRepos );
         showDataUsers( dataUsers )

})

const showDataUsers = ( item ) => { 
  mostrarInfoUser.innerHTML += `
  <img src=${item.avatar_url}>
  <h4> ${item.login} </h4>
  <h6> ${item.name} </h6>
  <button> Follow </button>
  <button> Sponsor </button>
  `
}
