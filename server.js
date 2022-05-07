const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config({ path: './config.env' });

mongoose
  .connect(process.env.DATABASE_LOCAL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('Db connected successful'))
  .catch((err) => {
    console.log(err);
  });

const app = require('./app');
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`app is running on port ${port}...`);
});
