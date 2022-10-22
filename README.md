# IEEE @ UCSD Website

## Deployment

Github Actions have been set to trigger on each push and pull request on the `main` branch. The website will be built as static pages to the `page` branch where it will be deployed onto [ieeeucsd.edu](https://ieeeucsd.edu).

## Contributing

Please create a new branch for development (i.e. `[NAME]-dev`). Pushing directly to main is not advised, as changes will go straight into production.

### Testing

To build the site, run `npm run build`.

To view the site on your local network, run `npm build/index.js`. View the site at [localhost:9000](http://localhost:9000).

### Images

Large images should be in WebP format. Consider resizing images based on their usage.

[Squoosh](https://squoosh.app/) is a great online tool for optimizing images developed by Google Chrome Labs.

### Formatting

Install [prettier](https://prettier.io/) and use it as the default Typescript and Javascript formatter. The `.prettierrc` configuration file controls the formatting rules.

For CSS, use `CSS Language Features` as the default formatter. For HTML, use `HTML Language Features` as the default formatter.
