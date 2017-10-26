function makeOpaque(e){
	e.classList.toggle("opaque");
}

function makeOpaque1(e){
	e.classList.toggle("opaque1");
}

function makeOpaque2(e){
	e.classList.toggle("opaque2");
}

function makeOpaque3(e){
	e.classList.toggle("opaque3");
}

function makeOpaque4(e){
	e.classList.toggle("opaque4");
}

function makeOpaque5(e){
	e.classList.toggle("opaque5");
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
