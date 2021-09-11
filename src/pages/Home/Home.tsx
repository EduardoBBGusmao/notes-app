import React, { useState } from "react";
import NotesList from "../../components/NotesList/NotesList";
import {
  Nav,
  Title,
  Body,
  Container,
  ExpandedNotebook,
  ExpandedNote,
  ContainerHeader,
  Close,
  AddNote,
} from "./styled";

export default function Home() {
  const [expand, setExpand] = useState(false);
  const [notesList, setNotesList] = useState([1, 2, 3, 4, 5]);

  const handleExpand = () => {
    setExpand(true);
  };

  const handleCollapse = () => {
    setExpand(false);
  };

  const handleAddNote = () => {
    setNotesList((prevState: number[]) => [
      ...prevState,
      prevState[prevState.length - 1] + 1,
    ]);
  };
  return (
    <>
      <Nav>
        <Title>Notes App</Title>
      </Nav>
      <Body>
        {expand ? (
          <ExpandedNotebook>
            <ContainerHeader>
              <Title>Notebook 1</Title>
              <Close onClick={handleCollapse}>CLOSE</Close>
            </ContainerHeader>
            {notesList.map((notebooks, i) => (
              <div key={i} onClick={handleExpand}>
                <ExpandedNote />
              </div>
            ))}
            <AddNote onClick={handleAddNote}>Adicionar</AddNote>
          </ExpandedNotebook>
        ) : (
          <Container>
            {[1, 2, 3].map((notebooks, i) => (
              <div key={i} onClick={handleExpand}>
                <NotesList />
              </div>
            ))}
          </Container>
        )}
      </Body>
    </>
  );
}
