var ImageState
var numeroImmagini = 0
var numeroInCorsoImmagine = 0
var leftImgs = new Array(1)
var limiteFrecce = 1

var baseGameImageUrl = document.getElementsByTagName('base')[0].href + 'assets/images/Game'

leftImgs[0] = baseGameImageUrl + '/Immagini/Happy (main).png'
leftImgs[1] = baseGameImageUrl + '/Immagini/Angry (main frame).png'
leftImgs[2] = baseGameImageUrl + '/Immagini/Disgusted (main frame).png'
leftImgs[3] = baseGameImageUrl + '/Immagini/Sad (main frame).png'
leftImgs[4] = baseGameImageUrl + '/Immagini/Scared-(main frame).png'
leftImgs[5] = baseGameImageUrl + '/Immagini/Surprised (main-frame).png'
leftImgs[6] = baseGameImageUrl + '/Immagini/Rapunzel.png'

function ControlloImmagine() {
	if (leftImgs[numeroInCorsoImmagine] == baseGameImageUrl + '/Immagini/Happy (main).png') {
		ImageState = 'Felicità'
	} else if (leftImgs[numeroInCorsoImmagine] == baseGameImageUrl + '/Immagini/Angry (main frame).png') {
		ImageState = 'Rabbia'
	} else if (leftImgs[numeroInCorsoImmagine] == baseGameImageUrl + '/Immagini/Disgusted (main frame).png') {
		ImageState = 'Disgusto'
	} else if (leftImgs[numeroInCorsoImmagine] == baseGameImageUrl + '/Immagini/Sad (main frame).png') {
		ImageState = 'Tristezza'
	} else if (leftImgs[numeroInCorsoImmagine] == baseGameImageUrl + '/Immagini/Scared-(main frame).png') {
		ImageState = 'Paura'
	} else if (leftImgs[numeroInCorsoImmagine] == baseGameImageUrl + '/Immagini/Surprised (main-frame).png') {
		ImageState = 'Sorpresa'
	} else if (leftImgs[numeroInCorsoImmagine] == baseGameImageUrl + '/Immagini/Rapunzel.png') {
		ImageState = 'Fine'
	} else {
		window.alert('Errore!')
	}
}

function GeneratoreImmagini() {
	if (numeroInCorsoImmagine + 1 < 7) {
		document.getElementById('divEmoji').hidden = false
		document.getElementById('divContinua').hidden = true
		numeroInCorsoImmagine = numeroInCorsoImmagine + 1
		document.getElementById('TxtNumeroImmagini').innerHTML = numeroInCorsoImmagine + 1 + '/6'
		document.getElementById('ImmagineGiocoPrincipale').src = leftImgs[numeroInCorsoImmagine]
		ControlloImmagine()
	}
}
function NextImage() {
	if (numeroInCorsoImmagine + 1 < limiteFrecce) {
		document.getElementById('PreviousImage').style.opacity = '1'
		numeroInCorsoImmagine = numeroInCorsoImmagine + 1
		if (numeroInCorsoImmagine + 1 != 7) {
			document.getElementById('TxtNumeroImmagini').innerHTML = numeroInCorsoImmagine + 1 + '/6'
			document.getElementById('ImmagineGiocoPrincipale').src = leftImgs[numeroInCorsoImmagine]
			document.getElementById('divContinua').hidden = true
			document.getElementById('divEmoji').hidden = false
			document.getElementById('divFine').hidden = true
			ControlloImmagine()
		} else {
			document.getElementById('ImmagineGiocoPrincipale').src = leftImgs[numeroInCorsoImmagine]
			document.getElementById('divContinua').hidden = true
			document.getElementById('divEmoji').hidden = true
			document.getElementById('divFine').hidden = false
			document.getElementById('NextImage').style.opacity = '0.5'
		}
	}
	if (numeroInCorsoImmagine + 1 == limiteFrecce) {
		document.getElementById('NextImage').style.opacity = '0.5'
	}
}
function PreviousImage() {
	if (numeroInCorsoImmagine + 1 > 1) {
		numeroInCorsoImmagine = numeroInCorsoImmagine - 1
		document.getElementById('TxtNumeroImmagini').innerHTML = numeroInCorsoImmagine + 1 + '/6'
		document.getElementById('ImmagineGiocoPrincipale').src = leftImgs[numeroInCorsoImmagine]
		document.getElementById('divContinua').hidden = true
		document.getElementById('divEmoji').hidden = false
		document.getElementById('divFine').hidden = true
		document.getElementById('NextImage').style.opacity = '1'
		ControlloImmagine()
	}
	if (numeroInCorsoImmagine + 1 == 1) {
		document.getElementById('PreviousImage').style.opacity = '0.5'
	}
}

