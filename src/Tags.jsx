import Badge from "react-bootstrap/Badge";

function Tags(props) {
  return (
        <Badge className="badgesBig" bg={props.bg}>{props.raza}</Badge>
  );
}

export default Tags;
