import request from "supertest";
import { getCousesFromFile } from "../utils/helpers";
import { mockCourses } from "./mockData";
import { getCourseById } from "../controllers/courses.controller";

jest.mock("../data/courses.json");

describe("GET /courses", () => {
  it("should return a course by ID", async () => {
    const req = { params: { id: "1" } } as any;
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    const next = jest.fn();

    await getCourseById(req, res, next);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockCourses[0]);
  });
});
