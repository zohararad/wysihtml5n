# WYSIHTML5 Enhanced

WYSIHTML5 Enhanced is a rich-text editor, based on the wonderful [wysihtml5 editor](http://xing.github.com/wysihtml5/ "wysihtml5"), with a bit of help from Twitter Bootstrap, Font-Awesome, Jcrop and HTML5's Drag & Drop and File API.

## Another editor? Really?

Yes, Really! I based WYSIHTML5 Enhanced on the amazing [bootstrap-wysihtml5](https://github.com/jhollingworth/bootstrap-wysihtml5 "bootstrap-wysihtml5") editor by James Hollingworth, but instead of extending his editor, I decided to take a different path, since James' version showed some variations in comparison to the original wysihtml5 editor.

WYSIHTML5 Enhanced doesn't try to change the original wysihtml5 editor but to simply wrap the UI with Twitter Bootstrap and Font Awesome goodness, and replace the URL-based image editor with a Drag & Drop image editor.

## Installation and Usage

* Clone or download the reop to your machine
* Copy the contents of **dist** into your project
* Include the CSS and Javascripts in your page (CSS at the top, JS at the bottom. You do remember, right?)
* Somewhere in your code, run the following:

```javascript
$('#my-textarea').wysiHTML5N();
```

### Available options

You can configure the editor by passing an **options** object to the initializer. Here are the available options with their default values.

```javascript
var options = {
  // configure which elements to show in the toolbar
  toolbar: ['h1', 'h2', 'h3', 'p', 'bold', 'italic', 'unordered', 'ordered', 'insertLink', 'insertImage', 'changeView'],
  // additional stylesheets used by the editor to display edited content
  stylesheets: ['css/editor.css'],
  // configure the underlying wysihtml5 HTML parser. By default, the advanced wysihtml5 parser is used. See the wysihtml5 for more details
  parserRules: {...},
  // configure image editor options
  imageEditor: {
    // image croping aspect ration (defaults to null)
    aspectRatio: 16/9,
    // drop area width. Defaults to 530px
    width: 530,
    // drop area height. Defaults to 300px
    height: 300
  }
}

$('#editor-textarea').wysiHTML5N(options);
```