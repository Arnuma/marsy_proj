
'use strict';
document.addEventListener('DOMContentLoaded', ()=>{
	const movieDB = {
		movies: [
			'Логан',
			'Лига справедливости',
			'Ла-ла лэнд',
			'Одержимость',
			'Скотт Пилигрим против...'
		]
	};
	const adv = document.querySelectorAll('.promo__adv img'),
		promoGenre = document.querySelector('.promo__genre'),
		promoBg = document.querySelector('.promo__bg'),
		filmList = document.querySelector('.promo__interactive-list'),
		addForm = document.querySelector('.add'),
		addInput = addForm.querySelector('.adding__input'),
		checkbox = addForm.querySelector('[type = "checkbox"]');
	
	let{movies} = movieDB;

	const deleteAdv = function (){
		adv.forEach(item => {
			item.remove();
		});
	};
	
	promoGenre.textContent = 'Драма';
	promoBg.style.backgroundImage = 'url(img/bg.jpg)';
	
	
	function addMovie (){
		filmList.innerHTML = '';
		movies.sort();
		movies.forEach((item, i)=>{
			filmList.innerHTML += `<li class="promo__interactive-item">${i+1}.${item}<div class="delete"></div></li>`;
		});
		document.querySelectorAll('.delete').forEach((btn, i)=>{
			btn.addEventListener('click',()=>{
				btn.parentElement.remove();
				movies.splice(i, 1);
				addMovie();
			});
		});
	}
	
	addForm.addEventListener('submit', e =>{
		e.preventDefault();
		let newFilm = addInput.value;
		const check = checkbox.checked;
		if(newFilm != '' && newFilm != null ) {
			if(newFilm.length > 21){
				newFilm = `${newFilm.substring(0, 22)}...`;
			}
			if(check){
				alert('Добавляем любимый фильм');
				newFilm = `ЛЮБИМЫЙ!${newFilm}`;
			}
			movies.push(newFilm);
			addMovie();
		}
		e.target.reset();
	});
	
	addMovie();
	deleteAdv();
});



