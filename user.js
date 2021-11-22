const nameGithub = localStorage.getItem('userGithub').slice(1, -1)

async function searchUsearGithub(nameUser) {
  const api = `https://api.github.com/users/${nameUser}`

  const responseApi = await fetch(api)
  const dadosJson = await responseApi.json()
  getUserInformation(dadosJson)
  getUserRepositorie(dadosJson)
}

searchUsearGithub(nameGithub)

function getUserInformation(informationUser) {
  userPhoto.setAttribute('src', informationUser.avatar_url)
  userName.textContent = informationUser.name
  userUrl.setAttribute('href', informationUser.html_url)
  userLogin.textContent = informationUser.login
  userLocation.textContent = informationUser.location
  userCompany.textContent = informationUser.company
  userFollowing.textContent = informationUser.following
  userFollowers.textContent = informationUser.followers
  userRepositories.textContent = informationUser.public_repos
}

async function getUserRepositorie(dadosRepositories) {
  const reponseRepositories = await fetch(dadosRepositories.repos_url)
  const repositoriesJson = await reponseRepositories.json()
  creatRepositorie(repositoriesJson)
}

function creatRepositorie(repositoriesJson) {
  repositoriesJson.forEach(repositorie => {
    const divCreat = document.createElement('div')
    divCreat.classList.add('repositorie')

    const infosRepositore = document.createElement('div')
    infosRepositore.classList.add('infos')

    const divStar = document.createElement('div')
    const divshare = document.createElement('div')
    const divLanguage = document.createElement('div')

    const h1Creat = document.createElement('h1')
    const pCreat = document.createElement('p')

    repositories.appendChild(divCreat)
    divCreat.appendChild(h1Creat)
    divCreat.appendChild(pCreat)
    divCreat.appendChild(infosRepositore)

    infosRepositore.appendChild(divStar)
    infosRepositore.appendChild(divshare)
    infosRepositore.appendChild(divLanguage)

    h1Creat.textContent = repositorie.name
    pCreat.textContent = repositorie.description

    infosRepositore.children[0].textContent = repositorie.forks
    infosRepositore.children[1].textContent = repositorie.watchers
    infosRepositore.children[2].textContent = repositorie.language
  })
}
