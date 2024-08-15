import { FaArrowLeft } from 'react-icons/fa';

type Props = {}

export default function BackArrow({ }: Props) {

    return (
        <a className='backarrow' href='/'>
            <FaArrowLeft />
        </a>
    )
}