import express from "express";
import { MedicOperation } from "./medic.operation";
import { MedicUseCase } from "../application/medic.usecase";
import { MedicController } from "./medic.controller";
import { Medic } from "../domain/entities/medic.entity";

const medicOperation = new MedicOperation();
const medicUseCase = new MedicUseCase(medicOperation);
const medicController = new MedicController(medicUseCase);

const router = express.Router();

router.get("/", async (req, res) => {
  const result = await medicController.getAll(true);
  /*   res.writeHead(200, {"content-type": "application/json"})
  res.end(JSON.stringify(result)) */
  res.json(result);
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const result = await medicController.getOne(id);
  res.json(result);
});

router.post("/", async (req, res) => {
  const {
    name,
    surname,
    lastname,
    cmp,
    dni,
    email,
    photo,
    locations,
  } = req.body;

  const medic: Medic = {
    name,
    surname,
    lastname,
    cmp,
    dni,
    email,
    photo,
    locations,
    isActive: true,
  };
  const result = await medicController.insert(medic);
  res.json(result);
});

router.put("/:id", async (req, res) => {
  const medic: Medic = req.body;
  const id = req.params.id;
  const result = await medicController.update(id, medic);
  res.json(result);
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const result = await medicController.delete(id);
  res.json(result);
});

export { router };
