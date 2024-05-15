import React from 'react';

const sections = [
  { id: 1, title: 'Section 1', content: 'Content for Section 1' },
  { id: 2, title: 'Section 2', content: 'Content for Section 2' },
  { id: 3, title: 'Section 3', content: 'Content for Section 3' },
];

const Main = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {sections.map(section => (
          <div key={section.id} className="bg-white p-4 rounded-lg shadow-md hover:bg-gray-200">
            <p className="text-blue-500">{section.title}</p>
            <p className="mt-2">{section.content}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Main;
