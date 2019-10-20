// eslint-disable-next-line @typescript-eslint/no-var-requires
import * as controller from '../controllers/profile'
import * as validate from '../controllers/profile.validate'
import * as AuthController from '../controllers/auth'
import express from 'express'
const router = express.Router()
require('../../config/passport')
import passport from 'passport'
const requireAuth = passport.authenticate('jwt', {
  session: false
})
import trimRequest from 'trim-request'

/*
 * Profile routes
 */

/*
 * Get profile route
 */
router.get(
  '/',
  requireAuth,
  AuthController.roleAuthorization(['user', 'admin']),
  trimRequest.all,
  controller.getProfile
)

/*
 * Update profile route
 */
router.patch(
  '/',
  requireAuth,
  AuthController.roleAuthorization(['user', 'admin']),
  trimRequest.all,
  validate.updateProfile,
  controller.updateProfile
)

/*
 * Change password route
 */
router.post(
  '/changePassword',
  requireAuth,
  AuthController.roleAuthorization(['user', 'admin']),
  trimRequest.all,
  validate.changePassword,
  controller.changePassword
)

module.exports = router
