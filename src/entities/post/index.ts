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
    id: '5c6bfd0c-60c4-4f36-af37-a9a5e38fa4b8',
    name: 'Бидний анзаардаггүй AI-ын нууцууд',
    slug: 'Bidnii-anzaardaggui-AI-iin-nuutsuud',
    description:
      'Хиймэл оюун ухаан нь анхандаа янз бүрийн дүрснүүдийг хооронд нь ялган таних, төрөл бүрийн хэл дээр ойлгох ярилцах, шинэ мэдээллүүдэд суралцан дэвших зэргийг гол зорилгоо болгож байв. Гэвч сүүлийн үед хүмүүс AI-аар жинхэнэ мэт зураг, бичлэг хийлгэж, зүгээр л үйл явдлыг нь тайлбарлаад шинэ видео, website ч бүтээлгэдэг болсон.',
    releaseDate: '2025-12-31',
    imageUrl: '/0/Bidnii-anzaardaggui-AI-iin-nuutsuud.jpg',
    imageAlt: 'Bidnii-anzaardaggui-AI-iin-nuutsuud',

    writerId: '569d55a5-580b-469f-9218-b3dcb53ab48a',
    researchId: ['569d55a5-580b-469f-9218-b3dcb53ab48a', '02b8538a-ff85-40ed-ae38-bd68cdfa5567'],
    redactorId: [''],
    topicId: '6bbf7cbb-79e6-4475-adf9-adb68f60cd1e',
  },
  {
    id: '41b0081f-d6a3-45f8-a09b-884fc0145f17',
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
    topicId: '8c4fbc01-e7ea-4f51-995c-d869f409046d',
  },
  {
    id: '12b00a56-8253-44ac-a53a-25ff73b63f99',
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
    topicId: '34aa259b-2506-4e56-9e1b-c2c520312524',
  },
  {
    id: '41b0081f-d6a3-45f8-a09b-884fc0145f17',
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
    topicId: '8c4fbc01-e7ea-4f51-995c-d869f409046d',
  },
  {
    id: '12b00a56-8253-44ac-a53a-25ff73b63f99',
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
    topicId: '34aa259b-2506-4e56-9e1b-c2c520312524',
  },
  {
    id: '5c6bfd0c-60c4-4f36-af37-a9a5e38fa4b8',
    name: 'Бидний анзаардаггүй AI-ын нууцууд',
    slug: 'Bidnii-anzaardaggui-AI-iin-nuutsuud',
    description:
      'Хиймэл оюун ухаан нь анхандаа янз бүрийн дүрснүүдийг хооронд нь ялган таних, төрөл бүрийн хэл дээр ойлгох ярилцах, шинэ мэдээллүүдэд суралцан дэвших зэргийг гол зорилгоо болгож байв. Гэвч сүүлийн үед хүмүүс AI-аар жинхэнэ мэт зураг, бичлэг хийлгэж, зүгээр л үйл явдлыг нь тайлбарлаад шинэ видео, website ч бүтээлгэдэг болсон.',
    releaseDate: '2025-12-31',
    imageUrl: '/0/Bidnii-anzaardaggui-AI-iin-nuutsuud.jpg',
    imageAlt: 'Bidnii-anzaardaggui-AI-iin-nuutsuud',

    writerId: '569d55a5-580b-469f-9218-b3dcb53ab48a',
    researchId: ['569d55a5-580b-469f-9218-b3dcb53ab48a', '02b8538a-ff85-40ed-ae38-bd68cdfa5567'],
    redactorId: [''],
    topicId: '6bbf7cbb-79e6-4475-adf9-adb68f60cd1e',
  },
  {
    id: '41b0081f-d6a3-45f8-a09b-884fc0145f17',
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
    topicId: '8c4fbc01-e7ea-4f51-995c-d869f409046d',
  },
  {
    id: '12b00a56-8253-44ac-a53a-25ff73b63f99',
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
    topicId: '34aa259b-2506-4e56-9e1b-c2c520312524',
  },
  {
    id: '41b0081f-d6a3-45f8-a09b-884fc0145f17',
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
    topicId: '8c4fbc01-e7ea-4f51-995c-d869f409046d',
  },
  {
    id: '12b00a56-8253-44ac-a53a-25ff73b63f99',
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
    topicId: '34aa259b-2506-4e56-9e1b-c2c520312524',
  },
  {
    id: '5c6bfd0c-60c4-4f36-af37-a9a5e38fa4b8',
    name: 'Бидний анзаардаггүй AI-ын нууцууд',
    slug: 'Bidnii-anzaardaggui-AI-iin-nuutsuud',
    description:
      'Хиймэл оюун ухаан нь анхандаа янз бүрийн дүрснүүдийг хооронд нь ялган таних, төрөл бүрийн хэл дээр ойлгох ярилцах, шинэ мэдээллүүдэд суралцан дэвших зэргийг гол зорилгоо болгож байв. Гэвч сүүлийн үед хүмүүс AI-аар жинхэнэ мэт зураг, бичлэг хийлгэж, зүгээр л үйл явдлыг нь тайлбарлаад шинэ видео, website ч бүтээлгэдэг болсон.',
    releaseDate: '2025-12-31',
    imageUrl: '/0/Bidnii-anzaardaggui-AI-iin-nuutsuud.jpg',
    imageAlt: 'Bidnii-anzaardaggui-AI-iin-nuutsuud',

    writerId: '569d55a5-580b-469f-9218-b3dcb53ab48a',
    researchId: ['569d55a5-580b-469f-9218-b3dcb53ab48a', '02b8538a-ff85-40ed-ae38-bd68cdfa5567'],
    redactorId: [''],
    topicId: '6bbf7cbb-79e6-4475-adf9-adb68f60cd1e',
  },
  {
    id: '41b0081f-d6a3-45f8-a09b-884fc0145f17',
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
    topicId: '8c4fbc01-e7ea-4f51-995c-d869f409046d',
  },
  {
    id: '12b00a56-8253-44ac-a53a-25ff73b63f99',
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
    topicId: '34aa259b-2506-4e56-9e1b-c2c520312524',
  },
  {
    id: '41b0081f-d6a3-45f8-a09b-884fc0145f17',
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
    topicId: '8c4fbc01-e7ea-4f51-995c-d869f409046d',
  },
  {
    id: '12b00a56-8253-44ac-a53a-25ff73b63f99',
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
    topicId: '34aa259b-2506-4e56-9e1b-c2c520312524',
  },
  {
    id: '5c6bfd0c-60c4-4f36-af37-a9a5e38fa4b8',
    name: 'Бидний анзаардаггүй AI-ын нууцууд',
    slug: 'Bidnii-anzaardaggui-AI-iin-nuutsuud',
    description:
      'Хиймэл оюун ухаан нь анхандаа янз бүрийн дүрснүүдийг хооронд нь ялган таних, төрөл бүрийн хэл дээр ойлгох ярилцах, шинэ мэдээллүүдэд суралцан дэвших зэргийг гол зорилгоо болгож байв. Гэвч сүүлийн үед хүмүүс AI-аар жинхэнэ мэт зураг, бичлэг хийлгэж, зүгээр л үйл явдлыг нь тайлбарлаад шинэ видео, website ч бүтээлгэдэг болсон.',
    releaseDate: '2025-12-31',
    imageUrl: '/0/Bidnii-anzaardaggui-AI-iin-nuutsuud.jpg',
    imageAlt: 'Bidnii-anzaardaggui-AI-iin-nuutsuud',

    writerId: '569d55a5-580b-469f-9218-b3dcb53ab48a',
    researchId: ['569d55a5-580b-469f-9218-b3dcb53ab48a', '02b8538a-ff85-40ed-ae38-bd68cdfa5567'],
    redactorId: [''],
    topicId: '6bbf7cbb-79e6-4475-adf9-adb68f60cd1e',
  },
  {
    id: '41b0081f-d6a3-45f8-a09b-884fc0145f17',
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
    topicId: '8c4fbc01-e7ea-4f51-995c-d869f409046d',
  },
  {
    id: '12b00a56-8253-44ac-a53a-25ff73b63f99',
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
    topicId: '34aa259b-2506-4e56-9e1b-c2c520312524',
  },
  {
    id: '41b0081f-d6a3-45f8-a09b-884fc0145f17',
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
    topicId: '8c4fbc01-e7ea-4f51-995c-d869f409046d',
  },
  {
    id: '12b00a56-8253-44ac-a53a-25ff73b63f99',
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
    topicId: '34aa259b-2506-4e56-9e1b-c2c520312524',
  },
]
