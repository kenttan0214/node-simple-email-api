# node-simple-email-api

This simple email api service is build by using [Serverless](https://www.serverless.com/) framework and will be deployed to AWS lambda service.


### Pre-Prerequisite
- Install [NodeJs](https://nodejs.org/en/) version v14.x

### How to launch the API application

Clone the repository:

```sh
git clone https://github.com/kenttan0214/node-simple-email-api
```

Install dependencies:

```sh
cd node-simple-email-api
npm install
```

Putting together necessary configurations:

> Refer to .env-cmdrc.example, update the fields accordingly

Setup local env config:

```sh
cp .env-cmdrc.example .env-cmdrc
```

Start local instance:

```sh
npm start
```

### Run Unit Test
```sh
npm test
```


### ESLint and format
```sh
npm run lint
npm run format
```

Folder Structure 
============================
    .
    ├── src              
    │   ├── __mock__            # Unit test mock fuctions & data
    │   ├── handler             # API Schema and Response layer
    │   ├── helper              # The actual execution and a layer to connect with API, data, model and util ...
    │   └── type                # Typescript type definitions
    │   └── util                # Generic util functions
    │   └── middleware          # Middy middleware
    └── ...

Known limitation of this demo 
============================
1. Use nodemailer test account as demo of the send email capability instead of using any of the email provider SMTP server such as Gmail.
2. The email content is plant text just enough for demo the use case, actual case might need html formatting template
3. Actual use case should consider use [AWS SES](https://aws.amazon.com/ses/) this kind of service to ease the maintainability 
4. Unit test coverage is only collect from helper and handler for show case purpose
5. No deployment setup as this will need to create an AWS account 


