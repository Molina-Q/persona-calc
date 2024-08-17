import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

type Props = {}

export default function BackArrow({ }: Props) {

    return (
        <Link className='backarrow' to='/'>
            <FaArrowLeft />
        </Link>
    )
}