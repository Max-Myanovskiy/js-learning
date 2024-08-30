let theParent = document.querySelector("#theDude");
theParent.addEventListener("click", doSomething, false);

function doSomething(e) {
  if (e.target != e.currentTarget) {
    let item = e.target.id;
    console.log("Hello " + item);
  }
  e.stopPropagation();
}
