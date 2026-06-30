document.querySelector(".nav-toggle").addEventListener("click", () => {
	document.querySelector(".nav-links").classList.toggle("active")
});

document.querySelectorAll('a[href^="#"]').forEach(a => {
	a.addEventListener("click", function(e) {
		e.preventDefault();
		const t = document.querySelector(this.getAttribute("href"));
		if (t) t.scrollIntoView({
			behavior: "smooth"
		})
	})
});