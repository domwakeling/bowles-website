# Building the new BSRC website
We're re-building the [Bowles Ski Racing Club website](http://www.bowlesskiracingclub.org.uk/index.html).

The current site was built using [RapidWeaver](https://www.realmacsoftware.com/rapidweaver/) and is
relatively difficult to maintain/update, so we're going to re-build it. To do this we're going to
use [Gatsby](https://www.gatsbyjs.org), which reduces the complexity of maintaining a blog whilst
still generating static content which can be hosted on pretty much **any** web-host.

## Getting started

To run the site in development you're going to need to have the Gatsby CLI program installed:

```sh
npm install --global gatsby-cli
```

Next you need to clone a copy of the repository; to do this, `cd` to the location where you want
to place your local copy, and then

```sh
git clone https://github.com/domwakeling/bowles-website
```

(alternatively, fork the project in GitHub and then follow their instructions to clone the fork)

`cd` into the directory that has been created, and run

```sh
npm install
```

which will install all the required dependencies.

And finally run

```sh
gatsby develop
```

or

```sh
npm run develop
```

to start the Gatsby development server and get a copy of the site running in your browser.
