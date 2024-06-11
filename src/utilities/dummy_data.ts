import { IUserData } from '../interface/IUserData.interface';

export const dummyUserData: IUserData[] = [
  {
    id: 1,
    name: 'John Doe',
    organization: 'ABC Company',
    contactInfo: 'john.doe@example.com',
    imagePath: 'user3.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    organization: 'XYZ Corporation',
    contactInfo: 'jane.smith@example.com',
    imagePath: 'user4.jpg',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',
  },
  {
    id: 3,
    name: 'Alice Johnson',
    organization: '123 Industries',
    contactInfo: 'alice.johnson@example.com',
    imagePath: 'user5.jpg',
    description:
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
  },
  {
    id: 4,
    name: 'Bob Williams',
    organization: '456 Enterprises',
    contactInfo: 'bob.williams@example.com',
    imagePath: 'user6.png',
    description:
      'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.',
  },
];
