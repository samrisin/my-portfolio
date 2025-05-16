import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'project1',
		color: '#5e95e3',
		description:
			'Built with flutter and firebase an android/ios application that helps people to exchange skills with ease.',
		shortDescription:
			'Built with flutter and firebase an android/ios application that helps people to exchange skills with ease.',
		links: [{ to: 'https://github.com/samrisin/skillxchange', label: 'GitHub' }],
		logo: Assets.Dart,
		name: 'SkillXChange',
		period: {
			from: new Date(2024,2,1)
		},
		skills: getSkills('dart', 'firebase', 'flutter'),
		type: 'Mobile Application'
	},
	{
		slug: 'project2',
		color: '#ff3e00',
		description:
			'Python model to classify the severity of a fire from an image. The Model classifies image into four categories fire/No_fire and fire level from low to severe. Due to low datasets present for low and moderate fire data, the model currenlty predicts any kind of fire as Severe.',
		shortDescription:
			'Python model to classify the severity of a fire from an image.',
		links: [{ to: 'https://github.com/samrisin/FireSeverityModel', label: 'GitHub' }],
		logo: Assets.Python,
		name: 'Fire Severity Classifier',
		period: {
			from: new Date(2024,4,1)
		},
		skills: getSkills('python'),
		type: 'Machine Learning Model',
		screenshots: [
			{
				label: 'screen 1',
				src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '2',
				src: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '3',
				src: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '4',
				src: 'https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '5',
				src: 'https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '6',
				src: 'https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			}
		]
	},
	{
		slug: 'project3',
		color: '#5e95e3',
		description:
			'Built with java a multithreaded chat application that uses variety of advanced Java concepts such as multithreading, locks, runnable and notify',
		shortDescription:'Built with java a multithreaded chat application that uses variety of advanced concepts such as multithreading, locks, runnable and notify',
		links: [{ to: 'https://github.com/samrisin/chatApplication', label: 'GitHub' }],
		logo: Assets.Java,
		name: 'Desktop Application',
		period: {
			from: new Date(2024,9,1)
		},
		skills: getSkills('java'),
		type: 'Desktop Application'
	},
	{
		slug: 'project4',
		color: '#5e95e3',
		description:
			'A Skier resort web application with distributed architecture containing components of client, server and consumer. Build with Java, Rabbitmq, Redis, DynamoDB',
		shortDescription:'A web application with distributed architecture containing components of client, server and consumer. Build with Java, Rabbitmq, Redis, DynamoDB',
		links: [{ to: 'https://github.com/samrisin/SkiResortApplication', label: 'GitHub' }],
		logo: Assets.AWS,
		name: 'Web Application',
		period: {
			from: new Date(2024,12,1)
		},
		skills: getSkills('java','aws EC2','dynamodb'),
		type: 'Web Application'
	},

	{
		slug: 'project5',
		color: '#5e95e3',
		description:
			'This project provides a simple IMDb Movie Rating Finder using Python (Flask) for the backend and HTML, CSS, and JavaScript for the frontend. Users can enter a movie name, and the IMDb rating will be fetched and displayed.',
		shortDescription:'This project provides a simple IMDb Movie Rating Finder using Python (Flask) for the backend and HTML, CSS, and JavaScript for the frontend. Users can enter a movie name, and the IMDb rating will be fetched and displayed.',
		links: [{ to: 'https://github.com/samrisin/imdb-movie-rating', label: 'GitHub' }],
		logo: Assets.Python,
		name: 'Web Application',
		period: {
			from: new Date(2025,3,4)
		},
		skills: getSkills('python','Flask','html','js','css'),
		type: 'Web Application'
	}

];

export const title = 'Projects';
