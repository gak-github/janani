/**
 * =============================================================================
 *  PROFILE DATA    —  single source of truth for the whole website
 * =============================================================================
 *
 *  UPDATED 2026-09-22
 *  ----------------------------------------------------------------------------
 *  The values below were filled in from Janani Asokumar's LinkedIn profile
 *  (https://www.linkedin.com/in/janani-asokumar/) combined with details
 *  provided directly. Where real data was not available, an inline `// TODO`
 *  marker shows exactly what still needs to be filled in.
 *
 *  Still-to-finish (search this file for "TODO"):
 *    - email / resumeUrl / GitHub link  → add your real links.
 *    - experience "highlights"           → add specific, quantified wins.
 *    - projects                          → replace the sample projects.
 * =============================================================================
 */

/* -------------------------------------------------------------------------- */
/*  Types                                                                       */
/* -------------------------------------------------------------------------- */

export type SocialKind = 'github' | 'linkedin' | 'email' | 'twitter' | 'globe';

export interface SocialLink {
	label: string;
	href: string;
	icon: SocialKind;
}

export interface ExperienceItem {
	role: string;
	company: string;
	location: string;
	start: string;
	end: string;
	current?: boolean;
	summary: string;
	highlights: string[];
	tech: string[];
}

export interface EducationItem {
	degree: string;
	school: string;
	location: string;
	start: string;
	end: string;
	details: string;
}

export interface SkillGroup {
	category: string;
	items: string[];
}

export interface Project {
	name: string;
	description: string;
	tags: string[];
	repo?: string;
	live?: string;
	featured?: boolean;
}

export interface Profile {
	name: string;
	initials: string;
	role: string;
	tagline: string;
	location: string;
	email: string;
	available: string;
	/** Leave "" to hide the "Download resume" button, or set to a file in /public. */
	resumeUrl: string;
	about: string[];
	stats: { label: string; value: string }[];
	facts: string[];
	socials: SocialLink[];
	experience: ExperienceItem[];
	education: EducationItem[];
	skills: SkillGroup[];
	projects: Project[];
}

/* -------------------------------------------------------------------------- */
/*  Content — filled from Janani's LinkedIn (2026-09-22)                        */
/* -------------------------------------------------------------------------- */

