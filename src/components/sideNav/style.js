import { textAlign } from "@material-ui/system";

const style = theme => ({
  sidecontainer: {
    marginTop: "0px",
    width: "300px",
    height: "100%",
    boxSizing: "border-box",
    float: "left",
    overflowY: "scroll",
    overflowX: "hidden"
  },
  sideNewbutton: {
    width: "100%",
    textAlign: "center",
    height: "35px",
    borderBottom: "1px solid black",
    borderRadius: "0px",
    backgroundColor: "green",
    color: "white",
    "&:hover": {
      backgroundColor: "#88a2ce"
    }
  }
});
export default style;
