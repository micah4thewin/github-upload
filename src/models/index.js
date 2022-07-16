// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Website, Profile } = initSchema(schema);

export {
  Website,
  Profile
};