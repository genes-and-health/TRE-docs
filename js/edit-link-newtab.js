document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('a.md-content__button').forEach(link => {
    if (link.href.includes("edit/")) {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
    }
  });
});
