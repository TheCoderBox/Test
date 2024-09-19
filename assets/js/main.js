// menu
try {
    const openBtn = document.getElementById("open-mobMenu");
    const mobMenu = document.querySelector(".navbar-nav");
    const overlay = document.querySelector(".overlay");
    const btnClose = document.querySelectorAll(".close-btn");
  
    openBtn.addEventListener("click", () => {
      mobMenu.classList.add("open");
      overlay.classList.add("active");
    });
    btnClose.forEach((btn) => {
      btn.addEventListener("click", () => {
        mobMenu.classList.remove("open");
        overlay.classList.remove("active");
      });
    });
  } catch (error) {}