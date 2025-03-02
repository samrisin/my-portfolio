import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'Software Enginee',
		company: 'TCS',
		description: 'Full stack development for banking client.',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Bengaluru India',
		period: { from: new Date(2021,6,23),to: new Date(2022,7,15)},
		skills: getSkills('ts', 'js'),
		name: 'Software Engineer',
		color: 'red',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Full stack development for banking client.'
	},
	{
		slug: 'Sofware Engineer',
		company: 'IBM',
		description: "Creating employee training application for IBM's internal employees and AT&T",
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Bengaluru India',
		period: { from: new Date(2020,2,15),to: new Date(2021,6,15)},
		skills: getSkills('svelte', 'ts', 'sass', 'css', 'html', 'js'),
		name: 'Sofware Engineer',
		color: 'blue',
		links: [],
		logo: Assets.Unknown,
		shortDescription: "Creating employee training application for IBM's internal employees and AT&T"
	},
	{
		slug: 'Software Engneer',
		company: 'Zensar Technologies',
		description: "Created front-end for Cisco's internal analytics tool using Angular, material-design, and other technlogies.",
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Pune India',
		period: { from: new Date(2017,6,22),to: new Date(2020,2,15)},
		skills: getSkills('css', 'html', 'js'),
		name: 'Software Engineer',
		color: 'green',
		links: [],
		logo: Assets.Unknown,
		shortDescription: "Created front-end for Cisco's internal analytics tool using Angular, material-design, and other technlogies."
	}
];

export const title = 'Experience';
