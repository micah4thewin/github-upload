import { updateWebsite } from '../api/website-update.js';
import grapesjs from 'grapesjs';
import '../editor.js';
// Amplify
import Amplify from "aws-amplify";
import { Auth } from 'aws-amplify';
import {
  DataStore,
  Predicates,
  SortDirection
} from '@aws-amplify/datastore';
import {
  Website
} from '../models';
import aws_exports from "../aws-exports.js";
Amplify.configure(aws_exports);
// Sweet Alert2
import Swal from 'sweetalert2'


export const transferProjectToEdit = async (websiteID) => {
  const id = websiteID; // get ID
    if (!id) {
      Swal.fire({
        backdrop: `
          rgba(0, 0, 0, 0.3)
        `,
        position: 'top-end',
        icon: 'error',
        title: "This website could not be found.",
        showConfirmButton: false,
        timer: 2000
      });
      window.location = '/dashboard.html';
    };
  const website = await DataStore.query(Website, id); // get website from ID
  const projectData = website.projectData; // get the project from the website.
    if (!projectData) {
      Swal.fire({
        backdrop: `
          rgba(0, 0, 0, 0.3)
        `,
        position: 'top-end',
        icon: 'error',
        title: "No project data was found.",
        showConfirmButton: false,
        timer: 2000
      });
    }

  localStorage.setItem('ccProjectID', id);
  localStorage.setItem('ccProject', projectData);
  window.location = '/editor.html';
};
