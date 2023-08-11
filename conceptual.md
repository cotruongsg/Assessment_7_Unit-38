### Conceptual Exercise

Answer the following questions below:

- **What is a JWT?**
  _A JWT (JSON Web Token) is special node authentication library that enables the creation of a serialized token that gets created when a user signs into an application. It is more API-friendly than Flask's authentication methods. We're able to share authentication info across multiple APIs / hostnames with JWTs.

- **What is the signature portion of the JWT? What does it do?**
  _The signature portion of a JSON Web Token (JWT) is one of the three components that make up the JWT structure. The signature is used to verify the integrity and authenticity of the token.
  A JWT consists of three parts separated by periods ('.'): the header, the payload, and the signature.

- **If a JWT is intercepted, can the attacker see what's inside the payload?
  _Yes. The payload is encoded, not encrypted. The payload often contains claims or information about the user or the application context. To protect the confidentiality of the payload, you can encrypt the payload before encoding it in the JWT._
  
- **How can you implement authentication with a JWT? Describe how it works at a high level.**
  _In Flask, standard sessions are automatically transmitted via cookies between the server and the browser. However, the JWT standard does not dictate how or when tokens are sent. It is the responsibility of the application developer to handle the transmission of JWTs. This means that JWTs need to be sent manually in the requests and retrieved manually from the requests on the server side._
  _First, you need to install jsonwebtoken:_

```
$ npm install jsonwebtoken
```

_Import your jsonwebtoken_

```
const jwt = require("jsonwebtoken");
```

_Then, you need to create a token with payload, SECRET_KEY, jwt-options(option)_

```
const SECRET_KEY = "secret";
const JWT_OPTIONS = { expiresIn: 60 * 60 };// it means 1 hour
let payload = {username: "jane", admin: user.admin| fasle}
const token = jwt.sign(payload, SECRET_KEY, jwt option);
```

_This jwt.sign function can be implemented in an Express route after verfying or creating a password with bcrypt_

_Finally, you can verify the token from a req.body, or more commonly through a separate middleware function that can be called_ **authenticateJWT**. Inside, jwt.verify(tokenFromBody, SECRET_KEY);\*

- **Compare and contrast unit, integration and end-to-end tests**
  _Unit tests focus on testing individual units or components of code in isolation. These units can be functions, methods, or classes._
  _Integration tests examine the interactions between different components or modules of a system. They test the integration of these components to ensure they work together correctly._
  _End-to-end (E2E) tests evaluate the entire system or a significant part of it, including multiple components and their interactions. They simulate real user scenarios or workflows._

- **What is a mock? What are some things you would mock?**
  _In software testing, a mock is a technique used to create simulated or artificial objects that mimic the behavior of real objects or components. Mock objects are specifically designed for testing purposes and are used to isolate the code being tested from its dependencies._

- What is continuous integration?
  _Continuous Integration (CI) is a software development practice that involves regularly integrating code changes from multiple developers into a shared repository. The main objective of CI is to detect and resolve integration issues early and ensure that the software remains in a consistently buildable and testable state throughout the development process._

- What is an environment variable and what are they used for?
  _An environment variable is a value that is stored in the literal local environment of your project so it can run certain processes smoothly without sercurity breaches or just so your project runs on its own. Things like secret API keys are environment variables, or any secret key._

- What is TDD? What are some benefits and drawbacks?
  _TDD stands for Test Driven Development. It's the act of writing tests for your projects before writing any of the actual code so bugs can be found much more prematurely and to lead to better architectural decisions. This method of writing code can be considerably faster than writing code first and then writing tests. The downside is that the tests will obviously fail at first and that not every company works like this, although most of them do._

- What is the value of using JSONSchema for validation?
  _JSONschema is great because it validates incoming JSON data as it is request through an Express route in easily customizable ways. It reduces the risk of adding faulty information to databases. It's very easy to generate them through [jsonschema.net]_

- What are some ways to decide which code to test?
  _Coverage percentages shouldn't be the main focus, but consistently testing is important. Generally you should be testing APIs not databases._

- What does `RETURNING` do in SQL? When would you use it?
  _The RETURNING clause allows you to retrieve values of columns (and expressions based on columns) that were modified by an insert, delete or update. Without RETURNING you would have to run a SELECT statement after the DML statement is completed, in order to obtain the values of the changed columns. So RETURNING helps avoid another roundtrip to the database._

- What are some differences between Web Sockets and HTTP?
  _WebSocket is an event-driven protocol, which means you can actually use it for truly realtime communication. Unlike HTTP, where you have to constantly request updates, with websockets, updates are sent immediately when they are available._

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
  _I liked Flask because of how straightforward and easy to learn it is. But in terms of flexibility I have a feeling that Express is probably even more important to learn since it ties in with a lot of the most popular JavaScript libraries like React or Angular. Jest testing is a little more easy to understand than Python's testcase._
