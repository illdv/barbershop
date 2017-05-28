var navMain = document.querySelector(".main-nav"),
  navToggle = document.querySelector(".main-nav__toggle");
navMain.classList.remove("main-nav--nojs"), navToggle.addEventListener("click", function () {
  navMain.classList.contains("main-nav--closed") ? (navMain.classList.remove("main-nav--closed"), navMain.classList.add("main-nav--opened")) : (navMain.classList.add("main-nav--closed"), navMain.classList.remove("main-nav--opened"))
})

;(function(window, document) {
  'use strict';
  var file = '/img/symbols.svg', 
      revision = 1;            
  if (!document.createElementNS || !document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect) return true;
  var isLocalStorage = 'localStorage' in window && window['localStorage'] !== null,
    request,
    data,
    insertIT = function() {
      document.body.insertAdjacentHTML('afterbegin', data);
    },
    insert = function() {
      if (document.body) insertIT();
      else document.addEventListener('DOMContentLoaded', insertIT);
    };
  if (isLocalStorage && localStorage.getItem('inlineSVGrev') == revision) {
    data = localStorage.getItem('inlineSVGdata');
    if (data) {
      insert();
      return true;
    }
  }
  try {
    request = new XMLHttpRequest();
    request.open('GET', file, true);
    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        data = request.responseText;
        insert();
        if (isLocalStorage) {
          localStorage.setItem('inlineSVGdata', data);
          localStorage.setItem('inlineSVGrev', revision);
        }
      }
    }
    request.send();
  } catch (e) {}
}(window, document));

var linkRoom = document. querySelector(".main-nav__user-login");
var popupRoom = document. querySelector(".popup-room");
var closeRoom = document.querySelector(".popup-room__close");
var overlay = document.querySelector(".overlay");

linkRoom.addEventListener("click", function(event){
    event.preventDefault();
    popupRoom.classList.add("popup-room--show");
    overlay.classList.add("overlay--active");
    login.focus(); 
});

closeRoom.addEventListener("click",function(event){
    event.preventDefault();
    popupRoom.classList.remove("popup-room--show");
    popupRoom.classList.remove("popup-room--error");
    overlay.classList.remove("overlay--active");
});

overlay.addEventListener("click",function(event){
    event.preventDefault();
    popupRoom.classList.remove("popup-room--show");
    overlay.classList.remove("overlay--active");
    popupSuccess.classList.remove("popup-success--show");
    popupFailure.classList.remove("popup-failure--show");
});

window. addEventListener("keydown", function(event){
    if (event. keyCode ===27) {
        if (popupRoom.classList.contains("popup-room--show")) {
            popupRoom.classList.remove("popup-room--show");
            overlay.classList.remove("overlay--active");
        }
    }
});

var formRoom = popupRoom. querySelector(".popup-room__content");
var loginRoom = popupRoom. querySelector("[name=login]")
var passwordRoom = popupRoom.querySelector("[name=password]")

  formRoom.addEventListener("submit", function(event) {  
    if (!loginRoom.value || !passwordRoom.value) {       event.preventDefault();       popupRoom.classList.add("popup-room--error");
    }  
  });














 

