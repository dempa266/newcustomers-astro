export interface TeamMember {
	name: string;
	title?: string;
	phone?: string;
	email?: string;
	linkedin?: string;
	imageUrl?: string;
}

export interface TeamMembersGlobalSection {
	heading: string;
	members: TeamMember[];
}

export const globalSections = {
	teamMembers: {
		heading: 'Team Members',
		members: [
			{
				name: 'Jane Doe',
				title: 'Account Manager',
				phone: '+46 70 123 45 67',
				email: 'jane@example.com',
			},
			{
				name: 'John Smith',
				title: 'CRM Specialist',
				phone: '+46 70 987 65 43',
				email: 'john@example.com',
			},
		],
	} satisfies TeamMembersGlobalSection,
};
