'use strict'

module.exports = function(SystemUser) {
  const Role = SystemUser.app.models.SystemRole
  const RoleMapping = SystemUser.app.models.SystemRoleMapping

  const findUserRoleMapping = (userId, roleId) =>
    RoleMapping.findOne({
      where: {
        roleId,
        principalId: userId,
        principalType: RoleMapping.USER,
      },
    })

  const upsertUserRoleMapping = (id, userId, roleId) =>
    RoleMapping.upsert({
      id: id || null,
      roleId: roleId,
      principalId: userId,
      principalType: RoleMapping.USER,
    })

  const removeUserRoleMapping = (userId, roleId) =>
    RoleMapping.deleteAll({
      roleId: roleId,
      principalId: userId,
      principalType: RoleMapping.USER,
    })

  /**
   *
   * Method that retrieves all the roles in the system
   * @returns {boolean}
   */
  const getSystemRoleNames = () => Role.find().then(roles => roles.map(role => role.name))

  /**
   * Find a role with a given name
   * @param roleName the name of the role to search
   * @returns {object} the role or a rejected promise if not found
   */
  const findRoleByName = roleName =>
    Role.findOne({ where: { name: roleName } }).then(
      role => (role ? role : Promise.reject(new Error(`Unable to find role with name ${roleName}`)))
    )

  /**
   * Verifies that user has a certain role
   * @param {String} userId The ID of the user
   * @param {String} roleId The ID of the Role
   * @returns {object} the id of the roleMapping or false if the role is not assigned
   */
  const hasRole = (userId, roleId) =>
    findUserRoleMapping(userId, roleId)
      .then(roleMapping => (roleMapping ? roleMapping.id : false))
      .catch(err => Promise.reject(`Error getting role ${roleId} assignment from user ${userId}. ${err.message}`))

  /**
   * Add a role to a user
   * @param {String} userId The ID of the user
   * @param {String} roleId The ID of the Role
   * @returns {boolean}
   */
  const addUserRole = (userId, roleId) =>
    hasRole(userId, roleId)
      .then(roleMappingId => upsertUserRoleMapping(roleMappingId, userId, roleId))
      .catch(err => Promise.reject(`Error adding role ${roleId} to user ${userId}. ${err.message}`))

  /**
   * Remove a role from a user
   * @param {String} userId The ID of the user
   * @param {String} roleId The ID of the Role
   * @returns {boolean}
   */
  const removeUserRole = (userId, roleId) =>
    hasRole(userId, roleId)
      .then(() => removeUserRoleMapping(userId, roleId))
      .catch(err => Promise.reject(`Error removing role ${roleId} from user ${userId}. ${err.message}`))

  /**
   * Add a role to the current user
   * @param {String} roleName The name of the Role
   * @returns {Boolean} True if successful
   */
  SystemUser.prototype.addRole = function addRole(roleName) {
    return findRoleByName(roleName).then(role => addUserRole(this.id, role.id))
  }

  /**
   * Remove a role from the current user
   * @param {String} roleName The name of the Role
   * @returns {Boolean} True if successful
   */
  SystemUser.prototype.removeRole = function removeRole(roleName) {
    return findRoleByName(roleName).then(role => removeUserRole(this.id, role.id))
  }

  /**
   * Get the names of the assigned roles for the current user
   * @returns {string[]} array of role names
   */
  SystemUser.prototype.getUserRoleNames = function getUserRoleNames() {
    return this.roles.find().map(userRole => userRole.name)
  }

  /**
   * Create a map of assigned and unassigned roles
   * @param {string[]} systemRoles array of System role names
   * @param {string[]} userRoles array of User assigned roles names
   */
  const getRoleAssignment = (systemRoles, userRoles) => ({
    assigned: systemRoles.filter(name => userRoles.includes(name)),
    unassigned: systemRoles.filter(name => !userRoles.includes(name)),
  })

  /**
   * Get the roles for this SystemUser.
   * @returns {Object} A map of all roles of this user
   */
  SystemUser.prototype.info = function info() {
    return Promise.all([getSystemRoleNames(), this.getUserRoleNames()])
      .then(([systemRoles, userRoles]) => getRoleAssignment(systemRoles, userRoles))
      .then(roles => ({ user: this, roles }))
  }
}
