import { render, fireEvent } from '@testing-library/react';

import { Input } from "./Input";
import { useFormContext } from 'react-hook-form';

describe('Тесты инпута', () => {
  it('Рендер без необязательных пропсов', () => {
    const { getByTestId } = render(
      <Input
        id="Input"
        data-testid="test"
      />
    );
    const inputElement = getByTestId('test');
  
    expect(inputElement).toBeInTheDocument();
  })


  it('Рендер c пропсами', () => {
    const { getByPlaceholderText } = render(
      <Input
        id="Input"
        className='test'
        isDisabled
        placeholder="test"
      />
    );
    const inputElement = getByPlaceholderText('test');
  
    expect(inputElement).toBeInTheDocument();
  })

  it('Изменяется состояние при вводе текста', () => {
    const { getByPlaceholderText } = render(
      <Input
        id="Input"
        className='test'
        isDisabled
        placeholder="test"
      />
    );
    const inputElement = getByPlaceholderText('test') as HTMLInputElement;
  
    fireEvent.change(inputElement, {target: {value: '123'}})
    expect(inputElement.value).toBe('123')
  })
})