import { BiSearchAlt } from 'react-icons/bi';
import { Modal } from 'antd';
import { useState } from 'react';

export default function SearchArea() {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const showModal = () => {
    setIsOpenModal(true);
  };

  const hideModal = () => {
    setIsOpenModal(false);
  };

  return (
    <div>
      <BiSearchAlt size={20} onClick={showModal} className="cursor-pointer" />

      <Modal title="Basic Modal" open={isOpenModal} onCancel={hideModal} footer={[]}>
        <p>Some ...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
}
