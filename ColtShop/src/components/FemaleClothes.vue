<template>
  <div class="row gap-5 card-container justify-content-center">
    <div class="card" v-for="item in womenClothes">
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

@media only screen and (max-width: 600px) {
  .card-container {
    top: 25rem;
  }
}

@keyframes moveLeft {
  to {
    transform: translateX(0);
  }
}
</style>

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
      womenClothes: [
        {
          name: "Total Eclipse Oversize T-Shirt",
          desc: "Exposed seaming highlights the exaggerated oversized fit of this T-shirt cut from a soft cotton knit with a pleasing ribbed texture.",
          url: "./src/images/Women's apparel/8b6a1338-5cdc-417b-b1e2-6598da79b5bc.png",
          price: 60,
        },
        {
          name: "Beaded Mesh Midi Cocktail Dress",
          desc: "Deco-inspired twinkling beads cover this tulle dress that will have you looking positively radiant at your next event.",
          url: "./src/images/Women's apparel/807c0748-4960-4ab2-a42e-1994d44bd990.png",
          price: 150,
        },
        {
          name: "Bonney Bow Oversize Hoodie",
          desc: "Sweet and cozy, this bow-detailed hoodie features a relaxed, slouchy fit with dropped shoulders and a soft cotton-blend fabrication that'll keep you ultracomfy.",
          url: "./src/images/Women's apparel/0f974fd2-0a6e-4ea6-aaaf-d2bd792a21ef.png",
          price: 85,
        },
        {
          name: "Heart Pattern Intarsia Sweater",
          desc: "Intarsia hearts level up the playfulness of this cozy and cute crewneck sweater knit with a slouchy fit.",
          url: "./src/images/Women's apparel/d362450c-487a-458b-80d1-557fed47e506.png",
          price: 90,
        },
        {
          name: "Marilyn Straight Leg Jeans",
          desc: "Soft, stretchy straight-leg jeans create a streamlined silhouette and feature exclusive lift-tuck technology to help flatten the tummy and lift the rear.",
          url: "./src/images/Women's apparel/8fb26727-96cf-4ffc-bfa1-7f512f52c7ed.png",
          price: 60,
        },
        {
          name: "Sequin Keyhole Neck Blouse",
          desc: "Glittery allover sequins enliven this night-out top designed with three-quarter sleeves and airy keyhole necklines.",
          url: "./src/images/Women's apparel/e1f5573e-b298-4d55-b9f8-abe64d4dde64.png",
          price: 100,
        },
        {
          name: "Quilted Front Jacket",
          desc: "Crisp stripes lend a collegiate vibe to this sporty jacket designed to give your cool-weather look a fresh upgrade while keeping you cozy on all your outings.",
          url: "./src/images/Women's apparel/cbfd0863-3778-4904-94a2-9d50a13705bf.png",
          price: 110,
        },
        {
          name: "Hailee Waffle Stitch Cardigan & Pants",
          desc: "Be ready for lounging or a quick jaunt to the coffee shop in this matching cardi-and-pants set knit in a cozy waffle stitch.",
          url: "./src/images/Women's apparel/334b5ea6-742a-4235-be84-899e92188d35.png",
          price: 90,
        },
        {
          name: "Runway Pattern Leggings",
          desc: "Make a bold statement this season in these leggings featuring an eye-catching pattern and mock front pockets.",
          url: "./src/images/Women's apparel/58d0fef7-76c2-45c4-9aab-865c959e5e7d.png",
          price: 85,
        },
      ],
    };
  },
};
</script>
