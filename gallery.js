/*Name this external file gallery.js*/

function upDate(previewPic){

    var imageNew = document.getElementById("image");
    imageNew.style.backgroundImage = "url(" + previewPic.src + ")";
    imageNew.innerHTML = previewPic.alt;
  
	}

	function unDo(){
    var imageNew = document.getElementById("image");
    imageNew.style.backgroundImage =  "url('')"
    imageNew.innerHTML = "Hover over an image below to display here.";
		
	}