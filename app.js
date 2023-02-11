let cnt = document.querySelector("#count");

let dec = document.querySelector("#dec");

let res = document.querySelector("#reset");

let inc = document.querySelector("#inc");

let count = 0;

res.addEventListener("click", () => {
  cnt.innerHTML = "&#8734";
});

inc.addEventListener("click", () => {
  count += 1;
  cnt.textContent = count;
});

dec.addEventListener("click", () => {
  if (count !== 0) {
    count -= 1;
    cnt.textContent = count;
  }
});
