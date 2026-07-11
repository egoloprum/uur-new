export interface Post {
	id: string
	name: string
	slug: string
	description: string
	releaseDate: string
	imageUrl: string
	imageAlt: string

	writerId: string
	researchId: string[]
	redactorId: string[]

	topicId: string
}

export const defaultPostData: Post[] = [
	{
		id: 'Bidnii-anzaardaggui-AI-iin-nuutsuud',
		name: 'Бидний анзаардаггүй AI-ын нууцууд',
		slug: 'Bidnii-anzaardaggui-AI-iin-nuutsuud',
		description:
			'Хиймэл оюун ухаан нь анхандаа янз бүрийн дүрснүүдийг хооронд нь ялган таних, төрөл бүрийн хэл дээр ойлгох ярилцах, шинэ мэдээллүүдэд суралцан дэвших зэргийг гол зорилгоо болгож байв. Гэвч сүүлийн үед хүмүүс AI-аар жинхэнэ мэт зураг, бичлэг хийлгэж, зүгээр л үйл явдлыг нь тайлбарлаад шинэ видео, website ч бүтээлгэдэг болсон.',
		releaseDate: '2025-12-31',
		imageUrl: '/0/Bidnii-anzaardaggui-AI-iin-nuutsuud.jpg',
		imageAlt: 'Bidnii-anzaardaggui-AI-iin-nuutsuud',
		writerId: '569d55a5-580b-469f-9218-b3dcb53ab48a',
		researchId: [
			'569d55a5-580b-469f-9218-b3dcb53ab48a',
			'02b8538a-ff85-40ed-ae38-bd68cdfa5567'
		],
		redactorId: [''],
		topicId: 'Tekhnologi'
	},
	{
		id: 'Jazz',
		name: 'Жазз',
		slug: 'Jazz',
		description:
			'Жазз хөгжмийг Луис Армстронгийн “​​What a Wonderful World” дуугүйгээр төсөөлөхийн аргагүй.',
		releaseDate: '2025-12-31',
		imageUrl: '/0/Jazz.png',
		imageAlt: 'Jazz',
		writerId: '537df664-4972-4c8d-b0e5-b44b50033d7a',
		researchId: ['537df664-4972-4c8d-b0e5-b44b50033d7a'],
		redactorId: [''],
		topicId: 'Urlag'
	},
	{
		id: 'Suunii-paradoks',
		name: 'Сүүний парадокс',
		slug: 'Suunii-paradoks',
		description:
			'Гадаадад удаан сүү цагаан идээ бараг хэрэглэхгүй байж байгаад Монголын хөдөө буцаж ирээд, өдөр тутамдаа сүү цагаан идээ хэрэглэхэд миний гэдэс ихээр дүүрч, тавгүй санагддаг.',
		releaseDate: '2025-12-31',
		imageUrl: '/0/Suunii-paradoks.jpg',
		imageAlt: 'Suunii-paradoks',
		writerId: 'a7c1aa0b-2257-4025-b92e-c99fc72afb99',
		researchId: ['a7c1aa0b-2257-4025-b92e-c99fc72afb99'],
		redactorId: [''],
		topicId: 'Shinjlekh-ukhaan'
	},

	{
		id: 'Khudulguur',
		name: 'Хөдөлгүүр',
		slug: 'Khudulguur',
		description:
			'Уурын хөдөлгүүр, цахилгаан генератор, мотор зэрэг технологиуд бол хүн төрөлхтөн хэрхэн өөрсдийн биеийн хүчнээс илүү гарч, аливаа зүйлсийг хийх бүтээмжээ асар ихээр нэмэгдүүлж, аж үйлдвэржин, орчин үеийн нийгмийг бүтээсний суурь “хүч чадал” билээ.',
		releaseDate: '2026-07-01',
		imageUrl: 'empty',
		imageAlt: 'Khudulguur',
		writerId: 'a7c1aa0b-2257-4025-b92e-c99fc72afb99',
		researchId: ['a7c1aa0b-2257-4025-b92e-c99fc72afb99'],
		redactorId: [''],
		topicId: 'Tekhnologi'
	},
	{
		id: 'Khiimel-oyun-ukhaanii-erin-uyd-ul-toomsorlogdson-khereglee',
		name: 'Хиймэл оюун ухааны эрин үед үл тоомсорлогдсон хэрэглээ',
		slug: 'Khiimel-oyun-ukhaanii-erin-uyd-ul-toomsorlogdson-khereglee',
		description:
			'Хиймэл оюун ухааны дата төвүүд 2024 оны эцсийн байдлаар дэлхийн нийт цахилгаан хэрэглээний 1.5%-ийг бүрдүүлсэн бөгөөд 2030 он гэхэд энэ тоо 2 дахин өсөх таамагтай байна.',
		releaseDate: '2026-07-01',
		imageUrl: 'empty',
		imageAlt: 'Khiimel-oyun-ukhaanii-erin-uyd-ul-toomsorlogdson-khereglee',
		writerId: '9cbd7817-ad9b-4a8b-81ca-e8a657a21f36',
		researchId: ['9cbd7817-ad9b-4a8b-81ca-e8a657a21f36'],
		redactorId: [''],
		topicId: 'Tekhnologi'
	},
	{
		id: 'Uls-turiin-khuch-chadluud',
		name: 'Улс төрийн хүч чадлууд',
		slug: 'Uls-turiin-khuch-chadluud',
		description:
			'Ардчилал гэж юу вэ? Автократ засаглал гэж юу вэ? Олигархи гэж юу вэ? Улс орнууд ямар, ямар засаглалын хэлбэртэй байдаг вэ? Хэн ямар эрх мэдэлтэй байхыг хэн шийддэг вэ?',
		releaseDate: '2026-07-01',
		imageUrl: 'empty',
		imageAlt: 'Uls-turiin-khuch-chadluud',
		writerId: 'a7c1aa0b-2257-4025-b92e-c99fc72afb99',
		researchId: ['a7c1aa0b-2257-4025-b92e-c99fc72afb99'],
		redactorId: [''],
		topicId: 'Shinjlekh-ukhaan'
	},
	{
		id: 'Quant-computeriin-khuch-chadal',
		name: 'Квант компьютерийн хүч чадал',
		slug: 'Quant-computeriin-khuch-chadal',
		description:
			'“Орчлон ертөнцийн анхны бөгөөд тулгуур зарчим бол атомууд болон хоосон орон зай юм. Үүнээс бусад бүх зүйлс нь зөвхөн оршин буй мэтээр төсөөлөгддөг төдий зүйл билээ.”  — Демокрит',
		releaseDate: '2026-07-01',
		imageUrl: 'empty',
		imageAlt: 'Quant-computeriin-khuch-chadal',
		writerId: 'dcb3719d-65f1-4af1-8b14-77e69e3fac28',
		researchId: ['dcb3719d-65f1-4af1-8b14-77e69e3fac28'],
		redactorId: [''],
		topicId: 'Shinjlekh-ukhaan'
	}
]
