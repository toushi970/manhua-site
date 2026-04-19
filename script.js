const library = {
  manhua1: {
    title: "Manhua 1",
    chapters: {
      1: ["images/manhua1/c1/page1.jpg", "images/manhua1/c1/page2.jpg"]
    }
  },

  manhua2: {
    title: "Manhua 2",
    chapters: {
      1: ["images/manhua2/c1/page1.jpg"]
    }
  }
};

function openManhua(id) {
  const reader = document.getElementById("reader");

  const manhua = library[id];

  reader.innerHTML = `<h2>${manhua.title} - Chapters</h2>`;

  Object.keys(manhua.chapters).forEach(ch => {
    const btn = document.createElement("button");
    btn.innerText = "Chapter " + ch;

    btn.onclick = () => loadChapter(id, ch);

    reader.appendChild(btn);
  });
}

function loadChapter(id, chapter) {
  const reader = document.getElementById("reader");

  const pages = library[id].chapters[chapter];

  reader.innerHTML = `<h2>${library[id].title} - Chapter ${chapter}</h2>`;

  pages.forEach(p => {
    const img = document.createElement("img");
    img.src = p;
    reader.appendChild(img);
  });
}
