import type { Role } from 'src/types/authTypes';

const roleAdmin: Role = { id: 1, title: 'Administrator', description:"Admins" };
const roleModerator: Role = { id: 2, title: 'Moderator' };
const roleAuthor: Role = { id: 3, title: 'Author' };
const roleUser: Role = { id: 4, title: 'User' };
const roleGuest: Role = { id: 5, title: 'Guest' };
const roleBanned: Role = { id: 6, title: 'Banned' };

/**
 * A collection of key roles, mapping role names to their respective objects.
 */
export const keyRoles = {
  Admin: roleAdmin,
  Moderator: roleModerator,
  Author: roleAuthor,
  User: roleUser,
  Guest: roleGuest,
  Banned: roleBanned,
};

/**
 * An array containing all role objects for easier iteration or processing.
 */
export const rolesData: Role[] = [
  keyRoles.Admin,
  keyRoles.Moderator,
  keyRoles.Author,
  keyRoles.User,
  keyRoles.Guest,
  keyRoles.Banned,
];
