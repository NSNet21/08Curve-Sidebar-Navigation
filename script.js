const toggleBtn = document.getElementById("toggleMenu");
const sideBar = document.getElementById("sideBar");
const closeBtn = document.getElementById("closeBtn");

/* toggle sidebar between the expanded and collapsed state */

toggleBtn.addEventListener("click", () => {
  sideBar.classList.toggle("collapsed");
});

closeBtn.addEventListener("click", () => {
  if (!sideBar.classList.contains("collapsed")) {
    sideBar.classList.add("collapsed");
  }
});

// chang active icon menu when clicking it

const menuList = document.getElementsByClassName("link");
console.log(menuList);

for (let i = 0; i < menuList.length; i++) {
  menuList[i].addEventListener("click", function () {
    const isActive = this.classList.contains("active");
    if (!isActive) {
      for (let j = 0; j < menuList.length; j++) {
        menuList[j].classList.remove("active");
      }
      
      this.classList.add("active");
    } else {
      return;
    }
  });
}
