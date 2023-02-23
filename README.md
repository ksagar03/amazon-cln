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
