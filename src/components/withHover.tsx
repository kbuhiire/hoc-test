import React, {  ComponentType, useState } from "react";

interface Props {
  [key: string]: any;
  textColor: string;
  textHover: boolean;
}
const withHover = (WrappedComponent: ComponentType<Props>) => {
  const WithHoverComponent = () => {
    const [textColor, setTextColor] = useState<string>("#F93");
    const [textHover, setTextHover] = useState<boolean>(false);

    return <WrappedComponent 
    textColor={textColor} 
    textHover={textHover}
    onMouseLeave={() => setTextHover(false)}
    onMouseOver={() => setTextHover(true)}
    onClick={() => setTextColor('#BEF')}
    />;
  };
  return WithHoverComponent;
};

export default withHover