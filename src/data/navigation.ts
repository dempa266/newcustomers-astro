export interface NavLink {
	label: string;
	path: string;
}

export interface NavColumn {
	title: string;
	links: NavLink[];
}

export interface NavGroup {
	title: string;
	path: string;
	columns: NavColumn[];
}

export const mainNavGroups: NavGroup[] = [
	{
		title: 'SEO',
		path: '/seo/',
		columns: [
			{
				title: 'Översikt',
				links: [
					{ label: 'SEO', path: '/seo/' },
					{ label: 'SEO Pris', path: '/seo/pris/' },
					{ label: 'SEO E-handel', path: '/seo/e-handel/' },
				],
			},
			{
				title: 'Byrå',
				links: [
					{ label: 'SEO Byrå', path: '/seo/byra/' },
					{ label: 'Stockholm', path: '/seo/byra/stockholm/' },
					{ label: 'Göteborg', path: '/seo/byra/goteborg/' },
					{ label: 'Malmö', path: '/seo/byra/malmo/' },
				],
			},
			{
				title: 'Konsult',
				links: [
					{ label: 'SEO Konsult', path: '/seo/konsult/' },
					{ label: 'Pris', path: '/seo/konsult/pris/' },
					{ label: 'Stockholm', path: '/seo/konsult/stockholm/' },
					{ label: 'Göteborg', path: '/seo/konsult/goteborg/' },
					{ label: 'Malmö', path: '/seo/konsult/malmo/' },
				],
			},
		],
	},
	{
		title: 'Google Ads',
		path: '/ads/',
		columns: [
			{
				title: 'Översikt',
				links: [
					{ label: 'Google Ads', path: '/ads/' },
					{ label: 'Google Ads E-handel', path: '/ads/e-handel/' },
				],
			},
			{
				title: 'Byrå',
				links: [
					{ label: 'Google Ads Byrå', path: '/ads/byra/' },
					{ label: 'Pris', path: '/ads/byra/pris/' },
					{ label: 'Stockholm', path: '/ads/byra/stockholm/' },
					{ label: 'Göteborg', path: '/ads/byra/goteborg/' },
					{ label: 'Malmö', path: '/ads/byra/malmo/' },
				],
			},
			{
				title: 'Konsult',
				links: [
					{ label: 'Google Ads Konsult', path: '/ads/konsult/' },
					{ label: 'Pris', path: '/ads/konsult/pris/' },
					{ label: 'Stockholm', path: '/ads/konsult/stockholm/' },
					{ label: 'Göteborg', path: '/ads/konsult/goteborg/' },
					{ label: 'Malmö', path: '/ads/konsult/malmo/' },
				],
			},
		],
	},
];

export const mainNavLinks: NavLink[] = [{ label: 'Om oss', path: '/om-oss/' }];

export const mobileNavLinks: NavLink[] = [
	...mainNavLinks,
	{ label: 'Kontakt', path: '/kontakt/' },
];

export const footerNavigation = {
	services: [
		{ name: 'Digital Marknadsföring', href: '/' },
		{ name: 'Digital Marknadsföring Pris', href: '/pris/' },
		{ name: 'SEO', href: '/seo/' },
		{ name: 'Google Ads', href: '/ads/' },
		{ name: 'SEM', href: '/sem/' },
	],
	agency: [
		{ name: 'Digital Marknadsföring Byrå', href: '/byra/' },
		{ name: 'SEO Byrå', href: '/seo/byra/' },
		{ name: 'Google Ads Byrå', href: '/ads/byra/' },
		{ name: 'SEM Byrå', href: '/sem/byra/' },
	],
	consultant: [
		{ name: 'Digital Marknadsföring Konsult', href: '/konsult/' },
		{ name: 'SEO Konsult', href: '/seo/konsult/' },
		{ name: 'Google Ads Konsult', href: '/ads/konsult/' },
		{ name: 'SEM Konsult', href: '/sem/konsult/' },
	],
	company: [
		{ name: 'Om oss', href: '/om-oss/' },
		{ name: 'Kontakt', href: '/kontakt/' },
	],
	social: [{ name: 'LinkedIn', href: 'https://www.linkedin.com/company/new-customers/' }],
};
