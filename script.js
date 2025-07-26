 window.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => document.getElementById("box1").classList.add("show"), 300);
      setTimeout(() => document.getElementById("box2").classList.add("show"), 600);
      setTimeout(() => document.getElementById("box3").classList.add("show"), 900);
      setTimeout(() => document.getElementById("box4").classList.add("show"), 1200);
    });
     function buyNow(productName) {
    alert("Thank you for your interest in " + productName + "!\nWe’ll contact you soon.");
  }