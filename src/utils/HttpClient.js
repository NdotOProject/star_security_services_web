import axios from "axios";

export class HttpClient {
  constructor({ baseURL, endpoints = [] }) {
    this.axiosInstance = axios.create({
      baseURL: baseURL,
    });

    this.endpoints = {};
    this.registerEndpoints(endpoints);
  }

  registerEndpoints(endpoints = []) {
    endpoints.forEach((endpoint) => this.registerEndpoint(endpoint));

    return this;
  }

  registerEndpoint(
    endpoint = { group: undefined, name: undefined, url: undefined }
  ) {
    this.endpoints[endpoint.group] = {
      ...this.endpoints[endpoint.group],
      [endpoint.name]: endpoint.registerHttpClient(this.axiosInstance),
    };

    return this;
  }
}

export class Endpoint {
  constructor(group, name, url) {
    this.group = group;
    this.name = name;
    this.url = url.trim();
  }

  registerHttpClient(client) {
    this.httpClient = client;
    return this;
  }

  get(options = { pathParams: {}, config: {} }) {
    if (options === undefined) {
      return this.httpClient.get(this.url);
    }

    let url = this.url;

    if (options.pathParams !== undefined) {
      const paramKeys = Object.keys(options.pathParams);

      paramKeys.forEach((key) => {
        if (url.includes(key)) {
          url = url.replace(`:${key}`, options.pathParams[key]);
        }
      });
    }

    return this.httpClient.get(url, options.config ?? {});
  }

  post(options = { pathParams: {}, body: {}, config: {} }) {
    let url = this.url;

    if (options.pathParams !== undefined) {
      const paramKeys = Object.keys(options.pathParams);

      paramKeys.forEach((key) => {
        if (url.includes(key)) {
          url = url.replace(`:${key}`, options.pathParams[key]);
        }
      });
    }

    return this.httpClient.post(url, options.body ?? {}, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

const httpClient = new HttpClient({
  baseURL: "https://localhost:44360/api/",
  endpoints: [
    new Endpoint("services", "list", "/services"),
    new Endpoint("services", "detail", "/services/:id"),
    new Endpoint("auth", "login", "/auth/login"),
    new Endpoint("recruitments", "list", "/recruitments"),
    new Endpoint("recruitments", "single", "/recruitments/:id"),
    new Endpoint("employees", "list", "/employees"),
    new Endpoint("employees", "single", "/employees/:id"),
    new Endpoint("clients", "list", "/clients"),
    new Endpoint("clients", "single", "/clients/:id"),
  ],
});

export default httpClient;
