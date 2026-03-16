export interface Topic {
	id: string
	name: string
	description: string
	serial: number
	color: string

	postId: string[]
}

export const defaultTopicData: Topic[] = [
	{
		id: '34aa259b-2506-4e56-9e1b-c2c520312524',
		name: 'Шинжлэх ухаан',
		description:
			'From quantum mechanics to climate science, this category feeds your curiosity. We translate dense academic papers into digestible stories, exploring the discoveries that explain our past and predict our future. future. It is not just about memorizing facts; It is about understanding the fundamental forces that govern reality.',

		serial: 1,
		color: 'bg-black',
		postId: ['12b00a56-8253-44ac-a53a-25ff73b63f99']
	},
	{
		id: '6bbf7cbb-79e6-4475-adf9-adb68f60cd1e',
		name: 'Технологи',
		description:
			'Technology is moving faster than ever. In this section, we cut through the hype to look at what actually actually matters. We review the latest tools, break down complex concepts like blockchain and machine and machine learning, and discuss the ethical implications of the code that runs our lives. If it plugs in, connects or computes, we are covering it.',

		serial: 2,
		color: 'bg-indigo-400',
		postId: ['5c6bfd0c-60c4-4f36-af37-a9a5e38fa4b8']
	},
	{
		id: '8c4fbc01-e7ea-4f51-995c-d869f409046d',
		name: 'Урлаг',
		description:
			'Art is the mirror of society. Here, we celebrate creativity in all its forms. We explore classic masterpieces and contemporary digital installations alike. We look at how artists are using new tools (like AI and VR) to tell stories and how creativity remains the uniquely human element in an automated world.',

		serial: 3,
		color: 'bg-orange-400',
		postId: ['41b0081f-d6a3-45f8-a09b-884fc0145f17']
	}
]
