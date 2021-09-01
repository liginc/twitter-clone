import { UserController } from "./controller/UserController"
import { TweetController } from "./controller/TweetController"

export const Routes = [{
  method: 'get',
  route: '/users',
  controller: UserController,
  action: 'all'
}, {
  method: 'get',
  route: '/users/:id',
  controller: UserController,
  action: 'one'
}, {
  method: 'post',
  route: '/users',
  controller: UserController,
  action: 'save'
}, {
  method: 'delete',
  route: '/users/:id',
  controller: UserController,
  action: 'remove'
},
{
  method: 'get',
  route: '/tweets',
  controller: TweetController,
  action: 'all'
}, {
  method: 'get',
  route: '/tweets/:id',
  controller: TweetController,
  action: 'one'
}, {
  method: 'post',
  route: '/tweets',
  controller: TweetController,
  action: 'save'
}, {
  method: 'delete',
  route: '/tweets/:id',
  controller: TweetController,
  action: 'remove'
}]