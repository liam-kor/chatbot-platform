export interface ComponentModel {
  id: number;
  text: string;
  kakaoiType: string;
  imageUrl: string;
}

export interface Component {
  text: string;
  kakaoiType: string;
  imageUrl: string;
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
  return {
    text: componentModel.text,
    kakaoiType: componentModel.kakaoiType,
    imageUrl: componentModel.imageUrl,
  };
};
