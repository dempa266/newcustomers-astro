import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Centralized scroll-reveal system.
 *
 * Usage (add data attributes to HTML):
 *   data-reveal            — fade-up a single element
 *   data-reveal-children   — fade-up each direct child with stagger
 *   data-reveal-delay="n"  — additional delay in seconds (e.g. "0.1")
 *
 * All animations: 18px upward drift, opacity 0→1, power3.out easing.
 * Trigger: when section top crosses 82% of viewport.
 */

const DEFAULTS = {
	y: 18,
	duration: 0.7,
	ease: 'power3.out',
	stagger: 0.06,
	start: 'top 82%',
};

function init() {
	// Single-element reveals
	document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
		const delay = parseFloat(el.dataset.revealDelay ?? '0');

		gsap.fromTo(
			el,
			{ y: DEFAULTS.y, opacity: 0 },
			{
				y: 0,
				opacity: 1,
				duration: DEFAULTS.duration,
				ease: DEFAULTS.ease,
				delay,
				scrollTrigger: {
					trigger: el,
					start: DEFAULTS.start,
					once: true,
				},
			},
		);
	});

	// Staggered children reveals
	document.querySelectorAll<HTMLElement>('[data-reveal-children]').forEach((container) => {
		const children = container.children;
		if (!children.length) return;

		const delay = parseFloat(container.dataset.revealDelay ?? '0');

		gsap.fromTo(
			children,
			{ y: DEFAULTS.y, opacity: 0 },
			{
				y: 0,
				opacity: 1,
				duration: DEFAULTS.duration,
				ease: DEFAULTS.ease,
				stagger: DEFAULTS.stagger,
				delay,
				scrollTrigger: {
					trigger: container,
					start: DEFAULTS.start,
					once: true,
				},
			},
		);
	});
}

// Run on DOM ready
if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', init);
} else {
	init();
}
