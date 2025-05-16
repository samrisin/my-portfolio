import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Masters of Computer Science',
		description: '',
		location: 'USA',
		logo: Assets.Unknown,
		name: '',
		organization: 'Northeastern University',
		period: { from: new Date(2023, 9, 1) },
		shortDescription: '',
		slug: 'dummy-education-item-2',
		subjects: [ 'Algorithms','Program Design Paradigmn','Foundations of Software Engineering','Mobile Development','Database Management Systems','Machine Learning','Cloud Computing','Large Scale Distributed Systems']
	},
	{
		degree: 'Bachelor degree of Computer Science',
		description: '',
		location: 'Bhopal India',
		logo: Assets.Unknown,
		name: '',
		organization: 'RGPV',
		period: { from: new Date(2013, 6, 1), to: new Date(2017, 5, 15) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['Object Oriented Programming','Data structures and Algorithms','Operating Systems', 'Computer Networking', 'Computer Architecture','Compiler Design','Theory of Computation','C','C++']
	},
	
];

export const title = 'Education';
