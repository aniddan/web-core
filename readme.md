# web-core

Modular standard library for JavaScript WebAPIs. Includes polyfills for Fetch API, Document.elementsFromPoint(), Window.getComputedStyle(), Element.matches(), XPath and more. You can require only needed features or use it without global namespace pollution.

*Example:*

```JavaScript
fetch('https://github.com');    // => Response
```

*Without global namespace pollution:*

```JavaScript
import web from 'web-js/library';
web.fetch('https://github.com') // => Response
```

## Usage

### Basic

```bash
 $ npm i -s web-js
```

```JavaScript
// Default
import 'web-js';
// Without global namespace pollution
import web from 'web-js/library';
```

### Partial

```JavaScript
import 'web-js/fetch';
// or
import fetch from 'web-js/library/fetch';
```

## Credit

 - [Sergey Starodub][@strodoff]
    - Element.matches()
    - Window.getComputedStyle()
 - [Iddan Aharonson][@aniddan]
    - Document.elementsFromPoint()
 - [Evan Krambuhl][@krambuhl]
    - CustomEvent
 - [GitHub][GitHub]
    - [Fetch][github fetch]
 - [Google][Google]
    - [XPath][wicked-good-xpath] (Based on work by [Cybozu Labs][Cybozu Labs])


[@strodoff]: https://github.com/strodoff
[@aniddan]: https://github.com/aniddan
[@krambuhl]: https://github.com/krambuhl
[GitHub]: https://github.com
[github fetch]: https://github.github.io/fetch/
[Cybozu Labs]: http://labs.cybozu.co.jp/en/
[Google]: https://google.com
[wicked-good-xpath]: https://github.com/google/wicked-good-xpath
