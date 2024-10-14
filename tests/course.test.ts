import request from "supertest";
import app from "..";

describe("GET /courses", () => {
  it("should get all courses", async () => {
    const response = await request(app).get("/api/courses");
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});

describe("GET /courses/:id", () => {
  it("should return a course that matches the given ID", async () => {
    const response = await request(app).get("/api/courses/1");
    expect(response.status).toBe(200);
    expect(response.body.title).toBe("Introduction to Web Development");
  });

  it("should return 404 for a non-existing course ID", async () => {
    const response = await request(app).get("/api/courses/999");
    expect(response.status).toBe(404);
    expect(response.body.message).toBe("Course not found");
  });

  it("should return 400 for an invalid course ID", async () => {
    const response = await request(app).get("/api/courses/invalid-id");
    expect(response.status).toBe(400);
    expect(response.body.message).toBe("Invalid course ID");
  });
});

describe("POST /courses", () => {
  it("should create a new course", async () => {
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

    const response = await request(app).post("/api/courses").send(newCourse);
    expect(response.status).toBe(201);
    expect(response.body.course.title).toBe(newCourse.title);
  });
});

describe("PATCH /courses/:id", () => {
  it("should update an existing course", async () => {
    const updatedCourse = {
      title: "Updated Course",
      description: "Updated description.",
      modules: [],
    };

    const response = await request(app)
      .patch("/api/courses/1")
      .send(updatedCourse);
    expect(response.status).toBe(200);
    expect(response.body.course.title).toBe(updatedCourse.title);
  });

  it("should return 404 for a non-existing course ID", async () => {
    const response = await request(app).get("/api/courses/999");
    expect(response.status).toBe(404);
    expect(response.body.message).toBe("Course not found");
  });
});

describe("DELETE /courses/:id", () => {
  it("should delete a specific course", async () => {
    const response = await request(app).delete("/api/courses/1");
    expect(response.status).toBe(204);
  });
});
