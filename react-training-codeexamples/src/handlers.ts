//Test with MSW
import { http } from "msw";

export const handlers = [
  http.get('https://api.itbook.store/1.0/new', (req, res, ctx) => {
    return res(
      ctx.json({
        books: [
            {
              "title": "An Introduction to C & GUI Programming, 2nd Edition",
              "subtitle": "",
              "isbn13": "9781912047451",
              "price": "$12.94",
              "image": "https://itbook.store/img/books/9781912047451.png",
              "url": "https://itbook.store/books/9781912047451"
            },
            {
              "title": "Snowflake: The Definitive Guide",
              "subtitle": "Architecting, Designing, and Deploying on the Snowflake Data Cloud",
              "isbn13": "9781098103828",
              "price": "$58.90",
              "image": "https://itbook.store/img/books/9781098103828.png",
              "url": "https://itbook.store/books/9781098103828"
            },
            {
              "title": "Python for Data Analysis, 3rd Edition",
              "subtitle": "Data Wrangling with pandas, NumPy, and Jupyter",
              "isbn13": "9781098104030",
              "price": "$34.96",
              "image": "https://itbook.store/img/books/9781098104030.png",
              "url": "https://itbook.store/books/9781098104030"
            }
        ],
      })
    );
  }),
];
