import React from 'react';

interface HeaderProps {
  title: string;
  count: number;
}

const Header: React.FC<HeaderProps> = ({ title, count }) => {
  return (
    <header className="py-4 px-6">
      <p className="text-[22px] font-medium">
        {title}{' '}
        <span className="text-gray-400">{count}</span>
      </p>
    </header>
  );
};

export default Header;
