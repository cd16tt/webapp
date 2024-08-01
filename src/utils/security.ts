import type { ValueOf } from '#types/utils';

export type UserRole = 'committee_member' | 'licensee' | 'club_admin' | 'referee';

const rolesPrefixesMap: Record<UserRole, string> = {
	committee_member: 'com:',
	licensee: 'lic:',
	club_admin: 'clu:',
	referee: 'ref:',
} as const;

export const permissions = {
	committee: {
		'users.index': 'com:users.index',
		'users.show': 'com:users.show',
		'users.update': 'com:users.update',
		'users.delete': 'com:users.delete',
		'invitation.create': 'com:invitation.create',
		'invitation.show': 'com:invitation.show',
	},
	club: {},
	player: {},
	referee: {},
} as const;

// eslint-disable-next-line unicorn/no-array-reduce
export const flatPermissions = Object.entries(permissions).reduce<Array<Permission>>(
	(acc, [, value]) => {
		for (const [, v] of Object.entries(value)) {
			acc.push(v);
		}

		return acc;
	},
	['*'],
);

export function can(
	permissionsToCheck: Array<Permission>,
	userPermissions: Array<Permission> | undefined,
	exact = true,
): boolean {
	if (!userPermissions) {
		return false;
	}

	if (userPermissions.includes('*')) {
		return true;
	}

	if (exact) {
		return permissionsToCheck.every((permission) => userPermissions.includes(permission));
	}

	return permissionsToCheck.some((permission) => userPermissions.includes(permission));
}

export function hasRole(role: UserRole, userPermissions?: Array<Permission>): boolean {
	if (!userPermissions) return false;

	return userPermissions.some((permission) => permission.startsWith(rolesPrefixesMap[role]));
}

export type CommitteePermission = ValueOf<(typeof permissions)['committee']>;
export type ClubPermission = ValueOf<(typeof permissions)['club']>;
export type PlayerPermission = ValueOf<(typeof permissions)['player']>;
export type RefereePermission = ValueOf<(typeof permissions)['referee']>;
export type Permission = CommitteePermission | '*';
