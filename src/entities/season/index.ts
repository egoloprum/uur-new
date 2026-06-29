export interface Season {
	id: string
	name: string
	slug: string
	description: string
	duration: string
	serial: number
	isActive: boolean

	memberId: string[]
	postId: string[]
}

export const defaultSeasonData: Season[] = [
	{
		id: 'season-nuuts',
		name: 'Нууц',
		slug: 'Nuuts',
		description:
			'Өдөр бүр бидний амьдралд харагдах зүйлс. Гэхдээ тэдний дунд бидэнд мэдэгдэхгүй нуугдах нууц. Нууц амьдрал, нууц код, нууц газрын зураг.',
		duration: '',
		serial: 0,
		isActive: true,

		memberId: [
			'a7c1aa0b-2257-4025-b92e-c99fc72afb99',
			'537df664-4972-4c8d-b0e5-b44b50033d7a',
			'02b8538a-ff85-40ed-ae38-bd68cdfa5567',
			'569d55a5-580b-469f-9218-b3dcb53ab48a'
		],
		postId: ['Bidnii-anzaardaggui-AI-iin-nuutsuud', 'Jazz', 'Suunii-paradoks']
	},
	{
		id: 'season-khuch-chadal',
		name: 'Хүч чадал',
		slug: 'Khuch-chadal',
		description:
			'Өдөр бүр бидний амьдралд харагдах зүйлс. Гэхдээ тэдний дунд бидэнд мэдэгдэхгүй нуугдах нууц. Нууц амьдрал, нууц код, нууц газрын зураг.',
		duration: '',
		serial: 1,
		isActive: true,

		memberId: [
			'a7c1aa0b-2257-4025-b92e-c99fc72afb99',
			'537df664-4972-4c8d-b0e5-b44b50033d7a',
			'f8c7f364-7074-436f-8632-fe9e747c4826',
			'02b8538a-ff85-40ed-ae38-bd68cdfa5567',
			'569d55a5-580b-469f-9218-b3dcb53ab48a',
			'9cbd7817-ad9b-4a8b-81ca-e8a657a21f36',
			'012085c6-b343-489b-8dd9-506c1166baab',
			'f6a5855a-5386-42d2-a63e-592efd217228',
			'7c3fdf6d-ebd5-4acd-afb1-fc70cdd383a6',
			'dcb3719d-65f1-4af1-8b14-77e69e3fac28'
		],
		postId: [
			'Khudulguur',
			'Khiimel-oyun-ukhaanii-erin-uyd-ul-toomsorlogdson-khereglee',
			'Uls-turiin-khuch-chadluud',
			'Quant-computeriin-khuch-chadal'
		]
	},
	{
		id: 'season-khovor',
		name: 'Ховор',
		slug: 'Khovor',
		description:
			'Өдөр бүр бидний амьдралд харагдах зүйлс. Гэхдээ тэдний дунд бидэнд мэдэгдэхгүй нуугдах нууц. Нууц амьдрал, нууц код, нууц газрын зураг.',
		duration: '',
		serial: 2,
		isActive: false,

		memberId: [''],
		postId: ['']
	},
	{
		id: 'season-tegsh-tentsuu',
		name: 'Тэгш/тэнцүү',
		slug: 'Tegsh-tentsuu',
		description:
			'Өдөр бүр бидний амьдралд харагдах зүйлс. Гэхдээ тэдний дунд бидэнд мэдэгдэхгүй нуугдах нууц. Нууц амьдрал, нууц код, нууц газрын зураг.',
		duration: '',
		serial: 3,
		isActive: false,

		memberId: [''],
		postId: ['']
	},
	{
		id: 'season-ayul',
		name: 'Аюул',
		slug: '',
		description:
			'Өдөр бүр бидний амьдралд харагдах зүйлс. Гэхдээ тэдний дунд бидэнд мэдэгдэхгүй нуугдах нууц. Нууц амьдрал, нууц код, нууц газрын зураг.',
		duration: '',
		serial: 4,
		isActive: false,

		memberId: [''],
		postId: ['']
	},
	{
		id: 'season-az',
		name: 'Аз',
		slug: 'Az',
		description:
			'Өдөр бүр бидний амьдралд харагдах зүйлс. Гэхдээ тэдний дунд бидэнд мэдэгдэхгүй нуугдах нууц. Нууц амьдрал, нууц код, нууц газрын зураг.',
		duration: '',
		serial: 5,
		isActive: false,

		memberId: [''],
		postId: ['']
	},
	{
		id: 'season-kharankhui',
		name: 'Харанхуй',
		slug: 'Kharankhui',
		description:
			'Өдөр бүр бидний амьдралд харагдах зүйлс. Гэхдээ тэдний дунд бидэнд мэдэгдэхгүй нуугдах нууц. Нууц амьдрал, нууц код, нууц газрын зураг.',
		duration: '',
		serial: 6,
		isActive: false,

		memberId: [''],
		postId: ['']
	},
	{
		id: 'season-emkh-tsegts',
		name: 'Эмх цэгц',
		slug: 'Emkh-tsegts',
		description:
			'Өдөр бүр бидний амьдралд харагдах зүйлс. Гэхдээ тэдний дунд бидэнд мэдэгдэхгүй нуугдах нууц. Нууц амьдрал, нууц код, нууц газрын зураг.',
		duration: '',
		serial: 7,
		isActive: false,

		memberId: [''],
		postId: ['']
	},
	{
		id: 'season-khuviral',
		name: 'Хувирал',
		slug: 'Khuviral',
		description:
			'Өдөр бүр бидний амьдралд харагдах зүйлс. Гэхдээ тэдний дунд бидэнд мэдэгдэхгүй нуугдах нууц. Нууц амьдрал, нууц код, нууц газрын зураг.',
		duration: '',
		serial: 8,
		isActive: false,

		memberId: [''],
		postId: ['']
	}
]
