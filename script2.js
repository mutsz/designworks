
// $(document).ready(function () {
    function ex_worksMoveLeft() {
        // alert("here");
        $('#ex_works').css({right: 0});
    }
// }



function addClass(el, className) {
  if (el.classList)
  	el.classList.add(className)
  else if (!hasClass(el, className)) el.className += " " + className
}

function removeClass(el, className) {
  if (el.classList)
    el.classList.remove(className)
  else if (hasClass(el, className)) {
    var reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
    el.className=el.className.replace(reg, ' ')
  }
}

var displayHeight = document.getElementsByClassName('sec').offsetHeight;
var status = 0;

function move(index){
	var sec = document.getElementsByClassName('sec' + index)[0];
	var switcher = sec.childNodes[7];
	console.log(switcher);
	var label = switcher.childNodes[1];
	var arrow = switcher.childNodes[3];
	

	var newImg = sec.getElementsByClassName("new")[0];
	var oldImg = sec.getElementsByClassName("old")[0];

	if (status == 0) {
		addClass(newImg, 'new_gone');
		addClass(oldImg, 'old_display');
		label.innerHTML = 'View New design';
		addClass(arrow, 'rotate');
		status = 1;
	} else {
		removeClass(newImg, 'new_gone');
		removeClass(oldImg, 'old_display');
		label.innerHTML = 'View Previous design';
		removeClass(arrow, 'rotate');
		status = 0;
	}
	
}
// var activate = false;
// $("#scrolling").on("scroll", function() {
// 	if (!activate) {

// 		$("#owl-blog-single").owlCarousel({
// 	        singleItem:	true,
// 	        navigation: true,
// 	        navigationText: [
// 	            "<i class='fa fa-angle-left fa-2x blogNav'></i>",
// 	            "<i class='fa fa-angle-right fa-2x blogNav'></i>"
// 	        ]
// 	        autoPlay: 1000
// 	        // stopOnHover: true
// 	    });
// 	    // setTimeout(function() { $(".owl-prev").css("margin", "10px")}, 100);
// 	    activate = true;
	    
// 	}
	
// })

