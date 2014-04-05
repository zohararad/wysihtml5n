(function($){
  "use strict";

  // parser rules for editor
  var parserRules = {
    "classes": {
      "wysiwyg-clear-both": 1,
      "wysiwyg-clear-left": 1,
      "wysiwyg-clear-right": 1,
      "wysiwyg-float-left": 1,
      "wysiwyg-float-right": 1
    },
    "tags": {
      "tr": {
        "add_class": {
          "align": "align_text"
        }
      },
      "strike": {
        "remove": 1
      },
      "form": {
        "rename_tag": "div"
      },
      "rt": {
        "rename_tag": "span"
      },
      "code": {},
      "acronym": {
        "rename_tag": "span"
      },
      "br": {
        "add_class": {
          "clear": "clear_br"
        }
      },
      "details": {
        "rename_tag": "div"
      },
      "h4": {
        "add_class": {
          "align": "align_text"
        }
      },
      "em": {},
      "title": {
        "remove": 1
      },
      "multicol": {
        "rename_tag": "div"
      },
      "figure": {
        "rename_tag": "div"
      },
      "xmp": {
        "rename_tag": "span"
      },
      "small": {},
      "area": {
        "remove": 1
      },
      "time": {
        "rename_tag": "span"
      },
      "dir": {
        "rename_tag": "ul"
      },
      "bdi": {
        "rename_tag": "span"
      },
      "command": {
        "remove": 1
      },
      "ul": {},
      "progress": {
        "rename_tag": "span"
      },
      "dfn": {
        "rename_tag": "span"
      },
      "iframe": {
        "check_attributes": {
          "src": "src",
          "width": "numbers",
          "height": "numbers"
        }
      },
      "figcaption": {
        "rename_tag": "div"
      },
      "a": {
        "check_attributes": {
          "href": "url" // if you compiled master manually then change this from 'url' to 'href'
        },
        "set_attributes": {
          "rel": "nofollow",
          "target": "_blank"
        }
      },
      "img": {
        "check_attributes": {
          "width": "numbers",
          "height": "numbers",
          "src": "dataURI",
          "alt": "alt"
        },
        "add_class": {
          "align": "align_img"
        }
      },
      "rb": {
        "rename_tag": "span"
      },
      "footer": {
        "rename_tag": "div"
      },
      "noframes": {
        "remove": 1
      },
      "abbr": {},
      "u": {
        remove:1
      },
      "bgsound": {
        "remove": 1
      },
      "sup": {
        "rename_tag": "span"
      },
      "address": {
        "rename_tag": "div"
      },
      "basefont": {
        "remove": 1
      },
      "nav": {
        "rename_tag": "div"
      },
      "h1": {
        "add_class": {
          "align": "align_text"
        }
      },
      "head": {
        "remove": 1
      },
      "tbody": {
        "add_class": {
          "align": "align_text"
        }
      },
      "dd": {
        "rename_tag": "div"
      },
      "s": {
        "rename_tag": "span"
      },
      "li": {},
      "td": {
        "check_attributes": {
          "rowspan": "numbers",
          "colspan": "numbers"
        },
        "add_class": {
          "align": "align_text"
        }
      },
      "object": {},
      "div": {
        "add_class": {
          "align": "align_text"
        }
      },
      "option": {
        "rename_tag": "span"
      },
      "select": {
        "rename_tag": "span"
      },
      "i": {},
      "track": {
        "remove": 1
      },
      "wbr": {
        "remove": 1
      },
      "fieldset": {
        "rename_tag": "div"
      },
      "big": {
        "rename_tag": "span",
        "set_class": "wysiwyg-font-size-larger"
      },
      "button": {
        "rename_tag": "span"
      },
      "noscript": {
        "remove": 1
      },
      "svg": {
        "remove": 1
      },
      "input": {
        "remove": 1
      },
      "table": {},
      "keygen": {
        "remove": 1
      },
      "h5": {
        "add_class": {
          "align": "align_text"
        }
      },
      "meta": {
        "remove": 1
      },
      "map": {
        "rename_tag": "div"
      },
      "isindex": {
        "remove": 1
      },
      "mark": {
        "rename_tag": "span"
      },
      "caption": {
        "add_class": {
          "align": "align_text"
        }
      },
      "tfoot": {
        "add_class": {
          "align": "align_text"
        }
      },
      "base": {
        "remove": 1
      },
      "video": {
        "remove": 1
      },
      "strong": {},
      "canvas": {
        "remove": 1
      },
      "output": {
        "rename_tag": "span"
      },
      "marquee": {
        "rename_tag": "span"
      },
      "b": {
        "rename_tag": "strong"
      },
      "q": {
        "check_attributes": {
          "cite": "url"
        }
      },
      "applet": {
        "remove": 1
      },
      "span": {},
      "rp": {
        "rename_tag": "span"
      },
      "spacer": {
        "remove": 1
      },
      "source": {
        "remove": 1
      },
      "aside": {
        "rename_tag": "div"
      },
      "frame": {
        "remove": 1
      },
      "section": {
        "rename_tag": "div"
      },
      "body": {
        "rename_tag": "div"
      },
      "ol": {},
      "nobr": {
        "rename_tag": "span"
      },
      "html": {
        "rename_tag": "div"
      },
      "summary": {
        "rename_tag": "span"
      },
      "var": {
        "rename_tag": "span"
      },
      "del": {
        "remove": 1
      },
      "blockquote": {
        "check_attributes": {
          "cite": "url"
        }
      },
      "style": {
        "remove": 1
      },
      "device": {
        "remove": 1
      },
      "meter": {
        "rename_tag": "span"
      },
      "h3": {
        "add_class": {
          "align": "align_text"
        }
      },
      "textarea": {
        "rename_tag": "span"
      },
      "embed": {
        "remove": 1
      },
      "hgroup": {
        "rename_tag": "div"
      },
      "font": {
        "rename_tag": "span",
        "add_class": {
          "size": "size_font"
        }
      },
      "tt": {
        "rename_tag": "span"
      },
      "noembed": {
        "remove": 1
      },
      "thead": {
        "add_class": {
          "align": "align_text"
        }
      },
      "blink": {
        "rename_tag": "span"
      },
      "plaintext": {
        "rename_tag": "span"
      },
      "xml": {
        "remove": 1
      },
      "h6": {
        "add_class": {
          "align": "align_text"
        }
      },
      "param": {},
      "th": {
        "check_attributes": {
          "rowspan": "numbers",
          "colspan": "numbers"
        },
        "add_class": {
          "align": "align_text"
        }
      },
      "legend": {
        "rename_tag": "span"
      },
      "hr": {},
      "label": {
        "rename_tag": "span"
      },
      "dl": {
        "rename_tag": "div"
      },
      "kbd": {
        "rename_tag": "span"
      },
      "listing": {
        "rename_tag": "div"
      },
      "dt": {
        "rename_tag": "span"
      },
      "nextid": {
        "remove": 1
      },
      "pre": {},
      "center": {
        "rename_tag": "div",
        "set_class": "wysiwyg-text-align-center"
      },
      "audio": {
        "remove": 1
      },
      "datalist": {
        "rename_tag": "span"
      },
      "samp": {
        "rename_tag": "span"
      },
      "col": {
        "remove": 1
      },
      "article": {
        "rename_tag": "div"
      },
      "cite": {},
      "link": {
        "remove": 1
      },
      "script": {
        "remove": 1
      },
      "bdo": {
        "rename_tag": "span"
      },
      "menu": {
        "rename_tag": "ul"
      },
      "colgroup": {
        "remove": 1
      },
      "ruby": {
        "rename_tag": "span"
      },
      "h2": {
        "add_class": {
          "align": "align_text"
        }
      },
      "ins": {
        "rename_tag": "span"
      },
      "p": {
        "add_class": {
          "align": "align_text"
        }
      },
      "sub": {
        "rename_tag": "span"
      },
      "comment": {
        "remove": 1
      },
      "frameset": {
        "remove": 1
      },
      "optgroup": {
        "rename_tag": "span"
      },
      "header": {
        "rename_tag": "div"
      }
    }
  };

  /**
   * Drag And Drop Image Editor. Enables a drop-able DOM elements,
   * Generates an image from dropped image file and enables image cropping via Jcrop
   * @param element - target drag and drop DOM element
   * @param options - options for image editor
   * @return {Object}
   * @constructor ImageEditor
   */
  var ImageEditor = function(element, options){

    var dataURI = null,
        options = options,
        jcrop_api = null,
        $dom = {
          $element: $(element),
          $canvas: null,
          $img: null,
          $ctx: null,
          $input: options.input
        };

    $dom.$element.css({
      'width':options.width,
      'height':options.height,
      'overflow':'hidden',
      'text-align':'center'
    });

    /**
     * Bind drag and drop events to $element
     */
    var bindEvents = function(){

      // handle No-Op events for drag and drop
      var noOpEvent = function(evt){
        evt.stopPropagation();
        evt.preventDefault();
      }

      $dom.$element.on('dragenter.dropImage', noOpEvent);
      $dom.$element.on('dragexit.dropImage', noOpEvent);
      $dom.$element.on('dragover.dropImage', noOpEvent);
      $dom.$element.on('drop.dropImage', onDrop );
    }

    /**
     * Handle drop event on $element
     * @param evt - DOM drop event (jQuery)
     */
    var onDrop = function( evt ){
      evt.stopPropagation();
      evt.preventDefault();

      var files = evt.originalEvent.dataTransfer.files;
      if(files.length > 0){
        var reader = new FileReader();
        // init the reader event handlers
        reader.onload = onFileReaderLoad;
        // begin the read operation
        reader.readAsDataURL(files[0])
      }
    }

    /**
     * Handle file reader load event.
     * Get image data from file reader
     * @param evt - FileReader load event
     */
    var onFileReaderLoad = function( evt ){
      clear();
      dataURI = evt.target.result;
      startImageEditor();
    }

    /**
     * Render image to drop zone and start jCorp editor
     */
    var startImageEditor = function(){
      $dom.$img = $('<img />').attr('src', dataURI).appendTo($dom.$element);
      $dom.$input.val(dataURI);

      $dom.$img.Jcrop({
        onSelect:imgFromCrop,
        aspectRatio: options.aspectRatio
      }, function(){
        jcrop_api = this;
      });
    }

    /**
     * Generate an image from crop coordinates
     * @param coords
     */
    var imgFromCrop = function(coords){
      $dom.$ctx.clearRect(0,0,$dom.$ctx.canvas.width,$dom.$ctx.canvas.height);

      $dom.$canvas.attr('width',coords.w).attr('height',coords.h);
      $dom.$ctx.drawImage($dom.$img[0], coords.x, coords.y, coords.w, coords.h, 0, 0, coords.w, coords.h); //sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight
      dataURI = $dom.$canvas[0].toDataURL('image/jpeg');
      $dom.$input.val(dataURI);
    }

    /**
     * Clears image and saved dataURI
     */
    var clear = function(){
      dataURI = null;
      if($dom.$img !== null){
        jcrop_api.destroy();
        $dom.$img.remove();
        $dom.$img = null;
        $dom.$input.val('');
      }
    }

    /**
     * Handle editor reopen from Wysiwyg
     */
    var reopen = function(){
      var url = $dom.$input.val();
      if(url.trim() !== ''){
        clear();
        dataURI = url;
        startImageEditor();
      }
    }

    /**
     * Initialize the drag and drop object
     */
    var init = function(){
      $dom.$canvas = $('<canvas></canvas>').css({
        display:'none'
      }).appendTo($('body'));

      $dom.$ctx = $dom.$canvas[0].getContext('2d');
      bindEvents();
    }

    init(); //initialize the image editor

    // revealing module pattern
    // reveal clear and init methods
    return {
      clear: function(){
        clear();
      },
      reopen: function(){
        reopen();
      }
    }
  }

  ImageEditor.prototype = {
    constructor: ImageEditor,
    $dataURI: null,
    $img: null
  }

  /**
   * Bootstrap and Drag & Drop enabled wysihtml editor
   * @param textarea - textarea DOM element to turn into WYSIWYG editor
   * @param options - editor and drag & drop options
   * @constructor WysiHTML5
   */
  var WysiHTML5N = function(textarea, options){

    // define editor toolbar HTML components
    var toolbar = {
      h1:           '<li data-wysihtml5-command="formatBlock" data-wysihtml5-command-value="h1" title="Insert headline 1" class="command btn">H1</li>',
      h2:           '<li data-wysihtml5-command="formatBlock" data-wysihtml5-command-value="h2" title="Insert headline 2" class="command btn">H2</li>',
      h3:           '<li data-wysihtml5-command="formatBlock" data-wysihtml5-command-value="h3" title="Insert headline 3" class="command btn">H3</li>',
      p:            '<li data-wysihtml5-command="formatBlock" data-wysihtml5-command-value="p" title="Insert paragraph" class="command btn">P</li>',
      bold:         '<li data-wysihtml5-command="bold" title="Make text bold (CTRL + B)" class="command btn"><i class="icon-bold"></i></li>',
      italic:       '<li data-wysihtml5-command="italic" title="Make text italic (CTRL + I)" class="command btn"><i class="icon-italic"></i></li>',
      ol:           '<li data-wysihtml5-command="insertOrderedList" title="Insert an ordered list" class="command btn"><i class="icon-list-ol"></i></li>',
      ul:           '<li data-wysihtml5-command="insertUnorderedList" title="Insert an unordered list" class="command btn"><i class="icon-list-ul"></i></li>',
      insertLink:   '<li data-wysihtml5-command="createLink" title="Insert a link" class="command btn"><i class="icon-link"></i></li>',
      insertImage:  '<li data-wysihtml5-command="insertImage" title="Insert an image" class="command btn"><i class="icon-picture"></i></li>',
      changeView:   '<li data-wysihtml5-action="change_view" title="Show HTML" class="action btn">&lt;/&gt;</li>',
      modals: {
        insertLink:'<div class="modal" data-wysihtml5-dialog="createLink" style="display: none;">' +
          '<div class="modal-header">' +
          '<button type="button" class="close" data-wysihtml5-dialog-action="cancel" data-dismiss="modal">×</button>' +
          '<h3>Insert Link</h3>' +
          '</div>' +
          '<div class="modal-body">' +
          '<label>Link: <input data-wysihtml5-dialog-field="href" type="url" class="input-xlarge" placeholder="http://"></label>' +
          '</div>' +
          '<div class="modal-footer">' +
          '<a class="btn btn-primary" data-wysihtml5-dialog-action="save">OK</a>' +
          '<a class="btn" data-wysihtml5-dialog-action="cancel" data-dismiss="modal">Cancel</a>' +
          '</div>' +
          '</div>',
        insertImage:'<div class="modal" data-wysihtml5-dialog="insertImage" style="display: none;">' +
          '<div class="modal-header">' +
          '<button type="button" class="close" data-wysihtml5-dialog-action="cancel" data-dismiss="modal">×</button>' +
          '<h3>Insert Image</h3>' +
          '</div>' +
          '<div class="modal-body">' +
          '<div class="drop-image"></div>' +
          '<input data-wysihtml5-dialog-field="src" class="image-src-field" type="hidden" />' +
          '</div>' +
          '<div class="modal-footer">' +
          '<a class="btn btn-primary" data-wysihtml5-dialog-action="save" class="save-image">OK</a>' +
          '<a class="btn" data-wysihtml5-dialog-action="cancel" data-dismiss="modal">Cancel</a>' +
          '</div>' +
          '</div>'
      }
    };

    var imageEditor,
        textEditor,
        $dom = {
          $textarea: $(textarea),
          $toolbar: null
        };

    /**
     * Build the toolbar and append before textarea
     */
    var buildToolbar = function(){
      var toolbarHTML = ['<ul class="btn-group">'];
      var modals = [];

      options.toolbar.forEach(function(key){
        if(toolbar[key]){
          toolbarHTML.push(toolbar[key]);
        }
        if(toolbar.modals[key]){
          modals.push(toolbar.modals[key]);
        }
      });

      toolbarHTML.push('</ul>');

      $dom.$toolbar = $('<div class="wysiHTML5-toolbar"></div>').html(toolbarHTML.concat(modals).join('')).insertBefore($dom.$textarea);
    }

    /**
     * Initialize the WysiHTML5 Editor
     */
    var initEditor = function(){
      textEditor = new wysihtml5.Editor($dom.$textarea[0], {
        toolbar:     $dom.$toolbar[0],
        stylesheets: options.stylesheets,
        parserRules: options.parserRules
      });

      if(options.toolbar.indexOf('insertImage') > -1){
        initImageEditor();
      }
    }

    /**
     * Initialize the image editor for the Wysiwyg
     */
    var initImageEditor = function(){
      var el = $dom.$toolbar.find('.drop-image');
      var opts = $.extend({input: $dom.$toolbar.find('input.image-src-field')}, options.imageEditor);
      imageEditor = new ImageEditor(el, opts);

      // clear image editor on insertImage event
      $dom.$toolbar.find('[data-wysihtml5-command="insertImage"]').click(function(){
        imageEditor.clear();
      });

      textEditor.on('show:dialog', function(options){
        if(options.command === 'insertImage'){
          imageEditor.reopen();
        }
      }).on('cancel:dialog', function(options){
        if(options.command === 'insertImage'){
          imageEditor.clear();
        }
      });
    }

    /**
     * Initialize the editor plugin
     */
    function init(){
      buildToolbar();
      initEditor();
    }

    init(); //initialize instance
  }

  WysiHTML5N.prototype = {
    constructor: WysiHTML5N
  }

  $.fn.wysiHTML5N = function(option){
    return this.each(function () {
      var $this = $(this),
        data = $this.data('wysiHTML5N'),
        options = $.extend({}, $.fn.wysiHTML5N.defaults, typeof option == 'object' && option);
      if (!data){
        $this.data('wysiHTML5N', (data = new WysiHTML5N(this, options)))
      }
      if (typeof option == 'string'){
        data[option]();
      }
    });
  }

  $.fn.wysiHTML5N.defaults = {
    toolbar: [
      'h1', 'h2', 'h3', 'p', 'bold', 'italic', 'ul', 'ol', 'insertLink', 'insertImage', 'changeView'
    ],
    stylesheets: [],
    parserRules: parserRules,
    imageEditor: {
      aspectRatio:null,
      width:530,
      height:300
    }
  }

}(window.jQuery));