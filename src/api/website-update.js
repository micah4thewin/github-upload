import { DataStore } from '@aws-amplify/datastore';
import { Website } from '../models';
import { showWebsites } from './website-query.js';

export const updateWebsite = async (websiteID, titleData, descriptionData, statusData) => {
  console.log(`Update website function has fired.`);
  let id = websiteID;
  let title = titleData;
  let description = descriptionData;
  let status = statusData;
  console.log(`Status: ${id}, Title: ${title}, Description: ${description}, Status: ${status}`);
  let original = await DataStore.query(Website, id);

  await DataStore.save(
  Website.copyOf(original, updated => {
    updated.title = title;
    updated.description = description;
    updated.status = status;
    updated.projectData = original.projectData;
    updated.test = "test";
  }))
  showWebsites();
};

export const updateProjectData = async (websiteID, projectData) => {
  let id = websiteID;
  let data = projectData;
  let original = await DataStore.query(Website, id);

  await DataStore.save(
  Website.copyOf(original, updated => {
    updated.title = original.title;
    updated.description = original.description;
    updated.status = original.status;
    updated.projectData = data;
    updated.test = "test";
  }));
  localStorage.setItem('ccProject', JSON.stringify(data));
  console.log("updateProjectData() has been called.");
};
