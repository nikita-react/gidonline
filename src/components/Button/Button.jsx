import React from 'react';
import Button from './styled';
export default function ButtonComponent({
  width,
  height,
  fontSize,
  title,
  backgroundColor,
}) {
  return (
    <>
      <Button
        height={height}
        width={width}
        backgroundColor={backgroundColor}
        fontSize={fontSize}
      >
        {title}
      </Button>
    </>
  );
}
