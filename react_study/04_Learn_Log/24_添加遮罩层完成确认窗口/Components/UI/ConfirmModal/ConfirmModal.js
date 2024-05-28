import BackDrop from "../BackDrop/BackDrop";
import Card from "../Card/Card";

const ConfirmModal = (props) => {
  return (
    <BackDrop>
      <Card className="confirmModal">
        <div className="confirmText">
          <p>{props.confirmText}</p>
        </div>
        <div className="confirmButton">
          <button className="okButton" onClick={props.onOk}>
            确认
          </button>
          <button onClick={props.onCancel}>取消</button>
        </div>
      </Card>
    </BackDrop>
  );
};

export default ConfirmModal;
