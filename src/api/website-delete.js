import { DataStore } from '@aws-amplify/datastore';
import { Website } from '../models';
import { showWebsites } from './website-query.js';



export const deleteItem = async (id) => {
  const modelToDelete = await DataStore.query(Website, id);
  DataStore.delete(modelToDelete);
  showWebsites();
  Swal.fire({
    backdrop: `
      rgba(0, 0, 0, 0.3)
    `,
    position: 'top-end',
    icon: 'success',
    title: "This website has been deleted.",
    showConfirmButton: false,
    timer: 2000
  });
};
