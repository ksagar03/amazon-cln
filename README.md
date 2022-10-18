# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### ------------------------- `Amazon-clone ` ---------------------------

1.  we are creating amazone clone app and will be learing lot of things
2.  I will be using firebase for managing database also i will be deploying this website.
    -> install firbase in react app == npm install firebase  
     -> To host our website-site with Firebase Hosting, you need the Firebase CLI (a command line tool) so to install it == npm install -g firebase-tools
    -> there are more todo with firebase which we will be doing in future
    -> next we need to add firebase snnipt - next we will create a new file for this firebase snippt
3.  next I created a navbar components which will handle the functionallity of the navbar and also for the styling navbar a css file has been created which will define the design of the navbar.
4.  Next task is to add home page
5.  this home page will have different blocks which will show different products and its details.
    -> Here we will have differnt rows
    -> using react props we can add different product in differnt blocks
    -> next we will add btn-> add to cart
6.  Next task is to create a cart page so that when we click on cart icon i needs to take us to that page
    -> for above functionality to work we need to use react router(for more information about router refer the code)
    -> I have used link(react router property) which helps us to go to cart page on clicking cart icon
    -> next created a subtotal component which shows us the final total
7.  Next installed react-currency-format(one of the lib of the react)
    -> CurrencyFormat -- is a component defined inside react-currency-format
    -> it has fallowing props:
    1.Prefix(helps us write currency in prefix), suffix and thousand separator(this helps us separate 10s 100s(eg:1,23,000)). 2. Custom format pattern. 3. Masking. 4. Custom formatting handler. 5. Formatting a input or a simple text.
8.  Next task is to push a data into a data-layer (eg:when we want to add a product to the cart, the products data will be sent to the data layer so that we can pull the data from the data-layer when ever we want)
    -> for this we need to use React-context-API or REDUX

----------------------------------------------------------------------

About firebase: Firebase is a set of hosting services for any type of application. It offers NoSQL and real-time hosting of databases, content, social authentication, and notifications, or services, such as a real-time communication server.

----------------------------------------------------------------------