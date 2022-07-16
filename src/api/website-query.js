import {
  DataStore,
  Predicates,
  SortDirection
} from '@aws-amplify/datastore';
import {
  Website
} from '../models';
import {
  deleteItem
} from './website-delete.js';
import {
  updateWebsite
} from './website-update.js';
import { transferProjectToEdit } from '../editor/projectdata.js';
export const showWebsites = async () => {
  const WebsiteList = document.getElementById('websiteRG');
  WebsiteList.innerHTML = "";
  const models = await DataStore.query(Website);
  console.log(models);
  models.forEach(Website => WebsiteList.innerHTML +=
    `
  <div class="card m-3" id="webCard" data-status="${Website.status}" style="width: 20rem;">
<p class="card-header"><strong>Published:</strong><br> ${Website.status}</p>
    <div class="card-body bg-light">
    <div id="websiteDetails">
      <h1 class="fw-bolder mb-3 text-start mt-5 fs-5">${Website.title}</h1>
      <div class="mt-0" id="description">
      <p class="text-muted" id="p2" mb-5 pb-5 >${Website.description}</p>
      </div>
      </div>
      <div class="d-flex mt-5" id="bottomFlex">
      <button class="btn .me-auto mx-2 btn btn-outline-dark" id="sendWebsiteToModal" tabindex="-1" data-id="${Website.id}" data-title="${Website.title}" data-description="${Website.description}" data-status="${Website.status}" data-bs-toggle="modal" data-bs-target="#updateWebsiteModal">UPDATE INFO</button>
  <button class="btn btn-outline-success" id="sendWebsiteToEditor" tabindex="-1" data-id="${Website.id}" data-index="${Website.index}" >EDIT</button>
      <br>
      <div class="ms-auto my-auto">
      <i class="bi bi-trash3" data-id="${Website.id}" id="websiteDeleteIcon" data-acquired="${Website.status}";></i>
      </div>
      </div>
    </div>
  </div>
`);
  const deleteItemButton = document.querySelectorAll("#websiteDeleteIcon");
  const sendWebsiteToEditor = document.querySelectorAll('#sendWebsiteToEditor');
  // Device listener to delete website card
  for (let i = 0; i < deleteItemButton.length; i++) {
    deleteItemButton[i].addEventListener("click", function() {
      deleteItem(this.dataset.id);
    });
  };
  // Listener to send website to editor on each cards
  for (let i = 0; i < sendWebsiteToEditor.length; i++) {
    sendWebsiteToEditor[i].addEventListener("click", function() {
    transferProjectToEdit(this.dataset.id);
    });
  };
  /* Code website update device listeners */
  //Dom
  let updateNameInput = document.getElementById('websiteNameUpdate');
  let updateDesciptionInput = document.getElementById('updateWebsiteDescriptionUpdate');
  // Create an array of "update buttons" for all website groups
  const sendToModalButtonArray = document.getElementsByClassName("btn .me-auto");
  for (let i = 0; i < sendToModalButtonArray.length; i++) {
    sendToModalButtonArray[i].addEventListener("click", function() {
     let updateModalButton = document.getElementById('updateWebsiteButton');
      updateModalButton.dataset.id = `${this.dataset.id}`;
      updateNameInput.value = `${this.dataset.title}`;
      updateDesciptionInput.value = `${this.dataset.description}`;
    });
  }
};
