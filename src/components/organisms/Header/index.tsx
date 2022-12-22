import BrandLogo from 'components/atoms/BrandLogo';
import SearchArea from 'components/molecules/SearchArea';
import SocialIconButtons from 'components/molecules/SocialIconButtons';

import './index.scss';

const Header = () => (
  <header>
    <div className="wrapper header white-bg mt-14 flex justify-between items-center">
      <BrandLogo className="grow" />
      <div className="mr-8">
        <SearchArea />
      </div>
      <SocialIconButtons />
    </div>
  </header>
);

export default Header;
