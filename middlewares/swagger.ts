export const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Course management system",
      version: "1.0.0",
      description: "API for managing courses, modules, and lessons",
    },
    servers: [
      {
        url: `http://localhost:3001/api`,
      },
    ],
    components: {
      schemas: {
        Course: {
          type: "object",
          properties: {
            id: {
              type: "integer",
              example: 1,
            },
            title: {
              type: "string",
              example: "Introduction to Web Development",
            },
            description: {
              type: "string",
              example:
                "Learn the fundamentals of web development, covering HTML, CSS, and JavaScript.",
            },
            modules: {
              type: "array",
              items: {
                $ref: "#/components/schemas/Module",
              },
            },
          },
        },
        Module: {
          type: "object",
          properties: {
            title: {
              type: "string",
              example: "HTML Basics",
            },
            lessons: {
              type: "array",
              items: {
                $ref: "#/components/schemas/Lesson",
              },
            },
          },
        },
        Lesson: {
          type: "object",
          properties: {
            title: {
              type: "string",
              example: "Understanding HTML Structure",
            },
            description: {
              type: "string",
              example: "Learn about HTML tags and document structure",
            },
            topics: {
              type: "array",
              items: {
                type: "string",
                example: "HTML tags",
              },
            },
            content: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  type: {
                    type: "string",
                    example: "text",
                  },
                  data: {
                    type: "string",
                    example:
                      "HTML is the standard markup language for documents designed to be displayed in a web browser.",
                  },
                },
              },
            },
          },
        },
      },
    },
  },

  apis: ["./routes/*.ts"],
};
