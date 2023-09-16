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
    icon: <AiOutlineSearch />,
    route: '/search',
    label: 'Search',
  },
  {
    icon: <AiOutlineHeart />,
    route: '/activity',
    label: 'Activity',
  },
  {
    icon: <IoCreateOutline />,
    route: '/create-post',
    label: 'Create Post',
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
  { value: 'threads', label: 'Threads', icon: '' },
  { value: 'replies', label: 'Replies', icon: '' },
  { value: 'tagged', label: 'Tagged', icon: '' },
];

export const communityTabs = [
  { value: 'threads', label: 'Threads', icon: '' },
  { value: 'members', label: 'Members', icon: '' },
  { value: 'requests', label: 'Requests', icon: '' },
];
