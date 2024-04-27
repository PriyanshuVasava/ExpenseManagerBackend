const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = 4000;


//Database connection...
var db = mongoose.connect("mongodb://127.0.0.1:27017/ExpManager");
db.then(()=>{
    console.log("connected to database");
}).catch((err) => {
    console.log("database connection error :", err);
});


//configuration
app.use(express.json()); //to accept data in json formate from the body of the request
app.use(cors()); //to enable data exchange betweem two different PORTS in localhost


//Require all Routes here...
const accountRoutes = require("./Routes/AccountRoutes");
const categoryRoutes = require("./Routes/CategoryRoutes");
const currencyTypeRoutes = require("./Routes/CurrencyTypeRoutes");
const payeeRoutes = require("./Routes/PayeeRoutes");
const paymentTypeRoutes = require("./Routes/PaymentTypeRoutes");
const roleRoutes = require("./Routes/RoleRoutes");
const subCategoryRoutes = require("./Routes/SubCategoryRoutes");
const transactionRoutes = require("./Routes/TransactionRoutes");
const transactionTypeRoutes = require("./Routes/TransactionTypeRoutes");
const userRoutes = require("./Routes/UserRoutes");
const mailRoutes = require("./Routes/MailRoutes");
const goalRoutes = require("./Routes/ExpenseGoalRoutes");


//Provide Routes to the server...
app.use("/account", accountRoutes);
app.use("/category", categoryRoutes);
app.use("/currencyType", currencyTypeRoutes);
app.use("/payee", payeeRoutes);
app.use("/paymentType", paymentTypeRoutes);
app.use("/role", roleRoutes);
app.use("/subCategory", subCategoryRoutes);
app.use("/transaction", transactionRoutes);
app.use("/transactionType", transactionTypeRoutes);
app.use("/user", userRoutes);
app.use("/mail", mailRoutes);
app.use("/goal", goalRoutes)


//Server establishment...
app.listen(PORT, () => {
    console.log(`server is active at port ${PORT}`);
});