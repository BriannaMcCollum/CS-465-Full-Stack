# CS-465-Full-Stack
My work and gradual progress for my Full Stack Development course, CS-465.

# Architecture
The website began as static HTML pages, examples given to me by the mockup company Travlr to use to emulate their company style and create the pages for their travel booking website. The client wanted a more polished, modern experience than just staic HTML pages, so we built up to a model around the MEAN stack architecture. MEAN stands for MongoDB, Express.js, AngularJS, and Node, which are various packages of Javascript code that aim to assist with different aspects of web development. Express HTML was a huge player for the backend development, as it manages a lot of the middleware needed to help mainain our Separation of Concerns. MongoDB manages our data within a NoSQL database. We've chosen specifically NoSQL because this project needs a flexible, easily scaleable database to pair with the constantly shifting travel packages offered to users and the grouwing userbase itself. MongoDB itself is an excellent database program that handles daa in JSON like documents, making translating our JOSN data easier. Finally, the single-page application work done with AngularJS was geared towards the front end user experience. Typically speaking, SPA looks better and feels more intuitive than multi-page applicaions, while also lightning resource load as the page doesn't need to be relaoded as much.
# Functionality
JSON isn't a programming language, it's a type of file, a formatting method for storing large amounts of data. JSON files work by matching key-value pairs, searching for a key brings up the matching value. Typically a unique value like an ID is used to locate and separate different data entries from each other, and then similar but differing data is stored underneath, such as a trip's name, start date, and resort. JSON is the middle-ground between our back-end data storage with MongoDB, and our front-end display to the user. When the data is pulled from MongoDB, it's formatted into a JSON file based on a certain template, and the front-end is then able to interpert the results since they fit that given format. JSON was used in a lot of spots to optimize performance as well, such as when the webpage made the jump from static HTML to using handlebars. The handlebars programatically grab the necessary JSON data pulled from the MongoDB database, inserting it into the Express dymanic page. This helps with load times and backend programming, where templates can be used instead of hard-programming every entry by hand. These reusable user interfaces, which really began to take off in the trip cards of the SPA, standardize elements in specific and repeatable generated formats. They make load times better as we need to load less pre-made assets, and make the system easily scalable and updateable as only the database needs to be changed to add new trip content.
# Testing
Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.
# Reflection
How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?
