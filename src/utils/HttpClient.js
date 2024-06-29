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
    this.url = `/${url.trim()}`;
  }

  registerHttpClient(client) {
    this.httpClient = client;
    return this;
  }

  get({ pathParams = {}, config = {} }) {
    let url = this.url;
    const paramKeys = Object.keys(pathParams);

    paramKeys.forEach((key) => {
      if (url.includes(key)) {
        url = url.replace(`:${key}`, pathParams[key]);
      }
    });

    return this.httpClient.get(url, config);
  }
}

const httpClient = new HttpClient({
  baseURL: "https://jsonplaceholder.typicode.com/",
  endpoints: [
    new Endpoint("posts", "get_comments", "/:id/comments"),
    new Endpoint("posts", "get_all_posts", "/"),
    new Endpoint("comments", "get_all_comments", "/"),
  ],
});

export default httpClient;
