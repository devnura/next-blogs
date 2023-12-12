export type FormInputPost = {
  title: string;
  content: string;
  tagId: string;
};

export type Response = {
  status: boolean;
  code: number;
  message: string;
  data: any;
};
