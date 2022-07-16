// Get the path
const urlPath = window.location.pathname;
import '../node_modules/grapesjs/dist/css/grapes.min.css';
import '/src/styles/editor.css';
import '/src/styles/main.scss';
import grapesjs from 'grapesjs';
import typed from 'grapesjs-typed';
import pluginNavbar from 'grapesjs-navbar';
import pluginCountdown from 'grapesjs-component-countdown';
import pluginForms from 'grapesjs-plugin-forms';
import pluginExport from 'grapesjs-plugin-export';
import pluginFilestack from 'grapesjs-plugin-filestack';
import commands from './commands';
import blocks from './blocks';
import components from './components';
import codeEditor from 'grapesjs-component-code-editor';
import 'grapesjs-component-code-editor/dist/grapesjs-component-code-editor.min.css';
import panels from './panels';
import styles from './styles/index.js';
import grapesjsTouch from 'grapesjs-touch';
import pluginTooltip from 'grapesjs-tooltip';
import grapesjstabs from 'grapesjs-tabs';
import grapesjsCustomCode from 'grapesjs-custom-code';
import tUIImageEditor from 'grapesjs-tui-image-editor';
import scriptEditor from 'grapesjs-script-editor';
import 'grapesjs/dist/css/grapes.min.css';
import styleFilter from 'grapesjs-style-filter';
// import { loadLocalProject } from './editor/projectdata.js';
// api
import { updateProjectData } from './api/website-update.js';
import Swal from 'sweetalert2'
// Bootstrap 5
import {
  Tooltip,
  Toast,
  Popover
} from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// Bootstrap Icons
import 'bootstrap-icons/font/bootstrap-icons.css';

