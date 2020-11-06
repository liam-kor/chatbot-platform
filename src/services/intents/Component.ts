import {
  ComponentData,
  ComponentDataModel,
  getComponentData,
} from './ComponentData';

export interface ComponentModel {
  id: number;
  text: string;
  kakaoiType: string;
  imageUrl: string;
  componentDataId: number;
  ComponentData: ComponentDataModel;
}

export interface Component {
  text: string;
  kakaoiType: string;
  imageUrl: string;
  componentData?: ComponentData;
}

export const createComponents = (
  componentModels: ComponentModel[],
): Component[] => {
  const components = [];
  for (const componentModel of componentModels) {
    components.push(createComponent(componentModel));
  }
  return components;
};

const createComponent = (componentModel: ComponentModel): Component => {
  console.log(componentModel.ComponentData);
  if (componentModel.ComponentData) {
    return {
      text: componentModel.text,
      kakaoiType: componentModel.kakaoiType,
      imageUrl: componentModel.imageUrl,
      componentData: getComponentData(componentModel.ComponentData.code),
    };
  } else {
    return {
      text: componentModel.text,
      kakaoiType: componentModel.kakaoiType,
      imageUrl: componentModel.imageUrl,
    };
  }
};
