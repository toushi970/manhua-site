const library = {
  manhua1: {
    name: "Manhua 1",
    chapters: {
      1: ["images/manhua1/chapter1/page1.jpg", "images/manhua1/chapter1/page2.jpg"],
      2: ["images/manhua1/chapter2/page1.jpg"]
    }
  },

  manhua2: {
    name: "Manhua 2",
    chapters: {
      1: ["images/manhua2/chapter1/page1.jpg"]
    }
  }
};

function loadChapter(manhua, chapter) {
  const reader = document.getElementById("reader");

  const pages = library[manhua].chapters[chapter];

  if (!pages) {
    reader.innerHTML = "<h2>No chapters found</h2>";
    return;
  }

  reader.innerHTML = `<h2>${library[manhua].name} - Chapter ${chapter}</h2>`;

  pages.forEach(page => {
    const img = document.createElement("img");
    img.src = page;
    reader.appendChild(img);
  });
}
