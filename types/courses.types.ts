export interface IContent {
  type: "text" | "video" | "audio";
  data: string;
}

export interface ILesson {
  title: string;
  description: string;
  topics: string[];
  content: IContent[];
}

export interface IModule {
  title: string;
  lessons: ILesson[];
}

export interface ICourse {
  id: number;
  title: string;
  description: string;
  modules: IModule[];
}
