'use client'

import { useApp } from '@/src/entities'
import { RoleTypes } from '@/src/entities/user'
import { getSlugOfRole } from '@/src/shared'
import { Dropdown, DropdownContent, DropdownItem, DropdownTrigger } from '@/src/shared/components'

const Roles: RoleTypes[] = [
  'Coordinator',
  'Researcher',
  'Redactor',
  'Writer',
  'Designer',
  'Developer',
  'Marketer',
]

export const FilterByRoleDropdown = ({}) => {
  const { setSelectedRole, selectedRole } = useApp()

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
          >
            {getSlugOfRole(role)}
          </DropdownItem>
        ))}
        <DropdownItem value="" className=" border-t">
          Бүх гишүүд
        </DropdownItem>
      </DropdownContent>
    </Dropdown>
  )
}