function ConfrontoEmojiImmagine(EmojiState) {
	ControlloImmagine()
	if (EmojiState == ImageState) {
		//window.alert("Emoji Corretta!");
		document.getElementById('EmozioneTxt').innerHTML = ImageState
		document.getElementById('divContinua').hidden = false
		document.getElementById('divEmoji').hidden = true
		if (leftImgs[numeroInCorsoImmagine] == baseGameImageUrl + '/Immagini/Happy (main).png') {
			document.getElementById('ImmagineGiocoPrincipale').src = baseGameImageUrl + '/Gifs/Happy-(gif).gif'
		} else if (leftImgs[numeroInCorsoImmagine] == baseGameImageUrl + '/Immagini/Angry (main frame).png') {
			document.getElementById('ImmagineGiocoPrincipale').src = baseGameImageUrl + '/Gifs/Angry-(gif).gif'
		} else if (leftImgs[numeroInCorsoImmagine] == baseGameImageUrl + '/Immagini/Disgusted (main frame).png') {
			document.getElementById('ImmagineGiocoPrincipale').src = baseGameImageUrl + '/Gifs/Disgust-(gif).gif'
		} else if (leftImgs[numeroInCorsoImmagine] == baseGameImageUrl + '/Immagini/Sad (main frame).png') {
			document.getElementById('ImmagineGiocoPrincipale').src = baseGameImageUrl + '/Gifs/Sad-(gif).gif'
		} else if (leftImgs[numeroInCorsoImmagine] == baseGameImageUrl + '/Immagini/Scared-(main frame).png') {
			document.getElementById('ImmagineGiocoPrincipale').src = baseGameImageUrl + '/Gifs/Scared-(gif).gif'
		} else if (leftImgs[numeroInCorsoImmagine] == baseGameImageUrl + '/Immagini/Surprised (main-frame).png') {
			document.getElementById('ImmagineGiocoPrincipale').src = baseGameImageUrl + '/Gifs/Surprised-(gif).gif'
		} else {
			window.alert('Errore!')
		}
		limiteFrecce = limiteFrecce + 1
		document.getElementById('NextImage').style.opacity = '1'
		//GeneratoreImmagini();
	} else {
		//window.alert("Emoji Sbagliata Riprova!");
		document.getElementById('RiprovaButton').hidden = false
		var emoji = document.getElementsByClassName('Emoji')
		emoji[0].style.opacity = '0.5'
		emoji[1].style.opacity = '0.5'
		emoji[2].style.opacity = '0.5'
		emoji[3].style.opacity = '0.5'
		emoji[4].style.opacity = '0.5'
		emoji[5].style.opacity = '0.5'
		document.getElementById('ImmagineGiocoPrincipale').style.opacity = '0.5'
	}
}

function RiprovaFunction() {
	document.getElementById('RiprovaButton').hidden = true
	var emoji = document.getElementsByClassName('Emoji')
	emoji[0].style.opacity = '1'
	emoji[1].style.opacity = '1'
	emoji[2].style.opacity = '1'
	emoji[3].style.opacity = '1'
	emoji[4].style.opacity = '1'
	emoji[5].style.opacity = '1'
	document.getElementById('ImmagineGiocoPrincipale').style.opacity = '1'
}
