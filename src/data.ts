export interface Item {
  name: string;
  uId: string;
  children: Item[];
}

export const DEMO_DATA: Item[] = [
  {
    uId: '0',
    name: 'Group 1',
    children: [
      {
        uId: '1',
        name: 'Group 1 - 1',
        children: [
          {
            uId: '2',
            name: 'Group 1 - 1 -1',
            children: []
          }
        ]
      }
    ]
  },
  {
    uId: '3',
    name: 'Group 2',
    children: []
  },
  {
    uId: '4',
    name: 'Group 3',
    children: []
  }
];
