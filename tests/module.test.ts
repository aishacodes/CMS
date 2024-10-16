import request from "supertest";
import app from "../";
import { addModulesToFile, getModulesFromFile } from "../utils/helpers";
import { modules } from "./mockData";

jest.mock("../utils/helpers.ts");

const server = app.listen(4000);

describe("Module API Endpoints", () => {
  beforeEach(() => {
    (getModulesFromFile as jest.Mock).mockResolvedValue(modules);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("GET /modules should return all modules", async () => {
    const res = await request(app).get("/api/modules");
    expect(res.status).toBe(200);
    expect(res.body).toEqual(modules);
  });

  it("GET /modules/:id should return a module by ID", async () => {
    const res = await request(app).get("/api/modules/1");
    expect(res.status).toBe(200);
    expect(res.body).toEqual(modules[0]);
  });

  it("POST /modules should create a new module", async () => {
    const newModule = {
      title: "JavaScript Basics",
      lessons: [],
    };
    (addModulesToFile as jest.Mock).mockResolvedValue(undefined);
    const res = await request(app).post("/api/modules").send(newModule);
    expect(res.status).toBe(201);
    expect(res.body).toEqual(newModule);
    expect(addModulesToFile).toHaveBeenCalled();
  });

  it("PATCH /modules/:id should update an existing module", async () => {
    const updatedModule = { ...modules[0], title: "HTML & CSS Basics" };
    (addModulesToFile as jest.Mock).mockResolvedValue(undefined);
    const res = await request(app).patch("/api/modules/1").send(updatedModule);
    expect(res.status).toBe(200);
    expect(res.body.module).toEqual(updatedModule);
    expect(addModulesToFile).toHaveBeenCalled();
  });

  it("DELETE /modules/:id should delete a module", async () => {
    (addModulesToFile as jest.Mock).mockResolvedValue(undefined);
    const res = await request(app).delete("/api/modules/1");
    expect(res.status).toBe(204);
    expect(addModulesToFile).toHaveBeenCalled();
  });

  afterAll(() => {
    server.close();
  });
});
