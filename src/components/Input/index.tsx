import { useState } from 'react';

type Props = {
  placeholder: string;
  label: string;
};

const Input = ({ placeholder, label }: Props) => {
  const [value, setValue] = useState('');

  return (
    <div>
      <label className='pl-2'>{label}</label>
      <div>
        <input
          className='h-11 border-2 border-light-gray rounded-lg pl-2'
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></input>
      </div>
    </div>
  );
};

export default Input;
