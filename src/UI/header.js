import modeIcon from '../styles/sol.png'

const header = document.createElement('header')
header.classList.add('header')
const headerTitle = document.createElement('h1')
headerTitle.innerText = 'STUFF I HAVE TO DO'

const modeIconImg = document.createElement('img')
modeIconImg.src = modeIcon
modeIconImg.classList.add('mode-icon')

header.appendChild(headerTitle)
header.appendChild(modeIconImg)


export { header }

