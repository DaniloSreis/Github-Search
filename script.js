const btnSearch = document.querySelector('.search')

function goToUser() {
  window.location.href = 'user.html'
}

btnSearch.addEventListener('click', () => {
  let storage = localStorage.setItem(
    'userGithub',
    JSON.stringify(inputName.value)
  )

  goToUser()
})
