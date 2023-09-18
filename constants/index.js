import { AiOutlineHome, AiOutlineSearch, AiOutlineHeart } from 'react-icons/ai';
import { IoCreateOutline, IoPersonOutline } from 'react-icons/io5';
import { BsPeople } from 'react-icons/bs';

export const sidebarLinks = [
  {
    icon: <AiOutlineHome />,
    route: '/',
    label: 'Home',
  },
  {
    icon: <IoCreateOutline />,
    route: '/create-post',
    label: 'Create Post',
  },
  {
    icon: <AiOutlineSearch />,
    route: '/search',
    label: 'Search',
  },
  {
    icon: <BsPeople />,
    route: '/cohorts',
    label: 'Cohorts',
  },
  {
    icon: <IoPersonOutline />,
    route: '/profile',
    label: 'Profile',
  },
];

export const profileTabs = [
  { value: 'posts', label: 'Posts', icon: '' },
  { value: 'replies', label: 'Replies', icon: '' },
  { value: 'tagged', label: 'Tagged', icon: '' },
];

