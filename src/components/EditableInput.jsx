import React, { useCallback, useState } from 'react';
import { Input, InputGroup, Icon, Alert } from 'rsuite';

const EditableInput = ({
  initialValue,
  onSave,
  label = null,
  placeholder = 'Add your Nickname',
  emptyMsg = 'Input is empty',
  ...inputProps
}) => {
  const [input, setInput] = useState(initialValue);

  const onInputChange = useCallback(value => {
    setInput(value);
  }, []);

  const [isEditable, setIsEditable] = useState(false);

  const onEditClick = useCallback(() => {
    setIsEditable(p => !p);
    setInput(initialValue);
  }, [initialValue]);

  const onSaveClick = async () => {
    const trimmed = input.trim();
    if (trimmed === '') {
      Alert.info(emptyMsg, 4000);
    }

    if (trimmed !== initialValue) {
      await onSave(trimmed);
    }

    setIsEditable(false);
  };

  return (
    <div>
      {label}
      <InputGroup>
        <Input
          {...inputProps}
          placeholder={placeholder}
          onChange={onInputChange}
          value={input}
          disabled={!isEditable}
        />
        <InputGroup.Button onClick={onEditClick}>
          <Icon icon={isEditable ? 'close' : 'edit2'} />
        </InputGroup.Button>
        {isEditable && (
          <InputGroup.Button onClick={onSaveClick}>
            <Icon icon="check" />
          </InputGroup.Button>
        )}
      </InputGroup>
    </div>
  );
};

export default EditableInput;
