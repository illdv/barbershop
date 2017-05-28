var popupSuccess = document. querySelector(".popup-success");
var popupFailure = document. querySelector(".popup-failure");
var formAction = document. querySelector(".form-block__content");
var closeSuccess = popupSuccess. querySelector(".popup-success__close");
var closeFailure = popupFailure. querySelector(".popup-failure__close");
var name = document. querySelector("[name=name]");
var surname = document. querySelector("[name=surname]");
var tel = document. querySelector("[name=tel]");




formAction.addEventListener("submit", function(event) { 
    if (!name.value || !surname.value || !tel.value) {
      event.preventDefault();   
      popupFailure.classList.add("popup-failure--show");
     overlay.classList.add("overlay--active");
    } 
  });



closeFailure.addEventListener("click",function(event){
    event.preventDefault();
    popupFailure.classList.remove("popup-failure--show");
    overlay.classList.remove("overlay--active");
});


window. addEventListener("keydown", function(event){
    if (event. keyCode ===27) {
        if (popupFailure.classList.contains("popup-failure--show")) {
            popupFailure.classList.remove("popup-failure--show");
            overlay.classList.remove("overlay--active");
        }
    }
});


 formAction.addEventListener("submit", function(event) { 
  if (name.value || surname.value  || tel.value) {
      event.preventDefault();
    popupFailure.classList.remove("popup-failure--show");  
    popupSuccess.classList.add("popup-success--show");
    overlay.classList.add("overlay--active");
    }  
  });

closeSuccess.addEventListener("click",function(event){
    event.preventDefault();
    popupSuccess.classList.remove("popup-success--show");
    overlay.classList.remove("overlay--active");
});

window. addEventListener("keydown", function(event){
    if (event. keyCode ===27) {
        if (popupSuccess.classList.contains("popup-success--show")) {
            popupSuccess.classList.remove("popup-success--show");
            overlay.classList.remove("overlay--active");
        }
    }
});