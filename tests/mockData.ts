export const mockCourses = [
  {
    id: 1,
    title: "Introduction to Web Development",
    description:
      "Learn the fundamentals of web development, covering HTML, CSS, and JavaScript.",
    modules: [
      {
        title: "HTML Basics",
        lessons: [
          {
            title: "Understanding HTML Structure",
            description: "Learn about HTML tags and document structure",
            topics: ["HTML tags", "Document structure", "Semantic HTML"],
            content: [
              {
                type: "text",
                data: "HTML (HyperText Markup Language) is the standard markup language for documents designed to be displayed in a web browser.",
              },
              {
                type: "video",
                data: "https://example.com/intro-to-html-video",
              },
            ],
          },
          {
            title: "Working with Forms",
            description: "Create and style HTML forms",
            topics: ["Form elements", "Input types", "Form validation"],
            content: [
              {
                type: "text",
                data: "HTML forms are used to collect user input. Learn how to create effective and accessible forms.",
              },
              {
                type: "audio",
                data: "https://example.com/html-forms-audio",
              },
            ],
          },
        ],
      },
      {
        title: "CSS Fundamentals",
        lessons: [
          {
            title: "CSS Selectors and Properties",
            description: "Master CSS selectors and common properties",
            topics: ["Selectors", "Box model", "Colors and typography"],
            content: [
              {
                type: "text",
                data: "CSS (Cascading Style Sheets) is used to style and layout web pages.",
              },
              {
                type: "video",
                data: "https://example.com/css-selectors-video",
              },
            ],
          },
        ],
      },
    ],
  },
];

export const modules = [
  {
    id: 1,
    title: "HTML Basics",
    lessons: [
      {
        title: "Understanding HTML Structure",
        description: "Learn about HTML tags and document structure",
        topics: ["HTML tags", "Document structure", "Semantic HTML"],
        content: [
          {
            type: "text",
            data: "HTML (HyperText Markup Language) is the standard markup language for documents designed to be displayed in a web browser.",
          },
          {
            type: "video",
            data: "https://example.com/intro-to-html-video",
          },
        ],
      },
      {
        title: "Working with Forms",
        description: "Create and style HTML forms",
        topics: ["Form elements", "Input types", "Form validation"],
        content: [
          {
            type: "text",
            data: "HTML forms are used to collect user input. Learn how to create effective and accessible forms.",
          },
          {
            type: "audio",
            data: "https://example.com/html-forms-audio",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "CSS Fundamentals",
    lessons: [
      {
        title: "CSS Selectors and Properties",
        description: "Master CSS selectors and common properties",
        topics: ["Selectors", "Box model", "Colors and typography"],
        content: [
          {
            type: "text",
            data: "CSS (Cascading Style Sheets) is used to style and layout web pages.",
          },
          {
            type: "video",
            data: "https://example.com/css-selectors-video",
          },
        ],
      },
    ],
  },
];

export const lessons = [
  {
    id: 1,
    title: "Understanding HTML Structure",
    description: "Learn about HTML tags and document structure",
    topics: ["HTML tags", "Document structure", "Semantic HTML"],
    content: [
      {
        type: "text",
        data: "HTML (HyperText Markup Language) is the standard markup language for documents designed to be displayed in a web browser.",
      },
      {
        type: "video",
        data: "https://example.com/intro-to-html-video",
      },
    ],
  },
  {
    id: 2,
    title: "Working with Forms",
    description: "Create and style HTML forms",
    topics: ["Form elements", "Input types", "Form validation"],
    content: [
      {
        type: "text",
        data: "HTML forms are used to collect user input. Learn how to create effective and accessible forms.",
      },
      {
        type: "audio",
        data: "https://example.com/html-forms-audio",
      },
    ],
  },
];
