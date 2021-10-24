const linksSocialMedia = {
  github: 'itsmevictorhugo',
  linkedin: 'in/itsmevictorhugo',
  instagram: 'itsmevictorhugo'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://www.${social}.com/${linksSocialMedia[social]}` 
  }
}
changeSocialMediaLinks();

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`
  
  fetch(url)
  .then(response => response.json())
  .then(data => {
    userImage.src = data.avatar_url
    userName.textContent = data.name
    userLogin.textContent = data.login
    userBio.textContent = data.bio
    userLink.href = data.html_url
  })

}
getGitHubProfileInfos();