const footYear = document.querySelector(".footer-year");

const currentYear = () => {
	const year = new Date().getFullYear();

	footYear.innerText = year;
};

currentYear();
