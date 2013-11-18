# Website for OpenSeadragon

**Note: to contribute to this website, use the https://github.com/openseadragon/site-build/ repository.**

This repository is a Github Organization Page; everything that's checked in to the master branch is automatically published to http://openseadragon.github.io/.

The files that are checked in here (with the exception of this readme) are all generated from the site-build repository.

The website also makes use of the example-images repository, which is a Github Project Page, published automatically to http://openseadragon.github.io/example-images. If you want to test the site locally, you'll need to include that repository as example-images inside your openseadragon.github.com folder. This repository's .gitignore excludes that folder, so you can leave it there without accidentally checking it in.

If you have grunt installed to build the openseadragon javascript from source, grunt can also be used here (don't forget to `npm install` in this folder) to run a local server (at http://localhost:9000) by running:

> grunt 
