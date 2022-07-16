import { DataStore } from '@aws-amplify/datastore';
import { Website} from '../models';
import { showWebsites } from './website-query.js';


export const createwebsite = async (title, description, boolean) => {
  await DataStore.save(
    new Website({
		"title": title,
		"description": description,
		"status": boolean,
    "projectData": "String",
    "test": "This is a test.",
	})
);
showWebsites();
}
