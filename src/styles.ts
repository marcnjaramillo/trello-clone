import styled from 'styled-components';

export const AppContainer = styled.div`
  align-items: flex-start;
  background-color: #3179ba;
  display: flex;
  flex-direction: row;
  height: 100%;
  padding: 20px;
  width: 100%;
`

interface DragPreviewContainerProps {
  isHidden?: boolean;
  isPreview?: boolean
}

export const DragPreviewContainer = styled.div<DragPreviewContainerProps>`
  transform: ${props => (props.isPreview ? 'rotate(5deg)' : undefined)};
  opacity: ${props => (props.isHidden ? 0 : 1)};
`

export const ColumnContainer = styled(DragPreviewContainer)`
  background-color: #ebecf0;
  border-radius: 3px;
  flex-grow: 0;
  flex-shrink: 0;
  margin-right: 20px;
  min-height: 40px;
  padding: 8px 8px;
  width: 300px;
`

export const ColumnTitle = styled.div`
  font-weight: bold;
  padding: 6px 16px 12px;
`

export const CardContainer = styled.div`
  background-color: #fff;
  border-radius: 3px;
  box-shadow: #091e4240 0px 1px 0px 0px;
  cursor: pointer;
  flex-grow: 0;
  margin-bottom: 0.5rem;
  max-width: 300px;
  padding: 0.5rem 1rem;
`

interface AddItemButtonProps {
  dark?: boolean
}

export const AddItemButton = styled.button<AddItemButtonProps>`
  background-color: #ffffff3d;
  border-radius: 3px;
  border: none;
  color: ${props => (props.dark ? '#000' : '#fff')};
  cursor: pointer;
  max-width: 300px;
  padding: 10px 12px;
  text-align: left;
  transition: background 85ms ease-in;
  width: 100%;
  &:hover {
    background-color: #ffffff52;
  }
`

export const NewItemFormContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  max-width: 300px;
  width: 100%;
`

export const NewItemButton = styled.div`
  background-color: #5aac44;
  border-radius: 3px;
  border: none;
  box-shadow: none;
  color: #fff;
  padding: 6px 12px;
  text-align: center;
`

export const NewItemInput = styled.input`
  border-radius: 3px;
  border: none;
  box-shadow: #091e4240 0px 1px 0px 0px;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  width: 100%
`

export const CustomDragLayerContainer = styled.div`
  height: 100%;
  left: 0;
  pointer-events: none;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
`