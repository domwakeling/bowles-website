# Home of the new Bowles Ski Racing Club website
This is the 'home' of the [Bowles Ski Racing Club website](http://www.bowlesskiracingclub.org.uk/index.html).

We have transitioned from a [RapidWeaver](https://www.realmacsoftware.com/rapidweaver/) site
(which was relatvely difficult to maintain) and are now using the [Gatsby](https://www.gatsbyjs.org)
static site generator in conjunction with [Netlify](https://app.netlify.com).

Netlify watches the `master` branch of this repository and re-builds whenever it is updated, removing
the need to manage uploading of data to a web-host solution.

## Proposing changes

You can propose changes (following the
[contributor guidelines](https://github.com/domwakeling/bowles-website/blob/master/CONTRIBUTING.md))
either by forking this repo in GitHub and using their web-based editor, or by cloning the repo
on your local computer.

## Working on GitHub

* Fork the repo (using the 'Fork' button, top right of the screen).
* Open a new branch in your fork (on the left side of the screen, under 'commits', there will be a button
labelled 'Branch: master'; click on this and type the name of your new branch in the text field at the top
of the dropdown)
* Make your changes
* Make a Pull Request

## Working locally

### Running the site in development mode

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

### Contributing

*See [CONTRIBUTING.md](https://github.com/domwakeling/bowles-website/blob/master/CONTRIBUTING.md)
for a guide to making contributions to the project.*

* Open a new branch (`git checkout -b name-of-your-branch`)
* Make your changes
* Commit them (`git add -A` then `git commit -m "A short description of your changes"`)
* Push them (`git push`)
* Open GitHub and make a Pull Request

