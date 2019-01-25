import React from "react";

const ApprovalCard = props => {
  //child component of ApprovalCard component
  const { children } = props;
  return (
    <div className="ui card">
      <div className="content">{children}</div>
      <div className="extra content">
        <div className="ui two buttons">
          <div className="ui basic green button">Approve</div>
          <div className="ui basic red button">Reject</div>
        </div>
      </div>
    </div>
  );
};
export default ApprovalCard;
