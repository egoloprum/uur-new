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
		id: 'Shinjlekh-ukhaan',
		name: 'Шинжлэх ухаан',
		description:
			'Хүн төрөлхтний дэлхий ертөнцийг ойлгох хэрэгсэл. Микробиомын амьдралаас сансар огторгуй, хүний сэтгэл зүйгээс дэлхийн эдийн засаг хүртэлх ойлголтууд.',

		serial: 1,
		color: 'bg-black dark:bg-[#fffae0]',
		postId: [
			'Suunii-paradoks',
			'Uls-turiin-khuch-chadluud',
			'Quant-computeriin-khuch-chadal'
		]
	},
	{
		id: 'Tekhnologi',
		name: 'Технологи',
		description:
			'Хүн төрөлхтний амьдралаа бүтээх зэвсэг. Уурын хөдөлгүүрээс хиймэл оюун ухаан хүртэлх бүтээлүүд.',

		serial: 2,
		color: 'bg-(--blue) dark:bg-(--blue)',
		postId: [
			'Bidnii-anzaardaggui-AI-iin-nuutsuud',
			'Khudulguur',
			'Khiimel-oyun-ukhaanii-erin-uyd-ul-toomsorlogdson-khereglee'
		]
	},
	{
		id: 'Urlag',
		name: 'Урлаг',
		description:
			'Хүн төрөлхтний өөрсдийгөө илэрхийлэх илэрхийлэмж. Гудамжны графитигаас жазз хөгжим хүртэлх бүтээлүүд.',

		serial: 3,
		color: 'bg-(--orange) dark:bg-(--orange)',
		postId: ['Jazz']
	}
]
