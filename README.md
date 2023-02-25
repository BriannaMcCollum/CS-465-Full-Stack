# CS-465-Full-Stack
My work and gradual progress for my Full Stack Development course, CS-465.

# Architecture
The website began as static HTML pages, examples that were given to me by the mockup company Travlr to use to emulate their company style and create the pages for their travel booking website. The client wanted a more polished, modern experience than just static HTML pages, so we built up a model around the MEAN stack architecture. MEAN stands for MongoDB, Express.js, AngularJS, and Node, which are various packages of Javascript code that aim to assist with different aspects of web development. Express HTML was a huge player in the backend development, as it manages a lot of the middleware needed to help maintain our Separation of Concerns. MongoDB manages our data within a NoSQL database. We've chosen specifically NoSQL because this project needs a flexible, easily scaleable database to pair with the constantly shifting travel packages offered to users and the growing user base itself. MongoDB itself is an excellent database program that handles data in JSON-like documents, making translating our JSON data easier. Finally, the single-page application work done with AngularJS was geared toward the front-end user experience. Typically speaking, SPA looks better and feels more intuitive than multi-page applications, while also lightning resource load as the page doesn't need to be reloaded as much.
# Functionality
Javascript and JSON were both vitally important to assembling a high-quality, functional full-stack product. JSON isn't a programming language like Javascript, it's a type of file, a formatting method for storing large amounts of data. JSON files work by matching key-value pairs, searching for a key brings up the matching value. Typically a unique value like an ID is used to locate and separate different data entries from each other, and then similar but differing data is stored underneath, such as a trip's name, start date, and resort. JSON is the middle-ground between our back-end data storage with MongoDB and our front-end display to the user. When the data is pulled from MongoDB, it's formatted into a JSON file based on a certain template, and the front end is then able to interpret the results since they fit that given format. JSON was used in a lot of spots to optimize performance as well, such as when the webpage made the jump from static HTML to using handlebars. The handlebars programmatically grab the necessary JSON data pulled from the MongoDB database, inserting it into the Express dynamic page. This helps with load times and backend programming, where templates can be used instead of hard-programming every entry by hand. These reusable user interfaces, which began to take off in the trip cards of the SPA, standardize elements in specific and repeatable generated formats. They make load times better as we need to load fewer pre-made assets and make the system easily scalable and updateable as only the database needs to be changed to add new trip content.
# Testing
Using proper methods and connecting to the right endpoints are important for both security and solid code functionality. Methods in web development are like verbs. HTTP key phrases like GET, POST, PUT, and DELETE make up the methods that are used to accomplish specific tasks. Testing for these must be thorough, with each method individually tested, or else unintended results could cause errors or security breaks. Endpoints are the URLs used to access the API resources, such as /trips-list listing all of the available trips in the trip database. One of the easiest errors to make is misaligning endpoints, so it's important to thoroughly test the results either in a browser, or using a helpful tool like Postman. Security is obviously of high priority, as any full-stack project exposed to the internet could endanger the company and its users if not properly protected. For the security of the Travlr project, I went with a simple authorization and authentication model, an accounting system with a username and password. It uses a token when logged in to authorize the user, and if that token's not present, the tests showed that no restricted content like add and edit buttons will appear.
# Reflection
This course is by far one of the most complex courses I've ever taken. Full-stack development is no joke, balancing back-end and front-end while making sure to properly bug test everything while also keeping it inside the customer's scope of what they want. This was difficult, I'm going to lie about it. I believe this course was a good look at just how complex the real-world application of programming is. A lot of classes tend to contain in-a-box examples if that makes sense, snippets of how to use a language, package, pattern, or model, but it's difficult to take those examples and see how they would function in the real world. This class felt like an assignment from a job, where I was given customer specifics and had to make everything work. I think it taught me a lot about managing different aspects of a project simultaneously, as well as what separates front-end from back-end development. I think having a good grasp of a lot of aspects of web development will make me able to adjust to numerous different possible programming jobs in the future.
