import { v4 as uuidv4 } from "uuid";
import { note, notesState } from "./types";
import { Reducer } from "react";
import { AnyAction } from "redux";
import { parseDates } from "../../utils/parseDates";

export enum Categories {
  TASK = "Task",
  IDEA = "Idea",
  RANDTHOUGHT = "Random thought",
}

export enum noteActionType {
  CreateNote = "CreateNote",
  RemoveNote = "RemoveNote",
  UpdateNote = "UpdateNote",
  ToggleArchiveNote = "ToggleArchiveNote",
}
const initialState: notesState = {
  notes: [
    {
      id: uuidv4(),
      name: "Simple Idea",
      created: new Date(),
      category: Categories.TASK,
      content: "Go to the park at 11/07/2023 ",
      isArchive: false,
      dates: parseDates("Go to the park at 11/07/2023"),
    },
    {
      id: uuidv4(),
      name: "learn React",
      created: new Date(),
      category: Categories.IDEA,
      content: "build task notes app",
      isArchive: false,
      dates: parseDates("build task notes app"),
    },
    {
      id: uuidv4(),
      name: "learn Contenx API",
      created: new Date(),
      category: Categories.RANDTHOUGHT,
      content: "For better understanding react",
      isArchive: false,
      dates: parseDates("For better understanding react"),
    },
    {
      id: uuidv4(),
      name: "Firefox",
      created: new Date(),
      category: Categories.TASK,
      content: "Install new version of Firefox",
      isArchive: false,
      dates: parseDates("Install new version of Firefox"),
    },
    {
      id: uuidv4(),
      name: "Sopping list",
      created: new Date(),
      category: Categories.IDEA,
      content: "tomato,bread",
      isArchive: false,
      dates: parseDates("tomato,bread"),
    },
    {
      id: uuidv4(),
      name: "Books",
      created: new Date(),
      category: Categories.RANDTHOUGHT,
      content: "The Lean Startup",
      isArchive: false,
      dates: parseDates("The Lean Startup"),
    },
    {
      id: uuidv4(),
      name: "newFeature",
      created: new Date(),
      category: Categories.IDEA,
      content:
        "I’m gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021",
      isArchive: false,
      dates: parseDates(
        "I’m gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021"
      ),
    },
  ],
};
export const notesReducer: Reducer<notesState, AnyAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case noteActionType.CreateNote: {
      const newNote: note = {
        id: uuidv4(),
        name: action.payload.name,
        category: action.payload.category,
        created: new Date(),
        content: action.payload.content,
        isArchive: false,
        dates: parseDates(action.payload.content),
      };
      return { ...state, notes: [...state.notes, newNote] };
    }
    case noteActionType.UpdateNote: {
      return {
        ...state,
        notes: state.notes.map((note) => {
          if (note.id === action.payload.id) {
            return {
              ...note,
              name: action.payload.name,
              category: action.payload.category,
              content: action.payload.content,
              dates: parseDates(action.payload.content),
            };
          } else {
            return note;
          }
        }),
      };
    }
    case noteActionType.RemoveNote: {
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload),
      };
    }
    case noteActionType.ToggleArchiveNote: {
      return {
        ...state,
        notes: state.notes.map((note) => {
          if (note.id === action.payload) {
            return { ...note, isArchive: !note.isArchive };
          } else {
            return note;
          }
        }),
      };
    }

    default:
      return state;
  }
};
