
function craftTabs(){
	let tab = document.querySelectorAll('.info-header-tab'),
	info = document.querySelector('.info-header'),
	tabContent = document.querySelectorAll('.info-tabcontent');
	let tabHie = (a = 1) => {
		for (let i = a; i < tabContent.length; i++){
			tabContent[i].classList.remove('show')
			tabContent[i].classList.add('hide')
				
		}
		
	}
    tabHie()
	let showContent = (b = 1) => {
		if (tabContent[b].classList.contains('hide')){
			tabContent[b].classList.remove('hide')
			tabContent[b].classList.add('show')
		}
	}
	info.addEventListener('click', (event) => {
		let target = event.target
		if (target && target.classList.contains('info-header-tab')) {
			for (let i = 0; i < tab.length; i++){
				if (target === tab[i]){
					tabHie(0)
					showContent(i)
				break
				}
			}
		}
	})
	
}
craftTabs()