alert("ilk Kasım İlk kasımpatı ne son kasımımız ne son kasımpatın (Ekrana bir kere tıklamayı unutma)")
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };