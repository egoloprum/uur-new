export interface Member {
	id: string
	name: string
	slug: string
	description: string
	recentActivity: string
	role: Role[]
	imageUrl: string

	// should be started_at date then substract from current date to calculate duration

	duration: string

	seasonId: string[]
	contributerOfPostId: string[]
}

export type RoleTypes =
	| 'Coordinator'
	| 'Researcher'
	| 'Redactor'
	| 'Writer'
	| 'Designer'
	| 'Developer'
	| 'Marketer'

export interface Role {
	type: RoleTypes
	seasonId: string[]
}

export const defaultMemberData: Member[] = [
	{
		id: 'a7c1aa0b-2257-4025-b92e-c99fc72afb99',
		name: 'Цолмон',
		slug: 'Tsolmon',
		description:
			'Нүүрсхүчлийн хийгээс онгоцны түлш гарган авч буй стартапд механикийн инженер, циркийн трапезийн анхлан суралцагч',
		recentActivity:
			'Ойрд түүх сонирхож байгаа. Жак Уэтерфордын Монголын Их Хатдын Нууц Товчоо: Чингис хааны эзэнт гүрнийг охид нь аварч хамгаалсан түүх ном, Wiser World дэлхийн түүхийн подкаст, The Prince гэсэн нэртэй Ши Жинпиний тухай подкаст',
		role: [
			{
				type: 'Coordinator',
				seasonId: ['season-nuuts', 'season-khuch-chadal']
			},
			{
				type: 'Writer',
				seasonId: ['season-nuuts', 'season-khuch-chadal']
			},
			{
				type: 'Designer',
				seasonId: ['season-nuuts', 'season-khuch-chadal']
			},
			{
				type: 'Developer',
				seasonId: ['season-nuuts', 'season-khuch-chadal']
			}
		],
		imageUrl: '/members/member-tsolmon.jpg',
		duration: '1-3/2026',

		seasonId: ['season-khuch-chadal'],
		contributerOfPostId: [
			'Suunii-paradoks',
			'Khudulguur',
			'Uls-turiin-khuch-chadluud'
		]
	},
	{
		id: '537df664-4972-4c8d-b0e5-b44b50033d7a',
		name: 'Ундаръяа',
		slug: 'Undariya',
		description:
			'Зах зээлийн эрсдэлийн шинжээч, дата аналист, дотоод аудитор, Математикийн цагийн багш',
		recentActivity:
			'Ойрын үед баримтат нэвтрүүлэг их үзэж байгаа. Our Ocean, The New Yorker 100 нэртэй нэвтрүүлгүүдийг сүүлд үзсэн. Хүүхэлдэйн киногоор дамжуулан франц хэл бас сурч эхэлсэн.',
		role: [
			{
				type: 'Coordinator',
				seasonId: ['season-nuuts', 'season-khuch-chadal']
			},
			{
				type: 'Redactor',
				seasonId: ['season-nuuts', 'season-khuch-chadal']
			},
			{
				type: 'Writer',
				seasonId: ['season-nuuts', 'season-khuch-chadal']
			},
			{
				type: 'Marketer',
				seasonId: ['season-nuuts', 'season-khuch-chadal']
			}
		],
		imageUrl: '/members/member-undariya.png',
		duration: '1-3/2026',

		seasonId: ['season-khuch-chadal'],
		contributerOfPostId: ['Jazz']
	},
	{
		id: 'f8c7f364-7074-436f-8632-fe9e747c4826',
		name: 'Минжинсор',
		slug: 'Minjinsor',
		description: 'Хиймэл оюун, компьютерын хараа сонирхогч',
		recentActivity: 'Мэдээлэл одоогоор байхгүй байна.',
		role: [
			{
				type: 'Researcher',
				seasonId: ['season-khuch-chadal']
			},
			{
				type: 'Writer',
				seasonId: ['season-khuch-chadal']
			}
		],
		imageUrl: '/members/member-minjinsor.jpg',
		duration: '1-3/2026',

		seasonId: ['season-khuch-chadal'],
		contributerOfPostId: ['']
	},
	{
		id: '02b8538a-ff85-40ed-ae38-bd68cdfa5567',
		name: 'Мөнх-Оргил',
		slug: 'Munkh-Orgil',
		description:
			'Нийслэлийн 1р сургуулийн 12р ангийн сурагч, физикийн олимпиадад оролцдог, ирээдүйд судлаач болох төлөвлөгөөтэй',
		recentActivity: '',
		role: [
			{
				type: 'Researcher',
				seasonId: ['season-nuuts', 'season-khuch-chadal']
			},
			{
				type: 'Writer',
				seasonId: ['season-nuuts', 'season-khuch-chadal']
			}
		],
		imageUrl: '/members/member-default.jpg',
		duration: '1-3/2026',

		seasonId: ['season-nuuts', 'season-khuch-chadal'],
		contributerOfPostId: ['Bidnii-anzaardaggui-AI-iin-nuutsuud']
	},
	{
		id: '569d55a5-580b-469f-9218-b3dcb53ab48a',
		name: 'Бат-Ирээдүй',
		slug: 'Bat-Ireedui',
		description:
			'Нийслэлийн 1р сургуулийн 12р ангийн сурагч, MUST-ийн судалгааны багийн залуу судлаач, Robocon багийн гишүүн. Engineer болох зорилготой, волейболын спортын тамирчин.',
		recentActivity:
			'Ойрд программ хангамж(Low level programming), rocket engineering чиглэлээр суралцаж байгаа. THP Strength Daily Podcast. Artificial Intelligence: A Modern Approach (4th edition) ном уншиж байна.',
		role: [
			{
				type: 'Redactor',
				seasonId: ['season-nuuts', 'season-khuch-chadal']
			},
			{
				type: 'Writer',
				seasonId: ['season-nuuts', 'season-khuch-chadal']
			}
		],
		imageUrl: '/members/member-default.jpg',
		duration: '1-3/2026',

		seasonId: ['season-khuch-chadal', 'season-khuch-chadal'],
		contributerOfPostId: ['Bidnii-anzaardaggui-AI-iin-nuutsuud']
	},
	{
		id: '9cbd7817-ad9b-4a8b-81ca-e8a657a21f36',
		name: 'Анхмандах',
		slug: 'Ankhmandakh',
		description:
			'Нийслэлийн 1-р сургуулийн 12-р ангийн сурагч, инженер буюу физик мате хими хийдэг.',
		recentActivity:
			'Дайнтай баримтат нэвтрүүлэг үзэж байгаа. Түүхтэй холбоотой ном уншиж байгаа. Харгис зуун...',
		role: [
			{
				type: 'Writer',
				seasonId: ['season-khuch-chadal']
			}
		],
		imageUrl: '/members/member-default.jpg',
		duration: '1-3/2026',

		seasonId: ['season-khuch-chadal'],
		contributerOfPostId: [
			'Khiimel-oyun-ukhaanii-erin-uyd-ul-toomsorlogdson-khereglee'
		]
	},
	{
		id: '012085c6-b343-489b-8dd9-506c1166baab',
		name: 'Амар',
		slug: 'Amar',
		description:
			'Нийслэлийн 1р сургуулийн 12р ангийн сурагч, инженер болох төлөвлөгөөтэй, физик болон математикаар хичээллэж олимпиадад тогтмол оролцдог, түүх ба эдийн засаг сонирхогч',
		recentActivity:
			'Физик болоод математикийн бэлтгэл хийх, Монголын Гээгдсэн Түүх подкаст, TIKhistory youtube channel, The End of Alchemy гэдэг ном уншиж буй',
		role: [
			{
				type: 'Writer',
				seasonId: ['season-khuch-chadal']
			}
		],
		imageUrl: '/members/member-default.jpg',
		duration: '1-3/2026',

		seasonId: ['season-khuch-chadal'],
		contributerOfPostId: ['']
	},
	{
		id: 'f6a5855a-5386-42d2-a63e-592efd217228',
		name: 'Ганбаяр',
		slug: 'Ganbayar',
		description: 'Мэдээлэл одоогоор байхгүй байна.',
		recentActivity: 'Мэдээлэл одоогоор байхгүй байна.',
		role: [
			{
				type: 'Designer',
				seasonId: ['season-khuch-chadal']
			},
			{
				type: 'Developer',
				seasonId: ['season-khuch-chadal']
			}
		],
		imageUrl: '/members/member-default.jpg',
		duration: '1-3/2026',

		seasonId: ['season-khuch-chadal'],
		contributerOfPostId: ['']
	},
	{
		id: '7c3fdf6d-ebd5-4acd-afb1-fc70cdd383a6',
		name: 'Ган-Эрдэнэ',
		slug: 'Gan-Erdene',
		description:
			'Системийн гүн рүү орж судлах дуртай инженер, техникт сонирхолтой. Электроник болон программ хангамжийн ажил хийдэг. Олон спортоор хийллэх дуртай. Хамгийн дуртай нь BMX дугуйгаар хичээллэх.',
		recentActivity:
			'Авто машинтай холбоотой номнуудыг уншиж байна. Механик талаас нь судалж байгаа.',
		role: [
			{
				type: 'Developer',
				seasonId: ['season-khuch-chadal']
			},
			{
				type: 'Marketer',
				seasonId: ['season-khuch-chadal']
			}
		],
		imageUrl: '/members/member-gan-erdene.png',
		duration: '1-3/2026',

		seasonId: ['season-khuch-chadal'],
		contributerOfPostId: ['']
	},
	{
		id: 'dcb3719d-65f1-4af1-8b14-77e69e3fac28',
		name: 'Анирчулуу',
		slug: 'Anirchuluu',
		description: 'Принстоны их сургуулийн физикийн чиглэлийн оюутан.',
		recentActivity: 'Мэдээлэл одоогоор байхгүй байна.',
		role: [
			{
				type: 'Marketer',
				seasonId: ['season-khuch-chadal']
			}
		],
		imageUrl: '/members/member-default.jpg',
		duration: '1-3/2026',

		seasonId: ['season-khuch-chadal'],
		contributerOfPostId: ['Quant-computeriin-khuch-chadal']
	}
]
