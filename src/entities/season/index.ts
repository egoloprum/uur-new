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
		id: '56a6a473-4733-4204-8b29-1633f0084d97',
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
		postId: [
			'5c6bfd0c-60c4-4f36-af37-a9a5e38fa4b8',
			'41b0081f-d6a3-45f8-a09b-884fc0145f17',
			'12b00a56-8253-44ac-a53a-25ff73b63f99'
		]
	},

	{
		id: '405e4a2d-e198-4fa8-942d-3727d36861e2',
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
			'7c3fdf6d-ebd5-4acd-afb1-fc70cdd383a6'
		],
		postId: ['']
	},
	{
		id: '9e07dc3e-3aca-417d-844f-c9675406de4b',
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
		id: '37a5ab23-56b6-4996-8e25-57508a746956',
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
		id: '02527a1b-ecd8-4b61-8f65-9cab09ff1ce2',
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
		id: '2d059598-952c-4e77-92ba-1bbcfe439432',
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
		id: '87752e78-2ef7-420c-baf3-a2d0e25fb8ae',
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
		id: '2c7d527d-6b3a-4783-b25e-b7f76195d533',
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
		id: 'bf9a3a85-515c-421b-aada-b701903b41f4',
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
