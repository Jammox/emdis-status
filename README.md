# emdis-status

REST API web service providing EMDIS hub status information from Ester.

This is a sample project without authentication and therefore for private network use only.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Node.js v8+
Ester v3.15+
Firebird v2.5+

### Installing

Clone (or fork) the repository to your local machine, e.g.

```
$ git clone https://github.com/Jammox/emdis-status
```

CD to the project folder and install the project modules.

```
$ npm install
```

You may need to edit *conf/env/development.json* to reflect the location and port of the Firebird server.
It is recommended to add an alias for the EmdisMail database in your Firebird aliases.conf file.

Run the project.

```
$ npm run monitor
```

Return all hub statuses via:

```
http://localhost:3000/status
```

Return an individual hub status (hub will be a 2 character country identifier e.g. WA, DE, FR):

```
http://localhost:3000/status/hub
```

## Running the tests

Once the service is running tests may run via:

```
$ npm test
```

## Deployment

This service does not provide or require authentication and is intended for internal private network use only.

## Built With

* [node.js](https://nodejs.org)
* [express](https://expressjs.com) - Web framework.
* [node-firebird](https://www.npmjs.com/package/node-firebird) - JavaScript Firebird client.

## Authors

* **James A.Fitches** - *Initial work* - [Jammox](https://github.com/Jammox)

## License

This project is licensed under the GPL3.0 License - see the [LICENSE](https://github.com/Jammox/emdis-status/blob/master/LICENSE) file for details.
