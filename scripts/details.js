import { getRepoInfo } from "../helpers/getInfo.js";
import { showRepoInfo } from "../modules/showRepoInfo.js";
let contenedorRepos = document.getElementById('contenedor-repositorios')
const mostrarInfoUser = document.getElementById('izquierda')


document.addEventListener('DOMContentLoaded', async () => {
         let userName = localStorage.getItem('user');

         let repos = await getRepoInfo(`https://api.github.com/users/${userName}/repos`)
         .then(res => res)
         let mostrarInfoUsuarios = await getRepoInfo(`https://api.github.com/users/${userName}/repos`)
         console.log(mostrarInfoUsuarios);

         showRepoInfo( repos, contenedorRepos );
         showUserInfo( mostrarInfoUsuarios )

})

const showUserInfo = ( user) => {
  console.log
  mostrarInfoUser.innerHTML= ""
  mostrarInfoUser.innerHTML += `
  <img src=${user.avatar_url}>
  <h3> ${user.login} </h3>
  <h3> ${user.name} </h3>
  <button> Follow </button>
  <button> Sponsor </button>
  `
}
