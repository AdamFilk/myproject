import Image from 'next/image';
import profileImage from '@/assets/images/profile.jpeg';

export default function ProfileAvatar() {
  return (
    <Image
      src={profileImage}
      alt="profile-image"
      className="mb-3 ml-3 h-auto w-52 rounded-full transition-transform duration-150 ease-in-out hover:scale-110 sm:mx-auto"
    />
  );
}
