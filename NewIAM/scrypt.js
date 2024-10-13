window.addEventListener("load", () => {
    const loader = document.querySelector('.loader');
    loader.classList.add('fade-out');
    setTimeout(() => {
      loader.style.display = 'none';
    }, 4500);
  });
  