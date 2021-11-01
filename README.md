# Movies App (Using Reactjs)

## App Functionallities

* Show movies in cards (With multi pages 'Pagination')
* Search for movies by name (With multi pages 'Pagination')

---
## App Pages

* Movies Page (includes Movie Cards and search results)
* Add Movie Page
* Movie Detailes Page

---
## App Components

* Navbar Component
* MovieCard Component
* SearchForm Component
* Pagination Component 

---
## Package Installed 

* Install React
    >$ npx create-react-app react-movies-app

* Install react bootstrap
    >$ npm install react-bootstrap bootstrap@5.1.3
    
    - in src/index.js:

        `import 'bootstrap/dist/css/bootstrap.min.css';`

* Install React Icons
    >npm install react-icons --save

* Install React Router DOM
    >$ npm install react-router-dom

* Install Axios (for HTTP requests)
    >$ npm install axios 
    - To use it:
        `import axios from 'axios';`

* Install MDB react
    >npm install --save mdbreact
    - in src/index.js:

        `import 'mdbreact/dist/css/mdb.css';`

* Install mdb-react-ui-kit
    >npm i mdb-react-ui-kit
    - in src/index.js:

        `import 'mdb-react-ui-kit/dist/css/mdb.min.css';`

* Install REDUX and React Redux
    >npm install redux react-redux
    - in Redux there are three building parts: 
        * actions
        * store
        * reducers
    - Must import & wrap my app in index.js with:

        `import { Provider } from 'react-redux';`

        `import store from './redux/store';`

        `<Provider store={store}></Provider>`

* Create account on the movie database website :
https://www.themoviedb.org

* Get API Key : 
"b6df6e2465b3dff1fffe5943c196a3a5"

* Get Movies list using API :
https://api.themoviedb.org/3/movie/popular?api_key=b6df6e2465b3dff1fffe5943c196a3a5

* Using dynamic routes get movie details data using API :
https://api.themoviedb.org/3/movie/880009?api_key=b6df6e2465b3dff1fffe5943c196a3a5

Where 880009 is movie id

* Search For Movies :
https://api.themoviedb.org/3/search/movie?api_key=b6df6e2465b3dff1fffe5943c196a3a5&language=en-US&query=luca&page=1&include_adult=false&year=0&primary_release_year=0







