// server/getToken.js
const axios = require("axios");

const getToken = async () => {
  try {
    const res = await axios.post("http://20.244.56.144/evaluation-service/auth", {
      email: "rchaudhary_me24@thapar.edu",
      name: "Riya Chaudhary",
      rollNo: "8024320085",
      accessCode: "XryeHD",
      clientID: "d9cbb699-6a27-44a5-8d59-8b1befa816da",
      clientSecret: "tVJaaaRBSeXcRXEM"
    });


    console.log("✅ Token received:");
    console.log(res.data);
  } catch (error) {
    console.error("❌ Failed to get token:", error.response?.data || error.message);
  }
};

getToken();
