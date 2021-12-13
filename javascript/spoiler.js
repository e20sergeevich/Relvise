let spoilers = document.querySelectorAll(".top-footer__block");

for (let spoiler of spoilers) {
	spoiler.addEventListener("click", spoilerOnClick);
	function spoilerOnClick() {
		let content = this.lastElementChild;
		this.classList.toggle("open");
		if (content.style.maxHeight) {
			content.style.maxHeight = null;
		} else {
			content.style.maxHeight = content.scrollHeight + "px";
		}
	}
}