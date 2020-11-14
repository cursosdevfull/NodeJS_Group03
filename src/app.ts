import express from "express";
import { router as RouterMedic } from "./medic/infraestructure/medic.routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/medics", RouterMedic);

/* const autorizacion = (...rolesAllowed) => {
    return (req, res, next) => {
        const roleUser = "OPERATOR"
        if(rolesAllowed.indexOf(roleUser) > -1) {
            return next()
        }

        return res.status(403).send("No tienes los privilegios necesarios")
    }
} */

/* app.get("/medics", 
autorizacion("ADMINISTRATOR","MEDIC"),

(req, res) => {
    res.json([])
})
 */

/* app.get("/", (request, response) => {
  response.send("Call to method get");
});

app.get("/users", (request, response) => {
  response.json([{ user: "user01" }, { user: "user02" }]);
});
 */
export default app;
