function toKebabCase(string) {
  return string
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();
}

function getAllDataAttributesFromElement(element) {
  const attributes = element.dataset;
  const data = {};
  for (const key in attributes) {
    if (Object.hasOwnProperty.call(attributes, key)) {
      const value = attributes[key];
      const newKey = toKebabCase(key);
      data[newKey] = value;
    }
  }
  return data;
}

document.addEventListener("DOMContentLoaded", () => {
  // Initiate
  const jsScroll = jsScrollAnimations();
  jsScroll.init();

  // Buttons
  document.getElementById("btnDisable").addEventListener("click", () => {
    jsScroll.disable();
  });

  document.getElementById("btnInit").addEventListener("click", () => {
    jsScroll.init();
  });

  document.getElementById("btnReset").addEventListener("click", () => {
    jsScroll.reset();
  });

  document.getElementById("btnPause").addEventListener("click", () => {
    jsScroll.pause();
  });

  // Info
  const el = document.querySelectorAll("[data-jsscroll]");
  el.forEach((item) => {
    let html = "<ul>";
    const attributes = getAllDataAttributesFromElement(item);

    for (const key in attributes) {
      if (Object.hasOwnProperty.call(attributes, key)) {
        const value = attributes[key];
        if (value) {
          html += `<li><strong>${key}</strong>: ${value}</li>`;
        } else {
          html += `<li><strong>${key}</strong></li>`;
        }
      }
    }

    html += "</ul>";
    item.innerHTML = html;
  });
});
