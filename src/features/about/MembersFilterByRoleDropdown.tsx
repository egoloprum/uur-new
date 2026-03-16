'use client'

import { useApp } from '@/src/entities'
import { RoleTypes } from '@/src/entities/user'
import { getSlugOfRole } from '@/src/shared'
import { Dropdown, DropdownContent, DropdownItem, DropdownTrigger } from '@/src/shared/components'
import { trackEvent } from '@/src/shared/lib'
import { usePathname } from 'next/navigation'

const Roles: RoleTypes[] = [
  'Coordinator',
  'Researcher',
  'Redactor',
  'Writer',
  'Designer',
  'Developer',
  'Marketer',
]

export const MembersFilterByRoleDropdown = ({}) => {
  const { setSelectedRole, selectedRole } = useApp()

  const pathname = usePathname()

  return (
    <Dropdown setSelectedItem={setSelectedRole}>
      <DropdownTrigger>
        {selectedRole ? getSlugOfRole(selectedRole as RoleTypes) : 'Үүрэг'}
      </DropdownTrigger>
      <DropdownContent className="md:w-64">
        {Roles.map((role, index) => (
          <DropdownItem
            key={role + index}
            value={role}
            className={`${selectedRole === role && 'bg-indigo-300'}`}
            onClick={() => {
              trackEvent({
                type: 'filter_used',
                route: pathname,
                metadata: {
                  title: role,
                  type: 'role',
                },
              })
            }}
          >
            {getSlugOfRole(role)}
          </DropdownItem>
        ))}
        <DropdownItem
          value=""
          className=" border-t"
          onClick={() => {
            trackEvent({
              type: 'filter_used',
              route: pathname,
              metadata: {
                title: 'Бүх гишүүд',
                type: 'role',
              },
            })
          }}
        >
          Бүх гишүүд
        </DropdownItem>
      </DropdownContent>
    </Dropdown>
  )
}
