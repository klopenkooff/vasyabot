const fetch = require('node-fetch');

class connect {

    constructor (key) {

            try {

            this.api = async function (method, params = {}) {

                params.token = key;

                let p = [];

                Object.keys(params).map(x => {

                    p.push(`${x}=${params[x]}`);

                });

                p = p.join('&');

                let result = fetch.default("http://api.vasyabot.xyz/" + method + "/?" + p).then(e => e.text());

                return result;

            }

        } catch (err) {

            return {

                error: {

                    text: "METHOD NOT FOUND"

                }

            }

        }

    }

}

module.exports = connect;

© 2021 GitHub, Inc.
