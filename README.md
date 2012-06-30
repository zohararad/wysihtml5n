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
  // configure the underlying wysihtml5 HTML parser.
  // By default, the advanced wysihtml5 parser is used.
  // See the http://xing.github.com/wysihtml5/ for more details
  parserRules: {...},
  // configure image editor options
  imageEditor: {
    // image croping aspect ratio (defaults to null)
    aspectRatio: 16/9,
    // drop area width. Defaults to 530px
    width: 530,
    // drop area height. Defaults to 300px
    height: 300
  }
}

$('#my-textarea').wysiHTML5N(options);
```

### Making sure things work properly

Your project's directory structure might be different than mine. In case it is, please make sure that:

* font-awesome.css knows where to find the **fonts** directory
* wysihtml5.css knows where to find Jcrop.gif (see line 47)

### Deploying

You may have noticed the assets are not minified or concatenated. This is on purpose. As an adult Web developer I assume you have your own way of minifying and concatenating your assets, so there's no reason for me to worry about that.

If you're already using Twitter Bootstrap, there's no need to include the bootstrap.css file from **dist/css** although you might want to remove the "icons.less" part from your build, since it doesn't play nicely with Font Awesome

### Browser Support

You'll need an ES5 compliant browser to run WYSIHTML5 Enhanced. To use the Drag & Drop feature, you'll need a browser with Drag & Drop and FileReader support. That means that if your browser has either "Internet" or "Explorer" in its name, all hell will break loose.

## Contributing

Found a bug? Need extra features? Feel free to open an issue. Or, even better, fork, fix and send me a pull request.

## License

The MIT License (MIT)
Copyright (c) 2012 Zohar Arad

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.