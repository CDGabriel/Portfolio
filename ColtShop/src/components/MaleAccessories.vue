<template>
  <div class="row gap-5 card-container justify-content-center">
    <div class="card" v-for="item in menAccessories">
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
      menAccessories: [
        {
          name: "Capucine Bracelet Watch, 36mm",
          desc: "Crystal markers and luminous hands elevate your time-tracking experience in a sleek bracelet watch marked with a signature croc.",
          url: "./src/images/Men's accessories/ee9d30a5-cbe9-4175-a9ef-a1631b1389f7.png",
          price: 250,
        },
        {
          name: "Box Chain Necklace in Silver, 2.7mm",
          desc: "A polished box chain necklace made from sterling silver adds subtle shine to your neckline.",
          url: "./src/images/Men's accessories/1784369e-d254-4b8b-9b02-0d2767e77243.png",
          price: 30,
        },
        {
          name: "Wool & Cashmere Beanie",
          desc: "Breathable wool and soft cashmere bring exceptional warmth and comfort to a beanie styled with a low cuff ringed in traditional ribbing.",
          url: "./src/images/Men's accessories/3c1dafd6-87d9-458f-94f1-8b058ebd3447.png",
          price: 30,
        },
        {
          name: "G-Steel Chronograph Watch, 53.8mm",
          desc: "The G-Steel lineup offers analog chronograph watches with the rugged shock- and water-resistance you've come to expect from G-Shock.",
          url: "./src/images/Men's accessories/643db04a-5525-49ac-8a90-63546f5dd185.png",
          price: 120,
        },
        {
          name: "Wool Blend Adjustable Baseball Cap",
          desc: "Wool-blend felt warms a handsome baseball cap designed in a streamlined silhouette with a conveniently adjustable back strap.",
          url: "./src/images/Men's accessories/d20005c7-9c4f-4c2f-9f3e-1d640a80c7de.png",
          price: 25,
        },
        {
          name: "Lightning Bolt Keeper Leather Belt",
          desc: "A signature lightning bolt stamps the keeper of a handsome leather belt secured by a nickel-plated pin buckle.",
          url: "./src/images/Men's accessories/96af48d2-4f76-40e4-8127-fe346b858ec8.png",
          price: 15,
        },
        {
          name: "Delta ID Lock™ Shielded L-Fold ID Wallet",
          desc: "An ultra-organized wallet is handcrafted from soft full-grain leather with a durable ballistic-nylon spine.",
          url: "./src/images/Men's accessories/04cc2d6a-ebc7-4bbb-8040-d460233da53e.png",
          price: 20,
        },
        {
          name: "The Suede Tortoise Patch Snapback Trucker Hat",
          desc: "Slow down and enjoy the shady comfort of a trucker hat with a tortoise on the crown, a soft microsuede bill and breathable mesh ventilating the back.",
          url: "./src/images/Men's accessories/9f0b7b4a-40ff-474e-bc22-60c3c688f8fa.png",
          price: 50,
        },
        {
          name: "Rhodes Leather Briefcase",
          desc: "Debossed logo detailing and full-grain leather create luxe appeal on a refined briefcase fitted with multiple compartments for organizing your daily essentials.",
          url: "./src/images/Men's accessories/be4a9716-2674-4a8f-9e50-a542974cca7a.png",
          price: 150,
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

@media only screen and (max-width: 600px) {
  .card-container {
    top: 25rem;
  }
}
</style>
