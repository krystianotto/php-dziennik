import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import groupBy from 'helpers/groupBy';

const GradesGrid = ({ grades }) => {
  console.log(grades);

  const getGradeInfo = () => {
    const groupedGrades = groupBy(grades, (grade) => grade.subject_id);

    return groupedGrades.map((gradeGroup) => {
      const subjectName = gradeGroup[0].subjectName;

      return (
        <div key={uuidv4()}>
          {subjectName}
          <div>
            {gradeGroup.map(({ id, subjectName, grade, weight }) => (
              <span key={id}>{grade}</span>
            ))}
          </div>
        </div>
      );
    });
  };

  if (!grades.length) return;

  return <section>{getGradeInfo()}</section>;
};

GradesGrid.propTypes = {
  grades: PropTypes.array,
};

GradesGrid.defaultProps = {
  grades: [],
};

export default GradesGrid;
