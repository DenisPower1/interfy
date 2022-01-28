###### To go ahead in this tutorial you must have at least intermediate level in Javascript.

## Introduction

Interfy is a Javascript library that gives us a robust front-end routing system. It was first created to be used in apps created 
with [Inter](interjs.epizy.com), but you can use it in any project that requires web front-end routing.

*Interfy* is:

* Easy
* Simple
* Light weight
* Robust
* Enjoyable


## Installation

##### Interfy must be only used in pages that use  "http" or "https" protocols.

To install Interfy is very simple, you have just to import it in a *script* tag.

## Using CDN

```html
<script src="https://cdn.jsdelivr.net/gh/DenisPower1/interfy@2.0.1/interfy.g.min.js"></script>
```

## Using locally

You can download Interfy clicking on [download](https://github.com/DenisPower1/interfy/releases/download/v2.0.1/interfy.g.min.js)


## Usage

Interfy gives us a constructor called `Interfy`, when we create an instance for it, the following methods and properties will be
available:

* route(route:string, handler:Object) - This method is used to register a route. It expects two arguments, the first argument must be a string indicating the route which will be registered and the route must start with slash(/), and the second argument must be a function that will be invoked everytime the route is requested.
* start(handler?:Function) - This method is used to initialize the routing system, it can recieve a function as its argument, and the function will be invoked everytime a route is requested, it will be invoked with an argument indicating the route being requested.
* setPath(route:string) - This method is used to change the url with a route path, and the route will be requested in the router.
* useHash(route:string) - This methods works similar to previous one, the difference is that when the url is changed with this method, there will be a hash in the url.
* version:string - This is a read-only property, it returns the Interfy's version installed.

### Examples

```javascript

// creating a instance for Interfy()
const int=new Interfy();

// Registering the route /
int.route("/", ()=>{

console.log("The route / was requested!")

})

int.route("/user/(id)", (o)=>{

//This will run when the route /user/anyinformation is requested.

console.log(`User's id :${ o.var.id}`) 

})

int.route("/?q=*", (o)=>{

console.log(`Searching for : ${o.param.q}`);

})

// Initializing the routing system.
int.start()

// changing route.
int.setPath("/?q=Interfy") // Searching for: Interfy

```

Everything is super understandable right? I bet if you ever written a Javascript back-end code this code is a peace of cake!

In the second route registered(/user/(id)), the subroute is dynamic, it can be:

* user/2993
* user/39303
* user/3094094

The brackets is called *var* and the value between them, is called var's name. When the "/user/(id)" route is requested, its handler
will be invoked with an argument, and that argument is an object which has the var property which is an object whose its properties' names will be the names
of the vars in the route and the values of those properties will be the "values" of the corresponding dynamic route.

```javascript

int.setPath("/user/38958") // User's id : 38958 

```

In the third route registered, the route has a queryString(q), and the astherisc indicates that it will be equal to anything. And when
this route is requested its handler will be invoked with an argument, the argument will be an object which has a property named param, and the param property
is also an object whose its properties names will be the names of the querysStrings' parameters in the route, and the values will be the values of the corresponding QueryStrings' parameters.

```javascript

int.setPath("/?q=routing lib")

``` 

The value of the `q` parameter  will be "routing lib".

When a route has only an astherisc it indicates that its handler will be invoked everytime the requested route is not registered(NOT FOUND).

```javascript

int.route("*", ()=>{

console.log("The route was not found")

})

```


## ECMASCRIPT MODULE

You can use the ecmascript modules in Interfy, just follow these steps:

#### CDN


```javascript

import {Interfy} from "https://cdn.jsdelivr.net/gh/DenisPower1/interfy@2.1.0/module/interfy.m.js"

const int=new Interfy();

int.route("/", ()=>{})

```

#### Locally

You can download the modularized version clicking on [download](https://github.com/inter-frame/interfy/releases/download/v2.1.0/interfy.m.js).


```javascript

import {Interfy} from "./interfy.m.js"

const int=new Interfy();

int.route("/", ()=>{})

```

Quite simple right? Now you already know everything about this magnific routing library, did you enjoy it? Let me know by starring this
repository!

You can check also [Inter](https://github.com/interjs/inter)








