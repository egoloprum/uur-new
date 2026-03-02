import Link from 'next/link'

const members = [
  {
    name: 'Цолмон',
    roles: ['Координатор', 'Бичээч', 'Дизайнер', 'Веб хөгжүүлэгч'],
    duration: '1-3/2026',
  },
  {
    name: 'Ундаръяа',
    roles: ['Координатор', 'Редактор', 'Бичээч', 'Маркетинг хариуцагч'],
    duration: '1-3/2026',
  },
  {
    name: 'Минжинсор',
    roles: ['Судлаач', 'Бичээч'],
    duration: '1-3/2026',
  },
  {
    name: 'Мөнх-Оргил',
    roles: ['Судлаач', 'Бичээч'],
    duration: '1-3/2026',
  },
  {
    name: 'Бат-Ирээдүй',
    roles: ['Редактор', 'Бичээч'],
    duration: '1-3/2026',
  },
  {
    name: 'Aнхмандах',
    roles: ['Бичээч'],
    duration: '1-3/2026',
  },
  {
    name: 'Aмар',
    roles: ['Бичээч'],
    duration: '1-3/2026',
  },
  {
    name: 'Ган-Эрдэнэ',
    roles: ['Веб хөгжүүлэгч', 'Маркетинг хариуцагч'],
    duration: '1-3/2026',
  },
  {
    name: 'Ганбаяр',
    roles: ['Дизайнер', 'Веб хөгжүүлэгч'],
    duration: '1-3/2026',
  },
]

export const LatestTeamSection = ({}) => {
  return (
    <div className="bg-[#fbfaf2] min-h-screen p-4 md:p-8 lg:p-12 xl:p-16 space-y-12">
      <div className="flex justify-between">
        <h2 className="text-black font-bold text-4xl">Энэ улиралын багийн гишүүд</h2>
        <Link
          href="/about"
          className="p-4 py-2 border rounded-full w-fit text-black hover:bg-orange-400 font-bold tracking-widest"
        >
          Бүх гишүүд
        </Link>
      </div>
      <ul>
        {members.map(member => (
          <li className="py-6 border-t border-gray-400 grid grid-cols-12" key={member.name}>
            <div className="space-y-2 col-span-6">
              <p className="text-black font-bold tracking-widest text-3xl">{member.name}</p>
              <ul className="flex gap-2">
                {member.roles.map(role => (
                  <li
                    className="text-black uppercase border rounded-full px-1"
                    key={member.name + role}
                  >
                    {role}
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-black tracking-widest col-start-10 text-xl self-center">
              {member.duration}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
