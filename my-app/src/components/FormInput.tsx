import React from 'react';
import { FormInputProps } from '../utils/interface';



export const FormInput: React.FC<FormInputProps> = ({ label, type, value, onChange,required }) => (
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2">{label}:</label>
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      type={type}
      value={value}
      onChange={onChange}
      required={required}
    />
  </div>
);