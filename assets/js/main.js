/*
	Prototype by Pixelarity
	pixelarity.com | hello@pixelarity.com
	License: pixelarity.com/license
*/

(function ($) {
	var $window = $(window),
		$body = $("body"),
		$header = $("#header"),
		$banner = $("#banner");

	// Breakpoints.
	breakpoints({
		xlarge: ["1281px", "1680px"],
		large: ["981px", "1280px"],
		medium: ["737px", "980px"],
		small: ["481px", "736px"],
		xsmall: [null, "480px"],
	});

	// Play initial animations on page load.
	$window.on("load", function () {
		window.setTimeout(function () {
			$body.removeClass("is-preload");
		}, 100);
	});

	// Header.
	if ($banner.length > 0 && $header.hasClass("alt")) {
		$window.on("resize", function () {
			$window.trigger("scroll");
		});

		$banner.scrollex({
			bottom: $header.outerHeight(),
			terminate: function () {
				$header.removeClass("alt");
			},
			enter: function () {
				$header.addClass("alt");
			},
			leave: function () {
				$header.removeClass("alt");
				$header.addClass("reveal");
			},
		});
	}

	// Menu.
	$("#menu")
		.append('<a href="#menu" class="close"></a>')
		.appendTo($body)
		.panel({
			delay: 500,
			hideOnClick: true,
			hideOnSwipe: true,
			resetScroll: true,
			resetForms: true,
			side: "right",
		});
})(jQuery);

// document.getElementById("toggle-theme").addEventListener("click", function (e) {
// 	e.preventDefault();
// 	document.documentElement.classList.toggle("dark_theme");
// });

const toggleBtn = document.getElementById("themeToggle");
const icon = document.getElementById("themeIcon");

// Load theme preference on page load
if (localStorage.getItem("theme") === "dark") {
	document.documentElement.classList.add("dark_theme");
	icon.classList.remove("fa-moon");
	icon.classList.add("fa-sun");
}

// Toggle theme on click
toggleBtn.addEventListener("click", (e) => {
	e.preventDefault(); // prevent link from jumping

	const isDark = document.documentElement.classList.toggle("dark_theme");

	// Toggle icon
	if (isDark) {
		icon.classList.remove("fa-moon");
		icon.classList.add("fa-sun");
		localStorage.setItem("theme", "dark");
	} else {
		icon.classList.remove("fa-sun");
		icon.classList.add("fa-moon");
		localStorage.setItem("theme", "light");
	}
});
