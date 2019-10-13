 const bttn1 = document.querySelector('.bttn1');
 const bttn2 = document.querySelector('.bttn2');
 const bttn3 = document.querySelector('.bttn3');

 var modalBg = document.querySelector(".modal-bg");
 var modalclose = document.querySelector(".modal-close");
 document.querySelector('.modal-btn').addEventListener('click', function() {
     modalBg.classList.add('modal-active');


 });
 modalclose.addEventListener('click', function() {
     modalBg.classList.remove('modal-active');
 });
 var aboutmeinfo = document.querySelector('.aboutmeinfo');


 document.querySelector('.bttn1').addEventListener('click', function() {
     aboutmeinfo.classList.toggle('profile-active')
     bttn1.classList.toggle('bttn-active')

     if (aboutmeinfo.style.maxHeight) {
         aboutmeinfo.style.maxHeight = null


     } else {
         aboutmeinfo.style.maxHeight = aboutmeinfo.scrollHeight + 'px';
     }

 });
 var contactme = document.querySelector('.contactme');

 document.querySelector('.bttn2').addEventListener('click', function() {
     contactme.classList.toggle('profile-active')
     bttn2.classList.toggle('bttn-active')
     if (contactme.style.maxHeight) {
         contactme.style.maxHeight = null


     } else {
         contactme.style.maxHeight = contactme.scrollHeight + 'px';
     }

 });
 var socialme = document.querySelector('.socialme');

 document.querySelector('.bttn3').addEventListener('click', function() {
     socialme.classList.toggle('profile-active')
     bttn3.classList.toggle('bttn-active')
     if (socialme.style.maxHeight) {
         socialme.style.maxHeight = null


     } else {
         socialme.style.maxHeight = socialme.scrollHeight + 'px';
     }

 });
 //script for hamburger
 var profile = document.querySelector('.profile');

 document.querySelector('.hamburger').addEventListener('click', function() {
     profile.classList.toggle('hamburger-active');

 });