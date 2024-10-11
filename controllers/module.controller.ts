import { Request, Response } from "express";
import { IModule } from "../types/courses.types";
import { addModulesToFile, getModulesFromFile } from "../utils/helpers";

export const getModule = async (_req: Request, res: Response) => {
  const modules = await getModulesFromFile();

  res.status(200).json(modules);
};

export const getModuleById = async (req: Request, res: Response) => {
  const moduleId = Number(req.params.id);

  const modules = await getModulesFromFile();
  const moduleExist = modules.find((module: IModule) => module.id === moduleId);

  if (moduleExist) {
    res.status(200).json(moduleExist);
  } else {
    res.status(404).json({ message: "Module not found" });
  }
};

export const addModule = async (req: Request, res: Response) => {
  const module = req.body;

  const modules = await getModulesFromFile();

  const maxId =
    modules.length > 0
      ? Math.max(...modules.map((n: IModule) => Number(n.id)))
      : 0;

  const newModuleId = maxId + 1;

  modules.push({ id: newModuleId, ...module });
  await addModulesToFile(modules);
  res.status(201).json({
    message: "Module created succcessfully",
    module: { id: newModuleId, ...module },
  });
};

export const deleteModule = async (req: Request, res: Response) => {
  const moduleId = req.params.id;
  let modules = await getModulesFromFile();
  modules = modules.filter((module: IModule) => module.id !== Number(moduleId));
  await addModulesToFile(modules);

  res.status(204).end();
};

export const updateModule = async (req: Request, res: Response) => {
  const moduleId = req.params.id;
  const moduleToUpdate = req.body;

  const modules = await getModulesFromFile();
  const moduleIndex = modules.findIndex(
    (module: IModule) => module.id === Number(moduleId)
  );

  if (moduleIndex !== -1) {
    modules[moduleIndex] = { ...modules[moduleIndex], ...moduleToUpdate };
    await addModulesToFile(modules);
  }
  res.status(201).json({
    message: "Module updated succcessfully",
    module: { ...modules[moduleIndex] },
  });
};
