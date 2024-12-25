import React from 'react';
import Image from 'next/image';
import { bandsS10 } from './bandChoices';

interface ImageDivProps {
	src?: string;
	face?: string;
	sidesrc?: string;
}

const ImageDiv: React.FC<ImageDivProps> = ({src,face,sidesrc}) => {
	return (
		<div
			// ref = {imgDivRef} 
			aria-hidden="false"
			role="img"
			className="relative max-w-[500px] w-[52vh] h-[53vh] text-center scroll-img scale-100"
			style={{marginInlineStart:"-94px"}}
		>
			{
				src&&
				<Image
					// ref={imgband}
					aria-hidden="true"
					className="absolute w-[52vh] max-w-[500px] h-auto"
					src={src||bandsS10[36].src}
					alt="alt"
					style={{display:"block"}}
					width={500}
					height={500}
				/>
			}{
				face&&
				<Image
					// ref={imgcase}
					aria-hidden="true"
					className="absolute w-[52vh] max-w-[500px] h-auto"
					src={face}
					alt="alt"
					style={{display:"block"}}
					width={500}
					height={500}
				/>
			}
			{
				sidesrc&&
				<Image
					// ref={imgside}
					aria-hidden="true"
					className="absolute w-[52vh] max-w-[500px] h-auto"
					src={sidesrc||bandsS10[36].sidesrc}
					alt="alt"
					style={{display:"none"}}
					width={500}
					height={500}
				/>
			}
		</div>
	);
};

export default ImageDiv;