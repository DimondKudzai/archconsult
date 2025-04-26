// Basic contact form handling
 document.getElementById('contact-form').addEventListener('submit', function (e) {
 e.preventDefault();
 
 const name = this.name.value.trim();
 const email = this.email.value.trim();
 const message = this.message.value.trim();
 
 if (!name || !email || !message) {
 alert('Please fill out all fields.');
 return;
 }
 
 // Simulate successful submission
 alert(`Thank you, name! We'll get back to you soon.`);
 
 this.reset();
 
 });
 
 function toggleMenu() {
 const nav = document.getElementById("navLinks");
 nav.classList.toggle("active");
 }
 