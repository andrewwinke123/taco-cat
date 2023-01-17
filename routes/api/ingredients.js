import { Router } from 'express'
import * as ingredientApiCtrl from '../../controllers/api/ingredients.js'

const router = Router()

router.get('/', ingredientApiCtrl.index)
router.post('/ingredients', ingredientApiCtrl.create)
router.delete('/:id', ingredientApiCtrl.delete)

export {
  router
}