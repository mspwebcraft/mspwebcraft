import axios, { AxiosRequestConfig } from "axios";

/**
 * This function is used to fetch API using the Axios library.
 * @param {("GET" | "POST" | "PUT" | "DELETE")} method The HTTP request method.
 * @param {string} endpoint The route of the API.
 * @param {any} [body] The body of the API request.
 * @param {Record<string, string>} [headers] The headers for the API request.
 * @returns {Promise<any>} A Promise resolving to the data returned by the API.
 * @throws {Error} Throws an error if there's an issue fetching the API.
 */
const fetchApi = async <Response,>(
  method: "GET" | "POST" | "PUT" | "DELETE",
  endpoint: string,
  body?: any,
  headers?: Record<string, string>,
): Promise<Response> => {
  const config: AxiosRequestConfig = {
    method,
    url: endpoint,
    headers,
    data: body,
  };
  try {
    const res = await axios<Response>(config);
    return res.data;
  } catch (error) {
    throw (
      error?.response?.data || error?.message || "Error occured in fetching api"
    );
  }
};

export default fetchApi;
