import { clientSanity } from './sanity.js';

clientSanity.fetch('*[_type == "post"]').then((posts) => {
  console.log(posts);
  // Manipulate DOM or display the posts
}).catch(err => {
  console.error(err);
});
