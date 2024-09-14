import React from "react";
import "../header/HeaderContainer.scss";

interface HeaderContainerProps {
  className: string;
  children: React.ReactNode;
}

export default function HeaderConteiner({ children, className }: HeaderContainerProps) {
  return (
    <header className={className}>
      <div className="header__conteiner">{children}</div>
    </header>
  );
}