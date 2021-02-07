import { User } from './models/User';

const user = new User({ id: 1 });

user.events.on('change', () => {
  console.log('It changed');
});

user.events.trigger('change');

console.log(user.get('name'));
