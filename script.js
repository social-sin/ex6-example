document.addEventListener("contextmenu", (e) => e.preventDefault());

document.addEventListener("keydown", (e) => {
  const key = e.key.toLowerCase();

  // Block DevTools + View Source shortcuts
  if (
    key === "f12" ||                                   // F12
    (e.ctrlKey && e.shiftKey && key === "i") ||         // Ctrl+Shift+I
    (e.ctrlKey && e.shiftKey && key === "j") ||         // Ctrl+Shift+J
    (e.ctrlKey && e.shiftKey && key === "c") ||         // Ctrl+Shift+C (inspect element)
    (e.ctrlKey && key === "u") ||                       // Ctrl+U (view source)
    (e.metaKey && e.altKey && key === "i")              // Cmd+Option+I (Mac)
  ) {
    e.preventDefault();
  }
});
