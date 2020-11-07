import express from "express";
import { router as RouterMedic } from "./medic/infraestructure/medic.routes";

const app = express();

app.use("/medics", RouterMedic);

/* app.get("/", (request, response) => {
  response.send("Call to method get");
});

app.get("/users", (request, response) => {
  response.json([{ user: "user01" }, { user: "user02" }]);
});
 */
export default app;
