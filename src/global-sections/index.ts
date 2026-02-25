import TeamMembers from './TeamMembers.astro';

export const globalSections = {
	'team-members': TeamMembers,
};

export type GlobalSectionKey = keyof typeof globalSections;
