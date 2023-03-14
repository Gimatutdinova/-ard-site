
/* Проверка поддержка webp, добавление класса webp или no-webp для HTML */
function isWebp() {
    // Проверка поддержки webp
    function testWebP(callback) {
        let webP = new Image();
        webP.onload = webP.onnerror = function () {
            callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    // Добавление класса _webp или _no-webp для HTML
    testWebP(function (support) {
        let className = support === true ? 'webp' : 'no-webp';
        document.documentElement.classList.add(className);
    });
}
isWebp()
  
  // Определение устройсва (pc/mob)
const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows());
	}
}

let body = document.querySelector('body');
if (isMobile.any()) {
	body.classList.add('_touch');
} else {
	body.classList.add('_pc');
}

  //_______________________________________________


  // Меню бургер

const btn = document.querySelector('.header__btn');
const menu = document.querySelector('.header__menu');
const subbtn = document.querySelector('.header__link');
const submenu = document.querySelector('.sub-header__menu');

function headerBtn() {
	btn.addEventListener("click", () => {
		document.body.classList.toggle('_lock');
		btn.classList.toggle('_active');
		menu.classList.toggle('_active');
	})
	subbtn.addEventListener("click", () => {
		subbtn.classList.toggle('_active');
		submenu.classList.toggle('_active');
	})
}

  //_________________________________________________

// Аккордеон

const item = document.querySelectorAll('.accordion__header')
function acc() {
    for (const acc of item) {
        acc.addEventListener('click', () => {
            if (acc.classList.contains('_active')) {
                $('.accordion__header._active').next().hide('');
                acc.classList.remove('_active'); 
            } else {
                clearActiveClasses()
                acc.classList.add('_active');
                //slideUp(acc.nextElementSibling);
                $('.accordion__header._active').next().show('');
            } 
        })
    }
}  

// Для возможности открыть только один пункт аккордеона

function clearActiveClasses() {
    item.forEach((acc) => {
        acc.classList.remove('_active');
        $('.accordion__body').hide('');
    })
}

acc()
  
// Маска для номера телефона

window.addEventListener("DOMContentLoaded", function() {
    [].forEach.call( document.querySelectorAll('#phone'), function(input) {
    let keyCode;
    function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        let pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        let matrix = "+7 (___) ___ ____",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function(a) {
                return i < val.length ? val.charAt(i++) || def.charAt(i) : a
            });
        i = new_value.indexOf("_");
        if (i != -1) {
            i < 5 && (i = 3);
            new_value = new_value.slice(0, i)
        }
        let reg = matrix.substr(0, this.value.length).replace(/_+/g,
            function(a) {
                return "\\d{1," + a.length + "}"
            }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
        if (event.type == "blur" && this.value.length < 5)  this.value = ""
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false)
  });
});

//_______________________________________________

$(".slider").slick({
    adaptiveHeight: true,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed:1500,
});