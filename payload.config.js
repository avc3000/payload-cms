import { buildConfig } from 'payload/config';
import Users from './collections/Users';
import Products from './collections/Products';
import Media from './collections/Media';

export default buildConfig({
  serverURL: 'http://localhost:3000',
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,
    Products,
    Media
  ],
});
