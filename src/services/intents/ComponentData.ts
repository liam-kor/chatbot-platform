export interface ComponentDataModel {
  id: number;
  code: string;
}

export interface ComponentData {
  header?: ListItemData;
  listItemData?: ListItemData[];
  text?: string;
}

interface ListItemData {
  title?: string;
  description?: string;
  imageUrl: string;
}

export const getComponentData = (componentDataCode: string): ComponentData => {
  if (componentDataCode === 'game:have_a_meal:practice:menu_list') {
    return {
      header: {
        imageUrl:
          'https://pgnqdrjultom1827145.cdn.ntruss.com/img/7f/a2/7fa25e94ce0262f82418e9d2f9a3f576dc87dc3907ab2e2dd5c614a33c764e5f_v1.jpg',
      },
      listItemData: [
        {
          title: '떡볶이',
          description: '3000원',
          imageUrl:
            'https://pgnqdrjultom1827145.cdn.ntruss.com/img/7f/a2/7fa25e94ce0262f82418e9d2f9a3f576dc87dc3907ab2e2dd5c614a33c764e5f_v1.jpg',
        },
        {
          title: '찐만두',
          description: '4000원',
          imageUrl:
            'https://pgnqdrjultom1827145.cdn.ntruss.com/img/7f/a2/7fa25e94ce0262f82418e9d2f9a3f576dc87dc3907ab2e2dd5c614a33c764e5f_v1.jpg',
        },
      ],
    };
  } else if (componentDataCode === 'game:have_a_meal:practice:question') {
    return {
      text: '질문 내용',
    };
  } else {
    //
  }
};
