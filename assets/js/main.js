/*
	Prototype by Pixelarity
	pixelarity.com | hello@pixelarity.com
	License: pixelarity.com/license
*/

document
	.getElementById("contactForm")
	.addEventListener("submit", function (event) {
		event.preventDefault(); // Prevent the default form submission

		// Get form values
		let name = document.getElementById("demo-name").value;
		let email = document.getElementById("demo-email").value;
		let message = document.getElementById("demo-message").value;

		// Construct the mailto link
		let subject = encodeURIComponent("Consultation");
		let body = encodeURIComponent(
			`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
		);

		let mailtoLink = `mailto:realmepsychotherapy@gmail.com?subject=${subject}&body=${body}`;

		// Open the default email client
		window.location.href = mailtoLink;
	});

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
