export interface User {
  id: string
  name: string
  slug: string
  description: string
  role: Role[]

  seasonId: string[]
  contributerOfPostId: string[]
}

export type RoleTypes = 'Coordinator' | 'Researcher' | 'Redactor' | 'Writer' | 'Designer' | 'Developer' | 'Marketer'

export interface Role {
  type: RoleTypes
  seasonId: string[]
}

export const defaultUserData: User[] = [
  {
    id: 'a7c1aa0b-2257-4025-b92e-c99fc72afb99',
    name: 'Цолмон',
    slug: 'Tsolmon',
    description: '',
    role: [
      {
        type: 'Coordinator',
        seasonId: ['56a6a473-4733-4204-8b29-1633f0084d97', '405e4a2d-e198-4fa8-942d-3727d36861e2'],
      },
      {
        type: 'Writer',
        seasonId: ['56a6a473-4733-4204-8b29-1633f0084d97', '405e4a2d-e198-4fa8-942d-3727d36861e2'],
      },
      {
        type: 'Designer',
        seasonId: ['56a6a473-4733-4204-8b29-1633f0084d97', '405e4a2d-e198-4fa8-942d-3727d36861e2'],
      },
      {
        type: 'Developer',
        seasonId: ['56a6a473-4733-4204-8b29-1633f0084d97', '405e4a2d-e198-4fa8-942d-3727d36861e2'],
      },
    ],

    seasonId: ['405e4a2d-e198-4fa8-942d-3727d36861e2'],
    contributerOfPostId: ['12b00a56-8253-44ac-a53a-25ff73b63f99'],
  },
  {
    id: '537df664-4972-4c8d-b0e5-b44b50033d7a',
    name: 'Ундаръяа',
    slug: 'Undariya',
    description: '',
    role: [
      {
        type: 'Coordinator',
        seasonId: ['56a6a473-4733-4204-8b29-1633f0084d97', '405e4a2d-e198-4fa8-942d-3727d36861e2'],
      },
      {
        type: 'Redactor',
        seasonId: ['56a6a473-4733-4204-8b29-1633f0084d97', '405e4a2d-e198-4fa8-942d-3727d36861e2'],
      },
      {
        type: 'Writer',
        seasonId: ['56a6a473-4733-4204-8b29-1633f0084d97', '405e4a2d-e198-4fa8-942d-3727d36861e2'],
      },
      {
        type: 'Marketer',
        seasonId: ['56a6a473-4733-4204-8b29-1633f0084d97', '405e4a2d-e198-4fa8-942d-3727d36861e2'],
      },
    ],

    seasonId: ['405e4a2d-e198-4fa8-942d-3727d36861e2'],
    contributerOfPostId: ['41b0081f-d6a3-45f8-a09b-884fc0145f17'],
  },
  {
    id: 'f8c7f364-7074-436f-8632-fe9e747c4826',
    name: 'Минжинсор',
    slug: 'Minjinsor',
    description: '',
    role: [
      {
        type: 'Researcher',
        seasonId: ['405e4a2d-e198-4fa8-942d-3727d36861e2'],
      },
      {
        type: 'Writer',
        seasonId: ['405e4a2d-e198-4fa8-942d-3727d36861e2'],
      },
    ],

    seasonId: ['405e4a2d-e198-4fa8-942d-3727d36861e2'],
    contributerOfPostId: [''],
  },
  {
    id: '02b8538a-ff85-40ed-ae38-bd68cdfa5567',
    name: 'Мөнх-Оргил',
    slug: 'Munkh-Orgil',
    description: '',
    role: [
      {
        type: 'Researcher',
        seasonId: ['56a6a473-4733-4204-8b29-1633f0084d97', '405e4a2d-e198-4fa8-942d-3727d36861e2'],
      },
      {
        type: 'Writer',
        seasonId: ['56a6a473-4733-4204-8b29-1633f0084d97', '405e4a2d-e198-4fa8-942d-3727d36861e2'],
      },
    ],

    seasonId: ['56a6a473-4733-4204-8b29-1633f0084d97', '405e4a2d-e198-4fa8-942d-3727d36861e2'],
    contributerOfPostId: ['5c6bfd0c-60c4-4f36-af37-a9a5e38fa4b8'],
  },
  {
    id: '569d55a5-580b-469f-9218-b3dcb53ab48a',
    name: 'Бат-Ирээдүй',
    slug: 'Bat-Ireedui',
    description: '',
    role: [
      {
        type: 'Redactor',
        seasonId: ['56a6a473-4733-4204-8b29-1633f0084d97', '405e4a2d-e198-4fa8-942d-3727d36861e2'],
      },
      {
        type: 'Writer',
        seasonId: ['56a6a473-4733-4204-8b29-1633f0084d97', '405e4a2d-e198-4fa8-942d-3727d36861e2'],
      },
    ],

    seasonId: ['405e4a2d-e198-4fa8-942d-3727d36861e2', '405e4a2d-e198-4fa8-942d-3727d36861e2'],
    contributerOfPostId: ['5c6bfd0c-60c4-4f36-af37-a9a5e38fa4b8'],
  },
  {
    id: '9cbd7817-ad9b-4a8b-81ca-e8a657a21f36',
    name: 'Aнхмандах',
    slug: 'Ankhmandakh',
    description: '',
    role: [
      {
        type: 'Writer',
        seasonId: ['405e4a2d-e198-4fa8-942d-3727d36861e2'],
      },
    ],

    seasonId: ['405e4a2d-e198-4fa8-942d-3727d36861e2'],
    contributerOfPostId: [''],
  },
  {
    id: '012085c6-b343-489b-8dd9-506c1166baab',
    name: 'Aмар',
    slug: 'Amar',
    description: '',
    role: [
      {
        type: 'Writer',
        seasonId: ['405e4a2d-e198-4fa8-942d-3727d36861e2'],
      },
    ],

    seasonId: ['405e4a2d-e198-4fa8-942d-3727d36861e2'],
    contributerOfPostId: [''],
  },
  {
    id: 'f6a5855a-5386-42d2-a63e-592efd217228',
    name: 'Ганбаяр',
    slug: 'Ganbayar',
    description: '',
    role: [
      {
        type: 'Designer',
        seasonId: ['405e4a2d-e198-4fa8-942d-3727d36861e2'],
      },
      {
        type: 'Developer',
        seasonId: ['405e4a2d-e198-4fa8-942d-3727d36861e2'],
      },
    ],

    seasonId: ['405e4a2d-e198-4fa8-942d-3727d36861e2'],
    contributerOfPostId: [''],
  },
  {
    id: '7c3fdf6d-ebd5-4acd-afb1-fc70cdd383a6',
    name: 'Ган-Эрдэнэ',
    slug: 'Gan-Erdene',
    description: '',
    role: [
      {
        type: 'Developer',
        seasonId: ['405e4a2d-e198-4fa8-942d-3727d36861e2'],
      },
      {
        type: 'Marketer',
        seasonId: ['405e4a2d-e198-4fa8-942d-3727d36861e2'],
      },
    ],

    seasonId: ['405e4a2d-e198-4fa8-942d-3727d36861e2'],
    contributerOfPostId: [''],
  },
]
