# StickySlider jQuery Plugin

## Info
This plugin will start sliding a content of a block element when the browser window top will reach the element top position.

## Usage

### jQuery

Use the plugin as follows:

```js
$().stickyScroller({
    stopAtElement: $('.footer'),
    parentContainer: $('div.sidebar'),
    contentWrapper: $('div.content')
});
```

### CSS

The plugin will use two extra classes `stuck` and `stuck-bottom` which will change the position of the scrollable element

```css
.stuck {
	position: fixed;
	top:0px;
}

.stuck-bottom {
	position:absolute;
	bottom:0px;
}
```

You can always modify those classes to your liking

## Notes

* Requires jQuery 1.6+.
* Works in all A-grade browsers, including IE6.

## License

This plugin is dual licensed under the MIT and GPL licenses.

## Found a bug?

Submit a bug report above or here: 

<https://github.com/pkasperski/StickySlider/issues>