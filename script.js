// Moving logo strip (replace these names with real brand names later)
var names = ["Cement Co", "Steel Works", "Roofing Ltd", "Tile House", "Paint Plus", "Pipe Masters", "Timber Hub"];
document.getElementById("logos").innerHTML = names.concat(names)
  .map(function (n) { return "<span>" + n + "</span>"; }).join("");

// Moving product slider (replace these with real products later)
var items = [
  ["Portland cement", "g"], ["16mm iron rods", "w"], ["Roofing sheets", "c"],
  ["Floor tiles", "c"], ["Sharp sand", "g"], ["PVC pipes", "w"]
];
document.getElementById("products").innerHTML = items.concat(items)
  .map(function (i) {
    return '<div class="pc"><div class="img ' + i[1] + '"></div><b>' + i[0] +
      '</b><a class="btn" href="#contact">Request a quote</a></div>';
  }).join("");

// Number counter
function count(el) {
  var target = +el.dataset.n, start = null;
  function step(ts) {
    if (!start) start = ts;
    var k = Math.min((ts - start) / 1400, 1);
    el.textContent = Math.round(target * k);
    if (k < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

// Scroll animation: sections float up and counters start when seen
var io = new IntersectionObserver(function (entries) {
  entries.forEach(function (e) {
    if (e.isIntersecting) {
      e.target.classList.add("in");
      e.target.querySelectorAll("[data-n]").forEach(count);
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.2 });
document.querySelectorAll(".reveal").forEach(function (r) { io.observe(r); });