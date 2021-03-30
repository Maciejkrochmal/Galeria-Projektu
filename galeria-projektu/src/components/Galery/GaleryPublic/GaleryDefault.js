import {React, useState} from "react";
import {useLocation} from 'react-router'
import {Carousel} from 'react-bootstrap'
import {BBP01, BBP02} from '../../Galery/GaleryPublic/GaleryData'
import authImg from "../../../assets/Katarzyna.jpg";

export function GaleryDefault() {
    const [index, setIndex] = useState(0);
    const location = useLocation();
    const getPath = location.pathname;
    switch (getPath) {
        case "/publiczne":
            // console.log(BBP01);
            break;
        case "/publiczne2":
            console.log('dziala2')
            break;
        case "/domowa":
            console.log(getPath)
            break;
        case "/apartamentowa":
            console.log(getPath);
            break;
    }

    const handleClick = (e) => {
        setIndex(+e.target.id)
    }
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };


    return (
        <>
            <div>

                <Carousel onSelect={handleSelect} activeIndex={index} nextLabel={null} prevLabel={null}>
                    {BBP01.map((el, index) => {
                        return <Carousel.Item>
                            <img
                                className="d-block w-100"
                                width={800}
                                height={600}
                                src={el}
                                alt={index}
                            />
                        </Carousel.Item>
                    })}

                </Carousel>
                <p>{index}</p>
            </div>
            <div>
                {BBP01.map((el, index) => {
                    return <img
                        width={200}
                        height={200}
                        className="mr-3"
                        src={el}
                        alt="Generic placeholder"
                        id={index}
                        onClick={handleClick}
                    />
                })}
            </div>
        </>
    )
}
