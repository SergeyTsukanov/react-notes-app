import { v4 as uuidv4 } from "uuid";
import { notesState } from "./types";
import { Reducer } from "react";

enum Categories {
  TASK = "Task",
  IDEA = "Idea",
  RANDTHOUGHT = "Random thought",
}


enum noteActionType {
  CreateNote,
  RemoveNote,
  UpdateNote,
}
const initialState:notesState = { notes: [
    {
      id: uuidv4(),
      name: "Simple Idea",
      created: new Date(),
      category: Categories.TASK,
      content: "Go to the park at 11/07/2023 ",
      isArchive: false,
      dates: "Go to the park at 11/07/2023",
    },
    {
      id: uuidv4(),
      name: "learn React",
      created: new Date(),
      category: Categories.IDEA,
      content: "build task notes app",
      isArchive: false,
      dates: "build task notes app",
    },
    {
      id: uuidv4(),
      name: "learn Contenx API",
      created: new Date(),
      category: Categories.RANDTHOUGHT,
      content: "For better understanding react",
      isArchive: false,
      dates: "For better understanding react",
    },
    {
      id: uuidv4(),
      name: "Firefox",
      created: new Date(),
      category: Categories.TASK,
      content: "Install new version of Firefox",
      isArchive: false,
      dates: "Install new version of Firefox",
    },
    {
      id: uuidv4(),
      name: "Sopping list",
      created: new Date(),
      category: Categories.IDEA,
      content: "tomato,bread",
      isArchive: false,
      dates: "tomato,bread",
    },
    {
      id: uuidv4(),
      name: "Books",
      created: new Date(),
      category: Categories.RANDTHOUGHT,
      content: "The Lean Startup",
      isArchive: false,
      dates: "The Lean Startup",
    },
    {
      id: uuidv4(),
      name: "newFeature",
      created: new Date(),
      category: Categories.IDEA,
      content:
        "I’m gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021",
      isArchive: false,
      dates:
        "I’m gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021",
    },
  ]
}
type noteAction = { type: noteActionType; payload?: object };
const notesReducer:Reducer<notesState,noteAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case noteActionType.CreateNote: {
      return { ...state };
    }
    default:
      return state;
  }
};

export default notesReducer;
