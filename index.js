function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("#nested .target");
}

function increaseRankBy(n) {
  const lis = Array.from(document.querySelectorAll("ul.ranked-list li"));
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n;
  }
}

function deepestChild() {
  const nodes = document.querySelectorAll("#grand-node div");
  const mostDeep = nodes[nodes.length - 1];
  return mostDeep;
}