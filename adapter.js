class Client {
    constructor(api) {
        this.api = api;
    }

    getUsers() {
        this.api.get('/users');
    }
}

class ApiAdapterAbstract {
    get() {
        throw new Error('There is no get realisation in Adapter')
    }
}

class ApiAdapter extends ApiAdapterAbstract {
    constructor(req) {
        super();
        this.req = req;
    }

    get(url) {
        this.req.fetchGet(url);
    }
}

class Fetch {
    constructor(baseApi) {
        this.baseApi = baseApi;
    }

    fetchGet() {
        console.log('Realisation of get for ' + this.baseApi);
    }
}

const fetch = new Fetch('www.pornhub.com');
const apiAdapter = new ApiAdapter(fetch);
const client = new Client(apiAdapter);
client.getUsers();