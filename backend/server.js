import dotenv from "dotenv";
dotenv.config();

import app from "./src/app.js";
import connection from "./src/config/dbConnect.js";
import PedidoRouters from "./src/routers/PedidoRouters.js";
import RestauranteRouters from "./src/routers/RestauranteRouters.js";
import PratoRouters from "./src/routers/PratoRouter.js";
import BebidaRouters from "./src/routers/BebidaRouters.js"
import CardapioRouters from "./src/routers/CardapioRouters.js";
import FuncionarioRouters from "./src/routers/FuncionarioRouters.js"

//Definição de uma constante para a porta TCP
const PORT = process.env.PORT || 3000;

app.use("/restaurantes", RestauranteRouters);
app.use("/pratos", PratoRouters);
app.use("/bebidas", BebidaRouters);
app.use("/cardapio", CardapioRouters);
app.use("/funcionarios", FuncionarioRouters);
app.use("/pedidos", PedidoRouters);


//Inicialização de um servidor WEB
app.listen(PORT, () => {
    console.log("Servidor inicializado");
});

