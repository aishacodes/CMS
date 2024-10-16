import request from "supertest";
import app from "../";

import { lessons } from "./mockData";
import { addLessonsToFile, getLessonsFromFile } from "../utils/helpers";

jest.mock("../utils/helpers.ts");

const server = app.listen(4001);

describe("Lesson API Endpoints", () => {
  beforeEach(() => {
    (getLessonsFromFile as jest.Mock).mockResolvedValue(lessons);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("GET /lessons should return all lessons", async () => {
    const res = await request(app).get("/api/lessons");
    expect(res.status).toBe(200);
    expect(res.body).toEqual(lessons);
  });

  it("GET /lessons/:id should return a lesson by ID", async () => {
    const res = await request(app).get("/api/lessons/1");
    expect(res.status).toBe(200);
    expect(res.body).toEqual(lessons[0]);
  });
  it("should return 404 for a non-existing course ID", async () => {
    const response = await request(app).get("/api/lessons/999");
    expect(response.status).toBe(404);
    expect(response.body.message).toBe("Lesson not found");
  });

  it("should return 400 for an invalid course ID", async () => {
    const response = await request(app).get("/api/lessons/invalid-id");
    expect(response.status).toBe(400);
    expect(response.body.message).toBe("Invalid lesson ID");
  });

  it("POST /lessons should create a new lesson", async () => {
    const newLesson = {
      title: "CSS Selectors",
      description: "Learn CSS selectors and properties.",
      topics: ["Selectors", "Properties"],
      content: [],
    };
    (addLessonsToFile as jest.Mock).mockResolvedValue(undefined);
    const res = await request(app).post("/api/lessons").send(newLesson);
    expect(res.status).toBe(201);
    expect(res.body.message).toEqual("Lesson created succcessfully");
    expect(addLessonsToFile).toHaveBeenCalled();
  });

  it("PATCH /lessons/:id should update an existing lesson", async () => {
    const updatedLesson = { ...lessons[0], title: "Advanced HTML" };
    (addLessonsToFile as jest.Mock).mockResolvedValue(undefined);
    const res = await request(app).patch("/api/lessons/1").send(updatedLesson);
    expect(res.status).toBe(200);
    expect(res.body.lesson).toMatchObject(updatedLesson);
    expect(addLessonsToFile).toHaveBeenCalled();
  });

  it("DELETE /lessons/:id should delete a lesson", async () => {
    (addLessonsToFile as jest.Mock).mockResolvedValue(undefined);
    const res = await request(app).delete("/api/lessons/1");
    expect(res.status).toBe(204);
    expect(addLessonsToFile).toHaveBeenCalled();
  });

  afterAll(() => {
    server.close();
  });
});
