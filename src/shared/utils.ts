import { RoleTypes } from '../entities/user'

const roleSlugMap: Record<RoleTypes, string> = {
  Coordinator: 'Координатор',
  Designer: 'Дизайнер',
  Developer: 'Веб хөгжүүлэгч',
  Marketer: 'Маркетинг хариуцагч',
  Redactor: 'Редактор',
  Researcher: 'Судлаач',
  Writer: 'Бичээч'
}

export const getSlugOfRole = (roleType: RoleTypes): string => {
  return roleSlugMap[roleType]
}
