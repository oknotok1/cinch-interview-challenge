import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Button, Card, CardBody } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// UI Exercise: https://cantunsee.space/ - Attempt till Hard only

/**
 * Tasks
 * 1. Add types to the products object to ensure that the properties are always present and of the correct type.
 * 2. Create a card component for the product card & show all 3 products using it. Note: Product data should be passed as props to the card component. Iterating of the products object should be done in the parent component.
 * 3. Update CTA to open link in a new tab
 * 4. Add a useEffect to call the getRecipe function on page load, making use of the axios library to fetch the recipe data from the API. The function just needs to console.log the response data.
 * Endpoint URL: https://api.spoonacular.com/recipes/716429/information?apiKey=18ecbaa6f37b4f2d8df991c236fc7c25
 * 5. Implement jest tests for the getRecipe function
 */

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const products = {
    "sph-sam-gals24ultra-ttg": {
      name: "Samsung Galaxy S21 Ultra",
      price: 1199.99,
      imageUrl:
        "https://d10sa4fpz3p23y.cloudfront.net/public/uploads/sm-s928_galaxys24ultra_devicefront_titaniumgray_231103.png",
      description:
        "The Samsung Galaxy S24 Ultra is the best smartphone you can buy at the moment. It's a big phone with a big price tag to match, but it's also the best of the best. It has a stunning 6.8-inch display, a great camera system, and a long-lasting battery. It's also the first phone to support the S Pen stylus, which is a big deal if you're a fan of the Note series.",
      link: "https://www.samsung.com/sg/smartphones/galaxy-s24-ultra/buy/?cid=sg_pd_ppc_google_galaxy-s24_launch_eureka-la-sem-cpc-exact_Eureka-LA-SEM-CPC-Exact-Ultra-kw=samsung%20s24%20ultra-SESP-HHP-002-004-none-warm_search-text_none_none_lo_pfm&utm_source=google&utm_medium=ppc&utm_campaign=eureka-la-sem-cpc-exact&utm_term=w&utm_content=none&gad_source=1&gclid=CjwKCAjwzN-vBhAkEiwAYiO7oJfdZgxgbaRs1eZGgM_ZOIxT_-zrYXMHaDXFHAAowBrb21u1Sk4TpRoCsjQQAvD_BwE",
    },
    "sph-app-iphone13pro-ttg": {
      name: "Apple iPhone 13 Pro",
      price: 999.99,
      imageUrl:
        "https://cinch-sg-production.s3.ap-southeast-1.amazonaws.com/public/uploads/sph-app-ip15pro/natural_titanium_default.png",
      description:
        "The iPhone 15 is Apple's most advanced model, featuring a faster A17 Pro chip that improves CPU and GPU performance by up to 20% and 40% respectively. Its Super Retina XDR display offers unparalleled brightness and color range, making visuals pop whether you're gaming or watching movies. The upgraded 48-megapixel camera provides enhanced detail and low-light performance. The phone also introduces a Cinematic mode for pro-level video focus shifts. Built for durability, it has a Ceramic Shield front cover and an IP68 water resistance rating. If you want the top-of-the-line iPhone, the 15 is your best option.",
      link: "https://cinch.sg/product/apple-sph-app-ip15pro/?rental_term=12",
    },

    "tab-app-ipadmini6-spg": {
      name: "Apple iPad Mini 6",
      price: 499.99,
      imageUrl:
        "https://cinch-sg-production.s3.ap-southeast-1.amazonaws.com/public/uploads/07b90097-e0ae-4f8f-9454-dc454fe28619.png",
      description:
        "The iPad Mini 6 is a powerful and portable tablet that's perfect for on-the-go productivity and entertainment. It features a stunning 8.3-inch Liquid Retina display, an A15 Bionic chip, and support for the Apple Pencil 2. The iPad Mini 6 also has a USB-C port, Touch ID, and 5G connectivity. It's available in four colors: pink, purple, starlight, and space gray.",
      link: "https://cinch.sg/product/tab-app-ipadmini6c/?rental_term=12",
    },
  };

  return (
    <>
      <Head>
        <title>Cinch Simple Project</title>
        <meta name="description" content="Cinch Simple Project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.main} ${inter.className}`}>
        <h1>Cinch Simple Project</h1>

        <section className={styles.products}>
          <Card>
            <CardBody>
              <Image
                src={products["sph-sam-gals24ultra-ttg"].imageUrl}
                alt="Samsung Galaxy S24 Ultra"
                width={300}
                height={200}
              />
              <h2>{products["sph-sam-gals24ultra-ttg"].name}</h2>
              <p>{products["sph-sam-gals24ultra-ttg"].description}</p>
              <Button
                color="primary"
                href={products["sph-sam-gals24ultra-ttg"].link}
              >
                Buy now
              </Button>
            </CardBody>
          </Card>
        </section>
      </main>
    </>
  );
}
