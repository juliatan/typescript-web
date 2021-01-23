import { User } from './models/User';

// const user = new User({ id: 1 });
// user.fetch();
// setTimeout(() => {
//   console.log(user), 4000;
// });

// user.set({ name: 'New Name', age: 99 });

const user = new User({ name: 'JT', age: 10 });
user.save();
