<template>
  <v-container class="home-container">
    <div class="left">
      <img
        src="https://res.cloudinary.com/dzffvum1n/image/upload/v1569552077/background-withdesk_lmg1yk.svg"
        alt=""
      />
    </div>
    <div class="right">
      <h1>Bootcamp Prep For Developers!</h1>
      <h5>Coming Soon! Sign up to learn all about it!!!</h5>
      <div class="email-input-wrapper">
        <!-- <input type="email" placeholder="Email" /> -->
        <!-- <button>Submit</button> -->
        <!-- <script
          async
          data-uid="ae03f93c6b"
          src="https://program-with-erik.ck.page/ae03f93c6b/index.js"
        ></script> -->
      </div>
      <div class="info-wrapper">
        <p>
          I will never sell your email! When you join I'll send you some FREE
          resources so you can become a better developer!
        </p>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  components: {}
}
</script>

<style lang="scss">
.home-container {
  display: grid;
  grid-template-columns: 53fr 47fr;
  height: 100vh;
}
.left {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    display: none;
  }
}
.formkit-powered-by {
  display: none !important;
}

.right {
  font-family: 'Barlow Condensed', sans-serif;
  display: flex;
  justify-content: center;
  align-items: end;
  flex-direction: column;
  h1 {
    font-size: 85px;
    margin-left: 40px;
  }
  h5 {
    font-size: 25px;
    margin: 0 0 40px 40px;
  }

  .email-input-wrapper {
    margin-left: 40px;
    margin-bottom: 40px;
    width: 75%;
    min-height: 50px;
    input {
      border-radius: 5px;
      text-indent: 10px;
      font-size: 20px;
      height: 100%;
      width: 35%;
    }
    button {
      all: unset;
      border-radius: 10px;
      background-image: linear-gradient(to right, orange, red);
      text-align: center;
      width: 100px;
      height: 100%;
      color: navajowhite;
    }
  }
  .info-wrapper {
    max-width: 50%;
    margin-left: 40px;
    p {
      color: gray;
    }
  }
}
</style>
