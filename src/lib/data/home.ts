import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Samridhi';

export const lastName = 'Singh';

export const description =
	'Passionate software developer with a proven track record of designing and developing applications from concept to completion. Currently a student, continuously enhancing my technical expertise and problem-solving skills. I have a strong foundation in Java and front-end development, with hands-on experience in building scalable and user-friendly applications. My interests lie in cloud computing and distributed systems, and I am always eager to explore new technologies and improve my proficiency in modern software development practices. Committed to continuous learning and innovation, I thrive in dynamic environments where I can apply my knowledge to solve real-world challenges.';

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/'
	},
	{
		platform: Platform.Twitter,
		link: 'https://twitter.com/'
	},
	{
		platform: Platform.StackOverflow,
		link: 'https://stackoverflow.com/'
	},
	{
		platform: Platform.Email,
		link: 'riadh_adrani@hotmail.fr'
	},
	{
		platform: Platform.Youtube,
		link: 'https://www.youtube.com'
	},
	{
		platform: Platform.Facebook,
		link: 'https://www.facebook.com'
	}
];

export const skills = getSkills('java', 'js', 'ts','angular', 'reactjs','python','aws EC2');
