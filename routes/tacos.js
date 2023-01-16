import { Router } from 'express'
import * as tacosCtrl from '../controllers/tacos.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', tacosCtrl.index)
router.get('/:id', tacosCtrl.show)
router.get('/:id/edit', isLoggedIn, tacosCtrl.edit)
router.get('/:tacoId/comments/:commentId/edit', isLoggedIn, tacosCtrl.editComment)
router.post('/', isLoggedIn, tacosCtrl.create)
router.post('/:id/comments', isLoggedIn, tacosCtrl.addComment)
router.patch('/:id/flip-tasty', isLoggedIn, tacosCtrl.flipTasty)
router.put('/:id', isLoggedIn, tacosCtrl.update)
router.put('/:tacoId/comments/:commentId', isLoggedIn, tacosCtrl.updateComment)
router.delete('/:id', isLoggedIn, tacosCtrl.delete)
router.delete('/:tacoId/comments/:commentId', isLoggedIn, tacosCtrl.deleteComment)

export {
  router
}