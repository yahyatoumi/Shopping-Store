import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { FaStarHalfAlt } from 'react-icons/fa';

const RatingStarts = ({ rate }: { rate: number }) => {
    const stars = [];
    const floor = Math.floor(rate);
    for (let i = 0; i < 5; i++) {
        if (i < floor) {
            stars.push(<AiFillStar key={i} className='start-icon'/>);
        }else if((rate - i) * 10 % 10 >= 5){
            stars.push(<FaStarHalfAlt key={i} className='start-icon' />);
        } else {
            stars.push(<AiOutlineStar key={i} className='start-icon'/>);
        }
    }
    return <>
        {stars}
    </>
} 

export default RatingStarts;