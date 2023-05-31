import axios from "axios";
import cheerio from 'cheerio';

export const sliderItems = [
  {
    id: 1,
    img: "./Laptopy.jpg",
    title: "SUMMER SALE",
    desc: "DON'T DEAL WITH OUR PRICES.",
    bg: "fbf0f4",
  },
  {
    id: 2,
    img: "./Komputery.jpg",
    title: "STOCK CLEARENCE",
    desc: "DON'T DEAL WITH OUR PRICES.",
    bg: "f5fafd",
  },
  {
    id: 3,
    img: "./Drukarki.jpg",
    title: "PRINT CHEAPLY",
    desc: "DON'T DEAL WITH OUR PRICES.",
    bg: "fcf1ed",
  },
];

export const categories = [
  {
    id: 0,
    name: "Laptopy",
    url: 'https://www.x-kom.pl/g-2/c/159-laptopy-notebooki-ultrabooki.html',
    pageCount: 2,
  },
  {
    id: 1,
    name: "Monitory",
    url: 'https://www.x-kom.pl/g-6/c/15-monitory.html',
    pageCount: 2,
  },
  {
    id: 2,
    name: "Telewizory",
    url: 'https://www.x-kom.pl/g-8/c/1117-telewizory.html',
    pageCount: 2,
  },
  {
    id: 3,
    name: "Komputery",
    url: 'https://www.x-kom.pl/g-2/c/175-komputery-stacjonarne.html',
    pageCount: 2,
  },
  {
    id: 4,
    name: "Tablety",
    url: 'https://www.x-kom.pl/g-4/c/1663-tablety.html',
    pageCount: 2,
  },
  {
    id: 5,
    name: "Smartfony",
    url: 'https://www.x-kom.pl/g-4/c/22-smartfony.html',
    pageCount: 2,
  },
  {
    id: 6,
    name: "Drukarki",
    url: 'https://www.x-kom.pl/g-8/c/12-drukarki.html',
    pageCount: 2,
  },
];

export const products = [
  {
    id: 1,
    name: "1",
    price: 10,
    img: "../photo2.jpg",
  },
  {
    id: 2,
    name: "1",
    price: 10,
    img: "../photo2.jpg",
  },
  {
    id: 3,
    name: "1",
    price: 10,
    img: "../photo2.jpg",
  },
  {
    id: 4,
    name: "1",
    price: 10,
    img: "../photo2.jpg",
  },
  {
    id: 5,
    name: "1",
    price: 10,
    img: "../photo2.jpg",
  },
  {
    id: 6,
    name: "1",
    price: 10,
    img: "../photo2.jpg",
  },
  {
    id: 7,
    name: "1",
    price: 10,
    img: "../photo2.jpg",
  },
  {
    id: 8,
    name: "1",
    price: 10,
    img: "../photo2.jpg",
  },
];

export const fetchProductsFromParser = async (urlBase, pageCount) => {
  const div = "//div[@class='sc-1s1zksu-0 dzLiED sc-162ysh3-1 irFnoT']";
  const products = [];

  for (let i = 1; i <= pageCount; i++) {
    const url = `${urlBase}?page=${i}`;

    try {
      const response = await axios.get(url, {
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36',
        },
      });
      const content = response.data;

      const $ = cheerio.load(content);
      const productElements = $(div);

      productElements.each((index, element) => {
        const name = $(element).find('h3').first().text().trim();
        const link = $(element).find('a').first().attr('href');
        const price = $(element)
          .find('span[data-name="productPrice"]')
          .first()
          .text()
          .trim();
        const image = $(element).find('img').first().attr('src');
        products.push({ name, link, price, image });
      });
    } catch (error) {
      console.error(error);
    }
  }

  return products;
};
