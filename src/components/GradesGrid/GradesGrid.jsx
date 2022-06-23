import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import groupBy from 'helpers/groupBy';

const GradesGrid = ({ grades }) => {
  const getGradeInfo = () => {
    const groupedGrades = groupBy(grades, (grade) => grade.subject_id);

    return groupedGrades.map((gradeGroup) => {
      const subjectName = gradeGroup[0].subjectName;

      return (
        <div key={uuidv4()}>
          <div className="grades-grid__subject">{subjectName}</div>
          <div className="grades-grid__grades-wrapper">
            {gradeGroup.map(({ id, grade }) => (
              <div className="grades-grid__grade" data-grade={grade} key={id}>
                {grade}
              </div>
            ))}
          </div>
        </div>
      );
    });
  };

  if (!grades.length) return;

  return (
    <section className="grades-grid">
      <h3 className="grades-grid__title">Oceny</h3>
      {getGradeInfo()}
    </section>
  );
};

GradesGrid.propTypes = {
  grades: PropTypes.array,
};

GradesGrid.defaultProps = {
  grades: [],
};

export default GradesGrid;
