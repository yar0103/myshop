import { useState } from 'react';

const Sample = () => {
  const [names, setNames] = useState([
    { id: 1, text: '눈' },
    { id: 2, text: '코' },
    { id: 3, text: '귀' },
    { id: 4, text: '입' },
  ]);

  const [inputValue, setInputValue] = useState('');
  const [nextId, setNextId] = useState(5);

  const onChange = (e) => setInputValue(e.target.value);
  const onClick = () => {
    const nextNames = names.concat({
      id: nextId,
      text: inputValue,
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputValue('');
  };

  const onRemove = (id) => {
    const nextNames = names.filter((name) => {
      return name.id !== id;
    });
    setNames(nextNames);
  };

  const sampleList = names.map((name) => {
    return (
      <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
        {name.text}
      </li>
    );
  });
  return (
    <>
      <input value={inputValue} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{sampleList}</ul>
    </>
  );
};

export default Sample;
