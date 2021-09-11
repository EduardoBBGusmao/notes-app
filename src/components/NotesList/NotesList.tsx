import React from "react";
import NoteMini from "../NoteMini/NoteMini";
import { ListContianer, Notebook } from "./styled";

export default function NotesList() {
  return (
    <Notebook>
      <ListContianer>
        {[1, 2, 3, 4, 5].map((notebook, i) => (
          <NoteMini key={i} />
        ))}
      </ListContianer>
    </Notebook>
  );
}
