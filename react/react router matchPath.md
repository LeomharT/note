# React Router `matchPath`

`matchPath` matches a route path pattern against a URL pathname and returns information about the match. This is useful whenever you need to manually run the router's matching algorithm to determine if a route path matches or not. It returns null if the pattern does not match the given pathname.

The `useMatch` hook uses this function internally to match a route path relative to the current location.

```js
const path = '/user/:uid';

const matches = matchPath(path, '/user/0'); //=> retrun value

const matches = matchPath(path, '/user/create'); //=> retrun null

```

这个功能能够使得Breadcrumb根据路由生成
