# DevBootcamp.io

[DevBootcamp.io](https://devbootcamp.io) is a platform where anyone can get the latest and greatest information on coding bootcamps, share their experiences and help people start their careers in tech. We welcome all levels from beginners to advance, and all are welcome to find their place in this community.

## Contributing

We love for any and all contributions! For now look over the issues list, or join my Facebook group, [Code, Tech, And Caffeine](https://www.facebook.com/groups/190277791450732/) and ask questions there.

## Getting Started

Fork this repository and run

```npm install```
```npm run dev```

To setup VS Code install the ESLint Extension and the Vetur extension
Add this to your VS Code settings

```
  "editor.formatOnSave": false,
  "eslint.autoFixOnSave": true,
  "eslint.options": {
    "extensions": [ ".html", ".js", ".vue", ".jsx" ]
  },
  "eslint.validate": [
    { "language": "html", "autoFix": true },
    { "language": "vue", "autoFix": true },
    { "language": "javascript", "autoFix": true },
    { "language": "javascriptreact", "autoFix": true }
  ],
  "vetur.validation.template": false,
```
To build

```npm run build```



### Prerequisites

Right now there is no pre-requisites.


### Installing

Fork and run

## Running the tests

Test are created with vue-test-utils and jest. To run them use

```npm run test```


### Coding style tests

We use prettier and eslint. Linting must pass for merging PRs. To setup prettier add this to your VS Code settings.

## Deployment

Deployment is already setup with zeit. Zeit will push on every merge to staging and prod.

## Built With

* [Nuxt.js](http://nuxt.js) - A Vue.js SSR 
* [TypeScript](https://www.typescriptlang.org/) - A SuperSet of JavaScript
* [Zeit](https://zeit.co/) - Deploys SSR website
* [Buddy.works](https://buddy.works) - Buddy CI/CD pipeline

## Authors

* **Erik Hanchett** - *Initial work* 


## License

This project is licensed under the AGPL 3.0 License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Thanks for checking the project out!
