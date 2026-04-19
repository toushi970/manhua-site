function loadChapter(chapter) {
  const reader = document.getElementById("reader");

  reader.innerHTML = `<h2>Chapter ${chapter}</h2><p>No pages uploaded yet.</p>`;
}
function filterGenre(genre) {
  const reader = document.getElementById("reader");

  if (genre === "all") {
    reader.innerHTML = "<h2>All Chapters</h2><p>Select a chapter from the left.</p>";
  }

  if (genre === "action") {
    reader.innerHTML = "<h2>Action Genre</h2><p>No action manhua added yet.</p>";
  }

  if (genre === "romance") {
    reader.innerHTML = "<h2>Romance Genre</h2><p>No romance manhua added yet.</p>";
  }

  if (genre === "fantasy") {
    reader.innerHTML = "<h2>Fantasy Genre</h2><p>No fantasy manhua added yet.</p>";
  }

  if (genre === "horror") {
    reader.innerHTML = "<h2>Horror Genre</h2><p>No horror manhua added yet.</p>";
  }
}
