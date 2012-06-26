# StickySlider jQuery Plugin

## Info
This plugin will start sliding a content of a block element when the browser window top will reach the element top position.

## Requirements

This plugin requires the following library to work:

[https://github.com/cowboy/jquery-throttle-debounce/](https://github.com/cowboy/jquery-throttle-debounce/)

## Usage

### Example

Use the plugin as follows:

```js
$('#sidebar-menu').stickyScroller({
    stopAtElement: $('.footer'),
    parentContainer: $('div.sidebar'),
    contentWrapper: $('div.content')
});
```

Make sure to include the CSS styles in your stylesheet

### Options

#### stopAtElement
You have to pass the jQuery element that the slider will stop at when sliding down

#### parentContainer
Parent container that holds your slider element

#### contentWrapper
Content wrapper that wraps the slider and other content around, needs to have `position: relative`

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