import { FaFacebookF, FaYoutube, FaTiktok, FaLinkedin } from 'react-icons/fa';

import SocialIconButton from 'components/atoms/SocialIconButton';

export default function SocialIconButtons() {
  return (
    <div className="flex gap-5">
      <SocialIconButton socialIcon={<FaFacebookF color="#1973ec" size={22} />} />
      <SocialIconButton socialIcon={<FaYoutube color="#fe0100" size={22} />} />
      <SocialIconButton socialIcon={<FaTiktok color="#000000" size={22} />} />
      <SocialIconButton socialIcon={<FaLinkedin color="#0474b1" size={22} />} />
    </div>
  );
}
