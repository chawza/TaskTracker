import React, {useState} from 'react';
import PropTypes from 'prop-types';

import './TaskCard.css';

import checkTaskIcon from '../../../statics/imgs/check-task-bttn.png'
import rightArrowIcon from '../../../statics/imgs/right-arrow-icon.png'

const TaskCard = (props) => {
    const { taskData } = props;

    const [cardIsOver, setCardIsOver] = useState(false);

    const groupColor = taskData.group?.color || 'transparent';
    const groupAreaStyle = {backgroundColor: groupColor};
    const TaskDescription = taskData.description;
    let TaskName = taskData.name;
    TaskName = TaskName[0].toUpperCase() + TaskName.slice(1);
        
    return (
      <div className="card-container"
        onMouseOut={() => setCardIsOver(false)}
        onMouseOver={() => setCardIsOver(true)}
      >
        <div className="group-mark" style={groupAreaStyle}>
        </div>

        <div className="card-content">

          <div className="card-meta-area">

          </div>

          <div className="card-body-area">
              <h1 className="card-name" >{ TaskName }</h1>
              {TaskDescription && 
                <div className="card-description-area">
                  <p className="card-description">{ TaskDescription }</p>
                </div>
              }
          </div>

          <div className="card-action-area">
            {cardIsOver && 
              <>
                <img className="task-icon-btn" src={rightArrowIcon} />
                <img className="task-icon-btn" src={checkTaskIcon} />
              </>
            }
          </div>
        </div>
      </div>
    )
}

TaskCard.propTypes = {
    taskData: PropTypes.object
}

export default TaskCard;