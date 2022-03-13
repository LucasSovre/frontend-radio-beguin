# frontend-radio-beguin

## Quickstart

### Installation

>#### Requirements : 
> - node

First you need to clone the git repository. then place yourself in the app folder 

```bash
cd app
```
install the node dependencies referenced in the `package.json` by runing the following command : 

```bash
npm install
```

### Localy run the project

you can run the project by running :

```bash
npm start
```

## How to contribute to the project 

Please try to use minimum as possible external npm package (to improve performence). When decide to use a new one : thanks to choose one with less dependecies as possible, and ask to [@LucasSovre](https://github.com/LucasSovre) before use it.

### Architecture

To contribute to this project, thanks to respect this architecture.

```
app
├── package.json
├── package-lock.json
├── public                 Where html react js is launched
└── src                    React app source folder
    ├── assets             All sources called by components
    │   ├── img            Static images (all format)
    │   ├── utils          Js used for API connections and some other stuff
    │   ├── fonts          Font stored localy
    │   └── styles         All css or sass files
    ├── components         React jsx components
    ├── containers         React jsx containers (composed of components)
    ├── index.js           Main react js file
    └── Paths.js           React-router-DOM : paths definitions
```

### Components structure 

How to build a jsx component for this project :
- 1 component = 1 file
- **Maximum use of functional component , maximum avoid class component**
- Every components are named with [PascalCase](https://techterms.com/definition/pascalcase)
- Use [ternary operator](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) instead sperated render function for conditional rendering

> ### Why use functional component instead class component ? 
> Because React encourage it since 16.8 maj with react hooks.
>
> *Hooks are a new addition to React 16.8. They let you use state and other React features without writing a class.*
>
>*[...] for functional components, we use hooks (useState) to manage the state. If you write a function component and realise you need to add some state to it, previously you had to convert it to a class component. Now you can use a Hook inside the existing function component to manage the state and no need to convert it into the Class component. Instead of Classes, one can use Hooks in the Functional component as this is a much easier way of managing the state. Hooks can only be used in functional components, not in-class components.*
>
>extract from website : https://www.geeksforgeeks.org/differences-between-functional-components-and-class-components-in-react/

### Containers strucuture

Jsx containers followed the sames rules than the components one.

### How to add a page to paths

- Paths are made of containers **and not a component**
- Paths are named with [PascalCase](https://techterms.com/definition/pascalcase)

### How to modify styles

Styles defined in styles folder follows this rule : 

- 1 component or container = 1 css file
- Use id when used only once and class for multiples uses
- Maximum use flex display, use grid **when it's needed**.
- Name class and id with : 2 first letter permit to understand components ,followed by simple name separated by mid dash " `-` " when needed.
- Use only `%` and `px`.
- Think about `%` processor uses and `px` bad responsivity when choosing between them.


