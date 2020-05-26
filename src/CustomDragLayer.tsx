import React, { CSSProperties, FC } from 'react';
import { XYCoord, useDragLayer } from 'react-dnd';
import { Column } from './Column';
import { CustomDragLayerContainer } from './styles';

function getItemStyles(currentOffset: XYCoord | null): CSSProperties {
  if (!currentOffset) {
    return {
      display: 'none'
    }
  }

  const { x, y } = currentOffset

  const transform = `translate(${x}px, ${y}px)`
  return {
    transform,
    WebkitTransform: transform
  }
}

const CustomDragLayer: FC = () => {
  const { isDragging, item, currentOffset } = useDragLayer(monitor => ({
    item: monitor.getItem(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging()
  }))

  if (!isDragging) {
    return null
  }

  return (
    <CustomDragLayerContainer>
      <div style={getItemStyles(currentOffset)}>
        <Column
          id={item.id}
          text={item.text}
          index={item.index}
          isPreview={true}
        />
      </div>
    </CustomDragLayerContainer>
  )
}

export default CustomDragLayer;
