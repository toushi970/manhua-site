function loadChapter(chapter) {
  const reader = document.getElementById("reader");

  let pages = [];

  if (chapter === 1) {
    pages = ["images/page1.jpg", "images/page2.jpg"];
  } else if (chapter === 2) {
    pages = ["images/page3.jpg"];
  }

  reader.innerHTML = `<h2>Chapter ${chapter}</h2>`;

  pages.forEach(page => {
    const img = document.createElement("img");
    img.src = page;
    reader.appendChild(img);
  });
}
