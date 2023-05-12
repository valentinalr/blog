require("dotenv").config();

async function runAllSeeders() {
  await require("./authorSeeder")();
  await require("./articleSeeder")();
}

runAllSeeders();