export default grapesjs.plugins.add('cc-preset-webpage', (editor, opts = {}) => {
  let config = opts;
  let defaults = {
    // Which blocks to add
    blocks: ['link-block', 'quote', 'text-basic'],
    // Modal import title
    modalImportTitle: 'Import',
    // Modal import button text
    modalImportButton: 'Import',
    // Import description inside import modal
    modalImportLabel: '',
    // Default content to setup on import model open.
    // Could also be a function with a dynamic content return (must be a string)
    // eg. modalImportContent: editor => editor.getHtml(),
    modalImportContent: '',
    // Code viewer (eg. CodeMirror) options
    importViewerOptions: {},
    // Confirm text before cleaning the canvas
    textCleanCanvas: 'Are you sure to clean the canvas?',
    // Show the Style Manager on component change
    showStylesOnChange: 1,
    customStyleManager: [],
    // `grapesjs-navbar` plugin options
    // By setting this option to `false` will avoid loading the plugin
    navbarOpts: {},
    // `grapesjs-component-countdown` plugin options
    // By setting this option to `false` will avoid loading the plugin
    countdownOpts: {},
    // `grapesjs-plugin-forms` plugin options
    // By setting this option to `false` will avoid loading the plugin
    formsOpts: {},
    // `grapesjs-plugin-export` plugin options
    // By setting this option to `false` will avoid loading the plugin
    exportOpts: {},
    // `grapesjs-aviary` plugin options, disabled by default
    // Aviary library should be included manually
    // By setting this option to `false` will avoid loading the plugin
    aviaryOpts: {},
    // `grapesjs-plugin-filestack` plugin options, disabled by default
    // Filestack library should be included manually
    // By setting this option to `false` will avoid loading the plugin
    filestackOpts: 0,
  };
  // Load defaults
  for (let name in defaults) {
    if (!(name in config))
      config[name] = defaults[name];
  }
  const {
    navbarOpts,
    countdownOpts,
    formsOpts,
    exportOpts,
    aviaryOpts,
    formOpts,
    filestackOpts
  } = config;
  // Load plugins
  navbarOpts && pluginNavbar(editor, navbarOpts);
  countdownOpts && pluginCountdown(editor, countdownOpts);
  formsOpts && pluginForms(editor, formsOpts);
  exportOpts && pluginExport(editor, exportOpts);
  // aviaryOpts && pluginAviary(editor, aviaryOpts);
  filestackOpts && pluginFilestack(editor, filestackOpts);
  // Load components
  components(editor, config);
  // Load blocks
  blocks(editor, config);
  // Load commands
  commands(editor, config);
  // Load panels
  panels(editor, config);
  // Load styles
  styles(editor, config);
});
var editor = grapesjs.init({
  height: '100%',
  pageManager: true, // This should be set to true
  showOffsets: 1,
  noticeOnUnload: 0,
  storageManager: {
    // Default storage type. Available: local | remote
    type: 'local',
    // Enable/Disable autosaving
    autosave: true,
    // Enable/Disable autoload of data on editor init
    autoload: true,
  },
  selectorManager: {},
  container: '#cc',
  fromElement: true,
  plugins: [grapesjsTouch, tUIImageEditor, styleFilter, 'cc-preset-webpage', codeEditor, scriptEditor, typed, pluginTooltip, grapesjstabs, grapesjsCustomCode],
  pluginsOpts: {
    codeEditor: {},
    scriptEditor: {},
    'cc-preset-webpage': {},
    pluginTooltip: {},
    typed: {},
    grapesjstabs: {},
    //  grapesjsCustomCode: {},
    [tUIImageEditor]: {
      config: {
        includeUI: {
          initMenu: 'filter'
        }
      },
      icons: {
        'menu.normalIcon.path': `../node_modules/tui-image-editor/dist/svg/icon-d.svg`,
        'menu.activeIcon.path': `../node_modules/tui-image-editor/dist/svg/icon-b.svg`,
        'menu.disabledIcon.path': `../node_modules/tui-image-editor/dist/svg/icon-a.svg`,
        'menu.hoverIcon.path': `../node_modules/tui-image-editor/dist/svg/icon-c.svg`,
        'submenu.normalIcon.path': `../node_modules/tui-image-editor/dist/svg/icon-d.svg`,
        'submenu.activeIcon.path': `../node_modules/tui-image-editor/dist/svg/icon-c.svg`,
      },
      script: [
        'https://uicdn.toast.com/tui.code-snippet/v1.5.2/tui-code-snippet.min.js',
        'https://uicdn.toast.com/tui-color-picker/v2.2.7/tui-color-picker.min.js',
        'https://uicdn.toast.com/tui-image-editor/v3.15.2/tui-image-editor.min.js'
      ],
      style: [
        'https://uicdn.toast.com/tui-color-picker/v2.2.7/tui-color-picker.min.css',
        'https://uicdn.toast.com/tui-image-editor/v3.15.2/tui-image-editor.min.css',
      ],
    },
    styleFilter: {},
  },
});

const pn = editor.Panels;
const panelViews = pn.addPanel({
  id: 'views'
});
panelViews.get('buttons').add([{
  attributes: {
    title: 'Open Code'
  },
  className: 'fa fa-file-code-o',
  command: 'open-code',
  togglable: false, //do not close when button is clicked again
  id: 'open-code'
}]);
editor.addComponents(``);

// Save button
if (urlPath === '/editor.html') {
  const saveButton = document.getElementById('saveData');
  saveButton.addEventListener("click", function() {
    const data = JSON.stringify(editor.getProjectData());
    const id = localStorage.getItem('ccProjectID');
    updateProjectData(id, data);


    Swal.fire({
      backdrop: `
        rgba(0, 0, 0, 0.3)
      `,
      position: 'top-end',
      icon: 'success',
      title: "The website has been saved.",
      showConfirmButton: false,
      timer: 2000
    });



  });
  console.log(JSON.parse(localStorage.getItem('ccProject')));
  editor.loadProjectData(localStorage.getItem('ccProject'));
};
