import { User } from './models/User';

const user = new User({ id: 1 });

user.events.on('change', () => {
  console.log('It changed');
});

user.events.trigger('change');

// getting a reference to the on method on the Eventing class
user.on('change', () => {
  console.log('user changed');
});
