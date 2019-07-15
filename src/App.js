import React, { Component } from "react";
import Editor from "./components/textEditor/Editor";
import SideNav from "./components/sideNav/SideNav";
import SideNavItem from "./components/sideNavItem/SideNavItem";
import "./App.css";

const firebase = require("firebase");

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedNoteIndex: null,
      selectedNote: null,
      notes: null
    };
  }

  render() {
    return (
      <div className="app-container">
        <SideNav
          selectedNoteIndex={this.state.selectedNoteIndex}
          notes={this.state.notes}
        />
        <Editor />
      </div>
    );
  }

  componentDidMount = () => {
    firebase
      .firestore()
      .collection("notes")
      .onSnapshot(serverUpdate => {
        const notes = serverUpdate.docs.map(_doc => {
          const data = _doc.data();
          data["id"] = _doc.id;
          return data;
        });
        console.log(notes);
        this.setState({ notes: notes });
      });
  };
  selectNote = (note, index) =>
    this.setState({ selectedNoteIndex: index, selectedNote: note });
    newNote = async (title) => {
      const note = {
        title: title,
        body: ''
      };
      const newFromDB = await firebase
        .firestore()
        .collection('notes')
        .add({
          title: note.title,
          body: note.body,
          timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
      const newID = newFromDB.id;
      await this.setState({ notes: [...this.state.notes, note] });
      const newNoteIndex = this.state.notes.indexOf(this.state.notes.filter(_note => _note.id === newID)[0]);
      this.setState({ selectedNote: this.state.notes[newNoteIndex], selectedNoteIndex: newNoteIndex });
    }
    deleteNote = async (note) => {
      const noteIndex = this.state.notes.indexOf(note);
      await this.setState({ notes: this.state.notes.filter(_note => _note !== note) });
      if(this.state.selectedNoteIndex === noteIndex) {
        this.setState({ selectedNoteIndex: null, selectedNote: null });
      } else {
        this.state.notes.length > 1 ?
        this.selectNote(this.state.notes[this.state.selectedNoteIndex - 1], this.state.selectedNoteIndex - 1) :
        this.setState({ selectedNoteIndex: null, selectedNote: null });
      }
}
