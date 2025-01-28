<template>
  <div class="row gap-5 card-container justify-content-center">
    <div class="card" v-for="item in womenAccessories">
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
      womenAccessories: [
        {
          name: "Tissue Weight Wool & Cashmere Scarf",
          desc: "Long fringe tips a tissue-weight scarf woven in a soft blend of wool and cashmere.",
          url: "./src/images/Women's accessories/ea0dca18-2a62-496d-9865-5e6197085a04.png",
          price: 40,
        },
        {
          name: "Cassandre Matelassé Leather Wallet on a Chain",
          desc: "A polished monogram and exquisite matelassé stitching elevate a clutch-sized wallet equipped with a removable chain strap for day-to-night versatility.",
          url: "./src/images/Women's accessories/693f9507-09c1-4b79-b95c-baddb4a2f148.png",
          price: 300,
        },
        {
          name: "54mm Cat Eye Sunglasses",
          desc: "Signature logo accents make a statement at the temples of Italian-made sunglasses fashioned in a retro cat-eye silhouette.",
          url: "./src/images/Women's accessories/331258f5-40a5-4db0-a6ee-184b6f7f36f3.png",
          price: 35,
        },

        {
          name: "Solid Triple Wrap Ring",
          desc: "The Adina Eden Solid Triple Wrap Ring is a bold and modern piece, crafted from durable brass and plated with luxurious 14K gold.",
          url: "./src/images/Women's accessories/a6d8da7f-76a3-40e4-982b-48493457a202.png",
          price: 75,
        },
        {
          name: "Sculpted Cable Heart Locket, 23mm",
          desc: "Keep your most precious photo right at your heart with this beautiful locket done in the label's signature cable design.",
          url: "./src/images/Women's accessories/e8b94972-dff5-4e8d-9e5c-7de7f2177a2b.png",
          price: 45,
        },
        {
          name: "Large Le Pliage Tote",
          desc: "Smooth, sleek nylon and embossed leather trim make this spacious tote a no-brainer for everyday versatility and elegance.",
          url: "./src/images/Women's accessories/f24d079f-0af7-44c3-abf4-e8865667ab4b.png",
          price: 120,
        },
        {
          name: "Hand-Painted Monarch Butterfly Claw Clip",
          desc: "Bring the beauty of nature to your 'do with this hand-painted butterfly jaw clip in a double-sided design that looks great from every angle.",
          url: "./src/images/Women's accessories/f0044863-b9d1-4977-8cd4-323f4692204b.png",
          price: 25,
        },
        {
          name: "Premium Surf Straw Panama Hat",
          desc: "A smart grosgrain band surrounds the crown of this classic Panama hat crafted from sunflower leaf straw and styled with a wide, shade-providing brim.",
          url: "./src/images/Women's accessories/19c91114-4ec0-4f8f-8b5f-7f1d97b9fd42.png",
          price: 35,
        },
        {
          name: "Gold Mood Ring - Mood Ring",
          desc: "We know feelings are tough, so express yourself with this stylish, gold-dipped mood ring.",
          url: "./src/images/Women's accessories/accdd262-d053-4d63-ae43-093c8329b6a9.png",
          price: 50,
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
