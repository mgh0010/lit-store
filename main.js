import {Router} from '@vaadin/router';

const outlet = document.getElementById('app');
const router = new Router(outlet);
router.setRoutes([
  {path: '/', component: 'main-view'},
]);