export const profile: Profile = {
	/* ---- Identity --------------------------------------------------------- */
	name: 'Janani Asokumar',
	initials: 'JA',
	role: 'Software Engineer',
	tagline:
		'I build intelligent, risk-aware systems at PayPal — turning complex data into reliable, human-friendly products.',
	location: 'San Jose, CA, USA',
	// TODO: replace with your real email address.
	email: 'janani.asokumar@example.com',
	// Employed full-time at PayPal; set to "" to hide the status badge.
	available: '',
	// Set to a PDF in /public (e.g. "/resume.pdf") to enable the button.
	resumeUrl: '',

	/* ---- About ------------------------------------------------------------ */
	about: [
		"I'm a Software Engineer on PayPal's Device Intelligence and Risk Team. I studied Computer Science at UC Davis and enjoy the full product lifecycle — from front-end interfaces to machine learning and cloud-backed services. I work across Python, JavaScript, C++, and Java, with a strong foundation in data structures and algorithms.",
		"Beyond engineering I've directed internal events for Women in Computer Science at UC Davis and am a two-time hackathon winner. I thrive in collaborative, fast-moving environments where quality and empathy for users go hand in hand. Let's connect and explore possibilities!",
	],

	/* ---- Quick stats (optional; used in the Hero/About) ------------------- */
	// NOTE: figures drawn from your public profile — adjust freely.
	stats: [
		{ label: 'Years in computer science', value: '4+' },
		{ label: 'Professional connections', value: '500+' },
		{ label: 'Hackathon wins', value: '2×' },
	],

	/* ---- Quick facts (used in the About section) -------------------------- */
	facts: [
		'San Jose, CA, USA',
		'B.S. Computer Science, UC Davis',
		'Python · JavaScript · C++ · Java',
		'2× hackathon winner',
	],

	/* ---- Social links ----------------------------------------------------- */
	socials: [
		{
			label: 'LinkedIn',
			href: 'https://www.linkedin.com/in/janani-asokumar/',
			icon: 'linkedin',
		},
		{
			label: 'GitHub',
			// TODO: replace with your real GitHub profile.
			href: 'https://github.com/janani-asokumar',
			icon: 'github',
		},
		{
			label: 'Email',
			// TODO: replace with your real email address.
			href: 'mailto:janani.asokumar@example.com',
			icon: 'email',
		},
	],

	/* ---- Professional experience (most recent first) ---------------------- */
	experience: [
		{
			role: 'Software Engineer',
			company: 'PayPal',
			location: 'San Jose, CA',
			start: 'Jan 2026',
			end: 'Present',
			current: true,
			summary:
				'Software Engineer on the Device Intelligence and Risk Team, building intelligent, risk-aware systems at scale.',
			// TODO: add 2–3 specific, quantified accomplishments for this role.
			highlights: [
				'Contribute to device-intelligence and risk-detection systems used across PayPal.',
				'Collaborate with cross-functional engineering teams in a fast-paced, data-driven environment.',
			],
			tech: ['Python', 'C++', 'Java', 'Machine Learning', 'Cloud'],
		},
		{
			role: 'Software Engineer Intern',
			company: 'PayPal',
			location: 'San Jose, CA',
			start: 'Jun 2025',
			end: 'Sep 2025',
			summary:
				'Software Engineering Intern on the Device Intelligence and Risk Team, contributing to risk systems across the engineering lifecycle.',
			// TODO: add specific accomplishments from your internship.
			highlights: [
				'Supported the development and testing of risk-detection services.',
				'Collaborated with senior engineers to ship features end-to-end.',
			],
			tech: ['Python', 'Java', 'Machine Learning'],
		},
		{
			role: 'Research Assistant',
			company: 'Computational Communications Lab, UC Davis',
			location: 'Davis, CA',
			start: 'Jan 2024',
			end: 'Jun 2025',
			summary:
				"Research Assistant at UC Davis's Computational Communications Lab, supporting experiments and data analysis.",
			highlights: [
				'Ran and analysed experiments as part of computational communications research.',
			],
			tech: ['Python', 'Data Analysis', 'Research'],
		},
		{
			role: 'Internal Events Director',
			company: 'Women in Computer Science, UC Davis',
			location: 'Davis, CA',
			start: 'Jan 2023',
			end: 'Jun 2025',
			summary:
				'Directed internal events for the Women in Computer Science community at UC Davis.',
			highlights: [
				'Organised workshops, talks, and networking events for student members.',
			],
			tech: ['Leadership', 'Community', 'Event Planning'],
		},
		{
			role: 'Computer Labs Consultant',
			company: 'IET Computer Rooms',
			location: 'Davis, CA',
			start: 'Apr 2023',
			end: 'Dec 2025',
			summary:
				'Provided computer-lab support and consultation to students and staff across UC Davis facilities.',
			highlights: [
				'Delivered technical support and troubleshooting across campus lab facilities.',
			],
			tech: ['Technical Support', 'Troubleshooting'],
		},
	],
	/* ---- Education ------------------------------------------------------ */
	education: [
		{
			degree: 'B.S. in Computer Science',
			school: 'University of California, Davis',
			location: 'Davis, CA',
			start: '2022',
			end: '2025',
			details:
				'Focused on software engineering, machine learning, and cloud technologies, with a strong foundation in data structures and algorithms.',
		},
		// NOTE: optional — remove this entry if you don't want high school shown.
		{
			degree: 'High School Diploma',
			school: 'Lynbrook High School',
			location: 'San Jose, CA',
			start: '2018',
			end: '2022',
			details: 'Completed secondary education in the San Jose area.',
		},
	],

	/* ---- Skills --------------------------------------------------------- */
	// NOTE: derived from your LinkedIn "About"; ordering is illustrative.
	skills: [
		{
			category: 'Languages',
			items: ['Python', 'JavaScript', 'Java', 'C++'],
		},
		{
			category: 'Front-End',
			items: ['HTML & CSS', 'Responsive UI', 'Data Visualisation'],
		},
		{
			category: 'Machine Learning',
			items: [
				'Machine Learning',
				'Data Structures & Algorithms',
				'Data Analysis',
			],
		},
		{
			category: 'Cloud & Tools',
			items: ['Cloud Technologies', 'Git', 'Linux'],
		},
	],

	/* ---- Projects ------------------------------------------------------- */
	// TODO: these are sample projects — replace them with your real work.
	projects: [
		{
			name: 'Aurora UI',
			description:
				'An open-source, accessible component library with 50+ themeable components built on React and Tailwind CSS.',
			tags: ['React', 'TypeScript', 'Tailwind'],
			repo: 'https://github.com/janani-asokumar/aurora-ui',
			live: 'https://example.com',
			featured: true,
		},
		{
			name: 'TaskFlow',
			description:
				'A collaborative project-management app with real-time updates, drag-and-drop boards, and team analytics.',
			tags: ['Next.js', 'WebSocket', 'PostgreSQL'],
			live: 'https://example.com',
			featured: true,
		},
		{
			name: 'DevPulse',
			description:
				'A developer productivity dashboard that aggregates CI, PR, and deployment metrics into one clean view.',
			tags: ['Node.js', 'GraphQL', 'Chart.js'],
			repo: 'https://github.com/janani-asokumar/devpulse',
		},
		{
			name: 'SnapLearn',
			description:
				'A spaced-repetition flashcard app with offline support and a delightful mobile-first UI.',
			tags: ['React', 'PWA', 'IndexedDB'],
			live: 'https://example.com',
		},
	],
};
