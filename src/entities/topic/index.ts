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
			'Хүн төрөлхтний дэлхий ертөнцийг ойлгох хэрэгсэл. Микробиомын амьдралаас сансар огторгуй, хүний сэтгэл зүйгээс дэлхийн эдийн засаг хүртэлх ойлголтууд.',

		serial: 1,
		color: 'bg-black',
		postId: ['12b00a56-8253-44ac-a53a-25ff73b63f99']
	},
	{
		id: '6bbf7cbb-79e6-4475-adf9-adb68f60cd1e',
		name: 'Технологи',
		description:
			'Хүн төрөлхтний амьдралаа бүтээх зэвсэг. Уурын хөдөлгүүрээс хиймэл оюун ухаан хүртэлх бүтээлүүд.',

		serial: 2,
		color: 'bg-indigo-400',
		postId: ['5c6bfd0c-60c4-4f36-af37-a9a5e38fa4b8']
	},
	{
		id: '8c4fbc01-e7ea-4f51-995c-d869f409046d',
		name: 'Урлаг',
		description:
			'Хүн төрөлхтний өөрсдийгөө илэрхийлэх илэрхийлэмж. Гудамжны графитигаас жазз хөгжим хүртэлх бүтээлүүд.',

		serial: 3,
		color: 'bg-orange-400',
		postId: ['41b0081f-d6a3-45f8-a09b-884fc0145f17']
	}
]
