import React from 'react';
import BodyRus from '../../components/rus/Body';
import FooterRus from '../../components/rus/Footer';
// import LaoderRus from '../../components/rus/Laoder';
import NavbarRus from '../../components/rus/Navbar';

const Rus = () => {
    return (
        <div>
            <NavbarRus />
            <BodyRus />
            <FooterRus />
            {/* <LaoderRus /> */}
        </div>
    );
};

export default Rus;