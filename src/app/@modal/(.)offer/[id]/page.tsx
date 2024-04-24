import {Modal} from '~/components/molecules/Modal';
import OfferDetailsModal from '~/components/molecules/OfferComponents/OfferDetailsModal';

const Page = ({params: {id}}: {params: {id: string}}) => {
  return (
    <Modal className="m-0 w-full">
      <OfferDetailsModal id={id} />
    </Modal>
  );
};

export default Page;
