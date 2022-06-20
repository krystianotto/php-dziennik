import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const BUTTON_TYPE_EDIT = 'Edit';
const BUTTON_TYPE_SAVE = 'Save';
const BUTTON_TYPE_CANCEL = 'Cancel';

const UserSingleDetail = ({ fieldName, inputType, value, onClick }) => {
  const [inputValue, setInputValue] = useState(value);
  const [isEditMode, setIsEditMode] = useState(false);
  const inputRef = useRef();

  const handleButtonClick = (e) => {
    const { name } = e.target;

    if (name === BUTTON_TYPE_CANCEL) {
      setInputValue(value);
    }

    if (name === BUTTON_TYPE_EDIT || name === BUTTON_TYPE_CANCEL) {
      setIsEditMode((editMode) => !editMode);
      return;
    }

    onClick(fieldName, inputValue);
    setIsEditMode((editMode) => !editMode);
  };

  useEffect(() => {
    if (!inputRef.current || !isEditMode) return;

    inputRef.current.focus();
  }, [inputRef, isEditMode]);

  return (
    <div>
      <input
        disabled={!isEditMode}
        type={inputType}
        value={inputValue}
        ref={inputRef}
        onChange={({ target }) => setInputValue(target.value)}
        name={fieldName}
      />
      {!isEditMode && (
        <button name={BUTTON_TYPE_EDIT} onClick={handleButtonClick}>
          {BUTTON_TYPE_EDIT}
        </button>
      )}
      {isEditMode && (
        <button name={BUTTON_TYPE_SAVE} onClick={handleButtonClick}>
          {BUTTON_TYPE_SAVE}
        </button>
      )}
      {isEditMode && (
        <button name={BUTTON_TYPE_CANCEL} onClick={handleButtonClick}>
          {BUTTON_TYPE_CANCEL}
        </button>
      )}
    </div>
  );
};

UserSingleDetail.propTypes = {
  fieldName: PropTypes.string,
  inputType: PropTypes.string,
  value: PropTypes.string,
  onClick: PropTypes.func,
};

UserSingleDetail.defaultProps = {
  fieldName: '',
  inputType: 'text',
  value: '',
  onClick: () => {},
};

export default UserSingleDetail;
