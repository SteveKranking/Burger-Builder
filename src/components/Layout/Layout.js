import React from 'react';

import Aux from '../../hoc/Aux';

const layout = (props) => (
    <>
    <div>Toolbar, Sidedrawer, Backdrop</div>
    <main>
        {props.children}
    </main>
    </>
);

export default layout;