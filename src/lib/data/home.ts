import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Samridhi';

export const lastName = 'Singh';

export const description =
	'Passionate software developer with a proven track record of designing and developing applications from concept to completion. Recently graduated, I am actively seeking new grad opportunities to apply and expand my skills. I have a strong foundation in Java and front-end development, with hands-on experience in building scalable and user-friendly applications. My interests lie in cloud computing and distributed systems, and I am eager to deepen my expertise in modern software development practices. Committed to continuous learning and innovation, I thrive in dynamic environments where I can apply my knowledge to solve real-world challenges.';

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/samrisin' },
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
		link: 'samridhisingh8@gmail.com'
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
