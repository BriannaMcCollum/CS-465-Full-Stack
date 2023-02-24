# CS-465-Full-Stack
My work and gradual progress for my Full Stack Development course, CS-465.

# Architecture
Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).
Why did the backend use a NoSQL MongoDB database?
The website began as static HTML pages, examples given to me by the mockup company Travlr to use to emulate their company style and create the pages for their travel booking website from. The client wanted a more polished, modern experience than just staic HTML pages, so we built up to a model around the MEAN stack architecture. MEAN stands for MongoDB, Express.js, AngularJS, and Node, which are various packages of Javascript code that aim to assist with different aspects of web development. Express HTML was a huge player for the backend development, as it manages a lot of the middleware needed to help mainain our Separation of Concerns. MongoDB manages our data within a NoSQL database. We've chosen specifically NoSQL because this project needs a flexible, easily scaleable database to pair with the constantly shifting travel packages offered to users and the grouwing userbase itself. MongoDB itself is an excellent database program that handles daa in JSON like documents, making translating our JOSN data easier. Finally, the single-page application work done with AngularJS was geared towards the front end user experience. Typically speaking, SPA looks better and feels more intuitive than multi-page applicaions, while also lightning resource load as the page doesn't need to be relaoded as much.
# Functionality
How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?
Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.
The first step was migrating to Dynamic page layouts with handlebars, which took native JSON data to fill the page's contents with.
# Testing
Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.
# Reflection
How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?
