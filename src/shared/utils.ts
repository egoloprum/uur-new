import { RoleTypes } from '../entities/member'

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

export const detectDevice = (
	userAgent: string | null
): 'mobile' | 'desktop' | 'bot' => {
	if (!userAgent) return 'desktop'
	const ua = userAgent.toLowerCase()
	if (/bot|crawler|spider/i.test(ua)) return 'bot'
	if (/mobile|android|iphone|ipad|ipod|blackberry|windows phone/i.test(ua))
		return 'mobile'
	return 'desktop'
}
