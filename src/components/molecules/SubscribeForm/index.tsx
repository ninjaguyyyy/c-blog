import SubscribeImg from 'assets/images/subscribe-decoration.png';
import IncludeSubmitTextInputField from 'components/molecules/IncludeSubmitTextInputField';

export default function SubscribeForm() {
  return (
    <div className="relative">
      <img
        src={SubscribeImg}
        alt="subscribe"
        width={120}
        height={120}
        className="absolute left-[-100px] top-[-50px] z-10 xs:left-[-20px] xs:top-[-60px] xs:w-[100px]"
      />
      <IncludeSubmitTextInputField />
      <p className="font-light text-sm text-center mt-4 px-12 xs:text-xs">
        Subscribe to our email newsletter and unlock access to <strong>members-only</strong> content
        and <strong>exclusive</strong> updates.
      </p>
    </div>
  );
}
