import React, { useState } from 'react';

type Props = {
  placeholder?: string;
};

const TextArea: React.FC<Props> = ({ placeholder }) => {
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <textarea
        className="w-full h-[382px] border-2 border-light-gray rounded-lg p-2 resize-none"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default TextArea;
