<template>
  <div class="row gap-5 card-container justify-content-center">
    <div class="card" v-for="item in menClothes">
      <img :src="item.url" class="card-img-top" style="width: 100%" alt="ERR" />
      <div class="card-body d-flex flex-column justify-content-between">
        <h3 class="card-title">{{ item.name }}</h3>
        <hr />
        <p class="card-text">{{ item.desc }}</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="pricetag">
            <h4>{{ item.price }}$</h4>
          </div>
          <button @click="addToCart(item)" class="buyButton">
            <span><i class="fa fa-solid fa-cart-shopping"></i>Buy</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    addToCart: {
      type: Function,
      required: true,
    },
  },
  methods: {
    handleAddToCart(item) {
      this.addToCart(item);
    },
  },
  data() {
    return {
      menClothes: [
        {
          name: "Inlet Knit Blazer",
          desc: "This textured knit blazer is crafted from sustainable fibers for a smart and polished vibe.",
          url: "./src/images/Men's apparel/f9be2125-9924-447d-bdbe-fbefaa0232f2.png",
          price: 140,
        },
        {
          name: "Tech Fleece Joggers",
          desc: "These clean, classic joggers that feature soft fleece on both sides are designed with articulation at the knees for a polished look.",
          url: "./src/images/Men's apparel/85d7437d-951e-4ab7-bfa3-76148f9e7b2e.png",
          price: 75,
        },
        {
          name: "Meta Pants",
          desc: "Be a peak performer in these sleek moisture-wicking pants styled with antiodor technology to keep up with all of your day's activities.",
          url: "./src/images/Men's apparel/8c153e9f-55df-46be-bb00-6749b920fb6d.png",
          price: 90,
        },
        {
          name: "Lowerdale Quilted Jacket",
          desc: "This sleek, box-quilted jacket is a layering essential for the season and offers warmth, versatility and style.",
          url: "./src/images/Men's apparel/3d13bd6e-7d14-49ad-902e-918a3cc6c487.png",
          price: 135,
        },
        {
          name: "Broken Twill Hoodie",
          desc: "Knit with fine stripes reminiscent of classic twill, this hoodie has an indulgently soft feel and a simple style perfect for adding to any look.",
          url: "./src/images/Men's apparel/6b63fab5-87cb-4fe6-abbb-d8fa16de1f2a.png",
          price: 100,
        },
        {
          name: "Everett Sueded Stretch Sateen Slim Straight Leg Pants",
          desc: "Go casual or more polished with straight-leg pants crafted from sueded cotton sateen that feels super soft and comfortably stretchy.",
          url: "./src/images/Men's apparel/4a653e56-a777-4d44-ae66-87354f14966a.png",
          price: 110,
        },
        {
          name: "Longbush Wool Blend Jacket",
          desc: "Inspired by a classic blazer, this wool-blend jacket features a smartly notched collar and a snap placket adding an extra layer of coverage over the zipper.",
          url: "./src/images/Men's apparel/ad565f0e-4424-490b-bc7f-3840950c7ad4.png",
          price: 90,
        },
        {
          name: "Hayes Textured Knit Button-Up Shirt",
          desc: "A richly textured knit keeps things cool on so many levels in this button-up cut for a fit that's as ready to relax as you are.",
          url: "./src/images/Men's apparel/81165dd4-5adc-4bbb-81ac-fee5fa2a3a9c.png",
          price: 210,
        },
        {
          name: "Assorted 6-Pack Everyday Plush Cushion Crew Training Socks",
          desc: "Sweat-wicking Dri-FIT knit with breathable mesh at the top of the foot and a fit-enhancing arch band ensure cool comfort in these cushioned crew socks.",
          url: "./src/images/Men's apparel/1479b946-173b-4b71-89e8-f2a234c44069.png",
          price: 15,
        },
      ],
    };
  },
};
</script>
<style scoped>
/* PriceTag */
.pricetag {
  white-space: nowrap;
  position: relative;
  margin: 0 4px 0 8px;
  display: inline-block;
  height: 27px;
  border-radius: 0 5px 5px 0;
  padding: 0 25px 0 15px;
  background: #000000;
  border: 0 solid #000000;
  border-top-width: 1px;
  border-bottom-width: 2px;
  color: #ffffff;
  line-height: 24px;
}
.pricetag:before {
  position: absolute;
  content: "\25CF";
  color: white;
  text-shadow: 0 0 1px #000000;
  font-size: 10px;
  line-height: 0px;
  text-indent: 12px;
  left: -15px;
  width: 1px;
  height: 0px;
  border-right: 14px solid #000000;
  border-top: 13px solid transparent;
  border-bottom: 13px solid transparent;
}
/* Button */
button {
  align-items: center;
  background-image: linear-gradient(
    144deg,
    rgb(248, 93, 124),
    rgb(72, 173, 255)
  );
  border: 0;
  border-radius: 8px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  box-sizing: border-box;
  color: #ffffff;
  display: flex;
  font-family: Phantomsans, sans-serif;
  font-size: 20px;
  justify-content: center;
  line-height: 1em;
  max-width: 100%;
  min-width: 140px;
  padding: 3px;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  cursor: pointer;
}

button:active,
button:hover {
  outline: 0;
}

button span {
  background-color: #000000;
  padding: 16px 24px;
  border-radius: 6px;
  width: 100%;
  height: 100%;
  transition: 300ms;
}

button:hover span {
  background: none;
}

hr {
  border: 1px solid black;
  margin: 0;
}
/* Card */
.card {
  width: 25rem;
  height: 40rem;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 15px 40px 4px;
}
.card-container {
  width: 100vw;
  height: fit-content;
  position: relative;
  top: 10rem;
  .card-body {
    h3 {
      font-family: "Times New Roman", Times, serif;
      font-weight: bold;
    }
    p {
      font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
        "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
      font-style: italic;
    }
    h4 {
      font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
      font-weight: bold;
    }
  }
}
.card-img-top {
  height: 50%;
  object-fit: contain;
  padding: 10px;
  box-shadow: inset rgba(0, 0, 0, 0.3) 0px 0px 8px 4px;
  margin-top: 8px;
}
</style>
