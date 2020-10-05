import React, { InputHTMLAttributes } from 'react';
import { WidgetDiv } from './styles';

interface DivProps extends InputHTMLAttributes<HTMLDialogElement> {
  title: string;
  className?: string;
}


const WidgetComp: React.FC<DivProps> = ({ title, className, ...rest }) => {
  return (
    <WidgetDiv
      className={className}
      title={title}
    >
      <div className="header">
        <h1>{title}</h1>
      </div>
      <ul>
        <li>
          <div className="profile">
            <div className="assunto">
              <span>eventos · Bombando</span>
              <strong>Workshop Integrativo</strong>
              <span>100k pius</span>
              <span></span>
            </div>
          </div>
        </li>
        <li>
          <div className="profile">
            <div className="assunto">
              <span>esportes · Ontem</span>
              <strong>Messi</strong>
              <span>500k pius</span>
              <span></span>
            </div>
          </div>
        </li>
        <li>
          <div className="profile last">
            <div className="assunto">
              <span>negócios · Bombando</span>
              <strong>Jeff Bezos</strong>
              <span>50k pius</span>
              <span></span>
            </div>
          </div>
        </li>
      </ul>
    </WidgetDiv>
  );
};

export default WidgetComp