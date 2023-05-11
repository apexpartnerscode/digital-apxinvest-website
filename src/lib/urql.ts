import { cacheExchange, createClient, fetchExchange, ssrExchange } from "urql";

const isServeSide = typeof window === 'undefined';
const ssrCache = ssrExchange({ isClient: !isServeSide })

const client = createClient({
  url: process.env.GRAPH_CMS_ENDPOINT || '',
  exchanges: [cacheExchange, ssrCache, fetchExchange],
  fetchOptions: {
    headers: {
      Authorization: `Bearer ${process.env.GRAPH_CMS_TOKEN}`
    }
  }
});

export { client, ssrCache }