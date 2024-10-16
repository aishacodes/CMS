import request from "supertest";
import app from "..";

import { mockCourses } from "./mockData";
import { addCoursesToFile, getCousesFromFile } from "../utils/helpers";

jest.mock("../utils/helpers.ts");

const server = app.listen(4002);

describe("Courses API ", () => {
  beforeEach(() => {
    (getCousesFromFile as jest.Mock).mockResolvedValue(mockCourses);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("GET /courses - should get all courses", async () => {
    const response = await request(app).get("/api/courses");
    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockCourses);
  });

  it("GET /courses/:id - should return a course that matches the given ID", async () => {
    const response = await request(app).get("/api/courses/1");
    expect(response.status).toBe(200);
    expect(response.body.title).toBe("Introduction to Web Development");
  });

  it("GET /courses/:id - should return 404 for a non-existing course ID", async () => {
    const response = await request(app).get("/api/courses/999");
    expect(response.status).toBe(404);
    expect(response.body.message).toBe("Course not found");
  });

  it("GET /courses/:id -  should return 400 for an invalid course ID", async () => {
    const response = await request(app).get("/api/courses/invalid-id");
    expect(response.status).toBe(400);
    expect(response.body.message).toBe("Invalid course ID");
  });

  it("POST /courses - should create a new course", async () => {
    const newCourse = {
      title: "New Course",
      description: "A new course description.",
      modules: [
        {
          title: "HTML Basics",
          lessons: [
            {
              title: "Working with Forms",
              description: "Create and style HTML forms",
              topics: ["Form elements", "Input types", "Form validation"],
              content: [
                {
                  type: "text",
                  data: "HTML forms are used to collect user input. Learn how to create effective and accessible forms.",
                },
              ],
            },
          ],
        },
      ],
    };

    (addCoursesToFile as jest.Mock).mockResolvedValue(undefined);
    const res = await request(app).post("/api/courses").send(newCourse);
    expect(res.status).toBe(201);
    expect(res.body.message).toEqual("Course created succcessfully");
    expect(addCoursesToFile).toHaveBeenCalled();
  });

  it("PATCH /courses/:id - should update an existing course", async () => {
    const updatedCourse = { ...mockCourses[0], title: "Advanced HTML" };
    (addCoursesToFile as jest.Mock).mockResolvedValue(undefined);
    const res = await request(app).patch("/api/courses/1").send(updatedCourse);
    expect(res.status).toBe(200);
    expect(res.body.course).toMatchObject(updatedCourse);
    expect(addCoursesToFile).toHaveBeenCalled();
  });

  it("PATCH /courses/:id - should return 404 for a non-existing course ID", async () => {
    const response = await request(app).get("/api/courses/999");
    expect(response.status).toBe(404);
    expect(response.body.message).toBe("Course not found");
  });

  it("DELETE /courses/:id - should delete a specific course", async () => {
    const response = await request(app).delete("/api/courses/1");
    expect(response.status).toBe(204);
  });

  afterAll(() => {
    server.close();
  });
});
