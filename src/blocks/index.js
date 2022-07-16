export default (editor, config) => {
  const bm = editor.BlockManager;
  const toAdd = name => config.blocks.indexOf(name) >= 0;// Webpage Structure
  bm.add('container-block', {
    id: 'section',
    label: 'Frame',
    media: `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="50" height="50"
            viewBox="0 0 172 172"
            style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#000000"><path d="M14.33333,28.66667v121.83333h143.33333v-7.16667v-114.66667zM28.66667,43h114.66667v93.16667h-114.66667zM43,57.33333v64.5h86v-64.5z"></path></g></g></svg>`,
    category: 'Structure',
    content: {
      type: 'section',
      attributes: {},
      components: [],
    },
    activate: true,
  });
  bm.add('content-block', {
    id: 'content',
    label: 'Cell',
    draggable: 'section, section *', // Can be dropped only inside `form` elements
    droppable: true, // Can't drop other elements inside
    category: 'Structure',
    content: {
      type: 'group',
    },
    media: `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="50" height="50"
            viewBox="0 0 172 172"
            style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#000000"><path d="M43,21.5c-7.90483,0 -14.33333,6.4285 -14.33333,14.33333h21.5v-14.33333zM71.66667,21.5v14.33333h21.5v-14.33333zM114.66667,21.5v14.33333h21.5c0,-7.88333 -6.45,-14.33333 -14.33333,-14.33333zM28.66667,50.16667v21.5h14.33333v-21.5zM121.83333,50.16667v14.33333h-57.33333c-7.88333,0 -14.33333,6.45 -14.33333,14.33333v57.33333c0,7.88333 6.45,14.33333 14.33333,14.33333h71.66667c7.88333,0 14.33333,-6.45 14.33333,-14.33333v-57.33333c0,-7.88333 -6.45,-14.33333 -14.33333,-14.33333v-14.33333zM28.66667,86v7.16667c0,7.88333 6.45,14.33333 14.33333,14.33333v-21.5zM93.16667,86l28.66667,28.66667l-12.17774,1.42774l4.36719,9.46224l-6.08886,3.44336l-5.23503,-10.31608l-9.53223,8.5944z"></path></g></g></svg>`,
    activate: true,
  });
// Text Element
  bm.add('h1-block', {
    id: 'h1',
    label: 'Heading 1',
    category: 'Text Elements',
    content: {
      type: 'text',
      draggable: 'main, main *',
      resizable: true,
      unstylable: ['flex-direction', 'flex-wrap', 'justify-content', 'align-items', 'align-content', 'float', 'position','transition', 'transform', 'box-shadow', 'display', 'float', 'position', 'top', 'right', 'bottom', 'left', 'flex', 'order', 'flex-basis', 'flex-grow', 'flex-shrink', 'align-self', 'background'],
      style: {
        'font-size': 'calc(30px + .5vw)',
        'font-family': '"Kumbh Sans", sans-serif',
        'font-weight': 'bold',
        'text-justify': 'center',
        'margin-bottom': '0px',
        'text-align': 'center',
        'margin-top': '0px',
        'margin-bottom': '0px',
        'padding-top': '0px',
        'padding-bottom': '0px',
        'padding-right': '25px',
        'padding-left': '25px',
        color: 'black',
        width: '100%',
      },
      attributes: {},
      content: 'THIS IS A HEADING 1!',
    },

    media: `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="50" height="50"
            viewBox="0 0 172 172"
            style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#000000"><path d="M14.33333,28.66667v114.66667h21.5v-50.16667h43v50.16667h21.5v-114.66667h-21.5v43h-43v-43zM155.20313,28.66667l-40.53646,15.15918v18.8125l21.5,-6.84473v87.53971h21.5v-114.66667z"></path></g></g></svg>`,
    activate: true,
  });
// h2 Element
  bm.add('h2-block', {
    id: 'h2',
    label: 'Heeading 2',
    category: 'Text Elements',
    content: {
      type: 'text',
      draggable: 'main, main *',
      resizable: true,
      unstylable: ['flex-direction', 'flex-wrap', 'justify-content', 'align-items', 'align-content', 'float', 'position', 'transition', 'transform', 'box-shadow', 'display', 'float', 'position', 'top', 'right', 'bottom', 'left', 'flex', 'order', 'flex-basis', 'flex-grow', 'flex-shrink', 'align-self', 'background'],
      style: {
        'font-size': 'calc(18px + .5vw)',
        'font-family': '"Kumbh Sans", sans-serif',
        'font-weight': 'bold',
        'text-justify': 'center',
        'margin-bottom': '0px',
        'text-align': 'center',
        'margin-top': '0px',
        'margin-bottom': '0px',
        'padding-top': '0px',
        'padding-bottom': '0px',
        'padding-right': '25px',
        'padding-left': '25px',
        color: 'black',
        width: '100%',
      },
      attributes: {},
      content: 'This is a heading 2!',
    },

    media: `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="50" height="50"
            viewBox="0 0 172 172"
            style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#000000"><path d="M7.16667,35.83333v100.33333h21.5v-43h28.66667v43h21.5v-100.33333h-21.5v35.83333h-28.66667v-35.83333zM128.42611,35.83333c-6.65067,0 -12.68131,1.45786 -18.07064,4.35319c-5.38934,2.89533 -9.60815,6.91326 -12.63965,12.05176c-3.0315,5.1385 -4.54916,10.74071 -4.54916,16.81087v2.61751h21.5l0.41992,-3.65332c0,-10.67833 7.19645,-14.5153 12.79362,-14.5153c11.64583,0 12.54167,8.77457 12.54167,13.03157c0,5.25317 -5.59034,12.35354 -13.4235,21.27604l-33.8317,33.41178v14.94922h71.66667v-17.66472h-39.54264c0,0 24.48671,-26.9479 27.54688,-31.00423c3.053,-4.05633 5.31307,-7.927 6.76074,-11.61783c1.44767,-3.69083 2.1696,-7.48839 2.1696,-11.37989c0,-9.23783 -2.89523,-16.32421 -8.66439,-21.26204c-5.76917,-4.93783 -13.99191,-7.40462 -24.67741,-7.40462z"></path></g></g></svg>`,
    activate: true,});
    // p Element
  bm.add('p-block', {
    id: 'p',
    label: 'Text',
    category: 'Text Elements',
    content: {
      type: 'text',
      draggable: 'main, main *',
      resizable: true,
      unstylable: ['flex-direction', 'flex-wrap', 'justify-content', 'align-items', 'align-content', 'float', 'position','transition', 'transform', 'box-shadow', 'display', 'float', 'position', 'top', 'right', 'bottom', 'left', 'flex', 'order', 'flex-basis', 'flex-grow', 'flex-shrink', 'align-self', 'background'],
      style: {
        'font-size': '16px',
        'font-family': '"Kumbh Sans", sans-serif',
        'font-weight': 'light',
        'text-justify': 'center',
        'margin-bottom': '0px',
        'text-align': 'center',
        'margin-top': '0px',
        'margin-bottom': '0px',
        'padding-top': '0px',
        'padding-bottom': '0px',
        'padding-right': '25px',
        'padding-left': '25px',
        color: 'black',
        width: '100%',
      },
      attributes: {},
      content: 'This is a paragraph text element.',
    },

    media: `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="50" height="50"
            viewBox="0 0 172 172"
            style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#000000"><path d="M28.66667,21.5v28.66667h14.33333v-14.33333h35.83333v100.33333h-14.33333v14.33333h43v-14.33333h-14.33333v-100.33333h35.83333v14.33333h14.33333v-28.66667z"></path></g></g></svg>`,
    activate: true,
  });
// Image Element
  bm.add('image-block', {
    id: 'img',
    label: 'Image',
    category: 'Media Elements',
    content: {
      type: 'image',
      draggable: 'main, main *',
      resizable: true,
      unstylable: ['flex-direction', 'flex-wrap', 'justify-content', 'align-items', 'align-content', 'float', 'position','transition', 'transform', 'box-shadow', 'display', 'float', 'position', 'top', 'right', 'bottom', 'left', 'flex', 'order', 'flex-basis', 'flex-grow', 'flex-shrink', 'align-self', 'background', 'font-family', 'font-size', 'font-weight', 'letter-spacing', 'color', 'line-height', 'text-align', 'text-shadow', 'background-color'],
      style: {
        margin: '25px',
        width: '200px',
        height: '200px',
      },
      attributes: {
        src: '',
        alt: 'This is a video description.',
      },
      content: '<img></img>',
    },

    media: `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="50" height="50"
            viewBox="0 0 172 172"
            style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#000000"><path d="M157.66667,28.66667h-143.33333v114.66667h143.33333zM71.66667,57.33333c3.956,0 7.16667,3.21067 7.16667,7.16667c0,3.956 -3.21067,7.16667 -7.16667,7.16667c-3.956,0 -7.16667,-3.21067 -7.16667,-7.16667c0,-3.956 3.21067,-7.16667 7.16667,-7.16667zM136.16667,121.83333h-100.33333l25.07617,-32.24283l17.92383,21.5645l25.08333,-32.3145z"></path></g></g></svg>`,
    activate: true,
  });
// Video Element
  bm.add('video-block', {
    id: 'video',
    label: 'Video',
    category: 'Media Elements',
    content: {
      type: 'video',
      draggable: 'main, main *',
      resizable: true,
      stylable: ['max-height', 'min-width'],
      unstylable: ['flex-direction', 'flex-wrap', 'justify-content', 'align-items', 'align-content', 'float', 'position','transition', 'transform', 'box-shadow', 'display', 'float', 'position', 'top', 'right', 'bottom', 'left', 'flex', 'order', 'flex-basis', 'flex-grow', 'flex-shrink', 'align-self', 'background', 'font-family', 'font-size', 'font-weight', 'letter-spacing', 'color', 'line-height', 'text-align', 'text-shadow', 'background-color'],
      style: {
        margin: '25px',
        width: '200px',
        height: '200px',
      },
      attributes: {
        provider: 'YouTube',
        src: '',
        alt: 'This is a video description.',
        controls: '',
        width: '',
        height: '',
        loop: '',
        muted: '',
        autoplay: '',

      },
      traits: {
        Provider: 'Youtube',
      },
      content: '<video></video>',
    },

    media: `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="50" height="50"
            viewBox="0 0 172 172"
            style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#000000"><path d="M157.66667,21.5h-143.33333v129h143.33333zM64.5,114.66667v-57.33333l50.16667,28.66667z"></path></g></g></svg>`,
  });
// Video Element
  bm.add('map-block', {
    id: 'map',
    label: 'Map',
    media: `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="50" height="50"
            viewBox="0 0 172 172"
            style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#000000"><path d="M107.27783,35.87633l-43,-14.37633l-42.77783,17.114v0.043v115.72733l43.22217,-17.286l43,14.37633l42.77783,-17.12117v-0.043v-115.72017zM64.5,121.905v-85.01817l0.22217,-0.09317l42.77783,14.26167v85.01817l-0.22217,0.09317z"></path></g></g></svg>`,
    category: 'Media Elements',
    content: {
      type: 'map',
      draggable: 'main, main *',
      resizable: true,
      unstylable: ['flex-direction', 'flex-wrap', 'justify-content', 'align-items', 'align-content', 'float', 'position','transition', 'transform', 'box-shadow', 'display', 'float', 'position', 'top', 'right', 'bottom', 'left', 'flex', 'order', 'flex-basis', 'flex-grow', 'flex-shrink', 'align-self', 'background', 'font-family', 'font-size', 'font-weight', 'letter-spacing', 'color', 'line-height', 'text-align', 'text-shadow', 'background-color'],
      style: {
        height: '500px',
        'min-width': '200px',
        'max-height': 'auto',
      },
      attributes: {},
      components: [],
    },
    activate: false,
  });

  // Link Element
    bm.add('link-block', {
      id: 'link',
      label: 'Link',
      media: `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
              width="50" height="50"
              viewBox="0 0 172 172"
              style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#000000"><path d="M43,50.16667c-19.78717,0 -35.83333,16.04617 -35.83333,35.83333c0,19.78717 16.04617,35.83333 35.83333,35.83333h28.66667v-14.33333h-28.66667c-11.87517,0 -21.5,-9.62483 -21.5,-21.5c0,-11.87517 9.62483,-21.5 21.5,-21.5h28.66667v-14.33333zM100.33333,50.16667v14.33333h28.66667c11.87517,0 21.5,9.62483 21.5,21.5c0,11.87517 -9.62483,21.5 -21.5,21.5h-28.66667v14.33333h28.66667c19.78717,0 35.83333,-16.04617 35.83333,-35.83333c0,-19.78717 -16.04617,-35.83333 -35.83333,-35.83333zM50.16667,78.83333v14.33333h71.66667v-14.33333z"></path></g></g></svg>`,
      category: 'Text Elements',
      content: {
        type: 'link',
        draggable: 'main, main *',
        resizable: true,
        unstylable: ['flex-direction', 'flex-wrap', 'justify-content', 'align-items', 'align-content', 'float', 'position','transition', 'transform', 'box-shadow', 'display', 'float', 'position', 'top', 'right', 'bottom', 'left', 'flex', 'order', 'flex-basis', 'flex-grow', 'flex-shrink', 'align-self', 'background', 'font-family', 'font-size', 'font-weight', 'letter-spacing', 'color', 'line-height', 'text-align', 'text-shadow', 'background-color'],
        style: {
          'text-color': 'blue',
        },
        attributes: {},
        components: [],
      },
      activate: false,

    });

    // Button Element
      bm.add('button-block', {
        id: 'button',
        label: 'Button',
        media: `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="50" height="50"
                viewBox="0 0 172 172"
                style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#000000"><path d="M172,50.16667h-172v71.66667h172zM93.16667,93.16667h-14.33333v-14.33333h14.33333zM121.83333,93.16667h-14.33333v-14.33333h14.33333zM64.5,93.16667h-14.33333v-14.33333h14.33333z"></path></g></g></svg>`,
        category: 'Text Elements',
        content: {
          type: 'button',
          draggable: 'main, main *',
          resizable: true,
        },
        activate: false,
      });

      // Button Element
        bm.add('line-block', {
          id: 'line',
          label: 'Line',
          media: `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                  width="50" height="50"
                  viewBox="0 0 172 172"
                  style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#000000"><path d="M14.33333,78.83333v14.33333h143.33333v-14.33333z"></path></g></g></svg>`,
          category: 'Content',
          content: {
            type: 'line',
            draggable: 'main, main *',
            resizable: true,
          },
          activate: false,
        });
}
