import Router from 'koa-router';
import todos from '../controllers/todos.controller';
import strong from '../middlewares/strongparams.middleware';

const router = Router({
  prefix: '/api/v1/todos',
});

router.get('/', todos.all);

router.get('/:id', todos.show);

router.post('/', strong.params('Todo'), todos.create);

router.put('/:id', strong.params('Todo'), todos.update);

router.del('/:id', todos.del);

// for require auto in index.js
module.exports = router;
